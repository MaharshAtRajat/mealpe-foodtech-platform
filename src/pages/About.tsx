import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Eye, Users, Award, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
export const About = () => {
  return <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] bg-gradient-to-br from-background via-background to-muted/30 flex items-center px-4 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float opacity-60"></div>
            <div className="absolute bottom-32 right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{
            animationDelay: '2s'
          }}></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Reimagining</span><br />
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Institutional Food Services
                </span><br />
                <span className="text-foreground">with Technology</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                At MealPe, we digitize cafeterias, messes, and hospital meal management to make food service seamless, transparent, and efficient for organizations and their people.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="text-foreground">Our </span>
                  <span className="text-primary">Story</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-12">The journey that started with a simple yet powerful idea</p>
              </div>
              
              <div className="mb-12">
                <img 
                  src="/lovable-uploads/770d3ce0-7c0e-4528-9c74-8b46b33fb193.png"
                  alt="MealPe founders taking a team selfie"
                  className="w-full h-auto rounded-xl mx-auto"
                />
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  Founded in 2023, MealPe was born out of a simple yet powerful idea — to modernize food service operations across institutions. Universities, corporates, and hospitals have long faced challenges of manual meal management, long queues, miscommunication, and food wastage.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  We set out to solve this by creating a tech-first platform that connects administrators, vendors, and users on a single digital ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-8 lg:py-12 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="glass-card border-primary/20">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground text-center leading-relaxed">
                      To simplify and digitize the way institutions manage food services, making them efficient, transparent, and user-friendly.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-primary/20">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground text-center leading-relaxed">
                      To become Asia's leading institutional food-tech operating system, powering cafeterias, messes, and hospital meal programs with intelligent technology.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">What We Do</h2>
                <p className="text-xl text-muted-foreground">Integrated solutions tailored for institutions</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Link to="/products/canteen-digitisation">
                  <Card className="glass-card hover:shadow-brand transition-all duration-300 cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">MealPe Digital Cafeteria</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        A contactless cafeteria management platform for universities, corporates, and co-working spaces.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/products/mess-digitisation">
                  <Card className="glass-card hover:shadow-brand transition-all duration-300 cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">MealPe Mess Manager</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        A mess operations solution that digitizes fixed meal plans, attendance, and food planning.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>

                <a href="https://medmeals.mealpe.app" target="_blank" rel="noopener noreferrer">
                  <Card className="glass-card hover:shadow-brand transition-all duration-300 cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">MealPe MedMeals</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        A hospital-focused meal management platform designed for patients and staff, integrated with dietary prescriptions and hospital systems.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones & Achievements */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Milestones & Achievements</h2>
                <p className="text-xl text-muted-foreground">Our journey in numbers</p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">1 Million</div>
                  <p className="text-muted-foreground">Meals processed across campuses and hospitals</p>
                </div>

                <div className="glass-card p-6 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">12+</div>
                  <p className="text-muted-foreground">Institutions deployed with 50+ vendor partners</p>
                </div>

                <div className="glass-card p-6 text-center">
                  <img 
                    src="/lovable-uploads/e2bf57c9-0ee4-42bc-89f9-9b643745651a.png"
                    alt="SISFS Seed Fund Scheme"
                    className="h-12 w-auto mx-auto mb-2"
                  />
                  <p className="text-muted-foreground">Backed by SISFS</p>
                </div>

                <div className="glass-card p-6 text-center sm:col-span-2 lg:col-span-3">
                  <img 
                    src="/src/assets/i-venture-logo.png"
                    alt="I-Venture Accelerator"
                    className="h-12 w-auto mx-auto mb-2"
                  />
                  <p className="text-muted-foreground">Selected for ISB i-Propel Accelerator Cohort (July 2025)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Founders */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Meet the Founders</h2>
                <p className="text-xl text-muted-foreground">The team behind MealPe</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="glass-card">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20">
                      <img 
                        src="/lovable-uploads/e9ab43f2-a5b7-4fbe-bda0-046b5f91a295.png"
                        alt="Maharsh Shah - Co-Founder & CEO"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl text-foreground">Maharsh Shah</CardTitle>
                    <CardDescription className="text-primary font-medium">Co-Founder & CEO</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      Tech entrepreneur with expertise in enterprise systems and product development. Computer Science graduate from Nirma University.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20">
                      <img 
                        src="/lovable-uploads/da7a1c1d-9349-439a-a69f-1cd5eb7658a0.png"
                        alt="Satya Mehta - Co-Founder & CBO"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl text-foreground">Satya Mehta</CardTitle>
                    <CardDescription className="text-primary font-medium">Co-Founder & CBO</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      Institutional sales leader with 15+ years of experience in education and B2B marketing. Former CEO of RoomPe.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20">
                      <img 
                        src="/lovable-uploads/fc73eae4-95a4-4008-a062-2fc950cec588.png"
                        alt="Deval Patel - Co-Founder & COO"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl text-foreground">Deval Patel</CardTitle>
                    <CardDescription className="text-primary font-medium">Co-Founder & COO</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      Operations and integrations specialist with hands-on experience in large-scale institutional deployments.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Why Choose Us</h2>
                <p className="text-xl text-muted-foreground">What sets MealPe apart</p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="glass-card p-6">
                  <CheckCircle className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">First Mover Advantage</h3>
                  <p className="text-muted-foreground">Pioneering institutional food-tech with niche, tailored solutions.</p>
                </div>

                <div className="glass-card p-6">
                  <Zap className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Scalable Architecture</h3>
                  <p className="text-muted-foreground">Modular, scalable SaaS built for cafeterias, messes, and hospitals.</p>
                </div>

                <div className="glass-card p-6">
                  <CheckCircle className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Deep Integrations</h3>
                  <p className="text-muted-foreground">Hardware-agnostic and integrated with ERPs, HIS, and CRMs.</p>
                </div>

                <div className="glass-card p-6">
                  <CheckCircle className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Proven Traction</h3>
                  <p className="text-muted-foreground">Organic inbound leads with strong SEO presence.</p>
                </div>

                <div className="glass-card p-6 sm:col-span-2 lg:col-span-2">
                  <CheckCircle className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Affordable & Efficient</h3>
                  <p className="text-muted-foreground">Pricing models that deliver significant operational savings for institutions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative overflow-hidden gradient-primary text-white py-12 lg:py-16">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to Transform Your Institution's{" "}
                <span className="text-primary-light">Food Services?</span>
              </h2>
              
              <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Join <span className="font-semibold text-white">8+ institutions</span> already revolutionizing their dining operations with MealPe
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/products/canteen-digitisation">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-brand px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                    Explore Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-brand px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none" />
        </section>
      </main>
      <Footer />
    </>;
};