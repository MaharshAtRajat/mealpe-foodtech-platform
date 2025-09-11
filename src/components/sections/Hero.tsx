import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroSplitScreen from "@/assets/hero-split-screen.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 flex items-center px-4 sm:px-0">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-primary rounded-full blur-3xl opacity-5"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,88,58,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,88,58,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

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

            {/* Right Content - Product Mockup */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative z-10">
                {/* Main Dashboard Mockup */}
                <div className="glass-strong rounded-xl sm:rounded-2xl p-1 shadow-glass mb-4 sm:mb-6 animate-float">
                  <div className="bg-background rounded-xl overflow-hidden">
                    <img 
                      src={heroSplitScreen}
                      alt="Traditional vs Digital Food Service - MealPe Transformation"
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-t-xl"
                    />
                    <div className="p-3 sm:p-4 lg:p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground">MealPe Dashboard</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
                        <div className="glass-card p-2 sm:p-3 rounded-lg text-center">
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">72K+</div>
                          <div className="text-xs text-muted-foreground">Orders</div>
                        </div>
                        <div className="glass-card p-2 sm:p-3 rounded-lg text-center">
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">5+</div>
                          <div className="text-xs text-muted-foreground">Use Cases</div>
                        </div>
                        <div className="glass-card p-2 sm:p-3 rounded-lg text-center">
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">7+</div>
                          <div className="text-xs text-muted-foreground">Partners</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile App Mockup */}
                <div className="hidden lg:block absolute -bottom-4 lg:-bottom-6 -right-4 lg:-right-6 w-32 lg:w-40 xl:w-48 glass-strong rounded-2xl lg:rounded-3xl p-1 shadow-glass animate-float" style={{animationDelay: '1s'}}>
                  <div className="bg-background rounded-2xl overflow-hidden">
                    <div className="bg-primary/10 h-16 lg:h-20 xl:h-24 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 gradient-primary rounded-lg mx-auto mb-1 lg:mb-2 flex items-center justify-center">
                          <span className="text-white font-bold text-xs lg:text-sm">M</span>
                        </div>
                        <div className="text-xs font-medium">MealPe</div>
                      </div>
                    </div>
                    <div className="p-2 lg:p-3 space-y-1 lg:space-y-2">
                      <div className="h-1 lg:h-1.5 bg-muted rounded w-full"></div>
                      <div className="h-1 lg:h-1.5 bg-muted rounded w-2/3"></div>
                      <div className="h-1 lg:h-1.5 bg-muted rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="hidden xl:block absolute top-8 lg:top-10 -left-8 lg:-left-10 glass-card p-3 lg:p-4 rounded-lg lg:rounded-xl shadow-glass animate-float" style={{animationDelay: '3s'}}>
                <div className="text-center">
                  <div className="text-lg lg:text-xl xl:text-2xl font-bold text-primary">60K+</div>
                  <div className="text-xs text-muted-foreground">Daily Meals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};