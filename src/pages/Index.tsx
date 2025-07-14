import { Hero } from "@/components/sections/Hero";
import { KeyStats } from "@/components/sections/KeyStats";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { Products } from "@/components/sections/Products";
import { Industries } from "@/components/sections/Industries";
import { Services } from "@/components/sections/Services";
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
        <KeyStats />
        <ProblemStatement />
        <Products />
        <Industries />
        <Services />
        <Technology />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
