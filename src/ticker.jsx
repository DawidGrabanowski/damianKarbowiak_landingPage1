// Quiet brand band — replaced the ticker. Calm, honest tone.
function Ticker(){
  const items = [
    "ZASADY ZAMIAST OBIETNIC",
    "RZEMIOSŁO, NIE COACHING",
    "DYSCYPLINA > STRATEGIA",
    "DOSTAJESZ — NIE KUPUJESZ",
    "BEZ HYPE'U · BEZ PRESJI",
    "10 000 $ → 3 M $ · STATEMENT 2025",
    "TRADING JAK JAZDA SAMOCHODEM",
    "NAUCZ SIĘ RAZ · UŻYWAJ CAŁE ŻYCIE",
  ];
  return (
    <section className="ticker-band" aria-hidden="true">
      <div className="ticker calm">
        {[...items, ...items, ...items].map((it, i)=>(
          <span className="tk" key={i}>
            <span className="dot" />
            <span className="sym" style={{letterSpacing:".24em", fontWeight:500, fontSize:12, color:"var(--ink-dim)"}}>{it}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
window.Ticker = Ticker;
