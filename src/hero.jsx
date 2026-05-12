// Hero — "Uczę tradingu. Nie obiecuję, że będziesz bogaty."
const { useEffect, useRef, useState } = React;

function SealSVG(){
  return (
    <svg viewBox="0 0 100 100">
      <defs>
        <path id="circ" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
      </defs>
      <text>
        <textPath href="#circ" startOffset="0">
          280 STRON • DARMOWA WYSYŁKA W 48H • UNIWERSYTET TRADINGU •
        </textPath>
      </text>
      <g fill="none" stroke="oklch(0.82 0.14 85 / .7)" strokeWidth=".8">
        <circle cx="50" cy="50" r="26" />
        <circle cx="50" cy="50" r="18" strokeDasharray="2 3" />
      </g>
      <text x="50" y="54" textAnchor="middle" style={{fontFamily:"Instrument Serif, serif", fontSize:11, fill:"oklch(0.82 0.14 85)"}}>
        DK
      </text>
    </svg>
  );
}

function CoverChart(){
  return (
    <svg className="cover-chart" viewBox="0 0 300 120" preserveAspectRatio="none">
      <defs>
        <linearGradient id="fill1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.82 0.14 85 / .55)"/>
          <stop offset="1" stopColor="oklch(0.82 0.14 85 / 0)"/>
        </linearGradient>
      </defs>
      <g stroke="oklch(0.35 0.05 85 / .35)" strokeWidth=".5">
        {[0,1,2,3].map(i=>(<line key={i} x1="0" y1={i*30+15} x2="300" y2={i*30+15} />))}
      </g>
      <path d="M0,90 L20,82 L40,88 L60,70 L80,76 L100,60 L120,62 L140,48 L160,52 L180,36 L200,40 L220,24 L240,30 L260,18 L280,22 L300,8 L300,120 L0,120 Z"
        fill="url(#fill1)" />
      <path d="M0,90 L20,82 L40,88 L60,70 L80,76 L100,60 L120,62 L140,48 L160,52 L180,36 L200,40 L220,24 L240,30 L260,18 L280,22 L300,8"
        fill="none" stroke="oklch(0.88 0.14 85)" strokeWidth="1.6" />
    </svg>
  );
}

