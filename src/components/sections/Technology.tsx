import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      description: "AWS/GCP powered scalable architecture"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Razorpay PCI DSS compliant transactions"
    },
    {
      icon: Smartphone,
      title: "RFID/QR Integration",
      description: "Seamless hardware connectivity"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live insights and reporting dashboard"
    },
    {
      icon: Palette,
      title: "Mobile-First Design",
      description: "Responsive across all devices"
    },
    {
      icon: Zap,
      title: "API Integrations",
      description: "Connect with existing systems"
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
            Built with cutting-edge technology to ensure reliability, security, and scalability for institutions of all sizes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-brand transition-all duration-300 border-border/50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl shadow-card p-6 border">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-muted rounded w-1/3"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <div className="h-20 bg-primary/10 rounded-lg"></div>
                  <div className="h-20 bg-primary/10 rounded-lg"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded w-full"></div>
                  <div className="h-3 bg-muted rounded w-2/3"></div>
                  <div className="h-3 bg-muted rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};