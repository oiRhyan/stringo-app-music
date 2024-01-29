import type { Metadata } from "next";
import { Providers } from "../components/provider/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stringo",
  description: "Criado por @oiRhyan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
