const JHProfile = (() => {
  let _editing = false;

  function render() {
    const el = document.getElementById('profile-content');
    if (!el) return;
    _editing = false;
    _renderMain(el);
  }

  function _renderMain(el) {
    const p       = JHState.getProfile();
    const streak  = JHState.getStreak();
    const sessions= JHState.getSessions();
    const col     = JHState.getBeltColor(p.belt || 'toRed');
    const beltPct = JHState.beltProgress(p.belt || 'toRed');
    const label   = JHState.getBeltLabel(p.belt || 'toRed') || 'Red';
    const favs    = JHState.getFavs();
    const pinned  = JHState.getPinned();

    // Count mastered techniques for current belt
    let mastered = 0;
    if (typeof BELT_DATA !== 'undefined') {
      const bd = BELT_DATA.find(b => b.id === (p.belt || 'toRed'));
      if (bd) mastered = bd.groups.flatMap(g => g.items).filter(item => JHState.isDone(bd.id + '::' + item)).length;
    }

    el.innerHTML = `
      <!-- ── Header ── -->
      <div class="flex items-center gap-4 mb-1">
        <div class="w-16 h-16 rounded-full flex items-center justify-center font-jakarta font-extrabold shrink-0"
          style="background:${col}22;border:2px solid ${col};font-size:24px;color:${col}">
          ${(p.name || 'J')[0].toUpperCase()}
        </div>
        <div class="flex-1 min-w-0">
          <h2 class="font-jakarta font-bold" style="font-size:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.name || 'Judoka'}</h2>
          <div class="flex items-center gap-2 mt-1">
            <img src="${JHState.getBeltIcon(p.belt || 'toRed')}" style="height:14px;width:auto;object-fit:contain" alt=""/>
            <span class="font-jakarta font-bold" style="font-size:11px;color:${col}">${label} Belt</span>
            <span style="font-size:11px;color:rgba(229,226,225,0.3)">&bull; ${beltPct}% complete</span>
          </div>
        </div>
        <button onclick="JHProfile.startEdit()"
          style="width:36px;height:36px;border-radius:50%;background:#1c1b1b;border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0">
          <span class="ms" style="font-size:18px;color:#f2ca50">edit</span>
        </button>
      </div>

      <!-- ── Stats row ── -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
        ${[
          { label:'Day Streak',  value: streak,    icon:'local_fire_department', col:'#f59e0b' },
          { label:'Mastered',    value: mastered,  icon:'military_tech',         col:col       },
          { label:'Saved',       value: favs.length, icon:'favorite',            col:'#ef4444' },
        ].map(s => `
          <div class="glass rounded-2xl p-4 text-center" style="border:1px solid rgba(255,255,255,0.06)">
            <span class="ms ms-fill" style="font-size:20px;color:${s.col}">${s.icon}</span>
            <p class="font-jakarta font-extrabold mt-1" style="font-size:22px;color:#e5e2e1">${s.value}</p>
            <p style="font-size:10px;color:rgba(229,226,225,0.4);letter-spacing:0.02em">${s.label}</p>
          </div>`).join('')}
      </div>

      <!-- ── Cold-start nudge (only when nothing mastered yet) ── -->
      ${mastered === 0 && streak === 0 ? `
      <div style="background:linear-gradient(135deg,${col}14,${col}06);border:1px solid ${col}25;border-radius:16px;padding:18px 18px 18px;display:flex;gap:14px;align-items:flex-start;cursor:pointer" onclick="JHHome.startSession ? JHRouter.go('home') : JHRouter.go('browse')">
        <span class="ms ms-fill" style="font-size:28px;color:${col};flex-shrink:0;margin-top:2px">sports_martial_arts</span>
        <div>
          <p class="font-jakarta font-extrabold" style="font-size:14px;color:#e5e2e1;margin-bottom:4px">Ready to start training?</p>
          <p style="font-size:13px;color:rgba(229,226,225,0.5);line-height:1.5">Mark your first technique as mastered to start your streak. Tap <strong style="color:${col}">HOME</strong> and hit Start Training.</p>
        </div>
      </div>` : ''}

      <!-- ── Belt progress ── -->
      <div class="glass rounded-2xl p-5" style="border:1px solid rgba(255,255,255,0.06)">
        <div class="flex items-center justify-between mb-2">
          <p class="font-jakarta font-extrabold" style="font-size:10px;color:#f2ca50;letter-spacing:0.12em">CURRENT GRADE</p>
          <span class="font-jakarta font-bold" style="font-size:12px;color:${col}">${beltPct}%</span>
        </div>
        <div class="w-full rounded-full h-2 mb-3" style="background:#2a2a2a">
          <div class="h-2 rounded-full" style="width:${beltPct}%;background:${col};transition:width 0.4s"></div>
        </div>
        <button onclick="JHRouter.go('grade')" class="w-full py-3 rounded-xl font-jakarta font-bold active-scale"
          style="background:${col}14;border:1px solid ${col}30;color:${col};font-size:13px">
          View Grading Checklist →
        </button>
      </div>

      <!-- ── Pinned techniques ── -->
      ${pinned.length ? `
      <div>
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-jakarta font-bold" style="font-size:16px">📌 Pinned</h3>
          <span style="font-size:12px;color:rgba(229,226,225,0.35)">${pinned.length} pinned</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">` +
        pinned.map(id => {
          const info   = JHState.findTechnique(id);
          const beltId = info ? info.beltId : 'toRed';
          const en     = JHState.getEnglish(id);
          const c      = JHState.getBeltColor(beltId);
          const thumb  = JHState.getThumbUrl(id);
          const safe   = id.replace(/'/g, "\\'");
          return `<div onclick="JHHub.open('${safe}','${beltId}')"
            class="active-scale"
            style="border-radius:14px;overflow:hidden;cursor:pointer;background:#1c1b1b;border:1px solid rgba(255,255,255,0.06)">
            <div style="position:relative;aspect-ratio:16/9;background:#111">
              ${thumb
                ? `<img src="${thumb}" alt="${id}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.75"/>`
                : `<div style="position:absolute;inset:0;background:linear-gradient(135deg,${c}25,${c}06);display:flex;align-items:center;justify-content:center"><span class="ms" style="font-size:28px;color:${c}40">sports_martial_arts</span></div>`}
              <div style="position:absolute;inset:0;background:linear-gradient(to bottom,transparent 30%,rgba(0,0,0,0.8) 100%)"></div>
              <span class="ms ms-fill" style="position:absolute;top:6px;right:6px;font-size:14px;color:#f2ca50">push_pin</span>
            </div>
            <div style="padding:8px 10px 10px">
              <p class="font-jakarta font-bold" style="font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${id}</p>
              <p style="font-size:10px;color:rgba(229,226,225,0.4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${en}</p>
            </div>
          </div>`;
        }).join('') +
        `</div>
      </div>` : ''}

      <!-- ── Favourites ── -->
      ${favs.length ? `
      <div>
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-jakarta font-bold" style="font-size:16px">❤️ Favourites</h3>
          <span style="font-size:12px;color:rgba(229,226,225,0.35)">${favs.length} saved</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">` +
        favs.map(id => {
          const info   = JHState.findTechnique(id);
          const beltId = info ? info.beltId : 'toRed';
          const en     = JHState.getEnglish(id);
          const c      = JHState.getBeltColor(beltId);
          const thumb  = JHState.getThumbUrl(id);
          const done   = JHState.isDone(beltId + '::' + id);
          const safe   = id.replace(/'/g, "\\'");
          const thumbEl = thumb
            ? `<img src="${thumb}" alt="${id}" style="width:56px;height:42px;object-fit:cover;border-radius:10px;flex-shrink:0"/>`
            : `<div style="width:56px;height:42px;border-radius:10px;background:${c}18;display:flex;align-items:center;justify-content:center;flex-shrink:0"><span class="ms" style="font-size:18px;color:${c}50">sports_martial_arts</span></div>`;
          return `<div onclick="JHHub.open('${safe}','${beltId}')"
            class="active-scale"
            style="display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:14px;background:#1c1b1b;border:1px solid rgba(255,255,255,0.05);cursor:pointer">
            ${thumbEl}
            <div class="flex-1 min-w-0">
              <p class="font-jakarta font-bold" style="font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${id}</p>
              <p style="font-size:11px;color:rgba(229,226,225,0.4)">${en}</p>
            </div>
            ${done ? '<span class="ms ms-fill" style="font-size:18px;color:#f2ca50;flex-shrink:0">check_circle</span>' : '<span class="ms" style="font-size:16px;color:rgba(229,226,225,0.2);flex-shrink:0">chevron_right</span>'}
          </div>`;
        }).join('') +
        `</div>
      </div>` : ''}


      <!-- ── Training Log ── -->
      ${(() => {
        const weekLog   = typeof JHState !== 'undefined' ? JHState.getWeekLog() : [];
        const weekTotal = weekLog.reduce((s, d) => s + d.count, 0);
        const maxCount  = Math.max(1, ...weekLog.map(d => d.count));
        const dayLabels = ['M','T','W','T','F','S','S'];
        const bars = weekLog.map((d, i) => {
          const h   = d.count > 0 ? Math.max(20, Math.round(d.count / maxCount * 48)) : 4;
          const active = d.count > 0;
          return `<div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1">
            <div style="width:100%;height:48px;display:flex;align-items:flex-end;justify-content:center">
              <div style="width:100%;max-width:20px;height:${h}px;border-radius:4px 4px 2px 2px;background:${active ? col : 'rgba(255,255,255,0.07)'};"></div>
            </div>
            <span style="font-size:9px;font-weight:700;font-family:Plus Jakarta Sans,sans-serif;color:${active ? 'rgba(229,226,225,0.5)' : 'rgba(229,226,225,0.2)'}">${dayLabels[i]}</span>
          </div>`;
        }).join('');
        return `
        <div class="glass rounded-2xl p-5" style="border:1px solid rgba(255,255,255,0.06)">
          <div class="flex items-center justify-between mb-4">
            <div>
              <p class="font-jakarta font-extrabold" style="font-size:10px;color:#f2ca50;letter-spacing:0.12em">THIS WEEK</p>
              <p class="font-jakarta font-extrabold" style="font-size:20px;color:#e5e2e1;margin-top:2px">${weekTotal} technique${weekTotal !== 1 ? 's' : ''} drilled</p>
            </div>
            <span class="ms ms-fill" style="font-size:28px;color:${weekTotal > 0 ? col : 'rgba(229,226,225,0.15)'}">trending_up</span>
          </div>
          <div style="display:flex;gap:4px;align-items:flex-end">${bars}</div>
          ${weekTotal === 0 ? '<p style="font-size:12px;color:rgba(229,226,225,0.3);margin-top:12px;text-align:center">Complete a session to start tracking</p>' : ''}
        </div>`;
      })()}

      <!-- ── Cloud Sync ── -->
      <div>
        ${(typeof FirebaseSync !== 'undefined' && FirebaseSync.isGoogle()) ? `
          <div class="glass rounded-2xl flex items-center gap-3 px-5 py-4" style="border:1px solid rgba(34,197,94,0.2)">
            <span class="ms ms-fill" style="font-size:24px;color:#22c55e">cloud_done</span>
            <div style="flex:1">
              <p class="font-jakarta font-bold" style="font-size:13px;color:#22c55e">Synced with Google</p>
              <p style="font-size:11px;color:rgba(229,226,225,0.4);margin-top:1px">${FirebaseSync.getDisplayName() || 'Google Account'}</p>
            </div>
          </div>
        ` : `
          <div class="glass rounded-2xl" style="border:1px solid rgba(59,130,246,0.2);overflow:hidden">
            <div style="padding:16px 18px">
              <div class="flex items-center gap-3 mb-3">
                <span class="ms" style="font-size:24px;color:#3b82f6">cloud_upload</span>
                <div>
                  <p class="font-jakarta font-bold" style="font-size:13px;color:#e5e2e1">Sync Across Devices</p>
                  <p style="font-size:11px;color:rgba(229,226,225,0.4);margin-top:1px">Never lose your progress</p>
                </div>
              </div>
              <button id="google-signin-btn" onclick="JHProfile.signInGoogle()" class="active-scale w-full flex items-center justify-center gap-2 font-jakarta font-bold"
                style="padding:12px 16px;border-radius:12px;background:#fff;color:#1a1a1a;border:none;cursor:pointer;font-size:13px">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Connect Google Account
              </button>
            </div>
          </div>
        `}
      </div>

      <!-- ── Settings ── -->
      <div>
        <h3 class="font-jakarta font-bold mb-3" style="font-size:16px">Settings</h3>
        <div class="glass rounded-2xl overflow-hidden" style="border:1px solid rgba(255,255,255,0.06)">
          ${[
            { icon:'edit',           label:'Edit Profile',    fn:'JHProfile.startEdit()' },
            { icon:'military_tech',  label:'Change Belt',     fn:'JHProfile.changeBelt()' },
            { icon:'delete_outline', label:'Reset Progress',  fn:'JHProfile.resetProgress()' },
          ].map((s, i, arr) => `
            <button onclick="${s.fn}" class="w-full flex items-center gap-4 px-5 py-4 active-scale text-left"
              style="${i < arr.length-1 ? 'border-bottom:1px solid rgba(255,255,255,0.05)' : ''}">
              <span class="ms" style="font-size:20px;color:${s.icon === 'delete_outline' ? '#ef4444' : '#f2ca50'}">${s.icon}</span>
              <span class="font-jakarta font-bold flex-1" style="font-size:14px;color:${s.icon === 'delete_outline' ? '#ef4444' : '#e5e2e1'}">${s.label}</span>
              <span class="ms" style="font-size:16px;color:rgba(229,226,225,0.2)">chevron_right</span>
            </button>`).join('')}
        </div>
      </div>`;
  }

  // ── Edit profile inline form ───────────────────────────────────────────────
  function startEdit() {
    const el = document.getElementById('profile-content');
    if (!el) return;
    const p   = JHState.getProfile();
    const col = JHState.getBeltColor(p.belt || 'toRed');

    el.innerHTML = `
      <div class="flex items-center gap-3 mb-5">
        <button onclick="JHProfile.render()" style="background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:6px;color:rgba(229,226,225,0.5);font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700">
          <span class="ms" style="font-size:18px;color:#f2ca50">arrow_back</span> Back
        </button>
        <h2 class="font-jakarta font-bold" style="font-size:18px;flex:1">Edit Profile</h2>
      </div>

      <div style="display:flex;flex-direction:column;gap:16px">
        <!-- Name -->
        <div>
          <label style="display:block;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:11px;color:rgba(229,226,225,0.5);letter-spacing:0.08em;margin-bottom:8px">YOUR NAME</label>
          <input id="edit-name" type="text" value="${p.name || ''}" placeholder="First name"
            style="width:100%;padding:14px 16px;border-radius:12px;background:#1c1b1b;border:1px solid rgba(255,255,255,0.1);color:#e5e2e1;font-family:Inter,sans-serif;font-size:14px;outline:none;box-sizing:border-box"/>
        </div>

        <!-- Belt picker -->
        <div>
          <label style="display:block;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:11px;color:rgba(229,226,225,0.5);letter-spacing:0.08em;margin-bottom:8px">CURRENT BELT</label>
          <div id="edit-belt-list" style="display:flex;flex-direction:column;gap:8px">` +
          [
            { id:'toRed',    label:'Novice / White Belt', img:'white',  kyu:'Just starting', color:'#9ca3af' },
            { id:'toYellow', label:'Red Belt',            img:'red',    kyu:'6th Kyu',       color:'#dc2626' },
            { id:'toOrange', label:'Yellow Belt',         img:'yellow', kyu:'5th Kyu',       color:'#eab308' },
            { id:'toGreen',  label:'Orange Belt',         img:'orange', kyu:'4th Kyu',       color:'#f97316' },
            { id:'toBlue',   label:'Green Belt',          img:'green',  kyu:'3rd Kyu',       color:'#16a34a' },
            { id:'toBrown',  label:'Blue Belt',           img:'blue',   kyu:'2nd Kyu',       color:'#2563eb' },
            { id:'toBlack',  label:'Brown Belt',          img:'brown',  kyu:'1st Kyu',       color:'#92400e' },
          ].map(b => {
            const active = (p.belt || 'toRed') === b.id;
            return `<button onclick="JHProfile.selectEditBelt('${b.id}')" id="editbelt-${b.id}"
              style="display:flex;align-items:center;gap:14px;padding:12px 16px;border-radius:12px;border:1.5px solid ${active ? b.color + '60' : 'rgba(255,255,255,0.07)'};background:${active ? b.color + '18' : '#1c1b1b'};cursor:pointer;transition:all 0.15s">
              <img src="images/belt-${b.img}.png" style="height:18px;width:auto;object-fit:contain;flex-shrink:0" alt=""/>
              <div style="flex:1;text-align:left">
                <p style="font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:13px;color:#e5e2e1">${b.label}</p>
                <p style="font-size:11px;color:${active ? b.color : 'rgba(229,226,225,0.4)'}">${b.kyu}</p>
              </div>
              ${active ? '<span class="ms ms-fill" style="font-size:18px;color:#f2ca50">check_circle</span>' : ''}
            </button>`;
          }).join('') +
          `</div>
        </div>

        <button onclick="JHProfile.saveEdit()"
          class="active-scale font-jakarta font-extrabold w-full"
          style="padding:16px;border-radius:14px;background:#f2ca50;color:#1a1000;font-size:15px;border:none;cursor:pointer;margin-top:4px">
          Save Changes
        </button>
      </div>`;
  }

  let _editBelt = null;

  function selectEditBelt(id) {
    const p = JHState.getProfile();
    _editBelt = id;
    // Update button highlights
    [{ id:'toRed', color:'#dc2626'}, {id:'toYellow',color:'#eab308'}, {id:'toOrange',color:'#f97316'},
     {id:'toGreen',color:'#16a34a'}, {id:'toBlue',color:'#2563eb'}, {id:'toBrown',color:'#2563eb'}, {id:'toBlack',color:'#92400e'}]
    .forEach(b => {
      const btn = document.getElementById('editbelt-' + b.id);
      if (!btn) return;
      const active = b.id === id;
      btn.style.borderColor  = active ? b.color + '60' : 'rgba(255,255,255,0.07)';
      btn.style.background   = active ? b.color + '18' : '#1c1b1b';
    });
  }

  function saveEdit() {
    const nameEl = document.getElementById('edit-name');
    const name   = nameEl ? nameEl.value.trim() : '';
    const p      = JHState.getProfile();
    if (!name) { if (nameEl) { nameEl.focus(); nameEl.style.borderColor='#dc2626'; setTimeout(()=>nameEl.style.borderColor='rgba(255,255,255,0.1)',1200); } return; }
    JHState.saveProfile({ name, belt: _editBelt || p.belt || 'toRed' });
    _editBelt = null;
    render();
  }

  function changeBelt() { startEdit(); }

  function resetProgress() {
    if (!confirm('Reset all progress? This cannot be undone.')) return;
    localStorage.removeItem('jh_progress');
    localStorage.removeItem('jh_streak');
    localStorage.removeItem('jh_sessions');
    render();
  }


  // ── Google Sign-In ─────────────────────────────────────────────────────────
  async function signInGoogle() {
    const btn = document.getElementById('google-signin-btn');
    if (btn) { btn.disabled = true; btn.style.opacity = '0.6'; btn.textContent = 'Redirecting to Google…'; }
    try {
      if (typeof FirebaseSync === 'undefined') throw new Error('Firebase not loaded');
      await FirebaseSync.signInWithGoogle();
      // Page will redirect to Google — no further action needed here
    } catch(e) {
      console.warn('[JHProfile] Google sign-in error:', e.message);
      if (btn) { btn.disabled = false; btn.style.opacity = '1'; btn.textContent = 'Try again'; }
    }
  }

  return { render, signInGoogle, startEdit, selectEditBelt, saveEdit, changeBelt, resetProgress };
})();
