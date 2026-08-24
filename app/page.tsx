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
            <a className="navDropdownTrigger" href="/products">Products <span aria-hidden="true">⌄</span></a>
            <div className="navDropdownMenu" aria-label="Product categories">
              <a href="/products#digital">Digital</a>
              <a href="/products#devices">Devices</a>
            </div>
          </div>
          <a href="#technology">Technology</a>
          <a href="#about">About</a>
        </nav>
        <a className="ghostButton" href="/products">Explore products <Arrow /></a>
      </header>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">PRODUCTS / SYSTEMS / INTELLIGENCE</p>
          <h1>We build boring products for a world that is anything but.</h1>
          <p className="lede">A technology product company building practical digital products and devices people actually use.</p>
          <div className="heroActions">
            <a className="primaryButton" href="/products">Explore our products <Arrow /></a>
            <a className="textLink" href="#about">Why boring? <span>→</span></a>
          </div>
        </div>

        <div className="quantumScene" aria-hidden="true">
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="orbit orbitThree" />
          <div className="core"><div className="coreInner" /></div>
          <span className="particle p1" />
          <span className="particle p2" />
          <span className="particle p3" />
          <span className="particle p4" />
          <span className="particle p5" />
        </div>
      </section>

      <section className="statement shell" id="technology">
        <p className="sectionLabel">TECHNOLOGY</p>
        <div className="statementGrid">
          <h2>Built with modern technology.<br />Focused on practical utility.</h2>
          <p>We use AI, automation, cloud infrastructure, security engineering, data systems, embedded technology, and edge computing where they create real value.</p>
        </div>
      </section>

      <section className="about shell" id="about">
        <p className="sectionLabel">WHY BORING?</p>
        <div className="aboutGrid">
          <h2>The best businesses often solve problems nobody brags about.</h2>
          <div>
            <p>Cost visibility. Local coordination. Operational friction. Everyday problems businesses and communities deal with constantly.</p>
            <p>These are not glamorous problems. They are useful problems. The Boring Product exists to find them, build the right products, ship them, and keep improving them.</p>
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
          <a href="/products">Products</a>
          <a href="#technology">Technology</a>
          <a href="#about">About</a>
        </div>
        <p className="copyright">© 2026 The Boring Product.</p>
      </footer>
    </main>
  );
}
