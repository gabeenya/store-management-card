/* =================== THEME =================== */
function applyThemeIcon(){
  const btn = document.getElementById('themeToggle');
  if(!btn) return;
  const t = document.documentElement.getAttribute('data-theme');
  btn.textContent = t==='light' ? '🌙' : '☀️';
}
function toggleTheme(){
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur==='light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  applyThemeIcon();
}

/* =================== SUPABASE CONNECTION =================== */
// Supabase 프로젝트 Settings → API 에서 두 값을 확인해 아래에 채워넣으세요.
const SUPABASE_URL = 'https://rcytuzdqotbdgedhxete.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjeXR1emRxb3RiZGdlZGh4ZXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxMTU0MjAsImV4cCI6MjEwMjY5MTQyMH0.6QMwUVTU3dntguxGvd6NrCLsoi_arVVX1-Exv--x2t4';
const DB_CONFIGURED = !SUPABASE_URL.includes('YOUR-PROJECT-REF');

let supabaseClient = null;
if (DB_CONFIGURED && window.supabase) {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

function rowToStore(r){
  return {
    id: r.id, name: r.name, brand: r.brand, code: r.code, address: r.address, manager: r.manager,
    territory: r.territory, revenueMethod: r.revenue_method, revenueAchievement: r.revenue_achievement,
    contractDefect: r.contract_defect, unpaidStatus: r.unpaid_status, hygiene: r.hygiene, etc: r.etc
  };
}
function storeToRow(s){
  return {
    name: s.name, brand: s.brand, code: s.code, address: s.address, manager: s.manager,
    territory: s.territory, revenue_method: s.revenueMethod, revenue_achievement: s.revenueAchievement,
    contract_defect: s.contractDefect, unpaid_status: s.unpaidStatus, hygiene: s.hygiene, etc: s.etc,
    updated_at: new Date().toISOString()
  };
}
function setDbStatus(text, ok){
  const el = document.getElementById('dbStatus');
  if(!el) return;
  el.innerHTML = `<span style="width:6px;height:6px;border-radius:50%;background:${ok?'var(--safe)':'var(--text-3)'};display:inline-block;"></span><span style="color:var(--text-3);">${text}</span>`;
}

// 매장 항목 저장 시 Supabase에도 반영 (연동 안 된 경우 로컬 상태만 갱신됨)
async function persistStore(s){
  if(!supabaseClient) return;
  const { error } = await supabaseClient.from('stores').update(storeToRow(s)).eq('id', s.id);
  if(error){ console.error('Supabase 저장 실패:', error.message); setDbStatus('저장 실패 — 콘솔 확인', false); }
}

async function loadFromSupabase(){
  if(!supabaseClient){ setDbStatus('로컬 모드 (DB 미연결)', false); return; }
  setDbStatus('DB에서 불러오는 중…', false);
  const { data, error } = await supabaseClient.from('stores').select('*').order('id');
  if(error || !data || data.length===0){
    console.error('Supabase 로드 실패, 로컬 데이터 사용:', error && error.message);
    setDbStatus('DB 로드 실패 — 로컬 데이터 표시 중', false);
    return;
  }
  stores = data.map(rowToStore);
  renderBrandFilter(); renderRoster(); renderMain();
  setDbStatus(`DB 연결됨 · ${stores.length}개 매장`, true);
}

let currentId = null;
let activeBrand = '전체';
let issueFeedPage = 1;
const ISSUES_PER_PAGE = 10;
let dangerPage = 1;
const DANGER_PER_PAGE = 5;
let gradeView = null;
let gradeViewPage = 1;
const GRADE_VIEW_PER_PAGE = 10;
let showUpload = false;
let uploadState = { fileName: null, parsed: null, applying: false, result: null };

/* =================== HELPERS =================== */
function daysBetween(a, b){ return Math.round((new Date(b) - new Date(a)) / 86400000); }
function statusLevel(cat, s){
  switch(cat){
    case 'territory':
      if(s.territory.status==='미입력') return 'neutral';
      return s.territory.status==='정상설정' ? 'safe' : s.territory.status==='분쟁중' ? 'warn' : 'danger';
    case 'method':
      if(s.revenueMethod.status==='미입력') return 'neutral';
      return s.revenueMethod.status==='정합성확인됨' ? 'safe' : s.revenueMethod.status==='재검토필요' ? 'warn' : 'danger';
    case 'achieve':
      if(s.revenueAchievement.ratio===null || s.revenueAchievement.ratio===undefined) return 'neutral';
      return s.revenueAchievement.ratio>=90 ? 'safe' : s.revenueAchievement.ratio>=70 ? 'warn' : 'danger';
    case 'contract':
      if(s.contractDefect.status==='미입력') return 'neutral';
      return !s.contractDefect.hasDefect ? 'safe' : s.contractDefect.status==='해결완료' ? 'safe' : s.contractDefect.status==='처리중' ? 'warn' : 'danger';
    case 'unpaid':
      if(!s.unpaidStatus.hasUnpaid) return 'safe';
      return daysBetween(s.unpaidStatus.occurredDate, today())<=30 ? 'warn' : 'danger';
    case 'hygiene':
      if(s.hygiene.result==='미입력') return 'neutral';
      return s.hygiene.result==='적합' ? 'safe' : s.hygiene.result==='시정요구' ? 'warn' : s.hygiene.result==='점검예정' ? 'safe' : 'danger';
  }
}
function levelScore(l){ return l==='safe'?100:l==='warn'?60:l==='danger'?20:null; }
function computeOVR(s){
  const cats=['territory','method','achieve','contract','unpaid','hygiene'];
  const scores = cats.map(c=>levelScore(statusLevel(c,s))).filter(v=>v!==null);
  if(scores.length===0) return null;
  return Math.round(scores.reduce((a,b)=>a+b,0)/scores.length);
}
function grade(score){
  if(score===null) return {g:'–', ring:['var(--neutral)','var(--neutral-dim)']};
  if(score>73) return {g:'A', ring:['var(--green-1)','var(--green-2)']};
  if(score>53) return {g:'B', ring:['var(--blue-1)','var(--blue-2)']};
  if(score>40) return {g:'C', ring:['var(--orange-1)','var(--orange-2)']};
  if(score>20) return {g:'D', ring:['var(--danger)','#7a2530']};
  return {g:'F', ring:['var(--f-1)','var(--f-2)']};
}
function overallLevel(score){ if(score===null) return 'neutral'; return score>73?'safe':score>40?'warn':'danger'; }
function statusLabel(l){ return l==='safe'?'양호':l==='warn'?'주의':l==='danger'?'위험':'미입력'; }

/* =================== ISSUE AGGREGATION =================== */
const ISSUE_CATS = ['territory','method','achieve','contract','unpaid','hygiene'];
function categoryLabel(cat){
  return {territory:'영업지역', method:'매출산정', achieve:'매출달성', contract:'계약하자', unpaid:'미입금', hygiene:'위생점검'}[cat];
}
function issueDetail(cat, s, level){
  const numCls = `risk-num ${level}`;
  switch(cat){
    case 'territory': return s.territory.noteType==='직접입력' ? (s.territory.noteText||s.territory.status) : (s.territory.noteType||s.territory.status);
    case 'method': return s.revenueMethod.status;
    case 'achieve': return s.revenueAchievement.ratio===null ? '데이터 없음' : `달성률 <span class="${numCls}">${s.revenueAchievement.ratio}%</span>`;
    case 'contract': return (s.contractDefect.detailType==='기타' ? s.contractDefect.detailText : s.contractDefect.detailType) + ' · ' + s.contractDefect.status;
    case 'unpaid': return s.unpaidStatus.hasUnpaid ? (s.unpaidStatus.note || '미입금 발생') : '';
    case 'hygiene': return s.hygiene.specialNote || s.hygiene.result;
  }
}
function issueMetric(cat, s){
  switch(cat){
    case 'territory': return { dateVal:s.territory.setDate, dateLabel:'설정일', amount:null };
    case 'method': return { dateVal:s.revenueMethod.calcDate, dateLabel:'산정일', amount:s.revenueMethod.estimatedAmount };
    case 'achieve': return { dateVal:s.revenueAchievement.periodEnd, dateLabel:'기간종료', amount:s.revenueAchievement.targetAmount };
    case 'contract': return { dateVal:null, dateLabel:null, amount:null };
    case 'unpaid': return { dateVal: s.unpaidStatus.hasUnpaid ? s.unpaidStatus.occurredDate : null, dateLabel:'발생일자', amount: s.unpaidStatus.hasUnpaid ? s.unpaidStatus.amount : null };
    case 'hygiene': return { dateVal:s.hygiene.lastCheckDate, dateLabel:'최근점검일', amount:null };
  }
}
function collectIssues(list){
  const issues = [];
  list.forEach(s=>{
    ISSUE_CATS.forEach(cat=>{
      const level = statusLevel(cat, s);
      if(level==='danger' || level==='warn'){
        const metric = issueMetric(cat, s);
        const rawDays = (metric.dateVal && metric.dateVal!=='-') ? daysBetween(metric.dateVal, today()) : null;
        const days = (rawDays!==null && rawDays>=0) ? rawDays : null;
        const amount = (metric.amount && metric.amount!=='0') ? metric.amount : null;
        issues.push({ store:s, cat, level, label:categoryLabel(cat), detail:issueDetail(cat,s,level), days, amount, dateLabel:metric.dateLabel });
      }
    });
  });

  // 카테고리별로 라운드로빈 인터리브 — 특정 항목(예: 미입금)이 피드 상위를 독점하지 않도록 다양성 확보
  function interleaveByCategory(arr){
    const byCat = {};
    ISSUE_CATS.forEach(c=>{ byCat[c] = []; });
    arr.forEach(iss=>byCat[iss.cat].push(iss));
    ISSUE_CATS.forEach(c=>{ byCat[c].sort((a,b)=>(b.days??-1)-(a.days??-1)); });
    const result = [];
    let added = true;
    while(added){
      added = false;
      ISSUE_CATS.forEach(c=>{
        if(byCat[c].length){ result.push(byCat[c].shift()); added = true; }
      });
    }
    return result;
  }

  const dangerIssues = interleaveByCategory(issues.filter(i=>i.level==='danger'));
  const warnIssues = interleaveByCategory(issues.filter(i=>i.level==='warn'));
  return [...dangerIssues, ...warnIssues];
}
function hexToRgba(hex, alpha){
  const h = hex.replace('#','');
  const r = parseInt(h.substring(0,2),16), g = parseInt(h.substring(2,4),16), b = parseInt(h.substring(4,6),16);
  return `rgba(${r},${g},${b},${alpha})`;
}
function buildHeatmap(list, brands){
  return ISSUE_CATS.map(cat=>{
    const cells = brands.map(b=>{
      const inBrand = list.filter(s=>s.brand===b);
      const dangerCount = inBrand.filter(s=>statusLevel(cat,s)==='danger').length;
      const warnCount = inBrand.filter(s=>statusLevel(cat,s)==='warn').length;
      return { brand:b, dangerCount, warnCount, total:inBrand.length };
    });
    return { cat, cells };
  });
}

/* =================== ROSTER =================== */
function renderBrandFilter(){
  const brands = ['전체', ...new Set(stores.map(s=>s.brand))];
  document.getElementById('brandFilter').innerHTML = brands.map(b=>
    `<div class="chip ${b===activeBrand?'active':''}" onclick="setBrand('${b}')">${b}</div>`
  ).join('');
}
function setBrand(b){ activeBrand=b; renderBrandFilter(); renderRoster(); }

function renderRoster(){
  const q = (document.getElementById('searchInput').value||'').trim().toLowerCase();
  const list = stores.filter(s=>{
    const matchBrand = activeBrand==='전체' || s.brand===activeBrand;
    const matchQ = !q || s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q);
    return matchBrand && matchQ;
  });
  document.getElementById('rosterCount').textContent = `총 ${stores.length}개 매장 · ${list.length}개 표시 중`;
  document.getElementById('rosterList').innerHTML = list.map(s=>{
    const score = computeOVR(s);
    const gr = grade(score);
    const isActive = s.id===currentId;
    const activeStyle = isActive ? ` style="border-left-color:${gr.ring[0]}; box-shadow:inset 0 0 0 1px color-mix(in srgb, ${gr.ring[0]} 22%, transparent);"` : '';
    return `<div class="roster-item ${isActive?'active':''}"${activeStyle} onclick="selectStore('${s.id}')">
      <div class="r-dot" style="background:${gr.ring[0]}; box-shadow:0 0 6px ${gr.ring[0]};"></div>
      <div class="r-info">
        <div class="r-name">${s.name}</div>
        <div class="r-brand">${s.brand} · ${s.code}</div>
      </div>
      <div class="r-ovr num" style="color:${gr.ring[0]}; border:1px solid color-mix(in srgb, ${gr.ring[0]} 32%, transparent); background:color-mix(in srgb, ${gr.ring[0]} 13%, transparent);">${score===null?'–':score}</div>
    </div>`;
  }).join('') || `<div style="padding:20px; color:var(--text-3); font-size:12.5px; text-align:center;">검색 결과가 없습니다</div>`;
}
function selectStore(id){ currentId=id; showUpload=false; renderRoster(); renderMain(); }
function goDashboard(){ currentId=null; gradeView=null; showUpload=false; issueFeedPage=1; dangerPage=1; renderRoster(); renderMain(); }
function goIssuePage(p){ issueFeedPage=p; renderDashboard(); }
function goDangerPage(p){ dangerPage=p; renderDashboard(); }
function goGradeView(g){ gradeView=g; gradeViewPage=1; currentId=null; showUpload=false; renderRoster(); renderMain(); }
function goGradeViewPage(p){ gradeViewPage=p; renderMain(); }
function goUpload(){
  showUpload=true; currentId=null; gradeView=null;
  uploadState = { fileName: null, parsed: null, applying: false, result: null };
  renderRoster(); renderMain();
}
document.getElementById('searchInput').addEventListener('input', renderRoster);

