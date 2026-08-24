import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Boring Product",
  description: "We build boring products that solve real problems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
