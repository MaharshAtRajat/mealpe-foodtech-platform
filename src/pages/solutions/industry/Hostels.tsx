import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingDown, Frown, ClipboardList, Smartphone, Users, BarChart3, Calendar, Shield, UserCheck, Timer, Phone, Mail, Download, Scan, Fingerprint, CreditCard, Award, Clock, Target, Zap } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const Hostels = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              Eliminate <span className="text-gradient-primary">40% Food Wastage</span> and Transform Your Hostel Dining Experience
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Stop losing ₹2-5 lakh monthly to food wastage. MealPe's smart mess management helps hostels reduce waste by 50%, improve student satisfaction by 90%, and streamline operations completely.
            </p>
            
            {/* Key Benefits Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                "50% Less Food Wastage",
                "90% Student Satisfaction", 
                "3-Week Implementation",
                "₹18L+ Annual Savings"
              ].map((benefit, index) => (
                <div key={index} className="bg-gradient-primary p-4 rounded-xl">
                  <p className="text-white font-semibold text-sm lg:text-base">{benefit}</p>
                </div>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                Get Free Hostel Assessment
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg">
                Download Hostel Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Pain Points Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Hostel Mess Management is Broken
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Financial Losses */}
              <Card className="glass-card border-destructive/20 hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4">
                    <TrendingDown className="h-8 w-8 text-destructive" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">💸 Massive Financial Losses</CardTitle>
                  <CardDescription className="text-lg font-semibold text-destructive">
                    The Problem: 40-50% food wastage in traditional hostel messes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2"></div>
                      Unpredictable student attendance
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2"></div>
                      Over-preparation due to uncertainty
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2"></div>
                      No demand forecasting capability
                    </li>
                  </ul>
                  <div className="bg-destructive/10 p-4 rounded-lg">
                    <p className="font-bold text-destructive">Average Loss: ₹2-5 lakh per month for 500-student hostels</p>
                  </div>
                </CardContent>
              </Card>

              {/* Student Dissatisfaction */}
              <Card className="glass-card border-accent/20 hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    <Frown className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">😤 Student Dissatisfaction</CardTitle>
                  <CardDescription className="text-lg font-semibold text-accent">
                    The Problem: Poor dining experience driving complaints
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></div>
                      Long queues during meal times
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></div>
                      No advance meal information
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></div>
                      Inability to skip meals when away
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></div>
                      Poor food quality due to overproduction
                    </li>
                  </ul>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="font-bold text-accent">Result: 60-70% student dissatisfaction rates</p>
                  </div>
                </CardContent>
              </Card>

              {/* Administrative Chaos */}
              <Card className="glass-card border-secondary/20 hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                    <ClipboardList className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">📋 Administrative Chaos</CardTitle>
                  <CardDescription className="text-lg font-semibold text-secondary-foreground">
                    The Problem: Manual processes consuming staff time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                      Paper-based attendance tracking
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                      Vendor coordination nightmares
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                      No real-time consumption data
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                      Budget planning guesswork
                    </li>
                  </ul>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <p className="font-bold text-secondary-foreground">Impact: 15+ hours weekly on mess administration</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <p className="text-xl text-muted-foreground font-medium">
                Traditional mess management costs you money, time, and student happiness. <span className="text-primary font-bold">MealPe fixes all three.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MealPe Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Complete Digital Transformation for Hostel Dining
              </h2>
              <p className="text-xl text-muted-foreground">Primary Solution: MealPe Mess Manager</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Smart Meal Planning */}
              <Card className="glass-card hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Smart Meal Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      AI-powered demand forecasting with 95% accuracy
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Automatic adjustment for exams, holidays, and events
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Student travel management and meal skipping
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Seasonal consumption pattern recognition
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Digital Attendance System */}
              <Card className="glass-card hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <UserCheck className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Digital Attendance System</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      RFID card-based meal check-ins
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Real-time headcount for vendors
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Automatic attendance reporting
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Parent portal for meal monitoring
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Waste Reduction Technology */}
              <Card className="glass-card hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <TrendingDown className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Waste Reduction Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Precise quantity predictions
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Real-time consumption tracking
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Vendor preparation optimization
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Monthly waste analysis reports
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Student Engagement Platform */}
              <Card className="glass-card hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Student Engagement Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Mobile app for meal planning and RSVP
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Weekly menu browsing and ratings
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Dietary preference management
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Feedback and suggestion system
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Secondary Solution */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-foreground mb-6">Secondary Solution: Digital Cafeteria for Common Areas</h3>
              <p className="text-xl text-muted-foreground mb-6">Additional Revenue Opportunities</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Snack and beverage ordering for study areas
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Late-night meal delivery within hostel
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Special occasion catering management
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Vendor partnerships for additional income
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After Comparison */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Quick Comparison: Before vs. After
              </h2>
            </div>
            
            <Card className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-6 font-bold text-lg text-foreground">Aspect</th>
                      <th className="text-left p-6 font-bold text-lg text-destructive">Before MealPe</th>
                      <th className="text-left p-6 font-bold text-lg text-primary">After MealPe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { aspect: "Food Wastage", before: "40-50% daily", after: "5-10% daily" },
                      { aspect: "Attendance Tracking", before: "Manual, 60% accurate", after: "Automated, 99% accurate" },
                      { aspect: "Student Satisfaction", before: "60-70%", after: "90-95%" },
                      { aspect: "Admin Time", before: "15+ hours/week", after: "3-4 hours/week" },
                      { aspect: "Vendor Disputes", before: "Weekly issues", after: "Rare occurrences" },
                      { aspect: "Budget Predictability", before: "Quarterly estimates", after: "Daily precise data" }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="p-6 font-semibold text-foreground">{row.aspect}</td>
                        <td className="p-6 text-muted-foreground">{row.before}</td>
                        <td className="p-6 text-primary font-semibold">{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                From Manual to Digital in Just 3 Weeks
              </h2>
              <p className="text-xl text-muted-foreground">Simple 3-Step Process</p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary to-primary/50"></div>
              
              <div className="space-y-12">
                {[
                  {
                    week: "Week 1",
                    title: "Assessment & Setup",
                    description: "Current mess operation analysis and system configuration",
                    whatWeDo: [
                      "Current mess operation analysis",
                      "Student database integration", 
                      "Vendor onboarding and training",
                      "Hardware installation (RFID/tablets)"
                    ],
                    whatYouGet: [
                      "Customized system configuration",
                      "Trained vendor teams",
                      "Student orientation materials",
                      "Parent portal setup"
                    ]
                  },
                  {
                    week: "Week 2", 
                    title: "Pilot & Training",
                    description: "Limited testing and comprehensive training phase",
                    whatWeDo: [
                      "Limited student group testing",
                      "Comprehensive staff training",
                      "System optimization",
                      "Issue resolution and fine-tuning"
                    ],
                    whatYouGet: [
                      "Confident system operation",
                      "Trained administrative staff", 
                      "Student adoption strategy",
                      "Performance monitoring setup"
                    ]
                  },
                  {
                    week: "Week 3",
                    title: "Full Launch", 
                    description: "Complete activation with ongoing support",
                    whatWeDo: [
                      "Complete system activation",
                      "Real-time monitoring support",
                      "Success metrics tracking",
                      "Ongoing optimization"
                    ],
                    whatYouGet: [
                      "Fully operational digital mess",
                      "Immediate waste reduction",
                      "Student satisfaction improvement", 
                      "Data-driven insights dashboard"
                    ]
                  }
                ].map((step, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div key={index} className="relative flex items-center">
                      {/* Timeline Node */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center z-10">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      
                      {/* Content Card */}
                      <div className={`w-5/12 ${isEven ? 'pr-12' : 'ml-auto pl-12'}`}>
                        <Card className="glass-card border-border/50 hover:glass-strong transition-all duration-300">
                          <CardHeader>
                            <Badge variant="secondary" className="w-fit bg-primary/10 text-primary mb-2">
                              {step.week}
                            </Badge>
                            <CardTitle className="text-2xl font-bold text-foreground">{step.title}</CardTitle>
                            <CardDescription className="text-muted-foreground">{step.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-foreground mb-3">What We Do:</h4>
                                <ul className="space-y-2">
                                  {step.whatWeDo.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground mb-3">What You Get:</h4>
                                <ul className="space-y-2">
                                  {step.whatYouGet.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="text-center mt-16 p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">Implementation Guarantee</h3>
              <p className="text-lg text-muted-foreground">
                <span className="font-semibold text-primary">Success Promise:</span> See measurable improvement in food wastage and student satisfaction within 30 days, or we'll optimize the system at no additional cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel-Specific Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Built Specifically for Student Housing Needs
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Academic Calendar Integration */}
              <div className="space-y-8">
                <Card className="glass-card hover:glass-strong transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                        <Calendar className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">Academic Calendar Integration</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4">
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center gap-3 mb-2">
                          <Award className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold text-foreground">Exam Period Adjustments</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">Automatic meal planning changes during exams</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold text-foreground">Semester Planning</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">Student check-in/check-out meal status updates</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center gap-3 mb-2">
                          <Target className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold text-foreground">Holiday Management</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">Reduced capacity planning for breaks</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center gap-3 mb-2">
                          <Zap className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold text-foreground">Event Coordination</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">Special meal arrangements for college events</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Student Lifecycle Management */}
                <Card className="glass-card hover:glass-strong transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                        <UserCheck className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">Student Lifecycle Management</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Room Allocation Sync</h4>
                          <p className="text-muted-foreground text-sm">Automatic meal plan assignment</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Transfer Handling</h4>
                          <p className="text-muted-foreground text-sm">Seamless meal plan transfers between hostels</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Graduation Process</h4>
                          <p className="text-muted-foreground text-sm">Automated meal plan termination</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Readmission Support</h4>
                          <p className="text-muted-foreground text-sm">Quick meal plan reactivation</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Parent & Guardian Portal */}
              <div className="space-y-8">
                <Card className="glass-card hover:glass-strong transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">Parent & Guardian Portal</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4">
                      <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/10">
                        <div className="flex items-center gap-3 mb-2">
                          <BarChart3 className="h-5 w-5 text-secondary-foreground" />
                          <h4 className="font-semibold text-foreground">Meal Monitoring</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">Real-time visibility into student eating patterns</p>
                      </div>
                      <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/10">
                        <div className="flex items-center gap-3 mb-2">
                          <Shield className="h-5 w-5 text-secondary-foreground" />
                          <h4 className="font-semibold text-foreground">Nutrition Tracking</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">Dietary intake and health monitoring</p>
                      </div>
                      <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/10">
                        <div className="flex items-center gap-3 mb-2">
                          <Timer className="h-5 w-5 text-secondary-foreground" />
                          <h4 className="font-semibold text-foreground">Alert System</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">Notifications for irregular meal attendance</p>
                      </div>
                      <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/10">
                        <div className="flex items-center gap-3 mb-2">
                          <Smartphone className="h-5 w-5 text-secondary-foreground" />
                          <h4 className="font-semibold text-foreground">Payment Transparency</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">Clear billing and meal plan usage</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Compliance & Reporting */}
                <Card className="glass-card hover:glass-strong transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                        <Shield className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">Compliance & Reporting</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Government Guidelines</h4>
                          <p className="text-muted-foreground text-sm">Nutrition and safety standard compliance</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Audit Trails</h4>
                          <p className="text-muted-foreground text-sm">Complete meal and attendance documentation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Health Monitoring</h4>
                          <p className="text-muted-foreground text-sm">Special dietary requirement management</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Financial Reporting</h4>
                          <p className="text-muted-foreground text-sm">Detailed cost and wastage analysis</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Pricing & ROI Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Affordable Pricing with Guaranteed ROI
              </h2>
              <div className="mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                  Contact for Pricing
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">What's Included</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-muted-foreground text-left">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Complete mess management platform
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Student and vendor mobile apps
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      RFID integration support
                    </li>
                  </ul>
                  <ul className="space-y-3 text-muted-foreground text-left">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Parent portal access
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Email and chat support
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Monthly optimization reports
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Hostel Dining?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Join leading hostels already saving ₹10+ lakh annually while delighting students with modern dining experiences.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl">
                Get Free Assessment
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-12 py-6 text-xl">
                Schedule Live Demo
              </Button>
              <Button variant="link" className="text-primary text-xl hover:text-primary/80">
                <Download className="h-6 w-6 mr-3" />
                Download Hostel Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};