// Author story — "Kim jestem i dlaczego w ogóle Cię uczę"
function Author(){
  return (
    <section className="author" id="autor">
      <div className="wrap">
        <div className="author-wrap">
          <div className="portrait reveal">
            <img
              src={(typeof window!=="undefined" && window.__resources && window.__resources.authorPhoto) || "https://assets.cdn.filesafe.space/yB8EcAXY6HmJBLLJkMcE/media/6974fdceeb392bbca20dc12f.jpeg"}
              alt="Damian Karbowiak"
              style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top"}}
            />
            <div className="quote-tag">
              „Zamiast szukać winnych — zapytałem siebie, co zrobiłem źle. I zacząłem od nowa, tym razem z głową.”
              <span className="src">— DAMIAN KARBOWIAK</span>
            </div>
          </div>

          <div className="author-copy">
            <span className="eyebrow reveal">Kim jestem</span>
            <h2 className="h-section reveal delay-1" style={{marginTop:18}}>
              Zaczynałem z<br/>absolutnego <em>zera.</em>
            </h2>
            <p className="p reveal delay-1">
              Wieś. Brak rodziców. Babcia z emerytury 1 350 zł. Pierwsze lata za granicą — <b>15 godzin pracy dziennie</b>. Byłem zmęczony. Wiedziałem, że tak nie może wyglądać całe życie.
            </p>
            <p className="p reveal delay-2">
              Trafiłem na Forex. Najpierw straciłem wszystko, bo trafiłem na oszusta. <em>Zamiast szukać winnych</em> — zapytałem siebie, co zrobiłem źle. I zacząłem od nowa, tym razem z głową.
            </p>
            <p className="p reveal delay-3">
              Dziś mój statement za 2025 rok: start 10 000 USD, koniec — ponad 3 miliony. <b>Nie po to tu piszę, żeby się chwalić.</b> Po to, żeby było jasne: ta droga istnieje. Ale wymaga pracy i dyscypliny — nie magii.
            </p>
            <p className="p reveal delay-3">
              Uczę, bo to sprawia mi największą satysfakcję. Widzieć, jak ktoś naprawdę zrozumie — i zacznie zarabiać. Robiłem to przez lata na warsztatach w Polsce i Europie. Teraz chcę dotrzeć do więcej osób.
            </p>

            <div className="author-facts reveal delay-3">
              <div className="f"><div className="n">14 lat</div><div className="l">Na rynku</div></div>
              <div className="f"><div className="n">Polska<br/>+ Europa</div><div className="l">Warsztaty stacjonarne</div></div>
              <div className="f"><div className="n">2025</div><div className="l">Statement: 10k → 3M USD</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Author = Author;
