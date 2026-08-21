import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scrolltotop";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main id="main" className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
