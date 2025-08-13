import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
export const CTA = () => {
  return <section className="relative overflow-hidden gradient-primary text-white">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your{" "}
            <span className="text-primary-light">Food Service?</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join <span className="font-semibold text-white">several institutions</span> already revolutionizing their dining operations
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-brand px-8 py-4 text-lg font-semibold">
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-brand px-8 py-4 text-lg font-semibold">
              <Download className="mr-2 h-5 w-5" />
              Download Case Study
            </Button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none" />
    </section>;
};