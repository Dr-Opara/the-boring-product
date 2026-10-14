import type { Metadata } from "next";
import { PageShell } from "../components";

export const metadata: Metadata = {
  title: "Explore",
  description: "Explore products built by Dr. O: OpenMaps and Odesseus.",
  alternates: { canonical: "/explore" },
};

const products = [
  {
    id: "01",
    name: "OPENMAPS",
    status: "EARLY ACCESS",
    path: "openmaps.tech",
    description: "Navigation designed around what you actually see, not just a map.",
    command: "open ./openmaps",
    href: "https://openmaps.tech",
    stack: ["AR navigation", "real-world context", "places"],
  },
  {
    id: "02",
    name: "ODESSEUS",
    status: "LIVE",
    path: "odesseus.ai",
    description: "AI-powered career platform from job discovery to interview preparation.",
    command: "open ./odesseus",
    href: "https://odesseus.ai",
    stack: ["job discovery", "resume optimization", "interview prep"],
  },
] as const;

export default function ExplorePage() {
  return (
    <PageShell>
      <section className="exploreTerminal">
        <div className="terminalChrome">
          <div className="terminalDots" aria-hidden="true"><i/><i/><i/></div>
          <span>PowerShell · Claude Code</span>
          <span>tbp://explore</span>
        </div>

        <div className="exploreBody">
          <p className="psLine"><span className="psPrompt">PS C:\\TheBoringProduct&gt;</span> Get-ChildItem ./explore</p>
          <p className="commentLine"># current public product registry</p>

          <div className="registryHeader">
            <span>ID</span><span>PRODUCT</span><span>STATUS</span><span>ENDPOINT</span>
          </div>

          <div className="productRegistry">
            {products.map((product) => (
              <article className="registryItem" key={product.id}>
                <div className="registryMeta">
                  <span>{product.id}</span>
                  <h1>{product.name}</h1>
                  <em>{product.status}</em>
                  <code>{product.path}</code>
                </div>
                <p>{product.description}</p>
                <div className="registryTags">
                  {product.stack.map((tag) => <span key={tag}>[{tag}]</span>)}
                </div>
                <a className="registryCommand" href={product.href} target="_blank" rel="noreferrer">
                  <span className="psPrompt">PS&gt;</span> {product.command} <b>↗</b>
                </a>
              </article>
            ))}
          </div>

          <div className="exploreTail">
            <p><span className="psPrompt">PS C:\\TheBoringProduct&gt;</span> <span className="cursor" /></p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
