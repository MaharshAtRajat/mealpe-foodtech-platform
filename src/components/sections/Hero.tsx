import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero text-white">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            The Operating System for{" "}
            <span className="text-primary-light">Institutional Food Services</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Digitize cafeterias, streamline mess operations, and revolutionize hospital meal management across{" "}
            <span className="font-semibold text-white">60,000+ meals served daily</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-brand px-8 py-4 text-lg font-semibold"
            >
              Get Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              View Case Studies
            </Button>
          </div>

          {/* Social Proof */}
          <div className="text-white/80 text-lg">
            <span className="font-semibold text-white">8+ institutions</span> already revolutionizing their dining operations
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none" />
      <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};