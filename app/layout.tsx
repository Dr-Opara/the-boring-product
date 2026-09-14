import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://theboringproduct.com"),
  title: { default: "The Boring Product — AI, Cybersecurity & Future Technology", template: "%s | The Boring Product" },
  description: "The Boring Product builds artificial intelligence applications, cybersecurity technology, future security hardware, PalmPay and practical products such as ExpenseMargin.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://theboringproduct.com",
    siteName: "The Boring Product",
    title: "The Boring Product — Intelligent Systems for the Real World",
    description: "AI applications. Cybersecurity technology. Future payment systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Boring Product",
    description: "AI applications. Cybersecurity technology. Future payment systems.",
    creator: "@TheBoringProduct",
    site: "@TheBoringProduct",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
