import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Calendar, Heart, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Products = () => {
  const products = [
    {
      icon: Monitor,
      title: "MealPe Digital Cafeteria",
      tagline: "Queue-Free Corporate Dining",
      description: "Transform corporate cafeterias and food courts with contactless ordering, real-time menus, and seamless payments. Perfect for corporate parks, coworking spaces, and commercial buildings.",
      features: [
        "Real-time menu browsing",
        "Contactless UPI/card payments", 
        "Vendor dashboard management",
        "Pre-ordering & scheduling",
        "RFID/QR integration"
      ],
      perfectFor: "Corporate Parks • Coworking Spaces • Food Courts • Commercial Buildings",
      cta: "Explore Digital Cafeteria",
      mockup: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: Calendar,
      title: "MealPe Mess Manager", 
      tagline: "Smart Hostel & Campus Dining",
      description: "Complete mess digitization for hostels, residential campuses, and student housing. Features meal calendars, RSVP tracking, and intelligent inventory forecasting.",
      features: [
        "Weekly/monthly meal calendars",
        "RSVP and attendance tracking",
        "Consumption vs expectation analytics",
        "Biometric meal issuance",
        "Vendor inventory forecasting"
      ],
      perfectFor: "University Hostels • Student Housing • Residential Campuses • PG Accommodations",
      cta: "Explore Mess Manager",
      mockup: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: Heart,
      title: "MealPe MedMeals",
      tagline: "India's First Hospital Meal SaaS",
      description: "Revolutionary hospital meal management with HIS integration, therapeutic diet filtering, and nutrition tracking. Built specifically for healthcare institutions.",
      features: [
        "HIS integration for patient records",
        "Therapeutic diet-based filtering", 
        "Bed/ward-wise meal mapping",
        "Nutrition & allergy tracking",
        "Admin billing & reporting"
      ],
      perfectFor: "Hospitals • Healthcare Centers • Senior Care • Clinics",
      cta: "Explore MedMeals",
      mockup: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&auto=format"
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
            <span className="text-primary">Complete Transformation.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Purpose-built solutions for every institutional food service challenge.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="glass-card hover:glass-strong transition-all duration-500 border-border/50 overflow-hidden group">
              {/* Product Mockup */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.mockup}
                  alt={`${product.title} Interface`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                    <product.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-foreground mb-1">
                  {product.title}
                </CardTitle>
                
                <p className="text-primary font-medium text-sm mb-4">
                  {product.tagline}
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Perfect For */}
                <div className="mb-6 p-3 glass-card rounded-lg">
                  <h4 className="text-xs font-semibold text-foreground mb-2">Perfect For:</h4>
                  <p className="text-sm text-muted-foreground">{product.perfectFor}</p>
                </div>
                
                {/* CTA */}
                <Button 
                  asChild
                  className="w-full gradient-primary text-white hover:shadow-glow transition-all duration-300"
                >
                  {index === 2 ? (
                    <a href="https://medmeals.mealpe.app" target="_blank" rel="noopener noreferrer">
                      {product.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  ) : (
                    <Link to={index === 0 ? "/products/canteen-digitisation" : "/products/mess-digitisation"}>
                      {product.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  )}
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