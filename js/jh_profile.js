const JHProfile = (() => {
  let _editing = false;

  function render() {
    const el = document.getElementById('profile-content');
    if (!el) return;
    _editing = false;
    _renderMain(el);
  }

  function _renderMain(el) {
    try {
      var p       = JHState.getProfile();
      var streak  = JHState.getStreak();
      var col     = JHState.getBeltColor(p.belt || 'toRed');
      var beltPct = JHState.beltProgress(p.belt || 'toRed');
      var label   = JHState.getBeltLabel(p.belt || 'toRed') || 'Red';
      var favs    = JHState.getFavs();
      var pinned  = JHState.getPinned();

      var mastered = 0;
      if (typeof BELT_DATA !== 'undefined') {
        var bd = BELT_DATA.find(function(b) { return b.id === (p.belt || 'toRed'); });
        if (bd) mastered = bd.groups.reduce(function(acc, g) {
          return acc + g.items.filter(function(item) { return JHState.isDone(bd.id + '::' + item); }).length;
        }, 0);
      }

      var html = '';

      // ── Header ──
      html += '<div style="display:flex;align-items:center;gap:16px;margin-bottom:4px">';
      html +=   '<div style="width:64px;height:64px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:800;font-size:24px;flex-shrink:0;background:' + col + '22;border:2px solid ' + col + ';color:' + col + '">';
      html +=     (p.name || 'J')[0].toUpperCase();
      html +=   '</div>';
      html +=   '<div style="flex:1;min-width:0">';
      html +=     '<h2 style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + (p.name || 'Judoka') + '</h2>';
      html +=     '<div style="display:flex;align-items:center;gap:8px;margin-top:4px">';
      html +=       '<img src="' + JHState.getBeltIcon(p.belt || 'toRed') + '" style="height:14px;width:auto;object-fit:contain" alt=""/>';
      html +=       '<span style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:11px;color:' + col + '">' + label + ' Belt</span>';
      html +=       '<span style="font-size:11px;color:rgba(229,226,225,0.3)">&bull; ' + beltPct + '% complete</span>';
      html +=     '</div>';
      html +=   '</div>';
      html +=   '<button onclick="JHProfile.startEdit()" style="width:36px;height:36px;border-radius:50%;background:#1c1b1b;border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0">';
      html +=     '<span class="ms" style="font-size:18px;color:#f2ca50">edit</span>';
      html +=   '</button>';
      html += '</div>';

      // ── Stats row ──
      var stats = [
        { label:'Day Streak', value: streak,       icon:'local_fire_department', c:'#f59e0b' },
        { label:'Mastered',   value: mastered,      icon:'military_tech',         c: col      },
        { label:'Saved',      value: favs.length,   icon:'favorite',              c:'#ef4444' }
      ];
      html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">';
      for (var si = 0; si < stats.length; si++) {
        var s = stats[si];
        html += '<div class="glass rounded-2xl p-4 text-center" style="border:1px solid rgba(255,255,255,0.06)">';
        html +=   '<span class="ms ms-fill" style="font-size:20px;color:' + s.c + '">' + s.icon + '</span>';
        html +=   '<p style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:800;font-size:22px;color:#e5e2e1;margin-top:4px">' + s.value + '</p>';
        html +=   '<p style="font-size:10px;color:rgba(229,226,225,0.4);letter-spacing:0.02em">' + s.label + '</p>';
        html += '</div>';
      }
      html += '</div>';

      // ── Cold-start nudge ──
      if (mastered === 0 && streak === 0) {
        html += '<div style="background:linear-gradient(135deg,' + col + '14,' + col + '06);border:1px solid ' + col + '25;border-radius:16px;padding:18px;display:flex;gap:14px;align-items:flex-start;cursor:pointer" onclick="JHRouter.go(\'home\')">';
        html +=   '<span class="ms ms-fill" style="font-size:28px;color:' + col + ';flex-shrink:0;margin-top:2px">sports_martial_arts</span>';
        html +=   '<div>';
        html +=     '<p style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:800;font-size:14px;color:#e5e2e1;margin-bottom:4px">Ready to start training?</p>';
        html +=     '<p style="font-size:13px;color:rgba(229,226,225,0.5);line-height:1.5">Mark your first technique as mastered to start your streak. Tap HOME and hit Start Training.</p>';
        html +=   '</div>';
        html += '</div>';
      }

      // ── Belt progress ──
      html += '<div class="glass rounded-2xl p-5" style="border:1px solid rgba(255,255,255,0.06)">';
      html +=   '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">';
      html +=     '<p style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:800;font-size:10px;color:#f2ca50;letter-spacing:0.12em">CURRENT GRADE</p>';
      html +=     '<span style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:12px;color:' + col + '">' + beltPct + '%</span>';
      html +=   '</div>';
      html +=   '<div style="width:100%;border-radius:999px;height:8px;background:#2a2a2a;margin-bottom:12px">';
      html +=     '<div style="height:8px;border-radius:999px;width:' + beltPct + '%;background:' + col + ';transition:width 0.4s"></div>';
      html +=   '</div>';
      html +=   '<button onclick="JHRouter.go(\'grade\')" class="w-full py-3 rounded-xl font-jakarta font-bold active-scale" style="background:' + col + '14;border:1px solid ' + col + '30;color:' + col + ';font-size:13px">View Grading Checklist</button>';
      html += '</div>';

      // ── Pinned ──
      if (pinned.length) {
        html += '<div>';
        html +=   '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">';
        html +=     '<h3 style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:16px">Pinned</h3>';
        html +=     '<span style="font-size:12px;color:rgba(229,226,225,0.35)">' + pinned.length + ' pinned</span>';
        html +=   '</div>';
        html +=   '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">';
        for (var pi = 0; pi < pinned.length; pi++) {
          var pid   = pinned[pi];
          var pinfo = JHState.findTechnique(pid);
          var pbelt = pinfo ? pinfo.beltId : 'toRed';
          var pen   = JHState.getEnglish(pid);
          var pc    = JHState.getBeltColor(pbelt);
          var pthumb = JHState.getThumbUrl(pid);
          var psafe = pid.replace(/'/g, "\\'");
          html += '<div onclick="JHHub.open(\'' + psafe + '\',\'' + pbelt + '\')" class="active-scale" style="border-radius:14px;overflow:hidden;cursor:pointer;background:#1c1b1b;border:1px solid rgba(255,255,255,0.06)">';
          html +=   '<div style="position:relative;aspect-ratio:16/9;background:#111">';
          if (pthumb) {
            html += '<img src="' + pthumb + '" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.75"/>';
          } else {
            html += '<div style="position:absolute;inset:0;background:linear-gradient(135deg,' + pc + '25,' + pc + '06);display:flex;align-items:center;justify-content:center"><span class="ms" style="font-size:28px;color:' + pc + '40">sports_martial_arts</span></div>';
          }
          html +=     '<div style="position:absolute;inset:0;background:linear-gradient(to bottom,transparent 30%,rgba(0,0,0,0.8) 100%)"></div>';
          html +=     '<span class="ms ms-fill" style="position:absolute;top:6px;right:6px;font-size:14px;color:#f2ca50">push_pin</span>';
          html +=   '</div>';
          html +=   '<div style="padding:8px 10px 10px">';
          html +=     '<p style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + pid + '</p>';
          html +=     '<p style="font-size:10px;color:rgba(229,226,225,0.4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + pen + '</p>';
          html +=   '</div>';
          html += '</div>';
        }
        html +=   '</div>';
        html += '</div>';
      }

      // ── Favourites ──
      if (favs.length) {
        html += '<div>';
        html +=   '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">';
        html +=     '<h3 style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:16px">Favourites</h3>';
        html +=     '<span style="font-size:12px;color:rgba(229,226,225,0.35)">' + favs.length + ' saved</span>';
        html +=   '</div>';
        html +=   '<div style="display:flex;flex-direction:column;gap:8px">';
        for (var fi = 0; fi < favs.length; fi++) {
          var fid    = favs[fi];
          var finfo  = JHState.findTechnique(fid);
          var fbelt  = finfo ? finfo.beltId : 'toRed';
          var fen    = JHState.getEnglish(fid);
          var fc     = JHState.getBeltColor(fbelt);
          var fthumb = JHState.getThumbUrl(fid);
          var fdone  = JHState.isDone(fbelt + '::' + fid);
          var fsafe  = fid.replace(/'/g, "\\'");
          html += '<div onclick="JHHub.open(\'' + fsafe + '\',\'' + fbelt + '\')" class="active-scale" style="display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:14px;background:#1c1b1b;border:1px solid rgba(255,255,255,0.05);cursor:pointer">';
          if (fthumb) {
            html += '<img src="' + fthumb + '" alt="" style="width:56px;height:42px;object-fit:cover;border-radius:10px;flex-shrink:0"/>';
          } else {
            html += '<div style="width:56px;height:42px;border-radius:10px;background:' + fc + '18;display:flex;align-items:center;justify-content:center;flex-shrink:0"><span class="ms" style="font-size:18px;color:' + fc + '50">sports_martial_arts</span></div>';
          }
          html +=   '<div style="flex:1;min-width:0">';
          html +=     '<p style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + fid + '</p>';
          html +=     '<p style="font-size:11px;color:rgba(229,226,225,0.4)">' + fen + '</p>';
          html +=   '</div>';
          html +=   (fdone ? '<span class="ms ms-fill" style="font-size:18px;color:#f2ca50;flex-shrink:0">check_circle</span>' : '<span class="ms" style="font-size:16px;color:rgba(229,226,225,0.2);flex-shrink:0">chevron_right</span>');
          html += '</div>';
        }
        html +=   '</div>';
        html += '</div>';
      }

      // ── Placeholders for post-render fills ──
      html += '<div id="me-week-log"></div>';
      html += '<div id="me-sync-card"></div>';
      html += '<div id="me-sessions-log"></div>';

      // ── Settings ──
      var settingsList = [
        { icon:'edit',           label:'Edit Profile',   fn:'JHProfile.startEdit()'    },
        { icon:'military_tech',  label:'Change Belt',    fn:'JHProfile.changeBelt()'   },
        { icon:'delete_outline', label:'Reset Progress', fn:'JHProfile.resetProgress()'}
      ];
      html += '<div>';
      html +=   '<h3 style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:16px;margin-bottom:12px">Settings</h3>';
      html +=   '<div class="glass rounded-2xl overflow-hidden" style="border:1px solid rgba(255,255,255,0.06)">';
      for (var sti = 0; sti < settingsList.length; sti++) {
        var st = settingsList[sti];
        var isLast = sti === settingsList.length - 1;
        var isDel  = st.icon === 'delete_outline';
        html += '<button onclick="' + st.fn + '" class="w-full flex items-center gap-4 px-5 py-4 active-scale text-left"' + (isLast ? '' : ' style="border-bottom:1px solid rgba(255,255,255,0.05)"') + '>';
        html +=   '<span class="ms" style="font-size:20px;color:' + (isDel ? '#ef4444' : '#f2ca50') + '">' + st.icon + '</span>';
        html +=   '<span style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:14px;flex:1;color:' + (isDel ? '#ef4444' : '#e5e2e1') + '">' + st.label + '</span>';
        html +=   '<span class="ms" style="font-size:16px;color:rgba(229,226,225,0.2)">chevron_right</span>';
        html += '</button>';
      }
      html +=   '</div>';
      html += '</div>';

      el.innerHTML = html;
      _renderMeWeekLog();
      _renderMeSync();
      _renderMeSessions();

    } catch(err) {
      console.error('[JHProfile] _renderMain crashed:', err);
      el.innerHTML = '<div style="padding:24px;text-align:center">' +
        '<span class="ms" style="font-size:40px;color:#ef4444">error</span>' +
        '<p style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:14px;color:#e5e2e1;margin-top:12px">Me tab error</p>' +
        '<p style="font-size:12px;color:rgba(229,226,225,0.4);margin-top:6px;word-break:break-all">' + (err && err.message ? err.message : String(err)) + '</p>' +
        '</div>';
    }
  }

  function _renderMeWeekLog() {
    var el = document.getElementById('me-week-log');
    if (!el) return;
    var prof    = JHState.getProfile();
    var col     = JHState.getBeltColor(prof.belt || 'toRed');
    var weekLog = JHState.getWeekLog ? JHState.getWeekLog() : [];
    var weekTotal = weekLog.reduce(function(s, d) { return s + d.count; }, 0);
    var maxCount  = Math.max.apply(null, [1].concat(weekLog.map(function(d) { return d.count; })));
    var dayLabels = ['M','T','W','T','F','S','S'];
    var bars = weekLog.map(function(d, i) {
      var h      = d.count > 0 ? Math.max(20, Math.round(d.count / maxCount * 48)) : 4;
      var active = d.count > 0;
      return '<div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1">' +
        '<div style="width:100%;height:48px;display:flex;align-items:flex-end;justify-content:center">' +
          '<div style="width:100%;max-width:20px;height:' + h + 'px;border-radius:4px 4px 2px 2px;background:' + (active ? col : 'rgba(255,255,255,0.07)') + '"></div>' +
        '</div>' +
        '<span style="font-size:9px;font-weight:700;font-family:Plus Jakarta Sans,sans-serif;color:' + (active ? 'rgba(229,226,225,0.5)' : 'rgba(229,226,225,0.2)') + '">' + dayLabels[i] + '</span>' +
      '</div>';
    }).join('');
    el.innerHTML =
      '<div class="glass rounded-2xl p-5" style="border:1px solid rgba(255,255,255,0.06)">' +
        '<div class="flex items-center justify-between mb-4">' +
          '<div>' +
            '<p class="font-jakarta font-extrabold" style="font-size:10px;color:#f2ca50;letter-spacing:0.12em">THIS WEEK</p>' +
            '<p class="font-jakarta font-extrabold" style="font-size:20px;color:#e5e2e1;margin-top:2px">' + weekTotal + ' technique' + (weekTotal !== 1 ? 's' : '') + ' drilled</p>' +
          '</div>' +
          '<span class="ms ms-fill" style="font-size:28px;color:' + (weekTotal > 0 ? col : 'rgba(229,226,225,0.15)') + '">trending_up</span>' +
        '</div>' +
        '<div style="display:flex;gap:4px;align-items:flex-end">' + bars + '</div>' +
        (weekTotal === 0 ? '<p style="font-size:12px;color:rgba(229,226,225,0.3);margin-top:12px;text-align:center">Complete a session to start tracking</p>' : '') +
      '</div>';
  }

  function _renderMeSync() {
    var el = document.getElementById('me-sync-card');
    if (!el) return;
    var synced = false;
    var displayName = '';
    try {
      synced = typeof FirebaseSync !== 'undefined' && typeof FirebaseSync.isGoogle === 'function' && FirebaseSync.isGoogle();
      if (synced && typeof FirebaseSync.getDisplayName === 'function') displayName = FirebaseSync.getDisplayName() || '';
    } catch(e) { synced = false; }

    if (synced) {
      el.innerHTML =
        '<div class="glass rounded-2xl flex items-center gap-3 px-5 py-4" style="border:1px solid rgba(34,197,94,0.2)">' +
          '<span class="ms ms-fill" style="font-size:24px;color:#22c55e">cloud_done</span>' +
          '<div style="flex:1">' +
            '<p class="font-jakarta font-bold" style="font-size:13px;color:#22c55e">Synced with Google</p>' +
            '<p style="font-size:11px;color:rgba(229,226,225,0.4);margin-top:1px">' + (displayName || 'Google Account') + '</p>' +
          '</div>' +
        '</div>';
    } else {
      el.innerHTML =
        '<div class="glass rounded-2xl" style="border:1px solid rgba(59,130,246,0.2);overflow:hidden">' +
          '<div style="padding:16px 18px">' +
            '<div class="flex items-center gap-3 mb-3">' +
              '<span class="ms" style="font-size:24px;color:#3b82f6">cloud_upload</span>' +
              '<div>' +
                '<p class="font-jakarta font-bold" style="font-size:13px;color:#e5e2e1">Sync Across Devices</p>' +
                '<p style="font-size:11px;color:rgba(229,226,225,0.4);margin-top:1px">Never lose your progress</p>' +
              '</div>' +
            '</div>' +
            '<button id="google-signin-btn" onclick="JHProfile.signInGoogle()" class="active-scale w-full flex items-center justify-center gap-2 font-jakarta font-bold"' +
              ' style="padding:12px 16px;border-radius:12px;background:#fff;color:#1a1a1a;border:none;cursor:pointer;font-size:13px">' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>' +
                '<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>' +
                '<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>' +
                '<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>' +
              '</svg>' +
              'Connect Google Account' +
            '</button>' +
          '</div>' +
        '</div>';
    }
  }

  function _renderMeSessions() {
    var el = document.getElementById('me-sessions-log');
    if (!el) return;
    var fullLog = [];
    try { fullLog = JSON.parse(localStorage.getItem('jh_log') || '[]'); } catch(e) {}
    var recent = fullLog.slice().sort(function(a, b) { return b.date.localeCompare(a.date); }).slice(0, 5);
    if (!recent.length) { el.innerHTML = ''; return; }
    var prof = JHState.getProfile();
    var col  = JHState.getBeltColor(prof.belt || 'toRed');
    var rows = recent.map(function(e) {
      var d      = new Date(e.date + 'T12:00:00');
      var ds     = d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
      var cnt    = e.count || 0;
      return '<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.05)">' +
        '<span class="ms ms-fill" style="font-size:18px;color:' + col + ';flex-shrink:0">fitness_center</span>' +
        '<div style="flex:1">' +
          '<p style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:13px;color:#e5e2e1">' + cnt + ' technique' + (cnt !== 1 ? 's' : '') + ' studied</p>' +
          '<p style="font-size:11px;color:rgba(229,226,225,0.35);margin-top:2px">' + ds + '</p>' +
        '</div>' +
        '<span class="ms ms-fill" style="font-size:16px;color:rgba(229,226,225,0.2)">check_circle</span>' +
      '</div>';
    }).join('');
    el.innerHTML =
      '<h3 style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:800;font-size:14px;color:#e5e2e1;margin-bottom:10px;letter-spacing:0.01em">Recent Sessions</h3>' +
      '<div style="background:#1c1b1b;border:1px solid rgba(255,255,255,0.06);border-radius:14px;overflow:hidden">' +
        rows +
      '</div>';
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
  // -- Google Sign-In --
  async function signInGoogle() {
    const btn = document.getElementById('google-signin-btn');
    if (btn) { btn.disabled = true; btn.style.opacity = '0.6'; btn.textContent = 'Redirecting to Google...'; }
    try {
      if (typeof FirebaseSync === 'undefined') throw new Error('Firebase not loaded');
      await FirebaseSync.signInWithGoogle();
      // Page will redirect to Google -- no further action needed here
    } catch(e) {
      console.warn('[JHProfile] Google sign-in error:', e.message);
      if (btn) { btn.disabled = false; btn.style.opacity = '1'; btn.textContent = 'Try again'; }
    }
  }

  return { render, signInGoogle, startEdit, selectEditBelt, saveEdit, changeBelt, resetProgress };
})();
