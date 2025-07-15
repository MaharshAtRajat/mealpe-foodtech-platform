import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Clock, 
  Star, 
  DollarSign,
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  BarChart3,
  Shield,
  Smartphone,
  CreditCard,
  Calendar,
  FileText,
  Award,
  Settings,
  Phone,
  Mail,
  Download,
  PlayCircle,
  Calculator
} from "lucide-react";

export const Commercial = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Boost Tenant Satisfaction by{" "}
                  <span className="text-primary">65%</span>{" "}
                  with Smart Food Courts
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform your commercial building into a premium business destination. MealPe's intelligent food service platform helps commercial properties increase tenant retention by 50%, boost foot traffic by 40%, and create additional revenue streams worth ₹2-5L monthly.
                </p>
              </div>

              {/* Key Benefits Bar */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary">50%</div>
                  <div className="text-sm text-muted-foreground">Higher Tenant Retention</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary">₹2-5L</div>
                  <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary">65%</div>
                  <div className="text-sm text-muted-foreground">Tenant Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary">2-Week</div>
                  <div className="text-sm text-muted-foreground">Setup</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Get Free Property Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Download className="mr-2 h-5 w-5" />
                  Download Tenant Satisfaction Report
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/30 rounded-3xl p-8 flex items-center justify-center">
                <Building2 className="h-32 w-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Pain Points Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Why Poor Food Options Are Driving Tenants Away
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/50 backdrop-blur-sm border-destructive/20">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-destructive rotate-180" />
                </div>
                <CardTitle className="text-xl text-destructive">
                  Tenant Dissatisfaction & High Vacancy Rates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-medium">
                  The Problem: Limited amenities reducing property competitiveness
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Tenants leaving for buildings with better food amenities</li>
                  <li>• Long lunch breaks reducing employee productivity</li>
                  <li>• Limited food options forcing staff to travel far for meals</li>
                  <li>• No value-added services to justify premium rents</li>
                </ul>
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <p className="text-sm font-medium text-destructive">
                    Business Impact: 20-30% higher vacancy rates, ₹50K-2L monthly rent loss per vacant floor
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm border-destructive/20">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-xl text-destructive">
                  Missed Revenue & Monetization Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-medium">
                  The Problem: Underutilized commercial space potential
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Empty ground floor spaces generating minimal rental income</li>
                  <li>• No commission revenue from food services</li>
                  <li>• Unable to attract premium tenants willing to pay higher rents</li>
                  <li>• Missing out on food court licensing and vendor partnership income</li>
                </ul>
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <p className="text-sm font-medium text-destructive">
                    Revenue Loss: ₹3-8L annually in potential F&B and premium positioning revenue
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm border-destructive/20">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-xl text-destructive">
                  Facility Management Headaches
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-medium">
                  The Problem: Tenant complaints and operational inefficiencies
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Constant tenant requests for better food options</li>
                  <li>• Difficulty coordinating with external food vendors</li>
                  <li>• No systematic approach to tenant satisfaction</li>
                  <li>• Manual handling of food-related complaints and coordination</li>
                </ul>
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <p className="text-sm font-medium text-destructive">
                    Operational Impact: 10-15 hours weekly spent on food-related tenant issues
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Inadequate food amenities create tenant churn, revenue loss, and management complexity. 
              <span className="font-semibold text-primary"> MealPe transforms your commercial property into a premium destination.</span>
            </p>
          </div>
        </div>
      </section>

      {/* MealPe Solutions Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 text-primary font-medium">
              <Zap className="h-4 w-4" />
              <span>Complete Digital Transformation</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Revolutionary Food Service
              <br />
              <span className="text-primary">Ecosystem</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your commercial property into a technology-driven business destination that tenants love and competitors envy
            </p>
          </div>

          {/* Interactive Ecosystem Map */}
          <div className="relative mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">The MealPe Ecosystem</h3>
              <p className="text-muted-foreground">Hover over each component to see how it transforms your property</p>
            </div>
            
            <div className="relative max-w-6xl mx-auto">
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <Building2 className="h-12 w-12 text-white" />
                </div>
                <div className="text-center mt-4">
                  <h4 className="font-bold text-foreground">Your Property</h4>
                  <p className="text-sm text-muted-foreground">Enhanced & Premium</p>
                </div>
              </div>

              {/* Ecosystem Components */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Tenant Experience */}
                <div className="group relative">
                  <div className="absolute top-1/2 left-1/2 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent transform -translate-x-1/2 -translate-y-full" />
                  <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border-primary/20 group-hover:border-primary/50">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Tenant Experience</h4>
                      <p className="text-sm text-muted-foreground mb-4">Multi-vendor mobile ordering platform</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Badge className="text-xs">+50% Satisfaction</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Revenue Streams */}
                <div className="group relative">
                  <div className="absolute top-1/2 right-1/2 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent transform translate-x-1/2 -translate-y-full" />
                  <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border-primary/20 group-hover:border-primary/50">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <DollarSign className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Revenue Streams</h4>
                      <p className="text-sm text-muted-foreground mb-4">Commission & partnership income</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Badge className="text-xs">₹2-5L Monthly</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Analytics & Insights */}
                <div className="group relative">
                  <div className="absolute top-1/2 left-1/2 w-px h-24 bg-gradient-to-t from-primary/50 to-transparent transform -translate-x-1/2 translate-y-full" />
                  <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border-primary/20 group-hover:border-primary/50">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <BarChart3 className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Smart Analytics</h4>
                      <p className="text-sm text-muted-foreground mb-4">Real-time property insights</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Badge className="text-xs">24/7 Monitoring</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Management Tools */}
                <div className="group relative">
                  <div className="absolute top-1/2 right-1/2 w-px h-24 bg-gradient-to-t from-primary/50 to-transparent transform translate-x-1/2 translate-y-full" />
                  <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border-primary/20 group-hover:border-primary/50">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <Settings className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Management Hub</h4>
                      <p className="text-sm text-muted-foreground mb-4">Automated operations</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Badge className="text-xs">Zero Hassle</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Deep Dive with Tabs */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Explore Each Component</h3>
              <p className="text-muted-foreground">Click on each tab to discover the powerful features</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-4 mb-8">
                <Button variant="default" className="h-16 flex-col gap-2">
                  <Users className="h-6 w-6" />
                  <span>Tenant Experience</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col gap-2">
                  <DollarSign className="h-6 w-6" />
                  <span>Revenue Hub</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col gap-2">
                  <Award className="h-6 w-6" />
                  <span>Property Enhancement</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col gap-2">
                  <Zap className="h-6 w-6" />
                  <span>Operations</span>
                </Button>
              </div>

              {/* Active Tab Content - Tenant Experience */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                          <Users className="h-8 w-8 text-primary mr-3" />
                          Premium Tenant Experience
                        </h4>
                        <p className="text-muted-foreground mb-6">
                          Transform your commercial building into a food destination that professionals love
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-lg">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Smartphone className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-foreground">Multi-Vendor Marketplace</h5>
                            <p className="text-sm text-muted-foreground">8-15 diverse food vendors in one app, from healthy salads to comfort foods</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-lg">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Clock className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-foreground">Express Professional Ordering</h5>
                            <p className="text-sm text-muted-foreground">30-second ordering, scheduled deliveries, group orders for meetings</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-lg">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <CreditCard className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-foreground">Corporate Billing Integration</h5>
                            <p className="text-sm text-muted-foreground">Company accounts, expense management, department-wise tracking</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl p-8 text-center">
                        <div className="space-y-4">
                          <div className="text-4xl font-bold text-primary">90%</div>
                          <div className="text-lg font-semibold text-foreground">Tenant Satisfaction</div>
                          <div className="text-sm text-muted-foreground">Average rating from buildings using MealPe</div>
                        </div>
                      </div>
                      
                      {/* Floating stats */}
                      <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg border border-primary/20">
                        <div className="text-center">
                          <div className="text-xl font-bold text-primary">15min</div>
                          <div className="text-xs text-muted-foreground">Avg Order Time</div>
                        </div>
                      </div>
                      
                      <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg border border-primary/20">
                        <div className="text-center">
                          <div className="text-xl font-bold text-primary">12+</div>
                          <div className="text-xs text-muted-foreground">Food Partners</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Revolutionary Comparison */}
          <div className="bg-gradient-to-r from-muted/50 to-transparent rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">The Transformation is Dramatic</h3>
              <p className="text-muted-foreground">See the real impact on commercial properties like yours</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Before */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-destructive rotate-180" />
                  </div>
                  <h4 className="text-2xl font-bold text-destructive mb-2">Before MealPe</h4>
                  <p className="text-muted-foreground">Traditional Commercial Building</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { metric: "Tenant Retention", value: "70%", trend: "decreasing" },
                    { metric: "Food Options", value: "2-3 vendors", trend: "limited" },
                    { metric: "Revenue Streams", value: "Rent only", trend: "basic" },
                    { metric: "Tenant Satisfaction", value: "65%", trend: "average" },
                    { metric: "Market Position", value: "Standard", trend: "competitive" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                      <span className="font-medium text-foreground">{item.metric}</span>
                      <span className="text-destructive font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-2">After MealPe</h4>
                  <p className="text-muted-foreground">Premium Business Destination</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { metric: "Tenant Retention", value: "95%", improvement: "+25%" },
                    { metric: "Food Options", value: "12+ vendors", improvement: "4x more" },
                    { metric: "Revenue Streams", value: "₹2-5L monthly", improvement: "New income" },
                    { metric: "Tenant Satisfaction", value: "92%", improvement: "+27%" },
                    { metric: "Market Position", value: "Premium", improvement: "Leader" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <span className="font-medium text-foreground">{item.metric}</span>
                      <div className="text-right">
                        <div className="text-primary font-semibold">{item.value}</div>
                        <div className="text-xs text-primary/70">{item.improvement}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Arrow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              From Standard to Premium Commercial Property in Just 2 Weeks
            </h2>
            <p className="text-xl text-muted-foreground">Simple 3-Step Process</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <Badge className="w-fit mb-4">Week 1</Badge>
                <CardTitle className="text-xl">
                  Property Assessment & Vendor Onboarding
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What We Do:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Comprehensive tenant demographic and preference analysis</li>
                    <li>• Strategic vendor selection based on building profile</li>
                    <li>• Food court space optimization and layout planning</li>
                    <li>• Legal compliance and vendor agreement setup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What You Get:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Optimized vendor mix for your tenant profile</li>
                    <li>• Revenue projections and commission structure</li>
                    <li>• Branded digital platform for your building</li>
                    <li>• Complete vendor onboarding and training</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <Badge className="w-fit mb-4">Days 8-10</Badge>
                <CardTitle className="text-xl">
                  System Integration & Testing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What We Do:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Building management system integration</li>
                    <li>• Payment gateway and billing system setup</li>
                    <li>• Limited tenant group pilot testing</li>
                    <li>• Staff training for food court coordination</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What You Get:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Seamless operational integration</li>
                    <li>• Trained facility management team</li>
                    <li>• Proven system functionality</li>
                    <li>• Tenant adoption strategy</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <Badge className="w-fit mb-4">Days 11-14</Badge>
                <CardTitle className="text-xl">
                  Full Launch & Tenant Activation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What We Do:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Complete platform activation for all tenants</li>
                    <li>• Grand opening and marketing campaign</li>
                    <li>• Real-time support and performance monitoring</li>
                    <li>• Success metrics tracking and optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What You Get:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Fully operational digital food court</li>
                    <li>• Enhanced tenant experience and satisfaction</li>
                    <li>• Active revenue stream generation</li>
                    <li>• Competitive market differentiation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Implementation Guarantee</h3>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-primary">Success Promise:</span> See measurable tenant satisfaction improvement and positive F&B revenue within 45 days, or we'll re-optimize the platform at no additional cost.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commercial Building-Specific Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Built for Professional Business Environments
            </h2>
            <p className="text-xl text-muted-foreground">Unique Commercial Building Features</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <CreditCard className="h-6 w-6 text-primary mr-3" />
                  Corporate-Grade Functionality
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Meeting Catering</p>
                    <p className="text-sm text-muted-foreground">Large order coordination for corporate events</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Client Entertainment</p>
                    <p className="text-sm text-muted-foreground">Professional dining options for business meetings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Expense Management</p>
                    <p className="text-sm text-muted-foreground">Company account billing and reporting</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Time Efficiency</p>
                    <p className="text-sm text-muted-foreground">Quick ordering for busy professionals</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Users className="h-6 w-6 text-primary mr-3" />
                  Multi-Tenant Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Company Account Setup</p>
                    <p className="text-sm text-muted-foreground">Separate billing for different tenant companies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Department-wise Billing</p>
                    <p className="text-sm text-muted-foreground">Cost center allocation and expense tracking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Guest Access</p>
                    <p className="text-sm text-muted-foreground">Visitor and client ordering capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Bulk Ordering</p>
                    <p className="text-sm text-muted-foreground">Corporate event and meeting catering</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Settings className="h-6 w-6 text-primary mr-3" />
                  Property Management Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Tenant Database Sync</p>
                    <p className="text-sm text-muted-foreground">Seamless access control integration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Billing System Connectivity</p>
                    <p className="text-sm text-muted-foreground">Consolidated invoicing with building charges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Maintenance Coordination</p>
                    <p className="text-sm text-muted-foreground">Food service area upkeep and management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Security Integration</p>
                    <p className="text-sm text-muted-foreground">Delivery access and building security protocols</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <BarChart3 className="h-6 w-6 text-primary mr-3" />
                  Business Intelligence & Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Tenant Engagement Metrics</p>
                    <p className="text-sm text-muted-foreground">Food service usage correlation with lease renewals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Revenue Optimization</p>
                    <p className="text-sm text-muted-foreground">Peak time analysis and vendor performance tracking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Space Utilization</p>
                    <p className="text-sm text-muted-foreground">Dining area usage patterns and optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Market Positioning</p>
                    <p className="text-sm text-muted-foreground">Competitive analysis and amenity benchmarking</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & ROI Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Revenue-Positive Investment from Month One
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Commercial Building-Specific Pricing</CardTitle>
                <p className="text-muted-foreground">Contact for customized pricing based on property size and tenant count.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold text-foreground">What's Included</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Complete digital food court platform</li>
                  <li>• Tenant and vendor mobile applications</li>
                  <li>• Multi-vendor marketplace management</li>
                  <li>• Corporate billing and expense management</li>
                  <li>• Real-time analytics and property insights</li>
                  <li>• Revenue optimization and commission tracking tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">ROI Preview for 500-Employee Commercial Building</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Monthly Revenue Generation:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">F&B Commission Revenue:</span>
                      <span className="font-semibold text-primary">₹75K+ (8% on ₹9L+ orders)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Premium Rent Potential:</span>
                      <span className="font-semibold text-primary">₹1.5L+ (₹3-5/sq ft premium)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Reduced Vacancy Cost:</span>
                      <span className="font-semibold text-primary">₹2L+ (faster retention)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vendor Partnership Income:</span>
                      <span className="font-semibold text-primary">₹50K+ (licensing & space)</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Monthly Benefit:</span>
                    <span className="text-primary">₹4.75L+ value creation</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span>Annual ROI:</span>
                    <span className="text-primary font-bold">400-600% return</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Transform Your Commercial Property?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join leading commercial buildings already increasing tenant satisfaction and creating substantial additional revenue through professional food service solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <FileText className="h-6 w-6 text-primary mr-3" />
                  Free Property Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">What's Included:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Comprehensive tenant satisfaction and food service analysis</li>
                  <li>• Revenue opportunity identification and projection</li>
                  <li>• Competitive positioning evaluation</li>
                  <li>• Custom ROI calculation for your property</li>
                </ul>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Duration:</span>
                    <span>90-minute on-site consultation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Cost:</span>
                    <span className="text-primary">Completely free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Timeline:</span>
                    <span>Schedule within 48 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <PlayCircle className="h-6 w-6 text-primary mr-3" />
                  Live Demo & Case Study Review
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">What's Included:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Platform demonstration with commercial building scenarios</li>
                  <li>• Success stories from similar properties</li>
                  <li>• Revenue model and commission structure explanation</li>
                  <li>• Tenant adoption strategy discussion</li>
                </ul>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Duration:</span>
                    <span>45-minute presentation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Cost:</span>
                    <span className="text-primary">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Timeline:</span>
                    <span>Available daily</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Target className="h-6 w-6 text-primary mr-3" />
                  Pilot Implementation Program
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">What's Included:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 60-day trial with complete setup</li>
                  <li>• Vendor onboarding and tenant activation</li>
                  <li>• Performance monitoring and optimization</li>
                  <li>• Revenue tracking and detailed reporting</li>
                </ul>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Investment:</span>
                    <span>Setup costs only</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Guarantee:</span>
                    <span className="text-primary">Positive results in 60 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Timeline:</span>
                    <span>2-week implementation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-6">
            <Card className="max-w-md mx-auto bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Mail className="h-4 w-4 text-primary mr-2" />
                      Commercial Properties Team:
                    </span>
                    <span className="text-primary">commercial@mealpe.app</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 text-primary mr-2" />
                      Response Time:
                    </span>
                    <span>Within 2 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 text-primary mr-2" />
                      Available:
                    </span>
                    <span>Mon-Sat, 9 AM - 8 PM IST</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Schedule Property Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Success Stories
              </Button>
              <Button variant="ghost" size="lg" className="text-lg px-8 py-6">
                <Calculator className="mr-2 h-5 w-5" />
                Download ROI Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative overflow-hidden gradient-primary text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Transform Your Commercial Property Today
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-white/90">
              Stop losing tenants to buildings with better amenities. Start creating the professional food experience that attracts and retains quality businesses.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto">
              <p className="text-lg font-semibold mb-4">
                Exclusive Offer: Free property assessment + implementation discount for commercial buildings launching this quarter.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule 20-min call with specialist
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Get instant ROI calculator via email
                </div>
                <div className="flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download transformation checklist
                </div>
                <div className="flex items-center">
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Watch success story video
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-6"
            >
              Start Revenue Growth
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};