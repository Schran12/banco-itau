import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // ajuste conforme necessário
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abra sua conta no Banco Itaú",
  description: "Criado por Matheus",
  icons: {
    icon: "/logo.svg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${lato.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
