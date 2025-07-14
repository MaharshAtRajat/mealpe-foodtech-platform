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
            <Link to="/" className="text-foreground hover:text-primary cursor-pointer transition-colors">
              Home
            </Link>
            
            <Link to="/about" className="text-foreground hover:text-primary cursor-pointer transition-colors">
              About Us
            </Link>

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary cursor-pointer transition-colors">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card border-primary/20 bg-background/95 backdrop-blur z-50">
                <DropdownMenuItem asChild>
                  <Link to="/products/canteen-digitisation" className="w-full">Canteen Digitisation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products/mess-digitisation" className="w-full">Mess Manager Solution</Link>
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
              <DropdownMenuContent className="glass-card border-primary/20 bg-background/95 backdrop-blur z-50">
                <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">Hardware</div>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/hardware/meal-cards" className="w-full">Meal Cards</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/hardware/self-serving-kiosks" className="w-full">Kiosk Food Ordering</Link>
                </DropdownMenuItem>
                <div className="border-t my-1"></div>
                <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">Industry</div>
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
                  <Link to="/solutions/industry/hospital" className="w-full">Hospital / Health Care Centers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/industry/universities" className="w-full">Universities / Colleges / Schools</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary cursor-pointer transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card border-primary/20 bg-background/95 backdrop-blur z-50">
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

            <Link to="/resources" className="text-foreground hover:text-primary cursor-pointer transition-colors">
              Resources
            </Link>
            
            <Link to="/contact" className="text-foreground hover:text-primary cursor-pointer transition-colors">
              Contact Us
            </Link>
          </div>
          <div className="flex items-center space-x-3">
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
              <Link to="/" className="block text-foreground py-2 font-medium">Home</Link>
              <Link to="/about" className="block text-foreground py-2 font-medium">About Us</Link>
              
              <div className="text-foreground py-2 font-medium">Products</div>
              <div className="pl-4 space-y-2">
                <Link to="/products/canteen-digitisation" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Canteen Digitisation
                </Link>
                <Link to="/products/mess-digitisation" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Mess Manager Solution
                </Link>
                <a href="https://medmeals.mealpe.app" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  MedMeals
                </a>
              </div>
              
              <div className="text-foreground py-2 font-medium">Solutions</div>
              <div className="pl-4 space-y-2">
                <div className="text-xs font-semibold text-muted-foreground py-1">Hardware</div>
                <Link to="/solutions/hardware/meal-cards" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Meal Cards
                </Link>
                <Link to="/solutions/hardware/self-serving-kiosks" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Kiosk Food Ordering
                </Link>
                <div className="text-xs font-semibold text-muted-foreground py-1 pt-2">Industry</div>
                <Link to="/solutions/industry/hostels" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Hostels / Student Housing
                </Link>
                <Link to="/solutions/industry/coliving" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Coliving Space / PGs
                </Link>
                <Link to="/solutions/industry/coworking" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Coworking Space
                </Link>
                <Link to="/solutions/industry/commercial" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Commercial Building
                </Link>
                <Link to="/solutions/industry/corporate" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Corporate Park
                </Link>
                <Link to="/solutions/industry/hospital" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Hospital / Health Care Centers
                </Link>
                <Link to="/solutions/industry/universities" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Universities / Colleges / Schools
                </Link>
              </div>
              
              <div className="text-foreground py-2 font-medium">Services</div>
              <div className="pl-4 space-y-2">
                <Link to="/services/vendor-aggregation" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Vendor Aggregation
                </Link>
                <Link to="/services/canteen-setup" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Food Court / Canteen / Cafeteria Setup
                </Link>
                <Link to="/services/self-ordering-kiosk" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Self Ordering Kiosk
                </Link>
                <Link to="/services/campus-food-delivery" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Campus Food Delivery
                </Link>
                <Link to="/services/food-audit" className="block text-sm text-muted-foreground hover:text-primary py-1">
                  Food Audit as a Service
                </Link>
              </div>
              
              <Link to="/resources" className="block text-foreground py-2 font-medium">Resources</Link>
              <Link to="/contact" className="block text-foreground py-2 font-medium">Contact Us</Link>
            </div>
            <div className="space-y-3 pt-4 border-t">
              <Button className="w-full gradient-primary text-white">Get Demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};