import type { Metadata } from "next";
import { Unbounded, Archivo } from "next/font/google";
import "./globals.css";
import MainLayout from "@/shared/mainlayout";
import Providers from "@/core/providers";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  weight: ["400", "500", "600", "700", "800"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
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
    images: ["/images/og-cover.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${archivo.variable}`}>
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
