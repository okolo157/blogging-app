import { Nunito } from "next/font/google";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { BlogSection } from "@/components/BlogSection";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={nunito.className}>
      <Navbar />
      <Header />
      <BlogSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
