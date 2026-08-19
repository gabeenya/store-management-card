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
  currentId = stores[0].id;
  renderBrandFilter(); renderRoster(); renderMain();
  setDbStatus(`DB 연결됨 · ${stores.length}개 매장`, true);
}

let currentId = null;
let activeBrand = '전체';

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
  if(score>=90) return {g:'S', ring:['var(--gold-1)','var(--gold-2)']};
  if(score>=78) return {g:'A', ring:['var(--silver-1)','var(--silver-2)']};
  if(score>=60) return {g:'B', ring:['var(--steel-1)','var(--steel-2)']};
  if(score>=40) return {g:'C', ring:['var(--warn)','var(--gold-2)']};
  return {g:'D', ring:['var(--danger)','#7a2530']};
}
function overallLevel(score){ if(score===null) return 'neutral'; return score>=78?'safe':score>=50?'warn':'danger'; }
function statusLabel(l){ return l==='safe'?'양호':l==='warn'?'주의':l==='danger'?'위험':'미입력'; }

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
    const lvl = overallLevel(score);
    const gr = grade(score);
    return `<div class="roster-item ${s.id===currentId?'active':''}" onclick="selectStore('${s.id}')">
      <div class="r-dot ${lvl}"></div>
      <div class="r-info">
        <div class="r-name">${s.name}</div>
        <div class="r-brand">${s.brand} · ${s.code}</div>
      </div>
      <div class="r-ovr num" style="color:${gr.ring[0]}; border:1px solid ${gr.ring[0]}44; background:${gr.ring[0]}14;">${score===null?'–':score}</div>
    </div>`;
  }).join('') || `<div style="padding:20px; color:var(--text-3); font-size:12.5px; text-align:center;">검색 결과가 없습니다</div>`;
}
function selectStore(id){ currentId=id; renderRoster(); renderMain(); }
function goDashboard(){ currentId=null; renderRoster(); renderMain(); }
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
    <div class="sc-body">${rows.map(r=>`<div class="row"><span class="k">${r.k}</span><span class="v">${r.v}</span></div>`).join('')}</div>
    ${extra||''}
  </div>`;
}

function toggleEdit(id){
  const el = document.getElementById(id);
  el.classList.toggle('open');
}
function condStyle(val, match){ return val===match ? '' : 'display:none;'; }

/* =================== DASHBOARD =================== */
function renderDashboard(){
  const graded = stores.map(s=>({s, score:computeOVR(s)}));
  const buckets = {S:0, A:0, B:0, C:0, D:0};
  graded.forEach(({score})=>{ const g=grade(score).g; if(buckets[g]!==undefined) buckets[g]++; });
  const dangerList = graded.filter(({s,score})=>grade(score).g==='D').sort((a,b)=>(a.score??0)-(b.score??0)).slice(0,10);
  const brands = [...new Set(stores.map(s=>s.brand))];
  const brandStats = brands.map(b=>{
    const inBrand = graded.filter(({s})=>s.brand===b);
    const scored = inBrand.map(x=>x.score).filter(v=>v!==null);
    const avg = scored.length ? Math.round(scored.reduce((a,v)=>a+v,0)/scored.length) : null;
    return {brand:b, count:inBrand.length, avg};
  }).sort((a,b)=>b.count-a.count);

  document.getElementById('main').innerHTML = `
    <div class="dash-head">
      <div class="eyebrow" style="font-size:10.5px; letter-spacing:.14em; color:var(--text-3); text-transform:uppercase; font-weight:600;">외식BG · RO실 · 전체 현황</div>
      <h2>전체 매장 현황</h2>
      <div class="sub">${stores.length}개 매장 · ${brands.length}개 브랜드</div>
    </div>

    <div class="grade-pills">
      ${['S','A','B','C','D'].map(g=>{
        const ring = grade(g==='S'?95:g==='A'?85:g==='B'?70:g==='C'?50:20).ring;
        return `<div class="grade-pill"><div class="g num" style="color:${ring[0]};">${g}</div><div class="c">${buckets[g]}개</div></div>`;
      }).join('')}
    </div>

    <div class="dash-panel">
      <div class="dash-panel-title">⚠ 위험(D등급) 매장 <span class="cnt">${dangerList.length}</span>개</div>
      ${dangerList.length ? dangerList.map(({s,score})=>`
        <div class="danger-row" onclick="selectStore('${s.id}')">
          <div><div class="dn-name">${s.name}</div><div class="dn-brand">${s.brand} · ${s.code}</div></div>
          <div class="dn-score">${score}점</div>
        </div>`).join('') : `<div class="empty-note">위험 등급 매장이 없습니다.</div>`}
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

function renderMain(){
  if(!currentId){ renderDashboard(); return; }
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
          {k:'미입금액', v:s.unpaidStatus.hasUnpaid?s.unpaidStatus.amount:'-'},
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

/* =================== INIT =================== */
renderBrandFilter();
renderRoster();
renderMain();
loadFromSupabase();
