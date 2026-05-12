function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <img src={(typeof window!=="undefined" && window.__resources && window.__resources.footerLogo) || "https://assets.cdn.filesafe.space/yB8EcAXY6HmJBLLJkMcE/media/6a03161a7f9c717c7ca2d147.png"} alt="Uniwersytet Tradingu" style={{ objectFit: "contain", width: "100px", height: "100px" }} />
          <div>
            <div className="lg">DAMIAN KARBOWIAK</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".22em", color: "var(--ink-faint)", marginTop: 4 }}>UNIWERSYTET TRADINGU · damiankarbowiak.pl</div>
          </div>
        </div>
        <div className="links">
          <a href="#">Polityka prywatności</a>
          <a href="#">Regulamin</a>
          <a href="#">Kontakt</a>
        </div>
        <div className="copy">© 2026 Damian Karbowiak · Trading i edukacja finansowa</div>
      </div>
      <div className="wrap" style={{ marginTop: 30, fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: ".08em", color: "oklch(0.45 0.02 260)", lineHeight: 1.7, maxWidth: 860 }}>
        Trading wiąże się z ryzykiem utraty kapitału. Materiały mają charakter edukacyjny i nie stanowią doradztwa inwestycyjnego w rozumieniu obowiązujących przepisów. Wyniki historyczne nie są gwarancją wyników przyszłych.
      </div>
    </footer>);

}
window.Footer = Footer;