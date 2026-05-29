const JHHub = (() => {
  let _tech   = null;
  let _beltId = null;
  let _group  = null;
  let _tab    = 0;   // 0=Details  1=Key Points  2=Common Mistakes
  // Swipe card system (kept for potential future use)
  let _cards  = [];
  let _idx    = 0;

  // ── Image / slug helpers ──────────────────────────────────────────────────
  function _slug(id) { return id.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

  function _imgSrc(id) {
    var vid = JHState.getVideoId(id);
    if (vid) return 'https://img.youtube.com/vi/' + vid + '/maxresdefault.jpg';
    return null;
  }

  // ── Technique content database ────────────────────────────────────────────
  const CONTENT = {
    'Tai-otoshi': {
      principle: 'Break uke\'s balance diagonally forward to their right front corner. Your leg acts as a barrier, not a sweeping action.',
      steps: [
        { label: 'Kuzushi', text: 'Pull uke forward and to their right front corner with a lifting action on the lapel.' },
        { label: 'Tsukuri', text: 'Step across and place your right foot outside uke\'s right foot, turning your body 180°.' },
        { label: 'Kake',    text: 'Twist your body, straighten your blocking leg and use your arms to rotate uke over it.' }
      ],
      errors: ['Bending the blocking leg — it must be straight to act as a fulcrum', 'Not turning enough — hips must face same direction as uke\'s toes', 'Pulling down instead of forward and across'],
      drill: { label: 'Mirror entry drill', text: 'Stand facing a wall. Practice the entry turn — foot placement, hip rotation — without a partner. 20 reps each side.', time: '4 min' }
    },
    'O-soto-gari': {
      principle: 'Sweep uke\'s supporting leg from behind while breaking their balance backward over that leg.',
      steps: [
        { label: 'Kuzushi', text: 'Push uke back and slightly to their right rear corner, loading their right leg.' },
        { label: 'Tsukuri', text: 'Step your left foot alongside uke, get chest-to-chest contact, load your right leg.' },
        { label: 'Kake',    text: 'Drive your right leg through in a large sweeping arc, reaping uke\'s right leg away.' }
      ],
      errors: ['Reaping too early before balance is broken', 'Not making chest contact — you must be close', 'Sweeping with a bent knee — use the back of your thigh'],
      drill: { label: 'Reaping pendulum', text: 'Stand on one leg. Swing your free leg in a large controlled arc — back and through. 15 reps each side. Focus on hip height.', time: '3 min' }
    },
    'O-goshi': {
      principle: 'Load uke onto your hip and rotate them over it. The hip is the fulcrum — everything else rotates around it.',
      steps: [
        { label: 'Kuzushi', text: 'Pull uke forward and upward onto their toes, breaking their balance forward.' },
        { label: 'Tsukuri', text: 'Step deep between uke\'s legs, wrap your arm around their waist, hips lower than theirs.' },
        { label: 'Kake',    text: 'Rotate your hips, straighten your legs to lift, then drive forward and down to throw.' }
      ],
      errors: ['Hips not lower than uke\'s — you cannot lift what is above you', 'Leaning forward instead of rotating — use your core, not your back', 'Releasing the grip before the throw completes'],
      drill: { label: 'Hip bump drill', text: 'Partner stands still. Practice stepping in and making hip contact — focus on getting low enough. No throw needed. 15 reps.', time: '5 min' }
    },
    'Ippon-seoi-nage': {
      principle: 'Your arm traps uke\'s arm at the elbow. You become the fulcrum — uke rotates over your back.',
      steps: [
        { label: 'Kuzushi', text: 'Pull uke\'s sleeve arm sharply forward and upward, breaking balance to their front.' },
        { label: 'Tsukuri', text: 'Step in, turn 180°, thread your tsurite arm under uke\'s armpit to grip at their elbow.' },
        { label: 'Kake',    text: 'Bend forward, straighten your knees, and use both arms to flip uke over your shoulder.' }
      ],
      errors: ['Not bending enough — your back must be flat and below uke\'s centre of gravity', 'Elbow grip too loose — the lock must be secure before you throw', 'Standing up before bending forward'],
      drill: { label: 'Wall uchi-komi', text: 'Face a wall. Practice the entry and turn (no throw) — step, pivot, position arms. Wall prevents over-rotation. 20 reps each side.', time: '5 min' }
    },
    'Uchi-mata': {
      principle: 'Reap the inner thigh of uke\'s supporting leg while pulling them forward and over your reaping leg.',
      steps: [
        { label: 'Kuzushi', text: 'Pull uke forward and to the left, loading their right leg as their support.' },
        { label: 'Tsukuri', text: 'Step your left foot between uke\'s feet, turn in, bring your reaping leg inside.' },
        { label: 'Kake',    text: 'Drive your right leg upward through uke\'s inner thigh while pulling them over your hip.' }
      ],
      errors: ['Reaping the outside of the leg — must be inner thigh', 'Not lifting the reaping leg high enough', 'Losing forward pull while reaping'],
      drill: { label: 'Inner thigh pendulum', text: 'Hold a post for balance. Swing your reaping leg forward and up between an imaginary uke\'s legs — smooth arc, hip high. 15 each side.', time: '4 min' }
    },
    'Harai-goshi': {
      principle: 'Sweep uke\'s legs from the side-front with your extended leg while rotating them over your hip.',
      steps: [
        { label: 'Kuzushi', text: 'Pull uke forward onto their toes and slightly to your right.' },
        { label: 'Tsukuri', text: 'Step in with your left foot, pivot 180°, hips loaded in front of uke.' },
        { label: 'Kake',    text: 'Sweep your right leg across the front of uke\'s thighs while rotating hard with your upper body.' }
      ],
      errors: ['Sweeping too low — contact at thigh not calf', 'Not pivoting fully — hips must clear to the front', 'Pulling down instead of rotating around'],
      drill: { label: 'Hip sweep on mat', text: 'Kneel on one knee. Practice the sweeping leg motion — high arc, hip extension. 20 reps. Focus on height of sweep.', time: '4 min' }
    },
    'Juji-gatame': {
      principle: 'Hyperextend uke\'s elbow by applying lever force across your hips while the arm is isolated and straight.',
      steps: [
        { label: 'Control',  text: 'Secure uke\'s arm with both hands, thumb pointing up. The arm must be straight.' },
        { label: 'Position', text: 'Hips pressed tight across uke\'s upper arm. Knees pinching to prevent arm escape. Feet on the floor.' },
        { label: 'Apply',    text: 'Bridge your hips upward slowly and smoothly. Do not jerk. Uke taps — release immediately.' }
      ],
      errors: ['Gap between your hips and their arm — no lever effect', 'Pulling the arm instead of bridging — risk of injury', 'Knees apart — uke can pull arm free'],
      drill: { label: 'Sit-back entry reps', text: 'Partner kneels. Practice the sit-back entry from standing — grip sleeve, sit to the side, swing legs over. 10 slow reps each side.', time: '6 min' }
    },
    // ── Red Belt Techniques ──────────────────────────────────────────────────
    'Ushiro Ukemi': {
      principle: 'A controlled backward fall that spreads impact across the entire back. The arm slap absorbs force before the head can hit the mat.',
      steps: [
        { label: 'Chin tuck', text: 'Tuck chin firmly to chest throughout. Non-negotiable — this protects the head from impact.' },
        { label: 'Sit and roll', text: 'Bend knees, sit back into a squat, then roll backward in a smooth curve — not a flat drop.' },
        { label: 'Slap', text: 'As upper back contacts mat, slap both arms down at 45 degrees simultaneously, palms down. Arms straight.' }
      ],
      errors: ['Head hitting the mat — chin must be tucked at all times', 'Slapping too early or late — timing must sync with back contact', 'Arms bent on impact — reduces slap area and force absorption'],
      drill: { label: 'Seated slap drill', text: 'Sit on mat. Roll back from seated and slap — focus purely on arm timing. 15 reps. Build confidence before standing falls.', time: '3 min' }
    },
    'Yoko Ukemi': {
      principle: 'A side breakfall redirecting falling energy through arm and leg into the mat. Body acts as one connected unit to absorb impact.',
      steps: [
        { label: 'Turn into it', text: 'As you fall sideways, rotate so the flat side of your body — not the hip corner — contacts the mat.' },
        { label: 'Arm slap', text: 'Slap the arm on the falling side down hard at 45 degrees from the body. Keep it straight.' },
        { label: 'Leg contact', text: 'Upper leg slaps the mat to create a second contact point and distribute the landing force.' }
      ],
      errors: ['Landing on hip corner — rotate more to contact the flat of the side', 'Arm too close to body — 45 degrees gives maximum surface area', 'Stiffening up — stay relaxed until the moment of impact'],
      drill: { label: 'Step and fall', text: 'Stand, step to one side, lower to one knee and fall into Yoko Ukemi. Slow controlled reps. 10 each side.', time: '4 min' }
    },
    'Mae Mawari Ukemi (3 Versions)': {
      principle: 'Forward rolling breakfall. Body becomes a wheel — no flat surface hits the mat. Energy travels diagonally from hand to opposite hip.',
      steps: [
        { label: 'Entry', text: 'Place leading hand on mat, arm curved like an arch. Hand, arm and shoulder form the rolling wheel.' },
        { label: 'Roll diagonal', text: 'Roll diagonally: hand to forearm to shoulder to upper back to opposite hip. Never roll over the spine.' },
        { label: 'Exit', text: 'Come to standing or Yoko Ukemi position. The 3 versions: from standing, from kneeling, and from being thrown.' }
      ],
      errors: ['Straight arm — causes shoulder impact; arm must be curved', 'Rolling over spine — diagonal path is hand to opposite hip', 'No momentum — maintain flow through the roll to protect the body'],
      drill: { label: 'Kneeling roll drill', text: 'Start kneeling. Roll slowly — feel each contact point on the mat in sequence. 10 reps each side before standing.', time: '5 min' }
    },
    'Osoto-otoshi': {
      principle: 'Drive uke directly over their rear-supporting leg by pushing backward while dropping your leg behind theirs. More of a direct drop than the sweeping O-soto-gari.',
      steps: [
        { label: 'Kuzushi', text: 'Push uke backward onto their right heel, loading that leg as the sole support.' },
        { label: 'Tsukuri', text: 'Step left foot alongside uke, make chest contact, your weight leaning forward into them.' },
        { label: 'Kake', text: 'Drive your right leg behind and into the back of their right leg — drop them over it with your arm drive.' }
      ],
      errors: ['Pushing sideways not backward — kuzushi must be directly rearward', 'No chest contact — body connection is needed to drive them over', 'Leg contact too low at the ankle — contact at thigh or calf is stronger'],
      drill: { label: 'Backward push drill', text: 'Partner stands still. Push them backward onto their heels and feel the weight shift. No throw. 15 reps each side.', time: '4 min' }
    },
    'Deashi-barai': {
      principle: 'Sweep uke\'s advancing foot exactly as it bears minimal weight during a step. Timing is everything — the sweep happens as the foot lifts.',
      steps: [
        { label: 'Create rhythm', text: 'Move uke in a circle or diagonal, watching for their weight shift as one foot lifts.' },
        { label: 'Timing', text: 'As the target foot advances with no weight on it, sweep it with a sharp flat brushing action.' },
        { label: 'Kake', text: 'Sweeping foot brushes the mat surface — not a kick upward. Pull-push with arms at the same moment.' }
      ],
      errors: ['Sweeping too late — foot already loaded and planted', 'Lifting the sweeping foot too high — must stay low to the mat surface', 'Forgetting arm action — sweep and pull-push must happen simultaneously'],
      drill: { label: 'Mirror timing drill', text: 'Walk in a circle with a partner. Without throwing, touch their advancing foot with yours at the right moment. 2 min of pure timing.', time: '3 min' }
    },
    'Uki-goshi': {
      principle: 'A floating hip throw. Uke is lifted and rotated over the hip without deep penetration. Your arm wraps their waist — your hip is the pivot.',
      steps: [
        { label: 'Kuzushi', text: 'Pull uke forward and upward onto their toes, transferring their weight onto you.' },
        { label: 'Tsukuri', text: 'Step across with leading foot, turn hips in — your hip touches their hip (shallower than O-goshi).' },
        { label: 'Kake', text: 'Wrap arm tight around their waist, pull with sleeve arm, rotate uke over your hip in a smooth arc.' }
      ],
      errors: ['No hip contact — you must feel their hip against yours', 'Pulling down instead of across and around the hip', 'Releasing the waist grip before the throw completes'],
      drill: { label: 'Hip contact drill', text: 'Step in and turn — focus only on achieving hip-to-hip contact. Partner static. 15 reps each side. No throw needed.', time: '4 min' }
    },
    'Kesa-gatame': {
      principle: 'Scarf hold — control uke by locking their head and arm, weight distributed low across their chest. Stability comes from posture, not muscle.',
      steps: [
        { label: 'Position', text: 'Sit at side, hips low and close. Wrap one arm around the head or neck, control near arm under other armpit.' },
        { label: 'Weight', text: 'Lean weight into them — head down, hips on mat, legs spread wide for base. Do not sit up.' },
        { label: 'React', text: 'When uke bridges or rolls, move with them. Rotate your body to maintain the hold rather than resist statically.' }
      ],
      errors: ['Sitting upright — raises centre of gravity, easy to roll', 'Loose arm grip — uke can free it and start escaping', 'Rigid resistance — flow and adjust rather than muscle the hold'],
      drill: { label: 'Resistance maintenance', text: 'Partner attempts slow escapes for 30 seconds. Adjust to maintain. 3 rounds each role. Focus on posture staying low.', time: '5 min' }
    },
    'Mune-gatame': {
      principle: 'Chest hold — straddle chest with your hips, controlling both shoulders. Weight presses downward through your chest into theirs.',
      steps: [
        { label: 'Entry', text: 'Move from ne-waza or after a throw. Position across chest, hips over their stomach area.' },
        { label: 'Control', text: 'Wrap arms underneath the armpits or over upper arms. Head low, chest to chest.' },
        { label: 'Base', text: 'Spread legs wide, toes on mat. Keep hips heavy. Move with uke when they attempt to escape.' }
      ],
      errors: ['Hips too high — uke can bridge and roll you over', 'Arms not controlling shoulders — uke can work arms free', 'Staying stiff — when uke moves, flow with them to maintain position'],
      drill: { label: 'Hip pressure drill', text: 'Apply Mune-gatame. Partner attempts bridge and roll. Adjust and maintain for 30 seconds. 3 rounds each role.', time: '5 min' }
    },
    'Kuzure-kesa-gatame': {
      principle: 'Broken scarf hold — a Kesa-gatame variation controlling the head differently, trapping the arm against your side rather than under your armpit.',
      steps: [
        { label: 'Position', text: 'Sit beside uke as in Kesa, but wrap arm under head and reach to grip far collar or shoulder.' },
        { label: 'Arm trap', text: 'Trap near arm tightly between your torso and upper arm. They cannot bridge effectively if this arm is locked.' },
        { label: 'Weight', text: 'Hips low, lean into them, legs spread. Often stronger against bridging than standard Kesa-gatame.' }
      ],
      errors: ['Not securing the near arm — this is the key lock in this variation', 'Sitting too high on chest — you lose control of the trapped arm', 'Hip leaving the mat — your hip must stay grounded throughout'],
      drill: { label: 'Arm trap drill', text: 'From Kuzure-kesa, partner tries to free near arm. Keep it locked with body weight. 3 rounds of 30 seconds each role.', time: '5 min' }
    },
    // ── Yellow Belt Techniques ───────────────────────────────────────────────
    'Mae-ukemi': {
      principle: 'Forward breakfall — land on forearms and palms simultaneously. Never on elbows or chest alone. Body stays rigid like a plank to spread the impact.',
      steps: [
        { label: 'Arms up', text: 'As you fall forward, bring both arms up in front at about 45 degrees, fingers spread wide.' },
        { label: 'Forearm contact', text: 'Forearms and palms hit mat simultaneously — from wrist to elbow all at once, not hands first.' },
        { label: 'Body rigid', text: 'Keep torso elevated by your arms. Chin neutral, toes contact mat. Chest and knees must not hit.' }
      ],
      errors: ['Hands only — must be full forearm contact or elbows take all the impact', 'Arms flaring out — keep arms roughly parallel', 'Head dropping toward mat — keep chin neutral'],
      drill: { label: 'Kneeling fall drill', text: 'From kneeling, fall forward into Mae-ukemi. Build arm confidence slowly before attempting from standing. 10 reps.', time: '3 min' }
    },
    'Ouchi-gari': {
      principle: 'Major inner reaping throw — reap the inner leg from between them while pushing backward over it. A core attack that sets up dozens of combinations.',
      steps: [
        { label: 'Kuzushi', text: 'Push uke backward to their right rear corner, loading their right leg as the support.' },
        { label: 'Tsukuri', text: 'Step left foot alongside their left foot, make chest contact. Load your reaping leg ready.' },
        { label: 'Kake', text: 'Drive right leg between their legs, reap the inner right leg upward and forward. Arms push backward simultaneously.' }
      ],
      errors: ['Reaping too low at ankle — inner calf or thigh contact is stronger', 'Forgetting the arm drive — push and reap must happen at the same time', 'Stepping too far past — left foot should be beside, not beyond, their left foot'],
      drill: { label: 'Reap and push drill', text: 'Partner static. Step in and feel reaping leg make inner thigh contact. Focus on the push-reap coordination. 15 reps each side.', time: '4 min' }
    },
    'Yoko-shiho-gatame': {
      principle: 'Side four quarters hold — control from the side, trapping near arm and head. One of the most stable holddowns due to the width of your base.',
      steps: [
        { label: 'Position', text: 'Lie at side at 90 degrees to uke, chest against their ribs. Get hips close and low.' },
        { label: 'Grips', text: 'One arm under head gripping far collar. Other arm goes between legs gripping belt or trousers.' },
        { label: 'Weight', text: 'Hips low and close, legs spread for wide base. Head down. Squeeze inward toward uke at all times.' }
      ],
      errors: ['Gap between chest and side — any space lets uke create an escape', 'Hips too high — easy to roll over', 'Near arm not trapped — use torso to pin it down'],
      drill: { label: 'Side squeeze drill', text: 'Apply Yoko-shiho-gatame. Partner attempts bridge and roll. Shift hips to maintain. 3 rounds of 30 seconds.', time: '5 min' }
    },
    'Tate-shiho-gatame': {
      principle: 'Lengthwise four quarters — mount position, straddling uke with legs hooking theirs. Control both arms and maintain forward pressure to prevent the bridge.',
      steps: [
        { label: 'Mount', text: 'Straddle uke at waist, knees on mat beside hips. Hook legs under their thighs.' },
        { label: 'Arms', text: 'Control uke\'s arms — grip collar near their ears and press chest to chest.' },
        { label: 'Pressure', text: 'Drive weight forward and downward. Hooks under thighs prevent bridging. Keep head low.' }
      ],
      errors: ['Hooks not under thighs — uke can bridge and roll without this lock', 'Sitting upright — lean forward to prevent reversal', 'Arms uncontrolled — uke can push up or slip out'],
      drill: { label: 'Mount pressure drill', text: 'Apply Tate-shiho-gatame. Partner attempts escape. Maintain by adjusting weight and hooks. 3 rounds of 30 seconds.', time: '5 min' }
    },
    'Kami-shiho-gatame': {
      principle: 'Upper four quarters — control from above the head, arms under shoulders. Deadweight from above makes this one of the hardest holds to escape.',
      steps: [
        { label: 'Position', text: 'Lie above head, chest on face or chest, arms going under armpits gripping belt on each side.' },
        { label: 'Weight', text: 'Bring full body weight downward. Legs spread, toes on mat. Hips as low as possible.' },
        { label: 'Elbows in', text: 'Keep elbows tight to sides — this traps the arms. Move with any bridge attempt by shifting weight.' }
      ],
      errors: ['Elbows flaring out — uke can push up and escape through the gap', 'Hips too high — creates a fulcrum uke can use to roll', 'Head lifting — keep head and chest pressed downward'],
      drill: { label: 'Upper hold drill', text: 'Apply Kami-shiho-gatame. Partner attempts sit-up and bridge escapes. Adjust weight and elbows to maintain. 3 rounds of 30s.', time: '5 min' }
    },

  };

  function _getContent(id, groupTitle) {
    if (CONTENT[id]) return CONTENT[id];
    var gt = groupTitle || '';
    var isHold     = /osaekomi|gatame/i.test(gt);
    var isStrangle = /shime/i.test(gt);
    var isLock     = /kansetsu/i.test(gt);
    if (isHold) return {
      principle: 'Control uke\'s upper body by distributing your weight across their chest and hips. Stability comes from low posture and active adjustments.',
      steps: [
        { label: 'Entry',    text: 'Transition smoothly from the throw or from ne-waza into the hold position without losing contact.' },
        { label: 'Position', text: 'Stabilise your weight distribution — head down, hips low, legs spread for a wide base.' },
        { label: 'Maintain', text: 'Constantly micro-adjust as uke attempts escapes. Move with them, do not fight them statically.' }
      ],
      errors: ['Hips too high — easy to bridge and roll', 'Head up — raises your centre of gravity', 'Rigid response to escape attempts — stay fluid'],
      drill: { label: 'Hold maintenance drill', text: 'Partner attempts slow escapes for 30 seconds. You adjust to maintain. 3 rounds each role.', time: '6 min' }
    };
    if (isStrangle) return {
      principle: 'Apply controlled pressure to the carotid arteries on both sides of the neck, not the windpipe.',
      steps: [
        { label: 'Setup', text: 'Achieve a secure position behind or beside uke before applying the strangle.' },
        { label: 'Grip',  text: 'Establish your grip cleanly — forearm across one side, bicep against the other.' },
        { label: 'Apply', text: 'Compress smoothly and steadily. Uke signals with two taps — release immediately.' }
      ],
      errors: ['Windpipe pressure instead of carotid — ineffective and dangerous', 'Poor position — uke can escape before strangle takes effect', 'Jerking instead of smooth compression'],
      drill: { label: 'Grip familiarisation', text: 'Practice establishing the grip from different positions — both sides. Focus purely on clean grip placement.', time: '5 min' }
    };
    if (isLock) return {
      principle: 'Isolate the target joint and apply a single direction of force against its natural range of motion.',
      steps: [
        { label: 'Isolate', text: 'Secure the target limb firmly before applying any leverage.' },
        { label: 'Lever',   text: 'Position your body as the fulcrum — your weight does the work, not your grip strength.' },
        { label: 'Apply',   text: 'Increase pressure slowly. Uke taps — release immediately and completely.' }
      ],
      errors: ['Applying too fast — uke cannot tap in time', 'Incomplete isolation — uke rotates out of the lock', 'Wrong angle — force not aligned against joint limit'],
      drill: { label: 'Slow application drill', text: 'Apply the lock at 20% speed. Hold at threshold for 3 seconds. Release. 10 reps each side.', time: '6 min' }
    };
    return {
      principle: 'Break uke\'s balance (kuzushi) in the direction of the throw before entering. The throw should feel inevitable, not forced.',
      steps: [
        { label: 'Kuzushi', text: 'Disrupt uke\'s posture in the direction of the throw. They should feel unsteady before you enter.' },
        { label: 'Tsukuri', text: 'Enter and position your body perfectly. Feet, hips and arms must align with the throwing direction.' },
        { label: 'Kake',    text: 'Execute the throw as one flowing movement — do not pause between entry and throw.' }
      ],
      errors: ['Forcing the throw without kuzushi — strength over technique', 'Incomplete entry — body not fully positioned before throwing', 'Breaking the motion — entry and throw must be continuous'],
      drill: { label: 'Uchi-komi sets', text: '10 entries focusing purely on foot placement, then 10 on hip position, then 10 full speed. 3 sets total.', time: '6 min' }
    };
  }

  // ── Main entry point ──────────────────────────────────────────────────────
  function open(techId, beltId) {
    _tech  = techId;
    _tab   = 0;
    if (beltId) {
      _beltId = beltId;
    } else {
      var info = JHState.findTechnique(techId);
      _beltId = info ? info.beltId : (JHState.getProfile().belt || 'toRed');
    }
    // Always look up the group title
    var info2 = JHState.findTechnique(techId);
    _group = info2 ? info2.groupTitle : null;

    JHState.addRecent(techId, _beltId);
    _renderHub();
    JHRouter.go('hub', { technique: techId });
  }

  // ── Render hub ────────────────────────────────────────────────────────────
  function _renderHub() {
    _renderScroll();
    _renderBottom();
  }

  function _renderScroll() {
    var el = document.getElementById('hub-scroll');
    if (!el) return;

    var vid     = JHState.getVideoId(_tech);
    var en      = JHState.getEnglish(_tech);
    var col     = JHState.getBeltColor(_beltId);
    var content = _getContent(_tech, _group || '');
    var showEn  = en && en.toLowerCase() !== _tech.toLowerCase();

    // ── Video / hero area ──
    var videoHTML;
    if (vid) {
      videoHTML =
        '<div style="width:100%;background:#000;position:relative">' +
          '<button onclick="JHRouter.back()" style="position:absolute;top:calc(env(safe-area-inset-top,0px) + 12px);left:12px;z-index:10;width:36px;height:36px;border-radius:50%;background:rgba(0,0,0,0.65);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(8px)">' +
            '<span class="ms" style="font-size:18px;color:#fff">arrow_back</span>' +
          '</button>' +
          '<iframe class="jh-video-iframe" style="display:block;width:100%;aspect-ratio:16/9;border:0"' +
            ' src="https://www.youtube-nocookie.com/embed/' + vid + '?rel=0&modestbranding=1&playsinline=1"' +
            ' allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>' +
          '<div class="jh-video-offline" style="display:' + (navigator.onLine ? 'none' : 'flex') + ';position:absolute;inset:0;background:#111;flex-direction:column;align-items:center;justify-content:center;gap:10px">' +
            '<span class="ms" style="font-size:36px;color:rgba(229,226,225,0.3)">wifi_off</span>' +
            '<p style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:13px;color:rgba(229,226,225,0.5);text-align:center;padding:0 24px">Video needs a connection<br/><span style="font-weight:400;font-size:12px">Technique cards and checklists work offline</span></p>' +
          '</div>' +
        '</div>';
    } else {
      var yt = _imgSrc(_tech);
      var photo = 'public/techniques/' + _slug(_tech) + '.jpg';
      var bgContent = yt
        ? '<img src="' + photo + '" onerror="this.onerror=null;this.src=\'' + yt + '\'" style="width:100%;height:100%;object-fit:cover;opacity:0.65" alt=""/>'
        : '<div style="width:100%;height:100%;background:linear-gradient(135deg,' + col + '25,' + col + '06);display:flex;align-items:center;justify-content:center"><span class="ms" style="font-size:72px;color:' + col + '30">sports_martial_arts</span></div>';
      videoHTML =
        '<div style="width:100%;aspect-ratio:16/9;background:#111;position:relative;overflow:hidden">' +
          '<button onclick="JHRouter.back()" style="position:absolute;top:calc(env(safe-area-inset-top,0px) + 12px);left:12px;z-index:10;width:36px;height:36px;border-radius:50%;background:rgba(0,0,0,0.65);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(8px)">' +
            '<span class="ms" style="font-size:18px;color:#fff">arrow_back</span>' +
          '</button>' +
          bgContent +
        '</div>';
    }

    // ── Name block ──
    var catBadge = _group
      ? '<span style="display:inline-block;margin-top:8px;padding:4px 12px;border-radius:99px;background:' + col + '18;border:1px solid ' + col + '28;font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:11px;color:' + col + '">' + _group + '</span>'
      : '';

    var nameBlock =
      '<div style="padding:18px 20px 0">' +
        '<h1 style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:900;font-size:clamp(22px,5vw,28px);color:#fff;line-height:1.1;letter-spacing:-0.02em">' + _tech + '</h1>' +
        (showEn ? '<p style="font-family:Inter,sans-serif;font-size:14px;color:rgba(255,255,255,0.42);margin-top:4px">' + en + '</p>' : '') +
        catBadge +
      '</div>';

    // ── Action icons row (fav, pin, share) ──
    var fav  = JHState.isFav(_tech);
    var pinned = JHState.isPinned(_tech);
    var actionRow =
      '<div style="display:flex;align-items:center;gap:8px;padding:14px 20px 0">' +
        '<button onclick="JHHub.toggleFav()" id="hub-fav-btn" style="display:flex;align-items:center;gap:6px;padding:8px 14px;border-radius:99px;background:' + (fav ? '#f8717120' : '#1c1b1b') + ';border:1px solid ' + (fav ? '#f8717140' : 'rgba(255,255,255,0.08)') + ';cursor:pointer">' +
          '<span class="ms' + (fav ? ' ms-fill' : '') + '" style="font-size:16px;color:' + (fav ? '#f87171' : 'rgba(229,226,225,0.5)') + '">' + (fav ? 'favorite' : 'favorite_border') + '</span>' +
          '<span style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:11px;color:' + (fav ? '#f87171' : 'rgba(229,226,225,0.45)') + '">' + (fav ? 'Saved' : 'Save') + '</span>' +
        '</button>' +
        '<button onclick="JHHub.togglePin()" id="hub-pin-btn" style="display:flex;align-items:center;gap:6px;padding:8px 14px;border-radius:99px;background:' + (pinned ? '#f2ca5020' : '#1c1b1b') + ';border:1px solid ' + (pinned ? '#f2ca5040' : 'rgba(255,255,255,0.08)') + ';cursor:pointer">' +
          '<span class="ms' + (pinned ? ' ms-fill' : '') + '" style="font-size:16px;color:' + (pinned ? '#f2ca50' : 'rgba(229,226,225,0.5)') + '">push_pin</span>' +
          '<span style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:11px;color:' + (pinned ? '#f2ca50' : 'rgba(229,226,225,0.45)') + '">' + (pinned ? 'Pinned' : 'Pin') + '</span>' +
        '</button>' +
        '<button onclick="JHHub.share()" style="display:flex;align-items:center;gap:6px;padding:8px 14px;border-radius:99px;background:#1c1b1b;border:1px solid rgba(255,255,255,0.08);cursor:pointer;margin-left:auto">' +
          '<span class="ms" style="font-size:16px;color:rgba(229,226,225,0.5)">share</span>' +
          '<span style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:11px;color:rgba(229,226,225,0.45)">Share</span>' +
        '</button>' +
      '</div>';

    // ── Tab bar ──
    var tabs = ['Details', 'Key Points', 'Common Mistakes'];
    var tabBar =
      '<div style="display:flex;border-bottom:1px solid rgba(255,255,255,0.08);padding:0 20px;margin-top:16px">' +
        tabs.map(function(t, i) {
          var active = i === _tab;
          return '<button onclick="JHHub.setTab(' + i + ')" class="hub-tab' + (active ? ' active' : '') + '">' + t + '</button>';
        }).join('') +
      '</div>';

    // ── Tab content ──
    var tabContent = '<div style="padding:20px 20px 28px">' + _getTabContent(content, col) + '</div>';

    el.innerHTML = videoHTML + nameBlock + actionRow + tabBar + tabContent;
  }

  function _getTabContent(content, col) {
    if (_tab === 0) {
      // Details: principle + kuzushi/tsukuri/kake steps
      var principleHTML = content.principle
        ? '<p style="font-family:Inter,sans-serif;font-size:14px;color:rgba(229,226,225,0.7);line-height:1.7;padding:14px 16px;background:rgba(255,255,255,0.04);border-radius:12px;border-left:3px solid ' + col + ';margin-bottom:20px">' + content.principle + '</p>'
        : '';
      var steps = (content.steps || []).map(function(s, i) {
        return '<div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:16px">' +
          '<div style="width:32px;height:32px;border-radius:50%;background:' + col + '1a;border:1px solid ' + col + '30;display:flex;align-items:center;justify-content:center;flex-shrink:0">' +
            '<span style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:900;font-size:13px;color:' + col + '">' + (i + 1) + '</span>' +
          '</div>' +
          '<div>' +
            '<p style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:12px;color:' + col + ';text-transform:uppercase;letter-spacing:0.06em;margin-bottom:3px">' + s.label + '</p>' +
            '<p style="font-family:Inter,sans-serif;font-size:14px;color:rgba(229,226,225,0.8);line-height:1.6">' + s.text + '</p>' +
          '</div>' +
          '</div>';
      }).join('');
      return principleHTML + steps;
    }

    if (_tab === 1) {
      // Key Points: checklist + drill
      var points = (content.steps || []).map(function(s) {
        return '<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 14px;border-radius:12px;background:#1c1b1b;border:1px solid rgba(255,255,255,0.06);margin-bottom:8px">' +
          '<span class="ms ms-fill" style="font-size:16px;color:' + col + ';flex-shrink:0;margin-top:1px">check_circle</span>' +
          '<p style="font-family:Inter,sans-serif;font-size:13px;color:rgba(229,226,225,0.85);line-height:1.55"><strong style="color:rgba(229,226,225,0.95)">' + s.label + ':</strong> ' + s.text + '</p>' +
          '</div>';
      }).join('');
      var drillHTML = content.drill
        ? '<div style="margin-top:16px;padding:14px 16px;border-radius:12px;background:#f2ca5010;border:1px solid #f2ca5022">' +
            '<p style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:10px;color:#f2ca50;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:6px">QUICK DRILL · ' + (content.drill.time || '5 min') + '</p>' +
            '<p style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:14px;color:#fff;margin-bottom:6px">' + content.drill.label + '</p>' +
            '<p style="font-family:Inter,sans-serif;font-size:13px;color:rgba(229,226,225,0.65);line-height:1.55">' + content.drill.text + '</p>' +
          '</div>'
        : '';
      return points + drillHTML;
    }

    // tab 2: Common Mistakes
    return (content.errors || []).map(function(e) {
      return '<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;border-radius:12px;background:rgba(248,113,113,0.06);border:1px solid rgba(248,113,113,0.12);margin-bottom:8px">' +
        '<span class="ms ms-fill" style="font-size:18px;color:#f87171;flex-shrink:0;margin-top:1px">cancel</span>' +
        '<p style="font-family:Inter,sans-serif;font-size:14px;color:rgba(229,226,225,0.85);line-height:1.55">' + e + '</p>' +
        '</div>';
    }).join('');
  }

  function _renderBottom() {
    var el = document.getElementById('hub-bottom');
    if (!el) return;
    var key  = _beltId + '::' + _tech;
    var done = JHState.isDone(key);
    var col  = JHState.getBeltColor(_beltId);
    var vid  = JHState.getVideoId(_tech);

    el.innerHTML =
      '<div style="display:flex;gap:10px;padding:12px 20px calc(env(safe-area-inset-bottom,0px) + 12px);' +
           'background:rgba(19,19,19,0.97);backdrop-filter:blur(16px);border-top:1px solid rgba(255,255,255,0.06)">' +
        (done
          ? '<div style="flex:2;padding:14px;border-radius:12px;background:' + col + '1a;border:1px solid ' + col + '35;display:flex;align-items:center;justify-content:center;gap:8px">' +
              '<span class="ms ms-fill" style="font-size:16px;color:' + col + '">check_circle</span>' +
              '<span style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:13px;color:' + col + '">Mastered</span>' +
            '</div>'
          : '<button onclick="JHHub.markMastered()" style="flex:2;padding:14px;border-radius:12px;background:#f2ca50;border:none;color:#1a1000;font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:800;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">' +
              '<span class="ms ms-fill" style="font-size:16px">check_circle</span>Mark as Mastered' +
            '</button>') +
      '</div>';
  }

  // ── Tab switching ─────────────────────────────────────────────────────────
  function setTab(i) {
    _tab = i;
    // Update tab button classes
    document.querySelectorAll('.hub-tab').forEach(function(btn, idx) {
      btn.classList.toggle('active', idx === i);
    });
    // Update tab content only
    var content = _getContent(_tech, _group || '');
    var col     = JHState.getBeltColor(_beltId);
    var contentEl = document.querySelector('#hub-scroll > div:last-child');
    if (contentEl) contentEl.innerHTML = _getTabContent(content, col);
  }

  // ── Actions ───────────────────────────────────────────────────────────────
  function markMastered() {
    JHState.markDone(_beltId + '::' + _tech);
    _renderBottom();
  }

  function watchVideo() {
    var scrollEl = document.getElementById('hub-scroll');
    if (scrollEl) scrollEl.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleFav() {
    JHState.toggleFav(_tech);
    // Refresh action row by re-rendering scroll (lightweight enough)
    _renderScroll();
  }

  function togglePin() {
    JHState.togglePin(_tech);
    _renderScroll();
  }

  function share() {
    var url  = window.location.href;
    var en   = JHState.getEnglish(_tech);
    var text = _tech + (en ? ' (' + en + ')' : '') + ' — ObiApp';
    if (navigator.share) {
      navigator.share({ title: text, url: url }).catch(function() {});
    } else {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function() { _toast('Link copied!'); }).catch(function() { _toast(url); });
      } else { _toast(url); }
    }
  }

  function _toast(msg) {
    var existing = document.getElementById('jh-toast');
    if (existing) existing.remove();
    var t = document.createElement('div');
    t.id = 'jh-toast';
    t.textContent = msg;
    t.style.cssText = 'position:fixed;bottom:110px;left:50%;transform:translateX(-50%);padding:10px 22px;background:#1c1b1b;color:#e5e2e1;border-radius:99px;font-family:\'Plus Jakarta Sans\',sans-serif;font-size:13px;font-weight:700;z-index:9999;border:1px solid rgba(255,255,255,0.12);white-space:nowrap;pointer-events:none';
    document.body.appendChild(t);
    setTimeout(function() { if (t.parentNode) t.remove(); }, 2200);
  }

  // ── Swipe card overlay (legacy — kept for swipe-overlay HTML in index) ───
  function startCards(startIndex) {
    _idx   = startIndex || 0;
    _cards = [];   // no-op in new design
  }
  function closeCards() {
    var overlay = document.getElementById('swipe-overlay');
    if (overlay) overlay.style.display = 'none';
  }
  function nextCard() {}
  function prevCard() {}
  function openCard() {}

  return { open, setTab, markMastered, watchVideo, toggleFav, togglePin, share,
           startCards, closeCards, nextCard, prevCard, openCard };
})();
