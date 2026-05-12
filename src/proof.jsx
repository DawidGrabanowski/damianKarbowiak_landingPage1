// "To nie jest coaching sukcesu. To nauka rzemiosła." — 5 principles
function Proof(){
  const principles = [
    {n:"01", t:"Trading to umiejętność", d:"jak jazda samochodem. Uczysz się raz, używasz całe życie."},
    {n:"02", t:"90% ludzi traci na rynku", d:"nie dlatego, że są głupi — tylko dlatego, że nikt ich porządnie nie nauczył."},
    {n:"03", t:"Dyscyplina > strategia", d:"Zasady zarządzania ryzykiem są ważniejsze niż każda strategia."},
    {n:"04", t:"Nie potrzebujesz dużego kapitału", d:"Potrzebujesz wiedzy i cierpliwości. Tyle."},
    {n:"05", t:"Nauka trwa", d:"Nie ma drogi na skróty. Ale jest konkretna droga."},
  ];
  return (
    <section className="proof" id="zasady">
      <div className="wrap">
        <div className="proof-head">
          <div>
            <span className="eyebrow reveal">O czym tu naprawdę chodzi</span>
            <h2 className="h-section reveal delay-1" style={{marginTop:18}}>
              To nie jest coaching<br/>sukcesu. To <em>nauka<br/>rzemiosła.</em>
            </h2>
          </div>
          <p className="lede reveal delay-2">
            Pięć zdań, które musisz przyjąć, zanim w ogóle zaczniemy. Jeśli któreś Cię zniechęca — to dobrze. Nie tracimy nawzajem czasu.
          </p>
        </div>

        <div className="principles">
          {principles.map((p,i)=>(
            <div className="pr" key={p.n}>
              <div className="pr-no">{p.n}</div>
              <div className="pr-t">{p.t}</div>
              <div className="pr-d">{p.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Proof = Proof;
