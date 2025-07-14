import { 
  Cloud, 
  Shield, 
  Smartphone, 
  BarChart3, 
  Palette, 
  Zap 
} from "lucide-react";

export const Technology = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "AWS & GCP hosting\n99.9% uptime guarantee\nAuto-scaling capabilities\nGlobal CDN delivery"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Razorpay PCI DSS compliance\nMultiple payment gateways\nMeal wallet functionality\nEncrypted transactions"
    },
    {
      icon: Zap,
      title: "Smart Integration",
      description: "ERP system connectivity\nHIS integration ready\nPOS system compatibility\nCRM data synchronization"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Consumption dashboards\nVendor performance metrics\nUser behavior insights\nPredictive forecasting"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "iOS & Android apps\nProgressive web app\nOffline capability\nTouch-optimized interface"
    },
    {
      icon: Palette,
      title: "Hardware Support",
      description: "RFID card integration\nQR code scanning\nBiometric attendance\nSelf-service kiosks"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Enterprise-Grade{" "}
            <span className="text-primary">Technology Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for scale, security, and seamless integration with your existing systems.
          </p>
        </div>

        {/* Features in alternating layout */}
        <div className="max-w-6xl mx-auto space-y-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-12 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {feature.description.split('\n').map((line, lineIndex) => (
                    <div key={lineIndex} className="flex items-center text-lg text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8 h-64 flex items-center justify-center">
                  <div className="bg-card rounded-xl shadow-lg p-6 border w-full h-full">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-2 h-2 bg-destructive rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-muted rounded w-2/3"></div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-muted rounded"></div>
                          <div className="h-2 bg-muted rounded w-3/4"></div>
                          <div className="h-2 bg-muted rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};