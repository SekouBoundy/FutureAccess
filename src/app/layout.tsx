import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappFab from "@/components/WhatsappFab";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "FutureAccess Mali — Études à l'international",
  description:
    "FutureAccess accompagne les étudiants dans toutes les étapes de leur projet d'études à l'international : orientation, admission, visa et installation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${jakarta.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col overflow-x-clip">
        {/* Active les révélations au scroll avant le premier paint (pas de flash,
            et sans JS le contenu reste visible) */}
        <script
          dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js")` }}
        />
        <Header />
        {children}
        <Footer />
        <WhatsappFab />
        <ScrollReveal />
      </body>
    </html>
  );
}
