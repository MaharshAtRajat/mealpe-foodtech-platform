import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroSplitScreen from "@/assets/hero-split-screen.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-primary rounded-full blur-3xl opacity-5"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,88,58,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,88,58,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center glass-card px-4 py-2 rounded-full mb-8">
                <Sparkles className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm font-medium text-foreground">Leading Contactless Digital Platform</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="text-foreground">The Operating</span><br />
                <span className="text-foreground">System for</span><br />
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Institutional Food
                </span><br />
                <span className="text-foreground">Services</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg lg:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Digitize cafeterias, streamline mess operations, and revolutionize hospital meal management across{" "}
                <span className="font-semibold text-primary">60,000+ meals served daily</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white shadow-brand hover:shadow-glow px-8 py-4 text-lg font-semibold transition-all duration-300 animate-glow"
                >
                  Get Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glass-card border-primary/20 text-foreground hover:glass-strong px-8 py-4 text-lg transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  View Case Studies
                </Button>
              </div>

              {/* Social Proof */}
              <div className="text-muted-foreground">
                <span className="font-semibold text-primary">8+ institutions</span> already revolutionizing their dining operations
              </div>
            </div>

            {/* Right Content - Product Mockup */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Dashboard Mockup */}
                <div className="glass-strong rounded-2xl p-1 shadow-glass mb-6 animate-float">
                  <div className="bg-background rounded-xl overflow-hidden">
                    <img 
                      src={heroSplitScreen}
                      alt="Traditional vs Digital Food Service - MealPe Transformation"
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-sm text-muted-foreground">MealPe Dashboard</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="glass-card p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-primary">72K+</div>
                          <div className="text-xs text-muted-foreground">Orders</div>
                        </div>
                        <div className="glass-card p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-primary">5+</div>
                          <div className="text-xs text-muted-foreground">Use Cases</div>
                        </div>
                        <div className="glass-card p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-primary">7+</div>
                          <div className="text-xs text-muted-foreground">Partners</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile App Mockup */}
                <div className="absolute -bottom-6 -right-6 w-48 glass-strong rounded-3xl p-1 shadow-glass animate-float" style={{animationDelay: '1s'}}>
                  <div className="bg-background rounded-2xl overflow-hidden">
                    <div className="bg-primary/10 h-32 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 gradient-primary rounded-xl mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white font-bold">M</span>
                        </div>
                        <div className="text-xs font-medium">MealPe Mobile</div>
                      </div>
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="h-2 bg-muted rounded w-full"></div>
                      <div className="h-2 bg-muted rounded w-2/3"></div>
                      <div className="h-2 bg-muted rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 -left-10 glass-card p-4 rounded-xl shadow-glass animate-float" style={{animationDelay: '3s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">60K+</div>
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