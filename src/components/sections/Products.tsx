import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Calendar, Heart, ArrowRight, CheckCircle } from "lucide-react";

export const Products = () => {
  const products = [
    {
      icon: Utensils,
      title: "MealPe Digital Cafeteria",
      description: "Contactless ordering, payments, and vendor management for corporate cafeterias and food courts",
      features: ["Real-time menus", "UPI payments", "Vendor dashboards", "Analytics & insights"],
      cta: "Learn More",
      mockup: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&auto=format",
      stats: { orders: "45K+", vendors: "12+", reduction: "25%" }
    },
    {
      icon: Calendar,
      title: "MealPe Mess Manager",
      description: "Complete mess digitization for hostels and residential campuses with meal planning and attendance",
      features: ["Meal calendars", "RSVP tracking", "Inventory forecasting", "Waste reduction"],
      cta: "Learn More",
      mockup: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
      stats: { meals: "20K+", wastage: "-30%", satisfaction: "94%" }
    },
    {
      icon: Heart,
      title: "MealPe MedMeals",
      description: "India's first SaaS for hospital meal management with therapeutic diet integration",
      features: ["HIS integration", "Diet filtering", "Nutrition tracking", "Patient preferences"],
      cta: "Learn More",
      mockup: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&auto=format",
      stats: { patients: "15K+", accuracy: "99%", compliance: "100%" }
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="glass-card inline-flex items-center px-4 py-2 rounded-full mb-6">
            <CheckCircle className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground">Three Powerful Solutions</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Three Products.{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Endless Possibilities.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to transform every aspect of institutional food service management.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="glass-card hover:glass-strong transition-all duration-500 border-0 group overflow-hidden">
              <div className="relative">
                {/* Product Mockup */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                  <img 
                    src={product.mockup}
                    alt={`${product.title} Interface`}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                  <product.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {product.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {product.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <ul className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(product.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center glass-card p-2 rounded-lg">
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full glass-card border-primary/20 text-primary hover:gradient-primary hover:text-white transition-all duration-300"
                  variant="outline"
                >
                  {product.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="gradient-primary text-white shadow-brand hover:shadow-glow px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Explore All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};