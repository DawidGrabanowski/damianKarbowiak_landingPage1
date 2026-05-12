// Book "To co porusza" — 19,99 zł (covers shipping)
function CTA(){
  return (
    <section className="cta-section" id="ksiazka">
      <div className="wrap">
        <div className="cta-card reveal">
          <div className="cta-grid">
            <div className="cta-left">
              <span className="eyebrow">Jeśli pójdziesz dalej</span>
              <h2 className="h-section" style={{marginTop:18}}>
                Książka<br/>
                <em>„To co porusza”</em><br/>
                <span style={{fontFamily:"var(--mono)", fontSize:"0.32em", letterSpacing:".14em", color:"var(--ink-dim)", display:"inline-block", marginTop:14, verticalAlign:"top"}}>19,99 ZŁ · TYLKO WYSYŁKA</span>
              </h2>
              <p className="p">
                Po pobraniu wszystkich trzech ebooków dostaniesz ode mnie osobną wiadomość. Nie reklamową — zwykłą. Napiszę, co jest możliwe jako kolejny krok. Między innymi możliwość zamówienia książki.
              </p>

              <ul className="cta-list">
                <li><b>280 stron</b> — moja droga, zasady, błędy i to, co naprawdę działa</li>
                <li><b>Fizyczna, drukowana książka</b> — wysyłka kurierem w 48h</li>
                <li><b>Potwierdzenie telefoniczne</b> — upewniamy się, że adres jest prawidłowy</li>
                <li><b>19,99 zł = koszt wysyłki.</b> Książka jest od Ciebie. Bez sztucznych „super cen” i przekreślonych kwot.</li>
              </ul>

              <div className="honesty-box">
                <div className="hb-h">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/></svg>
                  <span>Jasna zasada</span>
                </div>
                <p>Zarabiamy na szkoleniach, nie na tym, żebyś zapłacił za przesyłkę dwa razy tyle, co ona kosztuje. <b>19,99 zł to pokrycie kosztów.</b> Jeśli książka Cię wciągnie i zechcesz uczyć się dalej — porozmawiamy. Bez presji.</p>
              </div>
            </div>

            <div className="cta-figure" aria-label="Zdjęcie autora">
              <div className="ph">
                Miejsce na zdjęcie<br/>pełnej sylwetki<br/>(profesjonalne tło)
              </div>
              <div className="sig">
                Damian K.
                <span className="sub">AUTOR · UNIWERSYTET TRADINGU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.CTA = CTA;
