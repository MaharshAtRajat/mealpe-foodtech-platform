import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, Clock, Smartphone, DollarSign, BarChart3, MessageSquare, Calendar, Zap, ArrowRight, Star, Download, Phone } from "lucide-react";
import coworkingHero from "@/assets/coworking-hero.jpg";

export const Coworking = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="px-4 py-2">
                  #1 Coworking Food Solution
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Increase Member Retention by{" "}
                  <span className="text-primary">45%</span> with Smart Cafeteria Solutions
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform your coworking space into a premium destination. MealPe's intelligent food service platform helps coworking spaces boost member satisfaction by 80%, increase F&B revenue by 60%, and create sticky community experiences.
                </p>
              </div>
              
              {/* Key Benefits Bar */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">45%</div>
                  <div className="text-sm text-muted-foreground">Higher Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">60%</div>
                  <div className="text-sm text-muted-foreground">F&B Revenue Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">80%</div>
                  <div className="text-sm text-muted-foreground">Member Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1-Week</div>
                  <div className="text-sm text-muted-foreground">Setup</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  Get Free Coworking Assessment
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Revenue Growth Guide
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={coworkingHero} 
                alt="Modern coworking space with smart food ordering"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Pain Points Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Poor Food Service is Killing Your Coworking Business</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Challenge 1 */}
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-destructive rotate-180" />
                </div>
                <CardTitle className="text-xl">Member Churn & Low Retention</CardTitle>
                <CardDescription>Members leaving for spaces with better amenities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Limited food options driving members to leave premises</li>
                  <li>• Long lunch breaks reducing productivity and satisfaction</li>
                  <li>• Inconvenient meal timings not matching flexible work schedules</li>
                  <li>• No community-building around dining experiences</li>
                </ul>
                <div className="bg-destructive/5 p-4 rounded-lg">
                  <p className="font-semibold text-destructive">Business Impact:</p>
                  <p className="text-sm">40-60% annual member churn, ₹25K+ acquisition cost per lost member</p>
                </div>
              </CardContent>
            </Card>

            {/* Challenge 2 */}
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-xl">Missed Revenue Opportunities</CardTitle>
                <CardDescription>Underutilized F&B potential hurting profitability</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Members ordering from external platforms instead of in-house options</li>
                  <li>• No systematic approach to food service monetization</li>
                  <li>• Unable to capture meal-time revenue from day-pass users</li>
                  <li>• Limited vendor partnerships and commission opportunities</li>
                </ul>
                <div className="bg-destructive/5 p-4 rounded-lg">
                  <p className="font-semibold text-destructive">Revenue Loss:</p>
                  <p className="text-sm">₹5-15K per month per 100 members in missed F&B revenue</p>
                </div>
              </CardContent>
            </Card>

            {/* Challenge 3 */}
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-xl">Operational Chaos & Poor Experience</CardTitle>
                <CardDescription>Manual food coordination creating friction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Complicated group lunch ordering for teams</li>
                  <li>• No visibility into member food preferences</li>
                  <li>• Difficult coordination with external vendors</li>
                  <li>• Poor quality control and member complaint handling</li>
                </ul>
                <div className="bg-destructive/5 p-4 rounded-lg">
                  <p className="font-semibold text-destructive">Productivity Impact:</p>
                  <p className="text-sm">2-3 hours daily spent on food-related coordination</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold">
              Inadequate food service creates member dissatisfaction, revenue leakage, and operational headaches. 
              <span className="text-primary"> MealPe solves all three.</span>
            </p>
          </div>
        </div>
      </section>

      {/* MealPe Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Complete Food Service Ecosystem for Modern Workspaces</h2>
          </div>

          {/* Primary Solution */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Primary Solution: MealPe Digital Cafeteria</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Flexible Ordering System</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Mobile-first ordering for busy professionals</li>
                    <li>• Pre-order meals during meetings or focused work</li>
                    <li>• Group ordering for team lunches and events</li>
                    <li>• Quick grab-and-go options for time-pressed members</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Star className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Multi-Vendor Marketplace</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Curated vendor selection for diverse tastes</li>
                    <li>• Rotating food options to maintain variety</li>
                    <li>• Quality control and rating system</li>
                    <li>• Seamless vendor onboarding and management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Revenue Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Commission-based revenue from all orders</li>
                    <li>• Premium vendor partnership opportunities</li>
                    <li>• Corporate client catering services</li>
                    <li>• Event and meeting catering coordination</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Community Building Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Shared meal experiences and community tables</li>
                    <li>• Member food preference insights</li>
                    <li>• Lunch-and-learn event coordination</li>
                    <li>• Social dining features and member connections</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Before vs After Comparison */}
          <div className="bg-muted/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Quick Comparison: Before vs. After</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Aspect</th>
                    <th className="text-left py-3 px-4">Before MealPe</th>
                    <th className="text-left py-3 px-4">After MealPe</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Member Retention</td>
                    <td className="py-3 px-4">40-60% annual churn</td>
                    <td className="py-3 px-4 text-primary font-semibold">45% retention improvement</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">F&B Revenue</td>
                    <td className="py-3 px-4">₹5-10K/month per 100 members</td>
                    <td className="py-3 px-4 text-primary font-semibold">₹15-25K/month per 100 members</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Ordering Efficiency</td>
                    <td className="py-3 px-4">15-20 min lunch coordination</td>
                    <td className="py-3 px-4 text-primary font-semibold">2-3 min mobile ordering</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Member Satisfaction</td>
                    <td className="py-3 px-4">60-70% with food options</td>
                    <td className="py-3 px-4 text-primary font-semibold">85-95% satisfaction rate</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Vendor Management</td>
                    <td className="py-3 px-4">Manual, reactive</td>
                    <td className="py-3 px-4 text-primary font-semibold">Automated, proactive</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Community Engagement</td>
                    <td className="py-3 px-4">Limited food-based interactions</td>
                    <td className="py-3 px-4 text-primary font-semibold">Active dining community</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">From Basic to Premium Coworking in Just 1 Week</h2>
            <p className="text-xl text-muted-foreground">Simple 3-Step Process</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <Card className="relative">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
              </div>
              <CardHeader className="pt-8">
                <CardTitle>Assessment & Vendor Setup</CardTitle>
                <CardDescription>Days 1-3</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What We Do:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Current food service analysis and member survey</li>
                    <li>• Curated vendor selection and onboarding</li>
                    <li>• Platform customization for your brand</li>
                    <li>• Payment gateway and commission structure setup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What You Get:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Optimized vendor mix for your member demographics</li>
                    <li>• Branded mobile ordering platform</li>
                    <li>• Commission revenue structure</li>
                    <li>• Member communication strategy</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="relative">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
              </div>
              <CardHeader className="pt-8">
                <CardTitle>Testing & Training</CardTitle>
                <CardDescription>Days 4-5</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What We Do:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Limited member group pilot testing</li>
                    <li>• Vendor training and quality standard setup</li>
                    <li>• Staff training for food service coordination</li>
                    <li>• System optimization based on initial feedback</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What You Get:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Confident platform operation</li>
                    <li>• Trained vendor partners</li>
                    <li>• Member adoption strategy</li>
                    <li>• Quality control processes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="relative">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
              </div>
              <CardHeader className="pt-8">
                <CardTitle>Full Launch & Community Activation</CardTitle>
                <CardDescription>Days 6-7</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What We Do:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Complete platform activation for all members</li>
                    <li>• Launch community dining initiatives</li>
                    <li>• Real-time support and optimization</li>
                    <li>• Success metrics tracking setup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What You Get:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Fully operational food marketplace</li>
                    <li>• Enhanced member experience</li>
                    <li>• New revenue stream activation</li>
                    <li>• Competitive differentiation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 rounded-lg p-6 inline-block">
              <h3 className="text-xl font-bold mb-2">Implementation Guarantee</h3>
              <p className="text-sm">
                <strong>Success Promise:</strong> See improved member satisfaction and measurable F&B revenue within 30 days, 
                or we'll optimize the platform at no additional cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coworking-Specific Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Built for Dynamic Work Environments</h2>
            <p className="text-xl text-muted-foreground">Unique Coworking Features</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Professional Productivity Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Meeting-Friendly Ordering: Pre-order meals during long meetings</li>
                  <li>• Quick Break Options: 5-minute ordering for short breaks</li>
                  <li>• Desk Delivery Tracking: Know exactly when food arrives</li>
                  <li>• Silent Ordering: No disruption to focused work environments</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Flexible Membership Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Day Pass User Access: Enable food ordering for temporary users</li>
                  <li>• Membership Tier Benefits: Special pricing for premium members</li>
                  <li>• Corporate Account Management: Simplified billing for company teams</li>
                  <li>• Guest Ordering: Allow visitors and clients to order meals</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Community & Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Shared Dining Tables: Community lunch coordination</li>
                  <li>• Food-Based Events: Lunch-and-learn session catering</li>
                  <li>• Member Taste Matching: Connect members with similar food preferences</li>
                  <li>• Group Ordering: Team lunch coordination and splitting</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Business Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Member Engagement Analytics: Food ordering correlation with retention</li>
                  <li>• Peak Time Optimization: Vendor capacity planning for busy periods</li>
                  <li>• Revenue Tracking: Commission and upselling opportunity identification</li>
                  <li>• Space Utilization: Dining area usage and optimization insights</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & ROI Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Revenue-Positive Investment from Day One</h2>
            <p className="text-xl text-muted-foreground">Coworking-Specific Pricing</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Complete digital cafeteria platform
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Member and vendor mobile applications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Multi-vendor marketplace management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Community dining features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Real-time analytics and reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Commission revenue optimization tools
                  </li>
                </ul>
                <div className="mt-6">
                  <p className="text-center text-lg font-semibold">Contact for pricing.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl">ROI Preview for 100-Member Coworking Space</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Monthly Revenue Generation:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>F&B Commission Revenue:</strong> ₹15K+ (10% commission on ₹1.5L orders)</li>
                    <li>• <strong>Member Retention Value:</strong> ₹30K+ (reduced churn saves acquisition costs)</li>
                    <li>• <strong>Premium Positioning:</strong> ₹20K+ (ability to charge higher membership fees)</li>
                    <li>• <strong>Corporate Client Value:</strong> ₹25K+ (enhanced corporate package appeal)</li>
                  </ul>
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold">Total Monthly Benefit: ₹90K+ value creation</p>
                  <p className="text-primary font-bold">Annual ROI: 300-500% return on investment</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Coworking Experience?</h2>
            <p className="text-xl text-muted-foreground">
              Join leading coworking spaces already increasing member retention and creating new revenue streams through smart food service solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Option 1 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Free Assessment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What's Included:</h4>
                  <ul className="text-sm space-y-1 text-left">
                    <li>• Current food service and member satisfaction analysis</li>
                    <li>• Revenue opportunity identification</li>
                    <li>• Vendor ecosystem evaluation</li>
                    <li>• Custom ROI calculation for your space</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p><strong>Duration:</strong> 60-minute consultation</p>
                  <p><strong>Cost:</strong> Completely free</p>
                  <p><strong>Timeline:</strong> Schedule within 24 hours</p>
                </div>
                <Button className="w-full">Get Free Assessment</Button>
              </CardContent>
            </Card>

            {/* Option 2 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Live Demo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What's Included:</h4>
                  <ul className="text-sm space-y-1 text-left">
                    <li>• Platform walkthrough with coworking scenarios</li>
                    <li>• Member and vendor app demonstration</li>
                    <li>• Community features showcase</li>
                    <li>• Revenue optimization strategy discussion</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p><strong>Duration:</strong> 30-minute video call</p>
                  <p><strong>Cost:</strong> Free</p>
                  <p><strong>Timeline:</strong> Available daily</p>
                </div>
                <Button variant="outline" className="w-full">Schedule Live Demo</Button>
              </CardContent>
            </Card>

            {/* Option 3 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Pilot Program</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What's Included:</h4>
                  <ul className="text-sm space-y-1 text-left">
                    <li>• 30-day trial with complete setup</li>
                    <li>• Vendor onboarding and member activation</li>
                    <li>• Performance monitoring and optimization</li>
                    <li>• Revenue tracking and reporting</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p><strong>Investment:</strong> Setup costs only</p>
                  <p><strong>Guarantee:</strong> Revenue-positive within 30 days or full refund</p>
                  <p><strong>Timeline:</strong> 1-week implementation</p>
                </div>
                <Button className="w-full">Start Pilot Program</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-4">
            <div>
              <p className="font-semibold">Coworking Solutions Team: coworking@mealpe.app</p>
              <p>Phone Consultation: Request callback</p>
              <p>Response Time: Within 1 hour during business hours</p>
              <p>Available: Monday-Saturday, 9 AM - 8 PM IST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Revolutionize Your Coworking Space Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Stop losing members to competitors with better amenities. Start creating the food experience modern professionals demand.
          </p>
          <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
            <p className="font-semibold mb-4">
              Exclusive Offer: Free revenue assessment + implementation discount for coworking spaces launching this quarter.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>📞 Schedule 15-min call with coworking specialist</div>
              <div>📧 Get instant revenue calculator via email</div>
              <div>📋 Download transformation checklist</div>
              <div>🎥 Watch success story from leading coworking space</div>
            </div>
          </div>
          <Button size="lg" variant="secondary" className="text-lg">
            Start Revenue Growth
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};