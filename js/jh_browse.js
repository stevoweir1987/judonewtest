const JHBrowse = (() => {
  let _filter = 'mybelt';
  let _query  = '';

  const FILTERS = [
    { id:'mybelt',   label:'My Belt'  },
    { id:'throws',   label:'Throws'   },
    { id:'ground',   label:'Ground'   },
    { id:'combos',   label:'Combos'   },
    { id:'counters', label:'Counters' },
    { id:'all',      label:'All'      },
  ];

  const LABEL_MAP = {
    mybelt:   'My Belt',
    throws:   'Throws',
    ground:   'Groundwork',
    combos:   'Combinations & Transitions',
    counters: 'Counters',
    all:      'All Techniques',
  };

  function render() {
    _renderFilters();
    _renderGrid();
  }

  function _renderFilters() {
    const el = document.getElementById('browse-filters');
    if (!el) return;
    el.innerHTML = FILTERS.map(f => {
      const active = f.id === _filter;
      return '<button onclick="JHBrowse.setFilter(\'' + f.id + '\')"' +
        ' class="px-3 py-1.5 rounded-full font-jakarta font-bold shrink-0 active-scale"' +
        ' style="font-size:11px;white-space:nowrap;background:' + (active ? '#f2ca50' : '#1c1b1b') + ';color:' + (active ? '#1a1000' : 'rgba(229,226,225,0.5)') + ';border:1px solid ' + (active ? '#f2ca50' : 'rgba(255,255,255,0.07)') + '">' +
        f.label + '</button>';
    }).join('');
    _initDragScroll(el);
  }

  function _initDragScroll(el) {
    if (el._dragBound) return;
    el._dragBound = true;
    let isDown = false, startX = 0, scrollLeft = 0;
    el.addEventListener('mousedown', function(e) {
      isDown = true; el.style.cursor = 'grabbing';
      startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft;
    });
    el.addEventListener('mouseleave', function() { isDown = false; el.style.cursor = ''; });
    el.addEventListener('mouseup',    function() { isDown = false; el.style.cursor = ''; });
    el.addEventListener('mousemove',  function(e) {
      if (!isDown) return;
      e.preventDefault();
      el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX);
    });
  }

  function _classify(groupTitle) {
    const t = groupTitle;
    const isThrow   = /Tachi-waza|Ukemi/i.test(t) && !/Counter|Combo|Transition|Randori|Kumi/i.test(t);
    const isGround  = /Osaekomi|Shime|Kansetsu|Ne-waza|Juji-gatame/i.test(t);
    const isCombo   = /Combination|Transition|Nage-komi/i.test(t);
    const isCounter = /Counter/i.test(t);
    return { isThrow, isGround, isCombo, isCounter };
  }

  function _getTechniques() {
    if (typeof BELT_DATA === 'undefined') return [];
    const profile = JHState.getProfile();
    const results = [];

    for (const belt of BELT_DATA) {
      for (const g of belt.groups) {
        if (/Knowledge|Moral Code|Personal Choice|Kumi-kata|^Performance — Randori$/i.test(g.title)) continue;

        const { isThrow, isGround, isCombo, isCounter } = _classify(g.title);

        for (const item of g.items) {
          const en = JHState.getEnglish(item);

          if (_query.length >= 2) {
            const q = _query.toLowerCase();
            if (!item.toLowerCase().includes(q) && !en.toLowerCase().includes(q)) continue;
          } else if (_filter === 'mybelt'   && belt.id !== profile.belt)  continue;
          else if   (_filter === 'throws'   && !isThrow)                  continue;
          else if   (_filter === 'ground'   && !isGround)                 continue;
          else if   (_filter === 'combos'   && !isCombo)                  continue;
          else if   (_filter === 'counters' && !isCounter)                continue;

          results.push({ id: item, beltId: belt.id, group: g.title });
        }
      }
    }
    return results;
  }

  function _renderGrid() {
    const el = document.getElementById('browse-content');
    if (!el) return;

    const items = _getTechniques();

    if (!items.length) {
      el.innerHTML = '<div style="text-align:center;padding:40px 20px">' +
        '<span class="ms" style="font-size:40px;color:rgba(229,226,225,0.15)">search_off</span>' +
        '<p style="font-size:14px;color:rgba(229,226,225,0.35);margin-top:12px">' +
        (_query ? 'No results for "' + _query + '"' : 'No techniques in this category') + '</p></div>';
      return;
    }

    const label = _query ? (items.length + ' result' + (items.length !== 1 ? 's' : '')) : LABEL_MAP[_filter];

    el.innerHTML =
      '<p style="font-size:11px;color:rgba(229,226,225,0.35);font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px">' +
        label + ' · ' + items.length +
      '</p>' +
      '<div style="display:flex;flex-direction:column;gap:8px">' +
        items.map(t => _tile(t)).join('') +
      '</div>';
  }

  function _tile(t) {
    const thumb  = JHState.getThumbUrl(t.id);
    const col    = JHState.getBeltColor(t.beltId);
    const done   = JHState.isDone(t.beltId + '::' + t.id);
    const en     = JHState.getEnglish(t.id);
    const showEn = en.toLowerCase() !== t.id.toLowerCase();
    const safeName = t.id.replace(/'/g, "\\'");
    const { isCombo, isCounter } = _classify(t.group);

    // Left thumbnail
    const thumbEl = thumb
      ? '<img src="' + thumb + '" alt="' + t.id + '" style="width:72px;height:54px;object-fit:cover;border-radius:10px;flex-shrink:0"/>'
      : '<div style="width:72px;height:54px;border-radius:10px;background:linear-gradient(135deg,' + col + '28,' + col + '06);display:flex;align-items:center;justify-content:center;flex-shrink:0">' +
          '<span class="ms" style="font-size:24px;color:' + col + '50">' + (isCombo ? 'link' : isCounter ? 'swap_horiz' : 'sports_martial_arts') + '</span>' +
        '</div>';

    // Right badge
    const badge = done
      ? '<span class="ms ms-fill" style="font-size:22px;color:#f2ca50;flex-shrink:0">check_circle</span>'
      : '<span class="ms" style="font-size:18px;color:rgba(229,226,225,0.18);flex-shrink:0">chevron_right</span>';

    // Belt icon under name
    const beltIcon = '<img src="' + JHState.getBeltIcon(t.beltId) + '" style="height:11px;width:auto;object-fit:contain;margin-top:5px;display:block" alt=""/>';

    return '<div onclick="JHHub.open(\'' + safeName + '\',\'' + t.beltId + '\')"' +
      ' style="display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:14px;' +
      'background:' + (done ? col + '0e' : '#1c1b1b') + ';' +
      'border:1px solid ' + (done ? col + '35' : 'rgba(255,255,255,0.05)') + ';cursor:pointer"' +
      ' class="active-scale">' +
      thumbEl +
      '<div style="flex:1;min-width:0">' +
        '<p style="font-family:\'Plus Jakarta Sans\',sans-serif;font-weight:700;font-size:14px;color:#e5e2e1;' +
           'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.25">' + t.id + '</p>' +
        (showEn
          ? '<p style="font-family:Inter,sans-serif;font-size:11px;color:rgba(229,226,225,0.4);' +
               'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px">' + en + '</p>'
          : '') +
        beltIcon +
      '</div>' +
      badge +
      '</div>';
  }

  function setFilter(id) {
    _filter = id;
    _query  = '';
    const inp = document.getElementById('browse-search');
    if (inp) inp.value = '';
    _renderFilters();
    _renderGrid();
  }

  function search(q) {
    _query = q;
    if (q.length >= 2) _filter = 'all';
    _renderFilters();
    _renderGrid();
  }

  return { render, setFilter, search };
})();
