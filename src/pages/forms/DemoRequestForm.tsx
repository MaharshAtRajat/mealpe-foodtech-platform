import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { CalendarIcon, Video, Users, Award, Download } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const demoFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter your work email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  companyName: z.string().min(2, "Please enter your organization name"),
  role: z.string().min(1, "Please select your role"),
  industry: z.string().min(1, "Please select your industry"),
  operationSize: z.string().min(1, "Please select your operation size"),
  productInterest: z.string().min(1, "Please select a product option"),
  challenges: z.array(z.string()).optional(),
  demoType: z.string().min(1, "Please select demo type"),
  preferredDate: z.date({
    required_error: "Please select a preferred date",
  }),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  additionalRequirements: z.string().max(300).optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
});

type DemoFormData = z.infer<typeof demoFormSchema>;

const DemoRequestForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      demoType: "video-call",
      challenges: [],
    },
  });

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      toast({
        title: "Demo Scheduled Successfully!",
        description: "Our product expert will contact you within 2 hours to confirm the timing.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <Header />
        <div className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-primary/20 border-primary/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Demo Scheduled Successfully!</h2>
              <p className="text-muted-foreground mb-8">
                Thank you for requesting a MealPe demo. Our product expert will contact you within 2 hours to confirm the timing and send you a calendar invite with video call details. We're excited to show you how MealPe can transform your food service operations!
              </p>
              <Button onClick={() => window.open('/brochure.pdf', '_blank')} size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                Download Product Brochure
              </Button>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const challengeOptions = [
    { id: "food-wastage", label: "High food wastage (30%+ daily)" },
    { id: "long-queues", label: "Long queues and wait times" },
    { id: "manual-processes", label: "Manual attendance/billing processes" },
    { id: "vendor-coordination", label: "Poor vendor coordination" },
    { id: "user-satisfaction", label: "Low user/student satisfaction" },
    { id: "no-analytics", label: "Lack of real-time data/analytics" },
    { id: "payment-issues", label: "Payment processing issues" },
    { id: "no-digital-ordering", label: "No mobile/digital ordering" },
    { id: "budget-planning", label: "Budget planning difficulties" },
    { id: "other", label: "Other challenges" },
  ];

  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 30);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Schedule Your Personalized MealPe Demo
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See exactly how MealPe can transform your food service operations. Book a 30-minute personalized demo with our product experts.
          </p>
        </div>

        <Card className="p-8 lg:p-12 bg-gradient-to-br from-card/50 to-card border-border/50 backdrop-blur-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+91 98765 43210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Organization Profile */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  Organization Profile
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institution/Company Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your organization name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Role *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hostel-warden">Hostel Warden</SelectItem>
                            <SelectItem value="operations-manager">Operations Manager</SelectItem>
                            <SelectItem value="business-owner">Business Owner/Founder</SelectItem>
                            <SelectItem value="it-manager">IT/Technology Manager</SelectItem>
                            <SelectItem value="purchase-manager">Purchase/Procurement Manager</SelectItem>
                            <SelectItem value="food-service-manager">Food Service Manager</SelectItem>
                            <SelectItem value="ceo-director">CEO/Director</SelectItem>
                            <SelectItem value="other">Other Decision Maker</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Industry/Sector *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="university-college">University/College Hostel</SelectItem>
                            <SelectItem value="corporate-office">Corporate Office/Park</SelectItem>
                            <SelectItem value="hospital-healthcare">Hospital/Healthcare Facility</SelectItem>
                            <SelectItem value="coworking-space">Coworking Space</SelectItem>
                            <SelectItem value="coliving-pg">Coliving/PG Accommodation</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing/Industrial</SelectItem>
                            <SelectItem value="hotels">Hotels/Hospitality</SelectItem>
                            <SelectItem value="government">Government Institution</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Current Operation Details */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  Current Operation Details
                </h3>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="operationSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Food Service Size *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your scale" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="small">Small (50-200 people daily)</SelectItem>
                            <SelectItem value="medium">Medium (200-500 people daily)</SelectItem>
                            <SelectItem value="large">Large (500-1000 people daily)</SelectItem>
                            <SelectItem value="very-large">Very Large (1000+ people daily)</SelectItem>
                            <SelectItem value="multiple">Multiple Locations</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="productInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Which MealPe Product interests you most? *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="digital-cafeteria" id="digital-cafeteria" />
                              <Label htmlFor="digital-cafeteria" className="text-sm">
                                MealPe Digital Cafeteria (Corporate/Coworking dining)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="mess-manager" id="mess-manager" />
                              <Label htmlFor="mess-manager" className="text-sm">
                                MealPe Mess Manager (Hostel/Student housing)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="medmeals" id="medmeals" />
                              <Label htmlFor="medmeals" className="text-sm">
                                MealPe MedMeals (Hospital meal management)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="not-sure" id="not-sure" />
                              <Label htmlFor="not-sure" className="text-sm">
                                Not sure - need guidance
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="multiple" id="multiple" />
                              <Label htmlFor="multiple" className="text-sm">
                                Multiple products
                              </Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="challenges"
                    render={() => (
                      <FormItem>
                        <FormLabel>Current Challenges (Select all that apply)</FormLabel>
                        <div className="grid md:grid-cols-2 gap-3">
                          {challengeOptions.map((option) => (
                            <FormField
                              key={option.id}
                              control={form.control}
                              name="challenges"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={option.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(option.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...(field.value || []), option.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== option.id
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">
                                      {option.label}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Demo Preferences */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  Demo Preferences
                </h3>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="demoType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Demo Type *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid gap-3"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="video-call" id="video-call" />
                              <Label htmlFor="video-call">Video call demo (30 minutes)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="on-site" id="on-site" />
                              <Label htmlFor="on-site">On-site demo at our location</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="live-system" id="live-system" />
                              <Label htmlFor="live-system">Live system walkthrough</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="custom-presentation" id="custom-presentation" />
                              <Label htmlFor="custom-presentation">Custom presentation for my team</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Preferred Date for Demo *</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < minDate || date > maxDate
                                }
                                initialFocus
                                className="pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Time Slot *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select preferred time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="10:00">10:00 AM - 10:30 AM</SelectItem>
                              <SelectItem value="11:00">11:00 AM - 11:30 AM</SelectItem>
                              <SelectItem value="12:00">12:00 PM - 12:30 PM</SelectItem>
                              <SelectItem value="14:00">2:00 PM - 2:30 PM</SelectItem>
                              <SelectItem value="15:00">3:00 PM - 3:30 PM</SelectItem>
                              <SelectItem value="16:00">4:00 PM - 4:30 PM</SelectItem>
                              <SelectItem value="17:00">5:00 PM - 5:30 PM</SelectItem>
                              <SelectItem value="18:00">6:00 PM - 6:30 PM</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="additionalRequirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Requirements</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any specific areas you'd like us to focus on during the demo? Current system details? Team members joining?"
                            className="min-h-[100px]"
                            maxLength={300}
                            {...field}
                          />
                        </FormControl>
                        <div className="text-sm text-muted-foreground text-right">
                          {field.value?.length || 0}/300
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Timeline & Budget */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  Timeline & Budget
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Implementation Timeline</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate (Within 1 month)</SelectItem>
                            <SelectItem value="short-term">Short-term (1-3 months)</SelectItem>
                            <SelectItem value="medium-term">Medium-term (3-6 months)</SelectItem>
                            <SelectItem value="long-term">Long-term (6+ months)</SelectItem>
                            <SelectItem value="exploring">Just exploring options</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estimated Budget Range</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Prefer not to disclose" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="not-disclose">Prefer not to disclose</SelectItem>
                            <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                            <SelectItem value="50k-2l">₹50,000 - ₹2,00,000</SelectItem>
                            <SelectItem value="2l-5l">₹2,00,000 - ₹5,00,000</SelectItem>
                            <SelectItem value="5l-plus">₹5,00,000+</SelectItem>
                            <SelectItem value="need-help">Need help determining budget</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full md:w-auto min-w-[200px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Scheduling..." : "Schedule My Demo"}
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  Demo confirmation will be sent within 2 hours
                </p>
              </div>

              {/* Footer */}
              <div className="border-t border-border pt-6">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>What to Expect:</strong> Our product expert will contact you within 2 hours to confirm your demo timing and send calendar invite with video call details.
                  </p>
                </div>
              </div>
            </form>
          </Form>
        </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DemoRequestForm;