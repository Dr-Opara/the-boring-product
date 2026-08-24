import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
