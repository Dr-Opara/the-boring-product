import type { Metadata } from "next";
import "./globals.css";
import "./mobile-nav.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://theboringproduct.com"),
  title: {
    default: "The Boring Product",
    template: "%s | The Boring Product",
  },
  description: "We build boring products that solve real problems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://theboringproduct.com",
    siteName: "The Boring Product",
    title: "The Boring Product",
    description: "We build boring products that solve real problems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Boring Product",
    description: "We build boring products that solve real problems.",
    creator: "@TheBoringProduct",
    site: "@TheBoringProduct",
  },
};

function MobileNavigation() {
  return (
    <nav className="mobileSiteNav" aria-label="Mobile navigation">
      <details className="mobileMenu">
        <summary>
          <span>Menu</span>
          <span className="mobileMenuIcon" aria-hidden="true">☰</span>
        </summary>
        <div className="mobileMenuPanel">
          <a className="mobileTopLink" href="/">Home</a>

          <details className="mobileSubmenu">
            <summary>Products <span aria-hidden="true">⌄</span></summary>
            <div>
              <a href="/products">All Products</a>
              <a href="/products/expensemargin">ExpenseMargin</a>
              <a href="/products/jrt-community">Jordan Ranch &amp; Tamarron</a>
            </div>
          </details>

          <a className="mobileTopLink" href="/future">Future</a>
          <a className="mobileTopLink" href="/technology">Technology</a>
          <a className="mobileTopLink" href="/about">About</a>
        </div>
      </details>
    </nav>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MobileNavigation />
        {children}
      </body>
    </html>
  );
}
