const TECHNIQUES = [

  // ── TE-WAZA ─────────────────────────────────────────────────────────────────
  {name:"Ippon-seoi-nage",       en:"One-arm shoulder throw",            cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=OmKfUXAAdZ0"},
  {name:"Morote-seoi-nage",      en:"Two-arm shoulder throw",            cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=UjtL1h9htb8"},
  {name:"Eri-seoi-nage",         en:"Collar shoulder throw",             cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=vOpRNSg1O14"},
  {name:"Seoi-otoshi",           en:"Shoulder drop",                     cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=vu1TMVNnq34"},
  {name:"Tai-otoshi",            en:"Body drop",                         cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=DUiZ8JZkGx8"},
  {name:"Kata-guruma",           en:"Shoulder wheel",                    cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=cnHRhSy8yi4"},
  {name:"Te-guruma",             en:"Hand wheel",                        cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=P-4HUgB_rK4"},
  {name:"Sumi-otoshi",           en:"Corner drop",                       cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=lLU9wv52ni0"},
  {name:"Uki-otoshi",            en:"Floating drop",                     cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=6H5tmncOY4Q"},
  {name:"Yama-arashi",           en:"Mountain storm",                    cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=MGlyKmSuzdc"},
  {name:"Kibisu-gaeshi",         en:"Heel trip reversal",                cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=tJylJYfBliA"},
  {name:"Kuchiki-taoshi",        en:"Single leg takedown",               cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=ZNL47q1aJNY"},
  {name:"Morote-gari",           en:"Two-leg reap",                      cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=BHLQS4K85bs"},
  {name:"Sukui-nage",            en:"Scooping throw",                    cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=vU6aJ2kFxoI"},
  {name:"Obi-otoshi",            en:"Belt drop",                         cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=ff8U2TVZIYI"},
  {name:"Tsubame-gaeshi",        en:"Swallow counter",                   cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=GwweWqqFB5g"},
  {name:"Uchi-makikomi",         en:"Inner wraparound",                  cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=5BowcjduxVc"},
  {name:"Daki-age",              en:"High lift",                         cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=5lFXv3crN30"},
  {name:"Seoi-nage",             en:"Shoulder throw (overview)",         cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=eWEW9SfI5xg"},
  {name:"Ippon-seoi-otoshi",     en:"One-arm shoulder drop",             cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=VJ5WmoX0JPU"},
  {name:"Morote-seoi-otoshi",    en:"Two-arm shoulder drop",             cat:"Nage-waza",sub:"Te-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=9XbIoHXggT4"},

  // ── KOSHI-WAZA ──────────────────────────────────────────────────────────────
  {name:"O-goshi",               en:"Major hip throw",                   cat:"Nage-waza",sub:"Koshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=yhu1mfy2vJ4"},
  {name:"Uki-goshi",             en:"Floating hip",                      cat:"Nage-waza",sub:"Koshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=bPKwtB4lyOQ"},
  {name:"Tsuri-goshi",           en:"Lifting hip throw",                 cat:"Nage-waza",sub:"Koshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=51Htlp7xEvE"},
  {name:"Koshi-guruma",          en:"Hip wheel",                         cat:"Nage-waza",sub:"Koshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=SU7Id6uVJ44"},
  {name:"Tsurikomi-goshi",       en:"Lifting pulling hip throw",         cat:"Nage-waza",sub:"Koshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=McfzA0yRVt4"},
  {name:"Harai-goshi",           en:"Sweeping hip throw",                cat:"Nage-waza",sub:"Koshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=qTo8HlAAkOo"},
  {name:"Hane-goshi",            en:"Spring hip throw",                  cat:"Nage-waza",sub:"Koshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=M9_7De6A1kk"},
  {name:"Sode-tsurikomi-goshi",  en:"Sleeve lifting pulling hip throw",  cat:"Nage-waza",sub:"Koshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=QsmAxpmYLOI"},
  {name:"Utsuri-goshi",          en:"Hip shift",                         cat:"Nage-waza",sub:"Koshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=4pQd_bEnlf0"},
  {name:"Ushiro-goshi",          en:"Rear hip throw",                    cat:"Nage-waza",sub:"Koshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=ORIYstuxYT8"},
  {name:"O-tsuri-goshi",         en:"Major lifting hip throw",           cat:"Nage-waza",sub:"Koshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=oB3hwIbdzqM"},
  {name:"O-guruma",              en:"Large wheel",                       cat:"Nage-waza",sub:"Koshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=SnZciTAY9vc"},

  // ── ASHI-WAZA ───────────────────────────────────────────────────────────────
  {name:"Deashi-harai",          en:"Advancing foot sweep",              cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=4BUUvqxi_Kk"},
  {name:"Okuri-ashi-harai",      en:"Sliding foot sweep",                cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=nw1ZdRjrdRI"},
  {name:"Harai-tsurikomi-ashi",  en:"Lifting pulling foot sweep",        cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=gGPXvWL8VbE"},
  {name:"Sasae-tsurikomi-ashi",  en:"Lifting pulling ankle block",       cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=699i--pvYmE"},
  {name:"Hiza-guruma",           en:"Knee wheel",                        cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=JPJx9-oAVns"},
  {name:"Uchi-mata",             en:"Inner thigh throw",                 cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=iUpSu5J-bgw"},
  {name:"Ouchi-gari",            en:"Major inner reap",                  cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=0itJFhV9pDQ"},
  {name:"Ko-uchi-gari",          en:"Minor inner reap",                  cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=3Jb3tZvr9Ng"},
  {name:"Ko-uchi-gake",          en:"Minor inner hook",                  cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=v-bPmFsDU7A"},
  {name:"O-soto-gari",           en:"Major outer reap",                  cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=c-A_nP7mKAc"},
  {name:"Ko-soto-gari",          en:"Minor outer reap",                  cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=jeQ541ScLB4"},
  {name:"Ko-soto-gake",          en:"Minor outer hook",                  cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=8b6kY4s4zH4"},
  {name:"O-soto-otoshi",         en:"Major outer drop",                  cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=2DsVvDw7b8g"},
  {name:"O-soto-guruma",         en:"Major outer wheel",                 cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=92KbCm6pQeI"},
  {name:"O-uchi-barai",          en:"Major inner sweep",                 cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=g6N0ua1tV74"},
  {name:"Ashi-guruma",           en:"Leg wheel",                         cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=ROeayhvom9U"},
  {name:"O-uchi-gaeshi",         en:"Major inner reap counter",          cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=dCyZTXyjIXE"},
  {name:"Ko-uchi-gaeshi",        en:"Minor inner reap counter",          cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=_MWAdYi_LC4"},
  {name:"Hane-goshi-gaeshi",     en:"Spring hip throw counter",          cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=9bZAZSBtnGs"},
  {name:"Tai-otoshi-gaeshi",     en:"Body drop counter",                 cat:"Nage-waza",sub:"Ashi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=imECTzUV-vY"},

  // ── MA-SUTEMI-WAZA ──────────────────────────────────────────────────────────
  {name:"Tomoe-nage",            en:"Circle throw",                      cat:"Nage-waza",sub:"Ma-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=TON-fQk3aTc"},
  {name:"Hikikomi-gaeshi",       en:"Pulling sacrifice throw",           cat:"Nage-waza",sub:"Ma-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=92zUYWBp5N8"},
  {name:"Sumi-gaeshi",           en:"Corner reversal",                   cat:"Nage-waza",sub:"Ma-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=5VhduA5xkbA"},
  {name:"Tawara-gaeshi",         en:"Rice bag reversal",                 cat:"Nage-waza",sub:"Ma-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=TmTWgrmViZc"},
  {name:"Ura-nage",              en:"Rear throw",                        cat:"Nage-waza",sub:"Ma-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=Fgi9b8DJ5sQ"},
  {name:"Ko-uchi-makikomi",      en:"Small inner wrap-around throw",     cat:"Nage-waza",sub:"Ma-sutemi-waza",ko:"No", url:"https://www.youtube.com/watch?v=_1eygIXLD_w"},

  // ── YOKO-SUTEMI-WAZA ────────────────────────────────────────────────────────
  {name:"Yoko-otoshi",           en:"Side drop",                         cat:"Nage-waza",sub:"Yoko-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=MnNG67pF_a0"},
  {name:"Tani-otoshi",           en:"Valley drop",                       cat:"Nage-waza",sub:"Yoko-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=3b9Me3Fohpk"},
  {name:"Yoko-gake",             en:"Side hook",                         cat:"Nage-waza",sub:"Yoko-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=tP1Sj1uDfSo"},
  {name:"Yoko-guruma",           en:"Side wheel",                        cat:"Nage-waza",sub:"Yoko-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=MehP6I5cY2c"},
  {name:"Yoko-wakare",           en:"Side separation",                   cat:"Nage-waza",sub:"Yoko-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=bp1tscHlePI"},
  {name:"Uki-waza",              en:"Floating technique",                cat:"Nage-waza",sub:"Yoko-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=weVOpJ63gII"},
  {name:"Yoko-tomoe-nage",       en:"Side circle throw",                 cat:"Nage-waza",sub:"Yoko-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=9-byceOifXo"},
  {name:"Soto-makikomi",         en:"Outer wraparound",                  cat:"Nage-waza",sub:"Yoko-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=bWG9O1BVKtQ"},
  {name:"Kawazu-gake",           en:"One-leg entanglement",              cat:"Nage-waza",sub:"Yoko-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=-SQCIZFscNs"},
  {name:"Kani-basami",           en:"Crab scissors",                     cat:"Nage-waza",sub:"Yoko-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=OR-HGHnarYc"},
  {name:"Obi-tori-gaeshi",       en:"Belt grab reversal",                cat:"Nage-waza",sub:"Yoko-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=bpc82SrunUU"},
  {name:"Daki-wakare",           en:"Hug split (side sacrifice)",        cat:"Nage-waza",sub:"Yoko-sutemi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=Hr0cOMGBDYo"},
  {name:"Yoko-sumi-gaeshi",      en:"Side corner reversal",              cat:"Nage-waza",sub:"Yoko-sutemi-waza",ko:"No", url:"https://www.youtube.com/watch?v=TnvdcBbB0sA"},

  // ── MAKIKOMI-WAZA ───────────────────────────────────────────────────────────
  {name:"Harai-makikomi",        en:"Sweeping wraparound throw",         cat:"Nage-waza",sub:"Makikomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=VBaHzKaCXss"},
  {name:"Hane-makikomi",         en:"Spring wraparound throw",           cat:"Nage-waza",sub:"Makikomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=6CRBGLGz9j8"},
  {name:"Uchi-mata-makikomi",    en:"Inner thigh wraparound throw",      cat:"Nage-waza",sub:"Makikomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=jZXENTLpJCI"},
  {name:"O-soto-makikomi",       en:"Major outer reap wraparound",       cat:"Nage-waza",sub:"Makikomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=DGDv2oMwmas"},

  // ── KAESHI-WAZA (COUNTERS) ───────────────────────────────────────────────────
  {name:"O-soto-gaeshi",         en:"Major outer reap counter",          cat:"Nage-waza",sub:"Kaeshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=8ZjM3X_EANo"},
  {name:"Ko-soto-gaeshi",        en:"Minor outer reap counter",          cat:"Nage-waza",sub:"Kaeshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=8ZjM3X_EANo"},
  {name:"Harai-goshi-gaeshi",    en:"Sweeping hip throw counter",        cat:"Nage-waza",sub:"Kaeshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=4U3It-7PPsc"},
  {name:"Uchi-mata-gaeshi",      en:"Inner thigh throw counter",         cat:"Nage-waza",sub:"Kaeshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=Sy6sLWxkWYw"},
  {name:"Uchi-mata-sukashi",     en:"Inner thigh void (slip counter)",   cat:"Nage-waza",sub:"Kaeshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=V-RS3uhtVWM"},
  {name:"Uki-goshi-gaeshi",      en:"Floating hip counter",              cat:"Nage-waza",sub:"Kaeshi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=H_LVaa0t0DY"},

  // ── OSAEKOMI-WAZA (HOLDS) ───────────────────────────────────────────────────
  {name:"Kesa-gatame",           en:"Scarf hold",                        cat:"Katame-waza",sub:"Osaekomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=NDaQuJOFBYk"},
  {name:"Hon-kesa-gatame",       en:"Main scarf hold",                   cat:"Katame-waza",sub:"Osaekomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=Hqt_qagQWQw"},
  {name:"Kuzure-kesa-gatame",    en:"Broken scarf hold",                 cat:"Katame-waza",sub:"Osaekomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=Q2fb9jaoUFQ"},
  {name:"Ushiro-kesa-gatame",    en:"Reverse scarf hold",                cat:"Katame-waza",sub:"Osaekomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=SBapox2M2dE"},
  {name:"Kata-gatame",           en:"Shoulder hold",                     cat:"Katame-waza",sub:"Osaekomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=zQR3IOXxO_Q"},
  {name:"Mune-gatame",           en:"Chest hold",                        cat:"Katame-waza",sub:"Osaekomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=lIt5vywPBF0"},
  {name:"Kami-shiho-gatame",     en:"Upper four-corner hold",            cat:"Katame-waza",sub:"Osaekomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=HFuMjOv0WN8"},
  {name:"Kuzure-kami-shiho-gatame",en:"Broken upper four-corner hold",  cat:"Katame-waza",sub:"Osaekomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=YUrogQWdwiY"},
  {name:"Yoko-shiho-gatame",     en:"Side four-corner hold",             cat:"Katame-waza",sub:"Osaekomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=TT7XJVSEQxA"},
  {name:"Kuzure-yoko-shiho-gatame",en:"Broken side four-corner hold",   cat:"Katame-waza",sub:"Osaekomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=54fQM7dYz0M"},
  {name:"Tate-shiho-gatame",     en:"Vertical four-corner hold",         cat:"Katame-waza",sub:"Osaekomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=XjWzNxlKH1M"},
  {name:"Sankaku-gatame",        en:"Triangular hold",                   cat:"Katame-waza",sub:"Osaekomi-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=Sh01Hgobdgw"},

  // ── SHIME-WAZA (STRANGLES) ───────────────────────────────────────────────────
  {name:"Nami-juji-jime",        en:"Normal cross choke",                cat:"Katame-waza",sub:"Shime-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=k2cHry9HByQ"},
  {name:"Gyaku-juji-jime",       en:"Reverse cross choke",               cat:"Katame-waza",sub:"Shime-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=t3tQriIPdlI"},
  {name:"Kata-juji-jime",        en:"Half cross choke",                  cat:"Katame-waza",sub:"Shime-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=3VZVUAmiMD8"},
  {name:"Hadaka-jime",           en:"Naked choke (rear naked choke)",    cat:"Katame-waza",sub:"Shime-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=9f0n8jez7iA"},
  {name:"Okuri-eri-jime",        en:"Sliding collar choke",              cat:"Katame-waza",sub:"Shime-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=EiqyoVcIAi8"},
  {name:"Kata-ha-jime",          en:"Single wing choke",                 cat:"Katame-waza",sub:"Shime-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=yaTGgRjnwB8"},
  {name:"Sankaku-jime",          en:"Triangle choke",                    cat:"Katame-waza",sub:"Shime-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=lq1CUBRAm7s"},
  {name:"Sode-guruma-jime",      en:"Sleeve wheel choke",                cat:"Katame-waza",sub:"Shime-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=E3nvQzClcAU"},
  {name:"Tsukkomi-jime",         en:"Thrust choke",                      cat:"Katame-waza",sub:"Shime-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=dKKpnD3eLcY"},
  {name:"Ryote-jime",            en:"Two-hand choke",                    cat:"Katame-waza",sub:"Shime-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=-RHC4V7TQiY"},
  {name:"Morote-jime",           en:"Two-handed collar choke",           cat:"Katame-waza",sub:"Shime-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=VbW71vPdZmg"},
  {name:"Ashi-jime",             en:"Leg choke",                         cat:"Katame-waza",sub:"Shime-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=fuDCkSjCON8"},

  // ── KANSETSU-WAZA (ARM LOCKS) ────────────────────────────────────────────────
  {name:"Juji-gatame",                   en:"Cross arm lock",            cat:"Katame-waza",sub:"Kansetsu-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=jOp5XyPd59M"},
  {name:"Ude-garami",                    en:"Entangled arm lock",        cat:"Katame-waza",sub:"Kansetsu-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=AIlTvZb4RlE"},
  {name:"Ude-hishigi-ude-gatame",        en:"Straight arm lock",         cat:"Katame-waza",sub:"Kansetsu-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=SBf0aTma1VI"},
  {name:"Ude-hishigi-hiza-gatame",       en:"Knee arm lock",             cat:"Katame-waza",sub:"Kansetsu-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=H2HtAJdiJcE"},
  {name:"Ude-hishigi-waki-gatame",       en:"Armpit arm lock",           cat:"Katame-waza",sub:"Kansetsu-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=8F5p1zuJRG0"},
  {name:"Ude-hishigi-hara-gatame",       en:"Stomach arm lock",          cat:"Katame-waza",sub:"Kansetsu-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=ZzEycg8R_9M"},
  {name:"Ude-hishigi-ashi-gatame",       en:"Leg arm lock",              cat:"Katame-waza",sub:"Kansetsu-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=ClY7g_pX-4s"},
  {name:"Ude-hishigi-te-gatame",         en:"Hand arm lock",             cat:"Katame-waza",sub:"Kansetsu-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=6DnvhY0tQVM"},
  {name:"Ude-hishigi-sankaku-gatame",    en:"Triangle arm lock",         cat:"Katame-waza",sub:"Kansetsu-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=WefAmW4azhk"},
  {name:"Ashi-garami",                   en:"Leg entanglement lock",     cat:"Katame-waza",sub:"Kansetsu-waza",ko:"Historically",url:"https://www.youtube.com/watch?v=BWWb0GoAtZw"},
  {name:"Waki-gatame",                   en:"Armpit arm lock (standing)", cat:"Katame-waza",sub:"Kansetsu-waza",ko:"Yes",url:"https://www.youtube.com/watch?v=OtqfF2D8kIc"},
  {name:"Kansetsu-waza overview",        en:"Complete arm lock guide",    cat:"Katame-waza",sub:"Kansetsu-waza",ko:"",  url:"https://www.youtube.com/watch?v=QtVipMcTsdw"},

  // ── COMBINATIONS (THROW → HOLD) ──────────────────────────────────────────────
  {name:"Tai-otoshi → Yoko-shiho-gatame",       en:"Body drop into side hold",          cat:"Combination",sub:"",ko:"",url:"https://www.youtube.com/watch?v=caXBWqLeW6I"},
  {name:"Ippon-seoi-nage → Kami-shiho-gatame",  en:"Shoulder throw into upper hold",    cat:"Combination",sub:"",ko:"",url:"https://www.youtube.com/watch?v=jBl0Q-Egbdg"},
  {name:"Ouchi-gari → Tate-shiho-gatame",       en:"Inner reap into vertical hold",     cat:"Combination",sub:"",ko:"",url:"https://www.youtube.com/watch?v=OH8PgkWGxQU"},

  // ── NE-WAZA — ESCAPES ─────────────────────────────────────────────────────────
  {name:"Escape from Kami-shiho-gatame (action & reaction)",   en:"Ne-waza escape",cat:"Ne-waza",sub:"Escape",ko:"",url:"https://www.youtube.com/watch?v=Hl0C4RRavHo"},
  {name:"Escape from Tate-shiho-gatame (clamp & roll)",        en:"Ne-waza escape",cat:"Ne-waza",sub:"Escape",ko:"",url:"https://www.youtube.com/watch?v=PV_anL347rw"},
  {name:"Escape from Yoko-shiho-gatame (trap, bridge & roll)", en:"Ne-waza escape",cat:"Ne-waza",sub:"Escape",ko:"",url:"https://www.youtube.com/watch?v=yK_GSamSPko"},

  // ── NE-WAZA — TURNOVERS ───────────────────────────────────────────────────────
  {name:"Turnover into Kesa-gatame (uke all fours)",        en:"Ne-waza turnover",cat:"Ne-waza",sub:"Turnover",ko:"",url:"https://www.youtube.com/watch?v=r-ODhj19vL0"},
  {name:"Turnover into Yoko-shiho-gatame (uke face-down)",  en:"Ne-waza turnover",cat:"Ne-waza",sub:"Turnover",ko:"",url:"https://www.youtube.com/watch?v=19TTB0bdL7w"},

  // ── KUMI-KATA (GRIPPING) ──────────────────────────────────────────────────────
  {name:"Standard grips — right and left",                  en:"Kumi-kata: right lapel, left sleeve standard",     cat:"Ne-waza",sub:"Gripping",ko:"",url:"https://www.youtube.com/watch?v=T6c_FpfVZy4"},
  {name:"Right vs left, double lapel, high collar grips",   en:"Kumi-kata: grip variations in contest",            cat:"Ne-waza",sub:"Gripping",ko:"",url:"https://www.youtube.com/watch?v=97djf2GY6I0"},

  // ── RANDORI ───────────────────────────────────────────────────────────────────
  {name:"Nage-komi in light randori",     en:"Repetitive throwing with cooperative partner",              cat:"Randori",sub:"Drills",ko:"",url:"https://www.youtube.com/watch?v=QUKkd08DT9M"},
  {name:"Randori — how to improve",       en:"Key principles for getting better in free practice",        cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=wsDFpn_Yol0"},
  {name:"Randori highlights",             en:"Competition-level randori examples to study",               cat:"Randori",sub:"Drills",ko:"",url:"https://www.youtube.com/watch?v=6t3fTUPSxvQ"},
  {name:"Randori mistakes to avoid",      en:"Common errors in free practice — what not to do",          cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=68a6896ZhOo"},
  {name:"Relaxing in randori",            en:"Stay loose — tension kills technique and speed",            cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/shorts/gIqNLmF09Mo"},
  {name:"Randori tips — short",           en:"Quick tactical tips for free practice",                    cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/shorts/zUidSlnJktk"},
  {name:"Footsweeps in randori",          en:"Using ashi-waza effectively in free practice",             cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=73ym6D0MdpE"},
  {name:"Randori tips — tactical",        en:"Tactical awareness and strategy in free practice",         cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=ndaPVAgFo-0"},
  {name:"Randori demonstration",          en:"Full randori demo — watch the timing and kuzushi",         cat:"Randori",sub:"Drills",ko:"",url:"https://www.youtube.com/watch?v=JCFO2BeL1oU"},
  {name:"Attack-first principle",              en:"Always be the initiator — passive judo earns shido",         cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=RxWxPp-wTfw"},
  {name:"Kuzushi before everything",           en:"Break balance first, every time — strength follows timing",   cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=luK9Eklbn78"},
  {name:"5 basic combination setups",          en:"Core combination patterns every judoka should drill",         cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=VFOUp-nQpqM"},
  {name:"Tai-otoshi combination setup",        en:"Setting up tai-otoshi with feints and foot movement",         cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=u34wRSY-suM"},
  {name:"O-soto-gari combination setup",       en:"Building combos around the major outer reap",                cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=BIrhmaUkB_8"},
  {name:"Seoi-nage combination setup",         en:"Entering seoi-nage from combination attacks",                 cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=uPXB-60B7f0"},
  {name:"O-goshi competition variations",      en:"How top players adapt o-goshi in contest",                   cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=oXTwNVxaka8"},
  {name:"Seoi-nage competition variations",    en:"Competition entries and grips for seoi-nage",                cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=qo-3PNAIaPQ"},
  {name:"O-soto-gari competition variations",  en:"How elite judoka score with o-soto-gari",                   cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=wm1n4c9d1pE"},
  {name:"O-soto-gari combos",                  en:"Combination sequences built around o-soto-gari",             cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=OHMgiC3taZA"},
  {name:"Setting up throws in competition",    en:"Tactical tips for landing throws on resisting opponents",    cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=dpPfPnjJUQ4"},
  {name:"Epic judo combinations",              en:"High-level combination sequences to study and copy",         cat:"Randori",sub:"Drills",ko:"",url:"https://www.youtube.com/watch?v=gud7OWhiF5k"},
  {name:"Technical gripping",                  en:"How to grip efficiently and control the contest from kumi-kata",cat:"Randori",sub:"Tips",ko:"",url:"https://www.youtube.com/watch?v=6xBOG8Y-V04"},
  {name:"Moving in randori",                   en:"Footwork patterns — how to move to create throwing opportunities",cat:"Randori",sub:"Tips",ko:"",url:"https://www.youtube.com/watch?v=j-WQ4c7EQW0"},
  {name:"Orange belt grading demo",            en:"Full orange belt grading — techniques and performance standard",cat:"Randori",sub:"Grading",ko:"",url:"https://www.youtube.com/watch?v=1Bi6nDBdWr0"},
  {name:"5 basic throws everyone should know", en:"The five fundamental throws for any beginner to master",     cat:"Randori",sub:"Tips",  ko:"",url:"https://www.youtube.com/watch?v=KFhiz7dcEkM"},
  {name:"Real ippons in competition",          en:"Full ippon scores — study the timing, kuzushi and commitment",cat:"Randori",sub:"Drills",ko:"",url:"https://www.youtube.com/watch?v=UfbCwy7-CgQ"},

  // ── UKEMI (BREAKFALLS) ───────────────────────────────────────────────────────
  {name:"Mae-ukemi",             en:"Front breakfall",                   cat:"Ukemi",sub:"Ukemi",ko:"Yes",url:"https://www.youtube.com/watch?v=veM5RFdjo0U"},
  {name:"Ushiro-ukemi",         en:"Back breakfall",                    cat:"Ukemi",sub:"Ukemi",ko:"Yes",url:"https://www.youtube.com/watch?v=_g7rvsxTkz8"},
  {name:"Yoko-ukemi",           en:"Side breakfall",                    cat:"Ukemi",sub:"Ukemi",ko:"Yes",url:"https://www.youtube.com/watch?v=JCwK1Ia4jsc"},
  {name:"Mae-mawari-ukemi",     en:"Forward rolling breakfall",         cat:"Ukemi",sub:"Ukemi",ko:"Yes",url:"https://www.youtube.com/watch?v=kbiLot6laks"},
  {name:"Ukemi overview",       en:"All breakfalls — beginner guide",   cat:"Ukemi",sub:"Ukemi",ko:"",  url:"https://www.youtube.com/watch?v=LhU8Dpu9aTE"},

  // ── EXERCISE VIDEOS ───────────────────────────────────────────────────────────
  {name:"Speed & agility for judo",       en:"Speed-focused training session",                           cat:"Exercise",sub:"Speed",   ko:"",url:"https://www.youtube.com/shorts/gIqNLmF09Mo"},
  {name:"Weight training for judo",       en:"Judo-specific weight exercises — short",                   cat:"Exercise",sub:"Weights", ko:"",url:"https://www.youtube.com/shorts/8AJc_8y_r8Y"},
  {name:"Judo strength program",          en:"Full weight training program for judo athletes",           cat:"Exercise",sub:"Weights", ko:"",url:"https://www.youtube.com/watch?v=uBy2yLDhSKY"},
  {name:"Uchi-komi partner drilling",     en:"Partner uchikomi session — entries and timing",            cat:"Exercise",sub:"Uchi-komi",ko:"",url:"https://www.youtube.com/watch?v=oBVMQRLv4dw"},
  {name:"Uchi-mata drilling",             en:"Uchi-mata specific drill session — entries and variations", cat:"Exercise",sub:"Uchi-komi",ko:"",url:"https://www.youtube.com/watch?v=eVcitLTY604"},
  {name:"HIIT for judo",                  en:"High intensity interval training — judo-focused",          cat:"Exercise",sub:"HIT",     ko:"",url:"https://www.youtube.com/watch?v=sJMy8XjVl6c"},
  {name:"Solo judo training",             en:"Judo movements you can train alone at home",               cat:"Exercise",sub:"Solo",    ko:"",url:"https://www.youtube.com/watch?v=eyeRo00P2pI"},
  {name:"Solo judo throw practice",       en:"Solo throw entry and movement drills",                     cat:"Exercise",sub:"Solo",    ko:"",url:"https://www.youtube.com/watch?v=ArleC9QIcOc"},
  {name:"Judo footwork drills",           en:"Foot movement patterns and agility for judo",              cat:"Exercise",sub:"Solo",    ko:"",url:"https://www.youtube.com/watch?v=87Ox-dF9X4Y"},
];

const BELT_DATA = [
  {
    id:"toRed",label:"Novice → 6th Kyu",from:"White",to:"Red",
    fromColor:"belt-color-white",toColor:"belt-color-red",duration:"Typically 2–4 months",
    groups:[
      {title:"Fundamental — Ukemi",items:["Ushiro Ukemi","Yoko Ukemi","Mae Mawari Ukemi (3 Versions)"]},
      {title:"Fundamental — Tachi-waza",items:["Osoto-otoshi","Deashi-barai","Uki-goshi"]},
      {title:"Fundamental — Osaekomi-waza",items:["Kesa-gatame","Mune-gatame","Kuzure-kesa-gatame"]},
      {title:"Performance — Transitions into Ne-waza",items:["Osoto-otoshi into Kesa-gatame","Deashi-barai into Mune-gatame","Uki-goshi into Kuzure-kesa-gatame"]},
      {title:"Performance — Ne-waza",items:["Escape from Kesa-gatame by trapping Uke's leg","Escape from Mune-gatame using a bridge and roll action","Escape from Kuzure-kesa-gatame using sit up and push"]},
      {title:"Personal Choice",items:["One additional tachi-waza of choice","One additional ne-waza of choice"]},
      {title:"Knowledge — Terminology",items:["Dojo","Judogi","Zori","Hajime","Mate","Osae-komi","Rei","Randori","Toketa","Tori","Uke"]},
      {title:"Knowledge — Judo Basics",items:["Correct wearing of judogi and tying of belt","Correct procedure for standing and kneeling bows","In which country was Judo devised?","Who was the founder of modern Judo?","What is the Judo Moral Code?"]}
    ]
  },
  {
    id:"toYellow",label:"6th Kyu → 5th Kyu",from:"Red",to:"Yellow",
    fromColor:"belt-color-red",toColor:"belt-color-yellow",duration:"Typically 3–6 months",
    groups:[
      {title:"Fundamental — Ukemi",items:["Mae-ukemi"]},
      {title:"Fundamental — Tachi-waza",items:["Tai-otoshi","Ippon-seoi-nage","Ouchi-gari"]},
      {title:"Fundamental — Osaekomi-waza",items:["Yoko-shiho-gatame","Tate-shiho-gatame","Kami-shiho-gatame"]},
      {title:"Performance — Transitions",items:["Tai-otoshi → Yoko-shiho-gatame","Ippon-seoi-nage → Kami-shiho-gatame","Ouchi-gari → Tate-shiho-gatame"]},
      {title:"Performance — Ne-waza",items:["Escape from Kami-shiho-gatame (action & reaction)","Escape from Tate-shiho-gatame (clamp & roll)","Escape from Yoko-shiho-gatame (trap, bridge & roll)","Turnover into Kesa-gatame (uke all fours)","Turnover into Mune-gatame (uke all fours)","Turnover into Yoko-shiho-gatame (uke face-down)"]},
      {title:"Performance — Kumi-kata",items:["Standard grips — right and left","Right vs left, double lapel, high collar grips"]},
      {title:"Performance — Nage-komi & Randori",items:["Nage-komi in light randori"]},
      {title:"Personal Choice",items:["One additional tachi-waza of choice","One additional ne-waza of choice"]},
      {title:"Knowledge — Terminology",items:["Ippon-seoi-nage — One Arm Shoulder Throw","Kami-shiho-gatame — Upper Four Quarters Hold","Kumi-kata — Engagement Position","Mae Ukemi — Front Breakfall","Mune-gatame — Chest Hold","Nage-komi — Repetitive Throwing","Ouchi-gari — Major Inner Reaping Throw","Randori — Free Practice","Tai-otoshi — Body Drop Throw","Tate-shiho-gatame — Lengthwise Four Quarters Hold","Yoko-shiho-gatame — Side Four Quarters Hold"]},
      {title:"Knowledge — Contest Rules",items:["Give two examples of actions against the contest rules"]},
      {title:"Moral Code",items:["Courtesy","Courage","Honesty","Honour","Modesty","Respect","Self-control","Friendship"]}
    ]
  },
  {
    id:"toOrange",label:"5th Kyu → 4th Kyu",from:"Yellow",to:"Orange",
    fromColor:"belt-color-yellow",toColor:"belt-color-orange",duration:"Typically 6–12 months",
    groups:[
      {title:"Fundamental — Tachi-waza",items:["Tsurikomi-goshi","O-goshi","Seoi-otoshi","Morote-seoi-nage","Ko-uchi-gari","Ko-soto-gake","Ko-soto-gari","O-soto-gari"]},
      {title:"Performance — Combinations",items:["Ouchi-gari → Ko-uchi-gari","Ko-uchi-gari → O-soto-gari or O-soto-gake","Ko-uchi-gari → Morote-seoi-nage","Ippon-seoi-nage → Ko-uchi-gari","Any technique combined with Seoi-otoshi or Ko-uchi-gari"]},
      {title:"Performance — Counters",items:["Ouchi-gari countered by Tsurikomi-goshi","Tai-otoshi countered by Ko-soto-gari or Ko-soto-gake"]},
      {title:"Performance — Ne-waza",items:["Escape from Kesa-gatame (bridge & roll)","Move into Kesa-gatame from between uke's legs","Move into Yoko-shiho-gatame from between uke's legs","Arm roll — uke approaching from front","Arm roll — uke approaching from behind","Turnover from underneath into Tate-shiho-gatame"]},
      {title:"Performance — Randori",items:["Randori demonstration"]},
      {title:"Personal Choice",items:["Two tachi-waza of choice","One ne-waza of choice"]},
      {title:"Knowledge — Terminology",items:["Ko-soto-gake — Minor Outer Hook Throw","Ko-soto-gari — Minor Outer Reaping Throw","Ko-uchi-gari — Minor Inner Reaping Throw","Morote-seoi-nage — Two-Handed Shoulder Throw","O-goshi — Major Hip Throw","O-soto-gari — Major Outer Reaping Throw","Seoi-otoshi — Shoulder Drop Throw","Tai-otoshi — Body Drop Throw","Tsurikomi-goshi — Drawing Hip Throw","Yoko-shiho-gatame — Side Four Quarters Hold","Shido — Official Warning","Hansoku-make — Disqualification"]},
      {title:"Knowledge — Referee Signals",items:["Mate","Osaekomi","Toketa","Adjusting the judogi"]},
      {title:"Knowledge — Moral Code",items:["Name three items from the Judo Moral Code"]},
      {title:"Knowledge — Contest Rules",items:["Give two examples of actions (not grips) against the contest rules for negative or safety reasons","Demonstrate the proper procedures for coming onto and leaving the mat for a contest"]}
    ]
  },
  {
    id:"toGreen",label:"4th Kyu → 3rd Kyu",from:"Orange",to:"Green",
    fromColor:"belt-color-orange",toColor:"belt-color-green",duration:"Typically 12–18 months",
    groups:[
      {title:"Fundamental — Tachi-waza",items:["Harai-goshi","Uchi-mata","Hiza-guruma","Sasae-tsuri-komi-ashi","Hane-goshi","Okuri-ashi-barai","Morote-eri-seoi-nage"]},
      {title:"Fundamental — Kansetsu-waza",items:["Ude-gatame","Waki-gatame","Hiza-gatame","Juji-gatame"]},
      {title:"Performance — Juji-gatame entries",items:["Juji-gatame — sit-back entry","Juji-gatame — rollover entry","Juji-gatame — over-the-shoulder entry","Juji-gatame — entry from beneath"]},
      {title:"Performance — Randori",items:["Randori demonstration"]},
      {title:"Personal Choice",items:["Four techniques — 2 combinations, 2 counters, 2 ne-waza transitions"]},
      {title:"Knowledge — Terminology",items:["Hane-goshi — Spring Hip","Harai-goshi — Sweeping Hip","Hiza-gatame — Armlock applied with the knee","Hiza-guruma — Knee Wheel","Juji-gatame — Cross Armlock","Kansetsu-waza — Joint Techniques","Morote-eri-seoi-nage — Two-Handed Lapel Shoulder","Okuri-ashi-barai — Foot Sweep","Renraku-waza — Combination techniques (opposite direction)","Renzoku-waza — Combination techniques (same direction)","Sasae-tsuri-komi-ashi — Propping Drawing Ankle","Uchi-mata — Inner Thigh","Ude-gatame — Straight Armlock","Waki-gatame — Armlock applied with the armpit"]}
    ]
  },
  {
    id:"toBlue",label:"3rd Kyu → 2nd Kyu",from:"Green",to:"Blue",
    fromColor:"belt-color-green",toColor:"belt-color-blue",duration:"Typically 18–24 months",
    groups:[
      {title:"Fundamental — Tachi-waza",items:["Soto-maki-komi","Tani-otoshi","Yoko-guruma","Tomoe-nage","Yoko-tomoe-nage","Uki-waza"]},
      {title:"Fundamental — Shime-waza",items:["Okuri-eri-jime","Nami-juji-jime","Gyaku-juji-jime","Kata-juji-jime","Koshi-jime","Kata-te-jime"]},
      {title:"Fundamental — Kansetsu-waza",items:["Ude-garami"]},
      {title:"Performance — Combination",items:["Ude-garami from Kuzure-kesa-gatame"]},
      {title:"Performance — Ne-waza",items:["Koshi-jime — Uke attempts Seoi-otoshi","Kata-te-jime — Uke in all fours position","Nami-juji-jime — Uke underneath (between Tori's legs)","Gyaku-juji-jime — Uke on top (between Tori's legs)","Okuri-eri-jime — Uke makes Seoi-otoshi"]},
      {title:"Performance — Randori",items:["Randori demonstration"]},
      {title:"Personal Choice",items:["Four techniques — 2 combinations, 2 counters, 2 ne-waza transitions"]},
      {title:"Knowledge — Terminology",items:["Gyaku-juji-jime — Reverse Cross Strangle","Kaeshi-waza — Counter Techniques","Kata-te-jime — Strangle with One Hand","Kata-juji-jime — Half Cross Handed Strangle","Koshi-jime — Strangle using the hip","Kuzure-kesa-gatame — Broken scarf hold","Nami-juji-jime — Normal Cross Strangle","Okuri-eri-jime — Sliding Collar Strangle","Seoi-otoshi — Shoulder drop","Shime-waza — Strangle Techniques","Soto-maki-komi — Outside Winding","Tani-otoshi — Valley Drop Throw","Tomoe-nage — Circle Throw","Ude-garami — Entangled Armlock","Uki-waza — Floating Throw","Yoko-guruma — Side Wheel Throw","Yoko-tomoe-nage — Side Circle Throw"]}
    ]
  },
  {
    id:"toBrown",label:"2nd Kyu → 1st Kyu",from:"Blue",to:"Brown",
    fromColor:"belt-color-blue",toColor:"belt-color-brown",duration:"Typically 24–36 months",
    groups:[
      {title:"Fundamental — Tachi-waza",items:["Sode-tsuri-komi-goshi","Sumi-gaeshi","Yoko-gake","Ko-uchi-gake-maki-komi","Ushiro-goshi","Ura-nage","Uki-otoshi","Koshi-guruma"]},
      {title:"Fundamental — Shime-waza",items:["Kata-ha-jime","Hadaka-jime","San-gaku-jime","San-gaku-gatame","San-gaku-osae-gatame"]},
      {title:"Performance — Tachi-waza",items:["Sumi-gaeshi — two variations","Ushiro-goshi as counter to Harai-goshi","Sumi-gaeshi as combination with Uchi-mata","Counter Koshi-guruma with Ura-nage"]},
      {title:"Performance — Ne-waza",items:["San-gaku-jime — complex entry","San-gaku-gatame — complex entry","San-gaku-osae-gatame — turnover and hold","Hadaka-jime — Uke prone position","Kata-ha-jime — Uke all fours position"]},
      {title:"Performance — Randori",items:["Randori demonstration"]},
      {title:"Personal Choice",items:["Four techniques — 2 combinations, 2 counters, 2 ne-waza transitions","OR: One set of Nage-no-kata or Katame-no-kata"]},
      {title:"Knowledge — Terminology",items:["Hadaka-jime — Naked Strangle","Kata — Forms","Kata-ha-jime — Single Collar Strangle","Katame-no-kata — Grappling Forms","Koshi-guruma — Hip Wheel Throw","Ko-uchi-gake-maki-komi — Minor Inner Hook Thigh Winding","Nage-no-kata — Throwing Forms","San-gaku-gatame — Triangular Hold Down","San-gaku-jime — Triangular Strangle","San-gaku-osae-gatame — Triangular Strangle and Hold Down","Sode-tsuri-komi-goshi — Sleeve Lift Pull Hip Throw","Sumi-gaeshi — Corner Throw","Uki-otoshi — Floating Drop","Ura-nage — Rear Throw","Ushiro-goshi — Rear Hip Throw","Yoko-gake — Side Hook Throw"]},
      {title:"Knowledge — Contest Rules",items:["Give three examples of penalties in competition rules"]}
    ]
  },
  {
    id:"toBlack",label:"1st Kyu → Shodan (1st Dan)",from:"Brown",to:"Black",
    fromColor:"belt-color-brown",toColor:"belt-color-black",duration:"Typically 1+ year as 1st Kyu",
    groups:[
      {title:"Contest Requirements",items:[
        "Accumulate 100 contest points (Ippon = 10 pts, Waza-ari = 5 pts)",
        "Minimum 1 year as 1st Kyu (Brown Belt)",
        "Minimum age 15 years",
        "Win first 2 individual contest entries by Ippon",
        "Complete a 3-person line-up — all wins by Ippon"
      ]},
      {title:"Theory — Section 1: Tachi-waza",items:[
        "O-goshi — mandatory throw demonstration",
        "O-soto-gari — mandatory throw demonstration",
        "Ko-uchi-gari — mandatory throw demonstration",
        "De-ashi-harai — mandatory throw demonstration",
        "Two personal choice throws — demonstrate with Uke"
      ]},
      {title:"Theory — Section 2: Ne-waza",items:[
        "Transition from tachi-waza into osaekomi-waza",
        "Transition from osaekomi-waza into shime-waza",
        "Transition from osaekomi-waza into kansetsu-waza",
        "Ne-waza randori demonstration"
      ]},
      {title:"Theory — Sections 3 & 4: Combination & Counter",items:[
        "Two attack combinations — demonstrate with Uke",
        "Two counter techniques — demonstrate with Uke",
        "Uchi-komi demonstration — chosen throw × 10 reps"
      ]},
      {title:"Theory — Section 5: Contest Knowledge",items:[
        "Explain contest scoring: Ippon and Waza-ari",
        "State three prohibited acts in contest",
        "Explain the Judo moral code (eight values)"
      ]},
      {title:"Kata — Nage-no-kata (BJA Level 1)",items:[
        "Te-waza: Uki-otoshi, Seoi-nage, Kata-guruma",
        "Koshi-waza: Uki-goshi, Harai-goshi, Tsuri-komi-goshi",
        "Ashi-waza: Okuri-ashi-harai, Sasae-tsuri-komi-ashi, Uchi-mata",
        "Ma-sutemi-waza: Tomoe-nage, Ura-nage, Sumi-gaeshi",
        "Yoko-sutemi-waza: Yoko-gake, Yoko-guruma, Uki-waza"
      ]},
      {title:"Knowledge — Dan Grade Terminology",items:[
        "Shodan — 1st Degree Black Belt",
        "Nidan — 2nd Degree Black Belt",
        "Dan — Grade (black belt level)",
        "Nage-no-kata — Forms of Throwing",
        "Uke — The person being thrown in kata",
        "Tori — The person throwing in kata",
        "Ippon — Full point (10 pts in Dan grading)",
        "Waza-ari — Near full point (5 pts in Dan grading)",
        "Shiai — Contest",
        "Rei — Bow",
        "Judo moral code — eight values of judo character"
      ]}
    ]
  }
];

const DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

// ── EXERCISE LIBRARY ───────────────────────────────
const EXERCISES = [
  // UCHI-KOMI
  { name: 'Shadow Uchikomi',        cat: 'Uchi-komi',    note: 'Full entry movement solo — both sides. Perfect reps build the reflex.' },
  { name: 'Band Uchikomi',          cat: 'Uchi-komi',    note: 'Loop resistance band at lapel height on door. Drive through the full entry.' },
  { name: 'Moving Uchikomi',        cat: 'Uchi-komi',    note: 'Attack while stepping — never throw from standing still. Step in, step in, attack.' },
  { name: 'Ko-uchi Uchikomi',       cat: 'Uchi-komi',    note: 'Isolate the minor reap entry. Load the step, not just the foot.' },
  { name: 'Seoi-nage Uchikomi',     cat: 'Uchi-komi',    note: 'Hip height. Elbows tight. Turn fully. Feel the load before you stop.' },
  { name: 'O-soto Uchikomi',        cat: 'Uchi-komi',    note: 'Pull the sleeve hard before the reap — kuzushi first, leg second.' },
  { name: 'Combo Uchikomi',         cat: 'Uchi-komi',    note: 'Two-throw combo entries. Ko-uchi → O-soto, or Ko-uchi → Seoi. First attack creates the reaction.' },
  { name: 'Nagekomi (partner)',      cat: 'Uchi-komi',    note: 'Full throw with a partner. Crash mat or tatami. Commit — no half-throws.' },

  // GRIP STRENGTH
  { name: 'Towel Pull-ups',         cat: 'Grip Strength', note: 'Drape towel over bar, grip each end. Brutal on grip endurance — the judo standard.' },
  { name: 'Dead Hang',              cat: 'Grip Strength', note: 'Hang from bar, arms straight, full bodyweight. Hold for time. Builds grip endurance fast.' },
  { name: 'Isometric Gi Hold',      cat: 'Grip Strength', note: 'Grip belt or rolled towel, squeeze max for 30s. Don\'t let go — simulate contest grip.' },
  { name: 'Plate Pinch',            cat: 'Grip Strength', note: 'Pinch two plates between fingers and thumb, carry or hold. Trains the pinch used in sleeve grip.' },
  { name: 'Wrist Roller',           cat: 'Grip Strength', note: 'Roll weight up, lower slow. Both directions. Hits wrist flexors and extensors.' },
  { name: 'Rice Bucket',            cat: 'Grip Strength', note: 'Plunge hand in rice, open and close. 2–3 min continuous. Rehab and strength combined.' },
  { name: 'Gi Pull-ups',            cat: 'Grip Strength', note: 'Grip actual gi jacket draped over bar. Replicates exact contest grip demands on fingers.' },
  { name: 'Finger Extension Band',  cat: 'Grip Strength', note: 'Loop band around fingers, extend outward. Balances grip muscles — prevents injury.' },
  { name: 'Rope Climb (arms only)', cat: 'Grip Strength', note: 'Climb using arms only, no legs. If no rope, towel over pull-up bar. Ultimate grip builder.' },

  // JUDO STRENGTH
  { name: 'Judo Squats',            cat: 'Strength',      note: 'Shoulder-width, judo stance. Explosive up, controlled down. Builds throw drive.' },
  { name: 'Explosive Pushups',      cat: 'Strength',      note: 'Chest to floor, fast off the ground. Hands leave the floor at the top.' },
  { name: 'Bent-over Rows',         cat: 'Strength',      note: 'Drive elbow back hard. Mimics the sleeve/lapel pull needed for throws.' },
  { name: 'Romanian Deadlift',      cat: 'Strength',      note: 'Hip hinge, hamstrings loaded. Translates directly to hip drive in throws.' },
  { name: 'Kettlebell Swing',       cat: 'Strength',      note: 'Hip snap — same explosive pattern as throw entry. Keep back flat.' },
  { name: 'Turkish Get-up',         cat: 'Strength',      note: 'Floor to standing, controlled. Builds ne-waza transition strength and stability.' },
  { name: 'Pull-ups',               cat: 'Strength',      note: 'Full range, dead hang start. Core and lats — essential for pinning and throwing.' },
  { name: 'Single-leg Deadlift',    cat: 'Strength',      note: 'Balance and hip stability. Helps planted foot in ashi-waza throws.' },

  // CONDITIONING
  { name: 'Sprawls',                cat: 'Conditioning',  note: 'Drop hips fast and low. React immediately — don\'t pause to think.' },
  { name: 'Burpee + Shadow Throw',  cat: 'Conditioning',  note: 'Up from burpee, straight into shadow entry. Simulates randori scramble pace.' },
  { name: 'Fast Footwork',          cat: 'Conditioning',  note: 'Light on toes, quick short steps, stay in judo stance the whole time.' },
  { name: 'Shuttle Sprints',        cat: 'Conditioning',  note: '5m out and back × 6. Short explosive efforts — matches randori energy system.' },
  { name: '30s On / 15s Off',       cat: 'Conditioning',  note: 'Max effort shadow uchikomi ON, recovery walk OFF. Repeat × 6–8 rounds.' },
  { name: 'Bear Crawl',             cat: 'Conditioning',  note: 'Hips low, move fluidly. Builds ne-waza movement patterns and core stability.' },
  { name: 'Jump Squats',            cat: 'Conditioning',  note: 'Explosive — land soft and absorb. Builds ashi-waza snap.' },

  // MOBILITY
  { name: 'Hip Circles',            cat: 'Mobility',      note: 'Large, slow circles both ways. Open the hips — essential before any throwing work.' },
  { name: 'Deep Squat Hold',        cat: 'Mobility',      note: 'Hold the bottom position, chest up. Grip a doorframe for support if needed.' },
  { name: 'Shoulder CARs',          cat: 'Mobility',      note: 'Controlled full-range shoulder rotations — slow. Prevents the rotator damage judo causes.' },
  { name: 'Thoracic Rotation',      cat: 'Mobility',      note: 'Thread the needle or seated twist. Keeps throw entry rotation sharp.' },
  { name: 'Neck Rolls',             cat: 'Mobility',      note: 'Slow, full range. Judo puts huge demand on the neck — keep it mobile and strong.' },
  { name: 'Hip Flexor Stretch',     cat: 'Mobility',      note: 'Deep lunge, tuck pelvis under. Essential for full extension in throws.' },
  { name: 'Shoulder Dislocates',    cat: 'Mobility',      note: 'Band or stick overhead and behind. Opens thoracic spine and shoulders.' },

  // RANDORI PRACTICE
  { name: 'Light Randori (3 min)',   cat: 'Randori',      note: 'Full pace but controlled — attack every 30s minimum. No passive gripping allowed.' },
  { name: 'Ne-waza Randori',         cat: 'Randori',      note: 'Ground only from seated position. Work turnovers, pins, escapes. 2–3 min each way.' },
  { name: 'Grip Fighting Randori',   cat: 'Randori',      note: 'Focus entirely on grip — establish yours, break theirs, repeat. No throws, just gripping.' },
  { name: 'Combination Randori',     cat: 'Randori',      note: 'Every attack must be part of a 2-throw combo. First attack creates the reaction — commit to the second.' },
  { name: 'Positional Drilling',     cat: 'Randori',      note: 'Attacker tries to hold for 10s, defender escapes. Switch roles each round. Sharp ne-waza builder.' },
  { name: '1-Minute Blasts',         cat: 'Randori',      note: 'Maximum effort randori for 60s, full recovery, repeat × 5. Builds the randori-specific gas tank.' },
  { name: 'Shadow Randori',          cat: 'Randori',      note: 'Solo: visualise an opponent, move and attack. Work your best combinations. 3â5 min.' },
  { name: 'Situational Randori',     cat: 'Randori',      note: 'Start from a specific grip or position each time. Drill the entry from that exact situation.' },
];

// ── TERMINOLOGY ENGLISH MEANINGS ────────────────────────────────
const TERMS_EN = {
  // White → Red
  'Dojo':                   'Judo Hall',
  'Judogi':                 'Judo Uniform',
  'Zori':                   'Judo Footwear / Sandals',
  'Hajime':                 'Begin',
  'Mate':                   'Wait / Stop',
  'Osae-komi':              'Hold Down',
  'Rei':                    'Standing Bow',
  'Randori':                'Free Practice',
  'Toketa':                 'Hold Broken',
  'Tori':                   'The Attacking Judoka',
  'Uke':                    'The Defending Judoka',
  // Red → Yellow (6th Kyu → 5th Kyu)
  'Ippon-seoi-nage':        'One Arm Shoulder Throw',
  'Kami-shiho-gatame':      'Upper Four Quarters Hold',
  'Kumi-kata':              'Engagement Position',
  'Mae Ukemi':              'Front Breakfall',
  'Mune-gatame':            'Chest Hold',
  'Nage-komi':              'Repetitive Throwing',
  'Ouchi-gari':             'Major Inner Reaping Throw',
  'Tai-otoshi':             'Body Drop Throw',
  'Tate-shiho-gatame':      'Lengthwise Four Quarters Hold',
  'Yoko-shiho-gatame':      'Side Four Quarters Hold',
  // Yellow → Orange
  'Ippon':                  'Full Point — immediate win',
  'Waza-ari':               'Half Point',
  'Shido':                  'Minor Penalty',
  // Orange → Green (kansetsu-waza)
  'Hane-goshi':             'Spring Hip',
  'Harai-goshi':            'Sweeping Hip',
  'Hiza-gatame':            'Armlock applied with the knee',
  'Hiza-guruma':            'Knee Wheel',
  'Juji-gatame':            'Cross Armlock',
  'Kansetsu-waza':          'Joint Techniques',
  'Morote-eri-seoi-nage':   'Two-Handed Lapel Shoulder',
  'Okuri-ashi-barai':       'Foot Sweep',
  'Renraku-waza':           'Combination techniques (opposite direction)',
  'Renzoku-waza':           'Combination techniques (same direction)',
  'Sasae-tsuri-komi-ashi':  'Propping Drawing Ankle',
  'Uchi-mata':              'Inner Thigh',
  'Ude-gatame':             'Straight Armlock',
  'Waki-gatame':            'Armlock applied with the armpit',
  // Green → Blue (shime-waza)
  'Gyaku-juji-jime':        'Reverse Cross Strangle',
  'Kaeshi-waza':            'Counter Techniques',
  'Kata-te-jime':           'Strangle with One Hand',
  'Kata-juji-jime':         'Half Cross Handed Strangle',
  'Koshi-jime':             'Strangle using the hip',
  'Kuzure-kesa-gatame':     'Broken scarf hold',
  'Nami-juji-jime':         'Normal Cross Strangle',
  'Okuri-eri-jime':         'Sliding Collar Strangle',
  'Seoi-otoshi':            'Shoulder drop',
  'Shime-waza':             'Strangle Techniques',
  'Soto-maki-komi':         'Outside Winding',
  'Tani-otoshi':            'Valley Drop Throw',
  'Tomoe-nage':             'Circle Throw',
  'Ude-garami':             'Entangled Armlock',
  'Uki-waza':               'Floating Throw',
  'Yoko-guruma':            'Side Wheel Throw',
  'Yoko-tomoe-nage':        'Side Circle Throw',
  // Blue → Brown
  'Hadaka-jime':            'Naked Strangle',
  'Kata':                   'Forms',
  'Kata-ha-jime':           'Single Collar Strangle',
  'Katame-no-kata':         'Grappling Forms',
  'Koshi-guruma':           'Hip Wheel Throw',
  'Ko-uchi-gake-maki-komi': 'Minor Inner Hook Thigh Winding',
  'Nage-no-kata':           'Throwing Forms',
  'San-gaku-gatame':        'Triangular Hold Down',
  'San-gaku-jime':          'Triangular Strangle',
  'San-gaku-osae-gatame':   'Triangular Strangle and Hold Down',
  'Sode-tsuri-komi-goshi':  'Sleeve Lift Pull Hip Throw',
  'Sumi-gaeshi':            'Corner Throw',
  'Uki-otoshi':             'Floating Drop',
  'Ura-nage':               'Rear Throw',
  'Ushiro-goshi':           'Rear Hip Throw',
  'Yoko-gake':              'Side Hook Throw',
};


// ── BELT KNOWLEDGE ANSWERS ─────────────────────────────────────────
// Maps checklist item strings → example answers/hints shown in the checklist
const BELT_KNOWLEDGE_ANSWERS = {

  // ══ NOVICE → 6TH KYU (White → Red) ══════════════════════════════

  'Mae Mawari Ukemi (3 Versions)': [
    'Version 1: From standing — step forward, tuck chin, roll diagonally across the shoulder',
    'Version 2: From kneeling — same rolling action at lower height',
    'Version 3: From a throw — performed as a breakfall when thrown forward'
  ],
  'Osoto-otoshi into Kesa-gatame': [
    'Drive Uke backward with Osoto-otoshi, land alongside them as they hit the mat',
    'Immediately slide your hips close to Uke\'s head and establish Kesa-gatame',
    'Control: arm under their neck, near arm gripped close to your body, your weight low'
  ],
  'Deashi-barai into Mune-gatame': [
    'Sweep Uke\'s lead foot as weight transfers onto it, breaking them sideways',
    'Follow Uke to the ground and move quickly to chest-to-chest position',
    'Mune-gatame: chest on chest, both arms controlling, hips low and spread wide'
  ],
  'Uki-goshi into Kuzure-kesa-gatame': [
    'Break Uke\'s balance forward, wheel them over your hip with Uki-goshi',
    'As Uke lands, maintain grip and slide into Kuzure-kesa-gatame',
    'Kuzure-kesa-gatame: arm goes under Uke\'s arm (not neck), control their body tightly'
  ],
  'Escape from Kesa-gatame by trapping Uke\'s leg': [
    'Trap Uke\'s near knee with your far hand to stop them moving away',
    'Bridge explosively upward and turn into Uke to break their weight off you',
    'Use the momentum to roll Uke over and come out on top or to the side'
  ],
  'Escape from Mune-gatame using a bridge and roll action': [
    'Feet flat on the mat, hips high — bridge sharply toward Uke\'s head',
    'As Uke reacts to stabilise, roll hard into them in the direction of the bridge',
    'Aim to end up in a controlling position on top of Uke'
  ],
  'Escape from Kuzure-kesa-gatame using sit up and push': [
    'Post your inside elbow on the mat for base, then sit up sharply',
    'Push Uke\'s hip or head away with your free arm as you sit',
    'Create enough space to bring your legs in and establish a guard or come to knees'
  ],
  'In which country was Judo devised?': ['Japan'],
  'Who was the founder of modern Judo?': [
    'Professor Jigoro Kano — founded Judo in 1882 at the Kodokan, Tokyo'
  ],
  'What is the Judo Moral Code?': [
    'Courtesy · Courage · Honesty · Honour · Modesty · Respect · Self-control · Friendship'
  ],
  'Correct wearing of judogi and tying of belt': [
    'Left lapel over right (right side goes on first)',
    'Belt: wrap around twice, tie a flat reef knot at the front, equal ends'
  ],
  'Correct procedure for standing and kneeling bows': [
    'Ritsurei (standing bow): feet together, bow from the waist approximately 30°',
    'Zarei (kneeling bow): kneel left knee first, hands flat on mat in front, bow forward'
  ],

  // ══ 6TH KYU → 5TH KYU (Red → Yellow) ═══════════════════════════

  'Tai-otoshi → Yoko-shiho-gatame': [
    'Attack with Tai-otoshi — as Uke lands, pivot to their side',
    'Lay across Uke\'s body chest-to-chest and establish Yoko-shiho-gatame',
    'Pin both shoulders and hips — keep your weight central and low'
  ],
  'Ippon-seoi-nage → Kami-shiho-gatame': [
    'Throw with Ippon-seoi-nage — maintain grip through the throw',
    'Step around to Uke\'s head as they land, lie flat and reach under both armpits',
    'Kami-shiho-gatame: chest on Uke\'s chest, both arms controlling, legs spread for base'
  ],
  'Ouchi-gari → Tate-shiho-gatame': [
    'Reap Uke\'s leg with Ouchi-gari to bring them straight down',
    'Land directly between their legs and establish Tate-shiho-gatame (straddle)',
    'Control both shoulders with your chest, hook their legs with your feet'
  ],
  'Escape from Kami-shiho-gatame (action & reaction)': [
    'Uke adjusts to your first movement — use that reaction to escape the other way',
    'e.g. push Uke\'s hip to the left → as Uke resists pushing back right → roll right to escape',
    'Bridge and turn into any gap Uke creates when correcting their position'
  ],
  'Escape from Tate-shiho-gatame (clamp & roll)': [
    'Clamp one of Uke\'s legs to your body with both arms',
    'Bridge and roll hard toward the clamped-leg side — Uke cannot post that leg',
    'Follow through to come on top of Uke or to your knees'
  ],
  'Escape from Yoko-shiho-gatame (trap, bridge & roll)': [
    'Trap Uke\'s near arm against their body with your near arm',
    'Bridge up sharply and roll into Uke (toward their head) to break the hold',
    'Use your legs to help push and create momentum into the roll'
  ],
  'Turnover into Kesa-gatame (uke all fours)': [
    'Approach from the side — reach one arm under Uke\'s chest, other over their back',
    'Pull Uke\'s near arm out while pushing their shoulder down to collapse them',
    'Roll them onto their back and settle into Kesa-gatame immediately'
  ],
  'Turnover into Mune-gatame (uke all fours)': [
    'Approach from the side, drive your chest down onto Uke\'s back',
    'Thread one arm under their near arm, push their far shoulder down',
    'As they collapse, swing into position for Mune-gatame across their chest'
  ],
  'Turnover into Yoko-shiho-gatame (uke face-down)': [
    'Approach from the side — reach under Uke\'s near hip and near shoulder',
    'Rock Uke up and over onto their back with a scooping motion',
    'Immediately settle into Yoko-shiho-gatame — pin both their shoulders and hips'
  ],
  'Standard grips — right and left': [
    'Right grip: right hand grips Uke\'s left lapel at chest height, left hand grips their right sleeve at elbow',
    'Left grip (mirror): left hand on Uke\'s right lapel, right hand on their left sleeve',
    'Elbows slightly bent, grips firm but not tense — posture upright'
  ],
  'Right vs left, double lapel, high collar grips': [
    'Right vs Left: orthodox vs southpaw — adjust footwork and entry angle accordingly',
    'Double lapel: both hands on lapels — useful for forward throws like Morote-seoi-nage',
    'High collar: grip near the back of Uke\'s collar — control their posture for forward throws'
  ],
  'Nage-komi in light randori': [
    'Both players alternate attacking — one throws, then the other throws',
    'Show a variety of techniques, not just your favourite',
    'Aim to attempt throws on both right and left sides where possible'
  ],
  'Alternating throws both sides with partner': [
    'e.g. throw Ouchi-gari to the right, then try the same on the left',
    'Assessor looks for balance between right and left side attacks',
    'Full commitment on each throw — no half-entries'
  ],
  'Give two examples of actions against the contest rules': [
    'Intentional avoidance of gripping the opponent (passivity)',
    'Executing a false attack with no real commitment to throw'
  ],

  // ══ 5TH KYU → 4TH KYU (Yellow → Orange) ════════════════════════

  'Ouchi-gari → Ko-uchi-gari': [
    'Attack Ouchi-gari to Uke\'s right leg — Uke steps back with that leg to avoid',
    'Immediately switch attack to Uke\'s left leg with Ko-uchi-gari',
    'Same direction combo (renzoku-waza) — second attack exploits the evasion'
  ],
  'Ko-uchi-gari → O-soto-gari or O-soto-gake': [
    'Attack Ko-uchi-gari inside Uke\'s leg — Uke pushes back or steps out wide',
    'Instantly pivot and drive into O-soto-gari/gake on the outside of Uke\'s leg',
    'Renraku-waza (opposite direction) — Ko-uchi pulls Uke forward, O-soto attacks from behind'
  ],
  'Ko-uchi-gari → Morote-seoi-nage': [
    'Threaten Ko-uchi-gari at Uke\'s foot to pull their weight forward',
    'As Uke steps back to evade, step in under them for Morote-seoi-nage',
    'Their forward lean loads perfectly onto your back — commit fully to the entry'
  ],
  'Ippon-seoi-nage → Ko-uchi-gari': [
    'Attack Ippon-seoi-nage — Uke defends by stepping back and pushing down on you',
    'As Uke pushes their hips back, immediately attack the near foot with Ko-uchi-gari',
    'Uke\'s defensive posture (bent forward, weight on heels) makes them vulnerable to the reap'
  ],
  'Any technique combined with Seoi-otoshi or Ko-uchi-gari': [
    'e.g. Tai-otoshi → Ko-uchi-gari (if Uke steps back to avoid the drop)',
    'e.g. Ko-uchi-gari → Seoi-otoshi (reap to load forward, then drop entry)',
    'The second technique exploits the reaction to the first attack'
  ],
  'Ouchi-gari countered by Tsurikomi-goshi': [
    'Uke attacks Ouchi-gari — their body comes close to yours as they reap',
    'Use their forward momentum — pivot and load them onto your hip for Tsurikomi-goshi',
    'Pull up on the lapel (tsuri) and drive your hip back and around to execute the throw'
  ],
  'Tai-otoshi countered by Ko-soto-gari or Ko-soto-gake': [
    'Uke attempts Tai-otoshi — step your front foot back over their blocking leg',
    'As you step out, attack Uke\'s near outside leg with Ko-soto-gari or Ko-soto-gake',
    'Their extended attack position leaves their supporting leg exposed'
  ],
  'Escape from Kesa-gatame (bridge & roll)': [
    'Shoot your far arm under Uke\'s near arm to create leverage',
    'Bridge explosively upward, pulling Uke\'s arm toward your body as you roll',
    'Roll into Uke — their arm grip pulls them with you and breaks the hold'
  ],
  'Move into Kesa-gatame from between uke\'s legs': [
    'From between Uke\'s legs (guard position) — push one knee down to the mat',
    'Slide out to the side, maintaining chest contact, and reach for the neck position',
    'Settle your weight low next to Uke\'s head and establish Kesa-gatame'
  ],
  'Move into Yoko-shiho-gatame from between uke\'s legs': [
    'From guard — post one hand on the mat for base, pass to the side',
    'Drive past Uke\'s knee and swing your hips to lie across their body',
    'Pin with Yoko-shiho-gatame — one arm under the neck, one under the hip'
  ],
  'Arm roll — uke approaching from front': [
    'Uke is on all fours approaching you — grip their near wrist and the back of their elbow',
    'Rotate their arm palm-up and roll it across their own body',
    'Their shoulder collapses and they roll onto their back — follow immediately to control'
  ],
  'Arm roll — uke approaching from behind': [
    'Uke behind you on all fours — reach back, grip their wrist and collar',
    'Pull their arm through and forward while driving their shoulder down',
    'Roll them over to your side and take a hold-down position'
  ],
  'Turnover from underneath into Tate-shiho-gatame': [
    'You are underneath Uke (turtle position on you) — one arm around their waist',
    'Bridge and roll sideways, pulling Uke over you with the waist grip',
    'As they land on their back, ride on top and establish Tate-shiho-gatame'
  ],
  'Randori demonstration': [
    'Show attacking intent — attempt techniques, don\'t just grip and push',
    'Demonstrate kumi-kata (gripping), footwork, and entry attempts',
    'Respond to Uke\'s attacks with avoidance or counter-attacks'
  ],
  'Variety of techniques & kumi-kata': [
    'e.g. mix hip throws (O-goshi), leg trips (Ko-uchi-gari) and foot sweeps (Ko-soto-gari)',
    'Show gripping variations — standard, high collar, double lapel',
    'Avoid repeating the same single technique — assessors look for range'
  ],
  'Throws to both sides where possible': [
    'e.g. attempt Ko-uchi-gari on right side, then try Ouchi-gari on the left',
    'Even a single attempt to the weaker side demonstrates awareness',
    'Shows you are not one-dimensional and can adapt your grip'
  ],
  'Two tachi-waza of choice': [
    'Pick techniques you can demonstrate with good kuzushi, entry, and execution',
    'Show them first individually then as a combination AND as a counter',
    'e.g. Morote-seoi-nage + Ko-uchi-gari — demonstrate as a combo and as a counter to Ouchi-gari'
  ],
  'One ne-waza of choice': [
    'Pick a hold-down or turnover you can demonstrate cleanly',
    'Show it in a realistic situation — from a throw follow-up or from guard',
    'e.g. demonstrate Tate-shiho-gatame following a Ko-uchi-gari trip'
  ],
  'Show as combination, counter, and ne-waza transition': [
    'Combination: your chosen throw flows into a second attack',
    'Counter: use your chosen throw to beat Uke\'s attack',
    'Ne-waza transition: the throw leads directly into a hold-down without breaking'
  ],
  'Name three items from the Judo Moral Code': [
    'Any three of: Courtesy, Courage, Honesty, Honour, Modesty, Respect, Self-control, Friendship'
  ],
  'Give two examples of actions (not grips) against the contest rules for negative or safety reasons': [
    'Stepping out of the contest area to avoid being thrown',
    'Performing a diving or head-first drop throw (dangerous technique)'
  ],
  'Demonstrate the proper procedures for coming onto and leaving the mat for a contest': [
    'Remove footwear before stepping onto the mat edge',
    'Bow (Ritsurei) when stepping on — and again when stepping off — the mat',
    'Bow to opponent at the start and end of the contest'
  ],
  "Demonstrate the Referee\'s signals for: Mate Osaekomi Toketa Adjusting the judogi": [
    'Mate — one arm raised vertically, palm forward (stop)',
    'Osaekomi — arm extended downward, pointing toward athletes (hold is on)',
    'Toketa — both hands waved horizontally in front of body (hold broken)',
    'Adjusting judogi — both hands mime straightening a lapel at chest height'
  ],

  // ══ 4TH KYU → 3RD KYU (Orange → Green) ════════════════════════

  'Juji-gatame — sit-back entry': [
    'Control Uke\'s arm with both hands, place your hip across their shoulder',
    'Sit back pulling their arm with you — bring your legs across their body',
    'Legs pinch the arm at the shoulder — extend hips upward to apply lock'
  ],
  'Juji-gatame — rollover entry': [
    'Start with Uke on their back, you at their side controlling one arm',
    'Step over their head, then roll backward pulling their arm as you go',
    'End in standard Juji-gatame position — arm straight, wrist toward ceiling'
  ],
  'Juji-gatame — over-the-shoulder entry': [
    'Uke attempts Seoi-nage — as they pull you forward, grip their far arm',
    'Step over their shoulder and roll back to apply Juji-gatame',
    'Used to counter shoulder throws — exploits Uke\'s bent-over position'
  ],
  'Juji-gatame — entry from beneath': [
    'You are on your back with Uke between your legs (guard position)',
    'Control one arm, swing your body 90°, place leg across their face/neck',
    'Use both legs and hip extension to apply the cross armlock from underneath'
  ],
  'Four techniques — 2 combinations, 2 counters, 2 ne-waza transitions': [
    'Choose 4 techniques you are confident performing in both attack and defence',
    '2 combinations: e.g. Harai-goshi → Ouchi-gari, Uchi-mata → Ko-uchi-gari',
    '2 counters: e.g. counter Ouchi-gari with Uchi-mata, counter Harai-goshi with Ko-soto-gari',
    '2 ne-waza transitions: each tachi-waza throw flows directly into a hold without breaking'
  ],

  // ══ 3RD KYU → 2ND KYU (Green → Blue) ══════════════════════════

  'Ude-garami from Kuzure-kesa-gatame': [
    'From Kuzure-kesa-gatame, thread your arm under Uke\'s near arm',
    'Grip your own wrist (figure-4 lock) and rotate Uke\'s elbow upward',
    'Apply slowly and with control — this is a submission technique, tap immediately'
  ],
  'Koshi-jime — Uke attempts Seoi-otoshi': [
    'Uke drops for Seoi-otoshi — as they bend forward, step over their back',
    'Sit across their back and apply Koshi-jime using your hip against their neck',
    'Strangle applied with the hip bone against the carotid — control carefully'
  ],
  'Kata-te-jime — Uke in all fours position': [
    'Uke is on hands and knees — approach from behind or the side',
    'Reach one hand under their chin, grip their collar, apply single-hand strangle',
    'Use your body weight and the collar to create pressure across the neck'
  ],
  'Nami-juji-jime — Uke underneath (between Tori\'s legs)': [
    'You are on top of Uke in guard — Uke\'s legs around your waist',
    'Reach across and grip both lapels with palms facing upward (normal cross)',
    'Drive your knuckles into the sides of Uke\'s neck and extend forward'
  ],
  'Gyaku-juji-jime — Uke on top (between Tori\'s legs)': [
    'You are on your back with Uke in your guard — grip both lapels palms facing down (reverse cross)',
    'Pull Uke\'s lapels apart across their own neck applying the strangle',
    'Cross your wrists as you pull — the X shape creates the choking pressure'
  ],
  'Okuri-eri-jime — Uke makes Seoi-otoshi': [
    'Uke drops for Seoi-otoshi — thread your arm over their shoulder from behind',
    'Grip deep on the collar with your choke arm, other hand pulls for control',
    'Their bent-forward posture stretches their collar — apply the sliding strangle'
  ],

  // ══ 2ND KYU → 1ST KYU (Blue → Brown) ══════════════════════════

  'Sumi-gaeshi — two variations': [
    'Variation 1: Classic — pull Uke forward and over you with a sacrifice backwards',
    'Variation 2: From a grip fight — use when Uke is pulling you into them, redirect their energy'
  ],
  'Ushiro-goshi as counter to Harai-goshi': [
    'Uke attacks Harai-goshi — let them begin their sweep but lower your hips beneath them',
    'Grip around Uke\'s waist as they come up, straighten your legs and lift',
    'Drive Uke backward and down behind you — rear hip throw as counter'
  ],
  'Sumi-gaeshi as combination with Uchi-mata': [
    'Attack Uchi-mata — Uke defends by stepping back and spreading their legs',
    'Their wide, low stance is perfect for Sumi-gaeshi — drop, hook the leg and roll back',
    'The combination works because Uchi-mata defence creates the exact opening for Sumi-gaeshi'
  ],
  'Counter Koshi-guruma with Ura-nage': [
    'Uke attacks Koshi-guruma — they pull you over their hip from the front',
    'Reach around Uke\'s waist from behind as they turn in, straighten and arch back',
    'Ura-nage throws Uke backward over your head — use landing mat, prioritise safety'
  ],
  'San-gaku-jime — complex entry': [
    'e.g. Entry from guard — one arm controlled, leg swings over their neck',
    'e.g. Entry from turtle — roll Uke onto their back and lock triangle mid-roll',
    'Complex entry = not a static setup — must show dynamic transition into the triangle'
  ],
  'San-gaku-gatame — complex entry': [
    'Triangle hold (not strangle) — trap Uke\'s arm and head with your legs',
    'Entry: from side control, swing legs up and lock around Uke\'s head and near arm',
    'Hold them down in the triangle position — no submission, just control for 25 seconds'
  ],
  'San-gaku-osae-gatame — turnover and hold': [
    'Uke is on all fours or their side — apply triangle around neck and one arm',
    'Roll Uke onto their back while maintaining the triangle lock',
    'Hold down = San-gaku-osae-gatame — the triangle acts as both strangle and pin'
  ],
  'Hadaka-jime — Uke prone position': [
    'Uke is face-down — straddle or lie across their back',
    'Reach under Uke\'s chin with your forearm, other hand grips your own bicep (sleeper position)',
    'Drive your forearm into the front of the neck — apply slow and with control'
  ],
  'Kata-ha-jime — Uke all fours position': [
    'Uke is on all fours — approach from behind',
    'Thread one arm under their armpit and over their shoulder (arm bar), other arm goes across neck gripping collar',
    'Squeeze the two arm actions together — Uke\'s own shoulder assists the choke'
  ],
  'Give three examples of penalties in competition rules': [
    'Shido — minor penalty for passivity, false attacks, or minor rule infringement',
    'Accumulation of two Shido = Hansoku-make (disqualification)',
    'Direct Hansoku-make for serious, dangerous, or intentional forbidden techniques'
  ],
  'OR: One set of Nage-no-kata or Katame-no-kata': [
    'Nage-no-kata: 15 throws in 5 groups (Te-waza, Koshi-waza, Ashi-waza, Ma-sutemi, Yoko-sutemi)',
    'Katame-no-kata: 15 techniques in 3 groups (Osaekomi, Shime-waza, Kansetsu-waza)',
    'Must include formal opening and closing bowing procedures (Ritsurei and Zarei)'
  ],
};

// ── GRADING VIDEOS ──────────────────────────────────────
// Maps grading checklist item names -> video URLs
// Used as fallback in buildAdultRequirements for items not in TECHNIQUES
const GRADING_VIDEOS = {
  // ── White → Red belt ──────────────────────────────
  'Ushiro Ukemi':                                        'https://www.youtube.com/watch?v=_g7rvsxTkz8',
  'Yoko Ukemi':                                          'https://www.youtube.com/watch?v=JCwK1Ia4jsc',
  'Mae Mawari Ukemi (3 Versions)':                       'https://www.youtube.com/watch?v=kbiLot6laks',
  'Osoto-otoshi':                                        'https://www.youtube.com/watch?v=2DsVvDw7b8g',
  'Deashi-barai':                                        'https://www.youtube.com/watch?v=gW9LEvVmG2o',
  'Uki-goshi':                                           'https://www.youtube.com/watch?v=bPKwtB4lyOQ',
  'Kesa-gatame':                                         'https://www.youtube.com/watch?v=NDaQuJOFBYk',
  'Mune-gatame':                                         'https://www.youtube.com/watch?v=lIt5vywPBF0',
  'Kuzure-kesa-gatame':                                  'https://www.youtube.com/watch?v=Q2fb9jaoUFQ',
  'Osoto-otoshi into Kesa-gatame':                       'https://www.youtube.com/watch?v=aLpqnPTHpRk',
  'Deashi-barai into Mune-gatame':                       'https://www.youtube.com/watch?v=4dNBRCUGXQQ',
  'Uki-goshi into Kuzure-kesa-gatame':                   'https://www.youtube.com/watch?v=BaxDK6pljFU',
  "Escape from Kesa-gatame by trapping Uke's leg":       'https://youtu.be/5_TS0YHdxcQ?t=38',
  'Escape from Mune-gatame using a bridge and roll action': 'https://www.youtube.com/watch?v=yOHj5FQCCQM',
  'Escape from Kuzure-kesa-gatame using sit up and push':'https://youtu.be/-zFQ6h4yKT4?t=38',
  // ── Orange → Green belt ───────────────────────────
  // Orange belt — combinations
  'Ouchi-gari → Ko-uchi-gari':                           'https://www.youtube.com/watch?v=pJdSJRWI0oE',
  'Ko-uchi-gari → O-soto-gari or O-soto-gake':          'https://www.youtube.com/watch?v=Ti7tOtj5IwU',
  'Ko-uchi-gari → Morote-seoi-nage':                    'https://www.youtube.com/watch?v=glO4xOKWrq8',
  'Ippon-seoi-nage → Ko-uchi-gari':                     'https://www.youtube.com/watch?v=r1zGVN_S0IU',
  'Any technique combined with Seoi-otoshi or Ko-uchi-gari': 'https://www.youtube.com/watch?v=b0yLt7UHGZQ',
  // Orange belt — counters
  'Ouchi-gari countered by Tsurikomi-goshi':               'https://www.youtube.com/watch?v=EeEiF6rnoQs',
  'Tai-otoshi countered by Ko-soto-gari or Ko-soto-gake':  'https://www.youtube.com/watch?v=DAVeI6trzy4',
  // Orange belt — ne-waza
  'Escape from Kesa-gatame (bridge & roll)':               'https://www.youtube.com/watch?v=FuMecdRPD_0',
  'Move into Kesa-gatame from between uke\'s legs':        'https://www.youtube.com/watch?v=jo8GzB1PXaw',
  'Move into Yoko-shiho-gatame from between uke\'s legs':  'https://www.youtube.com/watch?v=XdGZ3-z-pPo',
  'Arm roll — uke approaching from front':              'https://youtu.be/D7cx9Dp_Ssk?t=216',
  'Arm roll — uke approaching from behind':             'https://youtu.be/D7cx9Dp_Ssk?t=246',
  'Turnover from underneath into Tate-shiho-gatame':       'https://youtu.be/D7cx9Dp_Ssk?t=269',
  // ── Orange → Green belt ───────────────────────────
  'Sasae-tsuri-komi-ashi':                               'https://www.youtube.com/watch?v=699i--pvYmE',
  'Okuri-ashi-barai':                                    'https://www.youtube.com/watch?v=nw1ZdRjrdRI',
  'Ude-gatame':                                          'https://www.youtube.com/watch?v=BnTsCwHEO_w',
  'Juji-gatame — sit-back entry':                        'https://youtu.be/pyuLU_zyZyk?t=233',
  'Juji-gatame — rollover entry':                        'https://youtu.be/pyuLU_zyZyk?t=281',
  'Juji-gatame — over-the-shoulder entry':               'https://youtu.be/pyuLU_zyZyk?t=310',
  'Juji-gatame — entry from beneath':                    'https://youtu.be/pyuLU_zyZyk?t=333',
  'Four techniques — 2 combinations, 2 counters, 2 ne-waza transitions': 'https://youtu.be/pyuLU_zyZyk?t=381',
  // ── Green → Blue belt ─────────────────────────────
  'Soto-maki-komi':                                      'https://www.youtube.com/watch?v=bWG9O1BVKtQ',
  'Koshi-jime':                                          'https://www.youtube.com/shorts/heeAEfp4MNQ',
  'Kata-te-jime':                                        'https://www.youtube.com/watch?v=cHeIs-fSqwE',
  'Ude-garami from Kuzure-kesa-gatame':                  'https://www.youtube.com/watch?v=0Ux5wWA3WZg',
  'Koshi-jime — Uke attempts Seoi-otoshi':         'https://youtu.be/Ttf_uj2m1TY?t=324',
  'Kata-te-jime — Uke in all fours position':      'https://youtu.be/Ttf_uj2m1TY?t=390',
  "Nami-juji-jime — Uke underneath (between Tori\'s legs)": 'https://www.youtube.com/watch?v=k2cHry9HByQ',
  "Gyaku-juji-jime — Uke on top (between Tori\'s legs)":   'https://www.youtube.com/watch?v=t3tQriIPdlI',
  'Okuri-eri-jime — Uke makes Seoi-otoshi':        'https://youtu.be/Ttf_uj2m1TY?t=444',
  // ── Blue → Brown belt ─────────────────────────────
  'Sode-tsuri-komi-goshi':                               'https://www.youtube.com/watch?v=QsmAxpmYLOI',
  'Ko-uchi-gake-maki-komi':                              'https://www.youtube.com/watch?v=_1eygIXLD_w',
  'San-gaku-jime':                                       'https://www.youtube.com/watch?v=lq1CUBRAm7s',
  'San-gaku-gatame':                                     'https://www.youtube.com/watch?v=zQg6zaL09aI',
  'San-gaku-osae-gatame':                                'https://www.youtube.com/watch?v=JIulw4NgRvo&t=2s',
  'Sumi-gaeshi — two variations':                  'https://www.youtube.com/watch?v=y_73gsi1V00',
  'Ushiro-goshi as counter to Harai-goshi':              'https://www.youtube.com/watch?v=8XGiwPodgls',
  'Sumi-gaeshi as combination with Uchi-mata':           'https://www.youtube.com/watch?v=Xx6HJ4Mfvfk',
  'Counter Koshi-guruma with Ura-nage':                  'https://youtu.be/2qdE8x2CwDo?t=375',
  'San-gaku-jime — complex entry':                 'https://youtu.be/2qdE8x2CwDo?t=522',
  'San-gaku-gatame — complex entry':               'https://www.youtube.com/shorts/q3RpzHYhFX4',
  'San-gaku-osae-gatame — turnover and hold':      'https://www.youtube.com/watch?v=JIulw4NgRvo',
  'Hadaka-jime — Uke prone position':              'https://www.youtube.com/shorts/OdCMntXQH7Q',
  'Kata-ha-jime — Uke all fours position':         'https://www.youtube.com/watch?v=BXa5NFIuCyk',

  // ── White → Yellow belt ───────────────────────────
  'Mae-ukemi':                                               'https://www.youtube.com/watch?v=veM5RFdjo0U',
  'Tai-otoshi':                                              'https://www.youtube.com/watch?v=DUiZ8JZkGx8',
  'Ippon-seoi-nage':                                         'https://www.youtube.com/watch?v=OmKfUXAAdZ0',
  'Ouchi-gari':                                              'https://www.youtube.com/watch?v=0itJFhV9pDQ',
  'Yoko-shiho-gatame':                                       'https://www.youtube.com/watch?v=TT7XJVSEQxA',
  'Tate-shiho-gatame':                                       'https://www.youtube.com/watch?v=XjWzNxlKH1M',
  'Kami-shiho-gatame':                                       'https://www.youtube.com/watch?v=HFuMjOv0WN8',
  'Tai-otoshi \u2192 Yoko-shiho-gatame':                    'https://www.youtube.com/watch?v=caXBWqLeW6I',
  'Ippon-seoi-nage \u2192 Kami-shiho-gatame':               'https://www.youtube.com/watch?v=jBl0Q-Egbdg',
  'Ouchi-gari \u2192 Tate-shiho-gatame':                    'https://www.youtube.com/watch?v=OH8PgkWGxQU',
  'Escape from Kami-shiho-gatame (action & reaction)':       'https://www.youtube.com/watch?v=Hl0C4RRavHo',
  'Escape from Tate-shiho-gatame (clamp & roll)':            'https://www.youtube.com/watch?v=PV_anL347rw',
  'Escape from Yoko-shiho-gatame (trap, bridge & roll)':     'https://www.youtube.com/watch?v=yK_GSamSPko',
  'Turnover into Kesa-gatame (uke all fours)':               'https://www.youtube.com/watch?v=r-ODhj19vL0',
  'Turnover into Mune-gatame (uke all fours)':               'https://www.youtube.com/watch?v=T3dPwpO_ttQ',
  'Turnover into Yoko-shiho-gatame (uke face-down)':         'https://www.youtube.com/watch?v=19TTB0bdL7w',
  'Standard grips \u2014 right and left':                   'https://www.youtube.com/watch?v=T6c_FpfVZy4',
  'Right vs left, double lapel, high collar grips':          'https://www.youtube.com/watch?v=97djf2GY6I0',
  'Nage-komi in light randori':                              'https://www.youtube.com/watch?v=QUKkd08DT9M',
  // ── Yellow → Orange belt ──────────────────────────
  'Tsurikomi-goshi':                                         'https://www.youtube.com/watch?v=McfzA0yRVt4',
  'O-goshi':                                                 'https://www.youtube.com/watch?v=yhu1mfy2vJ4',
  'Seoi-otoshi':                                             'https://www.youtube.com/watch?v=vu1TMVNnq34',
  'Morote-seoi-nage':                                        'https://www.youtube.com/watch?v=UjtL1h9htb8',
  'Ko-uchi-gari':                                            'https://www.youtube.com/watch?v=3Jb3tZvr9Ng',
  'Ko-soto-gake':                                            'https://www.youtube.com/watch?v=8b6kY4s4zH4',
  'Ko-soto-gari':                                            'https://www.youtube.com/watch?v=jeQ541ScLB4',
  'O-soto-gari':                                             'https://www.youtube.com/watch?v=c-A_nP7mKAc',
  'Randori demonstration':                                   'https://www.youtube.com/watch?v=JCFO2BeL1oU',
  // ── Orange → Green belt ───────────────────────────
  'Harai-goshi':                                             'https://www.youtube.com/watch?v=qTo8HlAAkOo',
  'Uchi-mata':                                               'https://www.youtube.com/watch?v=iUpSu5J-bgw',
  'Hiza-guruma':                                             'https://www.youtube.com/watch?v=JPJx9-oAVns',
  'Hane-goshi':                                              'https://www.youtube.com/watch?v=M9_7De6A1kk',
  'Morote-eri-seoi-nage':                                    'https://www.youtube.com/watch?v=NfkQ3qb4pZ4',
  'Waki-gatame':                                             'https://www.youtube.com/watch?v=OtqfF2D8kIc',
  'Hiza-gatame':                                             'https://www.youtube.com/watch?v=i6NFihgG4PE',
  'Juji-gatame':                                             'https://www.youtube.com/watch?v=jOp5XyPd59M',
  // ── Green → Blue belt ─────────────────────────────
  'Tani-otoshi':                                             'https://www.youtube.com/watch?v=3b9Me3Fohpk',
  'Yoko-guruma':                                             'https://www.youtube.com/watch?v=MehP6I5cY2c',
  'Tomoe-nage':                                              'https://www.youtube.com/watch?v=TON-fQk3aTc',
  'Yoko-tomoe-nage':                                         'https://www.youtube.com/watch?v=9-byceOifXo',
  'Uki-waza':                                                'https://www.youtube.com/watch?v=weVOpJ63gII',
  'Okuri-eri-jime':                                          'https://www.youtube.com/watch?v=EiqyoVcIAi8',
  'Nami-juji-jime':                                          'https://www.youtube.com/watch?v=k2cHry9HByQ',
  'Gyaku-juji-jime':                                         'https://www.youtube.com/watch?v=t3tQriIPdlI',
  'Kata-juji-jime':                                          'https://www.youtube.com/watch?v=3VZVUAmiMD8',
  'Ude-garami':                                              'https://www.youtube.com/watch?v=AIlTvZb4RlE',
  // ── Blue → Brown belt ─────────────────────────────
  'Sumi-gaeshi':                                             'https://www.youtube.com/watch?v=5VhduA5xkbA',
  'Yoko-gake':                                               'https://www.youtube.com/watch?v=tP1Sj1uDfSo',
  'Ushiro-goshi':                                            'https://www.youtube.com/watch?v=ORIYstuxYT8',
  'Ura-nage':                                                'https://www.youtube.com/watch?v=Fgi9b8DJ5sQ',
  'Uki-otoshi':                                              'https://www.youtube.com/watch?v=6H5tmncOY4Q',
  'Koshi-guruma':                                            'https://www.youtube.com/watch?v=SU7Id6uVJ44',
  'Kata-ha-jime':                                            'https://www.youtube.com/watch?v=yaTGgRjnwB8',
  'Hadaka-jime':                                             'https://www.youtube.com/watch?v=9f0n8jez7iA',
};

// ══════════════════════════════════════════════════════════════════
//  TECHNIQUE_DATA — Rich lesson content for all belt path techniques
//  Each entry: { cat, steps: [[icon,label,text]×3], mistakes: [[title,text]×2], tip }
//  cat: 'ukemi' | 'throw' | 'hold' | 'lock' | 'strangle'
// ══════════════════════════════════════════════════════════════════
const TECHNIQUE_DATA = {

  // ── UKEMI ──────────────────────────────────────────────────────
  'Ushiro Ukemi': {
    cat: 'ukemi',
    steps: [
      ['self_improvement','Tuck','Tuck your chin firmly to your chest — protect your head throughout.'],
      ['pan_tool','Slap','Both arms at 45° — slap the mat hard just before your back lands.'],
      ['expand_more','Land','Roll through your spine diagonally — never land flat and rigid.']
    ],
    mistakes: [
      ['Head goes back','Chin must stay tucked — a head impact on the mat is dangerous.'],
      ['Weak slap','The mat slap absorbs the impact — make it loud and firm.']
    ],
    tip: 'Practise the slap alone first — a strong mat slap is more important than the roll itself.'
  },
  'Yoko Ukemi': {
    cat: 'ukemi',
    steps: [
      ['self_improvement','Tuck','Keep chin tucked, feet together as you go down.'],
      ['pan_tool','Arm Out','Extend the lower arm and slap the mat firmly at 45°.'],
      ['expand_more','Land','Land on thigh → hip → lat — never on the shoulder point.']
    ],
    mistakes: [
      ['Landing on the shoulder','Shoulder impacts cause injury — land on the lat and side of the body.'],
      ['Skipping the slap','Without the slap, full force travels to your ribs and arm.']
    ],
    tip: 'Think "thigh → hip → lat" — those three points hit in rapid sequence, spreading the impact.'
  },
  'Mae Mawari Ukemi (3 Versions)': {
    cat: 'ukemi',
    steps: [
      ['directions_run','Step','Step forward and place one hand on the mat, fingers pointing inward.'],
      ['rotate_right','Roll','Roll diagonally across your arm, shoulder, and back — not the spine.'],
      ['expand_more','Rise','Come up smoothly to standing or a defensive groundwork position.']
    ],
    mistakes: [
      ['Rolling over the spine','The roll travels diagonally — spine impact causes injury.'],
      ['Straight arm','A stiff arm will buckle — soften the elbow and roll through it.']
    ],
    tip: 'Draw a diagonal line from your hand to the opposite hip — that is your roll path.'
  },
  'Mae-ukemi': {
    cat: 'ukemi',
    steps: [
      ['front_hand','Arms','Extend both arms in front at 45°, wrists slightly bent.'],
      ['pan_tool','Slap','As you fall forward, slap both forearms simultaneously on the mat.'],
      ['check_circle','Land','Land on forearms and toes — chest stays clear of the mat.']
    ],
    mistakes: [
      ['Palms only','Use the full forearm — palms alone cannot absorb the shock.'],
      ['Chin not tucked','Keep your chin up and away from the mat to protect your face.']
    ],
    tip: 'Both forearms hit at exactly the same moment — simultaneous contact distributes the impact evenly.'
  },

  // ── WHITE → RED: FUNDAMENTAL TACHI-WAZA ───────────────────────
  'Osoto-otoshi': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Drive uke\'s weight directly backward onto their heel.'],
      ['directions_run','Entry','Step outside uke\'s lead leg — shoulder-to-shoulder contact.'],
      ['trending_up','Drop','Sit them straight down — this is a drop, not a reap.']
    ],
    mistakes: [
      ['Trying to sweep','Osoto-otoshi is a drop, not a reap — don\'t swing the leg.'],
      ['Losing chest drive','You must maintain forward body pressure to take uke\'s balance.']
    ],
    tip: 'Imagine sitting uke into a chair directly behind them — drive back and down, not sideways.'
  },
  'Deashi-barai': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Draw uke forward as their weight transfers to the target foot.'],
      ['directions_run','Timing','Sweep at the exact moment the foot touches the mat.'],
      ['trending_up','Sweep','Flat brushing action — use the sole, stay low, sweep away.']
    ],
    mistakes: [
      ['Too late','Once weight is loaded the foot cannot be swept — catch it as it lands.'],
      ['Kicking not sweeping','A sweep is a brushing motion, not a kick — use the sole, stay flat.']
    ],
    tip: 'Timing is everything — practise reading uke\'s steps until you feel the moment naturally.'
  },
  'Uki-goshi': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Pull uke forward and across their front.'],
      ['rotate_right','Entry','Pivot in — hip slides to touch uke\'s hip, not deep, just contact.'],
      ['trending_up','Kake','Pull with both arms and unwind the hips to swing uke over.']
    ],
    mistakes: [
      ['Hip too deep','Uki-goshi is a floating hip — deep contact becomes O-goshi. Keep it light.'],
      ['Pulling down','Pull forward and across, never downward — downward kills the float.']
    ],
    tip: 'The "floating" in the name is literal — uke\'s hip barely touches yours as they go over.'
  },

  // ── WHITE → RED: OSAEKOMI-WAZA ─────────────────────────────────
  'Kesa-gatame': {
    cat: 'hold',
    steps: [
      ['front_hand','Position','Sit tight to uke\'s side — your hip connected to their ribs.'],
      ['lock','Arms','One arm under uke\'s neck gripping the collar. Other arm traps their arm tightly.'],
      ['check_circle','Hold','Spread your legs wide for base, keep weight low — do not rise up.']
    ],
    mistakes: [
      ['Sitting upright','A high centre of gravity makes you easy to roll — stay low.'],
      ['Loose arm trap','Uke\'s arm must be clamped tight — loose grip allows them to free it.']
    ],
    tip: 'Make yourself heavy — sink your hips and imagine pressing uke through the mat.'
  },
  'Mune-gatame': {
    cat: 'hold',
    steps: [
      ['front_hand','Position','Lie chest-to-chest across uke, perpendicular to their body.'],
      ['lock','Arms','Reach under both armpits and grip the judogi behind their shoulders.'],
      ['check_circle','Control','Drive your chest into theirs — spread your legs wide for stability.']
    ],
    mistakes: [
      ['Head too close','Head should be to the side — if uke bridges, you won\'t clash heads.'],
      ['Arms too shallow','Shallow arm position lets uke turn into you and escape.']
    ],
    tip: 'Drive your sternum into their chest — pressure is central, not on one shoulder.'
  },
  'Kuzure-kesa-gatame': {
    cat: 'hold',
    steps: [
      ['front_hand','Position','Sit beside uke — near hip on mat, tucked to their side.'],
      ['lock','Arms','Thread your near arm under uke\'s arm, gripping behind the shoulder or lat.'],
      ['check_circle','Control','Other arm controls the neck — weight low, legs wide.']
    ],
    mistakes: [
      ['Sitting on top','You sit beside them, not on top — sitting on them lets them bridge you off.'],
      ['Forgetting the arm trap','The trapped arm is key — if it\'s free, uke can turn in and escape.']
    ],
    tip: 'The "kuzure" (broken) position gives you more control — your arm wraps deeper around the shoulder.'
  },

  // ── RED → YELLOW: TACHI-WAZA ───────────────────────────────────
  'Tai-otoshi': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Pull uke diagonally forward off their toes.'],
      ['directions_run','Entry','Drop to squat — blocking leg extends flat across uke\'s shins.'],
      ['trending_up','Kake','Drive arms forward and down, rotating uke over the leg block.']
    ],
    mistakes: [
      ['Block too wide','The block must be tight across the shins, not extended out in front.'],
      ['Body pulls away','Pulling back creates space for uke to step over your leg.']
    ],
    tip: 'The block is a wall — plant it low and firm, then drive uke over it with your whole body.'
  },
  'Ippon-seoi-nage': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Pull uke sharply forward and upward.'],
      ['rotate_right','Entry','Drop to one knee — arm threads under uke\'s armpit to the shoulder.'],
      ['trending_up','Kake','Extend legs, pull arms down, rotate uke over your shoulder.']
    ],
    mistakes: [
      ['Hip too high','High hips mean uke crashes onto your back — drop low so they go over the shoulder.'],
      ['Half turn','Half-pivots give uke time to block — commit to the full 180°.']
    ],
    tip: 'Your back must be flat when you turn in — any bend lets uke land on top of you.'
  },
  'Ouchi-gari': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Drive uke\'s weight back and onto the target leg.'],
      ['directions_run','Entry','Step between uke\'s legs with your reaping leg.'],
      ['trending_up','Reap','Drive the reap through uke\'s inner thigh — project them backward.']
    ],
    mistakes: [
      ['Reaping too early','Commit uke\'s weight backward first — early reap has nothing to catch.'],
      ['Leaning back','You must stay upright and drive forward as the leg reaps.']
    ],
    tip: 'Push and reap simultaneously — upper body drives back as the leg sweeps through.'
  },

  // ── RED → YELLOW: OSAEKOMI-WAZA ────────────────────────────────
  'Yoko-shiho-gatame': {
    cat: 'hold',
    steps: [
      ['front_hand','Approach','Come from uke\'s side — lie alongside them at 90°.'],
      ['lock','Arms','One arm under neck over far shoulder. Other arm between uke\'s legs gripping belt or gi.'],
      ['check_circle','Pin','Chest on their chest, legs spread wide, hips low.']
    ],
    mistakes: [
      ['Gap between bodies','Any space lets uke bridge and roll — stay chest-to-chest.'],
      ['Legs together','Wide legs give stability — narrow stance makes you easy to roll.']
    ],
    tip: 'The arm between the legs is your anchor — a firm grip here makes the pin very hard to break.'
  },
  'Tate-shiho-gatame': {
    cat: 'hold',
    steps: [
      ['front_hand','Mount','Straddle uke — sit on their lower chest, knees down either side.'],
      ['lock','Arms','Hands under uke\'s head gripping the collar behind their neck.'],
      ['check_circle','Control','Hook your feet under uke\'s legs — sink your weight down.']
    ],
    mistakes: [
      ['Too far back','Sitting too far back lets uke sit up into you — stay on the chest.'],
      ['No leg hooks','Leg hooks prevent the bridge-and-roll escape.']
    ],
    tip: 'Relax your upper body weight downward — fighting bridges wastes energy, just stay heavy.'
  },
  'Kami-shiho-gatame': {
    cat: 'hold',
    steps: [
      ['front_hand','Position','Kneel at uke\'s head — lie flat, chest to chest.'],
      ['lock','Arms','Reach under both armpits and grip their belt or the back of their gi.'],
      ['check_circle','Control','Spread your legs wide, toes on the mat — hips low.']
    ],
    mistakes: [
      ['Elbows flaring','Wide elbows let uke trap them and turn in — keep elbows tight.'],
      ['Hips too high','High hips let uke bridge and throw you over their head.']
    ],
    tip: 'Pull uke\'s arms tight to their sides with your elbows — this removes most escape options.'
  },

  // ── YELLOW → ORANGE: TACHI-WAZA ───────────────────────────────
  'Tsurikomi-goshi': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Pull up on the collar (tsuri) and out on the sleeve simultaneously.'],
      ['rotate_right','Entry','Pivot in deeply — hip to hip, feet inside uke\'s feet.'],
      ['trending_up','Kake','Pull up and around while extending hips — rotate uke over your hip.']
    ],
    mistakes: [
      ['No upward lift','The collar lift creates the entry — without it the throw stalls immediately.'],
      ['Shallow hip entry','Your hip must be in front of uke\'s — shallow entry means no throw.']
    ],
    tip: 'The collar pull is vertical — lift uke\'s chin up as you enter, then rotate over.'
  },
  'O-goshi': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Pull uke forward onto the balls of their feet.'],
      ['rotate_right','Entry','Wrap your arm around uke\'s waist — pivot in, hip to hip.'],
      ['trending_up','Kake','Bend forward, pull up and over — uke rotates over your hip.']
    ],
    mistakes: [
      ['Arm too high','Grip the waist, not the shoulder — high arm lifts uke off the hip.'],
      ['Not bending forward','Staying upright means uke goes sideways, not over. Bow forward to load them.']
    ],
    tip: 'O-goshi rewards commitment — once you\'re in, bend hard and pull their body over yours.'
  },
  'Seoi-otoshi': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Pull uke sharply forward and across.'],
      ['rotate_right','Entry','Drop to both knees — arm under uke\'s armpit at the shoulder.'],
      ['trending_up','Kake','Drive uke forward over your shoulder from the kneeling position.']
    ],
    mistakes: [
      ['Not dropping low','Stay upright and uke lands on you rather than going over.'],
      ['Hesitating in entry','Hesitation telegraphs the throw — commit from start to finish.']
    ],
    tip: 'Use the ground as your power base — push up from your knees to launch uke forward.'
  },
  'Morote-seoi-nage': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Two-handed pull — both arms draw uke forward simultaneously.'],
      ['rotate_right','Entry','Deep hip pivot, both arms pulling sleeve and collar.'],
      ['trending_up','Kake','Extend legs — both arms rotate uke off both shoulders together.']
    ],
    mistakes: [
      ['One arm dominant','Both arms must pull equally — one arm alone kills the rotation.'],
      ['Shallow entry','Both hips must be in front of uke\'s — stay shallow and the throw stalls.']
    ],
    tip: 'Think two-wheel drive — both arms load and pull at the same moment for maximum rotation.'
  },
  'Ko-uchi-gari': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Subtle forward-diagonal break as uke steps.'],
      ['directions_run','Timing','Reap as uke\'s foot lands — use their own step against them.'],
      ['trending_up','Reap','Small inner reap of the near ankle — precise, not forceful.']
    ],
    mistakes: [
      ['Over-committing','Ko-uchi is small and precise — a big swing gives nothing.'],
      ['Wrong timing','Miss the step and you lift their loaded leg — they step straight over.']
    ],
    tip: 'Ko-uchi is about timing and precision — a small, well-timed reap beats a big, mistimed one every time.'
  },
  'Ko-soto-gake': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Push uke\'s weight backward onto the target leg.'],
      ['directions_run','Hook','Hook your foot behind uke\'s near ankle from the outside.'],
      ['trending_up','Drive','Drive your whole body forward — the hook takes the base.']
    ],
    mistakes: [
      ['Hook on the calf','The hook must be at the ankle — calf hook lets uke step over it.'],
      ['No forward drive','The hook alone won\'t score — your body must drive through uke.']
    ],
    tip: 'The hook is a stationary anchor — your body drives forward through uke to make the throw work.'
  },
  'Ko-soto-gari': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Push uke\'s weight onto the target leg.'],
      ['directions_run','Entry','Small step to the outside of uke\'s near foot.'],
      ['trending_up','Reap','Light outer reap of the ankle — small and sharp.']
    ],
    mistakes: [
      ['Reaping the calf','Target the ankle — ankle reap removes the base cleanly.'],
      ['Unloaded target','Load uke\'s weight onto the foot first — reaping an unloaded foot fails.']
    ],
    tip: 'Ko-soto-gari is most effective when uke squares up and transfers weight forward — attack that moment.'
  },
  'O-soto-gari': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Drive uke\'s weight onto the target leg with shoulder pressure.'],
      ['directions_run','Entry','Step alongside uke, shoulder-to-shoulder, outside their leg.'],
      ['trending_up','Reap','Large powerful backward reap — drive through and past the leg.']
    ],
    mistakes: [
      ['Reap stops at contact','The reap must drive through and past the leg, not swing to it.'],
      ['No shoulder connection','Shoulder drives weight onto the leg — no contact, no kuzushi.']
    ],
    tip: 'Shoulder loads the weight, reap removes the leg — both must happen at the same instant.'
  },

  // ── ORANGE → GREEN: TACHI-WAZA ────────────────────────────────
  'Harai-goshi': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Pull up and forward — lift uke onto their toes.'],
      ['rotate_right','Entry','Pivot in, hip past uke\'s hip, sweeping leg cocked high.'],
      ['trending_up','Sweep','Drive the straight leg fully through uke\'s hips — full commitment.']
    ],
    mistakes: [
      ['Short sweep','Half-swing only bumps uke — the leg must drive all the way through.'],
      ['Bent sweeping leg','Straight leg = maximum force. Bent leg = weak and ineffective.']
    ],
    tip: 'The sweep starts from the hip, not the knee — generate rotation first, then release the leg.'
  },
  'Uchi-mata': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Draw uke forward and up onto their toes.'],
      ['directions_run','Entry','Deep pivot in — foot planted between uke\'s feet.'],
      ['trending_up','Reap','Inner thigh reap driving upward between uke\'s legs.']
    ],
    mistakes: [
      ['Shallow entry','Foot must land between uke\'s feet — shallow entry and the reap misses.'],
      ['Reaping the knee','Target the inner thigh, not the knee — knee contact risks injury.']
    ],
    tip: 'Deeper entry = more powerful reap — commit to going between uke\'s legs, not around them.'
  },
  'Hiza-guruma': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Move uke with circular footwork — step sideways to load one knee.'],
      ['directions_run','Contact','Place the sole of your foot flat against uke\'s knee from the outside.'],
      ['trending_up','Rotate','Rotate uke around the blocked knee with both hands — circular motion.']
    ],
    mistakes: [
      ['Kicking the knee','Contact is light — you\'re blocking, not kicking. Hands do the rotation.'],
      ['Static footwork','This throw needs movement — circular pull dictates the rotation.']
    ],
    tip: 'Think of the knee contact as a pivot point — your hands rotate uke around it like a wheel.'
  },
  'Sasae-tsuri-komi-ashi': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Draw uke forward and off balance with a lifting collar grip.'],
      ['directions_run','Block','Place the sole of your foot against uke\'s ankle — block it.'],
      ['trending_up','Rotate','Arms rotate uke forward over the blocked ankle.']
    ],
    mistakes: [
      ['Contact too high','Block the ankle, not the shin — higher contact doesn\'t stop the foot.'],
      ['No upward pull','The collar lift commits uke\'s weight forward onto the block.']
    ],
    tip: 'The ankle block is static — all the energy comes from your arms pulling uke forward and over.'
  },
  'Hane-goshi': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Pull uke forward and upward — lift them onto their toes.'],
      ['rotate_right','Entry','Pivot in deep, knee bent, coiling the spring.'],
      ['trending_up','Spring','Extend the bent leg explosively under uke\'s thighs.']
    ],
    mistakes: [
      ['Entering straight-legged','The bent knee is the spring — no bend means no power.'],
      ['Sweeping not springing','Hane = spring, not sweep — drive the knee up and out.']
    ],
    tip: 'Coil before you spring — the deeper the knee bend on entry, the more explosive the throw.'
  },
  'Okuri-ashi-barai': {
    cat: 'throw',
    steps: [
      ['front_hand','Movement','Create lateral movement — step uke sideways with footwork.'],
      ['directions_run','Timing','Sweep as uke\'s feet come together — both feet swept at once.'],
      ['trending_up','Sweep','Flat sweep across both ankles as they momentarily converge.']
    ],
    mistakes: [
      ['Sweeping one foot','Both feet must be swept when close together — targeting one misses entirely.'],
      ['Wrong timing','Too early or too late = feet are apart. Hit the moment of convergence.']
    ],
    tip: 'Watch uke\'s shoulders, not their feet — the shoulder dip tells you when the feet are close.'
  },
  'Morote-eri-seoi-nage': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Both hands grip the lapels — pull uke sharply forward.'],
      ['rotate_right','Entry','Pivot in — both elbows drive upward under uke\'s armpits at the collar.'],
      ['trending_up','Kake','Extend legs and rotate uke over both shoulders simultaneously.']
    ],
    mistakes: [
      ['Elbows too low','Drive elbows into the armpits — low elbows means uke doesn\'t go over.'],
      ['Half pivot','The collar grip limits rotation — commit to the full 180° turn.']
    ],
    tip: 'Compensate for the restricted shoulder rotation by driving elbows high and forward.'
  },

  // ── ORANGE → GREEN: KANSETSU-WAZA ─────────────────────────────
  'Juji-gatame': {
    cat: 'lock',
    steps: [
      ['front_hand','Control','Secure uke\'s arm with both hands — thumb side pointing up.'],
      ['lock','Position','Legs cross over uke\'s chest, pinching the upper arm between your thighs.'],
      ['trending_up','Extension','Lift hips upward — hip extension applies the armlock.']
    ],
    mistakes: [
      ['Thumb pointing down','Thumb must point up — thumb down rotates the elbow the wrong way.'],
      ['Pulling the arm','The lock comes from hip extension, not arm pulling — hips up.']
    ],
    tip: 'Squeeze knees together first to trap the arm, then extend the hips — the order matters.'
  },
  'Ude-gatame': {
    cat: 'lock',
    steps: [
      ['front_hand','Grip','Control uke\'s wrist with both hands, palm down.'],
      ['lock','Lever','Press down on the back of uke\'s elbow with your forearm or chest.'],
      ['trending_up','Apply','Straighten uke\'s arm fully while the lever pushes down.']
    ],
    mistakes: [
      ['Bending uke\'s arm','The lock requires a straight arm — any bend removes the lever action.'],
      ['Arm strength only','Use body weight to push the elbow down, not just arm force.']
    ],
    tip: 'Control the wrist first — the wrist controls the elbow, which controls the shoulder.'
  },
  'Waki-gatame': {
    cat: 'lock',
    steps: [
      ['front_hand','Trap','Grip uke\'s wrist and clamp their arm under your armpit tightly.'],
      ['lock','Step In','Step into uke — keep their arm straight and trapped.'],
      ['trending_up','Pressure','Drive your body weight down and forward — the armpit is the lever.']
    ],
    mistakes: [
      ['Loose armpit','The arm must be clamped tight — any gap removes the lock.'],
      ['Standing upright','Stay low and drive forward — standing releases the pressure.']
    ],
    tip: 'Apply decisively before uke can bend their elbow — hesitation lets them escape.'
  },
  'Hiza-gatame': {
    cat: 'lock',
    steps: [
      ['front_hand','Control','Sit back pulling uke\'s arm toward you — grip the wrist firmly.'],
      ['lock','Knee on arm','Place your knee on uke\'s upper arm just above the elbow.'],
      ['trending_up','Apply','Straighten uke\'s arm and press your knee down — lock engages.']
    ],
    mistakes: [
      ['Knee on the joint','Aim just above the elbow, not on the joint itself.'],
      ['Bent arm','Arm must be straight — bent arm means no lock, uke can resist.']
    ],
    tip: 'Control the wrist angle — wrist direction determines how effective the knee lever is.'
  },

  // ── GREEN → BLUE: TACHI-WAZA ───────────────────────────────────
  'Soto-maki-komi': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Pull uke forward and off their near side.'],
      ['rotate_right','Wrap','Pivot in and wrap your arm over uke\'s arm, trapping it to your side.'],
      ['trending_up','Sacrifice','Fall to your side — body weight takes uke in a rolling motion.']
    ],
    mistakes: [
      ['Loose arm wrap','The trapped arm must be clamped tight — loose wrap and uke steps out.'],
      ['Hesitating mid-roll','Hesitate and uke lands on top of you — commit fully through the technique.']
    ],
    tip: 'The winding is a sacrifice — fall decisively and trust the arm wrap to take uke down.'
  },
  'Tani-otoshi': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Draw uke forward as they load on one leg.'],
      ['directions_run','Sit-out','Step behind uke and sit your body down to the mat beside them.'],
      ['trending_up','Drop','Take uke backward and sideways over your extended leg.']
    ],
    mistakes: [
      ['Too far from uke','Your body must be tight to uke — sitting away means no transfer of force.'],
      ['Drop without pull','The arm pull must coordinate with the drop — drop alone scores nothing.']
    ],
    tip: 'Think "valley drop" — collapse uke into the valley between your legs and body.'
  },
  'Yoko-guruma': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Draw uke forward and to the side with a strong arm pull.'],
      ['rotate_right','Wrap','Drop to your side, wrapping your arm around uke\'s near hip or leg.'],
      ['trending_up','Roll','Roll uke over your body using the hip wrap and arm pull.']
    ],
    mistakes: [
      ['Half-hearted sacrifice','Commit fully — going halfway leaves both of you down with no score.'],
      ['Losing head control','The arm pull must control uke\'s upper body throughout the roll.']
    ],
    tip: 'Explosive commitment wins this throw — hesitation lets uke post a hand and block the roll.'
  },
  'Tomoe-nage': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Pull uke sharply forward and off balance.'],
      ['directions_run','Foot plant','Drop to your back — place one foot on uke\'s hip or lower abdomen.'],
      ['trending_up','Launch','Extend your leg to project uke over and beyond your head.']
    ],
    mistakes: [
      ['Foot too low','Foot must be on the hip, not the thigh — thigh placement sends uke sideways.'],
      ['Pulling before foot is set','Set the foot first, then straighten the leg — reverse order stalls the throw.']
    ],
    tip: 'The foot is a launch pad — place it firmly on the hip before you extend and uke will fly.'
  },
  'Yoko-tomoe-nage': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Pull uke diagonally forward to the side.'],
      ['directions_run','Foot plant','Drop to your side — near foot plants on uke\'s hip.'],
      ['trending_up','Rotate','Extend and rotate — uke goes sideways over you.']
    ],
    mistakes: [
      ['Treating it like front Tomoe','The diagonal pull is the difference — the angle dictates the throw direction.'],
      ['No hip rotation','Hip rotation during extension determines the side — don\'t stay static.']
    ],
    tip: 'Commit to the diagonal angle in your pull before you drop — everything follows from the kuzushi direction.'
  },
  'Uki-waza': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Lead uke diagonally forward with a circular pull.'],
      ['directions_run','Float','As uke steps in, step across them and begin to fall to your side.'],
      ['trending_up','Use momentum','Don\'t force it — let uke\'s forward energy carry them over.']
    ],
    mistakes: [
      ['Forcing the throw','Uki-waza is a floating throw — fighting uke kills it. Use their energy.'],
      ['Too early','The throw only works when uke is fully committed forward — wait for the step.']
    ],
    tip: 'Uki-waza works best when uke is attacking — redirect their forward energy sideways and over.'
  },

  // ── GREEN → BLUE: SHIME-WAZA ───────────────────────────────────
  'Okuri-eri-jime': {
    cat: 'strangle',
    steps: [
      ['front_hand','Grip','From behind: one hand grips deep on the near collar, palm in.'],
      ['lock','Cross','Slide the other hand across to grip the far collar.'],
      ['trending_up','Apply','Pull both elbows back and down — forearms press the carotids.']
    ],
    mistakes: [
      ['Shallow grips','Both hands need deep collar grips — shallow grips slide off under pressure.'],
      ['Pulling straight back','Pull back AND down simultaneously — back alone lifts the chin.']
    ],
    tip: 'Both forearms press the sides of the neck — compression, not choking, is the mechanism.'
  },
  'Nami-juji-jime': {
    cat: 'strangle',
    steps: [
      ['front_hand','Grip','Both thumbs inside the collar — cross your arms.'],
      ['lock','Knuckles','As you tighten, rotate knuckles inward to press the carotids.'],
      ['trending_up','Apply','Pull elbows outward in a scissors action — knuckles press in.']
    ],
    mistakes: [
      ['Grips too wide','Hands near the lapel edges miss the carotids with the knuckles.'],
      ['Pulling straight back','The action is outward scissors — spread the elbows.']
    ],
    tip: 'Think of squeezing two points on the neck at once — the cross grip is what makes the scissors work.'
  },
  'Gyaku-juji-jime': {
    cat: 'strangle',
    steps: [
      ['front_hand','Grip','Both hands grip collars with fingers inside — reverse cross.'],
      ['lock','Position','Apply from guard or side control.'],
      ['trending_up','Apply','Pull elbows down and out — wrists press into the neck.']
    ],
    mistakes: [
      ['Fingers outside','Fingers must be inside the collar — outside grip has no leverage.'],
      ['One hand only','One hand alone won\'t finish — both must pull equally.']
    ],
    tip: 'Set up Gyaku-juji with a feint — make uke defend one collar, then attack the other.'
  },
  'Kata-juji-jime': {
    cat: 'strangle',
    steps: [
      ['front_hand','Grip','One thumb-in on the near collar, other fingers-in on the far collar.'],
      ['lock','Half-cross','The asymmetric grip creates compression on one carotid.'],
      ['trending_up','Apply','Elbows pull outward — wrists cross against the throat.']
    ],
    mistakes: [
      ['Both thumbs or both fingers','Kata-juji needs one thumb-in, one fingers-in — the mixed grip creates the scissors.'],
      ['Same-side grips','Cross to the opposite collar — same side compresses front, not carotids.']
    ],
    tip: 'One thumb in, one fingers in — the asymmetry is the mechanism. Don\'t match the grip style.'
  },
  'Koshi-jime': {
    cat: 'strangle',
    steps: [
      ['front_hand','Setup','One forearm across uke\'s throat from behind.'],
      ['lock','Hip lever','Drive your hip into uke\'s back as you pull the choke arm in.'],
      ['trending_up','Apply','Pull the arm tight while pushing the hip forward — hip is the fulcrum.']
    ],
    mistakes: [
      ['Hip not engaged','The hip pressure makes Koshi-jime work — without it, it\'s just arm pressure.'],
      ['Forearm on windpipe','Press the carotid arteries on the side, not the windpipe directly.']
    ],
    tip: 'Think hip as fulcrum, arm as lever — more hip pressure means less arm effort needed.'
  },
  'Kata-te-jime': {
    cat: 'strangle',
    steps: [
      ['front_hand','Grip','One hand deep on the collar, thumb inside.'],
      ['lock','Secure body','Control uke\'s body with your weight — single hand means less grip.'],
      ['trending_up','Drive','Drive the knuckle into the carotid while pressing uke down.']
    ],
    mistakes: [
      ['Not securing uke','Pin their body first — a still uke makes a one-hand strangle far more effective.'],
      ['Windpipe pressure','Carotid pressure finishes — windpipe pressure just causes pain.']
    ],
    tip: 'Body weight does the work — immobilise uke fully before committing the single hand.'
  },

  // ── GREEN → BLUE: KANSETSU-WAZA ───────────────────────────────
  'Ude-garami': {
    cat: 'lock',
    steps: [
      ['front_hand','Grip','Grip uke\'s wrist with one hand, thread your other arm under theirs.'],
      ['lock','Figure-four','Form the figure-four — forearm under uke\'s upper arm, grip your own wrist.'],
      ['trending_up','Rotate','Rotate uke\'s arm inward and upward — shoulder joint engages.']
    ],
    mistakes: [
      ['Arm not at 90°','The elbow must be at approximately 90° — straighten it and the lock fails.'],
      ['Rotating outward','Inward rotation engages the lock — outward rotation does nothing.']
    ],
    tip: 'The name "entangled armlock" describes the figure-four — weave your arms together for an unbreakable grip.'
  },

  // ── BLUE → BROWN: TACHI-WAZA ──────────────────────────────────
  'Sode-tsuri-komi-goshi': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Grip both sleeves at the elbow — pull up and forward together.'],
      ['rotate_right','Entry','Pivot in, hip to hip, both arms driving upward from the sleeves.'],
      ['trending_up','Kake','Uncoil hips and pull both elbows — uke rotates over both arms.']
    ],
    mistakes: [
      ['Grips at the wrist','Grip the elbow area, not the wrist — wrist grips lose pulling leverage.'],
      ['Arms pulling down','Both arms pull upward and forward — pulling down stalls completely.']
    ],
    tip: 'The sleeve grips are lifting handles — pull them upward as you pivot, not forward.'
  },
  'Sumi-gaeshi': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Draw uke strongly forward — commit them over their toes.'],
      ['directions_run','Drop','Drop to your back, placing your foot on uke\'s inner thigh.'],
      ['trending_up','Extend','Extend your leg to throw uke over in a somersault arc.']
    ],
    mistakes: [
      ['Foot on the knee','The foot must go on the inner thigh — knee contact risks injury.'],
      ['Holding both hands','As uke goes over, one hand may need to release to protect your shoulder.']
    ],
    tip: 'Sumi-gaeshi works best combined with Uchi-mata — make uke defend the reap, then sacrifice.'
  },
  'Yoko-gake': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Pull uke laterally with a strong sideways arm movement.'],
      ['directions_run','Hook','Hook your near foot behind uke\'s near ankle from outside.'],
      ['trending_up','Fall','Fall into uke — body weight sweeps them sideways.']
    ],
    mistakes: [
      ['Hook on calf','Hook the ankle — calf hook lets uke step over it.'],
      ['Falling away','Fall into uke, not away — falling away removes the sweeping force.']
    ],
    tip: 'Yoko-gake is a hip sacrifice — your falling weight generates the sweep, not the foot alone.'
  },
  'Ko-uchi-gake-maki-komi': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Pull uke forward to load their near leg.'],
      ['directions_run','Hook and wrap','Hook the inner ankle (Ko-uchi) while simultaneously wrapping the arm (maki-komi).'],
      ['trending_up','Sacrifice','Fall to the side — hook and wrap combine to take uke down.']
    ],
    mistakes: [
      ['Sequential not simultaneous','The hook and wrap must happen together — delay either one and uke defends both.'],
      ['Loose arm wrap','The winding arm must be tight — loose wrap loses the binding effect.']
    ],
    tip: 'One combined action — hook-AND-wrap at the exact same instant, then fall.'
  },
  'Ushiro-goshi': {
    cat: 'throw',
    steps: [
      ['front_hand','Counter','As uke loads a hip throw, sink your hips below theirs.'],
      ['rotate_right','Lift','Reach around uke\'s waist from behind — straighten your legs.'],
      ['trending_up','Throw','Drive forward and down — throw uke forward over your hip.']
    ],
    mistakes: [
      ['Hips too high','You must get under uke\'s hips — if yours are above, lifting is impossible.'],
      ['Lift without forward drive','Lifting alone takes uke off the mat but doesn\'t score — drive forward.']
    ],
    tip: 'Ushiro-goshi punishes hip throws — the moment uke loads their hip, sink, wrap, and explode.'
  },
  'Ura-nage': {
    cat: 'throw',
    steps: [
      ['front_hand','Wrap','As uke attacks forward, wrap both arms around their waist from behind.'],
      ['rotate_right','Arch','Arch your back explosively — lift uke off the mat, arching overhead.'],
      ['trending_up','Drive','Drive uke onto their back behind you — commit with your hips.']
    ],
    mistakes: [
      ['Timid arch','Half-hearted arch lands uke on top of you — commit fully.'],
      ['Arms only','The arch uses your entire body — hips drive forward, back extends.']
    ],
    tip: 'Ura-nage demands full commitment — once you wrap, there is no half measure. Arch fully.'
  },
  'Uki-otoshi': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Pull uke forward in a large, continuous circular arc.'],
      ['directions_run','Drop','Drop to one knee in the direction of the pull.'],
      ['trending_up','Float','Use pure momentum — uke floats over the drop without body contact.']
    ],
    mistakes: [
      ['Body contact','This is an arm-pull throw only — body contact changes it to O-goshi.'],
      ['Stopping the pull','The circular motion must be continuous — stopping kills uke\'s momentum.']
    ],
    tip: 'Strong enough circular kuzushi makes the throw almost happen by itself — it\'s all in the pull.'
  },
  'Koshi-guruma': {
    cat: 'throw',
    steps: [
      ['front_hand','Kuzushi','Pull uke forward and across with both arms.'],
      ['rotate_right','Entry','Pivot in — arm wraps around the back of uke\'s neck (not the shoulder).'],
      ['trending_up','Kake','Rotate uke\'s body around your hip using the neck grip.']
    ],
    mistakes: [
      ['Arm on the shoulder','The arm goes around the neck — shoulder grip loses the rotation.'],
      ['Shallow entry','Hip must be in front of uke\'s — shallow entry stalls.']
    ],
    tip: 'The neck grip locks uke\'s upper body tightly — it\'s the key difference from O-goshi.'
  },

  // ── BLUE → BROWN: SHIME-WAZA ──────────────────────────────────
  'Kata-ha-jime': {
    cat: 'strangle',
    steps: [
      ['front_hand','Setup','From behind uke — thread one arm under their arm from below.'],
      ['lock','Wing','Thread the under-arm hand behind uke\'s neck — creating a single wing.'],
      ['trending_up','Apply','Other arm grips deep on the collar — pull collar arm back, push wing forward.']
    ],
    mistakes: [
      ['Under-arm not high enough','The threading arm must go behind the neck — under the armpit only creates a pin.'],
      ['Releasing the collar grip','The collar grip drives the force — releasing it gives uke an escape window.']
    ],
    tip: 'Kata-ha-jime catches uke reaching out of Kesa-gatame — trap the arm the moment it lifts.'
  },
  'Hadaka-jime': {
    cat: 'strangle',
    steps: [
      ['front_hand','Position','From behind uke — one forearm across the throat.'],
      ['lock','Figure-four','Choking hand grips the other forearm — figure-four at the throat.'],
      ['trending_up','Apply','Pull elbow back and down while the support hand pushes the choke arm in.']
    ],
    mistakes: [
      ['Forearm on windpipe','Press the carotids on the side — windpipe pressure causes pain but not finish.'],
      ['Chin tucked by uke','Control the head first — tucked chin blocks the choke.']
    ],
    tip: 'Use rear mount hooks to control uke\'s posture before applying — posture control makes it effortless.'
  },
  'San-gaku-jime': {
    cat: 'strangle',
    steps: [
      ['front_hand','Triangle','Throw your legs around uke\'s neck and one arm — forming a triangle.'],
      ['lock','Lock','Place the back of one knee in the crook of the other — triangle locked.'],
      ['trending_up','Finish','Squeeze the knees, pull the head down, angle hips for pressure.']
    ],
    mistakes: [
      ['Wrong arm inside','The trapped arm must be inside with the neck — neck only means no strangle.'],
      ['Legs not locked','The knee-in-crook lock is essential — unlocked legs open and uke escapes.']
    ],
    tip: 'Angle your hips 30–45° away from uke once locked — this cuts off blood flow far more effectively.'
  },
  'San-gaku-gatame': {
    cat: 'hold',
    steps: [
      ['front_hand','Triangle','Secure the triangle position — neck and arm inside.'],
      ['lock','Arm control','Pull the trapped arm across your chest — elbow hyperextension threat.'],
      ['check_circle','Double threat','Maintain both strangle AND armlock simultaneously.']
    ],
    mistakes: [
      ['Only one attack','San-gaku-gatame threatens both — use both to create a dilemma.'],
      ['Losing the triangle lock','Keep the knee locked throughout — open triangle loses both attacks.']
    ],
    tip: 'Attack both targets — uke defends the choke, the elbow becomes exposed, and vice versa.'
  },
  'San-gaku-osae-gatame': {
    cat: 'hold',
    steps: [
      ['front_hand','Triangle','Form the locked triangle around uke\'s neck and arm.'],
      ['lock','Roll','Roll uke onto their back from the triangle position.'],
      ['check_circle','Pin','Use the triangle as a hold-down — uke is pinned on their back.']
    ],
    mistakes: [
      ['Rolling without locked triangle','Lock must be secure before rolling — open triangle during roll is lost.'],
      ['Forgetting the legs','After rolling, use your free leg to control uke\'s legs.']
    ],
    tip: 'The san-gaku-osae is a pin AND a threat — uke knows you can squeeze at any moment.'
  },

  // ── RED BELT: TRANSITIONS ────────────────────────────────────────
  'Osoto-otoshi into Kesa-gatame': {
    cat: 'hold',
    steps: [
      ['trending_up','Throw','Execute Osoto-otoshi — drop uke straight back.'],
      ['directions_run','Follow','Step forward immediately as uke hits — don\'t pause at kake.'],
      ['lock','Settle','Drop into Kesa-gatame before uke can turn — hip glued to their ribs.']
    ],
    mistakes: [
      ['Pausing after the throw','Any hesitation lets uke roll away — transition is one continuous motion.'],
      ['Landing too far','Step in close — Kesa-gatame requires tight hip-to-ribs contact.']
    ],
    tip: 'The throw and the hold are one movement. As your foot drops them, your body is already moving in.'
  },
  'Deashi-barai into Mune-gatame': {
    cat: 'hold',
    steps: [
      ['trending_up','Sweep','Execute Deashi-barai — sweep the foot as uke\'s weight transfers.'],
      ['directions_run','Move','Slide forward along uke\'s side as they fall.'],
      ['lock','Cross','Lie chest-to-chest across uke and grip behind both shoulders.']
    ],
    mistakes: [
      ['Stopping at mat level','Keep moving forward as uke falls — meet them on the way down.'],
      ['Getting the angle wrong','Mune-gatame is perpendicular to uke — slide along their side, not behind them.']
    ],
    tip: 'Aim to land perpendicular across uke\'s chest — the sweep direction naturally sets you up for this.'
  },
  'Uki-goshi into Kuzure-kesa-gatame': {
    cat: 'hold',
    steps: [
      ['trending_up','Throw','Execute Uki-goshi — swing uke over the hip.'],
      ['rotate_right','Turn','As uke lands, turn to face their head and drop beside them.'],
      ['lock','Secure','Control their near arm under yours, wrap your arm around their head.']
    ],
    mistakes: [
      ['Losing grip on landing','Maintain grip throughout — your sleeve arm transitions into the hold.'],
      ['Settling too upright','Kuzure-kesa control comes from staying low and tight to uke.']
    ],
    tip: 'Kuzure-kesa is a scarf variant — uke\'s arm is trapped under your armpit, not just held.'
  },

  // ── RED BELT: ESCAPES ───────────────────────────────────────────
  'Escape from Kesa-gatame by trapping Uke\'s leg': {
    cat: 'hold',
    steps: [
      ['directions_run','Bridge','Bridge hard to shift tori\'s weight — create a small gap.'],
      ['front_hand','Trap','Reach over and hook tori\'s near leg with your inside arm.'],
      ['rotate_right','Roll','Pull the leg toward you and roll tori over — turn into them.']
    ],
    mistakes: [
      ['Bridging without the hook','The bridge alone won\'t escape — you must capture the leg simultaneously.'],
      ['Pulling the leg sideways','Pull the leg toward your own body to roll tori over — not sideways.']
    ],
    tip: 'Bridge to shift their weight off you, hook the leg in the same moment, then roll — it\'s one fluid action.'
  },
  'Escape from Mune-gatame using a bridge and roll action': {
    cat: 'hold',
    steps: [
      ['front_hand','Frame','Place forearms against tori\'s hips to create space.'],
      ['directions_run','Bridge','Drive your hips up explosively — force tori\'s weight to shift.'],
      ['rotate_right','Roll','Shrimp and roll toward tori as their weight tips — turn in.']
    ],
    mistakes: [
      ['Bridging straight up','Bridge diagonally toward tori — straight up just dumps you back down.'],
      ['Not using the frame','Framing with your arms stops tori resetting — hold the frame throughout.']
    ],
    tip: 'Your bridge moves their centre of gravity — the instant it tips, commit to the roll before they recover.'
  },
  'Escape from Kuzure-kesa-gatame using sit up and push': {
    cat: 'hold',
    steps: [
      ['front_hand','Free the arm','Work your trapped arm out — wriggle the elbow downward.'],
      ['directions_run','Sit up','Curl up explosively — drive your elbow toward tori\'s face.'],
      ['check_circle','Push off','Push tori away and come up to your knees.']
    ],
    mistakes: [
      ['Pulling the arm back','Pull and wriggle the elbow down and out — pulling back traps it worse.'],
      ['Slow sit-up','Explosive sit-up takes tori by surprise — slow and steady doesn\'t work here.']
    ],
    tip: 'Freeing your arm is the entire escape — once it\'s out, the sit-up has nothing to resist.'
  },

  // ── RED BELT: PERSONAL CHOICE ─────────────────────────────────
  'One additional tachi-waza of choice': {
    cat: 'throw',
    steps: [
      ['sports_martial_arts','Choose','Pick a throw from your belt syllabus that suits your body type.'],
      ['repeat','Drill','Drill the entry (uchi-komi) at least 50 reps per session.'],
      ['check_circle','Apply','Attempt it in light randori — refine based on what works.']
    ],
    mistakes: [
      ['Choosing for style not fit','Pick a throw that uses your strengths — tall? hip throws. Quick? foot sweeps.'],
      ['Skipping uchi-komi','Entry drilling is everything — a perfect throw comes from a perfect entry.']
    ],
    tip: 'Your personal choice throw becomes your tokui-waza (favourite technique) — make it yours.'
  },
  'One additional ne-waza of choice': {
    cat: 'hold',
    steps: [
      ['sports_martial_arts','Choose','Select one ground technique you want to make reliable.'],
      ['repeat','Drill','Practice entries and escapes for that technique repeatedly.'],
      ['check_circle','Apply','Use it in ne-waza randori — see what adjustments you need.']
    ],
    mistakes: [
      ['Changing too often','Stick with one technique until it works — don\'t keep switching.'],
      ['Only practising the hold','Practise how you get there — entries are as important as the technique itself.']
    ],
    tip: 'A ne-waza technique you truly own is worth more than five you sort of know.'
  },

  // ── YELLOW BELT: TRANSITIONS ─────────────────────────────────
  'Tai-otoshi → Yoko-shiho-gatame': {
    cat: 'hold',
    steps: [
      ['trending_up','Throw','Execute Tai-otoshi — drive uke over your outstretched leg.'],
      ['directions_run','Pivot','As uke hits the mat, pivot to face them and drop to your knees.'],
      ['lock','Pin','Slide over uke\'s body into Yoko-shiho-gatame — chest on chest, control both sides.']
    ],
    mistakes: [
      ['Releasing the grip','Maintain your sleeve grip — it guides you into position on the mat.'],
      ['Sitting too high','Your chest must be flat on uke\'s — stay horizontal, not kneeling upright.']
    ],
    tip: 'Tai-otoshi throws uke away from you — you must move quickly to close the gap and pin.'
  },
  'Ippon-seoi-nage → Kami-shiho-gatame': {
    cat: 'hold',
    steps: [
      ['trending_up','Throw','Execute Ippon-seoi-nage — roll uke over your shoulder.'],
      ['directions_run','Circle','Step around to uke\'s head as they land.'],
      ['lock','Pin','Lie chest-down over their head, reach under both armpits, grip belt or jacket.']
    ],
    mistakes: [
      ['Walking too far around','Two steps maximum — move quickly before uke can roll to their side.'],
      ['Hips too high','Drive your hips down toward uke\'s head — weight forward, not kneeling up.']
    ],
    tip: 'The throw sends uke away from you — circle around their head and come down heavy on top.'
  },
  'Ouchi-gari → Tate-shiho-gatame': {
    cat: 'hold',
    steps: [
      ['trending_up','Reap','Execute Ouchi-gari — drive uke backward and down.'],
      ['directions_run','Follow','Step forward and down as uke falls — don\'t stop at kake.'],
      ['lock','Mount','Land chest-to-chest in Tate-shiho-gatame, knees squeezing uke\'s hips.']
    ],
    mistakes: [
      ['Landing beside uke','Ouchi-gari drops uke under you — follow their fall direction and land on top.'],
      ['Loose knees','Knee pressure on uke\'s hips prevents the bridge — squeeze throughout.']
    ],
    tip: 'Ouchi-gari naturally sets up a forward fall — ride it straight down into the mounted position.'
  },

  // ── YELLOW BELT: NE-WAZA ESCAPES & TURNOVERS ────────────────────
  'Escape from Kami-shiho-gatame (action & reaction)': {
    cat: 'hold',
    steps: [
      ['front_hand','Grip','Grip both of tori\'s sleeves at the elbow — control their arms.'],
      ['directions_run','Bridge','Bridge hard to one side, pulling one of tori\'s arms across their body.'],
      ['rotate_right','Roll','As tori reacts to resist, reverse the direction and roll the other way.']
    ],
    mistakes: [
      ['Bridging without grips','Gripping the sleeves is essential — it turns their arm control against them.'],
      ['Committing only one direction','Action-reaction means feinting one way — the escape is the reversal.']
    ],
    tip: 'Make tori move first. Bridge one way to force a reaction, then immediately exploit that reaction.'
  },
  'Escape from Tate-shiho-gatame (clamp & roll)': {
    cat: 'hold',
    steps: [
      ['front_hand','Clamp','Trap one of tori\'s arms by clamping it to your body with both arms.'],
      ['directions_run','Bridge','Explosively bridge to the side of the trapped arm.'],
      ['rotate_right','Roll','Roll tori over the clamped arm — they cannot post that arm to stop the fall.']
    ],
    mistakes: [
      ['Clamping loosely','The arm must be completely locked — any slack and tori will pull it free.'],
      ['Rolling the wrong way','Always roll toward the trapped arm — it removes their main base.']
    ],
    tip: 'Remove one of tori\'s four posts (hands and knees) and the mount becomes unstable — one arm clamped equals one post gone.'
  },
  'Escape from Yoko-shiho-gatame (trap, bridge & roll)': {
    cat: 'hold',
    steps: [
      ['front_hand','Trap','Hook the near leg of tori with your inside arm.'],
      ['directions_run','Bridge','Bridge explosively, pulling the leg toward you.'],
      ['rotate_right','Roll','Roll tori over your body using the leg hook — come up on top.']
    ],
    mistakes: [
      ['Reaching over the top','Hook under tori\'s thigh, not over their hip — you need the knee, not the waist.'],
      ['Slow bridge','Speed is critical — a slow bridge gives tori time to base out and reset.']
    ],
    tip: 'Think of it as pulling tori\'s base out from under them — the leg hook removes their anchor point.'
  },
  'Turnover into Kesa-gatame (uke all fours)': {
    cat: 'hold',
    steps: [
      ['directions_run','Position','Approach uke from the side while they are on all fours.'],
      ['front_hand','Drive','Drive your shoulder into their near shoulder, push them sideways.'],
      ['lock','Settle','As uke tips over, drop into Kesa-gatame alongside them.']
    ],
    mistakes: [
      ['Pushing from behind','Side pressure is more effective — pushing from behind just drives them forward.'],
      ['Losing contact','Stay glued to uke throughout the turnover — gaps let them resist.']
    ],
    tip: 'Shoulder drives shoulder — align your shoulder with theirs and drive in the direction they\'re already moving.'
  },
  'Turnover into Mune-gatame (uke all fours)': {
    cat: 'hold',
    steps: [
      ['directions_run','Position','Come to uke\'s side, reach under their far arm.'],
      ['front_hand','Pull','Pull the far arm toward you and press down on their back.'],
      ['lock','Cross','As uke rolls, cross over their body into Mune-gatame.']
    ],
    mistakes: [
      ['Reaching over the body','Reach under the armpit, not over the top — under-the-arm gives you leverage.'],
      ['Stopping mid-roll','Commit through the entire roll — pausing halfway lets uke recover base.']
    ],
    tip: 'Threading your arm under their armpit means wherever they go, you can follow — use it as a handle.'
  },
  'Turnover into Yoko-shiho-gatame (uke face-down)': {
    cat: 'hold',
    steps: [
      ['directions_run','Position','Approach from the side — uke face down.'],
      ['front_hand','Thread','Reach under uke\'s near arm and across to grip the far collar.'],
      ['lock','Roll','Pull the collar toward you and roll uke over onto their back, following into Yoko-shiho.']
    ],
    mistakes: [
      ['Pulling straight up','Pull diagonally across uke\'s body — straight up just lifts them.'],
      ['Not completing the pin','Continue the roll all the way through — stop at their back, not on their side.']
    ],
    tip: 'The collar grip is your steering wheel — pull across their body toward your hip, not upward.'
  },

  // ── YELLOW BELT: KUMI-KATA & RANDORI ────────────────────────────
  'Standard grips — right and left': {
    cat: 'throw',
    steps: [
      ['front_hand','Right natural','Right hand grips uke\'s left lapel at chest height. Left hand grips the right sleeve at the elbow.'],
      ['swap_horiz','Left natural','Mirror image — left hand on lapel, right hand on sleeve.'],
      ['check_circle','Quality','Grip with the fingers, not the palm — tighter, less fatigue.']
    ],
    mistakes: [
      ['Gripping with the palm','Palm grips tire quickly and have less control — use the fingers and base of the thumb.'],
      ['High collar grip too early','High collar is an advanced grip — start with the standard lapel to build the habit.']
    ],
    tip: 'A good grip is the first half of every throw. If your kumi-kata is weak, your technique will always be limited.'
  },
  'Right vs left, double lapel, high collar grips': {
    cat: 'throw',
    steps: [
      ['swap_horiz','Kenka-yotsu','When right vs left — expect more space and awkward angles. Adjust footwork.'],
      ['front_hand','Double lapel','Both hands on lapels — good for controlling posture, limited for throwing.'],
      ['trending_up','High collar','Same-side hand grips behind the collar — increases forward kuzushi but tires the grip.']
    ],
    mistakes: [
      ['Not adjusting to left-handers','Right vs left changes the whole geometry — you need a different entry strategy.'],
      ['Holding high collar too long','High collar drains grip strength fast — use it as a temporary weapon, not a default.']
    ],
    tip: 'Different grips change what attacks are available. Learn to feel which throws are open from each grip situation.'
  },
  'Nage-komi in light randori': {
    cat: 'throw',
    steps: [
      ['repeat','Uchi-komi first','Drill the entry 10–15 times to warm up the movement pattern.'],
      ['sports_martial_arts','Light randori','Move with a partner at 50% — create situations to attempt your techniques.'],
      ['check_circle','Commit','When the opportunity appears, commit fully — no half-throws.']
    ],
    mistakes: [
      ['Randori too hard','Light randori is for technique — competition pace makes you revert to muscle and forget timing.'],
      ['Only defending','You must create and attempt attacks — passive randori builds no offensive skill.']
    ],
    tip: 'Think of light randori as moving uchi-komi — you\'re testing your setups, not trying to win.'
  },
  'One additional tachi-waza of choice': {
    cat: 'throw',
    steps: [
      ['sports_martial_arts','Choose','Pick a throw from your belt syllabus that suits your body type.'],
      ['repeat','Drill','Drill the entry (uchi-komi) at least 50 reps per session.'],
      ['check_circle','Apply','Attempt it in light randori — refine based on what works.']
    ],
    mistakes: [
      ['Choosing for style not fit','Pick a throw that uses your strengths — tall? hip throws. Quick? foot sweeps.'],
      ['Skipping uchi-komi','Entry drilling is everything — a perfect throw comes from a perfect entry.']
    ],
    tip: 'Your personal choice throw becomes your tokui-waza (favourite technique) — make it yours.'
  },
  'One additional ne-waza of choice': {
    cat: 'hold',
    steps: [
      ['sports_martial_arts','Choose','Select one ground technique you want to make reliable.'],
      ['repeat','Drill','Practice entries and escapes for that technique repeatedly.'],
      ['check_circle','Apply','Use it in ne-waza randori — see what adjustments you need.']
    ],
    mistakes: [
      ['Changing too often','Stick with one technique until it works — don\'t keep switching.'],
      ['Only practising the hold','Practise how you get there — entries are as important as the technique itself.']
    ],
    tip: 'A ne-waza technique you truly own is worth more than five you sort of know.'
  },

  // ── ORANGE BELT: COMBINATIONS ───────────────────────────────────
  'Ouchi-gari → Ko-uchi-gari': {
    cat: 'throw',
    steps: [
      ['trending_up','Attack right','Drive Ouchi-gari at uke\'s right leg — force them to step back left.'],
      ['swap_horiz','Read reaction','As uke steps back with the left foot, their weight shifts forward over it.'],
      ['directions_run','Attack left','Immediately Ko-uchi-gari that left foot — the weight transfer makes it easy.']
    ],
    mistakes: [
      ['Same-direction combo','Both attacks go to different legs — the reaction to one creates the opportunity for the other.'],
      ['Pausing between attacks','Combinations have no pause — the second attack starts as the first finishes.']
    ],
    tip: 'Ouchi-gari makes uke step. Ko-uchi-gari catches the step. Learn to feel the step before you see it.'
  },
  'Ko-uchi-gari → O-soto-gari or O-soto-gake': {
    cat: 'throw',
    steps: [
      ['front_hand','Ko-uchi first','Attack Ko-uchi-gari to uke\'s front foot — drive them back.'],
      ['directions_run','Read the step','Uke steps back with the rear leg to escape — that leg is now loaded.'],
      ['trending_up','O-soto finish','Drive into O-soto-gari or O-soto-gake on that loaded back leg.']
    ],
    mistakes: [
      ['Weak Ko-uchi','If Ko-uchi doesn\'t threaten, uke won\'t react — the first attack must be committed.'],
      ['Wrong foot for O-soto','O-soto attacks the leg uke just stepped back with — make sure it\'s the right one.']
    ],
    tip: 'Ko-uchi makes uke go backward. O-soto punishes backward. They are made for each other.'
  },
  'Ko-uchi-gari → Morote-seoi-nage': {
    cat: 'throw',
    steps: [
      ['front_hand','Ko-uchi feint','Attack Ko-uchi to uke\'s front foot — make them think about their feet.'],
      ['directions_run','Uke stands tall','Uke pulls their foot back and stands upright to defend.'],
      ['trending_up','Seoi entry','Their upright posture opens their centre — drive straight in for Morote-seoi-nage.']
    ],
    mistakes: [
      ['Not committing the Ko-uchi','A half-hearted Ko-uchi won\'t make uke react — step in and make it real.'],
      ['Late seoi entry','Uke\'s upright posture is brief — enter the moment they stand tall.']
    ],
    tip: 'Ko-uchi pulls uke\'s attention down to their feet. Seoi-nage attacks when their mind is on the floor.'
  },
  'Ippon-seoi-nage → Ko-uchi-gari': {
    cat: 'throw',
    steps: [
      ['directions_run','Seoi entry','Begin Ippon-seoi-nage entry — drive in and load uke on your back.'],
      ['swap_horiz','Uke defends','Uke steps forward to stuff the throw — their front foot is now loaded.'],
      ['front_hand','Ko-uchi finish','Drop out of the entry and Ko-uchi-gari the loaded front foot.']
    ],
    mistakes: [
      ['Abandoning the entry too early','Commit far enough to force a reaction — pull out too soon and uke doesn\'t move.'],
      ['Forgetting to drop low','Ko-uchi after a failed seoi entry needs you to drop your level instantly.']
    ],
    tip: 'Failed throws create opportunities. When uke steps forward to block the seoi, that step is the Ko-uchi target.'
  },
  'Any technique combined with Seoi-otoshi or Ko-uchi-gari': {
    cat: 'throw',
    steps: [
      ['sports_martial_arts','Choose your base','Pick your primary technique — the one you want uke to defend against.'],
      ['swap_horiz','Identify the reaction','Decide in advance what Seoi-otoshi or Ko-uchi-gari will catch.'],
      ['trending_up','Drill the combination','Repeat the pairing until the transition feels automatic.']
    ],
    mistakes: [
      ['No clear plan','Know which reaction you\'re looking for — random combination attempts waste energy.'],
      ['Both techniques at 50%','Each technique must be fully committed — a weak first attack creates no reaction.']
    ],
    tip: 'Seoi-otoshi and Ko-uchi-gari are ideal combination finishers because they attack the reaction — not the original position.'
  },

  // ── ORANGE BELT: COUNTERS ────────────────────────────────────────
  'Ouchi-gari countered by Tsurikomi-goshi': {
    cat: 'throw',
    steps: [
      ['front_hand','Read Ouchi','Feel uke driving their reaping leg in — their weight commits forward.'],
      ['rotate_right','Step across','Step your outside foot across uke\'s centreline as their leg commits.'],
      ['trending_up','Tsurikomi-goshi','Pull up on the collar (tsuri) and pull forward on the sleeve (komi) — load and throw.']
    ],
    mistakes: [
      ['Stepping too late','The counter must start as uke\'s leg commits — too late and their weight has already shifted.'],
      ['Forgetting the pull','Tsurikomi-goshi is a lifting-pulling throw — weak arm action kills the throw.']
    ],
    tip: 'Ouchi-gari drives uke\'s weight forward over the reaping leg — step into that forward momentum with the hip.'
  },
  'Tai-otoshi countered by Ko-soto-gari or Ko-soto-gake': {
    cat: 'throw',
    steps: [
      ['front_hand','Feel the entry','Sense uke pivoting in for Tai-otoshi — their back is turning to you.'],
      ['directions_run','Step outside','Step to uke\'s outside, past their extended blocking leg.'],
      ['trending_up','Ko-soto finish','Reap or hook the back heel with Ko-soto-gari or Ko-soto-gake.']
    ],
    mistakes: [
      ['Stepping into the throw','Moving away from uke\'s extended leg is the whole counter — step past it.'],
      ['No upper body control','The arm pull must accompany the reap — body throw needs both.']
    ],
    tip: 'Tai-otoshi\'s blocking leg is its weakness — step outside it and you remove the entire mechanism of the throw.'
  },

  // ── ORANGE BELT: NE-WAZA ─────────────────────────────────────────
  'Escape from Kesa-gatame (bridge & roll)': {
    cat: 'hold',
    steps: [
      ['front_hand','Free the arm','Slide your trapped arm down and out — work the elbow out first.'],
      ['directions_run','Bridge into tori','Bridge explosively toward tori — not straight up.'],
      ['rotate_right','Roll','As tori tips, continue the roll — come up on top or to your knees.']
    ],
    mistakes: [
      ['Bridging away from tori','You bridge toward tori to roll them — bridging away just lifts you.'],
      ['Arm not free first','Freeing the arm is the priority — without it, you cannot complete the roll.']
    ],
    tip: 'Think "into them, over them" — the bridge is toward tori, never straight up.'
  },
  'Move into Kesa-gatame from between uke\'s legs': {
    cat: 'hold',
    steps: [
      ['directions_run','Position','Start between uke\'s legs — uke face up.'],
      ['front_hand','Thread','Slide to uke\'s side, driving your hip past their thigh.'],
      ['lock','Settle','Control the head-and-arm as you clear their legs and settle into Kesa-gatame.']
    ],
    mistakes: [
      ['Rushing the slide','Explosive lateral movement — if you go slowly, uke will trap your arm or leg.'],
      ['Losing the head','Head control comes first — without it, uke can post and prevent the pin.']
    ],
    tip: 'Drive your hip through — it\'s a decisive lateral movement, not a gentle slide.'
  },
  'Move into Yoko-shiho-gatame from between uke\'s legs': {
    cat: 'hold',
    steps: [
      ['directions_run','Position','Start between uke\'s legs, hands on their hips.'],
      ['front_hand','Pass','Drive forward over one of uke\'s legs to the side.'],
      ['lock','Pin','Settle into Yoko-shiho — chest flat, control both sides.']
    ],
    mistakes: [
      ['Passing slowly','Any hesitation lets uke frame and prevent the pass — be explosive.'],
      ['High hips','Keep hips low throughout the pass — high hips let uke replace the guard.']
    ],
    tip: 'The pass is like a plank falling to one side — drive your whole body over, committed and low.'
  },
  'Arm roll — uke approaching from front': {
    cat: 'hold',
    steps: [
      ['front_hand','Control arm','As uke reaches across from the front, grip their near wrist.'],
      ['rotate_right','Thread','Duck under their arm and thread your body underneath it.'],
      ['lock','Roll','Continue rotating, rolling uke over your body onto their back.']
    ],
    mistakes: [
      ['Losing the wrist','The wrist grip controls the whole movement — don\'t let go.'],
      ['Rolling sideways','Roll under and through the arm — you\'re creating a spiral motion, not a lateral roll.']
    ],
    tip: 'The arm roll works with gravity — guide uke over you, don\'t force them.'
  },
  'Arm roll — uke approaching from behind': {
    cat: 'hold',
    steps: [
      ['front_hand','Grip','Grip uke\'s wrist as their arm comes over your shoulder from behind.'],
      ['rotate_right','Duck under','Drop your level and duck under the arm.'],
      ['lock','Roll','Spiral uke over your shoulder onto their back.']
    ],
    mistakes: [
      ['Standing tall','You must duck under the arm — staying upright means you can\'t thread through.'],
      ['Losing the wrist grip','The wrist is your lever — losing it means losing the whole roll.']
    ],
    tip: 'Drop your level suddenly — uke\'s arm is the axle, your movement is the wheel turning around it.'
  },
  'Turnover from underneath into Tate-shiho-gatame': {
    cat: 'hold',
    steps: [
      ['directions_run','Create space','From underneath uke, bump your hips to make space.'],
      ['rotate_right','Half guard','Work to half-guard — one leg over uke\'s thigh to control them.'],
      ['lock','Sweep','Bridge and roll uke over — follow them up into Tate-shiho-gatame.']
    ],
    mistakes: [
      ['No hip bump','Without creating space first, the sweep has nothing to work with.'],
      ['Not following the roll','As uke rolls over, follow them immediately — hesitation loses the position.']
    ],
    tip: 'Getting to half guard is the turning point — from there, you have leverage. Get there first, sweep second.'
  },
  'Randori demonstration': {
    cat: 'throw',
    steps: [
      ['sports_martial_arts','Move','Keep moving — constant footwork, never static.'],
      ['front_hand','Grip fight','Work to get your preferred grip while breaking uke\'s attacks.'],
      ['trending_up','Attack','Commit to attempts — the examiner wants to see genuine throws, not caution.']
    ],
    mistakes: [
      ['Being passive','Standing and waiting shows nothing — you must initiate attacks.'],
      ['One-dimensional','Use tachi-waza and ne-waza — demonstrate range, not just one technique.']
    ],
    tip: 'Randori is not winning — it is performing. Show movement, grip work, attacks, and ne-waza transitions.'
  },
  'Two tachi-waza of choice': {
    cat: 'throw',
    steps: [
      ['sports_martial_arts','Choose wisely','Pick techniques that complement each other — one forward, one sideways or backward.'],
      ['repeat','Drill both','Minimum 30 uchi-komi reps per session for each chosen technique.'],
      ['check_circle','Combine','Practise using them as a combination — first choice sets up the second.']
    ],
    mistakes: [
      ['Both from the same direction','Two throws in the same direction don\'t help each other — diversify.'],
      ['Never combing them','Two separate techniques are fine. Two that work together are a weapon.']
    ],
    tip: 'Think of your two choices as a question and an answer — one forces a reaction, the other scores from it.'
  },
  'One ne-waza of choice': {
    cat: 'hold',
    steps: [
      ['sports_martial_arts','Choose','Pick the ground technique that most naturally follows your throws.'],
      ['repeat','Entry drill','Practice the entry from a throw — not just the technique in isolation.'],
      ['check_circle','Apply','Use it in live groundwork practice and refine what isn\'t working.']
    ],
    mistakes: [
      ['Picking the hardest technique','Pick what\'s reliable, not impressive — you need it to work under pressure.'],
      ['Skipping the entry','A technique you can only do when handed the position is only half a technique.']
    ],
    tip: 'Your ne-waza choice should extend your tachi-waza — the throw puts uke in a position, the ground technique finishes it.'
  },

  // ── GREEN BELT: JUJI-GATAME ENTRIES ─────────────────────────────
  'Juji-gatame — sit-back entry': {
    cat: 'lock',
    steps: [
      ['front_hand','Control arm','From tachi-waza or ne-waza, secure uke\'s arm with both hands — thumb up.'],
      ['directions_run','Sit back','Step your far leg across uke\'s face and sit back rapidly, pulling the arm into your hips.'],
      ['lock','Extend','Squeeze knees, extend hips, pull the arm toward your chest — controlled, sustained pressure.']
    ],
    mistakes: [
      ['Arm not thumb-up','Elbow must face up — if it faces down, the lock works on the wrong joint.'],
      ['Knees apart','Knees together on uke\'s arm control direction and prevent the arm being pulled free.']
    ],
    tip: 'The sit-back is explosive — you must be all the way down before uke can react. Half-committed means uke escapes.'
  },
  'Juji-gatame — rollover entry': {
    cat: 'lock',
    steps: [
      ['front_hand','Grip arm','Control uke\'s arm in your armpit — both hands secure.'],
      ['rotate_right','Roll over','Roll forward over uke, pulling the arm across your chest as you go.'],
      ['lock','Finish','Land with uke\'s arm across your hips, knees squeezed, extend to apply the lock.']
    ],
    mistakes: [
      ['Rolling without arm control','The arm must be clamped before the roll — if it slips, uke escapes.'],
      ['Landing on the side','Roll to flat on your back — landing on your side weakens the armlock position.']
    ],
    tip: 'The roll momentum carries both of you — use uke\'s weight to help you rotate, don\'t fight against it.'
  },
  'Juji-gatame — over-the-shoulder entry': {
    cat: 'lock',
    steps: [
      ['front_hand','Grip arm','Control uke\'s straight arm at the wrist — thumb up.'],
      ['directions_run','Step over','Step your near leg over uke\'s head, sit to the mat.'],
      ['lock','Apply','Squeeze knees, extend hips upward — steady increasing pressure on the elbow.']
    ],
    mistakes: [
      ['Stepping onto the head','Step over the head, not onto it — contact must be thigh on neck, not foot on face.'],
      ['Jerking the arm','Apply pressure gradually and steadily — jerking risks injury and uke may panic.']
    ],
    tip: 'Control the wrist throughout — the moment you lose the wrist, you lose the lock.'
  },
  'Juji-gatame — entry from beneath': {
    cat: 'lock',
    steps: [
      ['front_hand','From guard','Uke is in your guard — grip their sleeve and pull their arm straight.'],
      ['rotate_right','Hip out','Open guard, swing hips out to the arm side.'],
      ['lock','Triangle the legs','Swing your top leg over uke\'s head and lock the triangle, extend hips.']
    ],
    mistakes: [
      ['Arm not straight','A bent arm cannot be locked — straighten it before applying leg control.'],
      ['Hips not moved out','Hip movement creates the angle — without it, you cannot get the leg over.']
    ],
    tip: 'Get the arm straight first, then move your hips — in that order. Skipping the first step means the lock won\'t work.'
  },
  'Four techniques — 2 combinations, 2 counters, 2 ne-waza transitions': {
    cat: 'throw',
    steps: [
      ['sports_martial_arts','Combos','Choose two throw combinations — attacks where one reaction leads to the second technique.'],
      ['swap_horiz','Counters','Choose two counter attacks — throws that catch a specific attack from uke.'],
      ['lock','Ne-waza','Choose two transitions — throws that land uke in position for a ground technique.']
    ],
    mistakes: [
      ['Not connecting them','Each pair must be logically linked — random techniques don\'t demonstrate understanding.'],
      ['Only drilling standing','Practise each one from live situations, not just static demonstration.']
    ],
    tip: 'The examiner wants to see that you understand how judo connects — throw creates opening, opening becomes finish.'
  },

  // ── BLUE BELT: NE-WAZA / SHIME-WAZA SITUATIONS ──────────────────
  'Ude-garami from Kuzure-kesa-gatame': {
    cat: 'lock',
    steps: [
      ['lock','In kuzure-kesa','While holding Kuzure-kesa-gatame, feel uke push upward with their trapped arm.'],
      ['front_hand','Figure four','Thread your arm under uke\'s elbow — form a figure-four grip on your own forearm.'],
      ['trending_up','Rotate','Rotate uke\'s elbow upward and outward — controlled, steady rotation.']
    ],
    mistakes: [
      ['Losing the pin','Maintain Kuzure-kesa pressure while applying the lock — uke gets 20 seconds of hold first.'],
      ['Fast rotation','Ude-garami is a subtle lock — slow rotation with no jerk is safe and effective.']
    ],
    tip: 'The lock appears naturally from the hold — when uke pushes their arm up to escape, thread underneath it.'
  },
  'Koshi-jime — Uke attempts Seoi-otoshi': {
    cat: 'strangle',
    steps: [
      ['front_hand','Grip collar','As uke ducks for Seoi-otoshi, get your arm around their neck from behind.'],
      ['lock','Hook the hip','Thread your forearm across uke\'s throat and grip their far hip or belt.'],
      ['trending_up','Sit through','Sit through between uke\'s legs — your hip drives the choke as you descend.']
    ],
    mistakes: [
      ['Missing the duck','You must anticipate the Seoi entry — a late reaction means uke already has the position.'],
      ['Not sitting through','The hip action is what creates the choke — leaning forward doesn\'t produce pressure.']
    ],
    tip: 'Koshi-jime works because uke has compromised their neck by ducking — you are exploiting the bent-forward posture.'
  },
  'Kata-te-jime — Uke in all fours position': {
    cat: 'strangle',
    steps: [
      ['front_hand','Approach from above','Come over uke\'s back from behind — chest over their shoulders.'],
      ['lock','Thread one hand','Thread one hand under the neck, gripping the far collar.'],
      ['trending_up','Single hand choke','Apply pressure by pulling the collar toward you with one hand and pushing uke\'s head forward with the other.']
    ],
    mistakes: [
      ['Grip too low','Grip at the side of the neck on the collar — low grips slide away without producing a choke.'],
      ['Sitting up off uke','Keep your body weight on uke\'s back — if you rise, they can escape easily.']
    ],
    tip: 'The collar must press against the carotid artery — position it at the neck, not the chest.'
  },
  'Nami-juji-jime — Uke underneath (between Tori\'s legs)': {
    cat: 'strangle',
    steps: [
      ['front_hand','Mount position','Be in Tate-shiho-gatame (mount) — uke face up beneath you.'],
      ['lock','Cross collar','Both hands grip uke\'s collar — palms down, thumbs inside the collar.'],
      ['trending_up','Squeeze','Cross your wrists and squeeze your elbows toward each other — the cross-wrist action closes the collar.']
    ],
    mistakes: [
      ['Palms up','Nami-juji-jime is palms down — palms up is Gyaku-juji. Wrong grip changes the whole mechanic.'],
      ['Elbows out','Elbows must move inward and down — flaring them out releases the choke.']
    ],
    tip: 'Think scissors — your crossed wrists cut like scissor blades as the elbows drive toward the floor.'
  },
  'Gyaku-juji-jime — Uke on top (between Tori\'s legs)': {
    cat: 'strangle',
    steps: [
      ['front_hand','From guard','Uke is in your closed guard — pull them down onto your chest.'],
      ['lock','Reverse collar grip','Both hands grip uke\'s collar — palms up, thumbs outside.'],
      ['trending_up','Squeeze','Drive elbows to the floor and pull the collar edges apart — this closes the collar on the carotids.']
    ],
    mistakes: [
      ['Palms down','Gyaku-juji is palms up — reversed from Nami-juji. Check the grip before applying.'],
      ['Uke too upright','Pull uke down flat onto your chest — the choke doesn\'t work from a distance.']
    ],
    tip: 'Pull uke\'s posture completely flat onto you before applying — if there\'s any space between you, the choke is empty.'
  },
  'Okuri-eri-jime — Uke makes Seoi-otoshi': {
    cat: 'strangle',
    steps: [
      ['front_hand','Read the Seoi','As uke ducks in for Seoi-otoshi, get your forearm across their throat from behind.'],
      ['lock','Slide the collar','Slide your choking hand along uke\'s collar as their head drops — the collar tightens across their neck.'],
      ['trending_up','Squeeze and extend','Squeeze both arms together and lean back slightly to apply the sliding collar choke.']
    ],
    mistakes: [
      ['Static grip','The "okuri" means sliding — the hand must travel along the collar as uke drops, not grip and hold.'],
      ['Choking too high','The forearm presses on the neck, not the jaw — aim for the carotid artery, not the chin.']
    ],
    tip: 'The beauty of Okuri-eri-jime is that uke\'s own throwing movement tightens the collar for you — let them do the work.'
  },

  // ── BROWN BELT: COMBINATIONS & COUNTERS ─────────────────────────
  'Sumi-gaeshi — two variations': {
    cat: 'throw',
    steps: [
      ['directions_run','Variation 1','From a close grip, sit back and sacrifice — hook one inner thigh with your foot and drive uke over.'],
      ['rotate_right','Variation 2','From a bear-hug position, slide to guard and roll uke directly over your head.'],
      ['check_circle','Key difference','Variation 1 uses a foot hook on the inner thigh. Variation 2 relies on momentum and head control.']
    ],
    mistakes: [
      ['Weak sacrifice','Both versions require total commitment — half-sacrificing results in landing underneath uke.'],
      ['Poor upper body pull','The arms direct where uke goes — drive them over your head, not to the side.']
    ],
    tip: 'Sumi-gaeshi succeeds because uke feels secure and doesn\'t expect you to go to the floor — use their confidence against them.'
  },
  'Ushiro-goshi as counter to Harai-goshi': {
    cat: 'throw',
    steps: [
      ['front_hand','Feel Harai entry','Uke pivots in and drives their sweeping leg — feel the hip load.'],
      ['directions_run','Squat and wrap','Immediately bend your knees and wrap both arms around uke\'s waist from behind.'],
      ['trending_up','Lift and throw','Straighten your legs explosively — lift uke off the floor and throw them behind you.']
    ],
    mistakes: [
      ['Standing when countering','Bend your knees immediately — if you stay upright, uke\'s hip throw succeeds.'],
      ['Weak wrap','Get both arms all the way around the waist — a half-wrap has no lifting power.']
    ],
    tip: 'Uke commits their weight forward in Harai-goshi. Drop your level, wrap, and use their committed weight to throw them behind.'
  },
  'Sumi-gaeshi as combination with Uchi-mata': {
    cat: 'throw',
    steps: [
      ['directions_run','Uchi-mata first','Drive Uchi-mata — uke blocks by spreading their stance wide.'],
      ['front_hand','Enter Sumi-gaeshi','Step inside between uke\'s legs and hook their inner thigh.'],
      ['trending_up','Sacrifice','Sit back and roll uke over — their wide base makes them vulnerable to sacrifice.']
    ],
    mistakes: [
      ['Slow transition','The combination is fast — uke\'s wide base is a brief window, not a permanent opening.'],
      ['Wrong entry for Sumi','You must step between the legs — entering from the outside won\'t get the inner thigh hook.']
    ],
    tip: 'Uchi-mata forces uke to spread their base. Sumi-gaeshi exploits that wide base — they\'re solving one problem and creating another.'
  },
  'Counter Koshi-guruma with Ura-nage': {
    cat: 'throw',
    steps: [
      ['front_hand','Feel the entry','Uke loads their hip for Koshi-guruma — feel the hip making contact.'],
      ['directions_run','Step around','Step your far foot outside and behind uke\'s planted foot.'],
      ['trending_up','Arch and throw','Drive your hip forward and arch backward, scooping uke over and behind you.']
    ],
    mistakes: [
      ['Countering too late','You must feel the hip entry and respond immediately — uke already loaded means it\'s too late.'],
      ['Not arching fully','Ura-nage requires a committed backward arch — a partial arch drops both of you straight down.']
    ],
    tip: 'Uke\'s hip commit means their weight is forward. Step around them, get behind their centre of gravity, and arch — they have nowhere to go.'
  },

  // ── BROWN BELT: NE-WAZA / SHIME-WAZA ────────────────────────────

  'San-gaku-jime — complex entry': {
    cat: 'strangle',
    steps: [
      ['front_hand','Arm and head','Trap one of uke\'s arms and their head in your guard — arm across your body.'],
      ['rotate_right','Triangle legs','Swing one leg over uke\'s neck and lock — one arm inside, one outside.'],
      ['lock','Squeeze','Squeeze knees together and extend hips upward — keep the trapped arm on the inside.']
    ],
    mistakes: [
      ['Both arms inside','Exactly one arm trapped inside — two arms inside kills the choke.'],
      ['Feet not locked','Crossed feet are weaker — foot of top leg hooks behind knee of bottom leg.']
    ],
    tip: 'The triangle is tighter than it feels from inside — small hip extension adjustments add significant pressure.'
  },
  'San-gaku-gatame — complex entry': {
    cat: 'lock',
    steps: [
      ['front_hand','Set triangle','Establish the triangular leg lock around uke\'s arm and neck.'],
      ['rotate_right','Turn 90 degrees','Turn 90 degrees to face away from uke\'s feet — this exposes the elbow.'],
      ['lock','Armlock','Pull the trapped arm toward you while extending your hips — simultaneous strangle and armlock.']
    ],
    mistakes: [
      ['Not turning','The turn is essential — without it you cannot access the elbow.'],
      ['Releasing hip tension','Maintain triangle tension throughout the turn — releasing lets uke escape.']
    ],
    tip: 'San-gaku-gatame combines two submissions simultaneously — uke cannot defend both. The turn activates the armlock.'
  },
  'San-gaku-osae-gatame — turnover and hold': {
    cat: 'hold',
    steps: [
      ['front_hand','Triangle locked','Establish the full triangle from guard with uke in your legs.'],
      ['rotate_right','Roll uke','While maintaining the triangle, roll uke onto their back.'],
      ['lock','Hold down','Use the triangle as a pin — uke cannot escape without tapping.']
    ],
    mistakes: [
      ['Rolling with loose triangle','Triangle must be tight before the roll — loose means uke escapes during rotation.'],
      ['Not using body weight','After the roll, lie into the triangle — your weight keeps uke pinned.']
    ],
    tip: 'The san-gaku-osae is a pin with a built-in threat. Even if not tight, uke stays still because they do not know how tight it is.'
  },
  'Hadaka-jime — Uke prone position': {
    cat: 'strangle',
    steps: [
      ['front_hand','Over the shoulder','Come from above — chest on uke\'s back, get your arm under their chin.'],
      ['lock','Bare choke','One forearm presses across the throat. Other hand grips the choking forearm.'],
      ['trending_up','Squeeze back','Pull your choking arm back toward your own chest — forearm and bicep together.']
    ],
    mistakes: [
      ['Arm on the chin','The forearm must be below the chin on the throat — on the chin produces pain, not a choke.'],
      ['Pulling sideways','Pull the arm directly backward toward your chest — sideways loses the line.']
    ],
    tip: 'Hadaka-jime is called "naked" because there is no gi grip — clean arm mechanics are everything.'
  },
  'Kata-ha-jime — Uke all fours position': {
    cat: 'strangle',
    steps: [
      ['front_hand','One arm under','From behind uke on all fours, thread one arm under their armpit from below.'],
      ['lock','Hand behind head','Bring that hand up and place it flat behind uke\'s head.'],
      ['trending_up','Other arm choke','Thread your other arm across the throat — the armpit arm forces the shoulder forward, tightening the choke.']
    ],
    mistakes: [
      ['Hand on top of head','Hand behind the neck, not on top — on top creates a headlock, not a choke.'],
      ['Shoulder not driven forward','The mechanism relies on forcing the shoulder forward — without it there is no closing force.']
    ],
    tip: 'The arm under the armpit is your lever — it pries the shoulder forward, which tightens the choking arm automatically.'
  },
  'OR: One set of Nage-no-kata or Katame-no-kata': {
    cat: 'throw',
    steps: [
      ['sports_martial_arts','Choose kata','Nage-no-kata: 5 groups of 3 throws with a partner. Katame-no-kata: 5 holds, 5 strangles, 5 armlocks.'],
      ['repeat','Learn the sequence','Kata has a fixed order — tori and uke have defined movements. Precision matters as much as technique.'],
      ['check_circle','Perform','Both partners bow, move to positions, execute each technique with full form, bow at the end.']
    ],
    mistakes: [
      ['Rushing the sequence','Kata is deliberate — each technique has a rhythm. Hurrying looks wrong.'],
      ['Uke being passive','Uke has an active role — they attack first, their movement sets up the response.']
    ],
    tip: 'Kata is judo as art. The examiner looks at precision, form, and the relationship between tori and uke.'
  },

  // ── toBlue: Green → Blue Belt ──────────────────────────────────────────

  'Soto-maki-komi': {
    cat: 'throw',
    steps: [
      ['pan_tool','Wrap the arm','From a standard grip, drive your throwing arm over and around uke\'s near arm, winding it tightly against your body.'],
      ['directions_run','Step across and fall','Step your leading leg across uke\'s body, then fall sideways — your body weight and the winding action pulls uke over.'],
      ['rotate_right','Complete the rotation','As you land on your side, maintain the winding grip and continue rotating to drive uke onto their back.']
    ],
    mistakes: [
      ['Arm not fully wound','A loose wrap lets uke escape — the arm must be pinned tightly to your body before you fall.'],
      ['Falling too early','Commit to the step across first — falling before you have position means the throw has no direction.']
    ],
    tip: 'This is a sacrifice throw driven by winding, not by a hip turn. Think of screwing uke into the mat as you fall.'
  },

  'Tani-otoshi': {
    cat: 'throw',
    steps: [
      ['directions_run','Step deep behind','Step your rear leg behind both of uke\'s legs, positioning your foot between their heels.'],
      ['arrow_downward','Drop straight down','Sit your hips down to the mat directly behind uke — do not lean or pull sideways first.'],
      ['open_with','Pull back and over','Simultaneously pull uke\'s upper body back over your dropping hips to complete the throw.']
    ],
    mistakes: [
      ['Not dropping straight down','Leaning to the side before dropping kills the throw — the drop must be directly back between uke\'s legs.'],
      ['Poor kuzushi','Uke must be off-balance backwards before you step — attacking a stable uke just bounces off.']
    ],
    tip: 'Tani-otoshi works best when uke is resisting forwards — use their backwards counter-pressure as the trigger to drop.'
  },

  'Yoko-guruma': {
    cat: 'throw',
    steps: [
      ['360','Drive in low and sideways','Shoot your body in front of uke at hip height, wrapping one arm around their waist or hips.'],
      ['rotate_right','Rotate and fall to the side','Pull uke forward over your body as you fall to your side — the motion is a side wheel rolling uke over.'],
      ['sports_martial_arts','Follow through','Maintain your grip as uke goes over — rolling onto your knees puts you straight into ne-waza position.']
    ],
    mistakes: [
      ['Too upright on entry','You need to drive low — going in too high means uke\'s weight pins you rather than goes over you.'],
      ['Losing the waist grip','The throw is driven by your arm around the waist — releasing it mid-throw loses all control.']
    ],
    tip: 'Think of Yoko-guruma as a side version of Tomoe-nage. The wheel motion is everything — pull uke over, not just down.'
  },

  'Tomoe-nage': {
    cat: 'throw',
    steps: [
      ['directions_run','Draw uke forward','Pull uke sharply forward and down to break their balance — they should be bending towards you.'],
      ['sports_martial_arts','Place your foot and drop','As you draw them in, sit back and place your foot (tsugi-ashi) into uke\'s stomach or hip — not the groin.'],
      ['open_with','Extend and throw','Roll back onto your shoulders, extend your leg powerfully upwards, and use your grip to direct uke overhead onto their back.']
    ],
    mistakes: [
      ['Foot in wrong position','Foot too high or low loses the lift. Aim for the lower abdomen — this gives maximum leverage.'],
      ['Not rolling back far enough','If you stay sitting you can\'t extend the leg fully. Roll back onto your shoulder blades.']
    ],
    tip: 'The throw is in the leg extension combined with the pull — one without the other just puts you on your back. Time them together.'
  },

  'Yoko-tomoe-nage': {
    cat: 'throw',
    steps: [
      ['turn_slight_right','Draw uke to one side','Pull uke forward and slightly to your side — creating diagonal off-balance rather than straight forward.'],
      ['sports_martial_arts','Place foot into the hip','Drop to the side and place your foot into uke\'s hip on the same side — not into the stomach as in standard Tomoe-nage.'],
      ['rotate_right','Rotate and extend','Extend your leg to the side and upward as you roll, throwing uke over your body diagonally.']
    ],
    mistakes: [
      ['Using the wrong foot','For Yoko-tomoe-nage the foot goes into the hip, not the stomach — the angle changes the throw completely.'],
      ['Going straight back','The side angle is the key difference — dropping straight back turns it into standard Tomoe-nage.']
    ],
    tip: 'Yoko-tomoe-nage is useful when uke blocks your entry straight ahead — the diagonal entry goes around their resistance.'
  },

  'Uki-waza': {
    cat: 'throw',
    steps: [
      ['arrow_forward','Move to uke\'s side','Step to the side of uke as they advance, drawing them forward and slightly past you.'],
      ['arrow_downward','Fall to your side','Drop to your side onto the mat — your fall is the throwing action, not a hip turn.'],
      ['pan_tool','Sweep the lead leg','As you fall, sweep uke\'s near leg forward with your lower leg while your hands direct their upper body down.']
    ],
    mistakes: [
      ['Attacking without movement','Uki-waza only works when uke is already moving — attempting it on a static uke does nothing.'],
      ['Falling forward instead of sideways','The fall must be directly sideways so your sweep meets uke\'s moving leg.']
    ],
    tip: 'Uki means "floating" — the throw happens because uke is mid-step. Catch them at the moment of least support.'
  },

  'Okuri-eri-jime': {
    cat: 'strangle',
    steps: [
      ['back_hand','Get behind uke','Establish a position behind uke — from turtle, from the side, or by rolling behind during groundwork.'],
      ['pan_tool','Reach both collar grips','One hand reaches across uke\'s collar (deep grip, thumb inside), the other grips the near collar.'],
      ['fitness_center','Slide and squeeze','Pull the cross-collar hand back towards you and press the near-collar elbow down — the sliding action closes the strangle.']
    ],
    mistakes: [
      ['Elbows too wide','Flaring elbows lets uke create space. Drive both elbows down and in as you apply the squeeze.'],
      ['Not getting behind','This strangle only works from behind — attempting it from the front has no mechanism.']
    ],
    tip: 'The "okuri" (sliding) element means one collar slides across the throat. The nearer arm controls uke\'s posture while the cross arm closes the choke.'
  },

  'Nami-juji-jime': {
    cat: 'strangle',
    steps: [
      ['pan_tool','Cross your hands — thumbs in','Reach both hands to uke\'s collar with your thumbs inside (normal cross grip). Right hand to uke\'s right collar, left to left.'],
      ['fitness_center','Pull elbows to your hips','Drive both elbows down towards your own hips — this closes the collar across the carotids.'],
      ['check_circle','Maintain until submission','Hold position with consistent pressure — do not release and re-apply.']
    ],
    mistakes: [
      ['Pushing instead of pulling','The strangle is applied by pulling the elbows back towards your body — pushing with the wrists just bends the collar.'],
      ['Shallow grip','Fingers need to be deep in the collar past the lapel edge — a shallow grip has nothing to close.']
    ],
    tip: 'Juji-jime strangles are most effective from Kesa-gatame or mounted position — uke\'s weight on their back opens the collar for entry.'
  },

  'Gyaku-juji-jime': {
    cat: 'strangle',
    steps: [
      ['pan_tool','Cross your hands — fingers in','Reach both hands to uke\'s collar with fingers inside (reverse grip). Right hand to uke\'s left collar, left to right.'],
      ['fitness_center','Drive elbows outward and back','Unlike Nami, this version tightens by rotating your wrists out and pulling back — the reverse grip creates a different closing mechanism.'],
      ['check_circle','Control and hold','Stabilise your body weight over uke and maintain consistent pressure until submission.']
    ],
    mistakes: [
      ['Confusing it with Nami-juji-jime','The grip is opposite — fingers in not thumbs in. Wrong grip reduces the strangle effect significantly.'],
      ['Wrists not rotating','The mechanism of Gyaku requires wrist rotation as you pull — without rotation it feels like a weak grab.']
    ],
    tip: 'Gyaku-juji-jime tends to come on faster than Nami because the wrist rotation creates a tighter, more immediate closing action.'
  },

  'Kata-juji-jime': {
    cat: 'strangle',
    steps: [
      ['pan_tool','Mixed grip — one thumb in, one out','One hand takes the collar with thumb inside (as Nami) and the other with fingers inside (as Gyaku) — one of each.'],
      ['fitness_center','Apply asymmetric closing pressure','Pull both elbows back towards your body — the mixed grip creates a diagonal closure across the throat.'],
      ['check_circle','Hold and control','Maintain position and pressure. The asymmetry means it can be effective when uke defends against standard juji-jime.']
    ],
    mistakes: [
      ['Taking the same grip on both sides','Both grips the same makes it either Nami or Gyaku — the defining feature of Kata is the mixed grip.'],
      ['Not accounting for the angle','The mixed grip closes at a slight angle — position your body weight to complement that direction.']
    ],
    tip: 'Kata-juji-jime is a useful variation when uke knows to defend Nami and Gyaku — the half-and-half grip comes from an unexpected angle.'
  },

  'Koshi-jime': {
    cat: 'strangle',
    steps: [
      ['pan_tool','Get one collar grip and hook the hip','From behind or the side, take a deep collar grip and place your hip against the side of uke\'s neck.'],
      ['fitness_center','Use your hip as the pressure point','Drive your hip into uke\'s neck/jaw area while pulling the collar tight — the hip provides the closing force against one carotid.'],
      ['check_circle','Hold the position','Keep your body turned so the hip stays engaged. Combined with the collar grip, the dual pressure closes off blood flow.']
    ],
    mistakes: [
      ['Hip too low','The hip must be against the neck, not the shoulder — too low and there\'s no pressure on the carotid.'],
      ['Relying only on the collar grip','Koshi-jime is a combination of collar and hip pressure — the hip is what makes it different from standard juji-jime.']
    ],
    tip: 'This strangle is particularly effective from a modified Kesa-gatame where your hip is naturally positioned against uke\'s neck area.'
  },

  'Kata-te-jime': {
    cat: 'strangle',
    steps: [
      ['pan_tool','One deep collar grip','From behind uke, reach one arm deep across the throat and grab the far collar with thumb inside.'],
      ['fitness_center','Use forearm across the throat','The pressure comes from your forearm bone (radius) pressing across the carotids — the hand grips for control, not pressure.'],
      ['check_circle','Pull back and hold','Pull your elbow back towards your own hip while keeping your forearm pressed across uke\'s throat.']
    ],
    mistakes: [
      ['Squeezing with the hand','The strangle isn\'t applied by gripping hard — it\'s the forearm pressing across the throat. Gripping hand exhausts the arm.'],
      ['Allowing uke to tuck their chin','If uke gets their chin down before the grip is set, the throat is protected. Apply quickly as their head is still exposed.']
    ],
    tip: 'Kata-te-jime is fastest from behind — get one arm across the throat before uke can defend, then the hold becomes very difficult to break.'
  },

  'Ude-garami': {
    cat: 'lock',
    steps: [
      ['pan_tool','Control uke\'s wrist','From a hold-down position, take control of uke\'s near wrist — press it to the mat with their elbow bent at roughly 90°.'],
      ['fitness_center','Figure-4 grip','Thread your near arm under uke\'s elbow and grip your own wrist (or uke\'s wrist) — forming a figure-4 with both arms.'],
      ['arrow_upward','Drive the wrist down and out','Lever the figure-4 by driving uke\'s wrist towards the mat while lifting their elbow — this rotates the shoulder joint to submission.']
    ],
    mistakes: [
      ['Elbow angle wrong','The elbow must be at 90° or less for the lock to work — a straight arm means Juji-gatame is more appropriate.'],
      ['Lifting the elbow instead of driving the wrist','The mechanism is wrist down, elbow up — reversing this reduces leverage and allows uke to roll.']
    ],
    tip: 'Ude-garami is most commonly set up from Kesa-gatame or Kami-shiho-gatame when uke reaches up to try to push your head away.'
  },

  'Ude-garami from Kuzure-kesa-gatame': {
    cat: 'lock',
    steps: [
      ['sports_martial_arts','Hold in Kuzure-kesa','Establish Kuzure-kesa-gatame — your arm under uke\'s arm, their near arm trapped.'],
      ['pan_tool','Wait for uke\'s arm push','When uke reaches their free hand up to your head or face to escape, that arm is now available for the lock.'],
      ['fitness_center','Apply Ude-garami','Figure-4 the reaching arm — thread your arm under their elbow, grip your wrist, drive their wrist down to apply the lock.']
    ],
    mistakes: [
      ['Setting up too early','If you hunt for the arm before uke offers it, you lose the hold. Wait for their escape attempt.'],
      ['Losing the Kesa hold','Transitioning to the lock without maintaining base can let uke escape before the lock is set.']
    ],
    tip: 'This is a reactive technique — the hold forces the escape, and the escape sets up the lock. Patience wins here.'
  },

  'Koshi-jime — Uke attempts Seoi-otoshi': {
    cat: 'strangle',
    steps: [
      ['sports_martial_arts','Uke gets under you for Seoi-otoshi','Uke attempts to throw with Seoi-otoshi — they bend forward and drop under, putting you across their back.'],
      ['pan_tool','Reach over and grab the collar','As uke bends forward, reach over their back with one arm and take a deep collar grip near the neck.'],
      ['fitness_center','Apply Koshi-jime as they straighten','When uke tries to stand or complete the throw, use their body movement to tighten the hip strangle — their own effort closes the choke.']
    ],
    mistakes: [
      ['Waiting too long','The window to apply the strangle is while uke is bent — too slow and uke completes the throw.'],
      ['Not controlling their hips','Wrapping a leg around uke\'s hips stops them completing the throw and gives you time to set the choke.']
    ],
    tip: 'This is a counter-attack — uke\'s Seoi-otoshi drops them right into your strangle. It\'s one of judo\'s most satisfying transitions.'
  },

  'Kata-te-jime — Uke in all fours position': {
    cat: 'strangle',
    steps: [
      ['sports_martial_arts','Uke is on all fours (turtle position)','Uke is defending in the turtle — head down, hands and knees on the mat.'],
      ['pan_tool','Approach from the side or front','Come to uke\'s side or front, reach under or around their neck to access the collar.'],
      ['fitness_center','Apply Kata-te-jime from the side','Thread one arm under uke\'s chin for the collar grip and apply the one-arm strangle — their turtle posture actually makes the throat accessible.']
    ],
    mistakes: [
      ['Reaching over the top of the head','Going over the top telegraphs the attack and gives uke time to tuck their chin. Come from the front or side.'],
      ['Not controlling their posture first','If uke can still move freely in turtle they will roll away. Control their hips before applying the strangle.']
    ],
    tip: 'Uke\'s turtle position keeps their head down but can expose the side of the neck — approach from the front and thread under the chin.'
  },

  'Nami-juji-jime — Uke underneath (between Tori\'s legs)': {
    cat: 'strangle',
    steps: [
      ['sports_martial_arts','Mount uke (uke between your legs)','Achieve a mounted position — kneel over uke with your legs on either side of their body.'],
      ['pan_tool','Take the cross-collar grips','With thumbs in, take Nami-juji-jime grips — reach deep to both collar points.'],
      ['fitness_center','Lean forward and apply','Lean your upper body forward over uke\'s chest as you drive the elbows down — your body weight assists the strangle.']
    ],
    mistakes: [
      ['Sitting up straight','Sitting upright while applying reduces the mechanical advantage. Leaning forward presses your weight through the grips.'],
      ['Mount too high','Sitting too far up on uke\'s chest means they can bridge and roll. Stay low over the hips.']
    ],
    tip: 'From the mount, Nami-juji-jime is one of the highest-percentage submissions in judo ne-waza. Your body weight does most of the work.'
  },

  'Gyaku-juji-jime — Uke on top (between Tori\'s legs)': {
    cat: 'strangle',
    steps: [
      ['sports_martial_arts','Uke is on top in your guard','You are on your back with uke between your legs — defensive guard position.'],
      ['pan_tool','Take the Gyaku collar grips','Fingers inside both collars — reach deep before uke can posture up and break your grip.'],
      ['fitness_center','Pull uke down and apply','Pull uke\'s posture down towards you using your legs and grips, then drive the elbows back to close the strangle.']
    ],
    mistakes: [
      ['Letting uke posture up','If uke straightens their back your grips become ineffective. Use your legs to keep them pulled close.'],
      ['Applying without pulling uke down first','The strangle from guard only works with uke close to your body — at distance there is no closing pressure.']
    ],
    tip: 'Guard strangles are a green/blue belt weapon — at this level opponents don\'t expect attacks from the bottom. Set the grips early.'
  },

  'Okuri-eri-jime — Uke makes Seoi-otoshi': {
    cat: 'strangle',
    steps: [
      ['sports_martial_arts','Uke attempts Seoi-otoshi from ne-waza','From groundwork, uke tries a Seoi-style turnover — bending forward and going under you.'],
      ['pan_tool','Follow uke over their back','Rather than resisting, go with uke\'s movement — roll over their back with them.'],
      ['fitness_center','Apply Okuri-eri-jime from behind','As you roll, thread your arms to both collars and slide one arm across to complete the strangle as you land behind uke.']
    ],
    mistakes: [
      ['Resisting the turnover','Fighting against uke\'s Seoi movement misses the opportunity — go with it and you end up in a perfect strangle position.'],
      ['Losing back position on landing','The strangle only works from behind — if you land to the side, readjust before applying.']
    ],
    tip: 'This is a classic judo principle: use uke\'s attack against them. Their Seoi-otoshi attempt puts them in the ideal position for your Okuri-eri-jime.'
  },

  'Randori demonstration': {
    cat: 'throw',
    steps: [
      ['sports_martial_arts','Show active judo','Randori is free practice. At grading level the examiner looks for genuine attacking intent — look for throws, not survival.'],
      ['repeat','Apply your techniques','Use the throws and ne-waza from your syllabus under randori pressure. Techniques you\'ve drilled should emerge naturally.'],
      ['check_circle','Demonstrate control','Show that you can attack, defend, and transition between tachi-waza and ne-waza smoothly.']
    ],
    mistakes: [
      ['Stalling or defending only','Examiners fail candidates who only defend. You must show attacking judo even if attempts are unsuccessful.'],
      ['Randori partner awareness','Your partner\'s grade matters — adapt your approach but keep attacking intent regardless.']
    ],
    tip: 'Randori at grading is about showing your judo, not winning. Attack confidently, accept being thrown, get up and attack again.'
  },

  'Four techniques — 2 combinations, 2 counters, 2 ne-waza transitions': {
    cat: 'throw',
    steps: [
      ['sports_martial_arts','Choose techniques that suit you','Select 2 combinations (A into B), 2 counters (respond to uke\'s attack with a throw), and 2 ne-waza transitions (throw into groundwork or ground-to-ground).'],
      ['repeat','Drill them until they\'re automatic','Personal choice techniques should be your best work — practise them until they feel completely natural under pressure.'],
      ['check_circle','Demonstrate with intent','Show each technique clearly at grading: set it up, execute with intent, and explain if asked why you chose it.']
    ],
    mistakes: [
      ['Choosing techniques you can\'t reliably do','Pick the techniques that work for you in randori, not the most impressive-sounding ones.'],
      ['Not practising the ne-waza transitions','Throw-to-groundwork transitions are often neglected. Practise going straight from the throw into a hold or lock.']
    ],
    tip: 'Your personal choice tells the examiner what kind of judoka you are. Choose techniques that reflect your game and show them at their best.'
  },

  'Gyaku-juji-jime — Reverse Cross Strangle': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Gyaku = Reverse, Juji = Cross/Figure-10, Jime = Strangle. A cross-collar strangle applied with fingers inside the collar (thumbs out).'],
      ['sports_martial_arts','When used','Applied from mounted position or from guard. The fingers-inside grip closes differently from Nami-juji-jime.'],
      ['check_circle','Remember','The difference between Nami and Gyaku is the direction the thumbs point — in (Nami) or out (Gyaku).']
    ],
    mistakes: [['Confusing with Nami','Nami = thumbs in. Gyaku = fingers in (thumbs out). Remember: Gyaku means reverse — the grip is reversed.'],['—','—']],
    tip: 'Gyaku-juji-jime.'
  },

  'Kaeshi-waza — Counter Techniques': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Kaeshi = Counter/Return, Waza = Technique. Techniques performed in direct response to uke\'s attack.'],
      ['sports_martial_arts','How it works','As uke initiates their throw, tori uses uke\'s movement and commitment against them — turning the attack into a counter-throw.'],
      ['check_circle','Examples','Ushiro-goshi as a counter to Harai-goshi. Ura-nage as a counter to attempted throws from the front.']
    ],
    mistakes: [['Countering too early','A counter needs uke to be committed to their throw — too early means nothing to work with.'],['—','—']],
    tip: 'Kaeshi-waza.'
  },

  'Kata-te-jime — Strangle with One Hand': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Kata = Single/One, Te = Hand, Jime = Strangle. A strangle applied primarily with one arm across the throat.'],
      ['sports_martial_arts','Application','One arm reaches across uke\'s throat taking a collar grip — the forearm presses on the carotids rather than the hand squeezing.'],
      ['check_circle','Position','Most effective from behind or from the side when uke is in turtle.']
    ],
    mistakes: [['Squeezing with the hand','The strangle is the forearm across the throat, not a hand-squeeze. Grip for control, press with the forearm.'],['—','—']],
    tip: 'Kata-te-jime.'
  },

  'Kata-juji-jime — Half Cross Handed Strangle': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Kata = Single/Half, Juji = Cross, Jime = Strangle. A cross-collar strangle with mixed grip — one thumb in, one out.'],
      ['sports_martial_arts','Compared to Nami and Gyaku','Half-way between the two standard cross strangles. Useful when uke defends against both pure versions.'],
      ['check_circle','Remember','One hand Nami grip (thumb in) + one hand Gyaku grip (fingers in) = Kata-juji-jime.']
    ],
    mistakes: [['Both hands same grip','If both hands are the same grip it becomes Nami or Gyaku, not Kata-juji-jime.'],['—','—']],
    tip: 'Kata-juji-jime.'
  },

  'Koshi-jime — Strangle using the hip': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Koshi = Hip, Jime = Strangle. A strangle that uses the hip as one of the pressure points against the throat/neck.'],
      ['sports_martial_arts','Mechanism','Collar grip plus hip pressure against the side of the neck — the two points close off the carotid from both sides.'],
      ['check_circle','Position','Applied from a modified Kesa-gatame or side control where the hip is naturally positioned near uke\'s neck.']
    ],
    mistakes: [['Hip too low on shoulder','The hip must press the neck, not the shoulder — the carotid is in the neck.'],['—','—']],
    tip: 'Koshi-jime.'
  },

  'Kuzure-kesa-gatame — Broken scarf hold': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Kuzure = Broken/Modified, Kesa = Scarf (diagonal), Gatame = Hold. A modified version of Kesa-gatame.'],
      ['sports_martial_arts','Difference from Kesa','In Kuzure the arm that normally goes under uke\'s head instead goes under their arm — giving better control and armlock setups.'],
      ['check_circle','Why it\'s used','Kuzure-kesa-gatame is often more stable than standard Kesa because it controls uke\'s arm directly.']
    ],
    mistakes: [['Confusing with standard Kesa','Standard Kesa wraps the head, Kuzure wraps the arm. Different control points.'],['—','—']],
    tip: 'Kuzure-kesa-gatame.'
  },

  'Nami-juji-jime — Normal Cross Strangle': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Nami = Normal/Regular, Juji = Cross, Jime = Strangle. The standard cross-collar strangle with thumbs inside both collars.'],
      ['sports_martial_arts','Application','Both thumbs inserted into uke\'s collars — right hand to uke\'s right collar, left to left — then elbows driven to the hips.'],
      ['check_circle','Remember','Nami = Normal = thumbs in. This is the most commonly taught juji-jime variation.']
    ],
    mistakes: [['Shallow collar grip','Thumbs need to be deep in the collar. A shallow grip has nothing to close against the neck.'],['—','—']],
    tip: 'Nami-juji-jime.'
  },

  'Okuri-eri-jime — Sliding Collar Strangle': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Okuri = Sliding/Sending, Eri = Collar, Jime = Strangle. A rear collar strangle where one hand slides across the throat.'],
      ['sports_martial_arts','Mechanism','From behind uke, one hand grips the near collar while the other slides across to the far collar — the sliding action creates the choking pressure.'],
      ['check_circle','Key feature','The "sliding" is what makes it distinct — one collar moves across, rather than both hands pulling symmetrically.']
    ],
    mistakes: [['Not getting behind','Okuri-eri-jime requires a behind-uke position — it cannot be effectively applied from in front.'],['—','—']],
    tip: 'Okuri-eri-jime.'
  },

  'Seoi-otoshi — Shoulder drop': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Seoi = Carrying on the back/shoulder, Otoshi = Drop. A shoulder throw variation where tori drops to their knees.'],
      ['sports_martial_arts','Compared to Ippon-seoi-nage','Ippon-seoi-nage stays standing and lifts. Seoi-otoshi drops to one or both knees — the drop creates the throwing energy rather than a hip lift.'],
      ['check_circle','When used','Effective when uke is taller or when tori can\'t get under for a standing version. The kneeling entry is lower risk in some situations.']
    ],
    mistakes: [['Dropping straight down','The drop should be forward-down at an angle — dropping straight down just puts tori on their knees.'],['—','—']],
    tip: 'Seoi-otoshi.'
  },

  'Shime-waza — Strangle Techniques': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Shime = Strangle/Constrict, Waza = Techniques. The collective term for all strangling techniques in judo.'],
      ['sports_martial_arts','How they work','Shime-waza techniques work by compressing the carotid arteries (cutting blood to the brain) or the trachea (cutting air) — carotid is safer and faster.'],
      ['check_circle','Legal age','Shime-waza is not permitted in competition for judoka under 15 in BJA rules. In groundwork it is always legal for senior competitors.']
    ],
    mistakes: [['Targeting the trachea','A well-applied shime-waza targets the carotids, not the windpipe. Trachea pressure is dangerous and less effective.'],['—','—']],
    tip: 'Shime-waza.'
  },

  'Soto-maki-komi — Outside Winding': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Soto = Outside, Maki = Winding, Komi = Tightening/Into. A sacrifice throw that winds the arm from the outside and falls.'],
      ['sports_martial_arts','Entry','Tori winds their arm over and around uke\'s near arm from the outside — the winding secures uke\'s arm to tori\'s body before the fall.'],
      ['check_circle','Category','Classified as a Yoko-sutemi-waza (side sacrifice technique) in the Gokyo.']
    ],
    mistakes: [['Loose winding','The arm must be tightly wound to uke\'s body — loose contact loses uke before tori hits the mat.'],['—','—']],
    tip: 'Soto-maki-komi.'
  },

  'Tani-otoshi — Valley Drop Throw': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Tani = Valley, Otoshi = Drop. Tori drops into the "valley" behind uke\'s legs, toppling them backward.'],
      ['sports_martial_arts','Mechanism','Tori steps behind uke and drops their hips to the mat between uke\'s feet — pulling uke\'s upper body back over the drop.'],
      ['check_circle','Best use','Highly effective as a counter when uke is resisting with backwards pressure or when tori has pushed uke and they push back.']
    ],
    mistakes: [['No kuzushi before dropping','Dropping without first breaking uke\'s balance back means uke stands over tori — the backwards off-balance is essential.'],['—','—']],
    tip: 'Tani-otoshi.'
  },

  'Tomoe-nage — Circle Throw': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Tomoe = Circle/Comma shape, Nage = Throw. Tori rolls back and uses a foot in uke\'s stomach to circle-throw them overhead.'],
      ['sports_martial_arts','Mechanism','Tori draws uke forward, places a foot in the stomach, rolls back onto the shoulders and extends the leg to send uke in a circle overhead.'],
      ['check_circle','Category','Ma-sutemi-waza (rear sacrifice technique) — tori sacrifices their standing position to throw.']
    ],
    mistakes: [['Foot too high or low','Foot in stomach, not groin or chest. The lower abdomen gives maximum lever length.'],['—','—']],
    tip: 'Tomoe-nage.'
  },

  'Ude-garami — Entangled Armlock': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Ude = Arm, Garami = Entangled/Entwined. An armlock that bends the elbow and rotates the shoulder by threading the arms together.'],
      ['sports_martial_arts','Mechanism','Uke\'s arm is bent to 90°, tori threads their arm under uke\'s elbow and grips their own wrist — levering the figure-4 drives the shoulder to submission.'],
      ['check_circle','From holds','Most commonly applied from Kesa-gatame or Kami-shiho-gatame when uke reaches up with a free arm.']
    ],
    mistakes: [['Applying to a straight arm','Ude-garami requires a bent arm. A straight arm calls for Juji-gatame instead.'],['—','—']],
    tip: 'Ude-garami.'
  },

  'Uki-waza — Floating Throw': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Uki = Floating, Waza = Technique. A side sacrifice throw where tori "floats" to the side, sweeping uke\'s lead leg.'],
      ['sports_martial_arts','Mechanism','As uke steps forward, tori drops to the side and sweeps the advancing leg — uke\'s own momentum carries them over.'],
      ['check_circle','Category','Yoko-sutemi-waza (side sacrifice technique). Timing with uke\'s step is the critical element.']
    ],
    mistakes: [['Attacking a static uke','Uki-waza needs uke in motion — the floating sweep catches a moving leg, not a planted one.'],['—','—']],
    tip: 'Uki-waza.'
  },

  'Yoko-guruma — Side Wheel Throw': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Yoko = Side, Guruma = Wheel. A side sacrifice throw where tori drives in at hip height and rotates uke over like a wheel.'],
      ['sports_martial_arts','Mechanism','Tori wraps an arm around uke\'s waist or hips, drives in low, falls to the side and wheels uke over their own body.'],
      ['check_circle','Category','Yoko-sutemi-waza. Similar entry principle to Yoko-tomoe-nage but using a waist wrap rather than a foot placement.']
    ],
    mistakes: [['Entry too upright','Must drive in low — if entry is too high uke\'s weight pins tori rather than going over.'],['—','—']],
    tip: 'Yoko-guruma.'
  },

  'Yoko-tomoe-nage — Side Circle Throw': {
    cat: 'knowledge',
    steps: [
      ['translate','Meaning','Yoko = Side, Tomoe = Circle, Nage = Throw. A variant of Tomoe-nage where the throw is directed to the side rather than straight overhead.'],
      ['sports_martial_arts','Difference from standard Tomoe-nage','Foot is placed in the hip (not the stomach) and the throw direction is diagonal — used when tori cannot enter straight ahead.'],
      ['check_circle','When to use','Effective against opponents with a very strong straight defence, or when there is diagonal kuzushi available.']
    ],
    mistakes: [['Wrong foot placement','Standard Tomoe-nage uses the stomach; Yoko-tomoe-nage uses the hip. Wrong placement sends uke in the wrong direction.'],['—','—']],
    tip: 'Yoko-tomoe-nage.'
  },

  // ── TO BLACK — Contest Requirements ──────────────────────────────────────
  "Accumulate 100 contest points (Ippon = 10 pts, Waza-ari = 5 pts)": {
    cat:'knowledge',
    steps:[
      ['🏆','Points system','To grade to Shodan you need 100 contest points. An Ippon scores 10 points, a Waza-ari scores 5 points. Points are earned from BJA-recognised contests.'],
      ['📊','Tracking your points','Keep a record of all contest results. You need your club or county association to verify points. Start competing at open events early.'],
      ['🎯','Strategy','10 Ippons = 100 points. But a mix of Ippons and Waza-aris counts too. Focus on attacking judo — passive fighting earns no points.']
    ],
    mistakes:[
      ['Only counting wins','Waza-ari scores 5 pts even in a loss. Track every score you land, not just match results.'],
      ['Leaving it too late','Points must be earned over time — you cannot rush 100 points in one weekend. Start competing as a Brown Belt from day one.']
    ],
    tip:'Log every competition result immediately — club secretaries can forget. Your points record is your responsibility.'
  },
  "Minimum 1 year as 1st Kyu (Brown Belt)": {
    cat:'knowledge',
    steps:[
      ['📅','Time-in-grade rule','You must hold your Brown Belt (1st Kyu) for a minimum of one year before being eligible to attempt Shodan.'],
      ['🗓️','Use the time well','This year is your preparation period. Enter contests, study kata, train ne-waza. One year goes fast when you\'re building points.'],
      ['✅','Eligibility check','Your grading examiner will check your Brown Belt date. Make sure your club has an accurate record of when you were graded.']
    ],
    mistakes:[
      ['Rushing the year','The 1-year minimum is strict — no exceptions. Plan your contests so you hit 100 points within your first year if possible.'],
      ['Losing your certificate','Keep your Brown Belt grading certificate safe. It is the official proof of your grade date.']
    ],
    tip:'Set a calendar reminder the day you get your Brown Belt — count forward exactly one year to your earliest Shodan eligibility date.'
  },
  "Minimum age 15 years": {
    cat:'knowledge',
    steps:[
      ['👤','Age requirement','The BJA Dan Grade system requires a minimum age of 15 for Shodan (competitive route). This is a firm requirement.'],
      ['🌟','Junior pathway','Under-15s can continue to develop and accumulate contest points. The points count — you just cannot grade until you turn 15.'],
      ['📋','Check the rules','Specific age rules may vary slightly by region. Always confirm with your club coach or county association.']
    ],
    mistakes:[
      ['Assuming exceptions exist','There are no age exceptions for Shodan. Focus on quality of judo during your development years.'],
      ['Ignoring junior contests','Junior competitions are ideal for accumulating points early. Get competing as soon as you can.']
    ],
    tip:'Being ready at 15 means starting to train seriously from your Red Belt. Every year of quality training counts.'
  },
  "Win first 2 individual contest entries by Ippon": {
    cat:'knowledge',
    steps:[
      ['⚡','First two contests rule','Your first two individual contest entries for Dan grading purposes must both be won by Ippon. Waza-ari wins do not count for this requirement.'],
      ['🥋','What counts as Ippon','A full score (Ippon) — a clean throw with force, speed and control, landing Uke on their back. Also: Osaekomi held 20s, submission, or disqualification.'],
      ['🎯','Build attacking habits','Train to throw for Ippon every time. Cautious, grip-fighting judo makes this requirement much harder to meet.']
    ],
    mistakes:[
      ['Counting Waza-ari wins','Only Ippon wins satisfy this requirement. A 2×Waza-ari win counts as Ippon for scoring but check current BJA rules carefully.'],
      ['Avoiding difficult draws','Some players avoid entering when the draw looks hard. But you must win two — just pick events where you can attack freely.']
    ],
    tip:'Enter smaller open events or under-18 categories where you can attack freely and throw cleanly. Big pressure events are not ideal for requirement 1 and 2.'
  },
  "Complete a 3-person line-up — all wins by Ippon": {
    cat:'knowledge',
    steps:[
      ['👥','The line-up requirement','You must complete a 3-person consecutive line-up, winning all three contests by Ippon. This is a separate requirement from points accumulation.'],
      ['🔄','How line-ups work','Three opponents fight you consecutively. No rest between bouts. You must throw, hold, strangle or armlock all three for Ippon each time.'],
      ['💪','Fitness is key','You must be fit enough to throw three people in a row. Your conditioning and technique must both be high — there is no hiding in a line-up.']
    ],
    mistakes:[
      ['Treating it like points','Points and the line-up are separate. You can have 100 points but still need to complete the line-up before grading.'],
      ['Not practising line-ups in training','Ask your coach to run informal 3-person line-ups at your club. Get used to the format before the real thing.']
    ],
    tip:'Practise 3-person nagekomi and randori sequences in training. The mental side of the line-up is as important as the physical.'
  },

  // ── TO BLACK — Theory Section 1: Tachi-waza ──────────────────────────────
  "O-goshi — mandatory throw demonstration": {
    cat:'throw',
    steps:[
      ['🤝','Kuzushi','Grip the sleeve and wrap your arm deep around Uke\'s waist. Break their balance forward and to the side — pull the sleeve across your body.'],
      ['🔄','Tsukuri — entry','Turn in fully. Your hip goes across and below Uke\'s centre of gravity. Feet together, knees bent. Your back should be flat against Uke\'s chest.'],
      ['⬆️','Kake — throw','Drive your hip through, straighten your legs, and pull Uke over your hip in a circular motion. Uke lands cleanly on their back.']
    ],
    mistakes:[
      ['Hip too high','If your hip is above Uke\'s centre of gravity, the throw collapses. Bend your knees deeply on entry — hip must be lower than Uke\'s hips.'],
      ['Losing the sleeve pull','Releasing the sleeve arm during the throw kills your kuzushi. Pull sleeve across hard all the way through.']
    ],
    tip:'O-goshi is the foundation throw. For Dan grading, demonstrate it with clean kuzushi, full entry and committed kake. Examiner looks for control and intent.'
  },
  "O-soto-gari — mandatory throw demonstration": {
    cat:'throw',
    steps:[
      ['🤝','Kuzushi','Pull sleeve forward and up. Push lapel grip backward. Drive Uke\'s weight onto their right heel — this is the foot you will reap.'],
      ['🦵','Tsukuri — body contact','Step your right foot beside Uke\'s right foot. Your right shoulder should come in contact with Uke\'s chest. Lean your body into Uke.'],
      ['⬇️','Kake — reap','Swing your right leg back in a large arc, reaping Uke\'s right leg from behind the knee. Push with your body weight simultaneously.']
    ],
    mistakes:[
      ['Reaping before making body contact','Without body contact first, you push Uke away instead of throwing them. Body in first, then reap.'],
      ['Small reap with no drive','A half-hearted leg swing produces a weak throw. Commit your whole bodyweight into the forward lean as you reap.']
    ],
    tip:'At Dan grading, your O-soto-gari should show clear kuzushi before entry. Take three attacking steps, not one — show rhythm and intent.'
  },
  "Ko-uchi-gari — mandatory throw demonstration": {
    cat:'throw',
    steps:[
      ['🤝','Kuzushi','Apply a backward and sideways break — push Uke\'s body weight onto their right heel. The moment weight loads that foot, it becomes a target.'],
      ['🦶','Tsukuri — position','Step slightly to the side. Insert your right foot between Uke\'s feet, toes pointing inward. Your body should be close to Uke\'s.'],
      ['🔄','Kake — reap','Hook Uke\'s right ankle with the sole of your foot and drive it forward and across. Simultaneously push Uke\'s upper body backward.']
    ],
    mistakes:[
      ['Reaping the ankle without pushing the upper body','Lower body and upper body must work together. The reap alone is weak — the body push creates the fall.'],
      ['Reaping the wrong foot','Reap the weighted foot, not the free one. If you feel resistance when you try to reap, the weight isn\'t loaded — adjust your kuzushi first.']
    ],
    tip:'Ko-uchi-gari is excellent as a combination set-up. Show the examiner you understand its use in combination — Ko-uchi → Seoi-nage or Ko-uchi → O-soto-gari.'
  },
  "De-ashi-harai — mandatory throw demonstration": {
    cat:'throw',
    steps:[
      ['🚶','Read the step','De-ashi-harai is thrown as Uke steps forward. You must read Uke\'s movement and time the throw as the stepping foot touches the ground with little weight on it.'],
      ['🦶','The sweep','Use the sole of your foot (not your toe or heel) to sweep Uke\'s ankle in a wide arc — sweeping the foot in the same direction it is travelling.'],
      ['↕️','Kuzushi with the hands','As you sweep, pull the sleeve upward and forward, and push the lapel down and forward. Upper and lower body work together in opposite arcs.']
    ],
    mistakes:[
      ['Sweeping a weighted foot','If Uke\'s weight is on the foot, it will not sweep. You need to catch the foot just as it touches the ground, before weight loads.'],
      ['Sweeping sideways instead of forward','Sweep the foot in the direction it is already going — forward-and-across. Sweeping backward against the movement creates resistance.']
    ],
    tip:'For grading, don\'t try to fake the movement — ask Uke to walk naturally and time a real sweep. Examiners can tell the difference between a genuine ashiwaza and a staged one.'
  },
  "Two personal choice throws — demonstrate with Uke": {
    cat:'throw',
    steps:[
      ['🎯','Choose your best throws','Pick two throws you genuinely excel at — these should be your competition throws. The examiner wants to see throws you own, not throws you\'re showing off.'],
      ['⚡','Demonstrate with intent','Each throw should be shown with full kuzushi, complete entry, and committed kake. A near-miss or weak attempt does not impress.'],
      ['📢','Name and explain','Before each throw, name it clearly and briefly explain your kuzushi principle. Shows understanding, not just physical ability.']
    ],
    mistakes:[
      ['Choosing impressive-sounding throws you can\'t land','A strong O-soto-gari beats a shaky Ura-nage. Play to your strengths.'],
      ['Showing the same throw twice','They must be two different throws. Ideally from different categories — one tachi-waza, one ashi-waza, for example.']
    ],
    tip:'Tell your examiner your two choices before you start: "I\'ll demonstrate Uchi-mata and Harai-goshi." Confidence and preparation are part of the impression.'
  },

  // ── TO BLACK — Theory Section 2: Ne-waza ─────────────────────────────────
  "Transition from tachi-waza into osaekomi-waza": {
    cat:'hold',
    steps:[
      ['⬇️','Set up the throw','Perform a tachi-waza throw — it does not need to be a full Ippon. A partial throw or Uke going to ground gives you the opportunity.'],
      ['🔄','Follow Uke down','As Uke breaks their fall, follow them immediately to the ground — don\'t stop upright. You must control the transition with no gap in pressure.'],
      ['🔒','Apply the hold','Arrive into your hold down (Kesa-gatame, Yoko-shiho-gatame, etc.) with your weight immediately in the controlling position. Settle and secure.']
    ],
    mistakes:[
      ['Stopping when Uke goes down','Hesitation breaks the momentum. Move as one fluid action — throw and follow equals hold.'],
      ['Landing in a poor position','If you follow Uke down but land out of position, you lose control. Practice transitions until landing in hold feels automatic.']
    ],
    tip:'In the Dan exam, this transition is assessed on fluency and control. Show that going to ground is a natural extension of your throw, not an afterthought.'
  },
  "Transition from osaekomi-waza into shime-waza": {
    cat:'strangle',
    steps:[
      ['🔒','Start in a hold','Begin in any valid osaekomi-waza. Maintain control and pressure — Uke will attempt to escape, creating the opening.'],
      ['👀','Read Uke\'s escape','As Uke turns or creates space, immediately thread your arms into a strangle position. Common transitions: Kesa-gatame → Okuri-eri-jime.'],
      ['✊','Secure the strangle','Apply the strangle with steady pressure — no jerking. Show controlled application, not force. Uke taps when pressure is felt.']
    ],
    mistakes:[
      ['Forcing the transition from nowhere','Transitions only work when Uke gives you the opening. If they\'re flat and not escaping, apply the hold for Osaekomi — don\'t force a strangle attempt.'],
      ['Losing body control during transition','As you shift grip for the strangle, your body weight must stay on Uke. Lifting off lets Uke escape entirely.']
    ],
    tip:'For the exam, ask Uke to provide a natural escape attempt so you can demonstrate the transition cleanly. Brief Uke on what escape to attempt beforehand.'
  },
  "Transition from osaekomi-waza into kansetsu-waza": {
    cat:'lock',
    steps:[
      ['🔒','Start in a hold','Begin in Kesa-gatame, Yoko-shiho-gatame or similar. Maintain pressure and wait for Uke to attempt an escape.'],
      ['💪','Isolate the arm','As Uke pushes or pulls, isolate their near arm. Thread your grip for an armlock — Ude-hishigi-juji-gatame or Ude-garami are natural from kesa.'],
      ['⚖️','Apply steadily','Apply the armlock with measured, increasing pressure. Uke taps before any discomfort is severe. Control is everything.']
    ],
    mistakes:[
      ['Jerky armlock application','Rapid, jerky pressure on armlocks causes injury. Always apply with slow steady increase.'],
      ['Giving up the hold without securing the lock','Don\'t release the hold until you have the armlock secured. Two things to hold, not one in exchange for the other.']
    ],
    tip:'Ude-garami from Kesa-gatame is a classic transition — you already learned it for 2nd Kyu. Use it here to show progression and understanding.'
  },
  "Ne-waza randori demonstration": {
    cat:'knowledge',
    steps:[
      ['🤼','Free ne-waza','You and Uke engage in genuine groundwork randori. Show attacking intent — pursue holds, strangles and armlocks. Don\'t just defend.'],
      ['🔄','Show variety','Demonstrate that you can attack from different positions — top, underneath, side. Show transitions, not just one static technique.'],
      ['🧠','Judo intelligence','The examiner is looking for judo thinking — reading Uke\'s movement, creating openings, applying appropriate technique at the right moment.']
    ],
    mistakes:[
      ['Being passive','Standing or sitting in guard and doing nothing is not judo. Attack continuously — even if you don\'t land a finish.'],
      ['Over-defending','If you only try to escape, you show no offensive ne-waza. Balance defence with attacking intent.']
    ],
    tip:'Ne-waza randori for grading is not a hard competition fight — keep it controlled, show technical variety, and attack purposefully for 60–90 seconds.'
  },

  // ── TO BLACK — Theory Sections 3 & 4 ─────────────────────────────────────
  "Two attack combinations — demonstrate with Uke": {
    cat:'throw',
    steps:[
      ['🔗','What makes a combination','A combination is two linked attacks where the first attack creates the reaction that enables the second. Attack 1 → Uke reacts → Attack 2 scores.'],
      ['📋','Example combinations','Ko-uchi-gari → Seoi-nage (Uke steps back, you enter front). O-uchi-gari → O-soto-gari (Uke steps back to avoid inner, you reap outer). Choose what you use in randori.'],
      ['🎬','Demonstrate both combinations','Show each combination twice — once at slow speed explaining the principle, once at contest speed. Name both throws clearly.']
    ],
    mistakes:[
      ['Showing two unrelated attacks','A combination has a mechanical link. "I tried Ko-uchi then Uke fell over" is not a combination. Show the cause and effect clearly.'],
      ['Over-complicating','Two-technique combinations are expected. Three or four techniques is ambitious and easy to botch under exam pressure. Keep it sharp and simple.']
    ],
    tip:'Use your actual competition combinations — the ones you\'ve landed in randori. Examiner wants to see techniques you own, not techniques you\'ve rehearsed for the exam.'
  },
  "Two counter techniques — demonstrate with Uke": {
    cat:'throw',
    steps:[
      ['🔄','What makes a counter','A counter (Kaeshi-waza) is a technique you apply when Uke attacks you. You use Uke\'s attacking momentum to throw them.'],
      ['📋','Example counters','Harai-goshi → Utsuri-goshi (catch and lift as they enter). O-soto-gari → Ko-uchi-gari (step around the reap and attack their other leg). O-uchi-gari → Tai-otoshi.'],
      ['🎬','Demonstrate both counters','Uke attacks, you counter — show this twice each. Brief Uke on which attack to throw so the counter flows naturally.']
    ],
    mistakes:[
      ['Countering a weak or slow attack','Counters work against real attacks — not slow, telegraphed ones. Ask Uke to attack with genuine intent so the counter looks natural.'],
      ['Showing escapes instead of counters','Stepping out of an attack is not a counter. You must throw Uke as a result of their attack — their movement becomes your weapon.']
    ],
    tip:'At Dan grade, counters show judo maturity. Examiners are impressed by counters that feel inevitable — as if Uke\'s attack itself caused their fall.'
  },
  "Uchi-komi demonstration — chosen throw × 10 reps": {
    cat:'throw',
    steps:[
      ['🎯','Choose one throw','Pick any throw you want to demonstrate. Announce it clearly: "I\'ll demonstrate Uchi-komi for Uchi-mata."'],
      ['🔁','10 clean reps','Perform 10 consecutive entry repetitions — Tsurkuri only, no kake (no full throw). Each rep must show full kuzushi, complete entry position, and controlled return.'],
      ['📐','Quality over speed','Each rep must look identical. Show consistency of form — same kuzushi angle, same foot placement, same body position every time.']
    ],
    mistakes:[
      ['Rushing the reps','Fast, sloppy uchikomi shows poor training habits. Controlled, rhythmic reps at medium pace show mastery.'],
      ['Changing the technique between reps','If your form varies significantly between reps, it shows the technique isn\'t fully internalised. Choose a throw you can do in your sleep.']
    ],
    tip:'Uchikomi is a window into how you train. If you\'ve done thousands of good reps, it shows. If you\'ve been sloppy in training, it also shows. Every rep in training matters.'
  },

  // ── TO BLACK — Theory Section 5: Contest Knowledge ────────────────────────
  "Explain contest scoring: Ippon and Waza-ari": {
    cat:'knowledge',
    steps:[
      ['🏆','Ippon — full point','Ippon is scored when: (1) A throw lands Uke largely on their back with speed and force; (2) Uke is held for 20 seconds (Osaekomi); (3) Uke submits to a strangle or armlock; (4) Uke receives two Waza-ari.'],
      ['⚡','Waza-ari — near full point','Waza-ari is scored when a throw has most but not all of the elements of Ippon — the throw is real but lacks one element (speed, force, or landing on back). A hold of 10–19 seconds also scores Waza-ari.'],
      ['🔢','Two Waza-ari = Ippon','Two Waza-ari scores in the same contest combine automatically to produce Ippon. The contest ends immediately.']
    ],
    mistakes:[
      ['Confusing Osaekomi times','Waza-ari = 10–19 seconds hold. Ippon = 20+ seconds. Some players forget the exact thresholds under pressure.'],
      ['Forgetting submission counts as Ippon','A tap, verbal submission, or clear surrender always counts as Ippon — regardless of time or position.']
    ],
    tip:'Practise explaining this out loud, clearly and concisely. Examiners often ask for a verbal explanation — "tell me the scoring system" — so have a clean 30-second answer ready.'
  },
  "State three prohibited acts in contest": {
    cat:'knowledge',
    steps:[
      ['🚫','Common prohibited acts','Key examples: (1) False attack — entering without genuine attempt to throw; (2) Picking up Uke\'s leg when Uke is standing upright (direct leg grabs); (3) Applying a strangle or armlock in tachi-waza; (4) Going out of bounds intentionally.'],
      ['⚠️','Shido — minor penalty','Most prohibited acts result in a Shido (minor infringement). Three Shidos = Hansoku-make (disqualification). A single serious infraction can also result in direct Hansoku-make.'],
      ['📋','For the exam','You need to name and briefly explain three. Common good answers: false attack, direct leg grab, going out deliberately.']
    ],
    mistakes:[
      ['Confusing Shido with Hansoku-make','Shido is the penalty given; Hansoku-make is the disqualification. A competitor receives Shido; three Shidos leads to Hansoku-make.'],
      ['Listing techniques as "prohibited"','Techniques are not prohibited — it\'s actions that are penalised. False attacks, passivity, dangerous techniques, out-of-bounds are behaviours.']
    ],
    tip:'Know three well and explain them clearly. Don\'t try to list ten vaguely — three precise answers are far more impressive than ten muddled ones.'
  },
  "Explain the Judo moral code (eight values)": {
    cat:'knowledge',
    steps:[
      ['🌟','The eight values','The IJF/BJA Judo Moral Code: (1) Courtesy — Rei; (2) Courage — Yuki; (3) Honesty — Seikyo; (4) Honour — Meiyo; (5) Modesty — Kenso; (6) Respect — Sonkei; (7) Self-control — Jiko Seigyo; (8) Friendship — Yujyo.'],
      ['🥋','Why it matters','The moral code is not just words — it defines how a judoka behaves inside and outside the dojo. Jigoro Kano created judo as a way of improving oneself and contributing to society.'],
      ['📢','For the exam','Be able to list all eight values and give a brief example of how each one applies in judo training or competition.']
    ],
    mistakes:[
      ['Memorising words without meaning','If you recite the list robotically, an examiner may probe: "Give an example of self-control in contest." Have real answers ready.'],
      ['Confusing the values','Some sound similar — Modesty vs Respect vs Courtesy. Know the distinction: Courtesy is greeting and manner; Respect is valuing others; Modesty is not boasting.']
    ],
    tip:'Write out the eight values and carry them with you for a week. Each day, focus on demonstrating one of them both in training and in daily life. They\'ll stick much faster this way.'
  },

  // ── TO BLACK — Kata: Nage-no-kata ─────────────────────────────────────────
  "Te-waza: Uki-otoshi, Seoi-nage, Kata-guruma": {
    cat:'throw',
    steps:[
      ['🌊','Uki-otoshi — Floating Drop','Tori breaks Uke\'s balance forward-right, steps back and drops to one knee, pulling Uke in a forward arc over the knee. The throw uses pure kuzushi with no body contact — Uke is guided, not pushed.'],
      ['🏋️','Seoi-nage — Shoulder Throw','Tori grips lapel and sleeve, turns in fully with elbow across Uke\'s armpit, drops under Uke\'s centre and lifts-throws forward. Classic Te-waza: hands and arms do all the work.'],
      ['⚙️','Kata-guruma — Shoulder Wheel','Tori ducks under Uke, loads Uke across both shoulders like a wheel axle, and rotates Uke to the ground. Both sides of Uke\'s body are supported, then rotated and dropped.']
    ],
    mistakes:[
      ['Rushing the kata','Nage-no-kata is performed at a ceremonial pace with prescribed etiquette. Do not rush throws — each one should be demonstrated with full form.'],
      ['Forgetting the etiquette','Kata begins and ends with a formal bow sequence. Tori and Uke move together with coordinated steps. Examiners assess etiquette as well as technique.']
    ],
    tip:'For BJA Level 1 Nage-no-kata, prioritise clean kuzushi and correct ukemi over speed. The kata is a demonstration of principle — quality over quantity.'
  },
  "Koshi-waza: Uki-goshi, Harai-goshi, Tsuri-komi-goshi": {
    cat:'throw',
    steps:[
      ['🔵','Uki-goshi — Floating Hip','Tori wraps arm around Uke\'s waist, hip contacts Uke\'s hip, and Uke is rotated over the hip in a floating arc. Lighter contact than O-goshi — more rotation, less lift.'],
      ['💥','Harai-goshi — Sweeping Hip','Tori loads Uke on the hip, then sweeps the inside leg in a large arc through both of Uke\'s legs. Hip contact is firm; the sweep timing is critical.'],
      ['🔗','Tsuri-komi-goshi — Lift-Pull Hip','Tsuri (lift) the lapel grip up and forward; Komi (pull) the sleeve across. The combination of both grips loading Uke onto the hip before the hip throw.']
    ],
    mistakes:[
      ['Hip not low enough','For all koshi-waza, hip must be below Uke\'s centre of gravity. If hip is too high, you push Uke rather than throw them.'],
      ['Losing the hip contact','In Uki-goshi and Harai-goshi, the hip must stay in contact with Uke throughout the throw. Pulling away kills the rotation.']
    ],
    tip:'In kata, each throw is shown left and right. Practice switching sides — many judoka neglect their non-dominant side. The examiner will see both.'
  },
  "Ashi-waza: Okuri-ashi-harai, Sasae-tsuri-komi-ashi, Uchi-mata": {
    cat:'throw',
    steps:[
      ['🦶','Okuri-ashi-harai — Sliding Foot Sweep','As Uke steps laterally, Tori sweeps both ankles simultaneously with the sole of the foot, the back foot landing on the front ankle. Timing with Uke\'s sideways step is everything.'],
      ['⛔','Sasae-tsuri-komi-ashi — Propping Lift Pull Foot','Tori places foot against Uke\'s ankle as a prop/block, then lifts and pulls Uke forward over the blocked foot. A block, not a sweep — the hands do the work.'],
      ['🔄','Uchi-mata — Inner Thigh Throw','Tori enters and sweeps the inner thigh of Uke\'s supporting leg upward with their own thigh/hamstring. Deep hip entry, upward sweep — a powerful combination.']
    ],
    mistakes:[
      ['Sweeping Sasae like a reap','Sasae is a prop with the foot — not a sweep backward. Prop first, hands lift and pull Uke over the prop.'],
      ['Uchi-mata with no entry','Without turning in and loading Uke on the hip, Uchi-mata becomes just a kick. Entry (tsukuri) is essential before the sweep.']
    ],
    tip:'Ashi-waza in kata looks simple but the timing requirement is high. Practice the throws in natural movement — walking into Uke\'s step — not from a static position.'
  },
  "Ma-sutemi-waza: Tomoe-nage, Ura-nage, Sumi-gaeshi": {
    cat:'throw',
    steps:[
      ['⭕','Tomoe-nage — Circle Throw','Tori breaks Uke\'s balance forward, plants foot in Uke\'s stomach while falling backward, and uses the foot as a fulcrum to circle Uke overhead. A full sacrifice — Tori lands on their back.'],
      ['🔙','Ura-nage — Rear Throw','Tori wraps arms around Uke from behind and falls backward, arching to throw Uke over their own head. Tori goes down, Uke goes up and over.'],
      ['🌀','Sumi-gaeshi — Corner Throw','Tori falls diagonally backward while thrusting inner leg between Uke\'s legs and across their thigh, rotating Uke to the corner. A circular sacrifice throw.']
    ],
    mistakes:[
      ['Planting the foot in the wrong place for Tomoe-nage','Foot should contact the lower abdomen/stomach area. Knee or thigh contact significantly reduces the rotation.'],
      ['Not committing on Ura-nage','A half-commit on Ura-nage is both ineffective and potentially dangerous. Full commitment with the arch is required.']
    ],
    tip:'Ma-sutemi means front sacrifice. Tori lands on their back in all three throws. Uke must have excellent ukemi for this kata section. Practice slowly before speed.'
  },
  "Yoko-sutemi-waza: Yoko-gake, Yoko-guruma, Uki-waza": {
    cat:'throw',
    steps:[
      ['↕️','Yoko-gake — Side Hook','Tori hooks Uke\'s heel with their own heel while falling to the side, pulling Uke over in a sideways arc. A small, precise movement — not a big sweep.'],
      ['🌐','Yoko-guruma — Side Wheel','Tori twists under Uke while gripping behind their thigh, rotates sideways and throws Uke in a wheel motion to the side. Tori and Uke rotate together.'],
      ['🌊','Uki-waza — Floating Throw','Tori breaks Uke\'s balance forward and falls diagonally to the side-rear, using minimal foot contact. Uke is pulled and guided — the throw appears almost effortless.']
    ],
    mistakes:[
      ['Yoko-gake: too much leg','It\'s a hook with the heel, not a leg sweep. The hook is small and precise — the pull of the hands does most of the work.'],
      ['Uki-waza: rushing the fall','The fall must be controlled and timed with Uke\'s kuzushi. Falling too early means you go down alone; falling too late means you can\'t guide Uke.']
    ],
    tip:'Yoko-sutemi means side sacrifice. All three throws end with Tori on their side. Your ukemi from these throws must also be clean — you\'re demonstrating reciprocal technique.'
  },

  // ── TO BLACK — Knowledge: Dan Grade Terminology ──────────────────────────
  "Shodan — 1st Degree Black Belt": {
    cat:'knowledge',
    steps:[
      ['🥋','What is Shodan','Shodan (初段) is the 1st Dan rank — the first black belt grade in judo. It represents transition from student (mudansha — below Dan) to practitioner (yudansha — Dan grade).'],
      ['🌟','What it means','Shodan is not a destination — it is the beginning of deeper study. Jigoro Kano said the black belt represents that you have learned the fundamentals and are ready to truly learn judo.'],
      ['🏆','BJA Dan grading','In the BJA system, Shodan is awarded on meeting contest points, time-in-grade, age, line-up, and theory skills requirements — or via the technical pathway for older practitioners.']
    ],
    mistakes:[
      ['Thinking Shodan is the goal','Many judoka work for years to get a black belt, then stop. The serious study of judo — kata, ne-waza depth, coaching — actually begins at Shodan.'],
      ['Confusing Dan with skill level','A 1st Dan brown belt who has just graded may be technically weaker than a 3rd Kyu who has trained for 10 years. Grade and skill are related but not the same.']
    ],
    tip:'On the day you receive Shodan, your first question should be: "What am I going to work on now?" That attitude is what separates those who stop at Shodan from those who reach Nidan and beyond.'
  },
  "Nidan — 2nd Degree Black Belt": {
    cat:'knowledge',
    steps:[
      ['🥋','Nidan — 2nd Dan','Nidan (二段) is the 2nd Dan rank. After Shodan, the path continues. Nidan requires significantly more time, points (200+), deeper kata knowledge and greater all-round judo ability.'],
      ['📅','Time requirement','Minimum 2 years as Shodan before grading to Nidan. The gap between Dan grades increases at each step — reinforcing that grade requires genuine development.'],
      ['📈','Raising the standard','At Nidan level, the theory skills exam goes deeper, personal choice throws must show greater variety, and kata must be performed to BJA Level 2 standard.']
    ],
    mistakes:[
      ['Assuming Nidan just means more of the same','Each Dan grade requires development, not repetition. You must show judo that has grown — not the same judo you had at Shodan.'],
      []
    ],
    tip:'Use your time as a Shodan well. Coach beginners — teaching others is one of the fastest ways to deepen your own understanding.'
  },
  "Dan — Grade (black belt level)": {
    cat:'knowledge',
    steps:[
      ['📊','Dan system overview','Dan (段) grades run from 1st to 10th. 1st–5th Dan wear black belts. 6th–8th Dan may wear red-and-white block belts. 9th–10th Dan wear red belts. Only a handful of people globally hold 10th Dan.'],
      ['🌍','Kyu and Dan together','The full grade system goes: 6th Kyu (lowest) → 1st Kyu → 1st Dan → ... → 10th Dan. Kyu = student grades (coloured belts). Dan = master grades (black belt+).'],
      ['🏛️','Judo history','The Dan system was created by Jigoro Kano in 1883 — the first black belts were awarded in 1886. It is now used across martial arts worldwide, but judo was the originator.']
    ],
    mistakes:[
      ['Thinking higher Dan = better fighter','Senior Dan grades are awarded for contribution to judo — coaching, refereeing, administration — as much as for fighting ability. A 7th Dan coach may not throw the same as a 2nd Dan competitor.'],
      ['Confusing grade with age','Dan grades can be awarded for technical pathway to older practitioners — grade reflects more than just contest record.']
    ],
    tip:'Understand the history of your grade system. Knowing that Kano created it in the late 1800s gives context to why judo values are baked into the grading criteria.'
  },
  "Nage-no-kata — Forms of Throwing": {
    cat:'knowledge',
    steps:[
      ['📜','What is Nage-no-kata','Nage-no-kata (投の形) is a formal kata consisting of 15 throws in 5 groups of 3: Te-waza, Koshi-waza, Ashi-waza, Ma-sutemi-waza, Yoko-sutemi-waza. It is performed with a partner (Tori and Uke) in a prescribed sequence.'],
      ['🎯','Purpose of the kata','Kata preserves the fundamental principles of judo throwing — kuzushi, tsukuri, kake — in their pure form. It develops precision, sensitivity, and the ability to throw from correct principle rather than strength.'],
      ['📋','BJA Level 1','For Shodan (competitive route), you must demonstrate Nage-no-kata to BJA Level 1 standard — all 15 throws, both sides, with correct etiquette.']
    ],
    mistakes:[
      ['Treating kata as just a routine to memorise','Kata is not a choreographed performance — each throw should work on a real, resistant Uke. If Uke could not actually be thrown, the kata is wrong.'],
      ['Neglecting the etiquette','Kata begins with a bow, has prescribed stepping patterns, and ends formally. Missing the etiquette is a significant fault in examination.']
    ],
    tip:'Learn Nage-no-kata with a regular partner who can also receive the throws with good ukemi. Kata is a relationship between Tori and Uke — both must practice, not just the thrower.'
  },
  "Uke — The person being thrown in kata": {
    cat:'knowledge',
    steps:[
      ['🤲','Uke\'s role','Uke (受け) in kata is not a passive crash dummy — Uke initiates attacks at prescribed moments, receives the throws, and provides the correct level of resistance to make each throw realistic.'],
      ['🛡️','Ukemi in kata','Uke must take clean, confident ukemi — falling correctly and safely from each throw. Poor ukemi from Uke affects the quality of Tori\'s throws and can cause injury.'],
      ['🔄','Uke also practices','Experienced Uke is a skill. In Japan, some high-grade judoka are particularly respected for their ability to be Uke — it requires sensitivity, timing and trust.']
    ],
    mistakes:[
      ['Treating Uke as passive','Uke should make Tori work correctly. An Uke who falls over before being thrown, or offers no resistance, makes poor kata.'],
      ['Ignoring ukemi practice','Good Uke must also train their ukemi. Falls from kata throws can be hard — poor ukemi causes injury, not the technique.']
    ],
    tip:'Spend time being Uke as well as Tori when practising kata. The experience of receiving throws teaches you the kuzushi and movement you need as Tori.'
  },
  "Tori — The person throwing in kata": {
    cat:'knowledge',
    steps:[
      ['💪','Tori\'s role','Tori (取り) is the person who applies the technique in kata. Tori must demonstrate kuzushi (balance breaking), tsukuri (entry/positioning) and kake (execution) for each throw.'],
      ['🎯','Leading the kata','In Nage-no-kata, Tori leads — initiating the prescribed movements and attacks that begin each sequence. Tori and Uke must be in harmony throughout.'],
      ['📐','Quality of technique','Tori\'s throws must be technically correct — not just physically successful. The kata examiner assesses whether the principle of the throw is demonstrated correctly.']
    ],
    mistakes:[
      ['Using strength to make throws work','Kata throws must work through correct principle — kuzushi and entry — not through Tori being stronger than Uke. Forced throws fail the kata assessment.'],
      ['Neglecting the non-dominant side','Kata requires both left and right sides. Many judoka have a strong side but poor kata on the weak side. Train both from day one.']
    ],
    tip:'In kata practice, ask a senior judoka or coach to watch and give feedback on your Tori role. It is very difficult to self-assess kata quality without an outside eye.'
  },
  "Ippon — Full point (10 pts in Dan grading)": {
    cat:'knowledge',
    steps:[
      ['🏆','Ippon in contest','In IJF/BJA competition: Ippon = 10 contest points (toward Dan grade). Ippon ends the contest immediately. Ippon is scored for: full-value throw, 20-second hold, submission, or 2× Waza-ari.'],
      ['⚖️','Ippon criteria for throws','A throw must have: (1) Considerable force; (2) Considerable speed; (3) Uke lands largely on the back. Missing any one element typically results in Waza-ari instead.'],
      ['🥋','Ippon in the line-up','For the Shodan line-up requirement, you must win all three bouts by Ippon specifically. Waza-ari wins do not satisfy the line-up requirement.']
    ],
    mistakes:[
      ['Confusing contest Ippon with kata Ippon','In kata, Ippon refers to winning the kata competition (if entered). In Dan grading, Ippon specifically means contest points. These are different contexts.'],
      ['Not knowing the hold time','Osaekomi for 20+ seconds = Ippon. If the referee calls Osaekomi and you hold for 20 seconds, it\'s Ippon even if the throw was only Waza-ari.']
    ],
    tip:'In training, always attack for Ippon. "Good enough for Waza-ari" judo will earn Waza-ari. Attack with force and speed — full commitment every time.'
  },
  "Waza-ari — Near full point (5 pts in Dan grading)": {
    cat:'knowledge',
    steps:[
      ['⚡','Waza-ari in contest','Waza-ari = 5 contest points toward Dan grade. Waza-ari is scored for: a throw with most but not all Ippon elements, or an Osaekomi hold of 10–19 seconds. Two Waza-ari in one contest = Ippon.'],
      ['📊','Points accumulation','For reaching 100 Dan points, Waza-ari scores are valuable — 20 Waza-ari scores = 100 points. Track both Ippons and Waza-aris in your contest record.'],
      ['🎯','Attacking vs defensive','A defensive player who relies on penalties (Shido) earns no Dan points. Only genuine scoring attacks (throws, holds) earn points toward Shodan.']
    ],
    mistakes:[
      ['Ignoring Waza-ari scores','Some players only count wins. Every Waza-ari score — even in a loss — counts toward your 100 points. Log every contest.'],
      ['Thinking 2×Waza-ari is as good as Ippon for the line-up','Two Waza-ari = Ippon for points. But for the line-up requirement, you need actual Ippon — check current BJA rules on this distinction.']
    ],
    tip:'Keep a written contest log with each event, date, opponent, result, and scores. This is the evidence you present when claiming Dan grade — don\'t rely on memory.'
  },
  "Shiai — Contest": {
    cat:'knowledge',
    steps:[
      ['⚔️','Shiai meaning','Shiai (試合) means contest or competition. It is the competitive element of judo — two players testing their technique against resistance and pressure.'],
      ['🏟️','Role of shiai in judo','Kano designed judo so that randori (practice contest) and shiai (formal contest) would be safe enough to perform at full power, unlike older jujitsu which required either no contact or dangerous contact.'],
      ['🎯','Shiai for Dan grading','Your Dan grade points come from shiai results at BJA-recognised events. Club randori does not count. Enter open competitions, county events, and national events.']
    ],
    mistakes:[
      ['Only training in the dojo','Without shiai experience, randori habits don\'t always translate. Contest pressure is different — enter competitions regularly from Brown Belt onward.'],
      []
    ],
    tip:'Treat every shiai as a learning opportunity regardless of result. Post-competition review (what worked, what didn\'t, what your opponent exploited) accelerates development faster than extra training sessions.'
  },
  "Rei — Bow": {
    cat:'knowledge',
    steps:[
      ['🙏','Rei meaning','Rei (礼) means bow — the fundamental gesture of respect in Japanese martial arts. In judo, you bow before and after every practice, at the entrance to the dojo, to your partner, and in kata.'],
      ['📐','Correct bowing','Standing bow: feet together, bow from the waist approximately 15–30 degrees. Hold for a brief moment. In kata, the bow is more formal with prescribed angles and timing.'],
      ['🌟','Why it matters','Rei is not just formality — it is Kano\'s philosophy made physical. Each bow says: "I respect you, I respect judo, I am ready to learn and to teach."']
    ],
    mistakes:[
      ['Bowing carelessly','A dismissive or rushed bow signals disrespect. The bow should be deliberate and sincere — a habit, not a formality.'],
      ['Forgetting to bow at the dojo entrance','Traditional judo etiquette includes bowing when entering and leaving the training area, regardless of whether anyone is watching.']
    ],
    tip:'The bow before and after randori with a training partner is one of the most important moments in judo. It marks the transition in and out of the practice — a mental cue as much as a physical one.'
  },
  "Judo moral code — eight values of judo character": {
    cat:'knowledge',
    steps:[
      ['🌟','The eight values','(1) Courtesy (Rei / Yuuki no bi); (2) Courage (Yuki); (3) Honesty (Seikyo); (4) Honour (Meiyo); (5) Modesty (Kenso); (6) Respect (Sonkei); (7) Self-control (Jiko Seigyo); (8) Friendship (Yujyo).'],
      ['🥋','Where it came from','The IJF and BJA moral code is derived from Jigoro Kano\'s philosophy — that judo training should develop character as much as physical skill. "Judo is the way of the highest or most efficient use of both physical and mental energy."'],
      ['📋','For the exam','Know all eight by name and be able to give a concrete example of each in judo context. The examiner may ask: "How do you show self-control in competition?" — have an answer.']
    ],
    mistakes:[
      ['Listing values without understanding them','Eight words memorised is not the same as eight principles understood. Think of a real example for each one — from your own training experience.'],
      ['Treating the moral code as separate from judo','The moral code is woven into every part of judo — the bow (courtesy), competing honestly (honour), training when you don\'t feel like it (self-control). It is not an add-on.']
    ],
    tip:'The best demonstration of the moral code is in how you train every day — not just in a grading exam. Examiners can often tell from how a candidate interacts with their Uke whether the values are genuine or performed.'
  }
};
