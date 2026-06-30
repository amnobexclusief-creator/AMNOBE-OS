import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMNOBE OS",
  description: "AI Operating System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}