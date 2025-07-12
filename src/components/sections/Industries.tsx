import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Building2, 
  Heart, 
  Home, 
  Users, 
  Hotel, 
  Plane, 
  Factory,
  Target
} from "lucide-react";

export const Industries = () => {
  const industries = [
    { 
      icon: GraduationCap, 
      title: "Universities & Colleges", 
      description: "Campus dining solutions",
      stats: "50K+ students served",
      color: "from-blue-500/20 to-blue-600/20"
    },
    { 
      icon: Building2, 
      title: "Corporate Parks", 
      description: "Office cafeteria management",
      stats: "25+ corporate clients",
      color: "from-green-500/20 to-green-600/20"
    },
    { 
      icon: Heart, 
      title: "Hospitals & Healthcare", 
      description: "Medical meal services",
      stats: "15K+ patients served",
      color: "from-red-500/20 to-red-600/20"
    },
    { 
      icon: Home, 
      title: "Hostels & Student Housing", 
      description: "Residential meal programs",
      stats: "100+ hostel mess",
      color: "from-purple-500/20 to-purple-600/20"
    },
    { 
      icon: Users, 
      title: "Co-living Spaces", 
      description: "Community dining solutions",
      stats: "80+ co-living spaces",
      color: "from-orange-500/20 to-orange-600/20"
    },
    { 
      icon: Hotel, 
      title: "Hotels & Clubs", 
      description: "Hospitality food services",
      stats: "30+ hospitality partners",
      color: "from-pink-500/20 to-pink-600/20"
    },
    { 
      icon: Plane, 
      title: "Airports & Transit", 
      description: "Travel hub dining",
      stats: "5+ transit hubs",
      color: "from-cyan-500/20 to-cyan-600/20"
    },
    { 
      icon: Factory, 
      title: "Manufacturing Hubs", 
      description: "Industrial canteens",
      stats: "20+ manufacturing sites",
      color: "from-gray-500/20 to-gray-600/20"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 to-background"></div>
      <div className="absolute top-40 left-40 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 right-40 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="glass-card inline-flex items-center px-4 py-2 rounded-full mb-6">
            <Target className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground">Diverse Industries</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Serving Every Institution That{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Feeds People
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From universities to hospitals, our platform adapts to the unique needs of every institution.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="glass-card hover:glass-strong transition-all duration-500 border-0 group cursor-pointer overflow-hidden"
            >
              <CardContent className="p-6 text-center space-y-4 relative">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:shadow-glow transition-all duration-500 mb-4">
                    <industry.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm lg:text-base group-hover:text-primary transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-muted-foreground mb-2">
                      {industry.description}
                    </p>
                    <div className="text-xs font-medium text-primary">
                      {industry.stats}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="glass-strong rounded-3xl p-8 lg:p-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Real Impact Across Industries
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our platform has transformed food service operations across diverse sectors, 
                delivering measurable results and improved experiences for millions of users.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">72K+</div>
                  <div className="text-sm text-muted-foreground">Orders Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4%</div>
                  <div className="text-sm text-muted-foreground">Food Wastage Reduction</div>
                </div>
              </div>
              <Button className="gradient-primary text-white shadow-brand hover:shadow-glow transition-all duration-300">
                View Case Studies
              </Button>
            </div>
            
            <div className="relative">
              {/* Industry Network Visualization */}
              <div className="relative h-80 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&auto=format"
                  alt="Industry Network"
                  className="w-full h-full object-cover opacity-80 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl"></div>
                
                {/* Floating Stats */}
                <div className="absolute top-4 left-4 glass-card p-3 rounded-xl">
                  <div className="text-lg font-bold text-primary">8+</div>
                  <div className="text-xs text-muted-foreground">Industries</div>
                </div>
                <div className="absolute bottom-4 right-4 glass-card p-3 rounded-xl">
                  <div className="text-lg font-bold text-primary">200+</div>
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