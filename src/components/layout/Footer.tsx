import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smartphone, Play, Globe, Store, Heart } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/lovable-uploads/1ad3bd09-828f-4034-b8b9-f02622dc513d.png" alt="MealPe" className="h-8 w-auto" />
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              The operating system for institutional food services. Digitizing dining experiences across India.
            </p>
            
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
          <h3 className="font-semibold text-white mb-4">Access Our Products</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <Button asChild variant="outline" className="border-white/30 text-white bg-[hsl(13,100%,62%)] hover:bg-[hsl(13,100%,55%)] hover:border-white/50 transition-all duration-300 text-xs sm:text-sm">
              <a href="https://apps.apple.com/in/developer/mealpe/id1711393296" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
                <Smartphone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">iOS App Store</span>
                <span className="sm:hidden">iOS</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white bg-[hsl(13,100%,62%)] hover:bg-[hsl(13,100%,55%)] hover:border-white/50 transition-all duration-300 text-xs sm:text-sm">
              <a href="https://play.google.com/store/apps/developer?id=MealPe&hl=en_IN" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
                <Play className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Google Play</span>
                <span className="sm:hidden">Android</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white bg-[hsl(13,100%,62%)] hover:bg-[hsl(13,100%,55%)] hover:border-white/50 transition-all duration-300 text-xs sm:text-sm">
              <a href="https://web.mealpe.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">User Web App</span>
                <span className="sm:hidden">Web App</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white bg-[hsl(13,100%,62%)] hover:bg-[hsl(13,100%,55%)] hover:border-white/50 transition-all duration-300 text-xs sm:text-sm">
              <a href="https://restaurants.mealpe.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
                <Store className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Vendor Admin</span>
                <span className="sm:hidden">Vendor</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white bg-[hsl(13,100%,62%)] hover:bg-[hsl(13,100%,55%)] hover:border-white/50 transition-all duration-300 text-xs sm:text-sm col-span-2 sm:col-span-1">
              <a href="https://medmeals.mealpe.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
                <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                MedMeals
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-white/60 text-xs sm:text-sm">© 2025 MealPe Online Food Ordering POS Private Limited. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mt-4 sm:mt-0">
            <span className="text-white/60 hover:text-white cursor-pointer text-xs sm:text-sm transition-colors">
              Privacy Policy
            </span>
            <span className="text-white/60 hover:text-white cursor-pointer text-xs sm:text-sm transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>;
};