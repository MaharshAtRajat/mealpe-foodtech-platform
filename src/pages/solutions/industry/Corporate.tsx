import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { MealPeWorkflowFlow } from "@/components/flow/MealPeWorkflowFlow";
import { Building2, TrendingUp, Users, Clock, Star, DollarSign, ArrowRight, CheckCircle, Target, Zap, BarChart3, Shield, Smartphone, CreditCard, Calendar, FileText, Award, Settings, Phone, Mail, Download, PlayCircle, Calculator, Coffee, Timer, Utensils, ShoppingCart, UserCheck, ChefHat, QrCode, Wifi } from "lucide-react";

export const Corporate = () => {
  const [activeTab, setActiveTab] = useState("employee-app");

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
                  Digitize Your Corporate Cafeteria with{" "}
                  <span className="text-primary">MealPe</span>{" "}
                  – Smart Food Solutions for Employees
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Streamline cafeteria operations, reduce food wastage, and elevate employee dining experience across corporate campuses with MealPe Digital Cafeteria.
                </p>
              </div>

              {/* Key Benefits Bar */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary">80%</div>
                  <div className="text-sm text-muted-foreground">Queue Reduction</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary">30%</div>
                  <div className="text-sm text-muted-foreground">Food Waste Reduction</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary">1-Week</div>
                  <div className="text-sm text-muted-foreground">Setup</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Get a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Schedule a Free Walkthrough
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/30 rounded-3xl p-8 flex items-center justify-center">
                <div className="relative">
                  <Coffee className="h-32 w-32 text-primary" />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Why Corporate Cafeterias Need MealPe
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Managing food services in corporate parks is challenging. High employee volumes create long queues, manual billing errors, and food wastage. Administrators lack insights into consumption trends and vendor performance. MealPe solves these challenges by providing digital cafeteria management software, improving operational efficiency and enhancing employee satisfaction.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="group bg-white/50 backdrop-blur-sm border-destructive/20 hover:bg-white/80 hover:border-destructive/40 hover:shadow-lg hover:shadow-destructive/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 group-hover:bg-destructive/20 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                  <Timer className="h-6 w-6 text-destructive group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-xl text-destructive group-hover:text-destructive/90 transition-colors duration-300">
                  Long Queues & Operational Inefficiency
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  <li className="hover:text-destructive transition-colors duration-200">• Employees spending 30+ minutes in cafeteria queues</li>
                  <li className="hover:text-destructive transition-colors duration-200">• Manual billing errors causing payment disputes</li>
                  <li className="hover:text-destructive transition-colors duration-200">• Peak hour congestion reducing productivity</li>
                  <li className="hover:text-destructive transition-colors duration-200">• Limited lunch hours creating service bottlenecks</li>
                </ul>
                <div className="p-3 bg-destructive/10 group-hover:bg-destructive/20 rounded-lg transition-all duration-300 group-hover:shadow-inner">
                  <p className="text-sm font-medium text-destructive group-hover:font-bold transition-all duration-300">
                    Impact: 2-3 hours daily productivity loss per 100 employees
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-white/50 backdrop-blur-sm border-destructive/20 hover:bg-white/80 hover:border-destructive/40 hover:shadow-lg hover:shadow-destructive/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 group-hover:bg-destructive/20 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                  <Utensils className="h-6 w-6 text-destructive group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-xl text-destructive group-hover:text-destructive/90 transition-colors duration-300">
                  Food Wastage & Inventory Issues
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  <li className="hover:text-destructive transition-colors duration-200">• 25-30% food wastage due to poor demand forecasting</li>
                  <li className="hover:text-destructive transition-colors duration-200">• Over-ordering and under-ordering issues</li>
                  <li className="hover:text-destructive transition-colors duration-200">• No visibility into consumption patterns</li>
                  <li className="hover:text-destructive transition-colors duration-200">• Manual inventory management causing stockouts</li>
                </ul>
                <div className="p-3 bg-destructive/10 group-hover:bg-destructive/20 rounded-lg transition-all duration-300 group-hover:shadow-inner">
                  <p className="text-sm font-medium text-destructive group-hover:font-bold transition-all duration-300">
                    Loss: ₹50K-2L monthly wastage costs for large cafeterias
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-white/50 backdrop-blur-sm border-destructive/20 hover:bg-white/80 hover:border-destructive/40 hover:shadow-lg hover:shadow-destructive/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 group-hover:bg-destructive/20 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                  <BarChart3 className="h-6 w-6 text-destructive group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-xl text-destructive group-hover:text-destructive/90 transition-colors duration-300">
                  Lack of Data-Driven Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  <li className="hover:text-destructive transition-colors duration-200">• No analytics on vendor performance metrics</li>
                  <li className="hover:text-destructive transition-colors duration-200">• Limited insights into employee food preferences</li>
                  <li className="hover:text-destructive transition-colors duration-200">• Manual reporting causing delayed decision making</li>
                  <li className="hover:text-destructive transition-colors duration-200">• Difficulty in tracking compliance and quality</li>
                </ul>
                <div className="p-3 bg-destructive/10 group-hover:bg-destructive/20 rounded-lg transition-all duration-300 group-hover:shadow-inner">
                  <p className="text-sm font-medium text-destructive group-hover:font-bold transition-all duration-300">
                    Risk: Poor decisions affecting 1000+ employees daily
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MealPe Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 text-primary font-medium">
              <Zap className="h-4 w-4" />
              <span>Complete Digital Transformation</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              MealPe Features for
              <br />
              <span className="text-primary">Corporate Cafeterias</span>
            </h2>
          </div>

          {/* Feature Deep Dive with Tabs */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-4 mb-8">
                <Button variant={activeTab === "employee-app" ? "default" : "outline"} className="h-16 flex-col gap-2" onClick={() => setActiveTab("employee-app")}>
                  <Smartphone className="h-6 w-6" />
                  <span>Digital Cafeteria for Employees</span>
                </Button>
                <Button variant={activeTab === "admin-dashboard" ? "default" : "outline"} className="h-16 flex-col gap-2" onClick={() => setActiveTab("admin-dashboard")}>
                  <BarChart3 className="h-6 w-6" />
                  <span>Admin Dashboard</span>
                </Button>
                <Button variant={activeTab === "vendor-management" ? "default" : "outline"} className="h-16 flex-col gap-2" onClick={() => setActiveTab("vendor-management")}>
                  <ChefHat className="h-6 w-6" />
                  <span>Vendor Management App</span>
                </Button>
              </div>

              {/* Dynamic Tab Content */}
              {activeTab === "employee-app" && (
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                            <Smartphone className="h-8 w-8 text-primary mr-3" />
                            Digital Cafeteria for Employees
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            Empower employees with seamless mobile ordering and cashless payments for a superior dining experience.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center text-primary font-medium">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Pre-Order & Scheduled Meals
                            </div>
                            <p className="text-sm text-muted-foreground">Order in advance and skip the queue</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center text-primary font-medium">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Live Menu Discovery
                            </div>
                            <p className="text-sm text-muted-foreground">Real-time availability with dietary filters</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center text-primary font-medium">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Cashless Payments
                            </div>
                            <p className="text-sm text-muted-foreground">MealPe Wallet, UPI, Cards integration</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center text-primary font-medium">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Real-time Order Tracking
                            </div>
                            <p className="text-sm text-muted-foreground">Know exactly when your order is ready</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-xl border">
                          <div className="aspect-[9/16] bg-primary/10 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                              <Smartphone className="h-16 w-16 text-primary mx-auto mb-4" />
                              <p className="text-sm text-muted-foreground">Employee App Interface</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "admin-dashboard" && (
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                            <BarChart3 className="h-8 w-8 text-primary mr-3" />
                            Admin Dashboard for Corporate Cafeterias
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            Get complete visibility and control over your cafeteria operations with real-time analytics and insights.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center text-primary font-medium">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Real-time Analytics
                            </div>
                            <p className="text-sm text-muted-foreground">Orders, revenue, and popular items</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center text-primary font-medium">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Inventory Management
                            </div>
                            <p className="text-sm text-muted-foreground">Reduce wastage and optimize stock</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center text-primary font-medium">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Multi-vendor Coordination
                            </div>
                            <p className="text-sm text-muted-foreground">Operational visibility across vendors</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center text-primary font-medium">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Customizable Reports
                            </div>
                            <p className="text-sm text-muted-foreground">Daily, weekly, and monthly insights</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-xl border">
                          <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                              <BarChart3 className="h-16 w-16 text-primary mx-auto mb-4" />
                              <p className="text-sm text-muted-foreground">Admin Dashboard Interface</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "vendor-management" && (
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                            <ChefHat className="h-8 w-8 text-primary mr-3" />
                            Vendor Management App
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            Streamline vendor operations with real-time order management and performance insights.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center text-primary font-medium">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Real-time Order Management
                            </div>
                            <p className="text-sm text-muted-foreground">KOT generation and order tracking</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center text-primary font-medium">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Menu Control
                            </div>
                            <p className="text-sm text-muted-foreground">Pricing and availability updates</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center text-primary font-medium">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Promotions Management
                            </div>
                            <p className="text-sm text-muted-foreground">Offers for staff engagement</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center text-primary font-medium">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Performance Insights
                            </div>
                            <p className="text-sm text-muted-foreground">Operational efficiency metrics</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-xl border">
                          <div className="aspect-[4/3] bg-primary/10 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                              <ChefHat className="h-16 w-16 text-primary mx-auto mb-4" />
                              <p className="text-sm text-muted-foreground">Vendor App Interface</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Benefits of MealPe for Corporate Parks
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="group bg-white/50 backdrop-blur-sm border-primary/20 hover:bg-white/80 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Timer className="h-6 w-6 text-primary group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-primary/90 transition-colors duration-300">
                  Reduced Queues & Faster Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• 80% reduction in waiting time with pre-ordering</li>
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Faster meal service improving employee productivity</li>
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Smart queue management during peak hours</li>
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Seamless pick-up process with order tracking</li>
                </ul>
                <div className="mt-4 p-3 bg-primary/5 group-hover:bg-primary/10 rounded-lg transition-all duration-300 group-hover:shadow-inner">
                  <p className="text-sm font-medium text-primary group-hover:font-bold transition-all duration-300">
                    Result: Maximum efficiency for busy employees
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-white/50 backdrop-blur-sm border-primary/20 hover:bg-white/80 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Shield className="h-6 w-6 text-primary group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-primary/90 transition-colors duration-300">
                  Contactless & Cashless Transactions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• 100% cashless payments improving hygiene</li>
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Contactless ordering reducing health risks</li>
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Digital receipts and transaction tracking</li>
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Enhanced safety protocols compliance</li>
                </ul>
                <div className="mt-4 p-3 bg-primary/5 group-hover:bg-primary/10 rounded-lg transition-all duration-300 group-hover:shadow-inner">
                  <p className="text-sm font-medium text-primary group-hover:font-bold transition-all duration-300">
                    Result: Safe and secure dining experience
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-white/50 backdrop-blur-sm border-primary/20 hover:bg-white/80 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <BarChart3 className="h-6 w-6 text-primary group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-primary/90 transition-colors duration-300">
                  Data-driven Meal Planning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• 30% reduction in food wastage with analytics</li>
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Optimized inventory based on consumption patterns</li>
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Menu planning driven by employee preferences</li>
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Cost optimization through demand forecasting</li>
                </ul>
                <div className="mt-4 p-3 bg-primary/5 group-hover:bg-primary/10 rounded-lg transition-all duration-300 group-hover:shadow-inner">
                  <p className="text-sm font-medium text-primary group-hover:font-bold transition-all duration-300">
                    Result: Smart operations with minimal waste
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-white/50 backdrop-blur-sm border-primary/20 hover:bg-white/80 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Users className="h-6 w-6 text-primary group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-primary/90 transition-colors duration-300">
                  Enhanced Employee Satisfaction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• 95% employee satisfaction with digital ordering</li>
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Improved workplace productivity and morale</li>
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Personalized dining experience with preferences</li>
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Better work-life balance with efficient meal service</li>
                </ul>
                <div className="mt-4 p-3 bg-primary/5 group-hover:bg-primary/10 rounded-lg transition-all duration-300 group-hover:shadow-inner">
                  <p className="text-sm font-medium text-primary group-hover:font-bold transition-all duration-300">
                    Result: Happier employees, better workplace culture
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-white/50 backdrop-blur-sm border-primary/20 hover:bg-white/80 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <CheckCircle className="h-6 w-6 text-primary group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-primary/90 transition-colors duration-300">
                  Transparent Vendor Operations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Real-time tracking of vendor performance</li>
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Quality monitoring and compliance tracking</li>
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Automated vendor coordination and communication</li>
                  <li className="hover:text-primary transition-colors duration-200 hover:pl-2">• Performance-based vendor management</li>
                </ul>
                <div className="mt-4 p-3 bg-primary/5 group-hover:bg-primary/10 rounded-lg transition-all duration-300 group-hover:shadow-inner">
                  <p className="text-sm font-medium text-primary group-hover:font-bold transition-all duration-300">
                    Result: Complete operational visibility and control
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              How MealPe Works in Corporate Cafeterias
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the seamless flow from employee login to payment completion with our intuitive workflow design
            </p>
          </div>

          <MealPeWorkflowFlow />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Flexible Pricing for Corporate Cafeterias
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">
                  SaaS Subscription Model
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Annual license fee for unlimited orders and vendors</li>
                  <li>• Ideal for large corporate campuses</li>
                  <li>• Predictable monthly costs</li>
                  <li>• Includes onboarding and training</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">
                  Commission-Based Model
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pay per transaction with fixed percentage commission</li>
                  <li>• Payment gateway charges at actuals</li>
                  <li>• 100% online payments</li>
                  <li>• Vendor training included</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Your Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <PlayCircle className="mr-2 h-5 w-5" />
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};