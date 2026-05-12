const { useEffect: useEffectApp } = React;

function App(){
  useEffectApp(()=>{
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
      });
    },{ threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  },[]);

  return (
    <>
      <Hero/>
      <Ticker/>
      <Author/>
      <Proof/>
      <Problem/>
      <Inside/>
      <CTA/>
      <FinalCTA/>
      <FAQ/>
      <Footer/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App/>);
