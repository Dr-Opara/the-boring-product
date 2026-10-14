import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://theboringproduct.com"),
  title: {
    default: "The Boring Product — OpenMaps & Odesseus",
    template: "%s | The Boring Product",
  },
  description: "The Boring Product is the parent company and portfolio for products built, owned, and shipped by Dr. O.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://theboringproduct.com",
    siteName: "The Boring Product",
    title: "The Boring Product — OpenMaps & Odesseus",
    description: "Parent company and product portfolio. Current public products: OpenMaps and Odesseus.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Boring Product — OpenMaps & Odesseus",
    description: "Two products. Built to solve real problems.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
