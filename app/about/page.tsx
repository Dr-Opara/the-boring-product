import type { Metadata } from "next";
import { PageShell } from "../components";

export const metadata: Metadata = {
  title: "About",
  description: "About The Boring Product and the products OpenMaps and Odesseus.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="terminalPageSection">
        <p className="promptText">$ cat ./about.txt</p>
        <h1>ABOUT THE BORING PRODUCT</h1>
        <p>The Boring Product is a focused portfolio for products I have built and shipped.</p>
      </section>

      <section className="terminalPageSection splitTerminal">
        <div>
          <p className="promptText">$ ls portfolio</p>
          <h2>TWO PRODUCTS.</h2>
        </div>
        <div className="terminalList">
          <a href="https://openmaps.tech" target="_blank" rel="noreferrer"><span>01</span><strong>OpenMaps</strong><em>EARLY ACCESS</em></a>
          <a href="https://odesseus.ai" target="_blank" rel="noreferrer"><span>02</span><strong>Odesseus</strong><em>LIVE</em></a>
        </div>
      </section>

      <section className="terminalPageSection">
        <p className="promptText">$ cat ./principle.md</p>
        <h2>BUILD USEFUL THINGS. SHIP THEM.</h2>
        <p>The portfolio stays deliberately narrow. If a product is not OpenMaps or Odesseus, it does not belong in the public portfolio.</p>
      </section>
    </PageShell>
  );
}
