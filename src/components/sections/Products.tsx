import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Calendar, Heart } from "lucide-react";

export const Products = () => {
  const products = [
    {
      icon: Utensils,
      title: "MealPe Digital Cafeteria",
      description: "Contactless ordering, payments, and vendor management for corporate cafeterias and food courts",
      features: ["Real-time menus", "UPI payments", "Vendor dashboards"],
      cta: "Learn More"
    },
    {
      icon: Calendar,
      title: "MealPe Mess Manager",
      description: "Complete mess digitization for hostels and residential campuses with meal planning and attendance",
      features: ["Meal calendars", "RSVP tracking", "Inventory forecasting"],
      cta: "Learn More"
    },
    {
      icon: Heart,
      title: "MealPe MedMeals",
      description: "India's first SaaS for hospital meal management with therapeutic diet integration",
      features: ["HIS integration", "Diet filtering", "Nutrition tracking"],
      cta: "Learn More"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Three Products.{" "}
            <span className="text-primary">Endless Possibilities.</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="shadow-card hover:shadow-brand transition-all duration-300 border-border/50">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full border-primary/20 text-primary hover:bg-primary/10"
                >
                  {product.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};