function Hero(){
  const tiltRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");

  useEffect(()=>{
    const el = tiltRef.current;
    if(!el) return;
    if(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0, lx = 0, ly = 0;
    function apply(){
      raf = 0;
      const rect = el.getBoundingClientRect();
      const dx = (lx - (rect.left + rect.width/2)) / rect.width;
      const dy = (ly - (rect.top + rect.height/2)) / rect.height;
      const clamp = (v, m) => Math.max(-m, Math.min(m, v));
      const rx = clamp(-dy * 6, 6);
      const ry = clamp(dx * 8, 8);
      el.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    }
    function onMove(e){
      lx = e.clientX; ly = e.clientY;
      if(!raf) raf = requestAnimationFrame(apply);
    }
    function onLeave(){
      if(raf){ cancelAnimationFrame(raf); raf = 0; }
      el.style.transform = "";
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return ()=>{
      if(raf) cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  },[]);

  function submit(e){
    e.preventDefault();
    if(!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ setState("err"); return; }
    setState("ok");
  }

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-left">
          <div className="kicker">
            <span className="kicker-pill"><span className="kicker-dot" style={{display:"inline-block",marginRight:8,verticalAlign:"middle"}}/> DAMIAN KARBOWIAK · TRADER I NAUCZYCIEL</span>
          </div>

          <h1 className="h-display hero-title">
            <span className="line"><span className="line-inner">Uczę tradingu.</span></span>
            <span className="line"><span className="line-inner"><em>Nie obiecuję,</em></span></span>
            <span className="line"><span className="line-inner">że będziesz bogaty.</span></span>
          </h1>

          <p className="hero-sub">
            Ale mówię wprost: jeśli weźmiesz się za to <b>poważnie</b>, nauczysz się zasad i będziesz ich trzymać — <b>da się z tego dobrze żyć</b>. Zostaw imię i maila — wyślę Ci trzy ebooki ze szkolenia. Jeden po drugim, żebyś miał czas naprawdę przeczytać.
          </p>

          <form className="hero-form two-row" onSubmit={submit} id="capture">
            <div className="hf-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{color:"var(--ink-faint)", marginLeft:12}}>
                <circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>
              </svg>
              <input
                type="text"
                placeholder="Imię"
                value={name}
                onChange={e=>{setName(e.target.value); if(state!=="idle") setState("idle");}}
                aria-label="Imię"
              />
            </div>
            <div className="hf-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{color:"var(--ink-faint)", marginLeft:12}}>
                <rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>
              </svg>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="twoj@email.pl"
                value={email}
                onChange={e=>{setEmail(e.target.value); if(state!=="idle") setState("idle");}}
                aria-label="Adres e-mail"
              />
              <button className="btn-primary" type="submit">
                <span>Chcę materiały</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
            </div>
          </form>

          {state === "ok" && (
            <div className="success" role="status">
              <span className="ok">✓</span>
              <div>
                <b>{name}, sprawdź skrzynkę.</b>
                <p>Pierwszy ebook („Filozofia i Psychologia Tradingu") leci do Ciebie na <code style={{fontFamily:"var(--mono)"}}>{email}</code>. Kolejne — co 24 godziny.</p>
              </div>
            </div>
          )}
          {state === "err" && (
            <div className="success" role="status" style={{borderColor:"oklch(0.55 0.18 25 / .6)", background:"oklch(0.3 0.1 25 / .15)"}}>
              <span className="ok" style={{background:"var(--red)"}}>!</span>
              <div>
                <b>Uzupełnij imię i poprawny adres e-mail.</b>
                <p>Format: imie@domena.pl</p>
              </div>
            </div>
          )}

          <div className="form-meta">
            <span>
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/></svg>
              Żadnego spamu · wypisz się jednym kliknięciem
            </span>
            <span>
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h10"/></svg>
              3 ebooki · jeden po drugim · co 24h
            </span>
            <span>
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>
              Bez presji · bez „kup teraz, jutro drożej"
            </span>
          </div>

          <div className="hero-stats">
            <div className="st">
              <div className="num">2025</div>
              <div className="lab">Statement Damiana</div>
            </div>
            <div className="st">
              <div className="num">10 000 $</div>
              <div className="lab">Start</div>
            </div>
            <div className="st">
              <div className="num">3 M +</div>
              <div className="lab">Koniec roku $</div>
            </div>
            <div className="st">
              <div className="num">14 lat</div>
              <div className="lab">Praktyki rynkowej</div>
            </div>
          </div>
        </div>

        <div className="book-stage">
          <div className="book-rings">
            <div className="ring r1" style={{width:"92%",height:"92%",position:"absolute",borderRadius:"50%",border:"1px solid oklch(0.55 0.09 85 / .35)"}}/>
            <div className="ring r2" style={{width:"72%",height:"72%",position:"absolute",borderRadius:"50%",border:"1px dashed oklch(0.5 0.1 220 / .35)"}}/>
            <div className="ring r3" style={{width:"52%",height:"52%",position:"absolute",borderRadius:"50%",border:"1px solid oklch(0.6 0.12 85 / .45)"}}/>
          </div>
          <div className="book-pedestal" />
          <div className="book-tilt" ref={tiltRef}>
            <div className="book-3d">
              <div className="book-face">
                <div className="face-back"/>
                <div className="face-spine"/>
                <div className="face-top"/>
                <div className="face-bottom"/>
                <div className="face-side"/>
                <div className="face-front cover-img">
                  <img src={(typeof window!=="undefined" && window.__resources && window.__resources.bookCover) || "https://assets.cdn.filesafe.space/yB8EcAXY6HmJBLLJkMcE/media/6a03100f82125b9874690e80.png"} alt="Książka: To co porusza — Damian Karbowiak" />
                  <div className="cover-gloss" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="book-badges">
            <span>3 darmowe ebooki</span><span>Książka 19,99 zł</span><span>Wysyłka 48h</span>
          </div>

          <div className="hover-card" aria-hidden="true">
            <div className="hc-lab">Statement · 2025</div>
            <div className="hc-val">10 000 → 3M $</div>
            <div className="hc-row"><span>Drawdown max</span><span className="up" style={{color:"var(--ink-dim)"}}>kontrolowany</span></div>
            <div className="hc-row"><span>Strategia</span><span>zasady, nie magia</span></div>
            <div className="hc-row"><span>Dyscyplina</span><span style={{color:"var(--green)"}}>codziennie</span></div>
          </div>

          <div className="hover-card-2" aria-hidden="true">
            <div className="av">
              <div className="av-img">DK</div>
              <div>
                <div className="av-name">Damian Karbowiak</div>
                <div className="av-role">UNIWERSYTET TRADINGU</div>
              </div>
            </div>
            <div className="quote">„Nie sprzedaję marzenia. <i>Uczę rzemiosła.</i>”</div>
          </div>
        </div>
      </div>

      <div className="wrap hero-pact reveal">
        <div className="pact-line"></div>
        <p>
          <b>Zanim zostawisz mi swojego maila — powiem Ci coś szczerze:</b> nie sprzedaję marzenia o szybkim bogactwie. Uczę konkretnych zasad, które działają — bo sam je stosuję od lat. Jeśli szukasz cudownej metody, masz nie ten adres. <em>Jeśli chcesz się naprawdę nauczyć — zapraszam.</em>
        </p>
      </div>
    </section>
  );
}

window.Hero = Hero;
