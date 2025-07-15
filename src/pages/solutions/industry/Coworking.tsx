import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingDown, Frown, ClipboardList, Smartphone, Users, BarChart3, Calendar, Shield, UserCheck, Timer, Phone, Mail, Download, Scan, Fingerprint, CreditCard, Award, Clock, Target, Zap, DollarSign, Star, MessageSquare, Building, Coffee } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import coworkingHero from "@/assets/coworking-hero.jpg";
export const Coworking = () => {
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              Increase Member Retention by <span className="text-gradient-primary">45%</span> with Smart Cafeteria Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Transform your coworking space into a premium destination. MealPe's intelligent food service platform helps coworking spaces boost member satisfaction by 80%, increase F&B revenue by 60%, and create sticky community experiences.
            </p>
            
            {/* Key Benefits Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {["45% Higher Retention", "60% F&B Revenue Growth", "80% Member Satisfaction", "1-Week Setup"].map((benefit, index) => <div key={index} className="bg-gradient-primary p-4 rounded-xl">
                  <p className="text-white font-semibold text-sm lg:text-base">{benefit}</p>
                </div>)}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                Get Free Coworking Assessment
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg">
                Download Revenue Growth Guide
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
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Why Poor Food Service is Killing Your
Co-Working Business</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Member Churn & Low Retention */}
              <Card className="glass-card border-destructive/20 hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4">
                    <TrendingDown className="h-8 w-8 text-destructive" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">💔 Member Churn & Low Retention</CardTitle>
                  <CardDescription className="text-lg font-semibold text-destructive">
                    The Problem: Members leaving for spaces with better amenities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2"></div>
                      Limited food options driving members to leave premises
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2"></div>
                      Long lunch breaks reducing productivity and satisfaction
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2"></div>
                      Inconvenient meal timings not matching flexible work schedules
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2"></div>
                      No community-building around dining experiences
                    </li>
                  </ul>
                  
                </CardContent>
              </Card>

              {/* Missed Revenue Opportunities */}
              <Card className="glass-card border-destructive/20 hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4">
                    <DollarSign className="h-8 w-8 text-destructive" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">💰 Missed Revenue Opportunities</CardTitle>
                  <CardDescription className="text-lg font-semibold text-destructive">
                    The Problem: Underutilized F&B potential hurting profitability
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2"></div>
                      Members ordering from external platforms instead of in-house options
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2"></div>
                      No systematic approach to food service monetization
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2"></div>
                      Unable to capture meal-time revenue from day-pass users
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2"></div>
                      Limited vendor partnerships and commission opportunities
                    </li>
                  </ul>
                  
                </CardContent>
              </Card>

              {/* Operational Chaos & Poor Experience */}
              <Card className="glass-card border-destructive/20 hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4">
                    <ClipboardList className="h-8 w-8 text-destructive" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">⚡ Operational Chaos & Poor Experience</CardTitle>
                  <CardDescription className="text-lg font-semibold text-destructive">
                    The Problem: Manual food coordination creating friction
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2"></div>
                      Complicated group lunch ordering for teams
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2"></div>
                      No visibility into member food preferences
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2"></div>
                      Difficult coordination with external vendors
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2"></div>
                      Poor quality control and member complaint handling
                    </li>
                  </ul>
                  
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <p className="text-xl text-muted-foreground font-medium">
                Inadequate food service creates member dissatisfaction, revenue leakage, and operational headaches. <span className="text-primary font-bold">MealPe solves all three.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Mockup Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-0">
        <div className="container mx-auto px-4 py-[30px]">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-12">
              
              
            </div>
            
            <div className="relative">
              <img src="/lovable-uploads/7dea9753-0747-4c66-b1a1-25142872e85c.png" alt="MealPe Complete Platform - Dashboard, Analytics, and Mobile App Interface" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl py-0"></div>
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
                Complete Food Service Ecosystem for Modern Workspaces
              </h2>
              <p className="text-xl text-muted-foreground">Primary Solution: MealPe Digital Cafeteria</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Flexible Ordering System */}
              <Card className="glass-card hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Flexible Ordering System</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Mobile-first ordering for busy professionals
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Pre-order meals during meetings or focused work
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Group ordering for team lunches and events
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Quick grab-and-go options for time-pressed members
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Multi-Vendor Marketplace */}
              <Card className="glass-card hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Multi-Vendor Marketplace</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Curated vendor selection for diverse tastes
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Rotating food options to maintain variety
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Quality control and rating system
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Seamless vendor onboarding and management
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Revenue Optimization */}
              <Card className="glass-card hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Revenue Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Commission-based revenue from all orders
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Premium vendor partnership opportunities
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Corporate client catering services
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Event and meeting catering coordination
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Community Building Features */}
              <Card className="glass-card hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Community Building Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Shared meal experiences and community tables
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Member food preference insights
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Lunch-and-learn event coordination
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Social dining features and member connections
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Secondary Solution */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-foreground mb-6">Secondary Solution: Smart Vendor Management</h3>
              <p className="text-xl text-muted-foreground mb-6">Operational Excellence</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Real-time vendor performance tracking
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Automated quality control and feedback collection
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Dynamic pricing and promotional campaign management
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Seamless payment processing and commission tracking
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
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Quick Comparison: Before vs. After</h3>
            <div className="bg-glass-card rounded-3xl p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 font-bold text-foreground">Aspect</th>
                      <th className="text-left py-4 px-4 font-bold text-foreground">Before MealPe</th>
                      <th className="text-left py-4 px-4 font-bold text-foreground">After MealPe (Expected Values)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium text-foreground">Member Retention</td>
                      <td className="py-4 px-4 text-muted-foreground">40-60% annual churn</td>
                      <td className="py-4 px-4 text-primary font-semibold">45% retention improvement</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium text-foreground">F&B Revenue</td>
                      <td className="py-4 px-4 text-muted-foreground">₹5-10K/month per 100 members</td>
                      <td className="py-4 px-4 text-primary font-semibold">₹15-25K/month per 100 members</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium text-foreground">Ordering Efficiency</td>
                      <td className="py-4 px-4 text-muted-foreground">15-20 min lunch coordination</td>
                      <td className="py-4 px-4 text-primary font-semibold">2-3 min mobile ordering</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium text-foreground">Member Satisfaction</td>
                      <td className="py-4 px-4 text-muted-foreground">60-70% with food options</td>
                      <td className="py-4 px-4 text-primary font-semibold">85-95% satisfaction rate</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium text-foreground">Vendor Management</td>
                      <td className="py-4 px-4 text-muted-foreground">Manual, reactive</td>
                      <td className="py-4 px-4 text-primary font-semibold">Automated, proactive</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium text-foreground">Community Engagement</td>
                      <td className="py-4 px-4 text-muted-foreground">Limited food-based interactions</td>
                      <td className="py-4 px-4 text-primary font-semibold">Active dining community</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">From Basic to Premium Co-Working in
