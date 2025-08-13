import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smartphone, Play, Globe, Store, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/1ad3bd09-828f-4034-b8b9-f02622dc513d.png" 
                alt="MealPe" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              The operating system for institutional food services. Digitizing dining experiences across India.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-white/60">Subscribe to our newsletter</p>
              <div className="flex gap-2 max-w-sm">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3 text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors">Digital Cafeteria</li>
              <li className="hover:text-white cursor-pointer transition-colors">Mess Manager</li>
              <li className="hover:text-white cursor-pointer transition-colors">
                <a href="https://medmeals.mealpe.app" target="_blank" rel="noopener noreferrer">MedMeals</a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-3 text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors">Universities</li>
              <li className="hover:text-white cursor-pointer transition-colors">Corporate</li>
              <li className="hover:text-white cursor-pointer transition-colors">Hospitals</li>
              <li className="hover:text-white cursor-pointer transition-colors">Hostels</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors">About</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Press</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>

        {/* Apps Section */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h3 className="font-semibold text-white mb-4">Our Platforms</h3>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              variant="outline" 
              className="border-white/30 text-white bg-[hsl(13,100%,62%)] hover:bg-[hsl(13,100%,55%)] hover:border-white/50 transition-all duration-300"
            >
              <a href="https://apps.apple.com/in/developer/mealpe/id1711393296" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                iOS App Store
              </a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-white/30 text-white bg-[hsl(13,100%,62%)] hover:bg-[hsl(13,100%,55%)] hover:border-white/50 transition-all duration-300"
            >
              <a href="https://play.google.com/store/apps/developer?id=MealPe&hl=en_IN" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                Google Play
              </a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <a href="https://web.mealpe.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                User Web App
              </a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <a href="https://restaurants.mealpe.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Store className="h-4 w-4" />
                Vendor Admin
              </a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <a href="https://medmeals.mealpe.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                MedMeals
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 MealPe. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-white/60 hover:text-white cursor-pointer text-sm transition-colors">
              Privacy Policy
            </span>
            <span className="text-white/60 hover:text-white cursor-pointer text-sm transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};