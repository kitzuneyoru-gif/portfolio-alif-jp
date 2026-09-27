import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alif Ghifari | Web & Mobile Developer",
  description:
    "Portfolio website of Alif Ghifari - Web Developer and Mobile Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}