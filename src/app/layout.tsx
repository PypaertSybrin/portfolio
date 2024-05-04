import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pypaert Sybrin",
  description: "A personal portfolio of Pypaert Sybrin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/fdw2oji.css"></link>
      </head>
      <body className="font-soleil">
        {children}
      </body>
    </html>
  );
}
