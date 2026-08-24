function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function BrandLogo() {
  return (
    <span className="brandLogo" aria-label="The Boring Product">
      <span className="brandThe">THE</span>
      <span className="brandBoring">BORING</span>
      <span className="brandBottom"><span className="brandLines" aria-hidden="true" /><span className="brandProduct">PRODUCT</span></span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav shell newNav">
        <a className="brand brandMark" href="#top"><BrandLogo /></a>
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
        <a className="ghostButton heroNavButton" href="/products">Explore Products</a>
      </header>

      <section className="hero shell heroRefresh" id="top">
        <div className="heroCopy heroCopyRefresh">
          <h1>We build products<br />that solve real problems.</h1>
          <p className="lede">The Boring Product builds digital products and devices that make life simpler, businesses smarter, and the future more connected.</p>
          <div className="heroActions">
            <a className="primaryButton primaryButtonRefresh" href="/products">Explore Products <Arrow /></a>
          </div>
        </div>

        <div className="portalScene" aria-hidden="true">
          <div className="portalGlow" />
          <div className="portalRing" />
          <div className="portalBase"><div className="portalBaseInner" /></div>
          <div className="portalFloor" />
        </div>
      </section>

      <section className="valueStrip shell" aria-label="What we value">
        <article><span className="valueIcon">◌</span><div><h3>Innovative by Design</h3><p>We create products that combine simplicity, usability, and intelligence.</p></div></article>
        <article><span className="valueIcon">◇</span><div><h3>Secure &amp; Reliable</h3><p>Security and reliability are built in from day one.</p></div></article>
        <article><span className="valueIcon">↗</span><div><h3>Built for Impact</h3><p>Everything we build is designed to make a meaningful difference.</p></div></article>
        <article><span className="valueIcon">◎</span><div><h3>Focused on You</h3><p>We build for real people and real businesses with real needs.</p></div></article>
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
          <a className="brand brandMark footerBrand" href="#top"><BrandLogo /></a>
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
