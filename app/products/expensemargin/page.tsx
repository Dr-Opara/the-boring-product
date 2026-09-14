import type { Metadata } from "next";
import { Arrow, PageShell, Status } from "../../components";

export const metadata: Metadata = { title: "ExpenseMargin", description: "ExpenseMargin margin and cost intelligence for businesses.", alternates: { canonical: "/products/expensemargin" } };

export default function ExpenseMarginPage(){return <PageShell>
<section className="pageHero shell"><div><Status tone="live">B2B PLATFORM / LIVE</Status><h1>EXPENSEMARGIN.</h1></div><div className="heroSide"><p>Margin and cost intelligence for businesses. ExpenseMargin helps teams understand supplier pricing, invoice changes and cost pressure before those changes quietly erode profitability.</p></div></section>
<section className="contentGrid shell"><div><p className="eyebrow">WHAT IT DOES</p><h2>Turn expense data into margin visibility.</h2></div><div><p>ExpenseMargin is the established traditional B2B product in The Boring Product ecosystem. It remains deliberately distinct from the company’s primary future-technology focus on AI, cybersecurity and PalmPay.</p><div className="specTable"><div className="specRow"><span>Focus</span><span>Cost and margin intelligence</span></div><div className="specRow"><span>Users</span><span>Businesses monitoring supplier and operating costs</span></div><div className="specRow"><span>Status</span><span>Live</span></div></div><a className="primaryCta" href="https://expensemargin.com" target="_blank" rel="noreferrer">Open ExpenseMargin <Arrow/></a></div></section>
</PageShell>}
