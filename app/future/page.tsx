import type { Metadata } from "next";
import "../home-refresh.css";
import "./palm.css";

export const metadata: Metadata = {
  title: "Palm Pay | Future",
  description: "Palm Pay is a future biometric identity and payment platform from The Boring Product.",
  alternates: { canonical: "/future" },
  openGraph: {
    url: "https://theboringproduct.com/future",
    title: "Palm Pay | The Boring Product",
    description: "A future biometric identity and payment platform designed for palm-enabled checkout.",
  },
};

function BrandLogo() {
  return (
    <span className="brandLogo" aria-label="The Boring Product">
      <span className="brandThe">THE</span>
      <span className="brandBoring" aria-hidden="true"><span>B</span><span className="brandSolidO" /><span>RING</span></span>
      <span className="brandBottom"><span className="brandLines" aria-hidden="true" /><span className="brandProduct">PRODUCT</span></span>
    </span>
  );
}

export default function FuturePage() {
  return (
    <main className="palmPage">
      <header className="nav shell newNav">
        <a className="brand brandMark" href="/"><BrandLogo /></a>
        <nav className="navLinks" aria-label="Primary navigation">
          <div className="navDropdown">
            <a className="navDropdownTrigger" href="/products">Products <span aria-hidden="true">⌄</span></a>
            <div className="navDropdownMenu" aria-label="Product categories"><a href="/products#digital">Digital</a><a href="/products#devices">Devices</a></div>
          </div>
          <a href="/future">Future</a><a href="/#technology">Technology</a><a href="/#about">About</a>
        </nav>
        <a className="ghostButton heroNavButton" href="/products">Explore Products</a>
      </header>

      <section className="palmHero shell">
        <div className="palmHeroCopy">
          <span className="futurePill">FUTURE DIGITAL PRODUCT</span>
          <h1>Palm Pay.<span>Your hand is your wallet.</span></h1>
          <p className="lede">Palm Pay is a software platform concept for biometric identity and palm-enabled payment authorization. Customers enroll once, link a payment method, and can later verify themselves at participating palm-enabled merchants without reaching for a card or phone.</p>
          <div className="palmActions"><a className="primaryButton primaryButtonRefresh" href="#how-it-works">See how it works →</a><a className="secondaryPalmButton" href="#architecture">Platform architecture</a></div>
        </div>
        <div className="palmStage" aria-label="Animated palm scanning concept"><div className="scanHalo" /><div className="palmHand"><span className="finger f1" /><span className="finger f2" /><span className="finger f3" /><span className="finger f4" /><span className="thumb" /><span className="vein v1" /><span className="vein v2" /><span className="vein v3" /></div><div className="scanLine" /><span className="scanLabel">PALM SIGNATURE / ENCRYPTED MATCH</span></div>
      </section>

      <section className="palmGrid shell">
        <div className="palmGridHeader"><div><p className="sectionLabel">WHAT PALM PAY BECOMES</p><h2>A software layer between identity and checkout.</h2></div><p>The platform is designed to connect palm-recognition hardware, encrypted biometric templates, customer wallets, merchant software, and certified payment processors without making the palm image itself a payment credential.</p></div>
        <div className="palmFeatureGrid"><article className="palmFeature"><span>01 / ENROLL</span><h3>Palm enrollment</h3><p>Create a secure biometric template with explicit customer consent and link it to an account.</p></article><article className="palmFeature"><span>02 / VERIFY</span><h3>Identity match</h3><p>Match the customer through supported palm hardware with liveness checks and confidence thresholds.</p></article><article className="palmFeature"><span>03 / AUTHORIZE</span><h3>Payment orchestration</h3><p>Retrieve a tokenized payment method and send the transaction through a certified processor or acquiring partner.</p></article><article className="palmFeature"><span>04 / CONTROL</span><h3>Privacy controls</h3><p>Consent records, account controls, deletion workflows, audit logs, and merchant access boundaries are core platform features.</p></article></div>
      </section>

      <section className="palmFlow shell" id="how-it-works"><p className="sectionLabel">PALM-TO-PAY FLOW</p><h2>Move from gesture to authorization in seconds.</h2><div className="flowTrack"><div className="flowStep"><strong>Present palm</strong><p>A supported reader captures the palm and performs liveness checks.</p></div><div className="flowStep"><strong>Match identity</strong><p>The biometric template is compared against an encrypted enrolled template.</p></div><div className="flowStep"><strong>Select payment token</strong><p>The verified customer account resolves to an approved tokenized payment method.</p></div><div className="flowStep"><strong>Process payment</strong><p>The payment is submitted through a certified processor/acquirer and the merchant receives confirmation.</p></div></div><div className="palmMotionDemo" aria-label="Animated palm payment demonstration"><div className="motionPalm" /><div className="motionPulse" /><div className="motionArrow" /><div className="motionTerminal" /></div></section>

      <section className="palmArchitecture shell" id="architecture"><p className="sectionLabel">PLATFORM ARCHITECTURE</p><h2>Built as digital infrastructure, not a proprietary card network.</h2><p>Palm Pay would sit above certified payment rails. Visa and Mastercard transactions would still be processed through approved payment processors, acquirers, and tokenized card credentials. Palm recognition becomes the identity and authorization experience at participating Palm Pay-enabled merchants.</p><div className="archGrid"><article className="archCard"><h3>Palm Identity API</h3><p>Enrollment, matching, liveness status, confidence scoring, device trust, and consent state.</p><div className="networkRow"><span className="networkBadge">Biometric templates</span><span className="networkBadge">Liveness</span><span className="networkBadge">Consent</span></div></article><article className="archCard"><h3>Payment Orchestration</h3><p>Tokenized payment methods, authorization requests, refunds, receipts, merchant settlement visibility, and processor integrations.</p><div className="networkRow"><span className="networkBadge">Visa compatible*</span><span className="networkBadge">Mastercard compatible*</span><span className="networkBadge">Processor APIs</span></div></article><article className="archCard"><h3>Merchant Platform</h3><p>Locations, readers, customers, transactions, fraud rules, roles, audit logs, analytics, and integration APIs.</p><div className="networkRow"><span className="networkBadge">POS</span><span className="networkBadge">Retail</span><span className="networkBadge">Membership</span></div></article></div><div className="futureDisclaimer">*Planned compatibility refers to processing Visa and Mastercard credentials through certified processors/acquirers and applicable network programs. It does not mean a palm can be used automatically at every merchant that accepts those card brands. Merchants need supported palm-recognition hardware and Palm Pay integration.</div></section>

      <section className="palmPrivacy shell"><div className="privacyGrid"><div><p className="sectionLabel">PRIVACY BY DESIGN</p><h2>The palm should identify you—not become a raw image stored forever.</h2><p>The intended architecture uses encrypted biometric templates rather than raw palm imagery as the persistent credential wherever technically feasible, with explicit enrollment consent and strong deletion/account controls.</p></div><div className="privacyList"><div>Encrypted biometric templates</div><div>Tokenized payment credentials</div><div>Consent and revocation records</div><div>Role-based merchant access</div><div>Audit logging and fraud controls</div><div>Biometric data deletion workflows</div></div></div></section>

      <footer className="footer shell"><div><a className="brand brandMark footerBrand" href="/"><BrandLogo /></a><p>We build boring products that solve real problems.</p><div className="footerContact"><a href="mailto:info@theboringproduct.com">info@theboringproduct.com</a><span>Austin, TX</span><a href="https://x.com/TheBoringProduct" target="_blank" rel="noreferrer">X / @TheBoringProduct</a></div></div><div className="footerLinks"><a href="/products">Products</a><a href="/future">Future</a><a href="/#technology">Technology</a><a href="/#about">About</a></div><p className="copyright">© 2026 The Boring Product.</p></footer>
    </main>
  );
}
