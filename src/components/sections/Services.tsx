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

        {/* Services List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-6 p-6 glass-card rounded-2xl hover:glass-strong transition-all duration-300">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};