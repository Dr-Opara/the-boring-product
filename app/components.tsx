import type { ReactNode } from "react";

export const navItems = [
  ["Products", "/#products"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  return (
    <header className="terminalHeader">
      <a href="/" className="terminalBrand">&gt; [ THE BORING PRODUCT v1.0.0 ]</a>
      <nav aria-label="Primary navigation">
        <a href="/#products">[ products ]</a>
        <a href="/about">[ about ]</a>
        <a className="exploreCmd" href="/#products">[ explore -&gt; ]</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="terminalFooter">
      <span>&gt; Parent company + product portfolio // current: OpenMaps, Odesseus.</span>
      <span>Built by Dr. O. <i aria-hidden="true" /></span>
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
  return <section className="terminalPageSection"><p className="promptText">$ {eyebrow.toLowerCase()}</p><h2>{title}</h2><p>{body}</p></section>;
}
