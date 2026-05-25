const JHHome = (() => {

  function _el(id) { return document.getElementById(id); }

  var _sessionMins = 10; // default session length

  // Belt info lookup
  var BELT_INFO = {
    toRed:    { fromKyu:'Novice',  fromBelt:'White',  toKyu:'6th Kyu', toBelt:'Red',    toCol:'#e53935' },
    toYellow: { fromKyu:'6th Kyu', fromBelt:'Red',    toKyu:'5th Kyu', toBelt:'Yellow', toCol:'#f5c518' },
    toOrange: { fromKyu:'5th Kyu', fromBelt:'Yellow', toKyu:'4th Kyu', toBelt:'Orange', toCol:'#f97316' },
    toGreen:  { fromKyu:'4th Kyu', fromBelt:'Orange', toKyu:'3rd Kyu', toBelt:'Green',  toCol:'#22c55e' },
    toBlue:   { fromKyu:'3rd Kyu', fromBelt:'Green',  toKyu:'2nd Kyu', toBelt:'Blue',   toCol:'#3b82f6' },
    toBrown:  { fromKyu:'2nd Kyu', fromBelt:'Blue',   toKyu:'1st Kyu', toBelt:'Brown',  toCol:'#92400e' }
  };

  // How many techniques to show per session length
  var SESSION_COUNTS = { 5: 2, 10: 4, 30: 9 };

  function render() {
    _renderWelcome();
    _renderBeltHero();
    _renderUpNext();
    _renderTechOfDay();
    _renderRecent();
  }

  // ── Welcome ───────────────────────────────────────────────────────────────
  function _renderWelcome() {
    var el = _el('home-welcome');
    if (!el) return;
    var p     = JHState.getProfile();
    var name  = p.name || 'Judoka';
    var h     = new Date().getHours();
    var greet = h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
    el.innerHTML =
      '<h2 class="font-jakarta font-bold" style="font-size:22px;color:#e5e2e1">' + greet + ', ' + name + '.</h2>' +
      '<p style="font-size:14px;color:rgba(229,226,225,0.4);margin-top:2px">Keep going — every rep counts.</p>';
  }

  // ── Current Rank card ─────────────────────────────────────────────────────
  function _renderBeltHero() {
    var el = _el('home-hero');
    if (!el) return;
    var p      = JHState.getProfile();
    var beltId = p.belt || 'toRed';
    var pct    = JHState.beltProgress(beltId);
    var col    = JHState.getBeltColor(beltId);
    var info   = BELT_INFO[beltId] || BELT_INFO.toRed;
    el.innerHTML =
      '<div class="glass rounded-2xl overflow-hidden active-scale" onclick="JHRouter.go(\'grade\')" style="cursor:pointer;padding:16px 20px;border:1px solid ' + col + '30">' +
        '<div class="flex items-center justify-between">' +
          '<div class="flex items-center gap-3">' +
            '<div style="width:44px;height:44px;border-radius:50%;background:' + col + '20;border:2px solid ' + col + '50;display:flex;align-items:center;justify-content:center">' +
              '<img src="' + JHState.getBeltIcon(beltId) + '" style="height:22px;width:auto;object-fit:contain" alt=""/>' +
            '</div>' +
            '<div>' +
              '<p class="font-jakarta" style="font-size:10px;color:rgba(229,226,225,0.45);font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:2px">Current Rank</p>' +
              '<p class="font-jakarta font-extrabold" style="font-size:14px;color:' + col + ';text-transform:uppercase;letter-spacing:0.03em">' +
                info.fromKyu + (info.fromBelt !== 'White' && info.fromBelt !== 'Novice' ? ' (' + info.fromBelt + ' Belt)' : '') +
              '</p>' +
            '</div>' +
          '</div>' +
          '<div style="text-align:right">' +
            '<p class="font-jakarta font-extrabold" style="font-size:18px;color:' + col + '">' + pct + '%</p>' +
            '<p style="font-size:10px;color:rgba(229,226,225,0.4);font-weight:600">to ' + info.toBelt + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="w-full rounded-full mt-3" style="height:5px;background:#2a2a2a">' +
          '<div class="rounded-full" style="height:5px;width:' + pct + '%;background:' + col + ';transition:width 0.4s ease"></div>' +
        '</div>' +
      '</div>';
  }

  // ── UP NEXT + Try Something Else ─────────────────────────────────────────
  function _renderUpNext() {
    var el = _el('home-focus');
    if (!el) return;

    var p      = JHState.getProfile();
    var beltId = p.belt || 'toRed';
    var col    = JHState.getBeltColor(beltId);
    var info   = BELT_INFO[beltId] || BELT_INFO.toRed;

    // Build full technique list for this belt (undone first, then done)
    var undone = [], done = [];
    var nextTech = null, nextGroup = null;
    if (typeof BELT_DATA !== 'undefined') {
      var bd = BELT_DATA.find(function(b) { return b.id === beltId; }) || BELT_DATA[0];
      if (bd) {
        bd.groups.forEach(function(g) {
          if (/Knowledge|Moral Code|Terminology/i.test(g.title)) return;
          g.items.forEach(function(item) {
            var entry = { id: item, beltId: bd.id, group: g.title };
            if (JHState.isDone(bd.id + '::' + item)) done.push(entry);
            else undone.push(entry);
          });
        });
        // Next up = first undone
        if (undone.length) {
          nextTech  = undone[0];
          nextGroup = undone[0].group;
        }
      }
    }

    if (!nextTech && !done.length) {
      el.innerHTML = '<div class="glass rounded-2xl overflow-hidden" style="padding:24px 20px;text-align:center">' +
        '<span class="ms" style="font-size:40px;color:' + col + ';display:block;margin-bottom:8px">military_tech</span>' +
        '<p class="font-jakarta font-extrabold" style="font-size:18px;color:#e5e2e1">Belt Complete!</p>' +
        '</div>';
      return;
    }

    var thumb  = nextTech ? JHState.getThumbUrl(nextTech.id) : '';
    var en     = nextTech ? JHState.getEnglish(nextTech.id) : '';
    var showEn = en && en.toLowerCase() !== (nextTech ? nextTech.id.toLowerCase() : '');
    var safe   = nextTech ? nextTech.id.replace(/'/g, "\\'") : '';
    var catLabel = /osaekomi|shime|kansetsu/i.test(nextGroup || '')
      ? 'KATAME-WAZA'
      : /waza/i.test(nextGroup || '') ? 'NAGE-WAZA' : (nextGroup || 'TECHNIQUE').toUpperCase();

    el.innerHTML =
      '<p class="font-jakarta font-bold mb-3" style="font-size:11px;color:rgba(229,226,225,0.45);letter-spacing:0.1em;text-transform:uppercase">Up Next: BJA Syllabus</p>' +
      '<div class="rounded-2xl overflow-hidden" style="border:1px solid rgba(255,255,255,0.08)">' +
        // ── Hero section ──
        '<div style="position:relative;min-height:200px;background:#1a1a1a">' +
          (thumb
            ? '<div style="position:absolute;inset:0;background-image:url(' + thumb + ');background-size:cover;background-position:center;opacity:0.35"></div>'
            : '<div style="position:absolute;inset:0;background:linear-gradient(135deg,' + col + '25,' + col + '08)"></div>') +
          '<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(14,12,11,0.97) 0%,rgba(14,12,11,0.5) 60%,transparent 100%)"></div>' +
          '<div style="position:relative;padding:16px 18px 20px">' +
            '<div class="flex gap-2 mb-3">' +
              '<span class="font-jakarta font-extrabold" style="font-size:9px;background:' + col + ';color:#0e0c0b;padding:4px 8px;border-radius:6px;letter-spacing:0.08em;text-transform:uppercase">Required for ' + info.toKyu + '</span>' +
              '<span class="font-jakarta font-bold" style="font-size:9px;background:rgba(255,255,255,0.12);color:rgba(229,226,225,0.75);padding:4px 8px;border-radius:6px;letter-spacing:0.08em;text-transform:uppercase">' + catLabel + '</span>' +
            '</div>' +
            '<h3 class="font-jakarta font-extrabold mb-1" style="font-size:24px;color:#e5e2e1;line-height:1.15">' + (nextTech ? nextTech.id : '') + '</h3>' +
            (showEn ? '<p style="font-size:13px;color:rgba(229,226,225,0.55);margin-bottom:16px">' + en + '</p>' : '<div style="margin-bottom:16px"></div>') +
            '<div class="flex gap-3">' +
              '<button onclick="JHHub.open(\'' + safe + '\',\'' + (nextTech ? nextTech.beltId : '') + '\')" class="active-scale font-jakarta font-extrabold flex items-center gap-2"' +
                ' style="flex:1;padding:13px 16px;border-radius:12px;background:' + col + ';color:#0e0c0b;border:none;cursor:pointer;font-size:13px;letter-spacing:0.02em;justify-content:center">' +
                '<span class="ms" style="font-size:16px">play_circle</span>Start Training' +
              '</button>' +
              '<button onclick="JHRouter.go(\'grade\')" class="active-scale font-jakarta font-bold"' +
                ' style="padding:13px 16px;border-radius:12px;background:rgba(255,255,255,0.08);color:#e5e2e1;border:1px solid rgba(255,255,255,0.15);cursor:pointer;font-size:13px;white-space:nowrap">' +
                'View Details' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +

        // ── Try Something Else section ──
        '<div style="background:#141312;border-top:1px solid rgba(255,255,255,0.07);padding:16px 18px 18px">' +
          '<div class="flex items-center justify-between mb-3">' +
            '<p class="font-jakarta font-bold" style="font-size:13px;color:rgba(229,226,225,0.6)">Try something else?</p>' +
            '<p style="font-size:11px;color:rgba(229,226,225,0.35)">How long have you got?</p>' +
          '</div>' +
          // Time pills
          '<div class="flex gap-2 mb-4" id="home-session-pills">' +
            _pillHtml(5,  col) +
            _pillHtml(10, col) +
            _pillHtml(30, col) +
          '</div>' +
          // Dynamic technique list
          '<div id="home-session-list"></div>' +
        '</div>' +
      '</div>';

    // Render the initial session list
    _renderSessionList(undone, done, col);
  }

  function _pillHtml(mins, col) {
    var active = _sessionMins === mins;
    return '<button onclick="JHHome.setSessionMins(' + mins + ')" class="active-scale font-jakarta font-bold"' +
      ' style="padding:7px 14px;border-radius:20px;border:1px solid ' + (active ? col : 'rgba(255,255,255,0.12)') + ';' +
      'background:' + (active ? col + '20' : 'transparent') + ';' +
      'color:' + (active ? col : 'rgba(229,226,225,0.45)') + ';' +
      'font-size:12px;cursor:pointer;transition:all 0.15s">' +
      mins + ' min' +
    '</button>';
  }

  function _renderSessionList(undone, done, col) {
    var listEl = _el('home-session-list');
    if (!listEl) return;

    var count = SESSION_COUNTS[_sessionMins] || 4;
    // Take from undone first, then pad with done
    var pool  = undone.concat(done);
    // Skip the very first undone item (that's the "Start Training" hero)
    if (undone.length > 0) pool = pool.slice(1);
    var picks = pool.slice(0, count);

    if (!picks.length) {
      listEl.innerHTML = '<p style="font-size:12px;color:rgba(229,226,225,0.3);text-align:center;padding:8px 0">No other techniques yet — keep going!</p>';
      return;
    }

    var rows = picks.map(function(t, i) {
      var thumb  = JHState.getThumbUrl(t.id);
      var en     = JHState.getEnglish(t.id);
      var showEn = en && en.toLowerCase() !== t.id.toLowerCase();
      var done   = JHState.isDone(t.beltId + '::' + t.id);
      var safe   = t.id.replace(/'/g, "\\'");
      return '<div onclick="JHHub.open(\'' + safe + '\',\'' + t.beltId + '\')" class="flex items-center gap-3 active-scale"' +
        ' style="padding:8px 0;cursor:pointer' + (i < picks.length - 1 ? ';border-bottom:1px solid rgba(255,255,255,0.05)' : '') + '">' +
        '<div style="width:52px;height:38px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#1c1b1b">' +
          (thumb
            ? '<img src="' + thumb + '" style="width:100%;height:100%;object-fit:cover;opacity:0.8" onerror="this.style.display=\'none\'"/>'
            : '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center"><span class="ms" style="font-size:18px;color:rgba(229,226,225,0.2)">sports_martial_arts</span></div>') +
        '</div>' +
        '<div style="flex:1;min-width:0">' +
          '<p class="font-jakarta font-bold" style="font-size:13px;color:#e5e2e1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + t.id + '</p>' +
          (showEn ? '<p style="font-size:11px;color:rgba(229,226,225,0.4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + en + '</p>' : '') +
        '</div>' +
        '<span class="ms" style="font-size:18px;color:' + (done ? '#22c55e' : 'rgba(229,226,225,0.2)') + ';flex-shrink:0">' + (done ? 'check_circle' : 'chevron_right') + '</span>' +
      '</div>';
    }).join('');

    var label = _sessionMins === 5  ? '~' + picks.length + ' quick techniques'
              : _sessionMins === 10 ? picks.length + ' techniques for your session'
              : picks.length + ' techniques — solid training block';
    listEl.innerHTML =
      '<p style="font-size:10px;color:rgba(229,226,225,0.3);margin-bottom:8px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase">' + label + '</p>' +
      rows;
  }

  // ── Public: change session mins ───────────────────────────────────────────
  function setSessionMins(mins) {
    _sessionMins = mins;

    // Re-colour pills
    var pillsEl = _el('home-session-pills');
    if (pillsEl) {
      var p      = JHState.getProfile();
      var col    = JHState.getBeltColor(p.belt || 'toRed');
      pillsEl.innerHTML = _pillHtml(5, col) + _pillHtml(10, col) + _pillHtml(30, col);
    }

    // Rebuild technique list
    var beltId = (JHState.getProfile().belt || 'toRed');
    var undone = [], done = [];
    if (typeof BELT_DATA !== 'undefined') {
      var bd = BELT_DATA.find(function(b) { return b.id === beltId; }) || BELT_DATA[0];
      if (bd) {
        bd.groups.forEach(function(g) {
          if (/Knowledge|Moral Code|Terminology/i.test(g.title)) return;
          g.items.forEach(function(item) {
            var entry = { id: item, beltId: bd.id, group: g.title };
            if (JHState.isDone(bd.id + '::' + item)) done.push(entry);
            else undone.push(entry);
          });
        });
      }
    }
    var col = JHState.getBeltColor(beltId);
    _renderSessionList(undone, done, col);
  }

  // ── Technique of the Day ──────────────────────────────────────────────────
  function _renderTechOfDay() {
    var el = _el('home-techofday');
    if (!el) return;
    if (typeof BELT_DATA === 'undefined') { el.innerHTML = ''; return; }

    var all = [];
    BELT_DATA.forEach(function(b) {
      b.groups.forEach(function(g) {
        if (/Knowledge|Moral Code|Terminology/i.test(g.title)) return;
        g.items.forEach(function(item) { all.push({ id: item, beltId: b.id, group: g.title }); });
      });
    });
    if (!all.length) { el.innerHTML = ''; return; }

    var d    = new Date();
    var seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
    var pick = all[seed % all.length];

    var en     = JHState.getEnglish(pick.id);
    var showEn = en && en.toLowerCase() !== pick.id.toLowerCase();
    var thumb  = JHState.getThumbUrl(pick.id);
    var safe   = pick.id.replace(/'/g, "\\'");

    el.innerHTML =
      '<div onclick="JHHub.open(\'' + safe + '\',\'' + pick.beltId + '\')" class="glass rounded-2xl overflow-hidden active-scale" style="cursor:pointer;border:1px solid rgba(255,255,255,0.07)">' +
        '<div style="padding:16px 18px 18px">' +
          '<div class="flex items-center justify-between mb-3">' +
            '<p class="font-jakarta font-bold" style="font-size:16px;color:#e5e2e1">Technique of the Day</p>' +
            '<span class="font-jakarta font-extrabold" style="font-size:9px;color:#3b82f6;background:rgba(59,130,246,0.15);padding:4px 8px;border-radius:6px;letter-spacing:0.08em">EXPERT PICK</span>' +
          '</div>' +
          '<div class="flex gap-3 items-center">' +
            (thumb
              ? '<div style="width:64px;height:48px;border-radius:10px;overflow:hidden;flex-shrink:0"><img src="' + thumb + '" alt="' + pick.id + '" style="width:100%;height:100%;object-fit:cover" onerror="this.parentNode.style.background=\'rgba(59,130,246,0.15)\';this.style.display=\'none\'"/></div>'
              : '<div style="width:64px;height:48px;border-radius:10px;background:rgba(59,130,246,0.15);flex-shrink:0;display:flex;align-items:center;justify-content:center"><span class="ms" style="font-size:24px;color:#3b82f6">sports_martial_arts</span></div>') +
            '<div style="flex:1;min-width:0">' +
              '<p class="font-jakarta font-extrabold" style="font-size:15px;color:#e5e2e1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + pick.id + '</p>' +
              (showEn ? '<p style="font-size:12px;color:rgba(229,226,225,0.45);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + en + '</p>' : '') +
              '<p style="font-size:11px;color:rgba(229,226,225,0.3);margin-top:3px">' + pick.group + '</p>' +
            '</div>' +
            '<span class="ms" style="font-size:20px;color:rgba(229,226,225,0.2);flex-shrink:0">chevron_right</span>' +
          '</div>' +
          '<div style="margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between">' +
            '<div class="flex items-center">' +
              '<img src="' + JHState.getBeltIcon(pick.beltId) + '" style="height:14px;width:auto;object-fit:contain" alt=""/>' +
              '<span style="font-size:11px;color:rgba(229,226,225,0.35);margin-left:6px">' + JHState.getBeltLabel(pick.beltId) + '</span>' +
            '</div>' +
            '<span style="font-size:12px;color:#3b82f6;font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700">Try it →</span>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  // ── Recently viewed ────────────────────────────────────────────────────────
  function _renderRecent() {
    var el = _el('home-recent');
    if (!el) return;
    var recent = JHState.getRecent(10);
    if (!recent.length) { el.innerHTML = ''; return; }

    var cards = recent.map(function(r) {
      var thumb  = JHState.getThumbUrl(r.id);
      var en     = JHState.getEnglish(r.id);
      var col    = JHState.getBeltColor(r.beltId);
      var showEn = en.toLowerCase() !== r.id.toLowerCase();
      var safe   = r.id.replace(/'/g, "\\'");
      return '<div onclick="JHHub.open(\'' + safe + '\',\'' + r.beltId + '\')" class="shrink-0 active-scale"' +
        ' style="width:140px;border-radius:16px;overflow:hidden;cursor:pointer;background:#1a1a1a;border:1px solid rgba(255,255,255,0.06)">' +
        '<div style="position:relative;aspect-ratio:4/3;background:#1a1a1a">' +
          (thumb
            ? '<img src="' + thumb + '" alt="' + r.id + '" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.7"/>'
            : '<div style="position:absolute;inset:0;background:linear-gradient(135deg,' + col + '22,' + col + '08);display:flex;align-items:center;justify-content:center"><span class="ms" style="font-size:30px;color:' + col + '40">sports_martial_arts</span></div>') +
          '<img src="' + JHState.getBeltIcon(r.beltId) + '" style="position:absolute;top:6px;left:6px;height:14px;width:auto;object-fit:contain;filter:drop-shadow(0 1px 2px rgba(0,0,0,0.8))" alt=""/>' +
        '</div>' +
        '<div style="padding:8px 10px 10px">' +
          '<p class="font-jakarta font-bold" style="font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + r.id + '</p>' +
          (showEn ? '<p style="font-size:10px;color:rgba(229,226,225,0.4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + en + '</p>' : '') +
        '</div>' +
        '</div>';
    }).join('');

    el.innerHTML =
      '<div class="flex items-center justify-between mb-3">' +
        '<h3 class="font-jakarta font-bold" style="font-size:16px">Recently Viewed</h3>' +
        '<button onclick="JHRouter.go(\'browse\')" style="font-size:12px;color:rgba(229,226,225,0.4);font-family:\'Plus Jakarta Sans\',sans-serif">See all</button>' +
      '</div>' +
      '<div id="home-recent-scroll" class="flex gap-3 h-scroll hide-scroll -mx-5 px-5 pb-2">' + cards + '</div>';
  }

  function openRandom() {
    if (typeof BELT_DATA === 'undefined') return;
    var techs = [];
    BELT_DATA.forEach(function(b) {
      b.groups.forEach(function(g) {
        if (/Knowledge|Moral Code/i.test(g.title)) return;
        g.items.forEach(function(item) { techs.push({ id: item, beltId: b.id }); });
      });
    });
    if (!techs.length) return;
    var pick = techs[Math.floor(Math.random() * techs.length)];
    JHHub.open(pick.id, pick.beltId);
  }

  function scrollRecent(dir) {
    var el = document.getElementById('home-recent-scroll');
    if (el) el.scrollBy({ left: dir * 160, behavior: 'smooth' });
  }

  return { render, openRandom, scrollRecent, setSessionMins };
})();
