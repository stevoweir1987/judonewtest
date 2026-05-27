const JHFeedback = (() => {

  // ─── EmailJS config ───────────────────────────────────────────────────────
  // 1. Sign up free at https://www.emailjs.com
  // 2. Add a Gmail service → copy the Service ID here
  // 3. Create a template (see instructions below) → copy Template ID here
  // 4. Go to Account → copy your Public Key here
  var EMAILJS_PUBLIC_KEY  = 'cc5nlbeJjsKFh6Yar';
  var EMAILJS_SERVICE_ID  = 'service_sal58yc';
  var EMAILJS_TEMPLATE_ID = 'template_on7k774';
  // Template variables to use in your EmailJS template:
  //   {{category}}  — Bug / Suggestion / Content / Other
  //   {{message}}   — the feedback text
  //   {{user_id}}   — Firebase UID (or "anonymous")
  //   {{belt}}      — user's current belt
  //   {{sent_at}}   — timestamp
  // ─────────────────────────────────────────────────────────────────────────

  var _category = 'Bug';
  var _sending  = false;
  var MAX_CHARS = 500;

  function open() {
    var overlay = document.getElementById('feedback-overlay');
    if (!overlay) return;
    // Reset state
    _category = 'Bug';
    _sending  = false;
    var ta = document.getElementById('feedback-text');
    if (ta) ta.value = '';
    var ch = document.getElementById('feedback-char');
    if (ch) ch.textContent = '0 / ' + MAX_CHARS;
    _updateChips();
    _updateSubmitBtn(false);
    overlay.style.display = 'block';
    // Animate sheet up
    var sheet = document.getElementById('feedback-sheet');
    if (sheet) {
      sheet.style.transform = 'translateX(-50%) translateY(100%)';
      sheet.style.transition = 'none';
      requestAnimationFrame(function() {
        sheet.style.transition = 'transform 0.3s cubic-bezier(0.32,0.72,0,1)';
        sheet.style.transform  = 'translateX(-50%) translateY(0)';
      });
    }
    setTimeout(function() {
      var ta = document.getElementById('feedback-text');
      if (ta) ta.focus();
    }, 350);
  }

  function close(e) {
    // If click came from overlay bg (not the sheet itself), close
    if (e && e.target && e.target.id !== 'feedback-overlay') return;
    var sheet = document.getElementById('feedback-sheet');
    if (sheet) {
      sheet.style.transition = 'transform 0.25s cubic-bezier(0.4,0,1,1)';
      sheet.style.transform  = 'translateX(-50%) translateY(100%)';
    }
    setTimeout(function() {
      var overlay = document.getElementById('feedback-overlay');
      if (overlay) overlay.style.display = 'none';
    }, 260);
  }

  function setCategory(btn) {
    _category = btn.getAttribute('data-cat');
    _updateChips();
  }

  function _updateChips() {
    var CAT_STYLES = {
      'Bug':        { border: 'rgba(229,72,72,0.5)',   bg: 'rgba(229,72,72,0.12)',   col: '#e54848' },
      'Suggestion': { border: 'rgba(242,202,80,0.5)',  bg: 'rgba(242,202,80,0.12)',  col: '#f2ca50' },
      'Content':    { border: 'rgba(59,130,246,0.5)',  bg: 'rgba(59,130,246,0.12)',  col: '#3b82f6' },
      'Other':      { border: 'rgba(255,255,255,0.3)', bg: 'rgba(255,255,255,0.08)', col: '#e5e2e1' }
    };
    document.querySelectorAll('.fb-chip').forEach(function(btn) {
      var cat    = btn.getAttribute('data-cat');
      var active = cat === _category;
      var s      = CAT_STYLES[cat] || CAT_STYLES['Other'];
      btn.style.border     = '1px solid ' + (active ? s.border : 'rgba(255,255,255,0.12)');
      btn.style.background = active ? s.bg : 'transparent';
      btn.style.color      = active ? s.col : 'rgba(229,226,225,0.45)';
    });
  }

  function onType() {
    var ta = document.getElementById('feedback-text');
    var ch = document.getElementById('feedback-char');
    if (!ta || !ch) return;
    var len = ta.value.length;
    if (len > MAX_CHARS) { ta.value = ta.value.slice(0, MAX_CHARS); len = MAX_CHARS; }
    ch.textContent = len + ' / ' + MAX_CHARS;
    ch.style.color = len >= MAX_CHARS * 0.9 ? '#e54848' : 'rgba(229,226,225,0.25)';
  }

  function _updateSubmitBtn(loading) {
    var btn = document.getElementById('feedback-submit');
    if (!btn) return;
    btn.disabled   = loading;
    btn.style.opacity = loading ? '0.6' : '1';
    btn.textContent   = loading ? 'Sending…' : 'Send Feedback';
  }

  function _toast(msg, ok) {
    var t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);' +
      'background:' + (ok ? '#22c55e' : '#e54848') + ';color:#fff;' +
      'padding:10px 20px;border-radius:20px;font-size:13px;font-weight:700;' +
      'font-family:"Plus Jakarta Sans",sans-serif;z-index:999999;' +
      'box-shadow:0 4px 20px rgba(0,0,0,0.4);pointer-events:none;' +
      'opacity:0;transition:opacity 0.2s';
    document.body.appendChild(t);
    requestAnimationFrame(function() { t.style.opacity = '1'; });
    setTimeout(function() {
      t.style.opacity = '0';
      setTimeout(function() { t.remove(); }, 300);
    }, 2800);
  }

  function submit() {
    if (_sending) return;
    var ta  = document.getElementById('feedback-text');
    var msg = ta ? ta.value.trim() : '';
    if (!msg) {
      _toast('Please write something first 😅', false);
      return;
    }

    // Check EmailJS is configured
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      _toast('Feedback saved locally (EmailJS not configured yet)', true);
      // Still save locally as fallback
      _saveFallback(msg);
      close();
      return;
    }

    _sending = true;
    _updateSubmitBtn(true);

    // Gather context
    var p      = (typeof JHState !== 'undefined') ? JHState.getProfile() : {};
    var userId = (typeof firebase !== 'undefined' && firebase.auth().currentUser)
                 ? firebase.auth().currentUser.uid : 'anonymous';

    var templateParams = {
      category : _category,
      message  : msg,
      user_id  : userId,
      belt     : p.belt || 'unknown',
      sent_at  : new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })
    };

    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(function() {
        _sending = false;
        _updateSubmitBtn(false);
        _toast('Feedback sent — thanks! 🙏', true);
        _saveFallback(msg); // also log locally
        close();
      })
      .catch(function(err) {
        _sending = false;
        _updateSubmitBtn(false);
        console.error('EmailJS error:', err);
        _toast('Couldn\'t send — try again?', false);
      });
  }

  // Local fallback: store last 20 feedbacks in localStorage
  function _saveFallback(msg) {
    try {
      var key  = 'jh_feedback_log';
      var log  = JSON.parse(localStorage.getItem(key) || '[]');
      log.unshift({ cat: _category, msg: msg, ts: new Date().toISOString() });
      if (log.length > 20) log = log.slice(0, 20);
      localStorage.setItem(key, JSON.stringify(log));
    } catch(e) {}
  }

  return { open, close, setCategory, onType, submit };
})()
