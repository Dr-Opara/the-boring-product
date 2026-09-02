import "./home-refresh.css";

function Arrow() { return <span aria-hidden="true">→</span>; }
function BrandLogo() { return <span className="brandLogo" aria-label="The Boring Product"><span className="brandThe">THE</span><span className="brandBoring" aria-hidden="true"><span>B</span><span className="brandSolidO" /><span>RING</span></span><span className="brandBottom"><span className="brandLines" aria-hidden="true" /><span className="brandProduct">PRODUCT</span></span></span>; }
function BrandWithLegal({ footer = false }: { footer?: boolean }) { return <span className={`brandLegalWrap${footer ? " footerBrandLegalWrap" : ""}`}><BrandLogo /><span className="brandLegal">A d/b/a of ProcessPilot Technologies LLC</span></span>; }

export default function Home() {
  return <main>
    <header className="nav shell newNav">
      <a className="brand brandMark" href="/"><BrandWithLegal /></a>
      <nav className="navLinks" aria-label="Primary navigation">
        <div className="navDropdown"><a className="navDropdownTrigger" href="/products">Products <span aria-hidden="true">⌄</span></a><div className="navDropdownMenu"><a href="/products/expensemargin">ExpenseMargin</a><a href="/products/jrt-community">Jordan Ranch &amp; Tamarron</a><a href="/products/processpilot-technologies">ProcessPilot Technologies</a></div></div>
        <div className="navDropdown"><a className="navDropdownTrigger" href="/contracts">Contracts <span aria-hidden="true">⌄</span></a><div className="navDropdownMenu"><a href="/contracts/client-engagements">Client Engagement</a></div></div>
        <a href="/future">Future</a><a href="/technology">Technology</a><a href="/about">About</a>
      </nav>
      <a className="ghostButton heroNavButton" href="/products">Explore Products</a>
    </header>

    <section className="hero shell heroRefresh" id="top"><div className="heroCopy heroCopyRefresh"><h1>We build products<br />that solve real problems.</h1><p className="lede">The Boring Product builds digital products and devices that make life simpler, businesses smarter, and the future more connected.</p><div className="heroActions"><a className="primaryButton primaryButtonRefresh" href="/products">Explore Products <Arrow /></a></div></div><div className="portalScene" aria-hidden="true"><div className="portalGlow"/><div className="portalRing"/><div className="portalBase"><div className="portalBaseInner"/></div><div className="portalFloor"/></div></section>

    <section className="valueStrip shell" aria-label="What we value"><article><span className="valueIcon">◌</span><div><h3>Innovative by Design</h3><p>We create products that combine simplicity, usability, and intelligence.</p></div></article><article><span className="valueIcon">◇</span><div><h3>Secure &amp; Reliable</h3><p>Security and reliability are built in from day one.</p></div></article><article><span className="valueIcon">↗</span><div><h3>Built for Impact</h3><p>Everything we build is designed to make a meaningful difference.</p></div></article><article><span className="valueIcon">◎</span><div><h3>Focused on You</h3><p>We build for real people and real businesses with real needs.</p></div></article></section>

    <section className="statement shell"><p className="sectionLabel">TECHNOLOGY</p><div className="statementGrid"><h2>Built with modern technology.<br />Focused on practical utility.</h2><div><p>We use AI, automation, cloud infrastructure, security engineering, data systems, embedded technology, and edge computing where they create real value.</p><a className="cardLink" href="/technology">Explore Technology <Arrow/></a></div></div></section>

    <section className="about shell"><p className="sectionLabel">WHY BORING?</p><div className="aboutGrid"><h2>The best businesses often solve problems nobody brags about.</h2><div><p>Cost visibility. Local coordination. Operational friction. Everyday problems businesses and communities deal with constantly.</p><p>These are not glamorous problems. They are useful problems. The Boring Product exists to find them, build the right products, ship them, and keep improving them.</p><a className="cardLink" href="/about">About The Boring Product <Arrow/></a></div></div></section>

    <section className="manifesto shell"><div className="manifestoLine"><span>01</span><strong>Find the problem.</strong></div><div className="manifestoLine"><span>02</span><strong>Build the simplest useful solution.</strong></div><div className="manifestoLine"><span>03</span><strong>Ship it.</strong></div><div className="manifestoLine"><span>04</span><strong>Make it better.</strong></div></section>

    <footer className="footer shell"><div><a className="brand brandMark footerBrand" href="/"><BrandWithLegal footer /></a><p>We build boring products that solve real problems.</p><div className="footerContact"><a href="mailto:hello@theboringproduct.com">hello@theboringproduct.com</a><a href="tel:+13467454398">346-745-4398</a><span>4202 Gnarl Dr, Austin, TX 78731</span><a href="https://x.com/TheBoringProduct" target="_blank" rel="noreferrer">X / @TheBoringProduct</a></div></div><div className="footerLinks"><a href="/products">Products</a><a href="/contracts">Contracts</a><a href="/contracts/client-engagements">Client Engagement</a><a href="/future">Future</a><a href="/technology">Technology</a><a href="/about">About</a></div><p className="copyright">© 2026 The Boring Product.</p></footer>
  </main>;
}