Just 1 Week!</h2>
              <p className="text-xl text-muted-foreground">Simple 3-Step Process</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Step 1 */}
              <Card className="glass-card hover:glass-strong transition-all duration-300 relative">
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl font-bold text-foreground">Assessment & Vendor Setup</CardTitle>
                  <CardDescription className="text-muted-foreground">Days 1-3</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">What We Do:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Current food service analysis and member survey
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Curated vendor selection and onboarding
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Platform customization for your brand
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Payment gateway and commission structure setup
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">What You Get:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Optimized vendor mix for your member demographics
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Branded mobile ordering platform
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Commission revenue structure
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Member communication strategy
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="glass-card hover:glass-strong transition-all duration-300 relative">
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl font-bold text-foreground">Testing & Training</CardTitle>
                  <CardDescription className="text-muted-foreground">Days 4-5</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">What We Do:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Limited member group pilot testing
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Vendor training and quality standard setup
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Staff training for food service coordination
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        System optimization based on initial feedback
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">What You Get:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Confident platform operation
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Trained vendor partners
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Member adoption strategy
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Quality control processes
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="glass-card hover:glass-strong transition-all duration-300 relative">
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl font-bold text-foreground">Full Launch & Community Activation</CardTitle>
                  <CardDescription className="text-muted-foreground">Days 6-7</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">What We Do:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Complete platform activation for all members
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Launch community dining initiatives
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Real-time support and optimization
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Success metrics tracking setup
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">What You Get:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Fully operational food marketplace
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Enhanced member experience
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        New revenue stream activation
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Competitive differentiation
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Implementation Guarantee</h3>
                <p className="text-lg text-muted-foreground">
                  <span className="font-semibold text-primary">Success Promise:</span> See improved member satisfaction and measurable F&B revenue within 30 days, or we'll optimize the platform at no additional cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coworking-Specific Features Section */}
      <section className="py-20 bg-muted/20 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tr from-accent to-primary rounded-lg rotate-45 blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-secondary to-accent rounded-full blur-lg"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Built for{" "}
                <span className="text-primary relative inline-block">
                  Dynamic Work Environments
                  <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full"></div>
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Where flexibility meets functionality - crafted for the modern coworking ecosystem
              </p>
            </div>

            {/* Alternating Feature Layout */}
            <div className="space-y-16">
              {[
                {
                  title: "Professional Productivity Focus",
                  icon: Timer,
                  gradient: "from-primary/10 to-primary/20",
                  features: [
                    "Meeting-Friendly Ordering: Pre-order meals during long meetings",
                    "Quick Break Options: 5-minute ordering for short breaks", 
                    "Desk Delivery Tracking: Know exactly when food arrives",
                    "Silent Ordering: No disruption to focused work environments"
                  ],
                  visual: "⚡"
                },
                {
                  title: "Flexible Membership Integration",
                  icon: CreditCard,
                  gradient: "from-secondary/10 to-secondary/20",
                  features: [
                    "Day Pass User Access: Enable food ordering for temporary users",
                    "Membership Tier Benefits: Special pricing for premium members",
                    "Corporate Account Management: Simplified billing for company teams",
                    "Guest Ordering: Allow visitors and clients to order meals"
                  ],
                  visual: "💎"
                },
                {
                  title: "Community & Networking",
                  icon: MessageSquare,
                  gradient: "from-accent/10 to-accent/20",
                  features: [
                    "Shared Dining Tables: Community lunch coordination",
                    "Food-Based Events: Lunch-and-learn session catering",
                    "Member Taste Matching: Connect members with similar food preferences",
                    "Group Ordering: Team lunch coordination and splitting"
                  ],
                  visual: "🤝"
                },
                {
                  title: "Business Intelligence",
                  icon: BarChart3,
                  gradient: "from-muted/30 to-primary/10",
                  features: [
                    "Member Engagement Analytics: Food ordering correlation with retention",
                    "Peak Time Optimization: Vendor capacity planning for busy periods",
                    "Revenue Tracking: Commission and upselling opportunity identification",
                    "Space Utilization: Dining area usage and optimization insights"
                  ],
                  visual: "📊"
                }
              ].map((feature, index) => {
                const isEven = index % 2 === 0;
                const IconComponent = feature.icon;
                
                return (
                  <div key={index} className={`flex items-center gap-12 lg:gap-16 ${!isEven ? 'flex-row-reverse' : ''}`}>
                    {/* Content Side */}
                    <div className="flex-1">
                      <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/20 backdrop-blur-sm border border-border/30 hover:border-primary/40 transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/10">
                        {/* Floating Icon */}
                        <div className="absolute -top-6 left-8">
                          <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        
                        <div className="pt-8">
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                            {feature.title}
                          </h3>
                          
                          <div className="space-y-4">
                            {feature.features.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-background/50 hover:bg-background/70 transition-all duration-300">
                                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-muted-foreground leading-relaxed">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visual Side */}
                    <div className="flex-1 hidden lg:block">
                      <div className={`relative h-80 rounded-3xl bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border border-border/20 overflow-hidden group hover:shadow-xl transition-all duration-500`}>
                        {/* Interactive Dashboard Mockup */}
                        <div className="absolute inset-4">
                          <div className="bg-background/80 rounded-2xl p-6 h-full backdrop-blur-sm">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              </div>
                              <div className="text-xs text-muted-foreground">MealPe Dashboard</div>
                            </div>
                            
                            {/* Content */}
                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                  <IconComponent className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                  <div className="h-3 bg-foreground/20 rounded w-24 mb-1"></div>
                                  <div className="h-2 bg-foreground/10 rounded w-16"></div>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-3">
                                <div className="bg-primary/10 rounded-lg p-3 text-center">
                                  <div className="text-2xl mb-1">{feature.visual}</div>
                                  <div className="h-2 bg-primary/30 rounded w-full"></div>
                                </div>
                                <div className="space-y-2">
                                  <div className="h-2 bg-foreground/10 rounded"></div>
                                  <div className="h-2 bg-foreground/10 rounded w-3/4"></div>
                                  <div className="h-2 bg-foreground/10 rounded w-1/2"></div>
                                </div>
                              </div>
                              
                              <div className="bg-gradient-to-r from-primary/20 to-transparent rounded-lg p-4">
                                <div className="text-4xl opacity-40 text-center">
                                  {feature.visual}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm group-hover:blur-none transition-all duration-500"></div>
                        <div className="absolute bottom-6 left-6 w-6 h-6 bg-secondary/30 rounded-full blur-sm group-hover:blur-none transition-all duration-700"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Transform Your Coworking Space?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join 500+ coworking spaces already boosting member satisfaction and revenue with MealPe
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                  Start Your Free Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & ROI Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Revenue-Positive Investment from Day One
              </h2>
              <p className="text-xl text-muted-foreground">Coworking-Specific Pricing</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="glass-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold text-foreground">Contact for pricing.</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">What's Included</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Complete digital cafeteria platform
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Member and vendor mobile applications
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Multi-vendor marketplace management
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Community dining features
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Real-time analytics and reporting
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      Commission revenue optimization tools
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">ROI Preview for 100-Member Coworking Space</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4">
                      <p className="font-semibold text-foreground">Monthly Investment:</p>
                      <p className="text-muted-foreground">Platform and setup costs</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4">
                      <p className="font-semibold text-foreground mb-2">Monthly Revenue Generation:</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• F&B Commission Revenue: ₹15K+ (10% commission on ₹1.5L orders)</li>
                        <li>• Member Retention Value: ₹30K+ (reduced churn saves acquisition costs)</li>
                        <li>• Premium Positioning: ₹20K+ (ability to charge higher membership fees)</li>
                        <li>• Corporate Client Value: ₹25K+ (enhanced corporate package appeal)</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-primary rounded-xl p-4">
                      <p className="text-white font-bold text-lg">Total Monthly Benefit: ₹90K+ value creation</p>
                      <p className="text-white/90">Annual ROI: 300-500% return on investment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Transform Your Coworking Experience?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join leading coworking spaces already increasing member retention and creating new revenue streams through smart food service solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Option 1: Free Assessment */}
              <Card className="glass-card hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Free Assessment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">What's Included:</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Current food service and member satisfaction analysis</li>
                      <li>• Revenue opportunity identification</li>
                      <li>• Vendor ecosystem evaluation</li>
                      <li>• Custom ROI calculation for your space</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground"><span className="font-semibold">Duration:</span> 60-minute consultation</p>
                    <p className="text-sm text-muted-foreground"><span className="font-semibold">Cost:</span> Completely free</p>
                    <p className="text-sm text-muted-foreground"><span className="font-semibold">Timeline:</span> Schedule within 24 hours</p>
                  </div>
                  <Button className="w-full">Get Free Assessment</Button>
                </CardContent>
              </Card>

              {/* Option 2: Live Demo */}
              <Card className="glass-card hover:glass-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Live Demo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">What's Included:</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Platform walkthrough with coworking scenarios</li>
                      <li>• Member and vendor app demonstration</li>
                      <li>• Community features showcase</li>
                      <li>• Revenue optimization strategy discussion</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground"><span className="font-semibold">Duration:</span> 30-minute video call</p>
                    <p className="text-sm text-muted-foreground"><span className="font-semibold">Cost:</span> Free</p>
                    <p className="text-sm text-muted-foreground"><span className="font-semibold">Timeline:</span> Available daily</p>
                  </div>
                  <Button variant="outline" className="w-full">Schedule Live Demo</Button>
                </CardContent>
              </Card>

              {/* Option 3: Pilot Program */}
              <Card className="glass-card hover:glass-strong transition-all duration-300 border-primary/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Pilot Program</CardTitle>
                  <Badge className="bg-primary text-white">Recommended</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">What's Included:</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• 30-day trial with complete setup</li>
                      <li>• Vendor onboarding and member activation</li>
                      <li>• Performance monitoring and optimization</li>
                      <li>• Revenue tracking and reporting</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground"><span className="font-semibold">Investment:</span> Setup costs only</p>
                    <p className="text-sm text-muted-foreground"><span className="font-semibold">Guarantee:</span> Revenue-positive within 30 days or full refund</p>
                    <p className="text-sm text-muted-foreground"><span className="font-semibold">Timeline:</span> 1-week implementation</p>
                  </div>
                  <Button className="w-full">Start Pilot Program</Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <p className="mb-2"><span className="font-semibold">Coworking Solutions Team:</span> coworking@mealpe.app</p>
                  <p className="mb-2"><span className="font-semibold">Phone Consultation:</span> Request callback</p>
                </div>
                <div>
                  <p className="mb-2"><span className="font-semibold">Response Time:</span> Within 1 hour during business hours</p>
                  <p><span className="font-semibold">Available:</span> Monday-Saturday, 9 AM - 8 PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Revolutionize Your Coworking Space Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stop losing members to competitors with better amenities. Start creating the food experience modern professionals demand.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-lg font-semibold mb-4">
                Exclusive Offer: Free revenue assessment + implementation discount for coworking spaces launching this quarter.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule 15-min call with coworking specialist
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Get instant revenue calculator via email
                </div>
                <div className="flex items-center justify-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download transformation checklist
                </div>
                <div className="flex items-center justify-center">
                  <Coffee className="h-4 w-4 mr-2" />
                  Watch success story from leading coworking space
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              Start Revenue Growth
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};