import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Shield } from "lucide-react";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  companyName: z.string().min(2, "Please enter your organization name"),
  role: z.string().optional(),
  industryType: z.string().min(1, "Please select your industry type"),
  inquiryType: z.string().min(1, "Please select your inquiry type"),
  message: z.string().min(10, "Please provide more details (minimum 10 characters)").max(500),
  contactMethod: z.string().default("email"),
  bestTime: z.string().default("any-time"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      contactMethod: "email",
      bestTime: "any-time",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting MealPe. Our team will review your message and respond within 4 hours during business days.",
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
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Message Sent Successfully!</h2>
            <p className="text-muted-foreground mb-8">
              Thank you for contacting MealPe. Our team will review your message and respond within 4 hours during business days (Mon-Sat, 9 AM - 7 PM IST).
            </p>
            <Button onClick={() => window.location.href = "/products"} size="lg">
              Explore Our Products
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in Touch with MealPe
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question about our products or need help with your food service digitization? We're here to help.
          </p>
        </div>

        <Card className="p-8 lg:p-12 bg-gradient-to-br from-card/50 to-card border-border/50 backdrop-blur-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  Personal Information
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
                        <FormLabel>Email Address *</FormLabel>
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

              {/* Organization Details */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  Organization Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company/Institution Name *</FormLabel>
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
                        <FormLabel>Your Role/Designation</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hostel-warden">Hostel Warden/Manager</SelectItem>
                            <SelectItem value="operations-manager">Operations Manager</SelectItem>
                            <SelectItem value="business-owner">Business Owner</SelectItem>
                            <SelectItem value="it-manager">IT Manager</SelectItem>
                            <SelectItem value="purchase-manager">Purchase Manager</SelectItem>
                            <SelectItem value="ceo-founder">CEO/Founder</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="industryType"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Industry Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="university-college">University/College Hostel</SelectItem>
                            <SelectItem value="corporate-office">Corporate Park/Office</SelectItem>
                            <SelectItem value="hospital-healthcare">Hospital/Healthcare</SelectItem>
                            <SelectItem value="coworking-space">Coworking Space</SelectItem>
                            <SelectItem value="coliving-pg">Coliving/PG Space</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing/Industrial</SelectItem>
                            <SelectItem value="hotels">Hotels/Hospitality</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Inquiry Details */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  Inquiry Details
                </h3>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="inquiryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What can we help you with? *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="product-info">Product Information</SelectItem>
                            <SelectItem value="pricing">Pricing and Plans</SelectItem>
                            <SelectItem value="tech-support">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                            <SelectItem value="media-press">Media and Press</SelectItem>
                            <SelectItem value="career">Career Opportunities</SelectItem>
                            <SelectItem value="general">General Question</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us more about your requirements, current challenges, or any specific questions you have..."
                            className="min-h-[120px]"
                            maxLength={500}
                            {...field}
                          />
                        </FormControl>
                        <div className="text-sm text-muted-foreground text-right">
                          {field.value?.length || 0}/500
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Preferences */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  Preferences
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="contactMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Contact Method</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="email" id="email" />
                              <Label htmlFor="email">Email</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="phone" id="phone" />
                              <Label htmlFor="phone">Phone Call</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="whatsapp" id="whatsapp" />
                              <Label htmlFor="whatsapp">WhatsApp</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="any" id="any" />
                              <Label htmlFor="any">Any method is fine</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bestTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Best Time to Contact</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Any time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="any-time">Any time</SelectItem>
                            <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                            <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
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
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  We'll respond within 4 hours during business days
                </p>
              </div>

              {/* Privacy Notice */}
              <div className="border-t border-border pt-6">
                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Your information is secure and will only be used to respond to your inquiry. 
                    We respect your privacy and won't share your details with third parties.
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

export default ContactForm;