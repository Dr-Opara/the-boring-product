import type { Metadata } from "next";
import { Arrow, PageShell, Status } from "../components";

export const metadata: Metadata = { title: "Products", description: "AI, cybersecurity, PalmPay and ExpenseMargin from The Boring Product.", alternates: { canonical: "/products" } };

export default function ProductsPage(){return <PageShell>
<section className="pageHero shell"><div><p className="eyebrow">PRODUCT ECOSYSTEM</p><h1>PRODUCTS BUILT FOR WHAT COMES NEXT.</h1></div><div className="heroSide"><p>The portfolio is intentionally focused: artificial intelligence, cybersecurity technology, PalmPay and one established B2B platform, ExpenseMargin.</p></div></section>
<section className="contentGrid shell"><div><p className="eyebrow">PORTFOLIO</p><h2>Four product lanes.</h2><p>Products can be hosted inside The Boring Product ecosystem while retaining independent repositories, infrastructure and branding where needed.</p></div><div className="productList">
<article className="productTile"><div className="statusRow"><Status tone="violet">RESEARCH + PRODUCT</Status><span>01</span></div><h3>Artificial Intelligence</h3><p>Agentic AI, AI security, intelligent automation and experimental AI applications.</p><a className="textCta" href="/ai">Explore AI <Arrow/></a></article>
<article className="productTile"><div className="statusRow"><Status tone="cyan">SOFTWARE + HARDWARE</Status><span>02</span></div><h3>Cybersecurity</h3><p>Defensive applications, monitoring, detection and future physical security devices.</p><a className="textCta" href="/cybersecurity">Explore cybersecurity <Arrow/></a></article>
<article className="productTile"><div className="statusRow"><Status tone="violet">PROTOTYPE</Status><span>03</span></div><h3>PalmPay</h3><p>Palm-based identity and payment technology for secure, low-friction transactions.</p><a className="textCta" href="/palmpay">Explore PalmPay <Arrow/></a></article>
<article className="productTile"><div className="statusRow"><Status tone="live">LIVE</Status><span>04</span></div><h3>ExpenseMargin</h3><p>Margin and cost intelligence for businesses—our established B2B platform.</p><a className="textCta" href="/products/expensemargin">View ExpenseMargin <Arrow/></a></article>
</div></section>
<section className="contentGrid shell"><div><p className="eyebrow">STATUS SYSTEM</p><h2>Build visibly. Label clearly.</h2></div><div className="specTable"><div className="specRow"><span>RESEARCH</span><span>Exploration and technical validation</span></div><div className="specRow"><span>PROTOTYPE</span><span>Functional concept under development</span></div><div className="specRow"><span>PRIVATE BETA</span><span>Controlled testing with selected users</span></div><div className="specRow"><span>LIVE</span><span>Released product or service</span></div><div className="specRow"><span>HARDWARE DEVELOPMENT</span><span>Physical product engineering and validation</span></div></div></section>
</PageShell>}
