const JHHome = (() => {

  function _el(id) { return document.getElementById(id); }

  var _sessionMins = 10;

  // Judo action photos - rotated for hero cards
  var JUDO_PHOTOS = [
    'images/judo3.png',
    'images/judos.png',
    'images/judo4.png',
    'images/judo5.png',
    'images/judo1.png',
  ];

  var BELT_INFO = {
    toRed:    { fromKyu:'Novice',  fromBelt:'White',  toKyu:'6th Kyu', toBelt:'Red',    toCol:'#e53935' },
    toYellow: { fromKyu:'6th Kyu', fromBelt:'Red',    toKyu:'5th Kyu', toBelt:'Yellow', toCol:'#f5c518' },
    toOrange: { fromKyu:'5th Kyu', fromBelt:'Yellow', toKyu:'4th Kyu', toBelt:'Orange', toCol:'#f97316' },
    toGreen:  { fromKyu:'4th Kyu', fromBelt:'Orange', toKyu:'3rd Kyu', toBelt:'Green',  toCol:'#22c55e' },
    toBlue:   { fromKyu:'3rd Kyu', fromBelt:'Green',  toKyu:'2nd Kyu', toBelt:'Blue',   toCol:'#3b82f6' },
    toBrown:  { fromKyu:'2nd Kyu', fromBelt:'Blue',   toKyu:'1st Kyu', toBelt:'Brown',  toCol:'#92400e' },
    toBlack:  { fromKyu:'1st Kyu', fromBelt:'Brown',  toKyu:'Shodan',  toBelt:'Black',  toCol:'#6b7280' },
  };

  var SESSION_COUNTS = { 5: 2, 10: 4, 30: 9 };

  function _dayIndex() {
    var d = new Date();
    return Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
  }

  function _heroPhoto(offset) {
    return JUDO_PHOTOS[(_dayIndex() + (offset || 0)) % JUDO_PHOTOS.length];
  }

  function render() {
    _renderHeader();
    _renderGradeBar();
    _renderQuickStart();
    _renderTodaysFocus();
    _renderProgressOverview();
    _renderRecent();
  }

  // -- 1. Header -------------------------------------------------------------
  function _renderHeader() {
    var el = _el('home-welcome');
    if (!el) return;
    var p     = JHState.getProfile();
    var name  = p.name || 'Judoka';
    var h     = new Date().getHours();
    var greet = h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
    var col   = JHState.getBeltColor(p.belt || 'toRed');
    var photo = 'images/judo-hero2.png';

    el.innerHTML =
      // Hero banner - photo right, text left
      '<div style="position:relative;overflow:hidden;margin-bottom:12px;min-height:160px;margin-left:-20px;margin-right:-20px">' +
        // Photo - right half only
        '<img src="' + photo + '" alt="" style="position:absolute;right:0;top:0;width:100%;height:100%;object-fit:cover;object-position:75% 30%;opacity:0.35;filter:grayscale(20%)" onerror="this.style.display=\'none\'"/>' +
        // Gradient: dark left, fade to transparent right
        '<div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(19,19,19,0.92) 0%,rgba(19,19,19,0.65) 40%,rgba(19,19,19,0.2) 70%,rgba(19,19,19,0.5) 100%)"></div>' +
        '<div style="position:absolute;bottom:0;left:0;right:0;height:50%;background:linear-gradient(to bottom,transparent,#131313)"></div>' +
        // Content - left side
        '<div style="position:relative;padding:18px 22px 16px;max-width:64%">' +
          '<h1 style="font-family:\'Plus Jakarta Sans\',sans-serif;font-size:24px;font-weight:800;line-height:1.15;color:#e5e2e1;margin-bottom:5px">' +
            greet + ', <span style="color:' + col + '">' + name + '.</span>' +
          '</h1>' +
          '<p style="font-size:11px;color:rgba(229,226,225,0.45);font-family:Inter,sans-serif;font-style:italic;margin-bottom:10px">' +
            '"Small steps. Strong mind. Judo for life."' +
          '</p>' +
          // Kanji bottom-left - visible, stylised
          '<p style="font-size:28px;color:rgba(229,226,225,0.18);font-family:serif;line-height:1;letter-spacing:2px">柔道</p>' +
        '</div>' +
      '</div>';
  }

  // -- 2. Grade bar ----------------------------------------------------------
  function _renderGradeBar() {
    var el = _el('home-hero');
    if (!el) return;
    var p      = JHState.getProfile();
    var beltId = p.belt || 'toRed';
    var pct    = JHState.beltProgress(beltId);
    var col    = JHState.getBeltColor(beltId);
    var info   = BELT_INFO[beltId] || BELT_INFO.toRed;

    // Next undone technique for "Next Goal"
    var nextGoal = 'Continue training';
    if (typeof BELT_DATA !== 'undefined') {
      var bd = BELT_DATA.find(function(b) { return b.id === beltId; });
      if (bd) {
        outerLoop: for (var gi = 0; gi < bd.groups.length; gi++) {
          var g = bd.groups[gi];
          if (/Knowledge|Moral Code|Terminology/i.test(g.title)) continue;
          for (var ii = 0; ii < g.items.length; ii++) {
            if (!JHState.isDone(beltId + '::' + g.items[ii])) {
              nextGoal = 'Complete ' + g.items[ii];
              break outerLoop;
            }
          }
        }
      }
    }

    el.innerHTML =
      '<div style="background:#1a1919;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;margin-bottom:4px">' +
        // Two-column grade + progress
        '<div style="display:grid;grid-template-columns:1fr 1px 1fr">' +

          // LEFT - Current Grade
          '<div onclick="JHRouter.go(\'grade\')" class="active-scale" style="padding:16px;cursor:pointer;display:flex;align-items:center;gap:12px">' +
            // Belt icon with glowing coloured ring
            '<div style="flex-shrink:0;position:relative">' +
              // Outer glow ring
              '<div style="width:52px;height:52px;border-radius:50%;background:' + col + '20;border:2.5px solid ' + col + ';display:flex;align-items:center;justify-content:center;box-shadow:0 0 12px ' + col + '60,inset 0 0 8px ' + col + '20">' +
                '<img src="' + JHState.getBeltIcon(beltId) + '" style="height:26px;width:auto;object-fit:contain" alt=""/>' +
              '</div>' +
            '</div>' +
            '<div>' +
              '<p style="font-size:9px;font-weight:700;letter-spacing:0.12em;color:rgba(229,226,225,0.4);text-transform:uppercase;font-family:\'Plus Jakarta Sans\',sans-serif;margin-bottom:3px">Current Grade</p>' +
              '<p style="font-size:15px;font-weight:800;color:' + col + ';font-family:\'Plus Jakarta Sans\',sans-serif;line-height:1.1">' + info.fromKyu + '</p>' +
              '<p style="font-size:12px;font-weight:600;color:rgba(229,226,225,0.7);font-family:\'Plus Jakarta Sans\',sans-serif">' + info.fromBelt + ' Belt</p>' +
            '</div>' +
            '<span class="ms" style="font-size:16px;color:rgba(229,226,225,0.2);margin-left:auto">chevron_right</span>' +
          '</div>' +

          // DIVIDER
          '<div style="background:rgba(255,255,255,0.07)"></div>' +

          // RIGHT - Progress
          '<div style="padding:16px">' +
            '<p style="font-size:9px;font-weight:700;letter-spacing:0.12em;color:rgba(229,226,225,0.4);text-transform:uppercase;font-family:\'Plus Jakarta Sans\',sans-serif;margin-bottom:6px">Progress</p>' +
            '<p style="font-size:32px;font-weight:800;color:' + col + ';font-family:\'Plus Jakarta Sans\',sans-serif;line-height:1;margin-bottom:8px">' + pct + '%</p>' +
            // Progress bar
            '<div style="width:100%;height:6px;border-radius:3px;background:rgba(255,255,255,0.08);margin-bottom:5px">' +
              '<div style="height:6px;border-radius:3px;background:' + col + ';width:' + pct + '%;transition:width 0.6s ease"></div>' +
            '</div>' +
            '<p style="font-size:10px;color:rgba(229,226,225,0.35);font-family:Inter,sans-serif">' + pct + '% to ' + info.toBelt + '</p>' +
          '</div>' +

        '</div>' +

        // Bottom row - Next Goal + View Syllabus
        '<div style="border-top:1px solid rgba(255,255,255,0.06);padding:10px 16px;display:flex;align-items:center;justify-content:space-between">' +
          '<div class="flex items-center gap-2">' +
            '<span class="ms" style="font-size:14px;color:rgba(229,226,225,0.3)">event</span>' +
            '<p style="font-size:11px;color:rgba(229,226,225,0.5);font-family:Inter,sans-serif">Next Goal: <span style="color:rgba(229,226,225,0.75)">' + nextGoal + '</span></p>' +
          '</div>' +
          '<button onclick="JHRouter.go(\'grade\')" style="font-size:11px;color:rgba(229,226,225,0.4);font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:3px;white-space:nowrap">' +
            'View syllabus <span class="ms" style="font-size:13px">chevron_right</span>' +
          '</button>' +
        '</div>' +

      '</div>';
  }

  // -- 3. Quick Start --------------------------------------------------------
  function _renderQuickStart() {
    var el = _el('home-focus');
    if (!el) return;
    var p   = JHState.getProfile();
    var col = JHState.getBeltColor(p.belt || 'toRed');

    var tools = [
      { icon:'school',            label:'Study',   action:"JHRouter.go('browse')",   col:'#3b82f6' },
      { icon:'sports_martial_arts',label:'Random',  action:'JHHome.openRandom()',      col:'#f97316' },
      { icon:'checklist',         label:'Grade',   action:"JHRouter.go('grade')",    col:'#22c55e' },
      { icon:'person',            label:'Profile', action:"JHRouter.go('profile')",       col:'#8b5cf6' },
    ];

    var toolsHtml = tools.map(function(t) {
      return '<button onclick="' + t.action + '" class="active-scale flex flex-col items-center gap-2" style="flex:1;background:none;border:none;cursor:pointer;padding:0">' +
        '<div style="width:52px;height:52px;border-radius:16px;background:' + t.col + '15;border:1px solid ' + t.col + '30;display:flex;align-items:center;justify-content:center">' +
          '<span class="ms" style="font-size:22px;color:' + t.col + '">' + t.icon + '</span>' +
        '</div>' +
        '<p style="font-size:10px;font-weight:700;color:rgba(229,226,225,0.55);font-family:\'Plus Jakarta Sans\',sans-serif;letter-spacing:0.04em">' + t.label + '</p>' +
      '</button>';
    }).join('');

    el.innerHTML =
      '<div style="margin-bottom:20px">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">' +
          '<p style="font-size:13px;font-weight:800;color:#e5e2e1;font-family:\'Plus Jakarta Sans\',sans-serif">Quick Start</p>' +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;gap:8px">' + toolsHtml + '</div>' +
      '</div>' +
      '<div id="home-todaysfocus"></div>';

    _renderTodaysFocus();
  }

  // -- 4. Today's Focus ------------------------------------------------------
  function _renderTodaysFocus() {
    var el = _el('home-todaysfocus');
    if (!el) return;

    var p      = JHState.getProfile();
    var beltId = p.belt || 'toRed';
    var col    = JHState.getBeltColor(beltId);
    var info   = BELT_INFO[beltId] || BELT_INFO.toRed;

    // Pick next undone technique
    var nextTech = null, nextGroup = '';
    if (typeof BELT_DATA !== 'undefined') {
      var bd = BELT_DATA.find(function(b) { return b.id === beltId; }) || BELT_DATA[0];
      if (bd) {
        outerLoop: for (var gi = 0; gi < bd.groups.length; gi++) {
          var g = bd.groups[gi];
          if (/Knowledge|Moral Code|Terminology/i.test(g.title)) continue;
          for (var ii = 0; ii < g.items.length; ii++) {
            if (!JHState.isDone(bd.id + '::' + g.items[ii])) {
              nextTech  = { id: g.items[ii], beltId: bd.id };
              nextGroup = g.title;
              break outerLoop;
            }
          }
        }
        // Fallback: last technique
        if (!nextTech && bd.groups.length) {
          var lastG = bd.groups[bd.groups.length - 1];
          if (lastG.items.length) nextTech = { id: lastG.items[lastG.items.length - 1], beltId: bd.id };
        }
      }
    }

    if (!nextTech) { el.innerHTML = ''; return; }

    var en    = JHState.getEnglish(nextTech.id);
    var showEn = en && en.toLowerCase() !== nextTech.id.toLowerCase();
    var safe  = nextTech.id.replace(/'/g, "\\'");
    var thumb2 = JHState.getThumbUrl(nextTech.id);
    var photo = thumb2 || JUDO_PHOTOS[(_dayIndex() + 1) % JUDO_PHOTOS.length];
    var catLabel = /osaekomi|shime|kansetsu/i.test(nextGroup)
      ? 'KATAME-WAZA' : /waza/i.test(nextGroup) ? 'NAGE-WAZA' : 'TECHNIQUE';

    el.innerHTML =
      '<div style="margin-bottom:20px">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">' +
          '<p style="font-size:13px;font-weight:800;color:#e5e2e1;font-family:\'Plus Jakarta Sans\',sans-serif">Today\'s Focus</p>' +
          '<span style="font-size:10px;font-weight:700;color:' + col + ';font-family:\'Plus Jakarta Sans\',sans-serif;letter-spacing:0.06em">RECOMMENDED</span>' +
        '</div>' +
        // Hero card
        '<div style="border-radius:18px;overflow:hidden;position:relative;min-height:220px;background:#111">' +
          // Photo background
          '<img src="' + photo + '" alt="judo" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.45;filter:grayscale(20%)" onerror="this.style.display=\'none\'"/>' +
          // Gradient overlay
          '<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(13,12,11,0.97) 0%,rgba(13,12,11,0.6) 50%,rgba(13,12,11,0.2) 100%)"></div>' +
          // Belt colour tint at top
          '<div style="position:absolute;top:0;left:0;right:0;height:3px;background:' + col + '"></div>' +
          // Content
          '<div style="position:relative;padding:18px 18px 20px">' +
            '<div style="display:flex;gap:6px;margin-bottom:10px">' +
              '<span style="font-size:9px;font-weight:700;padding:4px 8px;border-radius:6px;background:' + col + ';color:#0e0c0b;letter-spacing:0.08em;font-family:\'Plus Jakarta Sans\',sans-serif">' + catLabel + '</span>' +
              '<span style="font-size:9px;font-weight:700;padding:4px 8px;border-radius:6px;background:rgba(255,255,255,0.1);color:rgba(229,226,225,0.7);letter-spacing:0.08em;font-family:\'Plus Jakarta Sans\',sans-serif">' + info.toKyu + '</span>' +
            '</div>' +
            '<h2 style="font-family:\'Plus Jakarta Sans\',sans-serif;font-size:26px;font-weight:800;color:#e5e2e1;line-height:1.1;margin-bottom:' + (showEn ? '4px' : '16px') + '">' + nextTech.id + '</h2>' +
            (en ? '<p style="font-size:12px;color:rgba(229,226,225,0.5);margin-bottom:18px;font-family:Inter,sans-serif;font-style:italic">' + en + '</p>' : '<p style="margin-bottom:18px"></p>') +
            '<div style="display:flex;gap:10px">' +
              '<button onclick="JHHome.startSession()" class="active-scale font-jakarta font-extrabold flex items-center gap-2"' +
                ' style="flex:1;padding:13px 16px;border-radius:12px;background:' + col + ';color:#0e0c0b;border:none;cursor:pointer;font-size:14px;justify-content:center;font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:900;letter-spacing:0.01em">' +
                '<span class="ms" style="font-size:16px">play_circle</span>Study This Technique' +
              '</button>' +
              '<button onclick="JHHub.open(\'' + safe + '\',\'' + nextTech.beltId + '\')" class="active-scale"' +
                ' style="padding:13px 16px;border-radius:12px;background:rgba(255,255,255,0.1);color:#e5e2e1;border:1px solid rgba(255,255,255,0.15);cursor:pointer;font-size:12px;white-space:nowrap;font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700">' +
                '▶ Watch Video' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  // -- 5. Progress Overview --------------------------------------------------
  function _renderProgressOverview() {
    var el = _el('home-techofday');
    if (!el) return;

    var p      = JHState.getProfile();
    var beltId = p.belt || 'toRed';
    var col    = JHState.getBeltColor(beltId);
    var pct    = JHState.beltProgress(beltId);
    var streak = JHState.getStreak ? JHState.getStreak() : 0;

    // Count techniques & knowledge
    var techTotal = 0, techDone = 0, knowTotal = 0, knowDone = 0;
    if (typeof BELT_DATA !== 'undefined') {
      var bd = BELT_DATA.find(function(b) { return b.id === beltId; });
      if (bd) {
        bd.groups.forEach(function(g) {
          var isKnow = /Knowledge|Moral Code|Terminology/i.test(g.title);
          g.items.forEach(function(item) {
            var done = JHState.isDone(beltId + '::' + item);
            if (isKnow) { knowTotal++; if (done) knowDone++; }
            else        { techTotal++; if (done) techDone++; }
          });
        });
      }
    }

    // SVG ring
    var r = 36, circ = (2 * Math.PI * r).toFixed(1);
    var offset = (circ * (1 - pct / 100)).toFixed(1);
    var ring =
      '<svg width="96" height="96" viewBox="0 0 96 96" style="transform:rotate(-90deg)">' +
        '<circle cx="48" cy="48" r="' + r + '" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="7"/>' +
        '<circle cx="48" cy="48" r="' + r + '" fill="none" stroke="' + col + '" stroke-width="7"' +
          ' stroke-dasharray="' + circ + '" stroke-dashoffset="' + offset + '" stroke-linecap="round"/>' +
      '</svg>';

    // Streak dots (last 7 days - show filled for streak count)
    var days = ['M','T','W','T','F','S','S'];
    var todayDow = (new Date().getDay() + 6) % 7; // Mon=0
    var dotHtml = days.map(function(d, i) {
      var active = streak > 0 && i <= todayDow && i > todayDow - streak;
      return '<div style="display:flex;flex-direction:column;align-items:center;gap:4px">' +
        '<div style="width:28px;height:28px;border-radius:50%;background:' +
          (active ? col : 'rgba(255,255,255,0.06)') +
          ';display:flex;align-items:center;justify-content:center">' +
          (active ? '<span class="ms ms-fill" style="font-size:14px;color:#fff">check</span>' : '') +
        '</div>' +
        '<p style="font-size:9px;color:rgba(229,226,225,0.3);font-family:Inter,sans-serif">' + d + '</p>' +
      '</div>';
    }).join('');

    el.innerHTML =
      '<div style="background:#1c1b1b;border:1px solid rgba(255,255,255,0.07);border-radius:18px;padding:18px;margin-bottom:20px">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">' +
          '<p style="font-size:13px;font-weight:800;color:#e5e2e1;font-family:\'Plus Jakarta Sans\',sans-serif">Your Progress Overview</p>' +
          '<button onclick="JHRouter.go(\'grade\')" style="font-size:11px;color:' + col + ';font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;background:none;border:none;cursor:pointer">Details →</button>' +
        '</div>' +
        // Ring + stats
        '<div style="display:flex;gap:16px;align-items:center;margin-bottom:16px">' +
          '<div style="position:relative;flex-shrink:0;width:96px;height:96px">' +
            ring +
            '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center">' +
              '<p style="font-size:20px;font-weight:800;color:' + col + ';font-family:\'Plus Jakarta Sans\',sans-serif;line-height:1">' + pct + '%</p>' +
              '<p style="font-size:9px;color:rgba(229,226,225,0.4);font-family:Inter,sans-serif">ready</p>' +
            '</div>' +
          '</div>' +
          '<div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:10px">' +
            _statCell(techDone, techTotal, 'TECHNIQUES', col) +
            _statCell(knowDone, knowTotal, 'THEORY', col) +
            _statCell(streak, null, 'DAY STREAK', '#fb923c') +
            _statCell(techDone + knowDone, techTotal + knowTotal, 'TOTAL', col) +
          '</div>' +
        '</div>' +
        // 7-day streak row
        '<div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:14px">' +
          '<p style="font-size:10px;font-weight:700;color:rgba(229,226,225,0.35);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px;font-family:\'Plus Jakarta Sans\',sans-serif">7 Day Streak</p>' +
          '<div style="display:flex;justify-content:space-between">' + dotHtml + '</div>' +
        '</div>' +
      '</div>';
  }

  function _statCell(val, total, label, col) {
    var display = total !== null ? val + '<span style="color:rgba(229,226,225,0.3);font-size:11px"> / ' + total + '</span>' : val;
    return '<div style="background:#131212;border-radius:10px;padding:10px 12px">' +
      '<p style="font-size:16px;font-weight:800;color:#e5e2e1;font-family:\'Plus Jakarta Sans\',sans-serif;line-height:1">' + display + '</p>' +
      '<p style="font-size:9px;color:rgba(229,226,225,0.6);font-weight:700;letter-spacing:0.06em;margin-top:3px;font-family:\'Plus Jakarta Sans\',sans-serif">' + label + '</p>' +
    '</div>';
  }

  // -- 6. Recently Viewed ----------------------------------------------------
  function _renderRecent() {
    var el = _el('home-recent');
    if (!el) return;
    var recent = JHState.getRecent(10);
    if (!recent.length) {
      var p2   = JHState.getProfile();
      var col2 = JHState.getBeltColor(p2.belt || 'toRed');
      el.innerHTML =
        '<div style="background:#1a1919;border:1px solid ' + col2 + '30;border-radius:18px;padding:20px">' +
          '<div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:16px">' +
            '<span class="ms ms-fill" style="font-size:28px;color:' + col2 + ';flex-shrink:0">sports_martial_arts</span>' +
            '<div>' +
              '<p style="font-family:\'Plus Jakarta Sans\',sans-serif;font-size:14px;font-weight:800;color:#e5e2e1;margin-bottom:4px">Your journey starts here.</p>' +
              '<p style="font-size:13px;color:rgba(229,226,225,0.5);line-height:1.55">Pick a technique, start a session, or check your belt requirements.</p>' +
            '</div>' +
          '</div>' +
          '<div style="display:flex;gap:10px">' +
            '<button onclick="JHRouter.go(\'browse\')" class="active-scale" style="flex:1;padding:11px 12px;border-radius:12px;background:' + col2 + ';color:#0e0c0b;border:none;cursor:pointer;font-size:12px;font-weight:800;font-family:\'Plus Jakarta Sans\',sans-serif;display:flex;align-items:center;justify-content:center;gap:6px">' +
              '<span class="ms" style="font-size:15px">school</span>Browse Techniques' +
            '</button>' +
            '<button onclick="JHRouter.go(\'grade\')" class="active-scale" style="flex:1;padding:11px 12px;border-radius:12px;background:rgba(255,255,255,0.07);color:#e5e2e1;border:1px solid rgba(255,255,255,0.12);cursor:pointer;font-size:12px;font-weight:800;font-family:\'Plus Jakarta Sans\',sans-serif;display:flex;align-items:center;justify-content:center;gap:6px">' +
              '<span class="ms" style="font-size:15px">checklist</span>My Grade' +
            '</button>' +
          '</div>' +
        '</div>';
      return;
    }

    var photoIdx = 1;
    var cards = recent.map(function(r) {
      var thumb  = JHState.getThumbUrl(r.id);
      var en     = JHState.getEnglish(r.id);
      var col    = JHState.getBeltColor(r.beltId);
      var showEn = en && en.toLowerCase() !== r.id.toLowerCase();
      var safe   = r.id.replace(/'/g, "\\'");
      // Fall back to judo photos if no youtube thumb
      var bgImg  = thumb || JUDO_PHOTOS[photoIdx++ % JUDO_PHOTOS.length];
      return '<div onclick="JHHub.open(\'' + safe + '\',\'' + r.beltId + '\')" class="shrink-0 active-scale"' +
        ' style="width:150px;border-radius:16px;overflow:hidden;cursor:pointer;background:#1a1a1a;border:1px solid rgba(255,255,255,0.06)">' +
        '<div style="position:relative;height:100px;background:#111">' +
          '<img src="' + bgImg + '" alt="' + r.id + '" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:' + (thumb ? '0.6' : '0.3') + ';filter:grayscale(' + (thumb ? '0' : '30') + '%)" onerror="this.style.display=\'none\'"/>' +
          '<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(13,12,11,0.9) 0%,transparent 60%)"></div>' +
          '<div style="position:absolute;top:0;left:0;right:0;height:2px;background:' + col + '"></div>' +
          '<img src="' + JHState.getBeltIcon(r.beltId) + '" style="position:absolute;top:8px;right:8px;height:13px;width:auto;object-fit:contain" alt=""/>' +
        '</div>' +
        '<div style="padding:8px 10px 10px">' +
          '<p style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#e5e2e1">' + r.id + '</p>' +
          (showEn ? '<p style="font-size:10px;color:rgba(229,226,225,0.4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + en + '</p>' : '') +
        '</div>' +
      '</div>';
    }).join('');

    el.innerHTML =
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">' +
        '<p style="font-size:13px;font-weight:800;color:#e5e2e1;font-family:\'Plus Jakarta Sans\',sans-serif">Recently Studied</p>' +
        '<button onclick="JHRouter.go(\'browse\')" style="font-size:12px;color:rgba(229,226,225,0.4);font-family:\'Plus Jakarta Sans\',sans-serif;background:none;border:none;cursor:pointer">View all</button>' +
      '</div>' +
      '<div class="flex gap-3 h-scroll hide-scroll -mx-5 px-5 pb-3">' + cards + '</div>';
  }

  // -- Public ----------------------------------------------------------------
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
    JHHub.open(techs[Math.floor(Math.random() * techs.length)].id, techs[0].beltId);
  }

  function startSession() {
    var beltId = JHState.getProfile().belt || 'toRed';
    var count  = SESSION_COUNTS[_sessionMins] || 4;
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
    var pool = undone.concat(done).slice(0, count);
    if (typeof JHSession !== 'undefined' && pool.length) JHSession.start(pool, beltId);
    else if (pool.length) JHHub.open(pool[0].id, pool[0].beltId);
  }

  function setSessionMins(mins) { _sessionMins = mins; }
  function scrollRecent(dir) {
    var el = document.getElementById('home-recent-scroll');
    if (el) el.scrollBy({ left: dir * 160, behavior: 'smooth' });
  }

  return { render, openRandom, scrollRecent, setSessionMins, startSession };
})();
