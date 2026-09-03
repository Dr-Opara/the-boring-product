import type { Metadata } from "next";
import "../home-refresh.css";

export const metadata: Metadata = { title: "Products", description: "Explore live products from The Boring Product.", alternates: { canonical: "/products" }, openGraph: { url: "https://theboringproduct.com/products", title: "Products | The Boring Product", description: "Explore live products from The Boring Product." } };

const products = [
  {name:"ExpenseMargin",category:"Finance / Operations",description:"Margin intelligence for businesses. Track supplier pricing, invoice changes, and cost pressure before they erode profit.",href:"/products/expensemargin"},
  {name:"Jordan Ranch & Tamarron",category:"Community",description:"A private digital community for residents, local businesses, marketplace activity, neighborhood deals, and local discovery.",href:"/products/jrt-community"}
];
function Arrow(){return <span aria-hidden="true">→</span>}
function BrandLogo(){return <span className="brandLogo" aria-label="The Boring Product"><span className="brandThe">THE</span><span className="brandBoring" aria-hidden="true"><span>B</span><span className="brandSolidO"/><span>RING</span></span><span className="brandBottom"><span className="brandLines" aria-hidden="true"/><span className="brandProduct">PRODUCT</span></span></span>}

export default function ProductsPage(){return <main>
<header className="nav shell newNav"><a className="brand brandMark" href="/"><BrandLogo/></a><nav className="navLinks" aria-label="Primary navigation"><div className="navDropdown"><a className="navDropdownTrigger" href="/products">Products <span>⌄</span></a><div className="navDropdownMenu"><a href="/products/expensemargin">ExpenseMargin</a><a href="/products/jrt-community">Jordan Ranch &amp; Tamarron</a></div></div><a href="/future">Future</a><a href="/technology">Technology</a><a href="/about">About</a></nav><a className="ghostButton heroNavButton" href="/">Back home</a></header>
<section className="statement shell productsIntro"><p className="sectionLabel">PRODUCTS</p><div className="statementGrid"><h1 className="productsTitle">Built. Shipped. In use.</h1><p>Each product has its own page. Explore the work individually instead of navigating shared category sections.</p></div></section>
<section className="products shell"><div className="productGrid">{products.map((product,index)=><article className="productCard" key={product.name}><div className="productIndex">0{index+1}</div><div className="productMeta"><span>{product.category}</span><span className="status statusLIVE">LIVE</span></div><h3>{product.name}</h3><p>{product.description}</p><a href={product.href} className="cardLink">View product <Arrow/></a></article>)}</div></section>
<footer className="footer shell"><div><a className="brand brandMark footerBrand" href="/"><BrandLogo/></a><p>We build boring products that solve real problems.</p><div className="footerContact"><a href="mailto:hello@theboringproduct.com">hello@theboringproduct.com</a><span>4202 Gnarl Dr, Austin, TX 78731</span><a href="https://x.com/TheBoringProduct" target="_blank" rel="noreferrer">X / @TheBoringProduct</a></div></div><div className="footerLinks"><a href="/products/expensemargin">ExpenseMargin</a><a href="/products/jrt-community">Jordan Ranch &amp; Tamarron</a><a href="/future">Future</a><a href="/technology">Technology</a><a href="/about">About</a></div><p className="copyright">© 2026 The Boring Product.</p></footer>
</main>}
