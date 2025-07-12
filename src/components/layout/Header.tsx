import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
            <span className="text-foreground hover:text-primary cursor-pointer transition-colors">Products</span>
            <span className="text-foreground hover:text-primary cursor-pointer transition-colors">Solutions</span>
            <span className="text-foreground hover:text-primary cursor-pointer transition-colors">Services</span>
            <span className="text-foreground hover:text-primary cursor-pointer transition-colors">Resources</span>
            <span className="text-foreground hover:text-primary cursor-pointer transition-colors">Contact</span>
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
              <div className="text-foreground py-2">Products</div>
              <div className="text-foreground py-2">Solutions</div>
              <div className="text-foreground py-2">Services</div>
              <div className="text-foreground py-2">Resources</div>
              <div className="text-foreground py-2">Contact</div>
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