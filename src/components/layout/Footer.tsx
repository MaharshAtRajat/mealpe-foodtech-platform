import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smartphone, Play, Globe, Store, Heart } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/lovable-uploads/1ad3bd09-828f-4034-b8b9-f02622dc513d.png" alt="MealPe" className="h-6 sm:h-8 w-auto" />
            </div>
            <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 max-w-md">
              The operating system for institutional food services. Digitizing dining experiences across India.
            </p>
            
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Products</h3>
            <ul className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
              <li className="hover:text-white cursor-pointer transition-colors leading-tight">Digital Cafeteria</li>
              <li className="hover:text-white cursor-pointer transition-colors leading-tight">Mess Manager</li>
              <li className="hover:text-white cursor-pointer transition-colors leading-tight">
                <a href="https://medmeals.mealpe.app" target="_blank" rel="noopener noreferrer">MedMeals</a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Solutions</h3>
            <ul className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
              <li className="hover:text-white cursor-pointer transition-colors leading-tight">Universities</li>
              <li className="hover:text-white cursor-pointer transition-colors leading-tight">Corporate</li>
              <li className="hover:text-white cursor-pointer transition-colors leading-tight">Hospitals</li>
              <li className="hover:text-white cursor-pointer transition-colors leading-tight">Hostels</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
              <li className="hover:text-white cursor-pointer transition-colors leading-tight">About</li>
              <li className="hover:text-white cursor-pointer transition-colors leading-tight">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors leading-tight">Press</li>
              <li className="hover:text-white cursor-pointer transition-colors leading-tight">Contact</li>
            </ul>
          </div>
        </div>

        {/* Apps Section */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Access Our Products</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            <Button asChild variant="outline" className="border-white/30 text-white bg-[hsl(13,100%,62%)] hover:bg-[hsl(13,100%,55%)] hover:border-white/50 transition-all duration-300 text-xs sm:text-sm">
              <a href="https://apps.apple.com/in/developer/mealpe/id1711393296" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-2 justify-center py-2 sm:py-3">
                <Smartphone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="hidden sm:inline">iOS App Store</span>
                <span className="sm:hidden">iOS</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white bg-[hsl(13,100%,62%)] hover:bg-[hsl(13,100%,55%)] hover:border-white/50 transition-all duration-300 text-xs sm:text-sm">
              <a href="https://play.google.com/store/apps/developer?id=MealPe&hl=en_IN" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-2 justify-center py-2 sm:py-3">
                <Play className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="hidden sm:inline">Google Play</span>
                <span className="sm:hidden">Android</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white bg-[hsl(13,100%,62%)] hover:bg-[hsl(13,100%,55%)] hover:border-white/50 transition-all duration-300 text-xs sm:text-sm">
              <a href="https://web.mealpe.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-2 justify-center py-2 sm:py-3">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="hidden sm:inline">User Web App</span>
                <span className="sm:hidden">Web App</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white bg-[hsl(13,100%,62%)] hover:bg-[hsl(13,100%,55%)] hover:border-white/50 transition-all duration-300 text-xs sm:text-sm">
              <a href="https://restaurants.mealpe.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-2 justify-center py-2 sm:py-3">
                <Store className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="hidden sm:inline">Vendor Admin</span>
                <span className="sm:hidden">Vendor</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white bg-[hsl(13,100%,62%)] hover:bg-[hsl(13,100%,55%)] hover:border-white/50 transition-all duration-300 text-xs sm:text-sm col-span-2 sm:col-span-1">
              <a href="https://medmeals.mealpe.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-2 justify-center py-2 sm:py-3">
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                MedMeals
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 sm:gap-0">
          <p className="text-white/60 text-xs sm:text-sm leading-tight">© 2025 MealPe Online Food Ordering POS Private Limited. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 lg:space-x-6 space-y-2 sm:space-y-0">
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