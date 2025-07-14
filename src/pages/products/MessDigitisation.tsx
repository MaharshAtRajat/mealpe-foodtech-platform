import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Smartphone, 
  Building, 
  BarChart3, 
  CheckCircle, 
  TrendingDown,
  AlertTriangle,
  Users,
  Target,
  Star,
  Calendar,
  Clock,
  Zap,
  Shield,
  Database,
  Cloud,
  Globe,
  Cpu,
  TrendingUp,
  Utensils,
  UserCheck,
  Settings,
  PieChart,
  MessageSquare,
  Bell,
  Wifi,
  Lock,
  Smartphone as Phone,
  Monitor,
  Activity,
  Play,
  ChevronRight,
  ArrowRight,
  Timer,
  DollarSign,
  Award,
  Headphones,
  QrCode
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import digitalMessImage from "@/assets/digital-food-court.jpg";
import employeeOrderingVector from "@/assets/employee-ordering-vector.png";
import vendorDashboardVector from "@/assets/vendor-dashboard-vector.png";
import adminAnalyticsVector from "@/assets/admin-analytics-vector.png";

const MessDigitisation = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Data for different sections
  const keyBenefits = [
    { icon: TrendingDown, title: "Zero Food Wastage", description: "Smart planning" },
    { icon: Calendar, title: "Smart Meal Planning", description: "AI-powered" },
    { icon: UserCheck, title: "Digital Attendance", description: "RFID tracking" },
    { icon: BarChart3, title: "Predictive Analytics", description: "Data insights" }
  ];

  const problemPoints = [
    {
      title: "Massive Food Wastage",
      icon: TrendingDown,
      points: [
        "40-50% food wastage in traditional messes",
        "No accurate headcount prediction",
        "Over-preparation due to uncertainty",
        "Significant financial losses daily"
      ]
    },
    {
      title: "Administrative Nightmares",
      icon: AlertTriangle,
      points: [
        "Manual attendance tracking chaos",
        "Paper-based meal planning disasters",
        "No visibility into consumption patterns",
        "Endless vendor coordination issues"
      ]
    },
    {
      title: "Student Frustration",
      icon: Users,
      points: [
        "No advance meal information",
        "Inability to skip meals when traveling",
        "Poor food quality due to overproduction",
        "No feedback mechanism for improvements"
      ]
    },
    {
      title: "Financial Inefficiency",
      icon: TrendingUp,
      points: [
        "Unpredictable food costs",
        "No budget planning capability",
        "Missing consumption analytics",
        "Vendor payment disputes"
      ]
    }
  ];

  const solutionComponents = [
    {
      title: "For Students/Residents",
      subtitle: "Plan, RSVP, Track - Stay Connected",
      icon: Smartphone,
      features: [
        "View weekly/monthly meal calendars",
        "RSVP for meals in advance",
        "Skip meals when away from hostel",
        "Rate and review meal quality",
        "Track personal meal history"
      ]
    },
    {
      title: "For Mess Vendors",
      subtitle: "Accurate Planning & Efficient Operations",
      icon: Building,
      features: [
        "Precise headcount for meal preparation",
        "Advanced inventory forecasting",
        "Real-time consumption analytics",
        "Payment automation and tracking",
        "Performance insights and reports"
      ]
    },
    {
      title: "For Hostel Administration",
      subtitle: "Complete Visibility & Control",
      icon: BarChart3,
      features: [
        "Real-time attendance and consumption data",
        "Budget planning and cost optimization",
        "Vendor performance monitoring",
        "Student satisfaction tracking",
        "Comprehensive reporting dashboard"
      ]
    }
  ];

  const industries = [
    {
      title: "University Hostels",
      challenge: "Managing meals for 500-2000+ students with varying schedules",
      solution: "Scalable RSVP system with academic calendar integration",
      result: "45% reduction in food wastage, 90% student satisfaction rate"
    },
    {
      title: "Engineering College Hostels",
      challenge: "Handling diverse dietary preferences and exam period variations",
      solution: "Flexible meal planning with preference-based menu rotation",
      result: "60% improvement in meal planning accuracy, reduced complaints"
    },
    {
      title: "Residential Schools",
      challenge: "Managing nutrition requirements for growing children",
      solution: "Nutritional tracking with parent visibility and health monitoring",
      result: "Enhanced nutritional compliance, improved parent satisfaction"
    },
    {
      title: "PG Accommodations",
      challenge: "Flexible meal plans for working professionals with irregular schedules",
      solution: "Dynamic RSVP system with last-minute modifications",
      result: "35% increase in meal plan adoption, operational efficiency"
    }
  ];

  const techFeatures = [
    {
      title: "Smart Analytics Engine",
      icon: Activity,
      features: [
        "Pattern Recognition: Identify consumption trends and anomalies",
        "Waste Optimization: Recommendations for portion and menu optimization",
        "Seasonal Adjustments: Automatic adaptation to calendar and weather patterns"
      ]
    },
    {
      title: "Robust Infrastructure",
      icon: Cloud,
      features: [
        "Cloud Hosting: 99.9% uptime with auto-scaling capabilities",
        "Real-Time Sync: Instant updates across all connected devices",
        "Offline Support: Continue operations during connectivity issues",
        "Data Backup: Automated daily backups with disaster recovery"
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      features: [
        "Data Protection: End-to-end encryption for student information",
        "Privacy Controls: GDPR-compliant data handling",
        "Access Management: Role-based permissions for staff and students",
        "Audit Trails: Complete activity logging for accountability"
      ]
    },
    {
      title: "Hardware Integration",
      icon: Wifi,
      features: [
        "RFID Systems: Student ID card-based attendance tracking",
        "Biometric Scanners: Fingerprint and facial recognition support",
        "Digital Displays: Real-time meal information and announcements",
        "Mobile Devices: Android and iOS app support"
      ]
    }
  ];

  const implementationSteps = [
    {
      week: "Week 1",
      title: "Assessment & Setup",
      days: "Days 1-7",
      icon: Settings,
      phases: [
        {
          title: "Discovery Phase",
          days: "Days 1-2",
          tasks: [
            "Current mess operation assessment",
            "Student database analysis",
            "Vendor workflow understanding",
            "Hardware requirement planning"
          ]
        },
        {
          title: "System Configuration",
          days: "Days 3-5",
          tasks: [
            "Platform customization for hostel needs",
            "Student database integration",
            "Vendor onboarding and training",
            "Mobile app configuration"
          ]
        },
        {
          title: "Hardware Installation",
          days: "Days 6-7",
          tasks: [
            "RFID/biometric system setup",
            "Digital display installation",
            "Network connectivity verification",
            "Security system configuration"
          ]
        }
      ]
    },
    {
      week: "Week 2",
      title: "Testing & Training",
      days: "Days 8-14",
      icon: Users,
      phases: [
        {
          title: "Pilot Testing",
          days: "Days 8-10",
          tasks: [
            "Limited student group testing",
            "Vendor workflow verification",
            "System performance monitoring",
            "Issue identification and resolution"
          ]
        },
        {
          title: "Comprehensive Training",
          days: "Days 11-14",
          tasks: [
            "Student orientation sessions",
            "Vendor operation training",
            "Administrative staff training",
            "Parent/guardian system introduction"
          ]
        }
      ]
    },
    {
      week: "Week 3",
      title: "Launch & Optimization",
      days: "Days 15-21",
      icon: Target,
      phases: [
        {
          title: "Soft Launch",
          days: "Days 15-17",
          tasks: [
            "Gradual rollout to all students",
            "Real-time monitoring and support",
            "Performance optimization",
            "Feedback collection and analysis"
          ]
        },
        {
          title: "Full Deployment",
          days: "Days 18-21",
          tasks: [
            "Complete system activation",
            "Success metrics measurement",
            "Ongoing support establishment",
            "Celebration and recognition"
          ]
        }
      ]
    }
  ];

  const faqData = [
    {
      category: "Implementation & Setup",
      questions: [
        {
          question: "How do we handle students who don't have smartphones?",
          answer: "The system works with basic phones through SMS, and RFID cards provide complete functionality without requiring smartphones."
        },
        {
          question: "What happens during internet outages?",
          answer: "The system works offline and syncs data when connectivity returns. RFID systems continue functioning normally."
        },
        {
          question: "Do vendors need special training?",
          answer: "We provide comprehensive vendor training, and most pick up the system within 2-3 days. Ongoing support is available."
        }
      ]
    },
    {
      category: "Student Experience",
      questions: [
        {
          question: "Can students RSVP for friends or groups?",
          answer: "Yes, the system supports group RSVP functionality and bulk meal planning for student groups."
        },
        {
          question: "How far in advance can students plan meals?",
          answer: "Students can RSVP up to one month in advance, with easy modification options until the meal preparation deadline."
        },
        {
          question: "What about special dietary requirements?",
          answer: "The system tracks individual dietary preferences, allergies, and restrictions, helping vendors prepare accordingly."
        }
      ]
    },
    {
      category: "Operations & Management",
      questions: [
        {
          question: "How accurate is the demand forecasting?",
          answer: "Our AI engine achieves 95%+ accuracy after 30 days of data collection, continuously improving with more usage."
        },
        {
          question: "Can parents monitor their child's meal patterns?",
          answer: "Yes, parents get access to meal attendance, nutritional information, and can receive alerts for irregular eating patterns."
        },
        {
          question: "How does billing work for partial month students?",
          answer: "The system automatically calculates pro-rated charges based on actual meal attendance and check-in/check-out dates."
        }
      ]
    },
    {
      category: "Technical & Security",
      questions: [
        {
          question: "Is student data safe and private?",
          answer: "Yes, we maintain GDPR compliance with encrypted data storage and strict access controls. Students control their privacy settings."
        },
        {
          question: "Can it integrate with our existing student management system?",
          answer: "Yes, we provide API integrations with most popular student information systems used by Indian institutions."
        },
        {
          question: "What kind of hardware is required?",
          answer: "Basic requirements include RFID readers and tablets/computers. We can work with existing infrastructure or help procure new equipment."
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
                <Utensils className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm font-medium text-foreground">Mess Management Revolution</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Transform Your{" "}
                <span className="text-primary">Hostel Mess</span>{" "}
                From Chaos to Digital Excellence
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Eliminate food wastage, streamline meal planning, and create transparent dining experiences for students and residents. The complete mess digitization solution trusted by leading universities and hostels across India.
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
                  View Hostel Success Story
                </Button>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="glass-card p-8 rounded-2xl">
                <img 
                  src={digitalMessImage}
                  alt="Digital Mess Management Interface"
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
              Mess, is always a{" "}
              <span className="text-primary">mess!</span>{" "}
              Here's Why.
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            {problemPoints.map((problem, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {problem.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xl font-semibold text-foreground">
              Traditional mess management wastes money, food, and student satisfaction.{" "}
              <span className="text-primary">MealPe Mess Manager fixes all three.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Complete{" "}
              <span className="text-primary">Mess Digitization</span>{" "}
              for Modern Hostels
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From meal planning to consumption tracking, manage every aspect of your hostel dining operations with intelligence and transparency.
            </p>
          </div>

          <div className="space-y-24">
            {/* For Students */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <Smartphone className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-semibold text-primary">For Students/Residents</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Plan, RSVP, Track - Stay Connected
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Empower students with complete control over their dining experience through intuitive mobile apps and real-time meal management.
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
                  <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center">
                    <Smartphone className="h-24 w-24 text-primary" />
                  </div>
                </div>
              </div>
            </div>

            {/* For Vendors */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <Building className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-semibold text-primary">For Mess Vendors</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Accurate Planning & Efficient Operations
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Transform vendor operations with precise demand forecasting, automated planning tools, and comprehensive performance analytics.
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
                  <div className="w-full h-64 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl flex items-center justify-center">
                    <Building className="h-24 w-24 text-green-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* For Administrators */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <BarChart3 className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-semibold text-primary">For Hostel Administration</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Complete Visibility & Control
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Gain comprehensive insights into hostel dining operations with powerful dashboards, analytics, and centralized management tools.
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
                  <div className="w-full h-64 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl flex items-center justify-center">
                    <BarChart3 className="h-24 w-24 text-blue-600" />
                  </div>
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
              <span className="text-primary">Smart Mess Management</span>
            </h2>
          </div>

          <Tabs defaultValue="planning" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="planning">Smart Planning</TabsTrigger>
              <TabsTrigger value="vendor">Vendor Management</TabsTrigger>
              <TabsTrigger value="admin">Administration</TabsTrigger>
              <TabsTrigger value="student">Student Engagement</TabsTrigger>
            </TabsList>

            <TabsContent value="planning" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-6 w-6 text-primary mr-3" />
                      Digital Meal Calendars
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Weekly and monthly meal schedules</li>
                      <li>• Nutritional information display</li>
                      <li>• Special diet accommodations</li>
                      <li>• Festival and occasion meal planning</li>
                      <li>• Automated menu rotation</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <UserCheck className="h-6 w-6 text-primary mr-3" />
                      Advanced RSVP System
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Meal-wise attendance prediction</li>
                      <li>• Bulk RSVP for recurring patterns</li>
                      <li>• Travel-based automatic opt-outs</li>
                      <li>• Last-minute availability updates</li>
                      <li>• Group meal coordination</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-6 w-6 text-primary mr-3" />
                      Attendance Tracking
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• RFID card-based check-ins</li>
                      <li>• Biometric attendance integration</li>
                      <li>• Mobile app-based verification</li>
                      <li>• Real-time headcount updates</li>
                      <li>• Historical attendance patterns</li>
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
                      <TrendingUp className="h-6 w-6 text-primary mr-3" />
                      Inventory Forecasting
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• AI-powered demand prediction</li>
                      <li>• Seasonal consumption analysis</li>
                      <li>• Waste reduction recommendations</li>
                      <li>• Procurement planning assistance</li>
                      <li>• Cost optimization insights</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="h-6 w-6 text-primary mr-3" />
                      Preparation Planning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Exact quantity requirements</li>
                      <li>• Preparation timeline management</li>
                      <li>• Kitchen workflow optimization</li>
                      <li>• Staff allocation guidance</li>
                      <li>• Quality control checkpoints</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PieChart className="h-6 w-6 text-primary mr-3" />
                      Financial Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Automated billing calculations</li>
                      <li>• Payment tracking and settlement</li>
                      <li>• Cost per meal analytics</li>
                      <li>• Budget variance reporting</li>
                      <li>• Vendor performance metrics</li>
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
                      <Monitor className="h-6 w-6 text-primary mr-3" />
                      Real-Time Dashboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Live attendance monitoring</li>
                      <li>• Consumption vs. planned analysis</li>
                      <li>• Vendor performance tracking</li>
                      <li>• Student satisfaction scores</li>
                      <li>• Financial overview and alerts</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="h-6 w-6 text-primary mr-3" />
                      Advanced Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Monthly consumption patterns</li>
                      <li>• Seasonal demand variations</li>
                      <li>• Student preference analysis</li>
                      <li>• Waste reduction tracking</li>
                      <li>• Cost optimization opportunities</li>
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
                      <li>• Student management system sync</li>
                      <li>• Hostel room allocation integration</li>
                      <li>• Fee management system connectivity</li>
                      <li>• Academic calendar alignment</li>
                      <li>• Parent communication systems</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="student" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="h-6 w-6 text-primary mr-3" />
                      Mobile App Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Intuitive meal calendar interface</li>
                      <li>• Quick RSVP functionality</li>
                      <li>• Meal rating and feedback</li>
                      <li>• Personal consumption history</li>
                      <li>• Notification and reminders</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-6 w-6 text-primary mr-3" />
                      Feedback System
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Meal quality ratings</li>
                      <li>• Ingredient preference tracking</li>
                      <li>• Special dietary requirement management</li>
                      <li>• Complaint and suggestion portal</li>
                      <li>• Real-time satisfaction monitoring</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Bell className="h-6 w-6 text-primary mr-3" />
                      Communication Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Meal change notifications</li>
                      <li>• Special menu announcements</li>
                      <li>• Dietary information updates</li>
                      <li>• Event meal coordination</li>
                      <li>• Parent visibility options</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Industries and Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Perfect for Every{" "}
              <span className="text-primary">Residential Institution</span>
            </h2>
          </div>
          
          {/* Primary Industries */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {industries.map((industry, index) => {
              const industryIcons = [Building, Users, Target, Star];
              const IconComponent = industryIcons[index % industryIcons.length];
              const bgColors = [
                "from-blue-500/10 to-blue-600/10",
                "from-green-500/10 to-green-600/10", 
                "from-purple-500/10 to-purple-600/10",
                "from-orange-500/10 to-orange-600/10"
              ];
              
              return (
                <Card key={index} className="glass-card hover:glass-strong transition-all duration-500 border-border/50 overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${bgColors[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {industry.title}
                    </CardTitle>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {industry.solution}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Extended Use Cases */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <Target className="h-6 w-6 text-primary mr-3" />
                  Medical College Hostels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    24/7 meal scheduling for shift-based students
                  </li>
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Special dietary requirements for medical conditions
                  </li>
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Stress-period meal plan adjustments
                  </li>
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Nutritional monitoring for health programs
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-3" />
                  Government Hostels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Budget-conscious meal planning
                  </li>
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Compliance with government nutrition guidelines
                  </li>
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Transparent expense reporting
                  </li>
                  <li className="flex items-start text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Audit-ready documentation
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
              <span className="text-primary">Scale, Reliability, and Intelligence</span>
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
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Affordable Pricing for{" "}
              <span className="text-primary">Every Hostel Size</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">Contact Us for Pricing</p>
            
            <Card className="glass-card border-border/50 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Full platform access for students</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Vendor dashboard and training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Basic analytics and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Email and chat support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Mobile apps for all users</span>
                  </li>
                </ul>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Services Available:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Custom integration development</li>
                    <li>• Training and support</li>
                    <li>• Hardware procurement assistance</li>
                    <li>• Vendor recruitment and onboarding</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              From Manual to Digital in{" "}
              <span className="text-primary">Just 3 Weeks</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Timeline Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-4">
                {implementationSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-primary text-white' 
                        : 'bg-muted text-muted-foreground hover:bg-muted-foreground/10'
                    }`}
                  >
                    <step.icon className="h-5 w-5 mr-2" />
                    <div className="text-left">
                      <div className="font-semibold">{step.week}</div>
                      <div className="text-xs opacity-75">{step.title}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline Content */}
            <div className="relative">
              {/* Progress Bar */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full">
                <div 
                  className="w-full bg-primary transition-all duration-500"
                  style={{ height: `${((activeStep + 1) / implementationSteps.length) * 100}%` }}
                ></div>
              </div>

              {/* Active Step Content */}
              <div className="space-y-12">
                {implementationSteps[activeStep].phases.map((phase, phaseIndex) => {
                  const isEven = phaseIndex % 2 === 0;
                  return (
                    <div key={phaseIndex} className="relative flex items-center">
                      {/* Timeline Node */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center z-10">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      
                      {/* Content Card */}
                      <div className={`w-5/12 ${isEven ? 'pr-12' : 'ml-auto pl-12'}`}>
                        <Card className="glass-card border-border/50 hover:glass-strong transition-all duration-300">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg font-bold text-foreground">{phase.title}</CardTitle>
                              <Badge variant="secondary" className="bg-primary/10 text-primary">
                                {phase.days}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {phase.tasks.map((task, taskIndex) => (
                                <li key={taskIndex} className="flex items-start text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                                  {task}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Success Metrics */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-8">Success Metrics Tracked</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Employee adoption rates",
                  "Average order processing time", 
                  "Vendor satisfaction scores",
                  "System performance metrics"
                ].map((metric, index) => (
                  <div key={index} className="glass-card p-4 border-border/50">
                    <CheckCircle className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">{metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Common Questions About{" "}
              <span className="text-primary">Mess Digitization</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">{category.category}</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="glass-card border-border/50 px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Eliminate Food Wastage and{" "}
              <span className="text-primary">Transform Your Mess?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join Darshan University and leading hostels already revolutionizing their dining operations with intelligent mess management.
            </p>
          </div>

          {/* Getting Started Process */}
          <div className="grid lg:grid-cols-4 gap-8 mb-12 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Free Assessment",
                description: "We analyze your current mess operations and identify improvement opportunities"
              },
              {
                step: "2", 
                title: "Custom Demo",
                description: "See exactly how MealPe works with your specific hostel setup"
              },
              {
                step: "3",
                title: "Pilot Program", 
                description: "Start with one mess or hostel block to prove results"
              },
              {
                step: "4",
                title: "Full Deployment",
                description: "Scale across your entire hostel system"
              }
            ].map((process, index) => (
              <Card key={index} className="glass-card border-border/50 text-center hover:glass-strong transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{process.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="gradient-primary text-white font-semibold px-8">
              Schedule Free Assessment
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
              Download Success Stories
            </Button>
            <Button variant="ghost" className="text-primary hover:text-primary font-semibold">
              View Live Demo →
            </Button>
          </div>

          {/* Contact Information */}
          <div className="text-center mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass-card p-4 border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Hostel Solutions Team</h4>
                <p className="text-sm text-primary">hostels@mealpe.app</p>
              </div>
              <div className="glass-card p-4 border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Demo Requests</h4>
                <p className="text-sm text-primary">demo@mealpe.app</p>
              </div>
              <div className="glass-card p-4 border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Implementation Support</h4>
                <p className="text-sm text-primary">support@mealpe.app</p>
              </div>
              <div className="glass-card p-4 border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                <p className="text-sm text-muted-foreground">Within 4 hours</p>
              </div>
            </div>
          </div>

          {/* Special Offer */}
          <div className="text-center">
            <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Special Offer</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  <span className="font-semibold text-primary">First Month Free:</span> For new hostel implementations starting before [Date], we'll provide the first month of service completely free to demonstrate value.
                </p>
                <Button className="gradient-primary text-white font-semibold">
                  Claim Free Month
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
      <Footer />
    </div>
  );
};

export default MessDigitisation;