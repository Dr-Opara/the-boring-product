const products = [
  {
    name: "ExpenseMargin",
    status: "LIVE",
    category: "Finance / Operations",
    description: "Margin intelligence for businesses. Track supplier pricing, invoice changes, and cost pressure before they erode profit.",
    href: "https://expensemargin.com",
    domain: "ExpenseMargin.com",
  },
  {
    name: "Jordan Ranch & Tamarron",
    status: "LIVE",
    category: "Community",
    description: "A private digital community for residents, local businesses, marketplace activity, neighborhood deals, and local discovery.",
    href: "https://jrt.community",
    domain: "JRT.community",
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
          <div className="navDropdown">
            <a className="navDropdownTrigger" href="#software">Products <span aria-hidden="true">⌄</span></a>
            <div className="navDropdownMenu" aria-label="Product categories">
              <a href="#software">Software</a>
              <a href="#hardware">Hardware</a>
            </div>
          </div>
          <a href="#technology">Technology</a>
          <a href="#about">About</a>
        </nav>
        <a className="ghostButton" href="#software">Explore products <Arrow /></a>
      </header>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">PRODUCTS / SYSTEMS / INTELLIGENCE</p>
          <h1>We build boring products for a world that is anything but.</h1>
          <p className="lede">
            A technology product company building practical software and shipping products people actually use.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#software">Explore our products <Arrow /></a>
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
          <h2>Live products.<br />Built. Shipped. In use.</h2>
          <p>
            This portfolio only includes products that have reached the market. No concepts, no mockups, and no coming-soon listings.
          </p>
        </div>
      </section>

      <section className="products shell" id="software">
        <div className="categoryHeader">
          <p className="sectionLabel">PRODUCTS / SOFTWARE</p>
          <h2>Software</h2>
        </div>
        <div className="productGrid">
          {products.map((product, index) => (
            <article className="productCard" key={product.name}>
              <div className="productIndex">0{index + 1}</div>
              <div className="productMeta">
                <span>{product.category}</span>
                <span className="status statusLIVE">{product.status}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <a href={product.href} target="_blank" rel="noreferrer" className="cardLink">
                {product.domain} <Arrow />
              </a>
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
          <p className="sectionLabel">BUILT FOR WHAT&apos;S NEXT</p>
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

      <section className="technology hardwareTechnology shell" id="hardware">
        <div className="techCopy">
          <p className="sectionLabel">HARDWARE / BUILT FOR THE PHYSICAL WORLD</p>
          <h2>Devices engineered where intelligence meets the real world.</h2>
          <p>
            We are expanding beyond software into purpose-built hardware — connected devices, edge systems, intelligent sensors, and physical products designed to solve practical problems with the same focus on utility.
          </p>
          <div className="capabilities">
            <span>Connected Devices</span>
            <span>Edge Computing</span>
            <span>Embedded Systems</span>
            <span>Intelligent Sensors</span>
            <span>Device Security</span>
            <span>Hardware R&amp;D</span>
          </div>
        </div>
        <div className="techVisual hardwareVisual" aria-hidden="true">
          <div className="gridPlane" />
          <div className="deviceShell">
            <div className="deviceCore" />
            <span className="devicePort portOne" />
            <span className="devicePort portTwo" />
            <span className="devicePort portThree" />
          </div>
        </div>
      </section>

      <section className="about shell" id="about">
        <p className="sectionLabel">WHY BORING?</p>
        <div className="aboutGrid">
          <h2>The best businesses often solve problems nobody brags about.</h2>
          <div>
            <p>
              Cost visibility. Local coordination. Operational friction. Everyday problems businesses and communities deal with constantly.
            </p>
            <p>
              These are not glamorous problems. They are useful problems. The Boring Product exists to find them, build the right products, ship them, and keep improving them.
            </p>
          </div>
        </div>
      </section>

      <section className="manifesto shell">
        <div className="manifestoLine"><span>01</span><strong>Find the problem.</strong></div>
        <div className="manifestoLine"><span>02</span><strong>Build the simplest useful solution.</strong></div>
        <div className="manifestoLine"><span>03</span><strong>Ship it.</strong></div>
        <div className="manifestoLine"><span>04</span><strong>Make it better.</strong></div>
      </section>

      <footer className="footer shell" id="contact">
        <div>
          <a className="brand" href="#top">The Boring Product</a>
          <p>We build boring products that solve real problems.</p>
          <div className="footerContact">
            <a href="mailto:info@theboringproduct.com">info@theboringproduct.com</a>
            <span>Austin, TX</span>
            <a href="https://x.com/TheBoringProduct" target="_blank" rel="noreferrer">X / @TheBoringProduct</a>
          </div>
        </div>
        <div className="footerLinks">
          <a href="#software">Software</a>
          <a href="#hardware">Hardware</a>
          <a href="#technology">Technology</a>
          <a href="#about">About</a>
        </div>
        <p className="copyright">© 2026 The Boring Product.</p>
      </footer>
    </main>
  );
}
