import type { Metadata } from "next";
import { PageShell } from "../components";

export const metadata: Metadata = {
  title: "Products",
  description: "OpenMaps and Odesseus — the two products in The Boring Product portfolio.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <PageShell>
      <section className="terminalPageSection">
        <p className="promptText">$ ls products</p>
        <h1>PRODUCTS</h1>
        <p>Two products. No filler.</p>
      </section>

      <section className="terminalPageSection">
        <div className="terminalList productDirectory">
          <a href="https://openmaps.tech" target="_blank" rel="noreferrer">
            <span>01</span><strong>OPENMAPS</strong><em>EARLY ACCESS</em><small>Navigation designed around what you actually see, not just a map.</small>
          </a>
          <a href="https://odesseus.ai" target="_blank" rel="noreferrer">
            <span>02</span><strong>ODESSEUS</strong><em>LIVE</em><small>AI-powered career platform from job discovery to interview preparation.</small>
          </a>
        </div>
      </section>
    </PageShell>
  );
}
