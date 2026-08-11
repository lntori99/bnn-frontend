import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainLayout from "@/shared/mainlayout";
import Providers from "@/core/providers";
import { placeholderImages } from "@/data/placeholder-images";

const satoshi = localFont({
  src: [
    { path: "../../public/fonts/satoshi/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/satoshi/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/satoshi/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/satoshi/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/satoshi/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
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
    <html lang="en" className={satoshi.variable}>
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
