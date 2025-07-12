import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Industries } from "@/components/sections/Industries";
import { Technology } from "@/components/sections/Technology";
import { CTA } from "@/components/sections/CTA";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Industries />
        <Technology />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
