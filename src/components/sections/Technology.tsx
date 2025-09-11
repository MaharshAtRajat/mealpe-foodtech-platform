import { useState, useEffect } from "react";
import { Cloud, Shield, Smartphone, BarChart3, Palette, Zap, Layers, Database, Globe, Lock, Activity, Cpu } from "lucide-react";
export const Technology = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const techStacks = [{
    category: "Infrastructure",
    icon: Cloud,
    color: "from-blue-500 to-cyan-500",
    features: ["AWS & GCP", "99.9% Uptime", "Auto-scaling", "Global CDN"]
  }, {
    category: "Security",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
    features: ["PCI DSS", "Encryption", "2FA Auth", "Secure APIs"]
  }, {
    category: "Integration",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    features: ["ERP Ready", "API First", "Webhook", "Real-time"]
  }];
  const features = [{
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Enterprise-grade cloud hosting with guaranteed 99.9% uptime",
    details: ["AWS & GCP hosting", "Auto-scaling capabilities", "Global CDN delivery", "Disaster recovery"],
    metric: "99.9%",
    metricLabel: "Uptime"
  }, {
    icon: Shield,
    title: "Secure Payments",
    description: "Bank-grade security for all financial transactions",
    details: ["PCI DSS compliance", "Multiple payment gateways", "Encrypted transactions", "Fraud detection"],
    metric: "256-bit",
    metricLabel: "Encryption"
  }, {
    icon: Zap,
    title: "Smart Integration",
    description: "Seamless connectivity with existing business systems",
    details: ["ERP system connectivity", "POS compatibility", "API-first architecture", "Webhook support"],
    metric: "< 100ms",
    metricLabel: "Response"
  }, {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Advanced data insights and predictive intelligence",
    details: ["Live dashboards", "Performance metrics", "Behavior insights", "Predictive forecasting"],
    metric: "Real-time",
    metricLabel: "Processing"
  }, {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Native mobile experience across all platforms",
    details: ["iOS & Android apps", "Progressive web app", "Offline capability", "Touch-optimized"],
    metric: "Cross-platform",
    metricLabel: "Support"
  }, {
    icon: Palette,
    title: "Hardware Support",
    description: "Complete integration with physical devices",
    details: ["RFID integration", "QR code scanning", "Biometric support", "Self-service kiosks"],
    metric: "Multi-device",
    metricLabel: "Compatible"
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % techStacks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium">Technology Excellence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">
            Enterprise-Grade{" "}
            <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Built for scale, security, and seamless integration with your existing systems.
            Experience the power of modern food-tech infrastructure.
          </p>
        </div>

        {/* Interactive Tech Stack Cards */}
        

        {/* Detailed Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => <div key={index} className="group relative" onMouseEnter={() => setHoveredFeature(index)} onMouseLeave={() => setHoveredFeature(null)}>
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-card/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-full transition-all duration-300 group-hover:border-primary/30">
                {/* Header */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 gradient-primary rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-1 leading-tight">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Metric Badge */}
                  <div className="text-right flex-shrink-0 ml-2">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">{feature.metric}</div>
                    <div className="text-xs text-muted-foreground">{feature.metricLabel}</div>
                  </div>
                </div>

                {/* Feature Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {feature.details.map((detail, dIndex) => <div key={dIndex} className={`bg-muted/30 rounded-lg p-3 border transition-all duration-300 ${hoveredFeature === index ? 'border-primary/20 bg-primary/5' : ''}`}>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-foreground font-medium leading-tight">{detail}</span>
                      </div>
                    </div>)}
                </div>

                {/* Status Indicator */}
                <div className="flex items-center justify-between mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium">Active & Monitored</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-3 sm:h-4 bg-primary/20 rounded-full" style={{
                  animationDelay: `${i * 0.2}s`,
                  animation: hoveredFeature === index ? 'pulse 1s infinite' : 'none'
                }}></div>)}
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-full px-6 py-3">
            <Activity className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm sm:text-base text-foreground font-medium">
              Trusted by 500+ enterprises • 99.99% security compliance
            </span>
          </div>
        </div>
      </div>
    </section>;
};