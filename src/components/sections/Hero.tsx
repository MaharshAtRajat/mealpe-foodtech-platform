import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background flex items-center px-4 sm:px-0">

      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center glass-card px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-2" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Leading Contactless Digital Platform</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-foreground">The Operating</span><br />
                <span className="text-foreground">System for</span><br />
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Institutional Food
                </span><br />
                <span className="text-foreground">Services</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Digitize cafeterias, streamline mess operations, and revolutionize hospital meal management across{" "}
                <span className="font-semibold text-primary">60,000+ meals served daily</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center mb-8 sm:mb-12">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white shadow-brand hover:shadow-glow px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 animate-glow w-full sm:w-auto"
                >
                  Get Demo
                  <ArrowRight className="ml-2 h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glass-card border-primary/20 text-foreground hover:glass-strong px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg transition-all duration-300 w-full sm:w-auto"
                >
                  <Play className="mr-2 h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5" />
                  View Case Studies
                </Button>
              </div>

              {/* Social Proof */}
              <div className="text-sm sm:text-base text-muted-foreground">
                <span className="font-semibold text-primary">8+ institutions</span> already revolutionizing their dining operations
              </div>
            </div>

            {/* Right Content - Mobile App Mockup */}
            <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <div className="relative z-10 max-w-sm mx-auto lg:mx-0">
                {/* Mobile App Image */}
                <div className="relative animate-float">
                  <img 
                    src="/lovable-uploads/e6132474-18e5-475e-8414-d69c42a220a2.png"
                    alt="MealPe Mobile App - Ahmedabad Campus Food Ordering Interface"
                    className="w-full max-w-xs lg:max-w-sm xl:max-w-md mx-auto drop-shadow-2xl"
                  />
                  
                  {/* Glow effect behind phone */}
                  <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] blur-2xl scale-110 -z-10 animate-pulse"></div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="hidden xl:block absolute top-8 -left-8 glass-card p-4 rounded-xl shadow-glass animate-float" style={{animationDelay: '2s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">60K+</div>
                  <div className="text-xs text-muted-foreground">Daily Meals</div>
                </div>
              </div>
              
              <div className="hidden xl:block absolute bottom-16 -left-4 glass-card p-3 rounded-lg shadow-glass animate-float" style={{animationDelay: '3s'}}>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">8+</div>
                  <div className="text-xs text-muted-foreground">Institutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};