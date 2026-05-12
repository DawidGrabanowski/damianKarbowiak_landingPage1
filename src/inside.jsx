// 3 ebooks delivery timeline — "Co dostajesz krok po kroku"
function Inside(){
  const ebooks = [
    {n:"01", when:"od razu po zapisie", t:"Filozofia i Psychologia Tradingu", d:"Dlaczego większość ludzi traci — i co sprawia, że niektórym się udaje. Bez mentalności nie ma systemu."},
    {n:"02", when:"po 24 godzinach", t:"Analiza Techniczna — Podstawy", d:"Jak czytać wykresy. Trendy, wsparcia, opory, formacje. Trading to gra wzrokowa — nauczysz się jej języka."},
    {n:"03", when:"po kolejnej dobie", t:"Zarządzanie Ryzykiem", d:"Stop Loss, Take Profit, stosunek zysku do ryzyka. To nie jest nudna teoria — to jest to, co oddziela tradera od hazardzisty."},
  ];
  return (
    <section className="inside" id="ebooki">
      <div className="wrap">
        <div className="inside-head">
          <div>
            <span className="eyebrow reveal">Co dostajesz</span>
            <h2 className="h-section reveal delay-1" style={{marginTop:18}}>
              Krok po kroku.<br/>
              Jeden ebook,<br/>
              <em>czas na czytanie,</em><br/>
              potem kolejny.
            </h2>
          </div>
          <p className="lede reveal delay-2">
            Nie wyślę Ci wszystkiego naraz. Bo zauważyłem przez lata na szkoleniach, że materiały pobrane hurtem — zostają nieprzeczytane. Wolę wysłać Ci jeden ebook i dać 24 godziny, żebyś go naprawdę przejrzał. Jeśli chcesz szybciej — napisz, dogadamy się.
          </p>
        </div>

        <div className="ebook-rail">
          {ebooks.map((e,i)=>(
            <div className="ebook" key={e.n}>
              <div className="ebook-cover">
                <div className="eb-spine"/>
                <div className="eb-face">
                  <div className="eb-no">EBOOK {e.n}</div>
                  <div className="eb-mini-chart" aria-hidden="true">
                    {i === 0 && (
                      <svg viewBox="0 0 100 60"><path d="M5,50 C20,40 25,30 35,32 S50,15 65,25 S90,10 95,15" fill="none" stroke="oklch(0.88 0.14 85)" strokeWidth="1.6"/><circle cx="95" cy="15" r="3" fill="oklch(0.88 0.14 85)"/></svg>
                    )}
                    {i === 1 && (
                      <svg viewBox="0 0 100 60">
                        <g stroke="oklch(0.88 0.14 85)" strokeWidth="1.2" fill="none">
                          <line x1="10" y1="20" x2="10" y2="40"/><rect x="6" y="24" width="8" height="12" fill="oklch(0.88 0.14 85 / .7)"/>
                          <line x1="28" y1="15" x2="28" y2="45"/><rect x="24" y="20" width="8" height="20" fill="oklch(0.88 0.14 85 / .7)"/>
                          <line x1="46" y1="12" x2="46" y2="38"/><rect x="42" y="16" width="8" height="14"/>
                          <line x1="64" y1="22" x2="64" y2="50"/><rect x="60" y="26" width="8" height="18" fill="oklch(0.88 0.14 85 / .7)"/>
                          <line x1="82" y1="8" x2="82" y2="35"/><rect x="78" y="12" width="8" height="18" fill="oklch(0.88 0.14 85 / .7)"/>
                        </g>
                      </svg>
                    )}
                    {i === 2 && (
                      <svg viewBox="0 0 100 60">
                        <g fill="none" stroke="oklch(0.88 0.14 85)" strokeWidth="1.2">
                          <line x1="10" y1="30" x2="90" y2="30" strokeDasharray="3 3"/>
                          <path d="M10,30 L30,20 L50,35 L70,15 L90,28" />
                          <line x1="10" y1="15" x2="90" y2="15" stroke="oklch(0.75 0.17 150 / .8)"/>
                          <line x1="10" y1="48" x2="90" y2="48" stroke="oklch(0.66 0.18 25 / .8)"/>
                          <text x="92" y="14" fontFamily="JetBrains Mono" fontSize="6" fill="oklch(0.75 0.17 150)">TP</text>
                          <text x="92" y="51" fontFamily="JetBrains Mono" fontSize="6" fill="oklch(0.66 0.18 25)">SL</text>
                        </g>
                      </svg>
                    )}
                  </div>
                  <div className="eb-title">{e.t}</div>
                  <div className="eb-foot">UNIWERSYTET TRADINGU</div>
                </div>
              </div>
              <div className="ebook-meta">
                <div className="eb-when">{e.when}</div>
                <div className="eb-h">{e.t}</div>
                <div className="eb-d">{e.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="rail-note reveal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{color:"var(--gold)"}}><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>
          <p>
            <b>Dlaczego jeden po drugim?</b> Bo zauważyłem przez lata na szkoleniach, że materiały pobrane hurtem — zostają nieprzeczytane. Wolę wysłać Ci jeden ebook i dać 24 godziny, żebyś go naprawdę przejrzał.
          </p>
        </div>
      </div>
    </section>
  );
}
window.Inside = Inside;
