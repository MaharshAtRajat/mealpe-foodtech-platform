import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Building2, 
  Heart, 
  Home, 
  Users, 
  Hotel, 
  Plane, 
  Factory 
} from "lucide-react";

export const Industries = () => {
  const industries = [
    { icon: GraduationCap, title: "Universities & Colleges", description: "Campus dining solutions" },
    { icon: Building2, title: "Corporate Parks", description: "Office cafeteria management" },
    { icon: Heart, title: "Hospitals & Healthcare", description: "Medical meal services" },
    { icon: Home, title: "Hostels & Student Housing", description: "Residential meal programs" },
    { icon: Users, title: "Co-living Spaces", description: "Community dining solutions" },
    { icon: Hotel, title: "Hotels & Clubs", description: "Hospitality food services" },
    { icon: Plane, title: "Airports & Transit", description: "Travel hub dining" },
    { icon: Factory, title: "Manufacturing Hubs", description: "Industrial canteens" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Serving Every Institution That{" "}
            <span className="text-primary">Feeds People</span>
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-brand transition-all duration-300 border-border/50 group cursor-pointer"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm lg:text-base">
                    {industry.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};