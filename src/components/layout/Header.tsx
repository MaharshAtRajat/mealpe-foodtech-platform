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
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <img 
            src="/lovable-uploads/04947d49-1a7b-4126-86e6-24c86b687433.png" 
            alt="MealPe" 
            className="h-6 sm:h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-4 xl:space-x-6">
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

            {/* Solutions Mega Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary cursor-pointer transition-colors">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card border-primary/20 bg-background/95 backdrop-blur z-50 w-96 p-4">
                <div className="grid grid-cols-2 gap-6">
                  {/* Hardware Section */}
                  <div>
                    <div className="px-2 py-1 text-sm font-semibold text-foreground mb-2">Hardware</div>
                    <div className="space-y-1">
                      <DropdownMenuItem asChild>
                        <Link to="/solutions/hardware/meal-cards" className="w-full text-sm">Meal Cards</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/solutions/hardware/self-serving-kiosks" className="w-full text-sm">Kiosk Food Ordering</Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                  
                  {/* Industry Section */}
                  <div>
                    <div className="px-2 py-1 text-sm font-semibold text-foreground mb-2">Industry</div>
                    <div className="space-y-1">
                      <DropdownMenuItem asChild>
                        <Link to="/solutions/industry/hostels" className="w-full text-sm">Hostels / Student Housing</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/solutions/industry/coliving" className="w-full text-sm">Coliving Space / PGs</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/solutions/industry/coworking" className="w-full text-sm">Coworking Space</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/solutions/industry/commercial" className="w-full text-sm">Commercial Building</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/solutions/industry/corporate" className="w-full text-sm">Corporate Park</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/solutions/industry/hospital" className="w-full text-sm">Hospital / Health Care Centers</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/solutions/industry/universities" className="w-full text-sm">Universities / Colleges / Schools</Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                </div>
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
          <div className="flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
            <Button className="gradient-primary text-white shadow-brand hover:shadow-glow transition-all duration-300 px-4 xl:px-6">
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
        <div className="lg:hidden fixed inset-x-0 top-16 bg-background/95 backdrop-blur-lg border-b border-border/50 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto safe-area-inset">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-1">
              <Link to="/" className="block text-foreground py-3 px-2 font-medium hover:bg-muted/50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block text-foreground py-3 px-2 font-medium hover:bg-muted/50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              
              <div className="py-2">
                <div className="text-foreground py-2 px-2 font-medium text-sm text-primary">Products</div>
                <div className="pl-4 space-y-1">
                  <Link to="/products/canteen-digitisation" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Canteen Digitisation
                  </Link>
                  <Link to="/products/mess-digitisation" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Mess Manager Solution
                  </Link>
                  <a href="https://medmeals.mealpe.app" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors">
                    MedMeals
                  </a>
                </div>
              </div>
              
              <div className="py-2">
                <div className="text-foreground py-2 px-2 font-medium text-sm text-primary">Solutions</div>
                <div className="pl-4 space-y-1">
                  <div className="text-xs font-semibold text-muted-foreground py-1 px-2">Hardware</div>
                  <Link to="/solutions/hardware/meal-cards" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Meal Cards
                  </Link>
                  <Link to="/solutions/hardware/self-serving-kiosks" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Kiosk Food Ordering
                  </Link>
                  <div className="text-xs font-semibold text-muted-foreground py-1 px-2 pt-2">Industry</div>
                  <Link to="/solutions/industry/hostels" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Hostels / Student Housing
                  </Link>
                  <Link to="/solutions/industry/coliving" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Coliving Space / PGs
                  </Link>
                  <Link to="/solutions/industry/coworking" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Coworking Space
                  </Link>
                  <Link to="/solutions/industry/commercial" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Commercial Building
                  </Link>
                  <Link to="/solutions/industry/corporate" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Corporate Park
                  </Link>
                  <Link to="/solutions/industry/hospital" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Hospital / Health Care Centers
                  </Link>
                  <Link to="/solutions/industry/universities" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Universities / Colleges / Schools
                  </Link>
                </div>
              </div>
              
              <div className="py-2">
                <div className="text-foreground py-2 px-2 font-medium text-sm text-primary">Services</div>
                <div className="pl-4 space-y-1">
                  <Link to="/services/vendor-aggregation" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Vendor Aggregation
                  </Link>
                  <Link to="/services/canteen-setup" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Food Court / Canteen / Cafeteria Setup
                  </Link>
                  <Link to="/services/self-ordering-kiosk" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Self Ordering Kiosk
                  </Link>
                  <Link to="/services/campus-food-delivery" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Campus Food Delivery
                  </Link>
                  <Link to="/services/food-audit" className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 hover:bg-muted/30 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Food Audit as a Service
                  </Link>
                </div>
              </div>
              
              <Link to="/resources" className="block text-foreground py-3 px-2 font-medium hover:bg-muted/50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Resources</Link>
              <Link to="/contact" className="block text-foreground py-3 px-2 font-medium hover:bg-muted/50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </div>
            <div className="pt-4 border-t border-border/50 mt-4 pb-safe">
              <Button className="w-full gradient-primary text-white" onClick={() => setIsMenuOpen(false)}>Get Demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};