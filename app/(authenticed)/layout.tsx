import type { Metadata } from "next";
import { Providers } from "../components/provider/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stringo",
  description: "Criado por @oiRhyan",
  icons: {
    icon : ['/favicon.ico?v=4']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className='min-h-screen flex flex-col overflow-hidden'><Providers>{children}</Providers></body>
    </html>
  );
}
