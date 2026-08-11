import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "@/shared/mainlayout";
import Providers from "@/core/providers";
import { placeholderImages } from "@/data/placeholder-images";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bold New Normal — African-led transformation",
    template: "%s | Bold New Normal",
  },
  description:
    "Bold New Normal, founded by Lucy Quist, is a pan-African movement building African-led change through entrepreneurship, leadership and scalable enterprise.",
  openGraph: {
    title: "Bold New Normal",
    description: "Africa's transformation, driven by Africans.",
    type: "website",
    images: [placeholderImages.ogCover],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
