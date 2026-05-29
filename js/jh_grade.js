const JHGrade = (() => {
  let _mode        = 'overview';  // 'overview' | 'checklist'
  let _activeBelt  = null;
  let _savedScroll = 0;

  // ─────────────────────────────────────────────
  // Public entry point
  // ─────────────────────────────────────────────
  function render() {
    if (typeof BELT_DATA === 'undefined') return;
    const profile = JHState.getProfile();
    _activeBelt = _activeBelt || profile.belt || BELT_DATA[0]?.id || 'toRed';

    if (_mode === 'checklist') {
      _renderChecklistView();
    } else {
      _mode = 'overview';
      _renderOverview();
    }
  }

  function saveScroll() {
    const sc = document.getElementById('screen-grade');
    if (sc) _savedScroll = sc.scrollTop;
  }

  // ─────────────────────────────────────────────
  // OVERVIEW — path timeline
  // ─────────────────────────────────────────────
  function _renderOverview() {
    const el = document.getElementById('grade-content');
    if (!el) return;

    const profile    = JHState.getProfile();
    const profileBelt = profile.belt || 'toRed';
    const currentIdx  = BELT_DATA.findIndex(b => b.id === profileBelt);
    const currentBelt = BELT_DATA[currentIdx];
    const nextBelt    = BELT_DATA[currentIdx + 1];
    const col         = JHState.getBeltColor(profileBelt);
    const pct         = JHState.beltProgress(profileBelt);

    // ── Hero rank card ──
    const beltLabel = profileBelt === 'toRed' ? 'Novice / White Belt' :
      (currentBelt ? (currentBelt.from + ' Belt') : profileBelt.replace(/^to/, '') + ' Belt');
    const kyuLabel = currentBelt?.duration ? currentBelt.duration.split(' ')[0] : '';
    const nextLabel = nextBelt ? nextBelt.from + ' Belt' : 'Black Belt';

    let heroHtml = `
      <div class="glass rounded-2xl p-5 mb-6" style="border:1px solid ${col}35;position:relative;overflow:hidden">
        <!-- faint belt colour wash -->
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,${col}12 0%,transparent 60%);pointer-events:none"></div>
        <div style="position:relative">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:4px">
            <p style="font-size:10px;font-weight:700;letter-spacing:0.14em;color:${col};text-transform:uppercase;font-family:'Plus Jakarta Sans',sans-serif">Current Rank</p>
            ${currentBelt ? `<span style="font-size:10px;font-weight:700;padding:3px 10px;border-radius:20px;background:${col}22;color:${col};border:1px solid ${col}50;font-family:'Plus Jakarta Sans',sans-serif">${currentBelt.from} Belt</span>` : ''}
          </div>
          <p style="font-size:24px;font-weight:800;color:#e5e2e1;line-height:1.1;margin-bottom:14px;font-family:'Plus Jakarta Sans',sans-serif">${beltLabel}</p>
          <!-- Belt colour bar -->
          <div style="width:100%;height:18px;border-radius:6px;background:${col};margin-bottom:14px;position:relative;overflow:hidden;box-shadow:0 0 16px ${col}50">
            <div style="position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent,transparent 18px,rgba(0,0,0,0.12) 18px,rgba(0,0,0,0.12) 20px)"></div>
          </div>
          <!-- Progress to next -->
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <p style="font-size:11px;color:rgba(229,226,225,0.45);font-family:Inter,sans-serif">Next Grade: ${nextLabel}</p>
            <p style="font-size:13px;font-weight:800;color:${col};font-family:'Plus Jakarta Sans',sans-serif">${pct}%</p>
          </div>
          <div style="width:100%;height:6px;border-radius:3px;background:rgba(255,255,255,0.07)">
            <div style="height:6px;border-radius:3px;background:linear-gradient(90deg,${col},${col}cc);width:${pct}%;transition:width 0.8s cubic-bezier(0.34,1.56,0.64,1)"></div>
          </div>
        </div>
      </div>`;

    // ── Path timeline ──
    let pathHtml = `
      <p style="font-size:11px;font-weight:800;letter-spacing:0.12em;color:rgba(229,226,225,0.5);text-transform:uppercase;margin-bottom:16px;font-family:'Plus Jakarta Sans',sans-serif">BJA Syllabus Path</p>
      <div style="position:relative">
        <!-- Vertical connector line -->
        <div style="position:absolute;left:27px;top:32px;bottom:32px;width:2px;background:linear-gradient(to bottom,rgba(255,255,255,0.06),rgba(255,255,255,0.03));z-index:0"></div>`;

    BELT_DATA.forEach((belt, idx) => {
      const isPassed  = idx < currentIdx;
      const isCurrent = idx === currentIdx;
      const isLocked  = idx > currentIdx;
      const bCol      = JHState.getBeltColor(belt.id);
      const bPct      = isPassed ? 100 : (isCurrent ? pct : 0);

      // Stats for card
      let techTotal = 0, techDone = 0, knowTotal = 0, knowDone = 0;
      belt.groups.forEach(g => {
        const isKnow = /Knowledge|Moral Code|Terminology/i.test(g.title);
        g.items.forEach(item => {
          const done = JHState.isDone(belt.id + '::' + item);
          if (isKnow) { knowTotal++; if (done) knowDone++; }
          else        { techTotal++; if (done) techDone++; }
        });
      });

      // Node circle
      let nodeHtml;
      if (isPassed) {
        nodeHtml = `<div style="width:56px;height:56px;border-radius:50%;background:${bCol};flex-shrink:0;z-index:1;
          display:flex;align-items:center;justify-content:center;
          box-shadow:0 0 0 3px rgba(255,255,255,0.08),0 0 12px ${bCol}40">
          <span class="ms ms-fill" style="font-size:22px;color:#fff">check</span>
        </div>`;
      } else if (isCurrent) {
        nodeHtml = `<div style="width:56px;height:56px;border-radius:50%;background:${bCol};flex-shrink:0;z-index:1;
          display:flex;align-items:center;justify-content:center;
          box-shadow:0 0 0 3px ${bCol}40,0 0 20px ${bCol}60;
          animation:pulse-node 2.5s ease-in-out infinite">
          <img src="${JHState.getBeltIcon(belt.id)}" style="width:28px;height:auto;object-fit:contain" alt=""/>
        </div>`;
      } else {
        nodeHtml = `<div style="width:56px;height:56px;border-radius:50%;background:#1c1b1b;flex-shrink:0;z-index:1;
          display:flex;align-items:center;justify-content:center;
          border:2px solid rgba(255,255,255,0.07)">
          <span class="ms" style="font-size:20px;color:rgba(229,226,225,0.2)">lock</span>
        </div>`;
      }

      // Card content
      let cardContent;
      if (isPassed) {
        cardContent = `
          <p style="font-size:13px;font-weight:700;color:#e5e2e1;font-family:'Plus Jakarta Sans',sans-serif">${belt.from} Belt${belt.from === 'Novice / White' ? '' : ''}</p>
          <p style="font-size:11px;color:#22c55e;margin-top:2px;font-family:Inter,sans-serif">✓ Completed</p>`;
      } else if (isCurrent) {
        cardContent = `
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
            <p style="font-size:13px;font-weight:800;color:${bCol};font-family:'Plus Jakarta Sans',sans-serif">${belt.from} Belt</p>
            <span style="font-size:9px;font-weight:700;padding:2px 8px;border-radius:4px;background:${bCol};color:#1a1000;letter-spacing:0.08em;font-family:'Plus Jakarta Sans',sans-serif">ACTIVE</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            <div>
              <p style="font-size:10px;color:rgba(229,226,225,0.4);font-family:Inter,sans-serif">Techniques</p>
              <p style="font-size:13px;font-weight:700;color:#e5e2e1;font-family:'Plus Jakarta Sans',sans-serif">${techDone}<span style="color:rgba(229,226,225,0.3);font-size:11px"> / ${techTotal}</span></p>
            </div>
            <div>
              <p style="font-size:10px;color:rgba(229,226,225,0.4);font-family:Inter,sans-serif">Knowledge</p>
              <p style="font-size:13px;font-weight:700;color:#e5e2e1;font-family:'Plus Jakarta Sans',sans-serif">${knowDone}<span style="color:rgba(229,226,225,0.3);font-size:11px"> / ${knowTotal}</span></p>
            </div>
          </div>`;
      } else {
        // locked — show what's needed
        cardContent = `
          <p style="font-size:13px;font-weight:700;color:rgba(229,226,225,0.3);font-family:'Plus Jakarta Sans',sans-serif">${belt.from} Belt</p>
          <p style="font-size:11px;color:rgba(229,226,225,0.2);margin-top:2px;font-family:Inter,sans-serif">Techniques: ${techTotal} · Knowledge: ${knowTotal}</p>`;
      }

      const cardBorder = isCurrent ? `2px solid ${bCol}` : '1px solid rgba(255,255,255,0.05)';
      const cardBg     = isCurrent ? bCol + '12' : (isPassed ? '#1a1a1a' : '#161616');
      const clickable  = !isLocked;

      pathHtml += `
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:14px;position:relative;z-index:1"
          ${clickable ? `onclick="JHGrade.openChecklist('${belt.id}')" class="active-scale" style="cursor:pointer"` : ''}>
          ${nodeHtml}
          <div style="flex:1;padding:14px 16px;border-radius:14px;background:${cardBg};border:${cardBorder};
            ${isLocked ? 'opacity:0.5' : ''}">
            ${cardContent}
          </div>
          ${clickable ? `<span class="ms" style="font-size:18px;color:${isCurrent ? bCol + '80' : 'rgba(229,226,225,0.15)'};flex-shrink:0;z-index:1">chevron_right</span>` : ''}
        </div>`;
    });

    pathHtml += '</div>';

    el.innerHTML = heroHtml + pathHtml;

    // Restore scroll if returning from checklist
    if (_savedScroll > 0) {
      const sc = document.getElementById('screen-grade');
      if (sc) sc.scrollTop = _savedScroll;
      _savedScroll = 0;
    }
  }

  // ─────────────────────────────────────────────
  // CHECKLIST — per-belt drill-down
  // ─────────────────────────────────────────────
  function openChecklist(beltId) {
    saveScroll();
    _activeBelt = beltId;
    _mode = 'checklist';
    _renderChecklistView();
    // Scroll to top
    const sc = document.getElementById('screen-grade');
    if (sc) sc.scrollTop = 0;
  }

  function _renderChecklistView() {
    const el = document.getElementById('grade-content');
    if (!el || typeof BELT_DATA === 'undefined') return;
    const belt = BELT_DATA.find(b => b.id === _activeBelt);
    if (!belt) return;

    const col = JHState.getBeltColor(belt.id);
    const pct = JHState.beltProgress(belt.id);

    let techTotal = 0, techDone = 0, knowTotal = 0, knowDone = 0;
    belt.groups.forEach(g => {
      const isKnow = /Knowledge|Moral Code|Terminology/i.test(g.title);
      g.items.forEach(item => {
        const done = JHState.isDone(belt.id + '::' + item);
        if (isKnow) { knowTotal++; if (done) knowDone++; }
        else        { techTotal++; if (done) techDone++; }
      });
    });

    const readyPct = techTotal ? Math.round(techDone / techTotal * 100) : 0;
    const isReadyToGrade = pct >= 100;
    const readyMsg = readyPct >= 100 ? 'All techniques complete — grading ready!'

                   : readyPct >= 80  ? `${100 - readyPct}% left — almost there!`
                   : readyPct >= 50  ? `${techTotal - techDone} techniques still to master`
                   :                   `Keep going — ${techDone} of ${techTotal} techniques done`;

    let html = `
      <!-- Back button -->
      <button onclick="JHGrade.backToOverview()"
        class="flex items-center gap-2 active-scale mb-4"
        style="background:none;border:none;cursor:pointer;padding:0;-webkit-tap-highlight-color:transparent">
        <span class="ms" style="font-size:20px;color:rgba(229,226,225,0.5)">arrow_back</span>
        <p style="font-size:13px;color:rgba(229,226,225,0.5);font-family:'Plus Jakarta Sans',sans-serif;font-weight:600">Syllabus Path</p>
      </button>

      <!-- Readiness card -->
      <div class="glass rounded-2xl p-5 mb-4" style="border:1px solid ${col}30">
        <div class="flex items-center justify-between mb-3">
          <div>
            <p class="font-jakarta font-extrabold" style="font-size:11px;color:${col};letter-spacing:0.12em;text-transform:uppercase">${belt.from} Belt Checklist</p>
            <p style="font-size:13px;color:rgba(229,226,225,0.5);margin-top:2px">${readyMsg}</p>
          </div>
          <div class="relative w-14 h-14">
            <svg viewBox="0 0 56 56" style="width:56px;height:56px;transform:rotate(-90deg)">
              <circle cx="28" cy="28" r="24" fill="none" stroke="#2a2a2a" stroke-width="4"/>
              <circle cx="28" cy="28" r="24" fill="none" stroke="${col}" stroke-width="4"
                stroke-dasharray="${(2*Math.PI*24).toFixed(1)}"
                stroke-dashoffset="${((2*Math.PI*24)*(1-pct/100)).toFixed(1)}"
                stroke-linecap="round"/>
            </svg>
            <div class="absolute inset-0 flex items-center justify-center font-jakarta font-bold" style="font-size:11px;color:${col}">${pct}%</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1px 1fr;background:#1a1a1a;border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,0.05);margin-bottom:12px">
          <div style="padding:10px 12px;text-align:center">
            <p class="font-jakarta font-extrabold" style="font-size:17px;color:#e5e2e1">${techDone}<span style="color:rgba(229,226,225,0.3);font-size:13px"> / ${techTotal}</span></p>
            <p style="font-size:9px;color:rgba(229,226,225,0.4);font-weight:700;letter-spacing:0.06em">TECHNIQUES</p>
          </div>
          <div style="background:rgba(255,255,255,0.06)"></div>
          <div style="padding:10px 12px;text-align:center">
            <p class="font-jakarta font-extrabold" style="font-size:17px;color:#e5e2e1">${knowDone}<span style="color:rgba(229,226,225,0.3);font-size:13px"> / ${knowTotal}</span></p>
            <p style="font-size:9px;color:rgba(229,226,225,0.4);font-weight:700;letter-spacing:0.06em">KNOWLEDGE</p>
          </div>
        </div>
        <div class="w-full rounded-full h-1.5" style="background:#2a2a2a">
          <div class="h-1.5 rounded-full" style="width:${pct}%;background:${col};transition:width 0.3s"></div>
        </div>
      </div>`;

    // Grade-ready banner
    if (isReadyToGrade) {
      html += `
        <div style="background:linear-gradient(135deg,${col}22,${col}0a);border:2px solid ${col}60;border-radius:18px;padding:20px;margin-bottom:16px;text-align:center">
          <div style="font-size:40px;margin-bottom:8px">🥋</div>
          <p style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#e5e2e1;margin-bottom:6px">You're ready to grade!</p>
          <p style="font-size:13px;color:rgba(229,226,225,0.55);margin-bottom:16px;line-height:1.5">You've completed all the requirements for <strong style="color:${col}">${belt.from} Belt</strong>. Time to go for it.</p>
          <a href="https://www.britishjudo.org.uk/find-a-club/" target="_blank"
            style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border-radius:12px;background:${col};color:#0e0c0b;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:13px;text-decoration:none">
            <span class="ms" style="font-size:16px">search</span>Find a Grading
          </a>
        </div>`;
    }

    // Groups
    for (const group of belt.groups) {
      const isKnowledge = /Knowledge|Moral Code/i.test(group.title);
      const doneInGroup = group.items.filter(item => JHState.isDone(belt.id + '::' + item)).length;

      html += `
        <div class="mb-2">
          <div class="flex items-center justify-between px-1 mb-2">
            <p class="font-jakarta font-extrabold" style="font-size:10px;color:${col};letter-spacing:0.10em;text-transform:uppercase;line-height:1.3">${group.title}</p>
            <p style="font-size:11px;color:rgba(229,226,225,0.35);white-space:nowrap;margin-left:8px">${doneInGroup}/${group.items.length}</p>
          </div>
          <div class="space-y-1.5">` +
        group.items.map(item => {
          const key   = belt.id + '::' + item;
          const done  = JHState.isDone(key);
          const en    = JHState.getEnglish(item);
          const thumb = JHState.getThumbUrl(item);
          const safe  = item.replace(/'/g, "\\'");

          if (isKnowledge) {
            return `
              <div class="flex items-center gap-3 p-3 rounded-xl"
                style="background:${done ? col + '10' : '#1c1b1b'};border:1px solid ${done ? col + '30' : 'rgba(255,255,255,0.05)'}">
                <button onclick="JHGrade.toggleDone('${key}','${safe}','${belt.id}')"
                  class="shrink-0 flex items-center justify-center active-scale"
                  style="width:44px;height:44px;margin:-4px -4px -4px -8px;background:none;border:none;cursor:pointer;-webkit-tap-highlight-color:transparent">
                  <div style="width:26px;height:26px;border-radius:50%;background:${done ? col : 'rgba(255,255,255,0.08)'};display:flex;align-items:center;justify-content:center">
                    ${done ? '<span class="ms ms-fill" style="font-size:15px;color:#fff">check</span>' : ''}
                  </div>
                </button>
                <div class="flex-1 min-w-0">
                  <p class="font-jakarta font-bold" style="font-size:12px;line-height:1.3">${item}</p>
                </div>
              </div>`;
          }

          const thumbEl = thumb
            ? `<img src="${thumb}" alt="${item}" style="width:52px;height:38px;object-fit:cover;border-radius:8px;flex-shrink:0"
                onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
               <div style="display:none;width:52px;height:38px;border-radius:8px;background:${col}15;align-items:center;justify-content:center;flex-shrink:0">
                 <span class="ms" style="font-size:16px;color:${col}50">sports_martial_arts</span></div>`
            : `<div style="width:52px;height:38px;border-radius:8px;background:${col}15;display:flex;align-items:center;justify-content:center;flex-shrink:0">
                 <span class="ms" style="font-size:16px;color:${col}50">sports_martial_arts</span></div>`;

          return `
            <div class="flex items-center gap-3 rounded-xl"
              style="background:${done ? col + '10' : '#1c1b1b'};border:1px solid ${done ? col + '30' : 'rgba(255,255,255,0.05)'}">
              <button onclick="event.stopPropagation();JHGrade.toggleDone('${key}','${safe}','${belt.id}')"
                class="shrink-0 flex items-center justify-center active-scale"
                style="width:52px;height:64px;background:none;border:none;cursor:pointer;-webkit-tap-highlight-color:transparent">
                <div style="width:26px;height:26px;border-radius:50%;background:${done ? col : 'rgba(255,255,255,0.08)'};display:flex;align-items:center;justify-content:center">
                  ${done ? '<span class="ms ms-fill" style="font-size:15px;color:#fff">check</span>' : ''}
                </div>
              </button>
              <div class="flex items-center gap-3 flex-1 min-w-0 active-scale"
                onclick="JHGrade.saveScroll();JHHub.open('${safe}','${belt.id}')"
                style="cursor:pointer;padding:12px 12px 12px 0">
                ${thumbEl}
                <div class="flex-1 min-w-0">
                  <p class="font-jakarta font-bold" style="font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${item}</p>
                  <p style="font-size:11px;color:rgba(229,226,225,0.4)">${en}</p>
                </div>
                <span class="ms" style="font-size:16px;color:rgba(229,226,225,0.2);flex-shrink:0">chevron_right</span>
              </div>
            </div>`;
        }).join('') +
        `</div></div>`;
    }

    el.innerHTML = html;
  }

  // ─────────────────────────────────────────────
  // Actions
  // ─────────────────────────────────────────────
  function backToOverview() {
    _mode = 'overview';
    _renderOverview();
  }

  function selectBelt(id) { _activeBelt = id; openChecklist(id); }

  function toggleDone(key, techId, beltId) {
    if (!JHState.isDone(key)) JHState.markDone(key);
    _renderChecklistView();
  }

  return { render, saveScroll, openChecklist, backToOverview, selectBelt, toggleDone };
})();
