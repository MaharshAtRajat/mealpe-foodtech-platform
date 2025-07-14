import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import employeeOrderingVector from "@/assets/employee-ordering-vector.png";
import vendorDashboardVector from "@/assets/vendor-dashboard-vector.png";
import adminAnalyticsVector from "@/assets/admin-analytics-vector.png";

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
          
          <div className="max-w-7xl mx-auto space-y-16">
            {/* For Employees */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <Smartphone className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-semibold text-primary">For Employees</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Order, Pay, Pickup - That Simple
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Transform the employee dining experience with intuitive mobile ordering that eliminates queues and reduces wait times.
                  </p>
                </div>
                <div className="space-y-4">
                  {solutionComponents[0].features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="glass-card p-8 rounded-2xl">
                  <img 
                    src={employeeOrderingVector}
                    alt="Employee Mobile Ordering App"
                    className="w-full h-64 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* For Vendors */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <Building className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-semibold text-primary">For Vendors</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Streamlined Operations & Growth
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Empower food vendors with digital tools that automate order management and provide valuable business insights.
                  </p>
                </div>
                <div className="space-y-4">
                  {solutionComponents[1].features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative lg:order-1">
                <div className="glass-card p-8 rounded-2xl">
                  <img 
                    src={vendorDashboardVector}
                    alt="Vendor Management Dashboard"
                    className="w-full h-64 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* For Administrators */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <BarChart3 className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-semibold text-primary">For Administrators</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Complete Visibility & Control
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Gain comprehensive insights into cafeteria operations with powerful analytics and centralized management tools.
                  </p>
                </div>
                <div className="space-y-4">
                  {solutionComponents[2].features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="glass-card p-8 rounded-2xl">
                  <img 
                    src={adminAnalyticsVector}
                    alt="Admin Analytics Dashboard"
                    className="w-full h-64 object-contain"
                  />
                </div>
              </div>
            </div>
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

      {/* Industries and Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Perfect for Every{" "}
              <span className="text-primary">Corporate and Academic Dining Environment</span>
            </h2>
          </div>
          
          {/* Primary Industries */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {industries.map((industry, index) => {
              const industryIcons = [Building, Users, Target, Star];
              const IconComponent = industryIcons[index % industryIcons.length];
              
              return (
                <div key={index} className="group relative">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative glass-card border-border/50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{industry.title}</h3>
                        <div className="w-12 h-1 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="relative pl-6">
                        <div className="absolute left-0 top-1 w-4 h-4 bg-red-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <p className="text-sm font-semibold text-red-600 mb-2">Challenge</p>
                        <p className="text-foreground text-sm leading-relaxed">{industry.challenge}</p>
                      </div>
                      
                      <div className="relative pl-6">
                        <div className="absolute left-0 top-1 w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <p className="text-sm font-semibold text-blue-600 mb-2">Solution</p>
                        <p className="text-foreground text-sm leading-relaxed">{industry.solution}</p>
                      </div>
                      
                      <div className="relative pl-6">
                        <div className="absolute left-0 top-1 w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <p className="text-sm font-semibold text-green-600 mb-2">Result</p>
                        <p className="text-primary font-semibold text-sm leading-relaxed">{industry.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Extended Use Cases */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <Target className="h-6 w-6 text-primary mr-3" />
                  Manufacturing Facilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Large workforce meal coordination
                  </li>
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Shift-based dining management
                  </li>
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Bulk ordering capabilities
                  </li>
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Nutritional tracking for health programs
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <Zap className="h-6 w-6 text-primary mr-3" />
                  Tech Campuses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Multiple cafeteria location management
                  </li>
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Integration with employee ID systems
                  </li>
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Advanced analytics for meal planning
                  </li>
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Dietary preference accommodation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Built for{" "}
              <span className="text-primary">Enterprise Scale and Security</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {techFeatures.map((feature, index) => (
              <Card key={index} className="glass-card border-border/50 hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center">
                    <feature.icon className="h-6 w-6 text-primary mr-3" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-foreground">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Analytics Engine */}
          <Card className="glass-card border-border/50 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-primary mr-3" />
                Analytics Engine
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Real-Time Dashboards: Live operational insights
                  </li>
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Predictive Analytics: Demand forecasting
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Custom Reports: Tailored business intelligence
                  </li>
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Data Export: CSV, Excel, API access
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Mockups Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              See Your{" "}
              <span className="text-primary">Digital Cafeteria</span>
              {" "}in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the complete ecosystem - from employee mobile apps to comprehensive admin dashboards
            </p>
          </div>
          
          {/* Mobile App Mockups */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Employee Mobile Experience
              </h3>
              <p className="text-lg text-muted-foreground">
                Intuitive mobile app for seamless ordering and payment
              </p>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Menu Browsing Screen */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-64 h-[500px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="h-8 bg-muted/20 flex items-center justify-center text-xs">
                        <span className="text-foreground font-medium">9:41 AM</span>
                      </div>
                      
                      {/* Screen Content */}
                      <div className="p-4 h-full">
                        <div className="text-center mb-4">
                          <h4 className="font-bold text-foreground">Menu Browser</h4>
                        </div>
                        
                        {/* Vendor Tabs */}
                        <div className="flex gap-2 mb-4">
                          <div className="bg-primary text-white px-3 py-1 rounded-full text-xs">Cafe A</div>
                          <div className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs">Cafe B</div>
                          <div className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs">Cafe C</div>
                        </div>
                        
                        {/* Menu Items */}
                        <div className="space-y-3">
                          {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-muted/50 p-3 rounded-lg flex items-center gap-3">
                              <div className="w-12 h-12 bg-primary/20 rounded-lg"></div>
                              <div className="flex-1">
                                <div className="h-3 bg-foreground/20 rounded mb-1"></div>
                                <div className="h-2 bg-muted-foreground/40 rounded w-2/3"></div>
                              </div>
                              <div className="text-primary font-bold text-sm">₹{120 + item * 10}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Notification Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                </div>
                <p className="mt-4 text-center text-sm font-medium text-foreground">Real-time Menu Browsing</p>
              </div>

              {/* Order Placement Screen */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-64 h-[500px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                      <div className="h-8 bg-muted/20 flex items-center justify-center text-xs">
                        <span className="text-foreground font-medium">9:41 AM</span>
                      </div>
                      
                      <div className="p-4 h-full">
                        <div className="text-center mb-4">
                          <h4 className="font-bold text-foreground">Quick Order</h4>
                        </div>
                        
                        {/* Cart Items */}
                        <div className="space-y-3 mb-6">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-foreground">Grilled Sandwich</span>
                              <span className="text-primary font-bold">₹140</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2">
                                <button className="w-6 h-6 bg-muted rounded-full text-xs">-</button>
                                <span className="text-sm">2</span>
                                <button className="w-6 h-6 bg-primary text-white rounded-full text-xs">+</button>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-muted/30 p-3 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-foreground">Coffee</span>
                              <span className="text-primary font-bold">₹80</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Pickup Time */}
                        <div className="bg-muted/50 p-3 rounded-lg mb-4">
                          <span className="text-sm text-muted-foreground">Pickup: </span>
                          <span className="font-medium text-foreground">12:30 PM</span>
                        </div>
                        
                        {/* Total & Pay Button */}
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="font-bold text-foreground">Total:</span>
                            <span className="font-bold text-primary text-lg">₹360</span>
                          </div>
                          <button className="w-full bg-primary text-white py-3 rounded-lg font-medium">
                            Pay Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-center text-sm font-medium text-foreground">Smart Order Placement</p>
              </div>

              {/* Order Tracking Screen */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-64 h-[500px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                      <div className="h-8 bg-muted/20 flex items-center justify-center text-xs">
                        <span className="text-foreground font-medium">9:41 AM</span>
                      </div>
                      
                      <div className="p-4 h-full">
                        <div className="text-center mb-6">
                          <h4 className="font-bold text-foreground">Order Status</h4>
                          <p className="text-sm text-muted-foreground">#ORD-12345</p>
                        </div>
                        
                        {/* Status Timeline */}
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-primary rounded-full"></div>
                            <div>
                              <p className="font-medium text-foreground">Order Confirmed</p>
                              <p className="text-xs text-muted-foreground">12:15 PM</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-primary rounded-full"></div>
                            <div>
                              <p className="font-medium text-foreground">Preparing</p>
                              <p className="text-xs text-muted-foreground">12:20 PM</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-muted border-2 border-primary rounded-full animate-pulse"></div>
                            <div>
                              <p className="font-medium text-primary">Ready for Pickup</p>
                              <p className="text-xs text-muted-foreground">12:30 PM</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* QR Code */}
                        <div className="bg-muted/30 p-4 rounded-lg text-center">
                          <div className="w-20 h-20 bg-foreground/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <QrCode className="h-12 w-12 text-foreground/60" />
                          </div>
                          <p className="text-xs text-muted-foreground">Show QR at pickup</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-center text-sm font-medium text-foreground">Real-time Order Tracking</p>
              </div>

              {/* Wallet & History Screen */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-64 h-[500px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                      <div className="h-8 bg-muted/20 flex items-center justify-center text-xs">
                        <span className="text-foreground font-medium">9:41 AM</span>
                      </div>
                      
                      <div className="p-4 h-full">
                        <div className="text-center mb-4">
                          <h4 className="font-bold text-foreground">My Wallet</h4>
                        </div>
                        
                        {/* Balance Card */}
                        <div className="bg-gradient-to-r from-primary to-primary/80 p-4 rounded-lg text-white mb-6">
                          <p className="text-sm opacity-90">Available Balance</p>
                          <p className="text-2xl font-bold">₹1,250</p>
                          <button className="mt-2 bg-white/20 px-3 py-1 rounded-full text-xs">
                            Add Money
                          </button>
                        </div>
                        
                        {/* Recent Orders */}
                        <div>
                          <h5 className="font-medium text-foreground mb-3">Recent Orders</h5>
                          <div className="space-y-3">
                            {[
                              { item: "Grilled Sandwich", date: "Today", amount: "₹140" },
                              { item: "Pasta & Coffee", date: "Yesterday", amount: "₹220" },
                              { item: "Burger Combo", date: "2 days ago", amount: "₹180" }
                            ].map((order, index) => (
                              <div key={index} className="flex justify-between items-center p-2 bg-muted/30 rounded">
                                <div>
                                  <p className="text-sm font-medium text-foreground">{order.item}</p>
                                  <p className="text-xs text-muted-foreground">{order.date}</p>
                                </div>
                                <span className="text-sm font-medium text-foreground">{order.amount}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-center text-sm font-medium text-foreground">Wallet & Order History</p>
              </div>
            </div>
          </div>

          {/* Desktop Admin/Vendor Mockups */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Admin & Vendor Dashboard Experience
              </h3>
              <p className="text-lg text-muted-foreground">
                Comprehensive management tools for complete operational control
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Vendor Dashboard */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  {/* Laptop Frame */}
                  <div className="w-full max-w-2xl bg-gradient-to-b from-slate-800 to-slate-900 rounded-t-2xl p-3 shadow-2xl">
                    <div className="w-full h-80 bg-background rounded-t-xl overflow-hidden relative">
                      {/* Browser Header */}
                      <div className="h-8 bg-muted/20 flex items-center px-4 gap-2">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-muted/50 rounded text-xs text-center py-1">
                          vendor.mealpe.com
                        </div>
                      </div>
                      
                      {/* Dashboard Content */}
                      <div className="p-4 h-full bg-background">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-foreground">Vendor Dashboard</h4>
                          <div className="flex gap-2">
                            <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                            <div className="w-8 h-8 bg-muted rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Stats Cards */}
                        <div className="grid grid-cols-4 gap-3 mb-4">
                          <div className="bg-primary/10 p-3 rounded-lg text-center">
                            <p className="text-2xl font-bold text-primary">24</p>
                            <p className="text-xs text-muted-foreground">Orders Today</p>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg text-center">
                            <p className="text-2xl font-bold text-foreground">₹3.2K</p>
                            <p className="text-xs text-muted-foreground">Revenue</p>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg text-center">
                            <p className="text-2xl font-bold text-foreground">12</p>
                            <p className="text-xs text-muted-foreground">Items Sold</p>
                          </div>
                          <div className="bg-green-100 p-3 rounded-lg text-center">
                            <p className="text-2xl font-bold text-green-600">4.8</p>
                            <p className="text-xs text-muted-foreground">Rating</p>
                          </div>
                        </div>
                        
                        {/* Active Orders */}
                        <div className="space-y-2">
                          <h5 className="font-medium text-foreground">Active Orders</h5>
                          {[1, 2, 3].map((order) => (
                            <div key={order} className="flex justify-between items-center p-2 bg-muted/30 rounded">
                              <div className="flex gap-3 items-center">
                                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                <span className="text-sm font-medium text-foreground">#ORD-{1234 + order}</span>
                                <span className="text-xs text-muted-foreground">Grilled Sandwich x2</span>
                              </div>
                              <div className="flex gap-2">
                                <button className="bg-primary text-white px-3 py-1 rounded text-xs">
                                  Ready
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Laptop Base */}
                  <div className="w-full max-w-2xl h-6 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-2xl relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-slate-600 rounded-t-lg"></div>
                  </div>
                </div>
                <p className="mt-4 text-center text-sm font-medium text-foreground">Vendor Management Dashboard</p>
              </div>

              {/* Admin Dashboard */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  {/* Laptop Frame */}
                  <div className="w-full max-w-2xl bg-gradient-to-b from-slate-800 to-slate-900 rounded-t-2xl p-3 shadow-2xl">
                    <div className="w-full h-80 bg-background rounded-t-xl overflow-hidden relative">
                      {/* Browser Header */}
                      <div className="h-8 bg-muted/20 flex items-center px-4 gap-2">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-muted/50 rounded text-xs text-center py-1">
                          admin.mealpe.com
                        </div>
                      </div>
                      
                      {/* Dashboard Content */}
                      <div className="p-4 h-full bg-background">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-foreground">Admin Analytics</h4>
                          <div className="flex gap-2">
                            <select className="text-xs bg-muted rounded px-2 py-1">
                              <option>This Week</option>
                            </select>
                          </div>
                        </div>
                        
                        {/* Main Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground">Total Orders</p>
                            <p className="text-2xl font-bold text-primary">342</p>
                            <p className="text-xs text-green-600">+12% from last week</p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground">Revenue</p>
                            <p className="text-2xl font-bold text-foreground">₹45.2K</p>
                            <p className="text-xs text-green-600">+8% from last week</p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground">Active Users</p>
                            <p className="text-2xl font-bold text-foreground">156</p>
                            <p className="text-xs text-muted-foreground">Daily average</p>
                          </div>
                        </div>
                        
                        {/* Chart Placeholder */}
                        <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center h-32">
                          <div className="flex items-end gap-2">
                            {[40, 60, 35, 80, 50, 70, 45].map((height, index) => (
                              <div
                                key={index}
                                className="bg-primary/60 rounded-t"
                                style={{ height: `${height}px`, width: '16px' }}
                              ></div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Vendor Performance */}
                        <div className="mt-4">
                          <h5 className="font-medium text-foreground mb-2">Top Vendors</h5>
                          <div className="space-y-1">
                            {['Cafe Express', 'Healthy Bites', 'Snack Corner'].map((vendor, index) => (
                              <div key={index} className="flex justify-between text-xs">
                                <span className="text-foreground">{vendor}</span>
                                <span className="text-primary font-medium">₹{(15 - index * 2).toFixed(1)}K</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Laptop Base */}
                  <div className="w-full max-w-2xl h-6 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-2xl relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-slate-600 rounded-t-lg"></div>
                  </div>
                </div>
                <p className="mt-4 text-center text-sm font-medium text-foreground">Admin Analytics Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              From Setup to Success in{" "}
              <span className="text-primary">Just 2 Weeks</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven implementation process ensures a smooth transition to digital cafeteria management with minimal disruption to daily operations.
            </p>
          </div>
          
          {/* Visual Timeline */}
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-full hidden lg:block"></div>
              
              <div className="grid lg:grid-cols-4 gap-8 relative">
                {implementationPhases.map((phase, index) => {
                  const phaseIcons = [Calendar, Settings, CheckCircle, Award];
                  const IconComponent = phaseIcons[index];
                  
                  return (
                    <div key={index} className="relative group">
                      {/* Timeline Node */}
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full border-4 border-background shadow-lg z-10 hidden lg:flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      
                      {/* Phase Card */}
                      <div className="glass-card border-border/50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        {/* Phase Header */}
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full mb-2">
                            <span className="text-xs font-bold text-primary">PHASE {index + 1}</span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{phase.phase}</h3>
                          <p className="text-sm text-primary font-semibold">{phase.days}</p>
                        </div>
                        
                        {/* Tasks */}
                        <div className="space-y-3">
                          {phase.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="flex items-start">
                              <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                <CheckCircle className="h-3 w-3 text-primary" />
                              </div>
                              <span className="text-sm text-foreground leading-relaxed">{task}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="mt-6">
                          <div className="w-full bg-muted/50 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${((index + 1) / implementationPhases.length) * 100}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2 text-center">
                            {Math.round(((index + 1) / implementationPhases.length) * 100)}% Complete
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Success Metrics */}
            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold text-foreground mb-8">Success Metrics Tracked</h3>
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="glass-card p-4 rounded-lg">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Employee Adoption Rates</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <Timer className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Average Order Processing Time</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Vendor Satisfaction Scores</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">System Performance Metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Transparent Pricing That{" "}
              <span className="text-primary">Scales With You</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-border/50 hover:glass-strong transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground">Contact for Pricing</CardTitle>
                <p className="text-lg text-muted-foreground">Custom pricing based on your organization size and requirements</p>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-foreground mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start text-foreground">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        Full platform access for employees
                      </li>
                      <li className="flex items-start text-foreground">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        Vendor dashboard and training
                      </li>
                      <li className="flex items-start text-foreground">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        Basic analytics and reporting
                      </li>
                      <li className="flex items-start text-foreground">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        Email and chat support
                      </li>
                      <li className="flex items-start text-foreground">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        Mobile apps for all users
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-foreground mb-4">Services Available:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start text-foreground">
                        <Headphones className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        Custom integration development
                      </li>
                      <li className="flex items-start text-foreground">
                        <Award className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        Training and support
                      </li>
                      <li className="flex items-start text-foreground">
                        <Settings className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        Hardware procurement assistance
                      </li>
                      <li className="flex items-start text-foreground">
                        <Users className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        Vendor recruitment and onboarding
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button size="lg" className="gradient-primary text-white shadow-brand hover:shadow-glow px-8 py-4 text-lg font-semibold">
                    Get Custom Quote
                    <DollarSign className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked{" "}
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our digital cafeteria solution, implementation process, and support.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {/* Implementation & Setup */}
              <AccordionItem value="item-1" className="glass-card border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">How long does implementation take?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Complete implementation typically takes 2 weeks from contract signing to full launch, including vendor onboarding and employee training. Our proven process ensures minimal disruption to daily operations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="glass-card border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">Do you provide hardware like tablets or kiosks?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  We can guide hardware procurement or work with your existing systems. Our platform integrates with most standard POS terminals and tablets. We also offer hardware package recommendations based on your specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="glass-card border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">Can employees still pay with cash?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  While our platform focuses on digital payments for efficiency, vendors can still accept cash for orders placed through the system. This provides flexibility during the transition period.
                </AccordionContent>
              </AccordionItem>

              {/* Integration & Compatibility */}
              <AccordionItem value="item-4" className="glass-card border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">Does it integrate with our existing employee ID system?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Yes, we provide API integrations with most HR systems and employee databases for seamless authentication. This includes integration with RFID cards, biometric systems, and SSO solutions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="glass-card border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">What if we have existing POS systems?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  MealPe integrates with most standard POS systems, or vendors can use our standalone dashboard. We support popular POS brands and can provide custom integration solutions if needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="glass-card border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">Is training required for vendors?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  We provide comprehensive vendor training as part of onboarding, including ongoing support for new staff. Training covers order management, menu updates, and performance analytics.
                </AccordionContent>
              </AccordionItem>

              {/* Pricing & Contracts */}
              <AccordionItem value="item-7" className="glass-card border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">Are there any hidden fees?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  No hidden fees. Our commission model charges only 3% + GST per transaction, with a transparent one-time setup fee. All costs are clearly outlined in our pricing structure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="glass-card border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">Can we switch between pricing models?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Yes, you can upgrade from commission-based to subscription model as your volume grows. We offer flexible pricing tiers to match your organization's scale and usage patterns.
                </AccordionContent>
              </AccordionItem>

              {/* Technical & Security */}
              <AccordionItem value="item-9" className="glass-card border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">Is employee data secure?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Yes, we maintain enterprise-grade security with data encryption, PCI DSS compliance, and GDPR readiness. All data is stored securely with regular security audits and compliance monitoring.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="glass-card border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">What happens if the system goes down?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  We maintain 99.9% uptime with automatic failover systems. Vendors can still accept orders manually if needed, and our support team provides immediate assistance during any outages.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="glass-card border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">Can it handle high-volume lunch rush?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Our platform is built for scale and automatically handles traffic spikes during peak lunch hours. We use cloud infrastructure that scales dynamically to ensure smooth performance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
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