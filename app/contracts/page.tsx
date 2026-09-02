import type { Metadata } from "next";
import "../home-refresh.css";

export const metadata: Metadata = {
  title: "Contracts & Partnerships",
  description: "Explore contracting, subcontracting, technology delivery, client engagements, and partnership opportunities with The Boring Product.",
  alternates: { canonical: "/contracts" },
  openGraph: {
    url: "https://theboringproduct.com/contracts",
    title: "Contracts & Partnerships | The Boring Product",
    description: "Technology contracting, client engagements, subcontracting, delivery partnerships, and opportunity collaboration with The Boring Product.",
  },
};

function BrandLogo(){return <span className="brandLogo" aria-label="The Boring Product"><span className="brandThe">THE</span><span className="brandBoring" aria-hidden="true"><span>B</span><span className="brandSolidO"/><span>RING</span></span><span className="brandBottom"><span className="brandLines" aria-hidden="true"/><span className="brandProduct">PRODUCT</span></span></span>}
function Arrow(){return <span aria-hidden="true">→</span>}

const capabilities = [
  {name:"AI & Automation",copy:"Applied AI, agentic systems, workflow automation, intelligent assistants, and business-process modernization."},
  {name:"Cybersecurity & Compliance",copy:"Security engineering, control assessment support, governance, risk, compliance, cloud security, and secure technology delivery."},
  {name:"Software & Digital Products",copy:"Web applications, SaaS platforms, internal tools, customer portals, API integrations, and rapid product development."},
  {name:"Cloud & Data",copy:"Cloud architecture, data systems, integrations, analytics, modernization, and operational infrastructure."},
  {name:"Technology Advisory",copy:"Technical strategy, solution architecture, product planning, transformation support, and implementation guidance."},
  {name:"Delivery Partnerships",copy:"Prime/subcontractor support, teaming, white-label delivery, specialist augmentation, and project-based collaboration."},
];

const contractTypes = [
  {name:"Public Sector",copy:"State, local, education, and eligible public-sector technology opportunities where our capabilities align with the scope of work."},
  {name:"Commercial",copy:"Fixed-scope technology projects, implementation work, product development, security engagements, and ongoing delivery support."},
  {name:"Subcontracting",copy:"Specialized delivery support for prime contractors and consulting firms requiring AI, cybersecurity, software, cloud, or compliance capability."},
  {name:"Strategic Partnerships",copy:"Joint pursuits, co-delivery, product partnerships, pilot programs, and opportunities where complementary capabilities strengthen the solution."},
];

export default function ContractsPage(){return <main>
<header className="nav shell newNav"><a className="brand brandMark" href="/"><BrandLogo/></a><nav className="navLinks" aria-label="Primary navigation"><a href="/products">Products</a><a href="/contracts">Contracts</a><a href="#client-engagements">Client Engagements</a><a href="/future">Future</a><a href="/#technology">Technology</a><a href="/#about">About</a></nav><a className="ghostButton heroNavButton" href="mailto:hello@theboringproduct.com?subject=Contract%20Opportunity">Start a conversation</a></header>

<section className="statement shell productsIntro"><p className="sectionLabel">CONTRACTS &amp; PARTNERSHIPS</p><div className="statementGrid"><h1 className="productsTitle">We build. We deliver. We partner.</h1><p>The Boring Product pursues technology contracts, subcontracting opportunities, delivery partnerships, and strategic collaborations where practical technology can solve a real business or public-sector problem.</p></div></section>

<section className="products shell" id="client-engagements"><div className="categoryHeader"><p className="sectionLabel">CLIENT ENGAGEMENTS</p><h2>Experience delivering in complex environments.</h2></div><div className="statementGrid"><h2>See the client engagement work behind our contracting capabilities.</h2><div><p>Our engagement experience spans public-sector, enterprise, technology, cybersecurity, compliance, AI, cloud, and transformation environments. Review the existing ProcessPilot client-engagement portfolio while we consolidate this capability under The Boring Product.</p><a className="primaryButton primaryButtonRefresh" href="https://processpilot-enterprise.blacb.chatgpt.site/client-engagements" target="_blank" rel="noreferrer">View Client Engagements <Arrow/></a></div></div></section>

<section className="products shell"><div className="categoryHeader"><p className="sectionLabel">HOW WE ENGAGE</p><h2>Flexible ways to work together.</h2></div><div className="productGrid">{contractTypes.map((item,index)=><article className="productCard" key={item.name}><div className="productIndex">0{index+1}</div><div className="productMeta"><span>CONTRACTING</span></div><h3>{item.name}</h3><p>{item.copy}</p></article>)}</div></section>

<section className="products shell"><div className="categoryHeader"><p className="sectionLabel">CAPABILITIES</p><h2>Technology delivery across the work that matters.</h2></div><div className="productGrid">{capabilities.map((item,index)=><article className="productCard" key={item.name}><div className="productIndex">0{index+1}</div><div className="productMeta"><span>CAPABILITY</span></div><h3>{item.name}</h3><p>{item.copy}</p></article>)}</div></section>

<section className="statement shell"><p className="sectionLabel">OPPORTUNITY FIT</p><div className="statementGrid"><h2>Bring us the problem, scope, or solicitation.</h2><div><p>We review opportunities based on technical fit, delivery capacity, timeline, commercial terms, and whether we can create meaningful value. We are open to direct awards, competitive solicitations, teaming arrangements, subcontracting, pilots, and scoped project work.</p><p>If you have an RFP, RFQ, SOW, teaming opportunity, or project brief, send it to us and include the due date, expected scope, and any mandatory requirements.</p><a className="primaryButton primaryButtonRefresh" href="mailto:hello@theboringproduct.com?subject=Contract%20or%20Partnership%20Opportunity">Send an opportunity <Arrow/></a></div></div></section>

<section className="about shell"><p className="sectionLabel">WHAT TO INCLUDE</p><div className="aboutGrid"><h2>Help us assess the opportunity quickly.</h2><div><p><strong>Opportunity:</strong> RFP, RFQ, SOW, contract notice, subcontract request, or project brief.</p><p><strong>Timing:</strong> submission deadline, anticipated start date, and expected period of performance.</p><p><strong>Requirements:</strong> scope, mandatory qualifications, security/compliance needs, and expected deliverables.</p><p><strong>Engagement:</strong> prime, subcontractor, technology partner, implementation partner, or direct commercial engagement.</p></div></div></section>

<footer className="footer shell"><div><a className="brand brandMark footerBrand" href="/"><BrandLogo/></a><p>We build boring products that solve real problems.</p><div className="footerContact"><a href="mailto:hello@theboringproduct.com">hello@theboringproduct.com</a><span>4202 Gnarl Dr, Austin, TX 78731</span><a href="https://x.com/TheBoringProduct" target="_blank" rel="noreferrer">X / @TheBoringProduct</a></div></div><div className="footerLinks"><a href="/products">Products</a><a href="/contracts">Contracts</a><a href="#client-engagements">Client Engagements</a><a href="/future">Future</a><a href="/#technology">Technology</a><a href="/#about">About</a></div><p className="copyright">© 2026 The Boring Product.</p></footer>
</main>}
