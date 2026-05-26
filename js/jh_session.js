// ═══════════════════════════════════════════════════
//  jh_session.js  —  Guided Training Session
//  Flow: start(techs, beltId) → technique cards
//        → mark Done / Skip → Summary screen
// ═══════════════════════════════════════════════════
const JHSession = (() => {

  let _techs   = [];   // [{id, beltId, group}]
  let _idx     = 0;
  let _done    = 0;
  let _skipped = 0;
  let _startMs = 0;
  let _beltId  = 'toRed';

  // ── Entry point ────────────────────────────────────────────────────────────
  function start(techs, beltId) {
    if (!techs || !techs.length) return;
    _techs   = techs;
    _idx     = 0;
    _done    = 0;
    _skipped = 0;
    _startMs = Date.now();
    _beltId  = beltId || 'toRed';
    JHRouter.go('session');
    _renderCard();
  }

  // ── Render one technique card ──────────────────────────────────────────────
  function _renderCard() {
    var el = document.getElementById('session-content');
    if (!el) return;

    var t     = _techs[_idx];
    var col   = JHState.getBeltColor(_beltId);
    var en    = JHState.getEnglish(t.id);
    var showEn = en && en.toLowerCase() !== t.id.toLowerCase();
    var thumb = JHState.getThumbUrl(t.id);
    var data  = (typeof TECHNIQUE_DATA !== 'undefined') ? TECHNIQUE_DATA[t.id] : null;
    var safe  = t.id.replace(/'/g, "\\'");
    var total = _techs.length;
    var pct   = Math.round((_idx / total) * 100);

    // Steps
    var stepsHtml = '';
    if (data && data.steps) {
      stepsHtml =
        '<div style="display:flex;flex-direction:column;gap:12px;margin:18px 0 4px">' +
        data.steps.map(function(s) {
          return '<div style="display:flex;gap:12px;align-items:flex-start">' +
            '<span class="ms ms-fill" style="font-size:20px;color:' + col + ';flex-shrink:0;margin-top:1px">' + s[0] + '</span>' +
            '<div>' +
              '<p class="font-jakarta font-bold" style="font-size:13px;color:#e5e2e1;margin-bottom:2px">' + s[1] + '</p>' +
              '<p style="font-size:12px;color:rgba(229,226,225,0.55);line-height:1.55">' + s[2] + '</p>' +
            '</div>' +
          '</div>';
        }).join('') +
        '</div>';
    }

    // Coach tip callout
    var tipHtml = '';
    if (data && data.tip) {
      tipHtml =
        '<div style="background:' + col + '18;border:1px solid ' + col + '30;border-radius:12px;padding:12px 14px;margin-top:8px">' +
          '<p class="font-jakarta font-bold" style="font-size:10px;color:' + col + ';letter-spacing:0.08em;text-transform:uppercase;margin-bottom:4px">Coach Tip</p>' +
          '<p style="font-size:13px;color:rgba(229,226,225,0.75);line-height:1.55">' + data.tip + '</p>' +
        '</div>';
    }

    // Category label
    var catLabel = (t.group || '').replace(/\s*\(.*\)/, '');

    el.innerHTML =
      // ── Progress bar ──
      '<div style="padding:0 20px 12px">' +
        '<div style="display:flex;align-items:center;gap-10;justify-content:space-between;margin-bottom:8px">' +
          '<p style="font-size:11px;color:rgba(229,226,225,0.4);font-weight:600;letter-spacing:0.05em">' +
            'TECHNIQUE ' + (_idx + 1) + ' OF ' + total +
          '</p>' +
          '<button onclick="JHHub.open(\'' + safe + '\',\'' + t.beltId + '\')" style="font-size:11px;font-family:Plus Jakarta Sans,sans-serif;font-weight:700;color:rgba(229,226,225,0.4);background:none;border:none;cursor:pointer;padding:0;text-decoration:underline;text-decoration-color:rgba(229,226,225,0.2)">' +
            'Full Details' +
          '</button>' +
        '</div>' +
        '<div style="height:4px;background:rgba(255,255,255,0.08);border-radius:99px;overflow:hidden">' +
          '<div style="height:100%;width:' + pct + '%;background:' + col + ';border-radius:99px;transition:width 0.35s ease"></div>' +
        '</div>' +
      '</div>' +

      // ── Thumbnail ──
      '<div style="margin:0 20px 20px;border-radius:14px;overflow:hidden;position:relative;background:#111">' +
        (thumb
          ? '<img src="' + thumb + '" style="width:100%;aspect-ratio:16/9;object-fit:cover;display:block;opacity:0.85" onerror="this.style.display=\'none\'"/>'
          : '<div style="aspect-ratio:16/9;background:linear-gradient(135deg,' + col + '25,' + col + '06);display:flex;align-items:center;justify-content:center">' +
              '<span class="ms" style="font-size:56px;color:' + col + '40">sports_martial_arts</span>' +
            '</div>') +
        '<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.55),transparent 55%)"></div>' +
        (catLabel ? '<span style="position:absolute;top:10px;left:10px;font-size:9px;font-weight:800;font-family:Plus Jakarta Sans,sans-serif;background:' + col + ';color:#0e0c0b;padding:4px 8px;border-radius:6px;text-transform:uppercase;letter-spacing:0.08em">' + catLabel + '</span>' : '') +
      '</div>' +

      // ── Name + steps + tip ──
      '<div style="padding:0 20px 20px">' +
        '<h2 class="font-jakarta font-extrabold" style="font-size:28px;color:#e5e2e1;line-height:1.1;margin-bottom:' + (showEn ? '4px' : '0') + '">' + t.id + '</h2>' +
        (showEn ? '<p style="font-size:13px;color:rgba(229,226,225,0.45);margin-bottom:0">' + en + '</p>' : '') +
        stepsHtml +
        tipHtml +
      '</div>';

    // Show bottom bar
    var bot = document.getElementById('session-bottom');
    if (bot) bot.style.display = 'flex';

    // Scroll card to top
    var screen = document.getElementById('screen-session');
    if (screen) screen.scrollTo({ top: 0, behavior: 'instant' });
  }

  // ── Actions ────────────────────────────────────────────────────────────────
  function markDone() {
    var t = _techs[_idx];
    JHState.markDone(_beltId + '::' + t.id);
    _done++;
    _idx++;
    if (_idx >= _techs.length) _renderSummary();
    else _renderCard();
  }

  function skip() {
    _skipped++;
    _idx++;
    if (_idx >= _techs.length) _renderSummary();
    else _renderCard();
  }

  // ── Summary screen ─────────────────────────────────────────────────────────
  function _renderSummary() {
    var el = document.getElementById('session-content');
    if (!el) return;
    // Log the completed session
    if (_done > 0 && typeof JHState !== 'undefined') {
      var doneTechs = _techs.slice(0, _idx).map(function(t) { return t.id; });
      JHState.logSession(_done, doneTechs);
    }
    var col     = JHState.getBeltColor(_beltId);
    var elapsed = Math.round((Date.now() - _startMs) / 60000);
    var timeStr = elapsed < 1 ? 'under a minute' : elapsed + ' min' + (elapsed !== 1 ? 's' : '');

    el.innerHTML =
      '<div style="padding:48px 20px 20px;text-align:center">' +
        '<div style="font-size:72px;margin-bottom:16px">🥋</div>' +
        '<h2 class="font-jakarta font-extrabold" style="font-size:30px;color:#e5e2e1;margin-bottom:6px">Session Done!</h2>' +
        '<p style="font-size:14px;color:rgba(229,226,225,0.45);margin-bottom:36px">' + timeStr + '</p>' +
        '<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:36px;text-align:left">' +
          _statRow('check_circle', _done + ' technique' + (_done !== 1 ? 's' : '') + ' drilled', col) +
          (_skipped > 0 ? _statRow('skip_next', _skipped + ' skipped', 'rgba(229,226,225,0.35)') : '') +
          _statRow('schedule', timeStr, 'rgba(229,226,225,0.35)') +
        '</div>' +
        '<button onclick="JHRouter.go(\'home\')" class="active-scale font-jakarta font-extrabold"' +
          ' style="width:100%;padding:16px;border-radius:14px;background:' + col + ';color:#0e0c0b;border:none;cursor:pointer;font-size:15px;display:block">' +
          'Back to Training' +
        '</button>' +
        (_done > 0
          ? '<button onclick="JHRouter.go(\'grade\')" class="active-scale font-jakarta font-bold"' +
              ' style="width:100%;padding:14px;border-radius:14px;background:transparent;color:rgba(229,226,225,0.5);border:1px solid rgba(255,255,255,0.1);cursor:pointer;font-size:14px;display:block;margin-top:10px">' +
              'Check Grading Progress' +
            '</button>'
          : '') +
      '</div>';

    // Hide Done/Skip bottom bar on summary
    var bot = document.getElementById('session-bottom');
    if (bot) bot.style.display = 'none';
  }

  function _statRow(icon, label, col) {
    return '<div style="display:flex;align-items:center;gap:12px;padding:14px 16px;background:#1c1b1b;border-radius:12px;border:1px solid rgba(255,255,255,0.06)">' +
      '<span class="ms ms-fill" style="font-size:20px;color:' + col + ';flex-shrink:0">' + icon + '</span>' +
      '<p class="font-jakarta font-bold" style="font-size:14px;color:#e5e2e1">' + label + '</p>' +
    '</div>';
  }

  // ── Exit confirmation (called by router back button) ─────────────────────
  function confirmExit() {
    // If we're on the summary screen, just go home — no confirmation needed
    if (_idx >= _techs.length) {
      JHRouter.go('home');
      return;
    }
    // Mid-session — show confirmation overlay
    var overlay = document.getElementById('session-exit-overlay');
    if (overlay) { overlay.style.display = 'flex'; return; }

    // Create it
    var div = document.createElement('div');
    div.id = 'session-exit-overlay';
    div.style.cssText = 'position:fixed;inset:0;z-index:99990;background:rgba(0,0,0,0.7);' +
      'display:flex;align-items:flex-end;justify-content:center;backdrop-filter:blur(4px)';
    div.innerHTML =
      '<div style="width:100%;max-width:430px;background:#1a1918;border-radius:24px 24px 0 0;' +
        'padding:28px 24px calc(env(safe-area-inset-bottom,0px) + 28px)">' +
        '<div style="text-align:center;margin-bottom:20px">' +
          '<p style="font-size:40px;margin-bottom:8px">🥋</p>' +
          '<p class="font-jakarta font-extrabold" style="font-size:20px;color:#e5e2e1;margin-bottom:6px">Exit session?</p>' +
          '<p style="font-size:14px;color:rgba(229,226,225,0.45)">Your progress so far won\'t be saved.</p>' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;gap:10px">' +
          '<button onclick="JHSession.doExit()" class="active-scale font-jakarta font-extrabold"' +
            ' style="width:100%;padding:14px;border-radius:14px;background:#e54848;color:#fff;border:none;cursor:pointer;font-size:15px">' +
            'Yes, exit session' +
          '</button>' +
          '<button onclick="JHSession.cancelExit()" class="active-scale font-jakarta font-bold"' +
            ' style="width:100%;padding:14px;border-radius:14px;background:rgba(255,255,255,0.08);color:#e5e2e1;border:1px solid rgba(255,255,255,0.1);cursor:pointer;font-size:15px">' +
            'Keep going' +
          '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(div);
  }

  function doExit() {
    var overlay = document.getElementById('session-exit-overlay');
    if (overlay) overlay.remove();
    JHRouter.go('home');
  }

  function cancelExit() {
    var overlay = document.getElementById('session-exit-overlay');
    if (overlay) overlay.remove();
  }

  return { start, markDone, skip, confirmExit, doExit, cancelExit };
})();
