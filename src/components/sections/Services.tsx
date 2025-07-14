import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Store, 
  Monitor, 
  Truck, 
  Palette, 
  Settings 
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Vendor Aggregation",
      description: "Connect with pre-vetted food service vendors across India."
    },
    {
      icon: Store,
      title: "Cafeteria Setup Consulting",
      description: "Complete guidance for new cafeteria and food court setups."
    },
    {
      icon: Monitor,
      title: "Hardware Procurement",
      description: "POS systems, kiosks, RFID readers, and digital displays."
    },
    {
      icon: Truck,
      title: "Campus Food Delivery",
      description: "Last-mile delivery solutions via dedicated vendor teams."
    },
    {
      icon: Palette,
      title: "White-Label Development",
      description: "Custom-branded apps and portals for your institution."
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "Seamless connectivity with your existing ERP, HIS, and CRM systems."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Beyond Software -{" "}
            <span className="text-primary">Complete Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end services to ensure your food service transformation succeeds.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover:glass-strong transition-all duration-300 border-border/50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};