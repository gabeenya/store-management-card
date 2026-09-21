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
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
      storage: window.localStorage,
      storageKey: 'store-card-auth',
    },
  });
}

/* =================== ACCESS LOCK (Supabase Auth) =================== */
// 실제 로그인(이메일/비밀번호)이 확인되기 전까지 첫 화면을 가려서
// 데이터에 접근하지 못하게 합니다. DB 쪽 RLS 정책과 함께 적용해야
// 로그인하지 않은 상태에서 API로 직접 조회하는 것도 막을 수 있습니다.
const ACCESS_LOCK_ENABLED = true; // 계정 준비 완료 후 활성화됨 (2026-09-15)
(function(){
  const screenEl = document.getElementById('lockScreen');
  if(!ACCESS_LOCK_ENABLED){
    if(screenEl) screenEl.hidden = true;
    loadFromSupabase();
    return;
  }
  const cardEl = screenEl && screenEl.querySelector('.lock-card');
  const formEl = document.getElementById('lockForm');
  const emailEl = document.getElementById('lockEmail');
  const passEl = document.getElementById('lockPassword');
  const errorEl = document.getElementById('lockError');
  const logoutBtn = document.getElementById('logoutBtn');
  const submitBtn = formEl && formEl.querySelector('.lock-btn');
  if(!screenEl || !formEl || !emailEl || !passEl) return;

  if(!supabaseClient){
    errorEl.textContent = 'DB가 연결되지 않아 로그인을 사용할 수 없습니다.';
    return;
  }

  let dataLoaded = false;

  function showApp(){
    screenEl.classList.add('hidden');
    setTimeout(() => { screenEl.hidden = true; }, 250);
    if(logoutBtn) logoutBtn.hidden = false;
    if(!dataLoaded){ dataLoaded = true; loadFromSupabase(); }
  }
  function showLogin(){
    screenEl.hidden = false;
    screenEl.classList.remove('hidden');
    if(logoutBtn) logoutBtn.hidden = true;
    dataLoaded = false;
    passEl.value = '';
    setTimeout(() => emailEl.focus(), 50);
  }

  supabaseClient.auth.getSession().then(({ data, error }) => {
    if(error) console.error('세션 확인 실패:', error.message);
    console.log('[auth] 초기 세션 확인:', data.session ? '있음 ('+data.session.user.email+')' : '없음');
    if(data.session) showApp(); else showLogin();
  });
  supabaseClient.auth.onAuthStateChange((event, session) => {
    console.log('[auth] 상태 변경:', event, session ? session.user.email : '(세션 없음)');
    if(session) showApp(); else showLogin();
  });

  formEl.addEventListener('submit', async function(e){
    e.preventDefault();
    errorEl.textContent = '';
    submitBtn.disabled = true;
    submitBtn.textContent = '확인 중…';
    const { error } = await supabaseClient.auth.signInWithPassword({
      email: emailEl.value.trim(),
      password: passEl.value,
    });
    submitBtn.disabled = false;
    submitBtn.textContent = '로그인';
    if(error){
      console.error('로그인 실패 상세:', error.message);
      errorEl.textContent = '이메일 또는 비밀번호가 올바르지 않습니다. (' + error.message + ')';
      passEl.value = '';
      passEl.focus();
      if(cardEl){
        cardEl.classList.remove('shake');
        void cardEl.offsetWidth; // 애니메이션 재실행을 위한 리플로우
        cardEl.classList.add('shake');
      }
    }
  });
})();

function logout(){
  if(supabaseClient) supabaseClient.auth.signOut();
}

