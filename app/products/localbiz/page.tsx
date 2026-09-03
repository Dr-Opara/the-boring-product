import type { Metadata } from "next";
import "../../home-refresh.css";

export const metadata: Metadata = {
  title: "LocalBiz.lol",
  description: "LocalBiz.lol is a local business discovery and sponsored-ranking platform from The Boring Product.",
  alternates: { canonical: "/products/localbiz" },
};

function BrandLogo(){return <span className="brandLogo" aria-label="The Boring Product"><span className="brandThe">THE</span><span className="brandBoring" aria-hidden="true"><span>B</span><span className="brandSolidO"/><span>RING</span></span><span className="brandBottom"><span className="brandLines" aria-hidden="true"/><span className="brandProduct">PRODUCT</span></span></span>}

export default function LocalBizPage(){return <main>
<header className="nav shell newNav"><a className="brand brandMark" href="/"><BrandLogo/></a><nav className="navLinks" aria-label="Primary navigation"><div className="navDropdown"><a className="navDropdownTrigger" href="/products">Products <span>⌄</span></a><div className="navDropdownMenu"><a href="/products/expensemargin">ExpenseMargin</a><a href="/products/jrt-community">Jordan Ranch &amp; Tamarron</a><a href="/products/localbiz">LocalBiz.lol</a></div></div><a href="/future">Future</a><a href="/technology">Technology</a><a href="/about">About</a></nav></header>
<section className="statement shell productsIntro"><p className="sectionLabel">LOCAL BUSINESS / ADVERTISING</p><div className="statementGrid"><h1 className="productsTitle">LocalBiz.lol</h1><p>A local business discovery platform built around transparent sponsored ranking. Businesses compete for visibility through current placement bids while customers discover businesses in their market.</p></div></section>
<section className="products shell"><div className="productGrid"><article className="productCard"><div className="productIndex">01</div><h3>Local Discovery</h3><p>Help customers discover businesses in their city, market, or local area.</p></article><article className="productCard"><div className="productIndex">02</div><h3>Sponsored Rank</h3><p>Businesses can compete for prominent placement through transparent sponsored ranking rather than an undefined “best business” label.</p></article><article className="productCard"><div className="productIndex">03</div><h3>Business Visibility</h3><p>Give local businesses a simple way to increase exposure and compete for customer attention.</p></article></div></section>
<section className="statement shell"><p className="sectionLabel">LIVE PRODUCT</p><div className="statementGrid"><h2>Discover local. Compete for visibility.</h2><div><p>Visit LocalBiz.lol to explore the live product.</p><a className="primaryButton primaryButtonRefresh" href="https://localbiz.lol" target="_blank" rel="noreferrer">Visit LocalBiz.lol →</a></div></div></section>
<footer className="footer shell"><div><a className="brand brandMark footerBrand" href="/"><BrandLogo/></a><p>We build boring products that solve real problems.</p></div><div className="footerLinks"><a href="/products">Products</a><a href="/products/expensemargin">ExpenseMargin</a><a href="/products/jrt-community">Jordan Ranch &amp; Tamarron</a><a href="/products/localbiz">LocalBiz.lol</a><a href="/future">Future</a></div><p className="copyright">© 2026 The Boring Product.</p></footer>
</main>}
