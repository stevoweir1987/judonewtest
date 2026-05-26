const JHGrade = (() => {
  let _activeBelt = null;

  function render() {
    if (typeof BELT_DATA === 'undefined') return;
    // Always open to the user's current working belt
    _activeBelt = JHState.getProfile().belt || BELT_DATA[0]?.id || 'toRed';
    _renderPicker();
    _renderContent();
  }

  function _renderPicker() {
    const el = document.getElementById('grade-belt-picker');
    if (!el || typeof BELT_DATA === 'undefined') return;

    const profileBelt = JHState.getProfile().belt || 'toRed';
    const currentIdx  = BELT_DATA.findIndex(b => b.id === profileBelt);
    const beltName    = id => id.replace(/^to/, '');

    el.innerHTML = `<div style="display:flex;gap:8px;overflow-x:scroll;-webkit-overflow-scrolling:touch;scrollbar-width:none;touch-action:pan-x;padding:2px 0 10px">
      ${BELT_DATA.map((b, idx) => {
        const col       = JHState.getBeltColor(b.id);
        const isActive  = b.id === _activeBelt;
        const isCurrent = b.id === profileBelt;
        const isPassed  = idx < currentIdx;
        const pct       = isPassed ? 100 : JHState.beltProgress(b.id);

        // Bottom indicator line instead of floating badge
        // Count non-knowledge techniques for this belt
        const techCount = b.groups
          .filter(g => !/Knowledge|Moral Code|Terminology/i.test(g.title))
          .reduce((sum, g) => sum + g.items.length, 0);

        const indicator = isCurrent
          ? `<span style="display:block;width:20px;height:2px;border-radius:2px;background:${col};margin:0 auto"></span>`
          : isPassed
          ? `<span style="font-size:8px;color:${col}99;font-weight:700">✓</span>`
          : `<span style="font-size:8px;color:rgba(229,226,225,0.2)">${techCount} tech</span>`;

        return `<button onclick="JHGrade.selectBelt('${b.id}')"
          style="display:flex;flex-direction:column;align-items:center;gap:3px;flex-shrink:0;padding:8px 12px 6px;border-radius:14px;cursor:pointer;
          border:1.5px solid ${isActive ? col : isPassed ? col + '35' : 'rgba(255,255,255,0.07)'};
          background:${isActive ? col + '20' : isPassed ? col + '0d' : '#1c1b1b'}">
          <img src="${JHState.getBeltIcon(b.id)}" style="height:18px;width:auto;object-fit:contain;opacity:${isPassed ? '0.7' : '1'}" alt=""/>
          <span style="font-size:10px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;
            color:${isActive ? col : isPassed ? col + 'aa' : 'rgba(229,226,225,0.4)'};text-transform:capitalize">${beltName(b.id)}</span>
          ${indicator}
        </button>`;
      }).join('')}
    </div>`;
  }

  function _renderContent() {
    const el = document.getElementById('grade-content');
    if (!el || typeof BELT_DATA === 'undefined') return;
    const belt = BELT_DATA.find(b => b.id === _activeBelt);
    if (!belt) return;

    const col  = JHState.getBeltColor(belt.id);
    const pct  = JHState.beltProgress(belt.id);

    // Separate technique items from knowledge items for stats
    let techTotal = 0, techDone = 0, knowTotal = 0, knowDone = 0;
    belt.groups.forEach(g => {
      const isKnow = /Knowledge|Moral Code|Terminology/i.test(g.title);
      g.items.forEach(item => {
        const done = JHState.isDone(belt.id + '::' + item);
        if (isKnow) { knowTotal++; if (done) knowDone++; }
        else        { techTotal++;  if (done) techDone++;  }
      });
    });

    // ── Readiness summary card ──
    const readyPct  = techTotal ? Math.round(techDone / techTotal * 100) : 0;
    const isReady   = readyPct >= 80;
    const readyMsg  = readyPct >= 100 ? 'All techniques complete — grading ready! 🥋'
                    : readyPct >= 80  ? `${100 - readyPct}% left — almost there!`
                    : readyPct >= 50  ? `${techTotal - techDone} techniques still to master`
                    :                   `Keep going — ${techDone} of ${techTotal} techniques done`;

    let html = `
      <!-- Readiness summary -->
      <div class="glass rounded-2xl p-5 mb-2" style="border:1px solid ${col}30">
        <div class="flex items-center justify-between mb-3">
          <div>
            <p class="font-jakarta font-extrabold" style="font-size:11px;color:${col};letter-spacing:0.12em;text-transform:uppercase">${belt.label || belt.id.replace(/^to/,'') + ' Belt'}</p>
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
        <!-- Stats row -->
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

    // ── Groups ──
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

          if (isKnowledge) {
            return `
              <div class="flex items-center gap-3 p-3 rounded-xl"
                style="background:${done ? col + '10' : '#1c1b1b'};border:1px solid ${done ? col + '30' : 'rgba(255,255,255,0.05)'}">
                <button onclick="JHGrade.toggleDone('${key}','${item}','${belt.id}')"
                  class="w-6 h-6 rounded-full shrink-0 flex items-center justify-center active-scale"
                  style="background:${done ? col : 'rgba(255,255,255,0.08)'}">
                  ${done ? '<span class="ms ms-fill" style="font-size:14px;color:#fff">check</span>' : ''}
                </button>
                <div class="flex-1 min-w-0">
                  <p class="font-jakarta font-bold" style="font-size:12px;line-height:1.3">${item}</p>
                </div>
              </div>`;
          }

          // Technique row — with thumbnail
          const thumbEl = thumb
            ? `<img src="${thumb}" alt="${item}"
                style="width:52px;height:38px;object-fit:cover;border-radius:8px;flex-shrink:0"
                onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
               <div style="display:none;width:52px;height:38px;border-radius:8px;background:${col}15;align-items:center;justify-content:center;flex-shrink:0">
                 <span class="ms" style="font-size:16px;color:${col}50">sports_martial_arts</span>
               </div>`
            : `<div style="width:52px;height:38px;border-radius:8px;background:${col}15;display:flex;align-items:center;justify-content:center;flex-shrink:0">
                 <span class="ms" style="font-size:16px;color:${col}50">sports_martial_arts</span>
               </div>`;

          return `
            <div class="flex items-center gap-3 p-3 rounded-xl active-scale"
              onclick="JHHub.open('${item}','${belt.id}')"
              style="background:${done ? col + '10' : '#1c1b1b'};border:1px solid ${done ? col + '30' : 'rgba(255,255,255,0.05)'};cursor:pointer">
              <button onclick="event.stopPropagation();JHGrade.toggleDone('${key}','${item}','${belt.id}')"
                class="w-6 h-6 rounded-full shrink-0 flex items-center justify-center"
                style="background:${done ? col : 'rgba(255,255,255,0.08)'}">
                ${done ? '<span class="ms ms-fill" style="font-size:14px;color:#fff">check</span>' : ''}
              </button>
              ${thumbEl}
              <div class="flex-1 min-w-0">
                <p class="font-jakarta font-bold" style="font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${item}</p>
                <p style="font-size:11px;color:rgba(229,226,225,0.4)">${en}</p>
              </div>
              <span class="ms" style="font-size:16px;color:rgba(229,226,225,0.2)">chevron_right</span>
            </div>`;
        }).join('') +
        `</div>
        </div>`;
    }

    el.innerHTML = html;
  }

  function selectBelt(id) { _activeBelt = id; _renderPicker(); _renderContent(); }

  function toggleDone(key, techId, beltId) {
    if (!JHState.isDone(key)) JHState.markDone(key);
    _renderContent();
    _renderPicker();
  }

  return { render, selectBelt, toggleDone };
})();
