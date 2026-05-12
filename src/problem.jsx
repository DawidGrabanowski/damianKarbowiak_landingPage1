// "Nie ma tu / Jest za to" — 6-tile contrast bento
function Problem(){
  const noItems = [
    {t:"Obietnic bogactwa", d:"Nie powiem Ci, że za miesiąc zarobisz krocie. Powiem Ci, co musisz zrozumieć, żeby w ogóle zacząć myśleć poważnie o tradingu."},
    {t:"Magicznej strategii", d:"Nie sprzedaję „systemu 100% skuteczności”. Uczę rozumieć rynek — bo to jedyna rzecz, która działa długoterminowo."},
    {t:"Presji sprzedażowej", d:"Nikt Cię nie będzie zasypywał mailami „kup teraz, jutro drożej”. Dostaniesz materiały i możliwość kolejnego kroku — jak będziesz gotowy."},
  ];
  const yesItems = [
    {t:"Konkretna wiedza", d:"Trzy ebooki z realną treścią: psychologia tradingu, analiza techniczna, zarządzanie ryzykiem. Bez lania wody."},
    {t:"Szczerość o trudnościach", d:"Powiem Ci, że nauka zajmuje czas. Że będą straty. Że dyscyplina jest trudna. Bo bez tej wiedzy nie masz szans."},
    {t:"Moje doświadczenie", d:"Uczę z własnej drogi — od absolutnego zera, przez pierwsze straty, do systemu, który działa. Nie z teorii."},
  ];
  return (
    <section className="problem" id="kontrast">
      <div className="wrap">
        <div style={{textAlign:"center", marginBottom: 60}}>
          <span className="eyebrow reveal" style={{justifyContent:"center"}}>Zamiast obietnic — fakty</span>
          <h2 className="h-section reveal delay-1" style={{marginTop:18}}>
            Pełno jest ludzi,<br/>którzy obiecują bogactwo.<br/>
            <em>Ja powiem Ci,<br/>czego tu nie ma.</em>
          </h2>
        </div>

        <div className="contrast">
          <div className="col col-no">
            <div className="col-h">
              <span className="col-tag bad">Nie ma tu</span>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="oklch(0.66 0.18 25)" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
            </div>
            {noItems.map((it,i)=>(
              <div className="ctile reveal" key={i} style={{transitionDelay:`${i*0.08}s`}}>
                <div className="ctile-t bad">{it.t}</div>
                <div className="ctile-d">{it.d}</div>
              </div>
            ))}
          </div>
          <div className="col-divider" aria-hidden="true">
            <span></span>
          </div>
          <div className="col col-yes">
            <div className="col-h">
              <span className="col-tag good">Jest za to</span>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="oklch(0.82 0.14 85)" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/></svg>
            </div>
            {yesItems.map((it,i)=>(
              <div className="ctile reveal" key={i} style={{transitionDelay:`${i*0.08+0.1}s`}}>
                <div className="ctile-t good">{it.t}</div>
                <div className="ctile-d">{it.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Problem = Problem;