/* =================== MAIN CARD =================== */
function trendBars(trend, lvl){
  const max = Math.max(...trend, 1);
  return `<div class="trend-bars">${trend.map(v=>`<div class="b ${lvl}" style="height:${Math.max((v/max)*100,6)}%"></div>`).join('')}</div>`;
}

function statCard({num, title, level, statusText, rows, extra, formId}){
  return `<div class="stat-card ${level}">
    <div class="sc-top">
      <div>
        <div class="sc-num">${num}</div>
        <div class="sc-title">${title}</div>
      </div>
      <div style="display:flex; align-items:center; gap:6px;">
        <div class="sc-status ${level}">${statusText}</div>
        <button class="edit-btn" onclick="toggleEdit('${formId}')" title="수정">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
        </button>
      </div>
    </div>
    <div class="sc-body">${rows.map(r=>`<div class="row"><span class="k">${r.k}</span><span class="v${r.risk?(' risk-'+r.risk):''}">${r.v}</span></div>`).join('')}</div>
    ${extra||''}
  </div>`;
}

function toggleEdit(id){
  const el = document.getElementById(id);
  el.classList.toggle('open');
}
function condStyle(val, match){ return val===match ? '' : 'display:none;'; }

function renderPager(current, total, fnName){
  if(total<=1) return '';
  fnName = fnName || 'goIssuePage';
  const pages = [];
  const add = p=>{ if(p>=1 && p<=total && !pages.includes(p)) pages.push(p); };
  add(1); add(total);
  for(let p=current-1; p<=current+1; p++) add(p);
  pages.sort((a,b)=>a-b);
  let html = '<div class="pager">';
  html += `<button class="pg-btn" ${current<=1?'disabled':''} onclick="${fnName}(${current-1})">‹</button>`;
  let prev = 0;
  pages.forEach(p=>{
    if(prev && p-prev>1) html += `<span class="pg-ellipsis">…</span>`;
    html += `<button class="pg-btn ${p===current?'active':''}" onclick="${fnName}(${p})">${p}</button>`;
    prev = p;
  });
  html += `<button class="pg-btn" ${current>=total?'disabled':''} onclick="${fnName}(${current+1})">›</button>`;
  html += '</div>';
  return html;
}

