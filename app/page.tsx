const products = [
  {
    name: "ExpenseMargin",
    status: "LIVE",
    category: "Finance / Operations",
    description: "Margin intelligence for businesses. Track supplier pricing, invoice changes, and cost pressure before they erode profit.",
  },
  {
    name: "ProcessPilot",
    status: "LIVE",
    category: "AI / Cybersecurity",
    description: "AI engineering, cybersecurity, and workflow automation for modern organizations.",
  },
  {
    name: "Erase",
    status: "BUILDING",
    category: "Cybersecurity",
    description: "Secure digital destruction and data disposal products for individuals and organizations.",
  },
  {
    name: "Jordan Ranch & Tamarron",
    status: "BETA",
    category: "Community",
    description: "A private digital community for residents, local businesses, marketplace activity, and neighborhood discovery.",
  },
  {
    name: "Odysseus",
    status: "LAB",
    category: "Infrastructure",
    description: "Autonomous infrastructure monitoring, vulnerability detection, and remediation.",
  },
  {
    name: "TimeSheet.ai",
    status: "LAB",
    category: "Workforce",
    description: "Simple, intelligent time tracking and workforce management for small businesses.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top">The Boring Product</a>
        <nav className="navLinks" aria-label="Primary navigation">
          <a href="#products">Products</a>
          <a href="#technology">Technology</a>
          <a href="#about">About</a>
        </nav>
        <a className="ghostButton" href="#products">Explore products <Arrow /></a>
      </header>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">PRODUCTS / SYSTEMS / INTELLIGENCE</p>
          <h1>We build boring products for a world that is anything but.</h1>
          <p className="lede">
            A technology product company building practical software across AI, cybersecurity, finance, infrastructure, and community.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#products">Explore our products <Arrow /></a>
            <a className="textLink" href="#about">Why boring? <span>→</span></a>
          </div>
        </div>

        <div className="quantumScene" aria-hidden="true">
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="orbit orbitThree" />
          <div className="core">
            <div className="coreInner" />
          </div>
          <span className="particle p1" />
          <span className="particle p2" />
          <span className="particle p3" />
          <span className="particle p4" />
          <span className="particle p5" />
        </div>
      </section>

      <section className="statement shell">
        <p className="sectionLabel">THE PORTFOLIO</p>
        <div className="statementGrid">
          <h2>Useful products.<br />Built. Shipped. Improved.</h2>
          <p>
            We focus on problems that are operational, expensive, repetitive, overlooked, or simply boring — then build products that make them better.
          </p>
        </div>
      </section>

      <section className="products shell" id="products">
        <div className="productGrid">
          {products.map((product, index) => (
            <article className="productCard" key={product.name}>
              <div className="productIndex">0{index + 1}</div>
              <div className="productMeta">
                <span>{product.category}</span>
                <span className={`status status${product.status.replace(" ", "")}`}>{product.status}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <a href="#contact" className="cardLink">View product <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="technology shell" id="technology">
        <div className="techVisual" aria-hidden="true">
          <div className="gridPlane" />
          <div className="techCube cubeOne" />
          <div className="techCube cubeTwo" />
          <div className="techCube cubeThree" />
        </div>
        <div className="techCopy">
          <p className="sectionLabel">BUILT FOR WHAT'S NEXT</p>
          <h2>Software at the intersection of intelligence and utility.</h2>
          <p>
            We use modern AI, automation, cloud infrastructure, security engineering, and data systems where they create real leverage — not because they look impressive on a pitch deck.
          </p>
          <div className="capabilities">
            <span>Artificial Intelligence</span>
            <span>Cybersecurity</span>
            <span>Automation</span>
            <span>Cloud Infrastructure</span>
            <span>Data Intelligence</span>
            <span>Applied R&amp;D</span>
          </div>
        </div>
      </section>

      <section className="about shell" id="about">
        <p className="sectionLabel">WHY BORING?</p>
        <div className="aboutGrid">
          <h2>The best businesses often solve problems nobody brags about.</h2>
          <div>
            <p>
              Supplier costs. Time tracking. Security controls. Infrastructure reliability. Community coordination. Data disposal.
            </p>
            <p>
              These are not glamorous problems. They are useful problems. The Boring Product exists to find them, build the right software, ship it, and keep improving it.
            </p>
          </div>
        </div>
      </section>

      <section className="manifesto shell">
        <div className="manifestoLine">
          <span>01</span><strong>Find the problem.</strong>
        </div>
        <div className="manifestoLine">
          <span>02</span><strong>Build the simplest useful solution.</strong>
        </div>
        <div className="manifestoLine">
          <span>03</span><strong>Ship it.</strong>
        </div>
        <div className="manifestoLine">
          <span>04</span><strong>Make it better.</strong>
        </div>
      </section>

      <footer className="footer shell" id="contact">
        <div>
          <a className="brand" href="#top">The Boring Product</a>
          <p>We build boring products that solve real problems.</p>
        </div>
        <div className="footerLinks">
          <a href="#products">Products</a>
          <a href="#technology">Technology</a>
          <a href="#about">About</a>
        </div>
        <p className="copyright">© 2026 The Boring Product.</p>
      </footer>
    </main>
  );
}
