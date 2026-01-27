import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meta Corpo",
  description: "Meta Corpo é um treinamento direto que leva o corpo de volta ao estado onde sustentar sua própria energia é natural e até prazeroso. Quando o corpo entra no eixo, o cansaço perde força, a mente desacelera e a ação volta.",
  keywords: [
    "meta corpo",
    "treinamento corporal",
    "energia natural",
    "foco e disciplina",
    "transformação física",
    "movimento e respiração",
    "jejum e treino",
    "presença no corpo",
    "superação pessoal",
    "energia estável",
    "foco no dia a dia",
    "treinamento direto",
    "corpo no eixo",
    "transformação do corpo"
  ],
  authors: [{ name: "Felipe Lino dos Santos" }],
  openGraph: {
    title: "Meta Corpo",
    description: "Um treinamento direto que leva o corpo de volta ao estado onde sustentar sua própria energia é natural e até prazeroso.",
    type: "website",
    locale: "pt_BR",
    siteName: "Meta Corpo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Corpo",
    description: "Um treinamento direto que leva o corpo de volta ao estado onde sustentar sua própria energia é natural e até prazeroso.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
