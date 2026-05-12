// Final CTA + FAQ
const { useState: useStateFaq } = React;

function FAQItem({q, a, open, onClick}){
  return (
    <div className={`q-item ${open ? "open":""}`} onClick={onClick}>
      <div className="q-head">
        <div className="t">{q}</div>
        <div className="sign" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14"/></svg>
        </div>
      </div>
      <div className="q-body"><div><p>{a}</p></div></div>
    </div>
  );
}

function FinalCTA(){
  const [name, setName] = useStateFaq("");
  const [email, setEmail] = useStateFaq("");
  const [ok, setOk] = useStateFaq(false);
  function submit(e){
    e.preventDefault();
    if(name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setOk(true);
  }
  return (
    <section className="final-cta">
      <div className="wrap">
        <div className="fc-card reveal">
          <span className="eyebrow" style={{justifyContent:"center"}}>Zacznij teraz</span>
          <h2 className="h-section" style={{marginTop:18, textAlign:"center"}}>
            Zostaw maila — zacznij<br/>
            od materiałów, które<br/>
            <em>nic nie kosztują.</em>
          </h2>
          <p className="lede" style={{margin:"22px auto 0", textAlign:"center", maxWidth:"58ch"}}>
            Żadnego hype'u. Żadnych obietnic. Tylko konkretna wiedza, którą możesz przejrzeć we własnym tempie i zdecydować, czy to jest droga dla Ciebie.
          </p>

          <form className="fc-form" onSubmit={submit}>
            <div className="fc-row">
              <input type="text" placeholder="Imię" value={name} onChange={e=>setName(e.target.value)} required />
            </div>
            <div className="fc-row">
              <input type="email" placeholder="twoj@email.pl" value={email} onChange={e=>setEmail(e.target.value)} required />
            </div>
            <button className="btn-primary" type="submit">
              <span>Wyślij mi materiały</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </form>

          {ok && (
            <div className="success" style={{maxWidth:520, margin:"22px auto 0"}}>
              <span className="ok">✓</span>
              <div><b>{name}, sprawdź skrzynkę.</b><p>Pierwszy ebook leci na {email}. Kolejne — co 24h.</p></div>
            </div>
          )}

          <p className="fc-foot">Możesz wypisać się w każdej chwili jednym kliknięciem. Nic więcej bez Twojej zgody.</p>
        </div>
      </div>
    </section>
  );
}

function FAQ(){
  const [open, setOpen] = useStateFaq(0);
  const items = [
    {q:"Co dokładnie dostanę po zapisaniu się?", a:"Trzy ebooki ze szkolenia — jeden po drugim, co 24 godziny. Pierwszy o psychologii tradingu, drugi o podstawach analizy technicznej, trzeci o zarządzaniu ryzykiem. Konkretne PDF-y, bez logowania, bez kont, bez subskrypcji."},
    {q:"Dlaczego ebooki przychodzą po jednym, a nie wszystkie naraz?", a:"Bo materiały pobrane hurtem — zostają nieprzeczytane. Zauważyłem to przez lata na szkoleniach. Wolę dać Ci 24 godziny na jeden ebook, żebyś go naprawdę przejrzał. Jeśli chcesz szybciej — napisz do mnie, dogadamy się."},
    {q:"Czy będziecie mnie zasypywać mailami sprzedażowymi?", a:"Nie. Dostaniesz trzy maile z materiałami, potem jeden zwykły z propozycją kolejnego kroku — jeśli będziesz chciał. Możesz wypisać się w każdej chwili jednym kliknięciem. Nikt nie będzie pisał „kup teraz, jutro drożej”."},
    {q:"Książka „To co porusza” kosztuje 19,99 zł — co jest w tej cenie?", a:"Pełna fizyczna książka, 280 stron, drukowana, wysłana kurierem w 48 godzin. 19,99 zł pokrywa koszt wysyłki i pakowania. Sama książka jest od Ciebie — zarabiamy na szkoleniach, nie na przesyłce."},
    {q:"Czy muszę mieć doświadczenie albo duży kapitał?", a:"Nie. Zaczynamy od zera — od psychologii i tego, jak w ogóle myśleć o rynku. Nie potrzebujesz dużego kapitału. Potrzebujesz wiedzy i cierpliwości."},
    {q:"Czy to są „gotowe sygnały, co kupić”?", a:"Nie. I to świadoma decyzja. Sygnały uzależniają i nie uczą Cię niczego. Dostajesz metodę — psychologię, sposób czytania wykresu, zarządzanie ryzykiem. Po materiałach sam podejmujesz decyzje."},
  ];
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <div>
            <span className="eyebrow">Najczęstsze pytania</span>
            <h2 className="h-section" style={{marginTop:18}}>Zanim zapytasz —<br/>pewnie mam odpowiedź.</h2>
            <p className="p">Jeżeli nie — napisz na <b style={{color:"var(--gold-soft)"}}>kontakt@damiankarbowiak.pl</b>. Odpowiadam osobiście.</p>
          </div>
          <div>
            {items.map((it,i)=>(
              <FAQItem key={i} q={it.q} a={it.a} open={open===i} onClick={()=>setOpen(open===i ? -1 : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.FAQ = FAQ;
window.FinalCTA = FinalCTA;
