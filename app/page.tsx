const products = [
  {
    id: "01",
    slug: "openmaps",
    name: "OPENMAPS",
    status: "EARLY ACCESS",
    command: "./openmaps --info",
    title: "Navigation designed around what you actually see, not just a map.",
    features: ["AR NAVIGATION", "REAL WORLD CONTEXT", "DISCOVER PLACES"],
    primaryLabel: "join waitlist ->",
    primaryHref: "https://openmaps.tech",
    secondaryLabel: "view product",
    secondaryHref: "https://openmaps.tech",
  },
  {
    id: "02",
    slug: "odesseus",
    name: "ODESSEUS",
    status: "LIVE",
    command: "./odesseus --info",
    title: "AI powered career platform.",
    description: "From job discovery to interview preparation in one connected workflow.",
    features: ["FIND OPPORTUNITIES", "OPTIMIZE YOUR RESUME", "PREPARE FOR INTERVIEWS"],
    primaryLabel: "launch product ->",
    primaryHref: "https://odesseus.ai",
    secondaryLabel: "view product",
    secondaryHref: "https://odesseus.ai",
  },
] as const;

function Prompt({ children }: { children: React.ReactNode }) {
  return <div className="prompt"><span>$</span>{children}<i aria-hidden="true" /></div>;
}

function OpenMapsPreview() {
  return (
    <div className="previewTerminal openmapsPreview" aria-label="OpenMaps product preview">
      <div className="previewLabel">// live preview : openmaps</div>
      <div className="streetScene">
        <div className="streetGlow" />
        <div className="phoneFrame">
          <div className="phoneTop" />
          <div className="turnCard"><b>↱</b><span><strong>298 m</strong><small>Continue on 5th Ave</small></span></div>
          <div className="placeTag cafe">☕ <span>Bluestone Cafe<small>120 m</small></span></div>
          <div className="placeTag park">♣ <span>Central Park<small>650 m</small></span></div>
          <div className="placeTag museum">▣ <span>Museum of Modern Art<small>320 m</small></span></div>
          <div className="arPath"><i/><i/><i/><i/><i/></div>
          <div className="walkCard">⌁ <strong>5 min · 1.2 km</strong><small>To Central Park</small></div>
        </div>
      </div>
    </div>
  );
}

function OdesseusPreview() {
  return (
    <div className="previewTerminal odesseusPreview" aria-label="Odesseus product preview">
      <div className="previewLabel">// product preview : odesseus</div>
      <div className="dashboard">
        <aside>
          <strong>◉ Odesseus</strong>
          {["Home","Jobs","Applications","Resume","Interview Prep","Career Coach"].map((item,i)=><span className={i===0?"active":""} key={item}>{item}</span>)}
        </aside>
        <div className="dashMain">
          <div className="dashHead"><div><h4>Good morning, Dr. O 👋</h4><small>Here’s your career progress this week.</small></div><span>search jobs, companies...</span></div>
          <div className="metrics">
            <article><small>Applications</small><strong>12</strong><em>↑ 33% week</em></article>
            <article><small>Interviews</small><strong>4</strong><em>↑ 2 this week</em></article>
            <article><small>Matches</small><strong>18</strong><em>↑ 6 new</em></article>
            <article><small>Profile Strength</small><strong>92%</strong><em>↑ 12%</em></article>
          </div>
          <div className="jobs">
            <div><strong>Recommended for you</strong><small>Based on your profile, experience and goals.</small></div>
            {[["Product Designer","Notion · Full-time · Remote","92% match"],["Senior Product Manager","Stripe · Full-time · Remote","88% match"],["Founding Engineer","Clarity · Full-time · Remote","86% match"]].map(([role,company,match])=>
              <article key={role}><span><b>{role}</b><small>{company}</small></span><em>{match}</em><button>Save</button></article>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="terminalSite">
      <header className="terminalHeader">
        <a href="/" className="terminalBrand">&gt; [ THE BORING PRODUCT v1.0.0 ]</a>
        <nav><a href="#products">[ products ]</a><a href="/about">[ about ]</a><a className="exploreCmd" href="#products">[ explore -&gt; ]</a></nav>
      </header>

      <section className="terminalHero">
        <div className="heroTerminal">
          <Prompt>cat ./README.md</Prompt>
          <h1>THE BORING PRODUCT</h1>
          <h2>Products I built because they should exist.</h2>
          <p>Two products. Built to solve real problems.</p>
          <Prompt>ls products</Prompt>
          <div className="asciiTable" role="table" aria-label="Products">
            <div className="asciiRow asciiHead"><span>#</span><span>NAME</span><span>STATUS</span><span>DESCRIPTION</span></div>
            <div className="asciiRow"><span>01</span><span>OpenMaps</span><span>early-access</span><span>Navigation for the real world.</span></div>
            <div className="asciiRow"><span>02</span><span>Odesseus</span><span>live</span><span>AI career platform.</span></div>
          </div>
        </div>
        <div className="heroAside">
          <div><p>Real problems.</p><p>Practical tools.</p><p>A more open world.</p><b>—</b><a href="#openmaps">&gt; OpenMaps</a><a href="#odesseus">&gt; Odesseus</a></div>
          <pre className="asciiGlobe" aria-hidden="true">{`           .-""""-.
       .-'          '-.
     .'    .-""""-.    '.
    /    .'  .--.  '.    \\
   ;    /   /    \\   \\    ;
   |   ;   |  <>  |   ;   |
   ;    \\   \\____/   /    ;
    \\    '.      .'    /
     '.     '----'     .'
       '-.          .-'
          '--------'`}</pre>
          <div className="heroMotto">SAME<br/>PROBLEMS.<br/>BETTER<br/>TOOLS.<br/>—</div>
        </div>
      </section>

      <section id="products" className="productsTerminal">
        {products.map((product) => (
          <article id={product.slug} className="productTerminal" key={product.slug}>
            <div className="productBar"><span>{product.id} &nbsp;/&nbsp; {product.name}</span><span>[ {product.status} ]</span><span>/apps/{product.slug} ●</span></div>
            <div className="productCopy">
              <Prompt>{product.command}</Prompt>
              <h3>{product.name}</h3>
              <p className="productTitle">{product.title}</p>
              {"description" in product && <p className="productDescription">{product.description}</p>}
              <div className="cmdActions">
                <a className="primaryCmd" href={product.primaryHref} target="_blank" rel="noreferrer">[ {product.primaryLabel} ]</a>
                <a href={product.secondaryHref} target="_blank" rel="noreferrer">[ {product.secondaryLabel} ]</a>
              </div>
              <div className="featureLine">| {product.features.join("  |  ")} |</div>
            </div>
            <div className="productPreview">{product.slug === "openmaps" ? <OpenMapsPreview /> : <OdesseusPreview />}</div>
          </article>
        ))}
      </section>

      <footer className="terminalFooter">
        <span>&gt; OpenMaps and Odesseus -- two products, one portfolio.</span>
        <span>Built by Dr. O. <i aria-hidden="true" /></span>
      </footer>
    </main>
  );
}
