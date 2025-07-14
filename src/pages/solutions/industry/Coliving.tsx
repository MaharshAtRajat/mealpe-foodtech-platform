import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { 
  Users, 
  TrendingDown, 
  Calendar, 
  DollarSign, 
  Clock, 
  Smartphone, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Download,
  Phone,
  Mail,
  Star,
  Shield,
  Zap,
  Target,
  UserCheck,
  Utensils,
  Home,
  Briefcase
} from "lucide-react";

export const Coliving = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Boost PG Occupancy by{" "}
              <span className="text-primary">35%</span>{" "}
              with Modern Dining Experiences
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stop losing residents to competitors. MealPe's flexible meal management helps coliving spaces increase retention by 40%, reduce food costs by 30%, and attract premium tenants with seamless dining solutions.
            </p>
            
            {/* Key Benefits Bar */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <TrendingDown className="w-4 h-4 mr-2" />
                35% Higher Occupancy
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <UserCheck className="w-4 h-4 mr-2" />
                40% Better Retention
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <DollarSign className="w-4 h-4 mr-2" />
                30% Cost Reduction
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Clock className="w-4 h-4 mr-2" />
                2-Week Setup
              </Badge>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Target className="w-5 h-5 mr-2" />
                Get Free PG Assessment
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Download Coliving Success Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Pain Points Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Traditional PG Dining is Driving Residents Away
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* High Tenant Turnover */}
            <Card className="border-destructive/20 bg-gradient-to-br from-destructive/5 to-background">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle className="text-destructive">🏃 High Tenant Turnover</CardTitle>
                <CardDescription className="font-semibold">
                  Residents leaving due to poor food experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Limited meal flexibility for working professionals</li>
                  <li>• Fixed timing not matching work schedules</li>
                  <li>• Poor food quality and limited variety</li>
                  <li>• No customization for dietary preferences</li>
                </ul>
                <div className="bg-destructive/10 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-destructive">
                    Average Impact: 60% annual turnover, ₹50K+ replacement costs per resident
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Revenue Leakage & Waste */}
            <Card className="border-destructive/20 bg-gradient-to-br from-destructive/5 to-background">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingDown className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle className="text-destructive">💰 Revenue Leakage & Waste</CardTitle>
                <CardDescription className="font-semibold">
                  Inefficient meal operations hurting profitability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Food wastage due to unpredictable attendance</li>
                  <li>• Residents opting out of meal plans entirely</li>
                  <li>• Unable to charge premium for dining services</li>
                  <li>• High operational costs with manual management</li>
                </ul>
                <div className="bg-destructive/10 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-destructive">
                    Financial Impact: 25-40% food budget waste, missed upselling opportunities
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Operational Complexity */}
            <Card className="border-destructive/20 bg-gradient-to-br from-destructive/5 to-background">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle className="text-destructive">📋 Operational Complexity</CardTitle>
                <CardDescription className="font-semibold">
                  Managing diverse resident needs manually
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Different work schedules and meal timings</li>
                  <li>• Varying dietary restrictions and preferences</li>
                  <li>• Guest meal coordination nightmares</li>
                  <li>• No visibility into consumption patterns</li>
                </ul>
                <div className="bg-destructive/10 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-destructive">
                    Time Impact: 20+ hours weekly on meal coordination
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              Traditional PG dining creates resident dissatisfaction, operational chaos, and lost revenue.{" "}
              <span className="text-primary font-semibold">MealPe transforms all three.</span>
            </p>
          </div>
        </div>
      </section>

      {/* MealPe Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Dining Solutions for Modern Coliving
            </h2>
          </div>

          {/* Primary Solution */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">
              Primary Solution: <span className="text-primary">MealPe Mess Manager</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Flexible Meal Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Dynamic meal scheduling for varying work hours</li>
                    <li>• Weekend vs. weekday menu differentiation</li>
                    <li>• Special occasion and festival meal coordination</li>
                    <li>• Seasonal menu rotation for variety</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Professional-Friendly Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Pre-order meals for busy schedules</li>
                    <li>• Late-night meal availability tracking</li>
                    <li>• Mobile notifications for meal readiness</li>
                    <li>• Guest meal booking and billing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Smart Cost Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Accurate demand forecasting for each meal</li>
                    <li>• Portion optimization based on consumption data</li>
                    <li>• Vendor negotiation support with usage analytics</li>
                    <li>• Automated billing for different meal plan tiers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Resident Engagement Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Mobile app for meal customization</li>
                    <li>• Dietary preference and allergy management</li>
                    <li>• Meal rating and feedback system</li>
                    <li>• Community meal planning and voting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Secondary Solution */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">Secondary Solution: Digital Cafeteria for Premium Spaces</CardTitle>
              <CardDescription>Revenue Enhancement Opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      À la carte ordering for residents not on meal plans
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Premium meal options for additional charges
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Corporate client lunch catering
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Weekend special dining experiences
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Before vs After Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quick Comparison: Before vs. After
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-semibold">Aspect</th>
                        <th className="text-left p-4 font-semibold text-destructive">Before MealPe</th>
                        <th className="text-left p-4 font-semibold text-primary">After MealPe</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Resident Retention</td>
                        <td className="p-4 text-muted-foreground">40% annual turnover</td>
                        <td className="p-4 text-primary font-semibold">60% retention improvement</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Meal Plan Adoption</td>
                        <td className="p-4 text-muted-foreground">50-60% residents</td>
                        <td className="p-4 text-primary font-semibold">80-90% residents</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Food Wastage</td>
                        <td className="p-4 text-muted-foreground">30-40% daily</td>
                        <td className="p-4 text-primary font-semibold">8-12% daily</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Admin Time</td>
                        <td className="p-4 text-muted-foreground">20+ hours/week</td>
                        <td className="p-4 text-primary font-semibold">5-6 hours/week</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Guest Meal Handling</td>
                        <td className="p-4 text-muted-foreground">Manual, chaotic</td>
                        <td className="p-4 text-primary font-semibold">Automated, streamlined</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Premium Positioning</td>
                        <td className="p-4 text-muted-foreground">Basic accommodation</td>
                        <td className="p-4 text-primary font-semibold">Modern living experience</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              From Basic PG to Premium Coliving in Just 2 Weeks
            </h2>
            <p className="text-lg text-muted-foreground">Simple 3-Step Process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <Card className="relative">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
              </div>
              <CardHeader className="pt-8">
                <CardTitle>Assessment & Setup</CardTitle>
                <CardDescription>Week 1, Days 1-5</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">What We Do:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Current dining operation analysis</li>
                    <li>• Resident preference survey and database setup</li>
                    <li>• Kitchen workflow optimization planning</li>
                    <li>• Mobile app customization for your brand</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What You Get:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Tailored system configuration</li>
                    <li>• Resident onboarding strategy</li>
                    <li>• Kitchen staff training materials</li>
                    <li>• Branded mobile app for residents</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="relative">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
              </div>
              <CardHeader className="pt-8">
                <CardTitle>Pilot & Training</CardTitle>
                <CardDescription>Week 1, Days 6-7 + Week 2, Days 1-3</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">What We Do:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Limited resident group testing</li>
                    <li>• Kitchen staff and management training</li>
                    <li>• Payment integration setup</li>
                    <li>• Fine-tuning based on initial feedback</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What You Get:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Confident system operation</li>
                    <li>• Trained kitchen and admin staff</li>
                    <li>• Resident adoption guidelines</li>
                    <li>• Performance monitoring dashboard</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="relative">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
              </div>
              <CardHeader className="pt-8">
                <CardTitle>Full Launch</CardTitle>
                <CardDescription>Week 2, Days 4-7</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">What We Do:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Complete system activation for all residents</li>
                    <li>• Real-time support during initial days</li>
                    <li>• Success metrics tracking setup</li>
                    <li>• Ongoing optimization recommendations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What You Get:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Fully operational smart dining system</li>
                    <li>• Immediate cost savings visibility</li>
                    <li>• Enhanced resident satisfaction</li>
                    <li>• Competitive advantage in the market</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary" />
                Implementation Guarantee
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                <strong>Success Promise:</strong> See improved resident satisfaction and reduced food costs within 30 days, or we'll optimize the system at no additional cost.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Coliving-Specific Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Modern Professional Living
            </h2>
            <p className="text-lg text-muted-foreground">Unique Coliving Features</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Flexible Scheduling */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Flexible Scheduling & Timing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Shift-Based Meal Planning:</strong> Accommodate IT professionals, healthcare workers, and varied schedules</li>
                  <li>• <strong>Weekend Special Menus:</strong> Different dining experiences for leisure days</li>
                  <li>• <strong>Late-Night Options:</strong> Meal availability tracking for night shift workers</li>
                  <li>• <strong>Holiday Coordination:</strong> Special arrangements during festivals and celebrations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Guest Management */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Guest & Visitor Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Guest Meal Booking:</strong> Easy guest meal arrangement and billing</li>
                  <li>• <strong>Corporate Client Catering:</strong> Handle business meeting meals</li>
                  <li>• <strong>Family Visit Coordination:</strong> Special meal arrangements for visiting families</li>
                  <li>• <strong>Event Meal Planning:</strong> Birthday parties, celebrations, and group events</li>
                </ul>
              </CardContent>
            </Card>

            {/* Premium Experience */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Premium Resident Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Dietary Customization:</strong> Individual preference tracking and accommodation</li>
                  <li>• <strong>Nutrition Monitoring:</strong> Health-conscious meal planning and tracking</li>
                  <li>• <strong>Community Features:</strong> Resident meal voting and suggestion systems</li>
                  <li>• <strong>Loyalty Programs:</strong> Reward long-term residents with dining perks</li>
                </ul>
              </CardContent>
            </Card>

            {/* Business Intelligence */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Business Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Occupancy Correlation:</strong> Meal satisfaction impact on retention rates</li>
                  <li>• <strong>Revenue Optimization:</strong> Identify upselling opportunities and premium services</li>
                  <li>• <strong>Market Positioning:</strong> Benchmarking against competitor offerings</li>
                  <li>• <strong>Resident Lifecycle:</strong> Meal plan adoption patterns and preferences</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Integration Capabilities */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Property Management Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Room allocation and lease integration</li>
                  <li>• Resident check-in/check-out meal plan automation</li>
                  <li>• Rent and meal plan consolidated billing</li>
                  <li>• Maintenance schedule coordination with meal services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Communication Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• WhatsApp integration for meal notifications</li>
                  <li>• Email automation for weekly menus</li>
                  <li>• In-app messaging for special announcements</li>
                  <li>• Social community features for residents</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & ROI */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Affordable Investment with Immediate Returns
            </h2>
            <p className="text-lg text-muted-foreground">Coliving-Specific Pricing</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Complete meal management platform
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Resident and kitchen staff mobile apps
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Guest meal booking system
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Dietary preference management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      WhatsApp and email integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Monthly business intelligence reports
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle>ROI Preview for 50-Bed Coliving Space</CardTitle>
                  <CardDescription>Monthly Investment: Contact for pricing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Retention Improvement:</span>
                      <span className="text-sm font-semibold text-primary">₹2L+ saved</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Food Cost Reduction:</span>
                      <span className="text-sm font-semibold text-primary">₹45K+ monthly</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Premium Positioning:</span>
                      <span className="text-sm font-semibold text-primary">₹15K+ additional</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Operational Efficiency:</span>
                      <span className="text-sm font-semibold text-primary">₹25K+ value</span>
                    </div>
                    <hr className="border-primary/20" />
                    <div className="flex justify-between font-bold">
                      <span>Total Monthly Benefit:</span>
                      <span className="text-primary">₹2.85L+</span>
                    </div>
                    <div className="text-center text-sm text-primary font-semibold">
                      Annual ROI: 400-600% return
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Coliving Space?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join leading coliving operators already increasing occupancy rates and resident satisfaction with smart dining experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Option 1 */}
            <Card>
              <CardHeader>
                <CardTitle>Option 1: Free Assessment</CardTitle>
                <CardDescription>90-minute consultation • Completely free • Schedule within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">What's Included:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  <li>• Current dining operation analysis</li>
                  <li>• Resident satisfaction opportunity assessment</li>
                  <li>• Competitive positioning evaluation</li>
                  <li>• Custom ROI calculation for your space</li>
                </ul>
                <Button className="w-full">
                  <Target className="w-4 h-4 mr-2" />
                  Get Free Assessment
                </Button>
              </CardContent>
            </Card>

            {/* Option 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Option 2: Live Demo</CardTitle>
                <CardDescription>30-minute video call • Free • Available daily</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">What's Included:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  <li>• Platform walkthrough with coliving scenarios</li>
                  <li>• Resident and kitchen app demonstration</li>
                  <li>• Guest management system showcase</li>
                  <li>• Q&A with coliving specialists</li>
                </ul>
                <Button variant="outline" className="w-full">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Schedule Live Demo
                </Button>
              </CardContent>
            </Card>

            {/* Option 3 */}
            <Card>
              <CardHeader>
                <CardTitle>Option 3: Pilot Program</CardTitle>
                <CardDescription>30-day trial • Setup costs only • 2-week implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">What's Included:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  <li>• 30-day trial with complete setup</li>
                  <li>• Resident onboarding support</li>
                  <li>• Performance monitoring and optimization</li>
                  <li>• Success measurement and reporting</li>
                </ul>
                <Button variant="outline" className="w-full">
                  <Zap className="w-4 h-4 mr-2" />
                  Start Pilot Program
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div>
                  <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Coliving Solutions Team</p>
                  <p className="text-muted-foreground">coliving@mealpe.app</p>
                </div>
                <div>
                  <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Phone Consultation</p>
                  <p className="text-muted-foreground">Request callback</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  Response Time: Within 2 hours • Available: Monday-Saturday, 9 AM - 8 PM IST
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Transform Your Coliving Business Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-6 max-w-3xl mx-auto">
            Stop losing residents to competitors. Start offering the dining experience modern professionals expect.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8">
            <strong>Limited Time Offer:</strong> Free business assessment + implementation discount for coliving spaces starting this quarter.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center text-primary-foreground/90">
              <Phone className="w-4 h-4 mr-2" />
              Schedule 15-min call with coliving specialist
            </div>
            <div className="flex items-center text-primary-foreground/90">
              <Mail className="w-4 h-4 mr-2" />
              Get instant ROI calculator via email
            </div>
          </div>
          
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <ArrowRight className="w-5 h-5 mr-2" />
            Start Transformation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};