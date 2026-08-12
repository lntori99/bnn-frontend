import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/shared/mainlayout";
import Providers from "@/core/providers";
import { placeholderImages } from "@/data/placeholder-images";

// Headings use Times New Roman, a system serif — no webfont to load.
// See --font-display in globals.css for the stack.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