/* =================== DASHBOARD =================== */
function renderDashboard(){
  const graded = stores.map(s=>({s, score:computeOVR(s)}));
  const buckets = {A:0, B:0, C:0, D:0, F:0};
  graded.forEach(({score})=>{ const g=grade(score).g; if(buckets[g]!==undefined) buckets[g]++; });
  const dangerGraded = graded.filter(({score})=>{ const g=grade(score).g; return g==='D' || g==='F'; }).sort((a,b)=>(a.score??0)-(b.score??0));
  const totalDangerPages = Math.max(1, Math.ceil(dangerGraded.length / DANGER_PER_PAGE));
  if(dangerPage > totalDangerPages) dangerPage = totalDangerPages;
  if(dangerPage < 1) dangerPage = 1;
  const dangerPageStart = (dangerPage-1) * DANGER_PER_PAGE;
  const dangerList = dangerGraded.slice(dangerPageStart, dangerPageStart + DANGER_PER_PAGE);
  const brands = [...new Set(stores.map(s=>s.brand))];
  const brandStats = brands.map(b=>{
    const inBrand = graded.filter(({s})=>s.brand===b);
    const scored = inBrand.map(x=>x.score).filter(v=>v!==null);
    const avg = scored.length ? Math.round(scored.reduce((a,v)=>a+v,0)/scored.length) : null;
    return {brand:b, count:inBrand.length, avg};
  }).sort((a,b)=>b.count-a.count);

  const dangerIssueCount = collectIssues(stores).filter(i=>i.level==='danger').length;
  // 전체 위험/주의 항목 피드는 위험(D등급) 매장의 이슈만 표시
  const feedIssuesAll = collectIssues(dangerGraded.map(x=>x.s));
  const totalIssuePages = Math.max(1, Math.ceil(feedIssuesAll.length / ISSUES_PER_PAGE));
  if(issueFeedPage > totalIssuePages) issueFeedPage = totalIssuePages;
  if(issueFeedPage < 1) issueFeedPage = 1;
  const pageStart = (issueFeedPage-1) * ISSUES_PER_PAGE;
  const feedIssues = feedIssuesAll.slice(pageStart, pageStart + ISSUES_PER_PAGE);
  const heatmap = buildHeatmap(stores, brands);

  document.getElementById('main').innerHTML = `
    <div class="dash-head">
      <div class="eyebrow" style="font-size:10.5px; letter-spacing:.14em; color:var(--text-3); text-transform:uppercase; font-weight:600;">외식BG · RO실 · 전체 현황</div>
      <h2>전체 매장 현황</h2>
      <div class="sub">${stores.length}개 매장 · ${brands.length}개 브랜드 · 위험 항목 ${dangerIssueCount}건</div>
    </div>

    <div class="grade-pills">
      ${['A','B','C','D','F'].map(g=>{
        const ring = grade(g==='A'?85:g==='B'?65:g==='C'?47:g==='D'?30:10).ring;
        return `<div class="grade-pill" onclick="goGradeView('${g}')" style="cursor:pointer;"><div class="g num" style="color:${ring[0]};">${g}</div><div class="c">${buckets[g]}개</div></div>`;
      }).join('')}
    </div>

    <div class="dash-panel dash-panel--danger">
      <div class="dash-panel-title">⚠ 전체 위험/주의항목 <span class="cnt">${feedIssuesAll.length}</span>건</div>
      ${feedIssues.length ? `
      <div class="issue-feed-wrap">
        <div class="issue-feed-table">
          <div class="issue-feed-head">
            <div>이슈유형</div><div>매장</div><div>상세내용</div><div class="ir-col-num">경과일자</div><div class="ir-col-num">금액</div>
          </div>
          ${feedIssues.map(iss=>`
          <div class="issue-row" onclick="selectStore('${iss.store.id}')">
            <span class="issue-tag ${iss.level}">${iss.label}</span>
            <div class="ir-store">${iss.store.name}<span class="ir-brand">${iss.store.brand}</span></div>
            <div class="ir-detail">${iss.detail}</div>
            <div class="ir-days ${iss.level}">${iss.days!==null ? `${iss.days}일` : '<span class="ir-dash">–</span>'}</div>
            <div class="ir-amount">${iss.amount ? iss.amount : '<span class="ir-dash">–</span>'}</div>
          </div>`).join('')}
        </div>
      </div>` : `<div class="empty-note">현재 주의/위험 항목이 없습니다.</div>`}
      ${renderPager(issueFeedPage, totalIssuePages)}
    </div>

    <div class="dash-panel dash-panel--danger">
      <div class="dash-panel-title">⚠ 위험(D·F) 매장 <span class="cnt">${dangerGraded.length}</span>개</div>
      ${dangerList.length ? dangerList.map(({s,score})=>{
        const tags = ISSUE_CATS.map(cat=>({cat, level:statusLevel(cat,s)})).filter(x=>x.level==='danger'||x.level==='warn');
        const gr = grade(score);
        return `
        <div class="danger-row expanded" onclick="selectStore('${s.id}')">
          <div class="dn-top">
            <div class="dn-title">
              <div class="dn-name">${s.name}${s.etc.memo ? ` <span class="dn-memo-inline">· ${s.etc.memo}</span>` : ''}</div>
              <div class="dn-brand">${s.brand} · ${s.code}</div>
            </div>
            <div class="dn-score" style="color:${gr.ring[0]};">${score}점</div>
          </div>
          ${tags.length ? `<div class="dn-tags">${tags.map(t=>`<span class="issue-tag ${t.level}">${categoryLabel(t.cat)}</span>`).join('')}</div>` : ''}
        </div>`;
      }).join('') : `<div class="empty-note">위험 등급 매장이 없습니다.</div>`}
      ${renderPager(dangerPage, totalDangerPages, 'goDangerPage')}
    </div>

    <div class="dash-panel">
      <div class="dash-panel-title">브랜드별 리스크 히트맵</div>
      <div class="heatmap-wrap">
        <table class="heatmap-table">
          <thead><tr><th></th>${brands.map(b=>`<th>${b}</th>`).join('')}</tr></thead>
          <tbody>
            ${heatmap.map(row=>`
              <tr>
                <th class="hm-row-label">${categoryLabel(row.cat)}</th>
                ${row.cells.map(c=>{
                  const ratio = c.total ? c.dangerCount/c.total : 0;
                  const bg = c.dangerCount ? hexToRgba('#f2596a', Math.min(0.38+ratio*0.5, 0.92)) : (c.warnCount ? hexToRgba('#f0b73f',0.3) : 'transparent');
                  const cls = c.dangerCount ? 'hm-cell hm-cell--danger' : (c.warnCount ? 'hm-cell hm-cell--warn' : 'hm-cell');
                  const label = c.dangerCount ? c.dangerCount : (c.warnCount ? '·' : '');
                  return `<td class="${cls}" style="background:${bg};" title="${c.brand} · ${categoryLabel(row.cat)}: 위험 ${c.dangerCount} / 주의 ${c.warnCount} / 총 ${c.total}개">${label}</td>`;
                }).join('')}
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div class="dash-panel">
      <div class="dash-panel-title">브랜드별 현황</div>
      <div class="brand-grid">
        ${brandStats.map(b=>{
          const gr = grade(b.avg);
          return `<div class="brand-card" onclick="setBrand('${b.brand}'); const first=stores.find(x=>x.brand==='${b.brand}'); if(first) selectStore(first.id);">
            <div class="bc-name">${b.brand}</div>
            <div class="bc-count num">${b.count}</div>
            <div class="bc-grade">평균 ${gr.g}${b.avg===null?'':' · '+b.avg+'점'}</div>
          </div>`;
        }).join('')}
      </div>
    </div>
  `;
}

function renderGradeView(){
  const graded = stores.map(s=>({s, score:computeOVR(s)})).filter(({score})=>grade(score).g===gradeView);
  graded.sort((a,b)=>(b.score??0)-(a.score??0));
  const totalPages = Math.max(1, Math.ceil(graded.length / GRADE_VIEW_PER_PAGE));
  if(gradeViewPage > totalPages) gradeViewPage = totalPages;
  if(gradeViewPage < 1) gradeViewPage = 1;
  const pageStart = (gradeViewPage-1) * GRADE_VIEW_PER_PAGE;
  const pageList = graded.slice(pageStart, pageStart + GRADE_VIEW_PER_PAGE);
  const ring = grade(gradeView==='A'?85:gradeView==='B'?65:gradeView==='C'?47:gradeView==='D'?30:10).ring;

  document.getElementById('main').innerHTML = `
    <div class="dash-head">
      <div class="eyebrow" style="font-size:10.5px; letter-spacing:.14em; color:var(--text-3); text-transform:uppercase; font-weight:600; cursor:pointer;" onclick="goDashboard()">‹ 전체 현황으로</div>
      <h2><span class="num" style="color:${ring[0]};">${gradeView}</span>등급 매장</h2>
      <div class="sub">${graded.length}개 매장</div>
    </div>

    <div class="dash-panel">
      <div class="dash-panel-title">${gradeView}등급 매장 목록 <span class="cnt" style="color:${ring[0]};">${graded.length}</span>개</div>
      ${pageList.length ? pageList.map(({s,score})=>{
        const tags = ISSUE_CATS.map(cat=>({cat, level:statusLevel(cat,s)})).filter(x=>x.level==='danger'||x.level==='warn');
        return `
        <div class="danger-row expanded" onclick="selectStore('${s.id}')">
          <div class="dn-top">
            <div class="dn-title">
              <div class="dn-name">${s.name}${s.etc.memo ? ` <span class="dn-memo-inline">· ${s.etc.memo}</span>` : ''}</div>
              <div class="dn-brand">${s.brand} · ${s.code}</div>
            </div>
            <div class="dn-score" style="color:${ring[0]};">${score===null?'–':score}점</div>
          </div>
          ${tags.length ? `<div class="dn-tags">${tags.map(t=>`<span class="issue-tag ${t.level}">${categoryLabel(t.cat)}</span>`).join('')}</div>` : ''}
        </div>`;
      }).join('') : `<div class="empty-note">해당 등급 매장이 없습니다.</div>`}
      ${renderPager(gradeViewPage, totalPages, 'goGradeViewPage')}
    </div>
  `;
}

function renderMain(){
  if(showUpload){ renderUploadPage(); return; }
  if(!currentId){ if(gradeView){ renderGradeView(); } else { renderDashboard(); } return; }
  const s = stores.find(x=>x.id===currentId);
  const score = computeOVR(s);
  const gr = grade(score);
  const lvl = overallLevel(score);

  const territoryLvl = statusLevel('territory', s);
  const methodLvl = statusLevel('method', s);
  const achieveLvl = statusLevel('achieve', s);
  const contractLvl = statusLevel('contract', s);
  const unpaidLvl = statusLevel('unpaid', s);
  const hygieneLvl = statusLevel('hygiene', s);

  document.getElementById('main').innerHTML = `
    <div class="card-header">
      <div class="ch-left">
        <div class="eyebrow">매장 프로필 · ${s.code}</div>
        <h2>${s.name}</h2>
        <div class="ch-tags">
          <div class="tag brand">${s.brand}</div>
          <div class="tag">${s.address}</div>
          <div class="tag">담당 ${s.manager}</div>
        </div>
      </div>
      <div class="ovr-badge" style="--ring-1:${gr.ring[0]}; --ring-2:${gr.ring[1]};">
        <div class="grade num">${gr.g}</div>
        <div class="score num">${score===null?'데이터없음':score+'점'}</div>
        <div class="label">${score===null?'항목 입력 필요':'종합 안정도'}</div>
      </div>
    </div>

    <div class="stat-grid">
      ${statCard({
        num:'01', title:'영업지역 설정현황', level:territoryLvl, statusText:s.territory.status, formId:'f1',
        rows:[
          {k:'설정 범위', v: s.territory.scopeType==='직접입력' ? s.territory.scopeText : s.territory.scopeType},
          {k:'설정일', v:s.territory.setDate},
          {k:'비고', v: s.territory.noteType==='직접입력' ? s.territory.noteText : s.territory.noteType},
        ],
        extra:`<div class="edit-form" id="f1">
          <label>설정 상태</label>
          <select id="e1-status"><option ${s.territory.status==='정상설정'?'selected':''}>정상설정</option><option ${s.territory.status==='분쟁중'?'selected':''}>분쟁중</option><option ${s.territory.status==='미설정'?'selected':''}>미설정</option><option ${s.territory.status==='미입력'?'selected':''}>미입력</option></select>
          <label>설정 범위</label>
          <select id="e1-scopeType" onchange="document.getElementById('e1-scopeText-wrap').style.display=this.value==='직접입력'?'':'none'">
            <option value="구획지정" ${s.territory.scopeType==='구획지정'?'selected':''}>구획지정</option>
            <option value="반경지정" ${s.territory.scopeType==='반경지정'?'selected':''}>반경지정</option>
            <option value="직접입력" ${s.territory.scopeType==='직접입력'?'selected':''}>직접입력</option>
          </select>
          <div id="e1-scopeText-wrap" style="${condStyle(s.territory.scopeType,'직접입력')}">
            <label>설정 범위 상세</label><input id="e1-scopeText" value="${s.territory.scopeText}">
          </div>
          <label>설정일</label><input id="e1-date" value="${s.territory.setDate}">
          <label>비고</label>
          <select id="e1-noteType" onchange="document.getElementById('e1-noteText-wrap').style.display=this.value==='직접입력'?'':'none'">
            <option value="자사유통입점" ${s.territory.noteType==='자사유통입점'?'selected':''}>자사유통입점</option>
            <option value="전대차" ${s.territory.noteType==='전대차'?'selected':''}>전대차</option>
            <option value="영업지역 중복 있음" ${s.territory.noteType==='영업지역 중복 있음'?'selected':''}>영업지역 중복 있음</option>
            <option value="영업지역 침해 있음" ${s.territory.noteType==='영업지역 침해 있음'?'selected':''}>영업지역 침해 있음</option>
            <option value="직접입력" ${s.territory.noteType==='직접입력'?'selected':''}>직접입력</option>
          </select>
          <div id="e1-noteText-wrap" style="${condStyle(s.territory.noteType,'직접입력')}">
            <label>비고 상세</label><textarea id="e1-noteText">${s.territory.noteText}</textarea>
          </div>
          <div class="actions"><button class="btn-cancel" onclick="toggleEdit('f1')">취소</button><button class="btn-save" onclick="saveTerritory()">저장</button></div>
        </div>`
      })}

      ${statCard({
        num:'02', title:'예상매출액 산정방식', level:methodLvl, statusText:s.revenueMethod.status, formId:'f2',
        rows:[
          {k:'산정 방식', v:s.revenueMethod.method},
          {k:'산정 금액', v:s.revenueMethod.estimatedAmount},
          {k:'산정일', v:s.revenueMethod.calcDate},
        ],
        extra:`<div class="edit-form" id="f2">
          <label>산정 방식</label>
          <select id="e2-method">
            <option value="인근가맹점 5곳" ${s.revenueMethod.method==='인근가맹점 5곳'?'selected':''}>인근가맹점 5곳</option>
            <option value="예외산정(의사결정o)" ${s.revenueMethod.method==='예외산정(의사결정o)'?'selected':''}>예외산정(의사결정o)</option>
            <option value="예외산정(임의)" ${s.revenueMethod.method==='예외산정(임의)'?'selected':''}>예외산정(임의)</option>
          </select>
          <label>검증 상태</label>
          <select id="e2-status"><option ${s.revenueMethod.status==='정합성확인됨'?'selected':''}>정합성확인됨</option><option ${s.revenueMethod.status==='재검토필요'?'selected':''}>재검토필요</option><option ${s.revenueMethod.status==='미산정'?'selected':''}>미산정</option><option ${s.revenueMethod.status==='미입력'?'selected':''}>미입력</option></select>
          <label>산정 금액</label><input id="e2-amount" value="${s.revenueMethod.estimatedAmount}">
          <label>산정일</label><input id="e2-date" value="${s.revenueMethod.calcDate}">
          <div class="actions"><button class="btn-cancel" onclick="toggleEdit('f2')">취소</button><button class="btn-save" onclick="saveMethod()">저장</button></div>
        </div>`
      })}

      ${statCard({
        num:'03', title:'예상매출액 달성 여부', level:achieveLvl, statusText: s.revenueAchievement.ratio===null?'미입력':s.revenueAchievement.ratio+'% 달성', formId:'f3',
        rows:[
          {k:'실 매출', v:s.revenueAchievement.actualAmount},
          {k:'목표매출(최소매출)', v:s.revenueAchievement.targetAmount},
          {k:'달성기간', v: s.revenueAchievement.periodStart==='-' ? '-' : `${s.revenueAchievement.periodStart} ~ ${s.revenueAchievement.periodEnd}`},
        ],
        extra: (s.revenueAchievement.ratio!==null ? trendBars(s.revenueAchievement.trend, achieveLvl) : '') + `<div class="edit-form" id="f3">
          <label>실 매출</label><input id="e3-actual" value="${s.revenueAchievement.actualAmount}">
          <label>목표매출(최소매출)</label><input id="e3-target" value="${s.revenueAchievement.targetAmount}">
          <label>달성률 (%)</label><input id="e3-ratio" type="number" value="${s.revenueAchievement.ratio===null?'':s.revenueAchievement.ratio}">
          <label>달성기간 시작일</label><input id="e3-start" type="date" value="${s.revenueAchievement.periodStart==='-'?'':s.revenueAchievement.periodStart}">
          <label>달성기간 종료일 (최대 365일)</label><input id="e3-end" type="date" value="${s.revenueAchievement.periodEnd==='-'?'':s.revenueAchievement.periodEnd}">
          <div class="actions"><button class="btn-cancel" onclick="toggleEdit('f3')">취소</button><button class="btn-save" onclick="saveAchievement()">저장</button></div>
        </div>`
      })}

      ${statCard({
        num:'04', title:'계약체결단계 하자유무', level:contractLvl, statusText: contractLvl==='neutral'?'미입력':(s.contractDefect.hasDefect?s.contractDefect.status:'하자없음'), formId:'f4',
        rows:[
          {k:'하자 유무', v:s.contractDefect.hasDefect?'있음':'없음'},
          {k:'내용', v: s.contractDefect.hasDefect ? (s.contractDefect.detailType==='기타' ? s.contractDefect.detailText : s.contractDefect.detailType) : '-'},
        ],
        extra:`<div class="edit-form" id="f4">
          <label>하자 유무</label><select id="e4-has"><option value="true" ${s.contractDefect.hasDefect?'selected':''}>있음</option><option value="false" ${!s.contractDefect.hasDefect?'selected':''}>없음</option></select>
          <label>내용</label>
          <select id="e4-detailType" onchange="document.getElementById('e4-detailText-wrap').style.display=this.value==='기타'?'':'none'">
            <option value="숙고기간 위반" ${s.contractDefect.detailType==='숙고기간 위반'?'selected':''}>숙고기간 위반</option>
            <option value="서류 미교부" ${s.contractDefect.detailType==='서류 미교부'?'selected':''}>서류 미교부</option>
            <option value="기타" ${s.contractDefect.detailType==='기타'?'selected':''}>기타</option>
          </select>
          <div id="e4-detailText-wrap" style="${condStyle(s.contractDefect.detailType,'기타')}">
            <label>기타 내용</label><textarea id="e4-detailText">${s.contractDefect.detailText}</textarea>
          </div>
          <label>처리 상태</label>
          <select id="e4-status"><option ${s.contractDefect.status==='해당없음'?'selected':''}>해당없음</option><option ${s.contractDefect.status==='처리중'?'selected':''}>처리중</option><option ${s.contractDefect.status==='해결완료'?'selected':''}>해결완료</option><option ${s.contractDefect.status==='미해결'?'selected':''}>미해결</option><option ${s.contractDefect.status==='미입력'?'selected':''}>미입력</option></select>
          <div class="actions"><button class="btn-cancel" onclick="toggleEdit('f4')">취소</button><button class="btn-save" onclick="saveContract()">저장</button></div>
        </div>`
      })}

      ${statCard({
        num:'05', title:'미입금 발생여부', level:unpaidLvl, statusText: s.unpaidStatus.hasUnpaid?'미입금 발생':'정상', formId:'f5',
        rows:[
          {k:'미입금액', v:s.unpaidStatus.hasUnpaid?s.unpaidStatus.amount:'-', risk: s.unpaidStatus.hasUnpaid?unpaidLvl:null},
          {k:'발생일자', v:s.unpaidStatus.hasUnpaid?s.unpaidStatus.occurredDate:'-'},
          {k:'비고', v:s.unpaidStatus.note},
        ],
        extra:`<div class="edit-form" id="f5">
          <label>미입금 여부</label><select id="e5-has"><option value="true" ${s.unpaidStatus.hasUnpaid?'selected':''}>발생</option><option value="false" ${!s.unpaidStatus.hasUnpaid?'selected':''}>없음</option></select>
          <label>미입금액</label><input id="e5-amount" value="${s.unpaidStatus.amount}">
          <label>발생일자</label><input id="e5-date" type="date" value="${s.unpaidStatus.occurredDate==='-'?'':s.unpaidStatus.occurredDate}">
          <label>비고</label><textarea id="e5-note">${s.unpaidStatus.note}</textarea>
          <div class="actions"><button class="btn-cancel" onclick="toggleEdit('f5')">취소</button><button class="btn-save" onclick="saveUnpaid()">저장</button></div>
        </div>`
      })}

      ${statCard({
        num:'06', title:'위생점검 상태', level:hygieneLvl, statusText:s.hygiene.result, formId:'f6',
        rows:[
          {k:'최근 점검일', v:s.hygiene.lastCheckDate},
          {k:'다음 점검예정', v:s.hygiene.nextCheckDate},
          {k:'특이사항', v:s.hygiene.specialNote || '-'},
        ],
        extra:`<div class="edit-form" id="f6">
          <label>점검 결과</label><select id="e6-result"><option ${s.hygiene.result==='적합'?'selected':''}>적합</option><option ${s.hygiene.result==='시정요구'?'selected':''}>시정요구</option><option ${s.hygiene.result==='부적합'?'selected':''}>부적합</option><option ${s.hygiene.result==='점검예정'?'selected':''}>점검예정</option><option ${s.hygiene.result==='미입력'?'selected':''}>미입력</option></select>
          <label>최근 점검일</label><input id="e6-last" value="${s.hygiene.lastCheckDate}">
          <label>다음 점검예정</label><input id="e6-next" value="${s.hygiene.nextCheckDate}">
          <label>특이사항</label><textarea id="e6-note">${s.hygiene.specialNote}</textarea>
          <div class="actions"><button class="btn-cancel" onclick="toggleEdit('f6')">취소</button><button class="btn-save" onclick="saveHygiene()">저장</button></div>
        </div>`
      })}
    </div>

    <div class="notes-panel">
      <div class="sc-top">
        <div>
          <div class="sc-num">07</div>
          <div class="sc-title">기타 매장운영 특이사항</div>
        </div>
        <button class="edit-btn" onclick="toggleEdit('f7')" title="수정">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
        </button>
      </div>
      <div class="note-text">${s.etc.memo || '등록된 특이사항이 없습니다.'}</div>
      <div class="note-meta"><span>작성자 ${s.etc.author}</span><span>${s.etc.date}</span></div>
      <div class="edit-form" id="f7">
        <label>내용</label><textarea id="e7-memo" style="min-height:80px;">${s.etc.memo}</textarea>
        <label>작성자</label><input id="e7-author" value="${s.etc.author}">
        <div class="actions"><button class="btn-cancel" onclick="toggleEdit('f7')">취소</button><button class="btn-save" onclick="saveEtc()">저장</button></div>
      </div>
    </div>
  `;
}

/* =================== SAVE HANDLERS =================== */
function currentStore(){ return stores.find(x=>x.id===currentId); }
function today(){ return new Date().toISOString().slice(0,10); }

async function saveTerritory(){
  const s=currentStore();
  const scopeType = document.getElementById('e1-scopeType').value;
  const noteType = document.getElementById('e1-noteType').value;
  s.territory = {
    status:document.getElementById('e1-status').value,
    scopeType, scopeText: scopeType==='직접입력' ? document.getElementById('e1-scopeText').value : '',
    setDate:document.getElementById('e1-date').value,
    noteType, noteText: noteType==='직접입력' ? document.getElementById('e1-noteText').value : '',
  };
  persistStore(s);
  renderRoster(); renderMain();
}
async function saveMethod(){
  const s=currentStore();
  s.revenueMethod = {method:document.getElementById('e2-method').value, status:document.getElementById('e2-status').value, estimatedAmount:document.getElementById('e2-amount').value, calcDate:document.getElementById('e2-date').value};
  persistStore(s);
  renderRoster(); renderMain();
}
async function saveAchievement(){
  const s=currentStore();
  const raw = document.getElementById('e3-ratio').value;
  const ratio = raw===''?null:parseInt(raw);
  const start = document.getElementById('e3-start').value;
  const end = document.getElementById('e3-end').value;
  if(start && end && daysBetween(start, end) > 365){
    alert('달성기간은 최대 365일까지 설정할 수 있습니다.');
    return;
  }
  const prevTrend = s.revenueAchievement.ratio===null ? [0,0,0,0,0] : s.revenueAchievement.trend.slice(1);
  const trend = ratio===null ? s.revenueAchievement.trend : [...prevTrend, ratio];
  s.revenueAchievement = {
    actualAmount:document.getElementById('e3-actual').value, targetAmount:document.getElementById('e3-target').value, ratio, trend,
    periodStart: start || '-', periodEnd: end || '-',
  };
  persistStore(s);
  renderRoster(); renderMain();
}
async function saveContract(){
  const s=currentStore();
  const hasDefect = document.getElementById('e4-has').value==='true';
  const detailType = document.getElementById('e4-detailType').value;
  s.contractDefect = {
    hasDefect, detailType: hasDefect ? detailType : '-',
    detailText: (hasDefect && detailType==='기타') ? document.getElementById('e4-detailText').value : '',
    status:document.getElementById('e4-status').value,
  };
  persistStore(s);
  renderRoster(); renderMain();
}
async function saveUnpaid(){
  const s=currentStore();
  const hasUnpaid = document.getElementById('e5-has').value==='true';
  s.unpaidStatus = {hasUnpaid, amount:document.getElementById('e5-amount').value, occurredDate: hasUnpaid ? (document.getElementById('e5-date').value || '-') : '-', note:document.getElementById('e5-note').value};
  persistStore(s);
  renderRoster(); renderMain();
}
async function saveHygiene(){
  const s=currentStore();
  s.hygiene = {result:document.getElementById('e6-result').value, lastCheckDate:document.getElementById('e6-last').value, nextCheckDate:document.getElementById('e6-next').value, specialNote:document.getElementById('e6-note').value};
  persistStore(s);
  renderRoster(); renderMain();
}
async function saveEtc(){
  const s=currentStore();
  s.etc = {memo:document.getElementById('e7-memo').value, author:document.getElementById('e7-author').value, date:today()};
  persistStore(s);
  renderMain();
}

/* =================== EXCEL 일괄 업로드 =================== */
const EXCEL_HEADERS = [
  '매장코드','매장명','브랜드','주소','담당자',
  '영업지역_상태','영업지역_설정범위유형','영업지역_설정범위상세','영업지역_비고유형','영업지역_비고상세','영업지역_설정일',
  '매출산정_방식','매출산정_상태','매출산정_금액','매출산정_산정일',
  '매출달성_실매출','매출달성_목표매출','매출달성_달성률','매출달성_시작일','매출달성_종료일',
  '계약하자_유무','계약하자_유형','계약하자_상세','계약하자_상태',
  '미입금_여부','미입금_금액','미입금_발생일','미입금_비고',
  '위생점검_결과','위생점검_최근점검일','위생점검_다음점검예정','위생점검_특이사항',
  '기타_메모','기타_작성자',
];

function downloadExcelTemplate(){
  const example = [
    'CAFE-999','더카페 샘플점','더카페','서울시 강남구 테헤란로 1','홍길동',
    '정상설정','반경지정','','자사유통입점','','2025-01-15',
    '인근가맹점 5곳','정합성확인됨','월 5,000만','2025-01-10',
    '5,200만','5,000만','104','2025-01-01','2025-12-31',
    '없음','-','','해당없음',
    '없음','0','-','최근 12개월 연체 없음',
    '적합','2025-06-01','2025-12-01','',
    '','담당자명',
  ];
  const ws = XLSX.utils.aoa_to_sheet([EXCEL_HEADERS, example]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, '매장데이터');
  XLSX.writeFile(wb, '가맹점_데이터_업로드_템플릿.xlsx');
}

function onExcelFileSelected(evt){
  const file = evt.target.files && evt.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e=>{
    try{
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, {type:'array'});
      const sheet = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet, {defval:''});
      uploadState.fileName = file.name;
      uploadState.parsed = validateExcelRows(rows);
      uploadState.result = null;
      renderMain();
    }catch(err){
      alert('엑셀 파일을 읽는 중 오류가 발생했습니다: ' + err.message);
    }
  };
  reader.readAsArrayBuffer(file);
  evt.target.value = '';
}

function validateExcelRows(rows){
  const cs = v => (v===undefined||v===null) ? '' : String(v).trim();
  const entries = rows
    .filter(row => Object.keys(row).some(k=>cs(row[k])!==''))
    .map((row, i)=>{
      const code = cs(row['매장코드']);
      const name = cs(row['매장명']);
      const brand = cs(row['브랜드']);
      const errors = [];
      if(!code) errors.push('매장코드 누락');
      if(!name) errors.push('매장명 누락');
      if(!brand) errors.push('브랜드 누락');
      const existing = code ? stores.find(s=>s.code===code) : null;
      return { excelRowNum:i+2, code, name, brand, isNew: !!code && !existing, errors, row, duplicate:false };
    });
  const lastIdxByCode = new Map();
  entries.forEach((e,idx)=>{ if(e.code) lastIdxByCode.set(e.code, idx); });
  entries.forEach((e,idx)=>{ if(e.code && lastIdxByCode.get(e.code)!==idx) e.duplicate = true; });
  return entries;
}

function buildStoreFromExcelRow(row, code, name, brand, existing){
  const cs = v => (v===undefined||v===null) ? '' : String(v).trim();
  const pick = (v, allowed, fallback) => allowed.includes(cs(v)) ? cs(v) : fallback;
  const boolish = v => ['Y','y','예','있음','TRUE','true','1'].includes(cs(v));
  const id = existing ? existing.id : code.replace(/[^A-Za-z0-9]/g,'').toUpperCase();

  const ratioRaw = cs(row['매출달성_달성률']);
  const ratio = ratioRaw==='' ? null : parseInt(ratioRaw,10);
  let trend = existing ? existing.revenueAchievement.trend : [0,0,0,0,0,0];
  if(ratio!==null){
    trend = (existing && existing.revenueAchievement.ratio!==null)
      ? [...existing.revenueAchievement.trend.slice(1), ratio]
      : [ratio,ratio,ratio,ratio,ratio,ratio];
  }

  return {
    id, name, brand, code,
    address: cs(row['주소']) || (existing ? existing.address : '-'),
    manager: cs(row['담당자']) || (existing ? existing.manager : '-'),
    territory: {
      status: pick(row['영업지역_상태'], ['정상설정','분쟁중','미설정','미입력'], '미입력'),
      scopeType: cs(row['영업지역_설정범위유형']) || '-',
      scopeText: cs(row['영업지역_설정범위상세']),
      noteType: cs(row['영업지역_비고유형']) || '-',
      noteText: cs(row['영업지역_비고상세']),
      setDate: cs(row['영업지역_설정일']) || '-',
    },
    revenueMethod: {
      method: cs(row['매출산정_방식']) || '-',
      status: pick(row['매출산정_상태'], ['정합성확인됨','재검토필요','미산정','미입력'], '미입력'),
      calcDate: cs(row['매출산정_산정일']) || '-',
      estimatedAmount: cs(row['매출산정_금액']) || '-',
    },
    revenueAchievement: {
      ratio,
      actualAmount: cs(row['매출달성_실매출']) || '-',
      targetAmount: cs(row['매출달성_목표매출']) || '-',
      trend,
      periodStart: cs(row['매출달성_시작일']) || '-',
      periodEnd: cs(row['매출달성_종료일']) || '-',
    },
    contractDefect: {
      hasDefect: boolish(row['계약하자_유무']),
      detailType: cs(row['계약하자_유형']) || '-',
      detailText: cs(row['계약하자_상세']),
      status: pick(row['계약하자_상태'], ['해당없음','처리중','해결완료','미해결','미입력'], '미입력'),
    },
    unpaidStatus: {
      hasUnpaid: boolish(row['미입금_여부']),
      amount: cs(row['미입금_금액']) || '0',
      occurredDate: cs(row['미입금_발생일']) || '-',
      note: cs(row['미입금_비고']),
    },
    hygiene: {
      result: pick(row['위생점검_결과'], ['적합','시정요구','부적합','점검예정','미입력'], '미입력'),
      lastCheckDate: cs(row['위생점검_최근점검일']) || '-',
      nextCheckDate: cs(row['위생점검_다음점검예정']) || '-',
      specialNote: cs(row['위생점검_특이사항']),
    },
    etc: {
      memo: cs(row['기타_메모']) || (existing ? existing.etc.memo : ''),
      author: cs(row['기타_작성자']) || (existing ? existing.etc.author : '-'),
      date: today(),
    },
  };
}

async function applyExcelUpload(){
  const entries = uploadState.parsed || [];
  const applicable = entries.filter(e=>e.errors.length===0 && !e.duplicate);
  if(!applicable.length){ alert('반영할 유효한 데이터가 없습니다.'); return; }
  uploadState.applying = true; renderMain();

  let okCount=0, failCount=0; const failDetails=[];
  for(const e of applicable){
    const existing = stores.find(s=>s.code===e.code);
    const storeObj = buildStoreFromExcelRow(e.row, e.code, e.name, e.brand, existing);
    try{
      if(supabaseClient){
        if(existing){
          const { error } = await supabaseClient.from('stores').update(storeToRow(storeObj)).eq('id', storeObj.id);
          if(error) throw error;
        }else{
          const { error } = await supabaseClient.from('stores').insert({ id: storeObj.id, ...storeToRow(storeObj) });
          if(error) throw error;
        }
      }
      if(existing) Object.assign(existing, storeObj);
      else stores.push(storeObj);
      okCount++;
    }catch(err){
      failCount++; failDetails.push(`${e.code}: ${err.message||err}`);
    }
  }

  uploadState.applying = false;
  uploadState.result = { okCount, failCount, failDetails, total: applicable.length };
  renderBrandFilter(); renderRoster();
  renderMain();
}

function renderUploadPage(){
  const parsed = uploadState.parsed;
  const result = uploadState.result;
  const newCount = parsed ? parsed.filter(e=>e.isNew && e.errors.length===0 && !e.duplicate).length : 0;
  const updateCount = parsed ? parsed.filter(e=>!e.isNew && e.errors.length===0 && !e.duplicate).length : 0;
  const errorCount = parsed ? parsed.filter(e=>e.errors.length>0).length : 0;
  const dupCount = parsed ? parsed.filter(e=>e.duplicate && e.errors.length===0).length : 0;

  document.getElementById('main').innerHTML = `
    <div class="dash-head">
      <div class="eyebrow" style="font-size:10.5px; letter-spacing:.14em; color:var(--text-3); text-transform:uppercase; font-weight:600; cursor:pointer;" onclick="goDashboard()">‹ 전체 현황으로</div>
      <h2>엑셀 데이터 일괄 업로드</h2>
      <div class="sub">엑셀 파일로 매장 데이터를 한 번에 등록하거나 수정합니다 (매장코드 기준 자동 업서트)</div>
    </div>

    <div class="dash-panel">
      <div class="dash-panel-title">1. 템플릿 준비</div>
      <div style="font-size:12.5px; color:var(--text-2); line-height:1.6; margin-bottom:12px;">
        아래 템플릿을 내려받아 형식에 맞게 데이터를 채운 뒤 업로드해주세요. <b>매장코드</b>가 기존 매장과 일치하면 해당 매장 정보가 업데이트되고, 일치하는 매장이 없으면 신규 매장으로 추가됩니다.
      </div>
      <button class="btn-save" style="width:auto; padding:9px 16px;" onclick="downloadExcelTemplate()">템플릿 다운로드 (.xlsx)</button>
    </div>

    <div class="dash-panel">
      <div class="dash-panel-title">2. 파일 업로드</div>
      <label class="upload-dropzone">
        <input type="file" accept=".xlsx,.xls,.csv" onchange="onExcelFileSelected(event)" style="display:none;">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        <div class="upload-dropzone-text">${uploadState.fileName ? `선택된 파일: <b>${uploadState.fileName}</b> (다시 클릭해서 변경)` : '클릭해서 엑셀 파일 선택 (.xlsx, .xls, .csv)'}</div>
      </label>
    </div>

    ${result ? `
    <div class="dash-panel ${result.failCount ? 'dash-panel--danger' : ''}">
      <div class="dash-panel-title">반영 결과</div>
      <div style="font-size:13px; line-height:1.8;">
        <div>✅ 정상 반영 <b class="num" style="color:var(--safe);">${result.okCount}</b>건 / 전체 대상 ${result.total}건</div>
        ${result.failCount ? `<div>⚠ 반영 실패 <b class="num" style="color:var(--danger);">${result.failCount}</b>건</div>` : ''}
      </div>
      ${result.failDetails.length ? `<div style="margin-top:8px; font-size:11.5px; color:var(--text-3); line-height:1.6;">${result.failDetails.map(f=>`<div>· ${f}</div>`).join('')}</div>` : ''}
    </div>` : ''}

    ${parsed ? `
    <div class="dash-panel">
      <div class="dash-panel-title">3. 미리보기 및 검증 <span class="cnt">${parsed.length}</span>행</div>
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px;">
        <span class="issue-tag safe-tag">신규 ${newCount}</span>
        <span class="issue-tag warn">업데이트 ${updateCount}</span>
        ${dupCount ? `<span class="issue-tag warn">중복(마지막 값 사용 외 무시) ${dupCount}</span>` : ''}
        ${errorCount ? `<span class="issue-tag danger">오류 ${errorCount}</span>` : ''}
      </div>
      <div class="upload-table-wrap">
        <table class="upload-table">
          <thead><tr><th>#</th><th>상태</th><th>매장코드</th><th>매장명</th><th>브랜드</th><th>비고</th></tr></thead>
          <tbody>
            ${parsed.map(e=>{
              let statusHtml, note='';
              if(e.errors.length){ statusHtml = `<span class="issue-tag danger">오류</span>`; note = e.errors.join(', '); }
              else if(e.duplicate){ statusHtml = `<span class="issue-tag warn">중복(무시)</span>`; note = '동일 매장코드가 이후 행에 다시 존재하여 이 행은 반영되지 않습니다.'; }
              else if(e.isNew){ statusHtml = `<span class="issue-tag safe-tag">신규</span>`; }
              else{ statusHtml = `<span class="issue-tag warn">업데이트</span>`; }
              return `<tr>
                <td>${e.excelRowNum}</td>
                <td>${statusHtml}</td>
                <td>${e.code||'-'}</td>
                <td>${e.name||'-'}</td>
                <td>${e.brand||'-'}</td>
                <td class="upload-table-note">${note}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
      <div style="margin-top:16px; max-width:280px;">
        <button class="btn-save" style="width:100%; padding:10px;" ${uploadState.applying || (newCount+updateCount)===0 ? 'disabled' : ''} onclick="applyExcelUpload()">${uploadState.applying ? '반영 중…' : `반영하기 (${newCount+updateCount}건)`}</button>
      </div>
    </div>` : ''}
  `;
}

/* =================== INIT =================== */
applyThemeIcon();
renderBrandFilter();
renderRoster();
renderMain();
loadFromSupabase();
