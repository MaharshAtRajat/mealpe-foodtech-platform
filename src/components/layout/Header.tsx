import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b-0">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/04947d49-1a7b-4126-86e6-24c86b687433.png" 
            alt="MealPe" 
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary cursor-pointer transition-colors">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card border-primary/20 bg-background/95 backdrop-blur">
                <DropdownMenuItem asChild>
                  <Link to="/products/canteen-digitisation" className="w-full">Canteen / Cafeteria Digitisation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products/mess-digitisation" className="w-full">Mess Digitisation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://medmeals.mealpe.app" target="_blank" rel="noopener noreferrer" className="w-full">MedMeals</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary cursor-pointer transition-colors">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card border-primary/20 bg-background/95 backdrop-blur">
                <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">By Industry</div>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/industry/hostels" className="w-full">Hostels / Student Housing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/industry/coliving" className="w-full">Coliving Space / PGs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/industry/coworking" className="w-full">Coworking Space</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/industry/commercial" className="w-full">Commercial Building</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/industry/corporate" className="w-full">Corporate Park</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/industry/hospital" className="w-full">Hospital / Health Care</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/industry/universities" className="w-full">Universities / Colleges / Schools</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/industry/clubs" className="w-full">Clubs / Golf Courses / Hotels</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/industry/airport" className="w-full">Airport Lounges / Waiting Areas</Link>
                </DropdownMenuItem>
                <div className="border-t my-1"></div>
                <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">By Hardware</div>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/hardware/meal-cards" className="w-full">Meal Cards</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/hardware/self-serving-kiosks" className="w-full">Self Serving Kiosks</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary cursor-pointer transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card border-primary/20 bg-background/95 backdrop-blur">
                <DropdownMenuItem asChild>
                  <Link to="/services/vendor-aggregation" className="w-full">Vendor Aggregation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/canteen-setup" className="w-full">Food Court / Canteen / Cafeteria Setup</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/self-ordering-kiosk" className="w-full">Self Ordering Kiosk</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/campus-food-delivery" className="w-full">Campus Food Delivery</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/food-audit" className="w-full">Food Audit as a Service</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/features" className="text-foreground hover:text-primary cursor-pointer transition-colors">
              Features
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary cursor-pointer transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-foreground hover:glass">Login</Button>
            <Button className="gradient-primary text-white shadow-brand hover:shadow-glow transition-all duration-300">
              Get Demo
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden glass-card border-t-0">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-3">
              <div className="text-foreground py-2 font-medium">Products</div>
              <div className="pl-4 space-y-2">
                <Link to="/products/canteen-digitisation" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Canteen / Cafeteria Digitisation
                </Link>
                <Link to="/products/mess-digitisation" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Mess Digitisation
                </Link>
                <a href="https://medmeals.mealpe.app" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  MedMeals
                </a>
              </div>
              
              <div className="text-foreground py-2 font-medium">Solutions</div>
              <div className="pl-4 space-y-2">
                <div className="text-xs font-semibold text-muted-foreground py-1">By Industry</div>
                <Link to="/solutions/industry/hostels" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Hostels / Student Housing
                </Link>
                <Link to="/solutions/industry/universities" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Universities / Colleges
                </Link>
                <Link to="/solutions/industry/hospital" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Hospital / Health Care
                </Link>
                <div className="text-xs font-semibold text-muted-foreground py-1 pt-2">By Hardware</div>
                <Link to="/solutions/hardware/meal-cards" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Meal Cards
                </Link>
                <Link to="/solutions/hardware/self-serving-kiosks" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Self Serving Kiosks
                </Link>
              </div>
              
              <div className="text-foreground py-2 font-medium">Services</div>
              <div className="pl-4 space-y-2">
                <Link to="/services/vendor-aggregation" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Vendor Aggregation
                </Link>
                <Link to="/services/canteen-setup" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Canteen Setup
                </Link>
                <Link to="/services/campus-food-delivery" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Campus Food Delivery
                </Link>
              </div>
              
              <Link to="/features" className="block text-foreground py-2 font-medium">Features</Link>
              <Link to="/contact" className="block text-foreground py-2 font-medium">Contact</Link>
            </div>
            <div className="space-y-3 pt-4 border-t">
              <Button variant="ghost" className="w-full text-foreground">Login</Button>
              <Button className="w-full gradient-primary text-white">Get Demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};