import { Arrow, PageShell, SectionIntro, Status } from "./components";
import InteractiveCore from "./interactive-core";

const eventLog = [
  ["21:44:02", "AI", "agent orchestration graph ready"],
  ["21:44:05", "CYBER", "defensive telemetry stream healthy"],
  ["21:44:08", "PALMPAY", "biometric prototype handshake verified"],
  ["21:44:11", "EDGE", "device lab channel standing by"],
];

export default function Home() {
  return (
    <PageShell>
      <section className="homeHero shell remixHero">
        <div className="heroNoise" aria-hidden="true" />
        <div className="heroCopy">
          <div className="heroRelease"><span /> TBP SYSTEMS LAB — ACTIVE DEVELOPMENT</div>
          <p className="eyebrow">THE BORING PRODUCT / FUTURE SYSTEMS LAB</p>
          <h1>WE BUILD INTELLIGENT SYSTEMS FOR THE REAL WORLD.</h1>
          <p className="heroDeck">AI applications. Cybersecurity technology. Future payment systems.</p>
          <div className="heroActions">
            <a className="primaryCta" href="/technology">Explore the technology <Arrow /></a>
            <a className="secondaryCta" href="/products">View products</a>
          </div>
          <div className="heroTelemetry"><span>AI // ACTIVE</span><span>CYBER // ACTIVE</span><span>PALMPAY // PROTOTYPE</span></div>
        </div>
        <InteractiveCore />
      </section>

      <section className="signalStrip shell" aria-label="Company focus">
        <span>ARTIFICIAL INTELLIGENCE</span><i />
        <span>CYBERSECURITY</span><i />
        <span>FUTURE HARDWARE</span><i />
        <span>BIOMETRIC PAYMENTS</span>
      </section>

      <section className="systemsLab shell" aria-label="The Boring Product systems lab">
        <div className="systemsLabHeading">
          <div>
            <p className="eyebrow">// SYSTEMS LAB — PORTFOLIO TELEMETRY</p>
            <h2>One company. Multiple technology systems.</h2>
          </div>
          <p>The portfolio behaves like a technology lab rather than a collection of static cards: AI orchestration, defensive visibility, biometric authorization and future edge hardware.</p>
        </div>

        <div className="systemWindow">
          <div className="systemWindowBar">
            <div className="windowIdentity"><span className="windowDot" /><strong>TBP.CONTROL</strong><small>/ portfolio overview</small></div>
            <div className="windowMeta"><span>LAB MODE</span><span>ENCRYPTED</span><span>BUILD 26.09</span></div>
          </div>

          <aside className="systemSidebar" aria-label="System modules">
            <span className="active">Overview <b>01</b></span>
            <span>AI Systems <b>02</b></span>
            <span>Cyber Defense <b>03</b></span>
            <span>PalmPay <b>04</b></span>
            <span>Device Lab <b>05</b></span>
          </aside>

          <div className="systemCanvas">
            <div className="systemMetrics">
              <article><span>PORTFOLIO STATE</span><strong>ACTIVE</strong><small>4 technology domains</small></article>
              <article><span>AI SYSTEMS</span><strong>R&amp;D</strong><small>agentic + security</small></article>
              <article><span>CYBER DEFENSE</span><strong>ONLINE</strong><small>defensive research</small></article>
              <article><span>PALMPAY</span><strong>PROTO</strong><small>biometric payments</small></article>
            </div>

            <div className="systemPanels">
              <article className="systemPanel aiPanel">
                <header><span>AI ORCHESTRATION</span><small>GRAPH / CONCEPT</small></header>
                <div className="agentGraph" aria-hidden="true">
                  <span className="agentNode nodeMain">CORE</span>
                  <span className="agentNode nodeA">TOOLS</span>
                  <span className="agentNode nodeB">RAG</span>
                  <span className="agentNode nodeC">POLICY</span>
                  <span className="agentNode nodeD">HUMAN</span>
                  <i className="linkA"/><i className="linkB"/><i className="linkC"/><i className="linkD"/>
                </div>
                <footer><span>Reason</span><span>Retrieve</span><span>Act</span><span>Verify</span></footer>
              </article>

              <article className="systemPanel cyberPanel">
                <header><span>DEFENSIVE VISIBILITY</span><small>MONITOR / CONCEPT</small></header>
                <div className="cyberScope" aria-hidden="true">
                  <i className="scopeRing ring1"/><i className="scopeRing ring2"/><i className="scopeRing ring3"/>
                  <i className="scopeSweep"/><b className="threatPoint point1"/><b className="threatPoint point2"/><b className="threatPoint point3"/>
                </div>
                <footer><span>Network</span><span>Identity</span><span>Cloud</span><span>Edge</span></footer>
              </article>

              <article className="systemPanel palmPanel">
                <header><span>PALMPAY AUTH FLOW</span><small>PROTOTYPE</small></header>
                <div className="authFlow">
                  <div><b>01</b><span>PALM</span><small>capture</small></div><i>→</i>
                  <div><b>02</b><span>IDENTITY</span><small>encrypt</small></div><i>→</i>
                  <div><b>03</b><span>PAY</span><small>authorize</small></div>
                </div>
                <footer><span>Biometric</span><span>Encrypted</span><span>Tokenized</span></footer>
              </article>
            </div>

            <div className="eventConsole">
              <div className="consoleHead"><span>// ACTIVITY FEED</span><small>SIMULATED LAB TELEMETRY</small></div>
              {eventLog.map(([time, system, message]) => <div className="consoleRow" key={`${time}-${system}`}><time>{time}</time><b>{system}</b><span>{message}</span><em>OK</em></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="domainSection shell domain-ai">
        <div className="domainNumber">01</div>
        <div className="domainCopy">
          <Status tone="violet">ARTIFICIAL INTELLIGENCE</Status>
          <h2>Systems that think, automate and act.</h2>
          <p>We design AI applications and agentic systems that can reason across workflows, coordinate tools, secure AI-enabled environments and turn complex operations into intelligent systems.</p>
          <div className="pillRow"><span>Agentic AI</span><span>AI Security</span><span>Intelligent Automation</span><span>AI Applications</span></div>
          <a className="textCta" href="/ai">Enter AI <Arrow /></a>
        </div>
        <div className="miniVisual aiVisual" aria-hidden="true"><div className="orbitalMesh"><i/><i/><i/></div><span className="scanLine" /></div>
      </section>

      <section className="domainSection shell domain-cyber">
        <div className="domainNumber">02</div>
        <div className="domainCopy">
          <Status tone="cyan">CYBERSECURITY</Status>
          <h2>Technology built to see what others don’t.</h2>
          <p>Defensive security applications, network defense, threat detection and next-generation security hardware designed for visibility, resilience and authorized security testing.</p>
          <div className="pillRow"><span>Security Applications</span><span>Network Defense</span><span>Threat Detection</span><span>Security Hardware</span></div>
          <a className="textCta" href="/cybersecurity">Enter cybersecurity <Arrow /></a>
        </div>
        <div className="miniVisual cyberVisual" aria-hidden="true"><div className="radar"><i/><i/><i/></div><span className="scanLine" /></div>
      </section>

      <section className="palmpayFeature shell">
        <div className="palmCopy">
          <div className="domainNumber">03</div>
          <Status tone="violet">PALMPAY / PROTOTYPE</Status>
          <h2>YOUR HAND IS YOUR WALLET.</h2>
          <p>Palm-based identity and payment technology designed to transform a biometric signature into encrypted identity and payment authorization.</p>
          <a className="primaryCta" href="/palmpay">Explore PalmPay <Arrow /></a>
        </div>
        <div className="palmSequence" aria-label="PalmPay concept sequence">
          <div className="palmHand" aria-hidden="true"><span className="finger f1"/><span className="finger f2"/><span className="finger f3"/><span className="finger f4"/><span className="finger f5"/><span className="palmBody"/><i className="scanLine"/></div>
          <div className="sequenceSteps"><span>01 / PALM SCAN</span><b>→</b><span>02 / ENCRYPTED IDENTITY</span><b>→</b><span>03 / PAYMENT AUTHORIZATION</span></div>
        </div>
      </section>

      <section className="expenseFeature shell">
        <div>
          <Status tone="live">B2B PLATFORM / LIVE</Status>
          <h2>ExpenseMargin</h2>
        </div>
        <p>Margin and cost intelligence for businesses. Our established B2B platform remains part of the ecosystem while The Boring Product expands deeper into AI, cybersecurity and future technology.</p>
        <a className="textCta" href="/products/expensemargin">View platform <Arrow /></a>
      </section>

      <section className="technologyPreview shell">
        <SectionIntro eyebrow="TECHNOLOGY / 04" title="Software. Hardware. Intelligence." body="We are building a product ecosystem that can move from cloud software to edge devices, security appliances and next-generation payment experiences." />
        <div className="techMatrix">
          <article><span>01</span><h3>AI Systems</h3><p>Agentic applications, AI security and intelligent automation.</p></article>
          <article><span>02</span><h3>Security Systems</h3><p>Monitoring, detection, network defense and defensive tooling.</p></article>
          <article><span>03</span><h3>Future Hardware</h3><p>Portable security appliances, scanners and edge devices.</p></article>
          <article><span>04</span><h3>Identity & Payments</h3><p>Biometric interaction and secure future payment systems.</p></article>
        </div>
      </section>
    </PageShell>
  );
}
