import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  Smartphone, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  CreditCard,
  Calendar,
  Building,
  Star,
  Timer,
  DollarSign,
  Target,
  Award,
  Settings,
  Headphones,
  ChevronRight,
  QrCode,
  Wifi,
  Database,
  Cloud,
  Phone,
  Play
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const CanteenDigitisation = () => {
  const keyBenefits = [
    { icon: Clock, title: "Zero Queue Time", description: "Instant ordering" },
    { icon: Smartphone, title: "Contactless Ordering", description: "Safe & convenient" },
    { icon: TrendingUp, title: "Real-Time Menus", description: "Always updated" },
    { icon: Users, title: "Multi-Vendor Support", description: "Unified platform" }
  ];

  const painPoints = [
    {
      title: "Lost Productivity",
      items: [
        "45 minutes average lunch break time",
        "15-20 minutes spent in queues daily", 
        "Employees returning late from lunch",
        "Reduced afternoon productivity"
      ]
    },
    {
      title: "Operational Inefficiency", 
      items: [
        "Manual order taking errors",
        "Cash handling complications",
        "No demand forecasting",
        "Vendor coordination nightmares"
      ]
    },
    {
      title: "Poor Employee Experience",
      items: [
        "Long waiting times",
        "Limited payment options", 
        "No pre-ordering capability",
        "Menu information unavailable"
      ]
    },
    {
      title: "Revenue Loss",
      items: [
        "30% food wastage due to poor planning",
        "Underutilized vendor capacity",
        "No upselling opportunities", 
        "Missing consumption analytics"
      ]
    }
  ];

  const solutionComponents = [
    {
      title: "For Employees",
      subtitle: "Order, Pay, Pickup - That Simple",
      features: [
        "Browse real-time menus from multiple vendors",
        "Pre-order meals for specific pickup times",
        "Pay via UPI, cards, or meal wallets", 
        "Get notified when order is ready"
      ]
    },
    {
      title: "For Vendors",
      subtitle: "Streamlined Operations & Growth", 
      features: [
        "Digital menu management dashboard",
        "Real-time order notifications",
        "Payment settlement automation",
        "Performance analytics and insights"
      ]
    },
    {
      title: "For Administrators",
      subtitle: "Complete Visibility & Control",
      features: [
        "Multi-vendor management dashboard", 
        "Real-time consumption analytics",
        "Employee meal pattern insights",
        "Revenue and performance reports"
      ]
    }
  ];

  const industries = [
    {
      title: "Corporate Parks",
      challenge: "Managing multiple food vendors across large office complexes",
      solution: "Centralized ordering platform with location-based vendor filtering",
      result: "40% reduction in lunch break time, improved employee satisfaction"
    },
    {
      title: "Coworking Spaces", 
      challenge: "Flexible dining options for diverse member preferences",
      solution: "Dynamic vendor rotation with preference-based recommendations",
      result: "60% increase in food service revenue, enhanced member retention"
    },
    {
      title: "Food Courts",
      challenge: "Coordinating multiple independent vendors efficiently", 
      solution: "Unified ordering and payment system across all vendors",
      result: "35% increase in average order value, streamlined operations"
    },
    {
      title: "Commercial Buildings",
      challenge: "Serving diverse tenant companies with varying meal preferences",
      solution: "Customizable vendor selection and corporate billing options", 
      result: "50% reduction in operational overhead, improved tenant satisfaction"
    }
  ];

  const techFeatures = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure", 
      features: [
        "AWS/GCP Hosting: 99.9% uptime guarantee",
        "Auto-Scaling: Handle peak lunch hour traffic",
        "Global CDN: Fast loading across locations",
        "Disaster Recovery: Automated backup systems"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      features: [
        "PCI DSS: Secure payment processing",
        "Data Encryption: End-to-end protection", 
        "GDPR Ready: Privacy compliance built-in",
        "Access Control: Role-based permissions"
      ]
    },
    {
      icon: Database,
      title: "Integration Capabilities",
      features: [
        "API-First Design: Easy third-party integrations",
        "Webhook Support: Real-time data synchronization",
        "SSO Integration: Corporate authentication systems", 
        "ERP Connectivity: Financial system integration"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Technology",
      features: [
        "Native Apps: iOS and Android applications",
        "PWA Support: Works offline when needed",
        "Push Notifications: Order status updates",
        "Responsive Web: Works on any device"
      ]
    }
  ];

  const implementationPhases = [
    {
      phase: "Week 1: Planning & Setup",
      days: "Days 1-3: Discovery & Planning",
      tasks: [
        "Cafeteria assessment and vendor audit",
        "Integration requirements analysis", 
        "Custom configuration planning",
        "Timeline and milestone setting"
      ]
    },
    {
      phase: "Platform Configuration", 
      days: "Days 4-7",
      tasks: [
        "Vendor onboarding and menu setup",
        "Employee database integration",
        "Payment gateway configuration",
        "Mobile app customization"
      ]
    },
    {
      phase: "Week 2: Testing & Launch",
      days: "Days 8-10: Testing Phase",
      tasks: [
        "Internal testing with selected users",
        "Vendor training and familiarization", 
        "Payment processing verification",
        "Issue identification and resolution"
      ]
    },
    {
      phase: "Full Launch",
      days: "Days 11-14",
      tasks: [
        "Gradual rollout to all employees",
        "Real-time monitoring and support",
        "Performance optimization", 
        "Full launch and celebration"
      ]
    }
  ];

  const faqs = [
    {
      category: "Implementation & Setup",
      questions: [
        {
          q: "How long does implementation take?",
          a: "Complete implementation typically takes 2 weeks from contract signing to full launch, including vendor onboarding and employee training."
        },
        {
          q: "Do you provide hardware like tablets or kiosks?", 
          a: "We can guide hardware procurement or work with your existing systems. Our platform integrates with most standard POS terminals and tablets."
        },
        {
          q: "Can employees still pay with cash?",
          a: "While our platform focuses on digital payments, vendors can still accept cash for orders placed through the system."
        }
      ]
    },
    {
      category: "Integration & Compatibility",
      questions: [
        {
          q: "Does it integrate with our existing employee ID system?",
          a: "Yes, we provide API integrations with most HR systems and employee databases for seamless authentication."
        },
        {
          q: "What if we have existing POS systems?",
          a: "MealPe integrates with most standard POS systems, or vendors can use our standalone dashboard."
        },
        {
          q: "Is training required for vendors?", 
          a: "We provide comprehensive vendor training as part of onboarding, including ongoing support for new staff."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <div className="glass-card inline-flex items-center px-4 py-2 rounded-full mb-6">
                <Zap className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm font-medium text-foreground">Digital Transformation</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Transform Your Corporate Cafeteria Into a{" "}
                <span className="text-primary">Queue-Free Digital Experience</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Eliminate queues, streamline vendor management, and delight employees with contactless ordering, 
                real-time menus, and seamless payments. Perfect for corporate parks, coworking spaces, and food courts.
              </p>
              
              {/* Key Benefits Bar */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {keyBenefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground">{benefit.title}</h3>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-primary text-white shadow-brand hover:shadow-glow px-8 py-4 text-lg font-semibold">
                  Schedule Demo
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold">
                  <Play className="mr-2 h-5 w-5" />
                  View Live Demo
                </Button>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="glass-card p-8 rounded-2xl">
                <img 
                  src="/src/assets/digital-food-court.jpg"
                  alt="Digital Cafeteria Interface"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Corporate Cafeteria Chaos is{" "}
              <span className="text-primary">Costing You More Than You Think</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            {painPoints.map((point, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {point.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xl font-semibold text-foreground">
              Traditional cafeteria operations are broken.{" "}
              <span className="text-primary">MealPe Digital Cafeteria fixes them.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              The Complete{" "}
              <span className="text-primary">Digital Cafeteria Solution</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive platform that transforms corporate dining from chaotic queues to seamless digital experiences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutionComponents.map((component, index) => (
              <Card key={index} className="glass-card border-border/50 hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">{component.title}</CardTitle>
                  <p className="text-primary font-semibold">{component.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {component.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Everything You Need for{" "}
              <span className="text-primary">Modern Cafeteria Management</span>
            </h2>
          </div>
          
          <Tabs defaultValue="ordering" className="max-w-7xl mx-auto">
            <TabsList className="grid grid-cols-3 lg:grid-cols-3 w-full max-w-3xl mx-auto mb-12">
              <TabsTrigger value="ordering">Smart Ordering</TabsTrigger>
              <TabsTrigger value="vendor">Vendor Management</TabsTrigger>
              <TabsTrigger value="admin">Admin Control</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ordering" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Smartphone className="h-6 w-6 text-primary mr-3" />
                      Real-Time Menu Browsing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Live menu updates from all vendors</li>
                      <li>• Item availability tracking</li>
                      <li>• Nutritional information display</li>
                      <li>• Dietary preference filtering</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-6 w-6 text-primary mr-3" />
                      Advanced Pre-Ordering
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Schedule meals up to 7 days ahead</li>
                      <li>• Recurring order templates</li>
                      <li>• Group ordering for teams</li>
                      <li>• Bulk order management</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="h-6 w-6 text-primary mr-3" />
                      Flexible Payment Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• UPI integration (GPay, PhonePe, Paytm)</li>
                      <li>• Credit/debit card support</li>
                      <li>• Meal wallet functionality</li>
                      <li>• Corporate billing options</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="vendor" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="h-6 w-6 text-primary mr-3" />
                      Digital Menu Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Easy menu creation and updates</li>
                      <li>• Real-time item availability control</li>
                      <li>• Dynamic pricing capabilities</li>
                      <li>• Promotional campaign tools</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Timer className="h-6 w-6 text-primary mr-3" />
                      Order Processing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Instant order notifications</li>
                      <li>• Kitchen display integration</li>
                      <li>• Order queue management</li>
                      <li>• Preparation time tracking</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-6 w-6 text-primary mr-3" />
                      Financial Dashboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Daily/weekly/monthly revenue reports</li>
                      <li>• Payment settlement tracking</li>
                      <li>• Commission management</li>
                      <li>• Performance analytics</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="admin" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-6 w-6 text-primary mr-3" />
                      Multi-Vendor Coordination
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Centralized vendor onboarding</li>
                      <li>• Performance monitoring</li>
                      <li>• Quality rating system</li>
                      <li>• Contract management</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-6 w-6 text-primary mr-3" />
                      Advanced Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Employee dining pattern analysis</li>
                      <li>• Peak hour demand forecasting</li>
                      <li>• Vendor performance metrics</li>
                      <li>• Revenue optimization insights</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="h-6 w-6 text-primary mr-3" />
                      Integration Capabilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• HR system connectivity</li>
                      <li>• Employee ID card integration</li>
                      <li>• POS system compatibility</li>
                      <li>• Financial software sync</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your{" "}
              <span className="text-primary">Corporate Cafeteria?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Join several leading organizations revolutionizing their workplace dining with MealPe Digital Cafeteria.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Schedule Demo</h3>
                <p className="text-sm text-muted-foreground">See the platform in action with your specific requirements</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Custom Proposal</h3>
                <p className="text-sm text-muted-foreground">Get tailored pricing and implementation timeline</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Pilot Program</h3>
                <p className="text-sm text-muted-foreground">Start with a small group to prove ROI</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Full Deployment</h3>
                <p className="text-sm text-muted-foreground">Scale across your entire organization</p>
              </div>
            </div>
            
            <div className="text-center space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-primary text-white shadow-brand hover:shadow-glow px-8 py-4 text-lg font-semibold">
                  Schedule Demo
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold">
                  Download Product Brochure
                </Button>
              </div>
              
              <div className="glass-card p-6 rounded-lg max-w-md mx-auto">
                <h4 className="font-semibold text-foreground mb-2">30-Day Success Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  If you're not seeing improved efficiency within 30 days, we'll work with you to optimize the setup at no additional cost.
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <p className="text-muted-foreground">
                  <Phone className="inline h-4 w-4 mr-2" />
                  Sales Team: sales@mealpe.app | +91-7984598296
                </p>
                <p className="text-sm text-muted-foreground">Response Time: Within 2 hours during business hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CanteenDigitisation;