function rowToStore(r){
  return {
    id: r.id, name: r.name, brand: r.brand, code: r.code, address: r.address, manager: r.manager,
    territory: r.territory, revenueMethod: r.revenue_method, revenueAchievement: r.revenue_achievement,
    contractDefect: r.contract_defect, unpaidStatus: r.unpaid_status, hygiene: r.hygiene, etc: r.etc,
    updatedAt: r.updated_at,
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
function operationStatus(s){ return (s.etc && s.etc.operationStatus) || '운영중'; }
function activeStores(){ return stores.filter(s=>operationStatus(s)==='운영중'); }
const OPERATION_STATUSES = ['운영중','휴업','계약종료','폐점'];
const OPERATION_STATUS_LEVEL = { '운영중':'safe', '휴업':'warn', '계약종료':'neutral', '폐점':'neutral' };
function pushScoreHistory(s){
  const score = computeOVR(s);
  if(score===null) return;
  if(!s.etc.scoreHistory) s.etc.scoreHistory = [];
  const d = today();
  const last = s.etc.scoreHistory[s.etc.scoreHistory.length-1];
  if(last && last.date===d) last.score = score;
  else s.etc.scoreHistory.push({date:d, score});
  if(s.etc.scoreHistory.length>12) s.etc.scoreHistory = s.etc.scoreHistory.slice(-12);
}
function setDbStatus(text, ok){
  const el = document.getElementById('dbStatus');
  if(!el) return;
  el.innerHTML = `<span style="width:6px;height:6px;border-radius:50%;background:${ok?'var(--safe)':'var(--text-3)'};display:inline-block;"></span><span style="color:var(--text-3);">${text}</span>`;
}

// 매장 항목 저장 시 Supabase에도 반영 (연동 안 된 경우 로컬 상태만 갱신됨)
async function persistStore(s){
  pushScoreHistory(s);
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
let categoryView = null;
let categoryViewLevel = null;
let categoryViewPage = 1;
let showUpload = false;
let uploadState = { fileName: null, parsed: null, applying: false, result: null, missingCodes: null };
let showSettings = false;

/* =================== HELPERS =================== */
function daysBetween(a, b){ return Math.round((new Date(b) - new Date(a)) / 86400000); }
function fmtManwon(n){ return `${(Number(n)||0).toLocaleString()}만원`; }
const CONTRACT_DEFECT_TYPES = ['숙고기간 미준수','인근가맹점 현황문서 미교부','계약서 미교부','정보공개서 미교부','기타'];
const HYGIENE_ISSUE_AREAS = ['불이익 변경','광고판촉행사 임의 진행','필수품목 임의 변경','인테리어 강제','양수도 강제','비용강제','가격강제','기타'];
const TERRITORY_SCOPE_LEVEL = {
  '구획지정':'safe', '반경지정':'warn',
  '유통입점 (전체/미중복)':'warn', '유통입점 (전체/중복)':'danger', '유통입점 (층)':'safe',
};
const METHOD_LEVEL = {
  '인근가맹점 5곳':'safe', '예외산정(의사결정o)':'warn', '예외산정(임의)':'danger', '미산정':'danger',
};
const REVENUE_ACHIEVEMENT_OPTIONS = ['미입력','달성','미달성'];
const REVENUE_ACHIEVEMENT_LEVEL = { '미입력':'neutral', '달성':'safe', '미달성':'danger' };
const TERRITORY_INFRINGEMENT_OPTIONS = ['미입력','이슈없음','영업지역 중복','영업지역 침해'];
const TERRITORY_INFRINGEMENT_LEVEL = { '이슈없음':'safe', '영업지역 중복':'warn', '영업지역 침해':'danger' };
function territoryInfringement(s){ return s.territory.infringement || '미입력'; }
function revenueNote(s){ return (s.revenueMethod && s.revenueMethod.note) || ''; }
const LEVEL_SEVERITY = { danger:3, warn:2, neutral:1, safe:0 };
function worseLevel(a, b){ return LEVEL_SEVERITY[a]>=LEVEL_SEVERITY[b] ? a : b; }
const DEFAULT_THRESHOLDS = { unpaidLimitManwon:10000, unpaidDays:30 };
function loadThresholds(){
  try{
    const raw = localStorage.getItem('riskThresholds');
    return raw ? {...DEFAULT_THRESHOLDS, ...JSON.parse(raw)} : {...DEFAULT_THRESHOLDS};
  }catch(e){ return {...DEFAULT_THRESHOLDS}; }
}
let THRESHOLDS = loadThresholds();
function saveThresholds(t){
  THRESHOLDS = t;
  localStorage.setItem('riskThresholds', JSON.stringify(t));
}
function statusLevel(cat, s){
  switch(cat){
    case 'territory': {
      const scopeLvl = TERRITORY_SCOPE_LEVEL[s.territory.scopeType] || 'neutral';
      const infLvl = TERRITORY_INFRINGEMENT_LEVEL[territoryInfringement(s)] || 'neutral';
      return worseLevel(scopeLvl, infLvl);
    }
    case 'estimate': {
      const methodLvl = METHOD_LEVEL[s.revenueMethod.method] || 'neutral';
      const achieveLvl = REVENUE_ACHIEVEMENT_LEVEL[s.revenueAchievement.status] || 'neutral';
      return worseLevel(methodLvl, achieveLvl);
    }
    case 'contract':
      if(s.contractDefect.status==='미입력') return 'neutral';
      if(s.contractDefect.status==='없음') return 'safe';
      return s.contractDefect.types.length<=1 ? 'warn' : 'danger';
    case 'unpaid':
      if(s.unpaidStatus.status==='미입력') return 'neutral';
      if(s.unpaidStatus.status==='없음') return 'safe';
      { const amt = Number(s.unpaidStatus.amount)||0;
        const days = daysBetween(s.unpaidStatus.occurredDate, today());
        return (amt<=THRESHOLDS.unpaidLimitManwon && days<=THRESHOLDS.unpaidDays) ? 'warn' : 'danger'; }
    case 'hygiene':
      if(s.hygiene.status==='미입력') return 'neutral';
      if(s.hygiene.status==='없음') return 'safe';
      return s.hygiene.areas.length<=1 ? 'warn' : 'danger';
  }
}
function levelScore(l){ return l==='safe'?100:l==='warn'?60:l==='danger'?20:null; }
function computeOVR(s){
  const scores = ISSUE_CATS.map(c=>levelScore(statusLevel(c,s))).filter(v=>v!==null);
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
function issueTagClass(l){ return l==='safe' ? 'safe-tag' : l; }

/* =================== ISSUE AGGREGATION =================== */
const ISSUE_CATS = ['territory','estimate','contract','unpaid','hygiene'];
function categoryLabel(cat){
  return {territory:'영업지역', estimate:'예상매출액', contract:'계약하자', unpaid:'미입금', hygiene:'가맹사업법 이슈'}[cat];
}
function issueDetail(cat, s, level){
  const numCls = `risk-num ${level}`;
  switch(cat){
    case 'territory': {
      const inf = territoryInfringement(s);
      if(inf==='영업지역 중복' || inf==='영업지역 침해') return inf;
      return s.territory.scopeType==='-' ? '미입력' : s.territory.scopeType;
    }
    case 'estimate': {
      const parts = [];
      if(s.revenueAchievement.status && s.revenueAchievement.status!=='미입력') parts.push(`<span class="${numCls}">${s.revenueAchievement.status}</span>`);
      if(s.revenueMethod.method && s.revenueMethod.method!=='-') parts.push(s.revenueMethod.method);
      return parts.length ? parts.join(' · ') : '데이터 없음';
    }
    case 'contract': return s.contractDefect.status==='있음' ? s.contractDefect.types.join(', ') : s.contractDefect.status;
    case 'unpaid': return s.unpaidStatus.status==='있음' ? (s.unpaidStatus.note || '미입금 발생') : '';
    case 'hygiene': return s.hygiene.status==='있음' ? s.hygiene.areas.join(', ') : s.hygiene.status;
  }
}
function issueMetric(cat, s){
  switch(cat){
    case 'territory': return { dateVal:null, dateLabel:null, amount:null };
    case 'estimate': return { dateVal:null, dateLabel:null, amount: (s.revenueMethod.estimatedAmount && s.revenueMethod.estimatedAmount!=='-') ? s.revenueMethod.estimatedAmount : null };
    case 'contract': return { dateVal:null, dateLabel:null, amount:null };
    case 'unpaid': return { dateVal: s.unpaidStatus.status==='있음' ? s.unpaidStatus.occurredDate : null, dateLabel:'발생일자', amount: s.unpaidStatus.status==='있음' ? fmtManwon(s.unpaidStatus.amount) : null };
    case 'hygiene': return { dateVal:null, dateLabel:null, amount:null };
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
function categoryLevelCounts(list){
  return ISSUE_CATS.map(cat=>{
    const counts = {safe:0, warn:0, danger:0, neutral:0};
    list.forEach(s=>{ counts[statusLevel(cat,s)]++; });
    return { cat, counts };
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
        <div class="r-name">${s.name}${operationStatus(s)!=='운영중' ? ` <span class="r-op-badge">${operationStatus(s)}</span>` : ''}</div>
        <div class="r-brand">${s.brand} · ${s.code}</div>
      </div>
      <div class="r-ovr num" style="color:${gr.ring[0]}; border:1px solid color-mix(in srgb, ${gr.ring[0]} 32%, transparent); background:color-mix(in srgb, ${gr.ring[0]} 13%, transparent);">${score===null?'–':score}</div>
    </div>`;
  }).join('') || `<div style="padding:20px; color:var(--text-3); font-size:12.5px; text-align:center;">검색 결과가 없습니다</div>`;
}
function selectStore(id){ currentId=id; showUpload=false; renderRoster(); renderMain(); }
function goDashboard(){ currentId=null; gradeView=null; categoryView=null; categoryViewLevel=null; showUpload=false; showSettings=false; issueFeedPage=1; dangerPage=1; renderRoster(); renderMain(); }
function goIssuePage(p){ issueFeedPage=p; renderDashboard(); }
function goDangerPage(p){ dangerPage=p; renderDashboard(); }
function goGradeView(g){ gradeView=g; gradeViewPage=1; categoryView=null; categoryViewLevel=null; currentId=null; showUpload=false; showSettings=false; renderRoster(); renderMain(); }
function goGradeViewPage(p){ gradeViewPage=p; renderMain(); }
function goCategoryView(cat, level){ categoryView=cat; categoryViewLevel=level; categoryViewPage=1; gradeView=null; currentId=null; showUpload=false; showSettings=false; renderRoster(); renderMain(); }
function goCategoryViewPage(p){ categoryViewPage=p; renderMain(); }
function goUpload(){
  showUpload=true; showSettings=false; currentId=null; gradeView=null; categoryView=null; categoryViewLevel=null;
  uploadState = { fileName: null, parsed: null, applying: false, result: null, missingCodes: null };
  renderRoster(); renderMain();
}
function goSettings(){
  showSettings=true; showUpload=false; currentId=null; gradeView=null; categoryView=null; categoryViewLevel=null;
  renderRoster(); renderMain();
}
function applyThresholdSettings(){
  const t = {
    unpaidLimitManwon: parseInt(document.getElementById('th-unpaidLimit').value,10) || DEFAULT_THRESHOLDS.unpaidLimitManwon,
    unpaidDays: parseInt(document.getElementById('th-unpaidDays').value,10) || DEFAULT_THRESHOLDS.unpaidDays,
  };
  saveThresholds(t);
  alert('기준이 저장됐습니다. (이 브라우저에만 저장되며, 다른 PC/브라우저에는 적용되지 않습니다)');
  renderRoster(); renderMain();
}
function resetThresholdSettings(){
  saveThresholds({...DEFAULT_THRESHOLDS});
  renderSettingsPage();
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
  const active = activeStores();
  const closedCount = stores.length - active.length;
  const graded = active.map(s=>({s, score:computeOVR(s)}));
  const buckets = {A:0, B:0, C:0, D:0, F:0};
  graded.forEach(({score})=>{ const g=grade(score).g; if(buckets[g]!==undefined) buckets[g]++; });
  const dangerGraded = graded.filter(({score})=>{ const g=grade(score).g; return g==='D' || g==='F'; }).sort((a,b)=>(a.score??0)-(b.score??0));
  const totalDangerPages = Math.max(1, Math.ceil(dangerGraded.length / DANGER_PER_PAGE));
  if(dangerPage > totalDangerPages) dangerPage = totalDangerPages;
  if(dangerPage < 1) dangerPage = 1;
  const dangerPageStart = (dangerPage-1) * DANGER_PER_PAGE;
  const dangerList = dangerGraded.slice(dangerPageStart, dangerPageStart + DANGER_PER_PAGE);
  const brands = [...new Set(active.map(s=>s.brand))];
  const brandStats = brands.map(b=>{
    const inBrand = graded.filter(({s})=>s.brand===b);
    const scored = inBrand.map(x=>x.score).filter(v=>v!==null);
    const avg = scored.length ? Math.round(scored.reduce((a,v)=>a+v,0)/scored.length) : null;
    return {brand:b, count:inBrand.length, avg};
  }).sort((a,b)=>b.count-a.count);

  const dangerIssueCount = collectIssues(active).filter(i=>i.level==='danger').length;
  // 전체 위험/주의 항목 피드는 위험(D등급) 매장의 이슈만 표시
  const feedIssuesAll = collectIssues(dangerGraded.map(x=>x.s));
  const totalIssuePages = Math.max(1, Math.ceil(feedIssuesAll.length / ISSUES_PER_PAGE));
  if(issueFeedPage > totalIssuePages) issueFeedPage = totalIssuePages;
  if(issueFeedPage < 1) issueFeedPage = 1;
  const pageStart = (issueFeedPage-1) * ISSUES_PER_PAGE;
  const feedIssues = feedIssuesAll.slice(pageStart, pageStart + ISSUES_PER_PAGE);
  const heatmap = buildHeatmap(active, brands);
  const recentChanged = [...stores].filter(s=>s.updatedAt).sort((a,b)=>new Date(b.updatedAt)-new Date(a.updatedAt)).slice(0,8);

  document.getElementById('main').innerHTML = `
    <div class="dash-head">
      <div class="eyebrow" style="font-size:10.5px; letter-spacing:.14em; color:var(--text-3); text-transform:uppercase; font-weight:600;">외식BG · RO실 · 전체 현황</div>
      <h2>전체 매장 현황</h2>
      <div class="sub">${active.length}개 매장 운영중 · ${brands.length}개 브랜드 · 위험 항목 ${dangerIssueCount}건${closedCount ? ` · 폐점/계약종료 ${closedCount}개 제외` : ''}</div>
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
      <div class="dash-panel-title">항목별 매장 보기</div>
      <div class="category-filter-grid">
        ${categoryLevelCounts(active).map(({cat,counts})=>`
          <div class="cf-row">
            <div class="cf-label">${categoryLabel(cat)}</div>
            <div class="cf-badges">
              <span class="issue-tag safe-tag clickable" onclick="goCategoryView('${cat}','safe')">양호 ${counts.safe}</span>
              <span class="issue-tag warn clickable" onclick="goCategoryView('${cat}','warn')">주의 ${counts.warn}</span>
              <span class="issue-tag danger clickable" onclick="goCategoryView('${cat}','danger')">위험 ${counts.danger}</span>
              <span class="issue-tag neutral clickable" onclick="goCategoryView('${cat}','neutral')">미입력 ${counts.neutral}</span>
            </div>
          </div>`).join('')}
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

    <div class="dash-panel">
      <div class="dash-panel-title">최근 변경된 매장</div>
      ${recentChanged.length ? recentChanged.map(s=>{
        const gr = grade(computeOVR(s));
        return `<div class="danger-row" onclick="selectStore('${s.id}')" style="display:flex; align-items:center; justify-content:space-between; gap:10px; padding:8px 4px; cursor:pointer; border-top:1px solid var(--hairline);">
          <div style="min-width:0;">
            <span style="font-size:12.5px; font-weight:600;">${s.name}</span>
            <span style="font-size:11px; color:var(--text-3); margin-left:6px;">${s.brand} · ${s.code}</span>
          </div>
          <div style="font-size:11px; color:var(--text-3); flex-shrink:0;">${(s.updatedAt||'').slice(0,10)}</div>
        </div>`;
      }).join('') : `<div class="empty-note">변경 이력이 없습니다.</div>`}
    </div>
  `;
}

function renderGradeView(){
  const graded = activeStores().map(s=>({s, score:computeOVR(s)})).filter(({score})=>grade(score).g===gradeView);
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

function renderCategoryView(){
  const cat = categoryView, level = categoryViewLevel;
  const matched = activeStores().map(s=>({s, score:computeOVR(s)})).filter(({s})=>statusLevel(cat,s)===level);
  matched.sort((a,b)=>(a.score??-1)-(b.score??-1));
  const totalPages = Math.max(1, Math.ceil(matched.length / GRADE_VIEW_PER_PAGE));
  if(categoryViewPage > totalPages) categoryViewPage = totalPages;
  if(categoryViewPage < 1) categoryViewPage = 1;
  const pageStart = (categoryViewPage-1) * GRADE_VIEW_PER_PAGE;
  const pageList = matched.slice(pageStart, pageStart + GRADE_VIEW_PER_PAGE);
  const levelColor = `var(--${level})`;

  document.getElementById('main').innerHTML = `
    <div class="dash-head">
      <div class="eyebrow" style="font-size:10.5px; letter-spacing:.14em; color:var(--text-3); text-transform:uppercase; font-weight:600; cursor:pointer;" onclick="goDashboard()">‹ 전체 현황으로</div>
      <h2>${categoryLabel(cat)} · <span class="num" style="color:${levelColor};">${statusLabel(level)}</span> 매장</h2>
      <div class="sub">${matched.length}개 매장</div>
    </div>

    <div class="dash-panel">
      <div class="dash-panel-title">${categoryLabel(cat)} · ${statusLabel(level)} 매장 목록 <span class="cnt" style="color:${levelColor};">${matched.length}</span>개</div>
      ${pageList.length ? pageList.map(({s,score})=>{
        const gr = grade(score);
        const detail = issueDetail(cat, s, level);
        return `
        <div class="danger-row expanded" onclick="selectStore('${s.id}')">
          <div class="dn-top">
            <div class="dn-title">
              <div class="dn-name">${s.name}</div>
              <div class="dn-brand">${s.brand} · ${s.code}</div>
            </div>
            <div class="dn-score" style="color:${gr.ring[0]};">${score===null?'–':score+'점'}</div>
          </div>
          <div class="dn-tags"><span class="issue-tag ${issueTagClass(level)}">${detail || statusLabel(level)}</span></div>
        </div>`;
      }).join('') : `<div class="empty-note">해당 조건의 매장이 없습니다.</div>`}
      ${renderPager(categoryViewPage, totalPages, 'goCategoryViewPage')}
    </div>
  `;
}

function renderSettingsPage(){
  document.getElementById('main').innerHTML = `
    <div class="dash-head">
      <div class="eyebrow" style="font-size:10.5px; letter-spacing:.14em; color:var(--text-3); text-transform:uppercase; font-weight:600; cursor:pointer;" onclick="goDashboard()">‹ 전체 현황으로</div>
      <h2>리스크 기준 설정</h2>
      <div class="sub">등급/색상을 나누는 기준값을 조정합니다. 이 브라우저(기기)에만 저장됩니다.</div>
    </div>
    <div class="dash-panel">
      <div class="dash-panel-title">미입금 위험 기준</div>
      <div class="edit-form open" style="max-width:360px;">
        <label>주의/위험 분기 금액 (만원) — 이 금액 이하면서 아래 경과일 이내면 주의, 초과하면 위험</label>
        <input id="th-unpaidLimit" type="number" value="${THRESHOLDS.unpaidLimitManwon}">
        <label>주의/위험 분기 경과일수 (일)</label>
        <input id="th-unpaidDays" type="number" value="${THRESHOLDS.unpaidDays}">
      </div>
    </div>
    <div class="dash-panel">
      <div class="actions">
        <button class="btn-cancel" onclick="resetThresholdSettings()">기본값으로 초기화</button>
        <button class="btn-save" onclick="applyThresholdSettings()">저장</button>
      </div>
    </div>
  `;
}

function renderMain(){
  if(showSettings){ renderSettingsPage(); return; }
  if(showUpload){ renderUploadPage(); return; }
  if(!currentId){
    if(gradeView){ renderGradeView(); }
    else if(categoryView){ renderCategoryView(); }
    else { renderDashboard(); }
    return;
  }
  const s = stores.find(x=>x.id===currentId);
  const score = computeOVR(s);
  const gr = grade(score);
  const lvl = overallLevel(score);

  const territoryLvl = statusLevel('territory', s);
  const estimateLvl = statusLevel('estimate', s);
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
          <select class="tag op-status-select ${OPERATION_STATUS_LEVEL[operationStatus(s)]}" onchange="saveOperationStatus(this.value)" title="운영상태">
            ${OPERATION_STATUSES.map(o=>`<option value="${o}" ${operationStatus(s)===o?'selected':''}>${o}</option>`).join('')}
          </select>
        </div>
        ${s.etc.scoreHistory && s.etc.scoreHistory.length>=2 ? `
        <div class="score-trend">
          ${trendBars(s.etc.scoreHistory.map(h=>h.score), lvl)}
          <span class="score-trend-label">최근 추이 (${s.etc.scoreHistory[0].date} → ${s.etc.scoreHistory[s.etc.scoreHistory.length-1].date})</span>
        </div>` : ''}
      </div>
      <div class="ovr-badge" style="--ring-1:${gr.ring[0]}; --ring-2:${gr.ring[1]};">
        <div class="grade num">${gr.g}</div>
        <div class="score num">${score===null?'데이터없음':score+'점'}</div>
        <div class="label">${score===null?'항목 입력 필요':'종합 안정도'}</div>
      </div>
    </div>

    <div class="stat-grid">
      ${statCard({
        num:'01', title:'영업지역 설정현황', level:territoryLvl, statusText: s.territory.scopeType==='-'?'미입력':s.territory.scopeType, formId:'f1',
        rows:[
          {k:'설정 범위', v: s.territory.scopeType==='-'?'미입력':s.territory.scopeType},
          {k:'설정 범위 상세', v: s.territory.scopeText || '-'},
          {k:'침해여부', v: territoryInfringement(s)},
          {k:'비고', v: s.territory.note || '-'},
        ],
        extra:`<div class="edit-form" id="f1">
          <label>설정 범위</label>
          <select id="e1-scopeType">
            <option value="-" ${s.territory.scopeType==='-'?'selected':''}>미입력(선택 안 함)</option>
            <option value="구획지정" ${s.territory.scopeType==='구획지정'?'selected':''}>구획지정</option>
            <option value="반경지정" ${s.territory.scopeType==='반경지정'?'selected':''}>반경지정</option>
            <option value="유통입점 (전체/미중복)" ${s.territory.scopeType==='유통입점 (전체/미중복)'?'selected':''}>유통입점 (전체/미중복)</option>
            <option value="유통입점 (전체/중복)" ${s.territory.scopeType==='유통입점 (전체/중복)'?'selected':''}>유통입점 (전체/중복)</option>
            <option value="유통입점 (층)" ${s.territory.scopeType==='유통입점 (층)'?'selected':''}>유통입점 (층)</option>
          </select>
          <label>설정 범위 상세</label><input id="e1-scopeText" value="${s.territory.scopeText}">
          <label>침해여부</label>
          <select id="e1-infringement">
            ${TERRITORY_INFRINGEMENT_OPTIONS.map(o=>`<option value="${o}" ${territoryInfringement(s)===o?'selected':''}>${o}</option>`).join('')}
          </select>
          <label>비고</label><textarea id="e1-note">${s.territory.note||''}</textarea>
          <div class="actions"><button class="btn-cancel" onclick="toggleEdit('f1')">취소</button><button class="btn-save" onclick="saveTerritory()">저장</button></div>
        </div>`
      })}

      ${statCard({
        num:'02', title:'예상매출액 관리', level:estimateLvl, statusText: (!s.revenueAchievement.status || s.revenueAchievement.status==='미입력')?(s.revenueMethod.method==='-'?'미입력':s.revenueMethod.method):s.revenueAchievement.status, formId:'f2',
        rows:[
          {k:'산정 방식', v: s.revenueMethod.method==='-'?'미입력':s.revenueMethod.method},
          {k:'목표매출(최소매출)', v:s.revenueMethod.estimatedAmount},
          {k:'실제매출', v:s.revenueAchievement.actualAmount},
          {k:'예상매출액 달성 여부', v: s.revenueAchievement.status || '미입력', risk: (!s.revenueAchievement.status || s.revenueAchievement.status==='미입력')?null:estimateLvl},
          {k:'비고', v: revenueNote(s) || '-'},
        ],
        extra:`<div class="edit-form" id="f2">
          <label>산정 방식</label>
          <select id="e2-method">
            <option value="-" ${s.revenueMethod.method==='-'?'selected':''}>미입력(선택 안 함)</option>
            <option value="인근가맹점 5곳" ${s.revenueMethod.method==='인근가맹점 5곳'?'selected':''}>인근가맹점 5곳</option>
            <option value="예외산정(의사결정o)" ${s.revenueMethod.method==='예외산정(의사결정o)'?'selected':''}>예외산정(의사결정o)</option>
            <option value="예외산정(임의)" ${s.revenueMethod.method==='예외산정(임의)'?'selected':''}>예외산정(임의)</option>
            <option value="미산정" ${s.revenueMethod.method==='미산정'?'selected':''}>미산정</option>
          </select>
          <label>목표매출(최소매출)</label><input id="e2-amount" value="${s.revenueMethod.estimatedAmount}">
          <label>실제매출</label><input id="e3-actual" value="${s.revenueAchievement.actualAmount}">
          <label>예상매출액 달성 여부</label>
          <select id="e3-status">
            ${REVENUE_ACHIEVEMENT_OPTIONS.map(o=>`<option value="${o}" ${s.revenueAchievement.status===o?'selected':''}>${o}</option>`).join('')}
          </select>
          <label>비고</label><textarea id="e2-note">${revenueNote(s)}</textarea>
          <div class="actions"><button class="btn-cancel" onclick="toggleEdit('f2')">취소</button><button class="btn-save" onclick="saveEstimate()">저장</button></div>
        </div>`
      })}

      ${statCard({
        num:'03', title:'계약체결단계 하자유무', level:contractLvl, statusText: s.contractDefect.status==='미입력'?'미입력':(s.contractDefect.status==='있음'?`하자 ${s.contractDefect.types.length}건`:'하자없음'), formId:'f4',
        rows:[
          {k:'하자 유무', v:s.contractDefect.status},
          {k:'내용', v: s.contractDefect.status==='있음' ? s.contractDefect.types.join(', ') : '-'},
        ],
        extra:`<div class="edit-form" id="f4">
          <label>하자 유무</label>
          <select id="e4-has" onchange="document.getElementById('e4-types-wrap').style.display=this.value==='있음'?'':'none'">
            <option value="미입력" ${s.contractDefect.status==='미입력'?'selected':''}>미입력</option>
            <option value="없음" ${s.contractDefect.status==='없음'?'selected':''}>없음</option>
            <option value="있음" ${s.contractDefect.status==='있음'?'selected':''}>있음</option>
          </select>
          <div id="e4-types-wrap" style="${condStyle(s.contractDefect.status,'있음')}">
            <label>하자 유형 (복수 선택)</label>
            <div class="checkbox-group">
              ${CONTRACT_DEFECT_TYPES.map((t,i)=>`<label class="checkbox-item"><input type="checkbox" id="e4-type-${i}" value="${t}" ${s.contractDefect.types.includes(t)?'checked':''} ${t==='기타'?`onchange="document.getElementById('e4-detailText-wrap').style.display=this.checked?'':'none'"`:''}> ${t}</label>`).join('')}
            </div>
            <div id="e4-detailText-wrap" style="${condStyle(s.contractDefect.types.includes('기타'),true)}">
              <label>기타 내용</label><textarea id="e4-detailText">${s.contractDefect.detailText}</textarea>
            </div>
          </div>
          <div class="actions"><button class="btn-cancel" onclick="toggleEdit('f4')">취소</button><button class="btn-save" onclick="saveContract()">저장</button></div>
        </div>`
      })}

      ${statCard({
        num:'04', title:'미입금 발생여부', level:unpaidLvl, statusText: s.unpaidStatus.status, formId:'f5',
        rows:[
          {k:'미입금액', v:s.unpaidStatus.status==='있음'?fmtManwon(s.unpaidStatus.amount):'-', risk: s.unpaidStatus.status==='있음'?unpaidLvl:null},
          {k:'발생일자', v:s.unpaidStatus.status==='있음'?s.unpaidStatus.occurredDate:'-'},
          {k:'비고', v:s.unpaidStatus.note},
        ],
        extra:`<div class="edit-form" id="f5">
          <label>미입금 여부</label>
          <select id="e5-has" onchange="document.getElementById('e5-details-wrap').style.display=this.value==='있음'?'':'none'">
            <option value="미입력" ${s.unpaidStatus.status==='미입력'?'selected':''}>미입력</option>
            <option value="없음" ${s.unpaidStatus.status==='없음'?'selected':''}>없음</option>
            <option value="있음" ${s.unpaidStatus.status==='있음'?'selected':''}>있음</option>
          </select>
          <div id="e5-details-wrap" style="${condStyle(s.unpaidStatus.status,'있음')}">
            <label>미입금액 (만원)</label><input id="e5-amount" type="number" value="${s.unpaidStatus.amount}">
            <label>발생일자</label><input id="e5-date" type="date" value="${s.unpaidStatus.occurredDate==='-'?'':s.unpaidStatus.occurredDate}">
          </div>
          <label>비고</label><textarea id="e5-note">${s.unpaidStatus.note}</textarea>
          <div class="actions"><button class="btn-cancel" onclick="toggleEdit('f5')">취소</button><button class="btn-save" onclick="saveUnpaid()">저장</button></div>
        </div>`
      })}

      ${statCard({
        num:'05', title:'기타 가맹사업법 이슈', level:hygieneLvl, statusText: s.hygiene.status==='미입력'?'미입력':(s.hygiene.status==='있음'?`이슈 ${s.hygiene.areas.length}건`:'이슈없음'), formId:'f6',
        rows:[
          {k:'이슈 발생영역', v: s.hygiene.status==='있음' ? s.hygiene.areas.join(', ') : '-'},
          {k:'비고', v:s.hygiene.note || '-'},
        ],
        extra:`<div class="edit-form" id="f6">
          <label>이슈 유무</label>
          <select id="e6-has" onchange="document.getElementById('e6-areas-wrap').style.display=this.value==='있음'?'':'none'">
            <option value="미입력" ${s.hygiene.status==='미입력'?'selected':''}>미입력</option>
            <option value="없음" ${s.hygiene.status==='없음'?'selected':''}>없음</option>
            <option value="있음" ${s.hygiene.status==='있음'?'selected':''}>있음</option>
          </select>
          <div id="e6-areas-wrap" style="${condStyle(s.hygiene.status,'있음')}">
            <label>이슈 발생영역 (복수 선택)</label>
            <div class="checkbox-group">
              ${HYGIENE_ISSUE_AREAS.map((t,i)=>`<label class="checkbox-item"><input type="checkbox" id="e6-area-${i}" value="${t}" ${s.hygiene.areas.includes(t)?'checked':''}> ${t}</label>`).join('')}
            </div>
          </div>
          <label>비고</label><textarea id="e6-note">${s.hygiene.note}</textarea>
          <div class="actions"><button class="btn-cancel" onclick="toggleEdit('f6')">취소</button><button class="btn-save" onclick="saveHygiene()">저장</button></div>
        </div>`
      })}
    </div>

    <div class="notes-panel">
      <div class="sc-top">
        <div>
          <div class="sc-num">06</div>
          <div class="sc-title">특이사항</div>
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
  s.territory = {
    scopeType: document.getElementById('e1-scopeType').value,
    scopeText: document.getElementById('e1-scopeText').value,
    infringement: document.getElementById('e1-infringement').value,
    note: document.getElementById('e1-note').value,
  };
  persistStore(s);
  renderRoster(); renderMain();
}
async function saveOperationStatus(value){
  const s=currentStore();
  s.etc.operationStatus = value;
  persistStore(s);
  renderRoster(); renderMain();
}
async function saveEstimate(){
  const s=currentStore();
  const status = document.getElementById('e3-status').value;
  s.revenueMethod = {
    method: document.getElementById('e2-method').value,
    estimatedAmount: document.getElementById('e2-amount').value,
    note: document.getElementById('e2-note').value,
  };
  s.revenueAchievement = {
    actualAmount: document.getElementById('e3-actual').value,
    status,
  };
  persistStore(s);
  renderRoster(); renderMain();
}
async function saveContract(){
  const s=currentStore();
  const status = document.getElementById('e4-has').value;
  const types = status==='있음' ? CONTRACT_DEFECT_TYPES.filter((t,i)=>document.getElementById(`e4-type-${i}`).checked) : [];
  s.contractDefect = {
    status, types,
    detailText: types.includes('기타') ? document.getElementById('e4-detailText').value : '',
  };
  persistStore(s);
  renderRoster(); renderMain();
}
async function saveUnpaid(){
  const s=currentStore();
  const status = document.getElementById('e5-has').value;
  s.unpaidStatus = {
    status,
    amount: status==='있음' ? (document.getElementById('e5-amount').value || 0) : 0,
    occurredDate: status==='있음' ? (document.getElementById('e5-date').value || '-') : '-',
    note:document.getElementById('e5-note').value,
  };
  persistStore(s);
  renderRoster(); renderMain();
}
async function saveHygiene(){
  const s=currentStore();
  const status = document.getElementById('e6-has').value;
  const areas = status==='있음' ? HYGIENE_ISSUE_AREAS.filter((t,i)=>document.getElementById(`e6-area-${i}`).checked) : [];
  s.hygiene = { status, areas, note:document.getElementById('e6-note').value };
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
// 컬럼 정의: 실제 UI(수정 폼)에서 쓰는 값과 동일한 선택지를 드롭다운으로 제공한다.
const EXCEL_COLS = [
  {key:'매장코드', group:'기본정보', required:true, example:'CAFE-101', note:'기존 매장코드와 같으면 정보가 수정되고, 다르면 신규 매장으로 추가됩니다.'},
  {key:'매장명', group:'기본정보', required:true, example:'더카페 강남점'},
  {key:'브랜드', group:'기본정보', required:true, example:'더카페', note:'기존 브랜드명과 동일한 표기로 입력해주세요.'},
  {key:'주소', group:'기본정보', example:'서울시 강남구 테헤란로 1'},
  {key:'담당자', group:'기본정보', example:'홍길동'},
  {key:'기타_운영상태', group:'기본정보', kind:'select', options:OPERATION_STATUSES, example:'운영중', note:'폐점/계약종료 매장은 대시보드 위험 집계에서 자동 제외되고 매장 목록에는 참고용으로 남습니다.'},

  {key:'영업지역_설정범위', group:'영업지역', kind:'select', options:['-','구획지정','반경지정','유통입점 (전체/미중복)','유통입점 (전체/중복)','유통입점 (층)'], example:'반경지정', note:'"-"는 미입력(데이터 없음)을 의미합니다.'},
  {key:'영업지역_설정범위상세', group:'영업지역', example:''},
  {key:'영업지역_침해여부', group:'영업지역', kind:'select', options:TERRITORY_INFRINGEMENT_OPTIONS, example:'이슈없음'},
  {key:'영업지역_비고', group:'영업지역', example:''},

  {key:'예상매출_산정방식', group:'예상매출액', kind:'select', options:['-','인근가맹점 5곳','예외산정(의사결정o)','예외산정(임의)','미산정'], example:'인근가맹점 5곳', note:'"-"는 미입력(데이터 없음)을 의미합니다.'},
  {key:'예상매출_목표매출(최소매출)', group:'예상매출액', example:'5,000만'},
  {key:'예상매출_실제매출', group:'예상매출액', example:'5,200만'},
  {key:'예상매출_달성여부', group:'예상매출액', kind:'select', options:REVENUE_ACHIEVEMENT_OPTIONS, example:'달성'},
  {key:'예상매출_비고', group:'예상매출액', example:''},

  {key:'계약하자_유무', group:'계약하자', kind:'select', options:['미입력','없음','있음'], example:'없음'},
  {key:'계약하자_유형', group:'계약하자', example:'', note:`계약하자_유무가 "있음"일 때, 다음 중 해당하는 유형을 콤마(,)로 구분해 복수 입력: ${CONTRACT_DEFECT_TYPES.join(' / ')}`},
  {key:'계약하자_상세', group:'계약하자', example:'', note:'유형에 "기타"가 포함될 때만 작성'},

  {key:'미입금_여부', group:'미입금', kind:'select', options:['미입력','없음','있음'], example:'없음'},
  {key:'미입금_금액(만원)', group:'미입금', kind:'number', example:0, note:'만원 단위 숫자만 입력 (예: 295)'},
  {key:'미입금_발생일', group:'미입금', kind:'date', example:'', note:'미입금_여부가 "있음"일 때만 작성'},
  {key:'미입금_비고', group:'미입금', example:'최근 12개월 연체 없음'},

  {key:'가맹사업법이슈_유무', group:'가맹사업법이슈', kind:'select', options:['미입력','없음','있음'], example:'없음'},
  {key:'가맹사업법이슈_발생영역', group:'가맹사업법이슈', example:'', note:`가맹사업법이슈_유무가 "있음"일 때, 다음 중 해당하는 영역을 콤마(,)로 구분해 복수 입력: ${HYGIENE_ISSUE_AREAS.join(' / ')}`},
  {key:'가맹사업법이슈_비고', group:'가맹사업법이슈', example:''},

  {key:'기타_메모', group:'기타', example:''},
  {key:'기타_작성자', group:'기타', example:'담당자명'},
];
const EXCEL_HEADERS = EXCEL_COLS.map(c=>c.key);
const EXCEL_GROUP_COLORS = {
  '기본정보':'FFE2E8F0', '영업지역':'FFDCEAFB', '예상매출액':'FFE0F2E9',
  '계약하자':'FFFCE4E4', '미입금':'FFFCE4E4', '가맹사업법이슈':'FFFDEFD3', '기타':'FFE9E5F7',
};

function addGuideSheet(wb){
  const guide = wb.addWorksheet('작성가이드');
  guide.columns = [
    {header:'구분', key:'group', width:12},
    {header:'컬럼명', key:'key', width:22},
    {header:'필수', key:'required', width:8},
    {header:'입력 형식 / 허용값', key:'format', width:46},
    {header:'예시', key:'example', width:20},
  ];
  guide.getRow(1).font = {bold:true, color:{argb:'FFFFFFFF'}};
  guide.getRow(1).fill = {type:'pattern', pattern:'solid', fgColor:{argb:'FF3A4A63'}};
  guide.views = [{state:'frozen', ySplit:1}];
  EXCEL_COLS.forEach(c=>{
    const format = c.kind==='select' ? `드롭다운 선택: ${c.options.join(' / ')}${c.note ? ' · '+c.note : ''}`
      : c.kind==='date' ? `날짜 (YYYY-MM-DD)${c.note ? ' · '+c.note : ''}`
      : c.kind==='number' ? `숫자${c.note ? ' · '+c.note : ''}`
      : (c.note || '자유 기재');
    const row = guide.addRow({group:c.group, key:c.key, required:c.required?'필수':'', format, example: typeof c.example==='number' ? c.example : (c.example||'')});
    if(c.required) row.getCell('required').font = {bold:true, color:{argb:'FFC0392B'}};
    row.getCell('format').alignment = {wrapText:true, vertical:'top'};
  });
  guide.getColumn('group').eachCell({includeEmpty:false}, cell=>{ cell.alignment = {vertical:'top'}; });
}

// dataRows: EXCEL_HEADERS 키를 갖는 객체 배열. italicizeFirstRow: 템플릿의 예시행처럼 흐리게 표시할지 여부.
function addStoreDataSheet(wb, dataRows, {italicizeFirstRow=false}={}){
  const ws = wb.addWorksheet('매장데이터');
  ws.columns = EXCEL_COLS.map(c=>({header:c.key, key:c.key, width: Math.max(14, c.key.length*1.3)}));
  const headerRow = ws.getRow(1);
  headerRow.font = {bold:true};
  headerRow.height = 22;
  headerRow.eachCell((cell, colNum)=>{
    const col = EXCEL_COLS[colNum-1];
    cell.fill = {type:'pattern', pattern:'solid', fgColor:{argb: EXCEL_GROUP_COLORS[col.group] || 'FFE2E8F0'}};
    cell.alignment = {vertical:'middle', wrapText:true};
    if(col.required){ cell.font = {bold:true, color:{argb:'FFC0392B'}}; }
    const commentParts = [];
    if(col.required) commentParts.push('[필수 입력 항목]');
    if(col.kind==='select') commentParts.push(`드롭다운에서 선택: ${col.options.join(', ')}`);
    if(col.kind==='date') commentParts.push('날짜 형식: YYYY-MM-DD');
    if(col.note) commentParts.push(col.note);
    if(commentParts.length) cell.note = commentParts.join('\n');
  });
  ws.views = [{state:'frozen', xSplit:2, ySplit:1}];

  dataRows.forEach(r=>ws.addRow(r));
  if(italicizeFirstRow && ws.rowCount>=2){
    ws.getRow(2).eachCell(cell=>{ cell.font = {italic:true, color:{argb:'FF8A94A6'}}; });
  }

  const validationRows = Math.max(300, dataRows.length + 50);
  EXCEL_COLS.forEach((col, idx)=>{
    if(col.kind!=='select') return;
    const colLetter = ws.getColumn(idx+1).letter;
    const formula = `"${col.options.join(',')}"`;
    for(let r=2; r<=validationRows; r++){
      ws.getCell(`${colLetter}${r}`).dataValidation = {
        type:'list', allowBlank:true, formulae:[formula],
        showErrorMessage:true, errorStyle:'warning',
        errorTitle:'허용되지 않는 값', error:'목록에 없는 값입니다. 그대로 두려면 "예"를 눌러 계속 입력할 수 있습니다.',
      };
    }
  });
  return ws;
}

async function downloadWorkbook(wb, filename){
  const buffer = await wb.xlsx.writeBuffer();
  const blob = new Blob([buffer], {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}

async function downloadExcelTemplate(){
  const wb = new ExcelJS.Workbook();
  addGuideSheet(wb);
  const example = {};
  EXCEL_COLS.forEach(c=>{ example[c.key] = c.example; });
  addStoreDataSheet(wb, [example], {italicizeFirstRow:true});
  await downloadWorkbook(wb, '가맹점_데이터_업로드_템플릿.xlsx');
}

function storeToExcelRow(s){
  return {
    '매장코드': s.code,
    '매장명': s.name,
    '브랜드': s.brand,
    '주소': s.address,
    '담당자': s.manager,
    '기타_운영상태': operationStatus(s),
    '영업지역_설정범위': s.territory.scopeType,
    '영업지역_설정범위상세': s.territory.scopeText,
    '영업지역_침해여부': territoryInfringement(s),
    '영업지역_비고': s.territory.note || '',
    '예상매출_산정방식': s.revenueMethod.method,
    '예상매출_목표매출(최소매출)': s.revenueMethod.estimatedAmount,
    '예상매출_실제매출': s.revenueAchievement.actualAmount,
    '예상매출_달성여부': s.revenueAchievement.status || '미입력',
    '예상매출_비고': revenueNote(s),
    '계약하자_유무': s.contractDefect.status,
    '계약하자_유형': s.contractDefect.types.join(','),
    '계약하자_상세': s.contractDefect.detailText,
    '미입금_여부': s.unpaidStatus.status,
    '미입금_금액(만원)': s.unpaidStatus.amount,
    '미입금_발생일': s.unpaidStatus.occurredDate,
    '미입금_비고': s.unpaidStatus.note,
    '가맹사업법이슈_유무': s.hygiene.status,
    '가맹사업법이슈_발생영역': s.hygiene.areas.join(','),
    '가맹사업법이슈_비고': s.hygiene.note,
    '기타_메모': s.etc.memo,
    '기타_작성자': s.etc.author,
  };
}

async function downloadAllDataExcel(){
  const wb = new ExcelJS.Workbook();
  addGuideSheet(wb);
  const sorted = [...stores].sort((a,b)=> a.code.localeCompare(b.code));
  addStoreDataSheet(wb, sorted.map(storeToExcelRow), {italicizeFirstRow:false});
  const stamp = today();
  await downloadWorkbook(wb, `가맹점_전체데이터_${stamp}.xlsx`);
}

function onExcelFileSelected(evt){
  const file = evt.target.files && evt.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e=>{
    try{
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, {type:'array'});
      const sheet = wb.Sheets['매장데이터'] || wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet, {defval:''});
      uploadState.fileName = file.name;
      uploadState.parsed = validateExcelRows(rows);
      uploadState.result = null;
      uploadState.missingCodes = computeMissingCodes(uploadState.parsed);
      renderMain();
    }catch(err){
      alert('엑셀 파일을 읽는 중 오류가 발생했습니다: ' + err.message);
    }
  };
  reader.readAsArrayBuffer(file);
  evt.target.value = '';
}

function computeMissingCodes(entries){
  const uploadedCodes = new Set(entries.filter(e=>e.code).map(e=>e.code));
  return stores.filter(s=>!uploadedCodes.has(s.code)).map(s=>({code:s.code, name:s.name}));
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
  const id = existing ? existing.id : code.replace(/[^A-Za-z0-9]/g,'').toUpperCase();

  const achievementStatus = pick(row['예상매출_달성여부'], REVENUE_ACHIEVEMENT_OPTIONS, existing ? (existing.revenueAchievement.status || '미입력') : '미입력');

  return {
    id, name, brand, code,
    address: cs(row['주소']) || (existing ? existing.address : '-'),
    manager: cs(row['담당자']) || (existing ? existing.manager : '-'),
    territory: {
      scopeType: pick(row['영업지역_설정범위'], ['-','구획지정','반경지정','유통입점 (전체/미중복)','유통입점 (전체/중복)','유통입점 (층)'], '-'),
      scopeText: cs(row['영업지역_설정범위상세']),
      infringement: pick(row['영업지역_침해여부'], TERRITORY_INFRINGEMENT_OPTIONS, existing ? territoryInfringement(existing) : '미입력'),
      note: cs(row['영업지역_비고']) || (existing ? existing.territory.note : ''),
    },
    revenueMethod: {
      method: pick(row['예상매출_산정방식'], ['-','인근가맹점 5곳','예외산정(의사결정o)','예외산정(임의)','미산정'], '-'),
      estimatedAmount: cs(row['예상매출_목표매출(최소매출)']) || '-',
      note: cs(row['예상매출_비고']) || (existing ? revenueNote(existing) : ''),
    },
    revenueAchievement: {
      status: achievementStatus,
      actualAmount: cs(row['예상매출_실제매출']) || '-',
    },
    contractDefect: {
      status: pick(row['계약하자_유무'], ['미입력','없음','있음'], '미입력'),
      types: cs(row['계약하자_유형']).split(',').map(t=>t.trim()).filter(t=>CONTRACT_DEFECT_TYPES.includes(t)),
      detailText: cs(row['계약하자_상세']),
    },
    unpaidStatus: {
      status: pick(row['미입금_여부'], ['미입력','없음','있음'], '미입력'),
      amount: Number(row['미입금_금액(만원)']) || 0,
      occurredDate: cs(row['미입금_발생일']) || '-',
      note: cs(row['미입금_비고']),
    },
    hygiene: {
      status: pick(row['가맹사업법이슈_유무'], ['미입력','없음','있음'], '미입력'),
      areas: cs(row['가맹사업법이슈_발생영역']).split(',').map(t=>t.trim()).filter(t=>HYGIENE_ISSUE_AREAS.includes(t)),
      note: cs(row['가맹사업법이슈_비고']),
    },
    etc: {
      memo: cs(row['기타_메모']) || (existing ? existing.etc.memo : ''),
      author: cs(row['기타_작성자']) || (existing ? existing.etc.author : '-'),
      date: today(),
      operationStatus: pick(row['기타_운영상태'], OPERATION_STATUSES, existing ? operationStatus(existing) : '운영중'),
      scoreHistory: existing ? (existing.etc.scoreHistory || []) : [],
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
    pushScoreHistory(storeObj);
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
      <div class="dash-panel-title">0. 현재 전체 데이터 내보내기</div>
      <div style="font-size:12.5px; color:var(--text-2); line-height:1.6; margin-bottom:12px;">
        지금 등록된 ${stores.length}개 매장의 전체 입력값을 엑셀 한 장으로 내려받습니다. 빈 템플릿이 아니라 <b>현재 값이 그대로 채워진 파일</b>이라, 열어서 훑어보고 필요한 셀만 고친 뒤 그대로 아래 "2. 파일 업로드"에 다시 올리면 됩니다.
      </div>
      <button class="btn-save" style="width:auto; padding:9px 16px;" onclick="downloadAllDataExcel()">현재 데이터 내보내기 (.xlsx)</button>
    </div>

    <div class="dash-panel">
      <div class="dash-panel-title">1. 템플릿 준비</div>
      <div style="font-size:12.5px; color:var(--text-2); line-height:1.6; margin-bottom:12px;">
        아래 템플릿을 내려받아 형식에 맞게 데이터를 채운 뒤 업로드해주세요. <b>매장코드</b>가 기존 매장과 일치하면 해당 매장 정보가 업데이트되고, 일치하는 매장이 없으면 신규 매장으로 추가됩니다.<br>
        템플릿의 <b>"작성가이드"</b> 시트에서 각 항목의 필수여부와 입력형식을 확인할 수 있고, <b>"매장데이터"</b> 시트에서는 상태값 컬럼(빨간 글씨 헤더 = 필수)을 셀 클릭 시 나오는 드롭다운으로 선택할 수 있습니다. 헤더에 마우스를 올리면 작성 방법 메모도 볼 수 있어요.
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

    ${uploadState.missingCodes && uploadState.missingCodes.length ? `
    <div class="dash-panel dash-panel--danger">
      <div class="dash-panel-title">⚠ 이번 파일에 빠진 기존 매장 <span class="cnt">${uploadState.missingCodes.length}</span>개</div>
      <div style="font-size:12.5px; color:var(--text-2); line-height:1.6; margin-bottom:10px;">
        현재 매장 목록에는 있지만 이번 엑셀 파일에는 없는 매장코드입니다. 폐점 등 의도적인 제외가 아니라면, 원본 파일에서 실수로 빠지지 않았는지 반영 전에 확인하세요. (반영해도 이 매장들은 삭제되지 않고 그대로 유지됩니다)
      </div>
      <details>
        <summary style="cursor:pointer; font-size:12px; color:var(--text-2);">목록 보기</summary>
        <div style="margin-top:8px; font-size:11.5px; color:var(--text-3); line-height:1.8; max-height:200px; overflow-y:auto;">
          ${uploadState.missingCodes.map(m=>`<div>· ${m.code} (${m.name})</div>`).join('')}
        </div>
      </details>
    </div>` : ''}

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
// loadFromSupabase()는 로그인 세션이 확인된 후 ACCESS LOCK 로직에서 호출됩니다.
