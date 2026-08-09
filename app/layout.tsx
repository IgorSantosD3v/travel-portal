import type { Metadata } from "next";
import { ReactNode } from "react";
import Layout from "@/components/Layout/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "ViajaJá - Portal de Viagens",
  description:
    "Descubra destinos turísticos incríveis e planeje sua próxima viagem com o ViajaJá.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
