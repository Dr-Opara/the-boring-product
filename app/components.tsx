import type { ReactNode } from "react";

export const navItems = [
  ["Explore", "/explore"],
  ["Dr. O", "/dr-o"],
] as const;

export function SiteHeader() {
  return (
    <header className="terminalHeader">
      <a href="/" className="terminalBrand">PS C:\\TBP&gt; <span>THE BORING PRODUCT</span></a>
      <nav aria-label="Primary navigation">
        <a className="exploreCmd" href="/explore">[ explore ]</a>
        <a href="/dr-o">[ dr. o ]</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="terminalFooter">
      <span>© 2026 The Boring Product</span>
      <span>built by Dr. O <i aria-hidden="true" /></span>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <main className="terminalSite"><SiteHeader />{children}<SiteFooter /></main>;
}

export function Status({ children, tone }: { children: ReactNode; tone?: "neutral" | "violet" | "cyan" | "live" }) {
  return <span className={tone ? `status status-${tone}` : "status"}>[ {children} ]</span>;
}

export function Arrow() { return <span aria-hidden="true">-&gt;</span>; }

export function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return <section className="terminalPageSection"><p className="promptText">PS&gt; {eyebrow.toLowerCase()}</p><h2>{title}</h2><p>{body}</p></section>;
}
