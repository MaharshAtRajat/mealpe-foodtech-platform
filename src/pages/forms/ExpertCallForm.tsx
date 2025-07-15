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
import { CalendarIcon, PhoneCall, Award, CheckCircle, Download } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const expertCallSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter your professional email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  organizationName: z.string().min(2, "Please enter your organization name"),
  position: z.string().min(2, "Please enter your position"),
  organizationType: z.string().min(1, "Please select your organization type"),
  city: z.string().min(1, "Please enter your city"),
  dailyVolume: z.string().min(1, "Please select your daily volume"),
  currentSetup: z.array(z.string()).min(1, "Please select your current setup"),
  challenges: z.array(z.string()).min(1, "Please select 1-3 main challenges").max(3),
  consultationTopics: z.array(z.string()).min(1, "Please select consultation topics"),
  callDuration: z.string().min(1, "Please select call duration"),
  preferredDate: z.date({
    required_error: "Please select a preferred date",
  }),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  specificQuestions: z.string().max(400).optional(),
  decisionTimeline: z.string().optional(),
  hearAboutUs: z.string().optional(),
});

type ExpertCallData = z.infer<typeof expertCallSchema>;

const ExpertCallForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<ExpertCallData>({
    resolver: zodResolver(expertCallSchema),
    defaultValues: {
      callDuration: "30-minutes",
      currentSetup: [],
      challenges: [],
      consultationTopics: [],
    },
  });

  const onSubmit = async (data: ExpertCallData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      toast({
        title: "Expert Consultation Booked!",
        description: "You'll receive a confirmation call within 2 hours to finalize the timing.",
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
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-primary/20 border-primary/20">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
              <PhoneCall className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Expert Consultation Booked!</h2>
            <p className="text-muted-foreground mb-8">
              Thank you for booking a consultation with our food service expert. You'll receive a confirmation call within 2 hours to finalize the timing. Our expert will also send you a preparation checklist to make the most of your consultation.
            </p>
            
            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-center gap-3 text-sm">
                <PhoneCall className="w-4 h-4 text-primary" />
                <span>Confirmation call within 2 hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Consultation preparation guide via email</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CalendarIcon className="w-4 h-4 text-primary" />
                <span>Calendar invite with call details</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Award className="w-4 h-4 text-primary" />
                <span>Custom ROI analysis during the call</span>
              </div>
            </div>
            
            <Button onClick={() => window.open('/preparation-checklist.pdf', '_blank')} size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Download Preparation Checklist
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  const setupOptions = [
    { id: "in-house-kitchen", label: "In-house kitchen/mess" },
    { id: "external-vendor", label: "External vendor/contractor" },
    { id: "multiple-vendors", label: "Multiple food vendors" },
    { id: "cafeteria", label: "Cafeteria/food court" },
    { id: "vending-machines", label: "Vending machines only" },
    { id: "no-service", label: "No organized food service" },
    { id: "mixed-setup", label: "Mixed setup" },
  ];

  const challengeOptions = [
    { id: "high-wastage", label: "High food wastage and costs" },
    { id: "poor-quality", label: "Poor food quality and variety" },
    { id: "long-queues", label: "Long queues and waiting times" },
    { id: "manual-processes", label: "Manual processes and paperwork" },
    { id: "vendor-management", label: "Vendor management issues" },
    { id: "complaints", label: "Student/employee complaints" },
    { id: "no-visibility", label: "No real-time visibility/data" },
    { id: "payment-billing", label: "Payment and billing complications" },
    { id: "no-digital", label: "Lack of mobile/digital solutions" },
    { id: "budget-planning", label: "Budget planning difficulties" },
    { id: "compliance", label: "Compliance and audit issues" },
    { id: "other", label: "Other challenges" },
  ];

  const consultationTopicOptions = [
    { id: "reduce-wastage", label: "Reducing food wastage and costs" },
    { id: "digital-ordering", label: "Implementing digital ordering systems" },
    { id: "vendor-management", label: "Vendor selection and management" },
    { id: "user-satisfaction", label: "Improving user satisfaction" },
    { id: "tech-integration", label: "Technology integration and setup" },
    { id: "roi-analysis", label: "ROI analysis and budget planning" },
    { id: "compliance", label: "Compliance and best practices" },
    { id: "scaling", label: "Scaling food operations" },
    { id: "benchmarking", label: "Competitive benchmarking" },
    { id: "custom-solution", label: "Custom solution design" },
  ];

  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 14);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Book a Free Consultation with Our Food Service Experts
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized advice on digitizing your food operations. Our experts will provide custom recommendations and ROI analysis for your specific situation.
          </p>
        </div>

        <Card className="p-8 lg:p-12 bg-gradient-to-br from-card/50 to-card border-border/50 backdrop-blur-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Details */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  Personal Details
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
                        <FormLabel>Professional Email *</FormLabel>
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

              {/* Organization Information */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  Organization Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="organizationName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your institution/company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Position/Title *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Operations Manager, Hostel Warden, CEO" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="organizationType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select organization type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="educational">Educational Institution (University/College)</SelectItem>
                            <SelectItem value="corporate">Corporate Office/Business Park</SelectItem>
                            <SelectItem value="healthcare">Healthcare Facility/Hospital</SelectItem>
                            <SelectItem value="coworking">Coworking/Shared Workspace</SelectItem>
                            <SelectItem value="coliving">Coliving/PG Business</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing/Industrial Facility</SelectItem>
                            <SelectItem value="government">Government Institution</SelectItem>
                            <SelectItem value="hospitality">Hospitality/Hotels</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location (City) *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Mumbai, Bangalore, Delhi" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Current Situation Analysis */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  Current Situation Analysis
                </h3>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="dailyVolume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>People Served Daily *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select daily volume" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="50-100">50-100 people</SelectItem>
                            <SelectItem value="100-300">100-300 people</SelectItem>
                            <SelectItem value="300-500">300-500 people</SelectItem>
                            <SelectItem value="500-1000">500-1000 people</SelectItem>
                            <SelectItem value="1000-2000">1000-2000 people</SelectItem>
                            <SelectItem value="2000-plus">2000+ people</SelectItem>
                            <SelectItem value="multiple">Multiple locations</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currentSetup"
                    render={() => (
                      <FormItem>
                        <FormLabel>Current Food Service Setup (Select all that apply) *</FormLabel>
                        <div className="grid md:grid-cols-2 gap-3">
                          {setupOptions.map((option) => (
                            <FormField
                              key={option.id}
                              control={form.control}
                              name="currentSetup"
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

                  <FormField
                    control={form.control}
                    name="challenges"
                    render={() => (
                      <FormItem>
                        <FormLabel>Biggest Challenges (Select top 3) *</FormLabel>
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
                                          const currentValue = field.value || [];
                                          if (checked && currentValue.length >= 3) {
                                            return; // Don't allow more than 3 selections
                                          }
                                          return checked
                                            ? field.onChange([...currentValue, option.id])
                                            : field.onChange(
                                                currentValue.filter(
                                                  (value) => value !== option.id
                                                )
                                              )
                                        }}
                                        disabled={!field.value?.includes(option.id) && (field.value?.length || 0) >= 3}
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
                        <p className="text-sm text-muted-foreground">
                          Selected: {form.watch("challenges")?.length || 0}/3
                        </p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Consultation Preferences */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  Consultation Preferences
                </h3>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="consultationTopics"
                    render={() => (
                      <FormItem>
                        <FormLabel>What would you like expert advice on? (Select all that apply) *</FormLabel>
                        <div className="grid md:grid-cols-2 gap-3">
                          {consultationTopicOptions.map((option) => (
                            <FormField
                              key={option.id}
                              control={form.control}
                              name="consultationTopics"
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

                  <FormField
                    control={form.control}
                    name="callDuration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Call Duration *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid gap-3"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="15-minutes" id="15-minutes" />
                              <Label htmlFor="15-minutes">15 minutes (Quick consultation)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="30-minutes" id="30-minutes" />
                              <Label htmlFor="30-minutes">30 minutes (Detailed discussion)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="45-minutes" id="45-minutes" />
                              <Label htmlFor="45-minutes">45 minutes (Comprehensive analysis)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="1-hour" id="1-hour" />
                              <Label htmlFor="1-hour">1 hour (Complete strategy session)</Label>
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
                          <FormLabel>Preferred Call Date *</FormLabel>
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
                          <FormLabel>Preferred Call Time *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select preferred time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="09:00">9:00 AM - 9:30 AM</SelectItem>
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
                </div>
              </div>

              {/* Additional Context */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  Additional Context
                </h3>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="specificQuestions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specific Questions or Requirements</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any specific questions you'd like our expert to address? Current system details? Upcoming projects or deadlines?"
                            className="min-h-[120px]"
                            maxLength={400}
                            {...field}
                          />
                        </FormControl>
                        <div className="text-sm text-muted-foreground text-right">
                          {field.value?.length || 0}/400
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="decisionTimeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Decision Timeline</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="immediate">Immediate decision required</SelectItem>
                              <SelectItem value="1-month">Within 1 month</SelectItem>
                              <SelectItem value="1-3-months">1-3 months</SelectItem>
                              <SelectItem value="3-6-months">3-6 months</SelectItem>
                              <SelectItem value="6-plus-months">6+ months</SelectItem>
                              <SelectItem value="research">Research phase only</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="hearAboutUs"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How did you hear about MealPe?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select source" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="google">Google search</SelectItem>
                              <SelectItem value="social-media">Social media</SelectItem>
                              <SelectItem value="referral">Referral from colleague</SelectItem>
                              <SelectItem value="event">Industry event/conference</SelectItem>
                              <SelectItem value="news">News/media article</SelectItem>
                              <SelectItem value="partner">Partner recommendation</SelectItem>
                              <SelectItem value="customer">Existing customer</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
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
                  {isSubmitting ? "Booking..." : "Book Free Consultation"}
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  Expert will call you within 2 hours to confirm
                </p>
              </div>

              {/* Expert Promise */}
              <div className="border-t border-border pt-6">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Expert Promise:</strong> Our food service experts have helped 50+ institutions optimize their dining operations. Get personalized advice tailored to your specific situation - completely free.
                  </p>
                </div>
              </div>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default ExpertCallForm;