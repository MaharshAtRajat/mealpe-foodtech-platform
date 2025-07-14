import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Building2, 
  Heart, 
  Home, 
  Users, 
  Crown,
  Plane,
  Factory,
  Coffee,
  Target
} from "lucide-react";

export const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: "Universities & Colleges",
      description: "Streamline campus dining with digital mess management and cafeteria solutions.",
      bgColor: "from-blue-500/10 to-blue-600/10"
    },
    {
      icon: Building2,
      title: "Corporate Parks",
      description: "Transform workplace dining with queue-free ordering and vendor management.",
      bgColor: "from-green-500/10 to-green-600/10"
    },
    {
      icon: Heart,
      title: "Hospitals & Healthcare",
      description: "Therapeutic meal management with patient record integration.",
      bgColor: "from-red-500/10 to-red-600/10"
    },
    {
      icon: Home,
      title: "Student Housing & Hostels",
      description: "Complete mess digitization with meal planning and attendance tracking.",
      bgColor: "from-purple-500/10 to-purple-600/10"
    },
    {
      icon: Users,
      title: "Co-living & PG Spaces",
      description: "Modern dining solutions for shared living communities.",
      bgColor: "from-orange-500/10 to-orange-600/10"
    },
    {
      icon: Crown,
      title: "Hotels & Clubs",
      description: "Elevate member dining experiences with digital ordering systems.",
      bgColor: "from-amber-500/10 to-amber-600/10"
    },
    {
      icon: Plane,
      title: "Airports & Transit Hubs",
      description: "Fast, efficient food service for travelers and staff.",
      bgColor: "from-cyan-500/10 to-cyan-600/10"
    },
    {
      icon: Factory,
      title: "Manufacturing & Industrial",
      description: "Canteen solutions for large workforce feeding operations.",
      bgColor: "from-indigo-500/10 to-indigo-600/10"
    },
    {
      icon: Coffee,
      title: "Coworking Spaces",
      description: "Flexible dining solutions for dynamic work environments.",
      bgColor: "from-pink-500/10 to-pink-600/10"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <Card key={index} className="glass-card hover:glass-strong transition-all duration-500 border-border/50 overflow-hidden group">
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-6 relative z-10">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                
                <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {industry.title}
                </CardTitle>
                
                <p className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};