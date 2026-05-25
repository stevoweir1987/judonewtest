// ═══════════════════════════════════════════════════
//  firebase_sync.js  —  JudoHub cloud persistence
//  Uses Firebase compat SDK (loaded via CDN in HTML)
//  Strategy: localStorage = instant local cache
//            Firestore    = debounced cloud backup
// ═══════════════════════════════════════════════════

const FirebaseSync = (() => {

  const FIREBASE_CONFIG = {
    apiKey:            "AIzaSyCDvBb4_8qrJ3ir_fdu6BegDp03ci2BCLY",
    authDomain:        "judohub-129ef.firebaseapp.com",
    projectId:         "judohub-129ef",
    storageBucket:     "judohub-129ef.firebasestorage.app",
    messagingSenderId: "694463085057",
    appId:             "1:694463085057:web:58a210f13b24ccf56c9e00"
  };

  let _db        = null;
  let _uid       = null;
  let _ready     = false;
  let _saveTimer = null;

  // ── Initialise Firebase & sign in anonymously ──────────────────────────
  function init() {
    const authPromise = new Promise(resolve => {
      try {
        if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
        _db = firebase.firestore();

        firebase.auth().onAuthStateChanged(async user => {
          if (user) {
            _uid = user.uid; _ready = true; resolve(_uid);
          } else {
            try {
              const cred = await firebase.auth().signInAnonymously();
              _uid = cred.user.uid; _ready = true; resolve(_uid);
            } catch(e) {
              console.warn('[JH Firebase] anon sign-in failed:', e.message);
              resolve(null);
            }
          }
        });
      } catch(e) {
        console.warn('[JH Firebase] init failed:', e.message);
        resolve(null);
      }
    });

    const timeout = new Promise(resolve =>
      setTimeout(() => { console.warn('[JH Firebase] timed out — offline mode'); resolve(null); }, 2500)
    );

    return Promise.race([authPromise, timeout]);
  }

  // ── Google Sign-In (links anonymous → Google) ──────────────────────────
  async function signInWithGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const currentUser = firebase.auth().currentUser;
      if (currentUser && currentUser.isAnonymous) {
        // Preserve all local data by linking anonymous → Google
        await currentUser.linkWithPopup(provider);
      } else {
        await firebase.auth().signInWithPopup(provider);
      }
      _uid   = firebase.auth().currentUser.uid;
      _ready = true;
      scheduleSave(); // push local data to cloud immediately
      return { ok: true, name: firebase.auth().currentUser.displayName };
    } catch(e) {
      // credential-already-in-use: sign in to existing account
      if (e.code === 'auth/credential-already-in-use') {
        try {
          await firebase.auth().signInWithCredential(e.credential);
          _uid   = firebase.auth().currentUser.uid;
          _ready = true;
          return { ok: true, name: firebase.auth().currentUser.displayName };
        } catch(e2) {
          console.warn('[JH Firebase] Google re-auth failed:', e2.message);
        }
      }
      console.warn('[JH Firebase] Google sign-in failed:', e.message);
      return { ok: false, error: e.message };
    }
  }

  // ── Load data from Firestore ───────────────────────────────────────────
  async function load() {
    if (!_ready || !_db || !_uid) return null;
    try {
      const snap = await _db.collection('jh_users').doc(_uid).get();
      return snap.exists ? snap.data() : null;
    } catch(e) {
      console.warn('[JH Firebase] load error:', e.message);
      return null;
    }
  }

  // ── Apply loaded cloud data → overwrite localStorage ──────────────────
  function applyToLocalStorage(data) {
    if (!data) return;
    const safe = (key, val) => {
      try { localStorage.setItem(key, typeof val === 'object' ? JSON.stringify(val) : String(val)); }
      catch(e) {}
    };
    if (data.profile   !== undefined) safe('jh_profile',   data.profile);
    if (data.progress  !== undefined) safe('jh_progress',  data.progress);
    if (data.favs      !== undefined) safe('jh_favs',      data.favs);
    if (data.pinned    !== undefined) safe('jh_pinned',    data.pinned);
    if (data.recent    !== undefined) safe('jh_recent',    data.recent);
    if (data.streak    !== undefined) safe('jh_streak',    data.streak);
    if (data.sessions  !== undefined) safe('jh_sessions',  data.sessions);
    if (data.lastTrain !== undefined) safe('jh_last_train',data.lastTrain);
  }

  // ── Debounced save ─────────────────────────────────────────────────────
  function scheduleSave() {
    if (!_ready) return;
    clearTimeout(_saveTimer);
    _saveTimer = setTimeout(_doSave, 1000);
  }

  function _doSave() {
    if (!_db || !_uid) return;
    try {
      const safeJson = (key, fallback) => {
        try { return JSON.parse(localStorage.getItem(key) || fallback); } catch { return JSON.parse(fallback); }
      };
      const payload = {
        profile:   safeJson('jh_profile',  '{}'),
        progress:  safeJson('jh_progress', '{}'),
        favs:      safeJson('jh_favs',     '[]'),
        pinned:    safeJson('jh_pinned',   '[]'),
        recent:    safeJson('jh_recent',   '[]'),
        streak:    parseInt(localStorage.getItem('jh_streak')     || '0', 10),
        sessions:  parseInt(localStorage.getItem('jh_sessions')   || '0', 10),
        lastTrain: localStorage.getItem('jh_last_train') || '',
        _savedAt:  new Date().toISOString(),
      };
      _db.collection('jh_users').doc(_uid).set(payload, { merge: true })
         .catch(e => console.warn('[JH Firebase] save error:', e.message));
    } catch(e) {
      console.warn('[JH Firebase] _doSave error:', e.message);
    }
  }

  function flushNow()  { clearTimeout(_saveTimer); _doSave(); }
  function getUid()    { return _uid; }
  function isReady()   { return _ready; }
  function isGoogle()  { const u = firebase.auth && firebase.auth().currentUser; return u && !u.isAnonymous; }
  function getDisplayName() { const u = firebase.auth && firebase.auth().currentUser; return u ? u.displayName : null; }

  return { init, load, applyToLocalStorage, scheduleSave, flushNow,
           signInWithGoogle, getUid, isReady, isGoogle, getDisplayName };
})();
