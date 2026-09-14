import type { ReactNode } from "react";

export const navItems = [
  ["AI", "/ai"],
  ["Cybersecurity", "/cybersecurity"],
  ["PalmPay", "/palmpay"],
  ["Products", "/products"],
  ["Technology", "/technology"],
  ["About", "/about"],
] as const;

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brandLockup${compact ? " brandLockupCompact" : ""}`}>
      <span className="brandName">THE BORING PRODUCT</span>
      <span className="brandAttribution">A ProcessPilot Technology Company</span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="siteHeader shell">
      <a className="siteBrand" href="/" aria-label="The Boring Product home"><Brand compact /></a>
      <nav className="desktopNav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <details className="mobileNav">
        <summary aria-label="Open navigation"><span>MENU</span><span aria-hidden="true">＋</span></summary>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="siteFooter shell">
      <div className="footerLead">
        <Brand />
        <p>Intelligent systems for the real world.</p>
      </div>
      <div className="footerNav">
        {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </div>
      <div className="footerContact">
        <a href="mailto:hello@theboringproduct.com">hello@theboringproduct.com</a>
        <a href="tel:+13467454398">346-745-4398</a>
        <span>4202 Gnarl Dr, Austin, TX 78731</span>
        <a href="https://x.com/TheBoringProduct" target="_blank" rel="noreferrer">X / @TheBoringProduct</a>
      </div>
      <div className="footerBase"><span>© 2026 The Boring Product.</span><span>BUILD / TEST / SHIP / EVOLVE</span></div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

export function Status({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "violet" | "cyan" | "live" }) {
  return <span className={`status status-${tone}`}><i aria-hidden="true" />{children}</span>;
}

export function Arrow() { return <span aria-hidden="true">↗</span>; }

export function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return <div className="sectionIntro"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{body}</p></div>;
}
