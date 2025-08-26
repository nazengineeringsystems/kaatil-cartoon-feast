import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Info, Users, Phone } from "lucide-react";
import { CartoonButton } from "./CartoonButton";
import goatMascot from "@/assets/goat-mascot.webp";

interface MobileNavigationProps {
  onScrollToSection: (id: string) => void;
}

export const MobileNavigation = ({ onScrollToSection }: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (sectionId?: string, callback?: () => void) => {
    if (sectionId) {
      onScrollToSection(sectionId);
    }
    if (callback) {
      callback();
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b-4 border-accent shadow-cartoon" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src={goatMascot} 
                alt="Kaatil Mutton restaurant logo featuring cartoon goat mascot" 
                className="w-10 h-10 wobble"
              />
              <span className="font-cartoon text-xl text-accent" role="heading" aria-level={1}>Kaatil</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => onScrollToSection('hero')}
                className="font-comic text-accent hover:text-primary transition-colors flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </button>
              <button 
                onClick={() => onScrollToSection('about')}
                className="font-comic text-accent hover:text-primary transition-colors flex items-center gap-2"
              >
                <Info className="w-4 h-4" />
                About
              </button>
              <button 
                onClick={() => onScrollToSection('menu')}
                className="font-comic text-accent hover:text-primary transition-colors flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Menu
              </button>
              <Link 
                to="/founder"
                className="font-comic text-accent hover:text-primary transition-colors flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Founder
              </Link>
              <CartoonButton 
                variant="hero" 
                size="sm"
                onClick={() => onScrollToSection('menu')}
                animation="pulse"
              >
                Order Now!
              </CartoonButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg border-2 border-accent bg-card shadow-cartoon hover:shadow-pop transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-accent" />
              ) : (
                <Menu className="w-6 h-6 text-accent" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-cream border-l-4 border-accent shadow-pop transform transition-transform duration-300 z-50 md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 space-y-6">
          {/* Menu Header */}
          <div className="flex items-center justify-between border-b-2 border-accent pb-4">
            <div className="flex items-center gap-3">
              <img 
                src={goatMascot} 
                alt="Kaatil Mutton" 
                className="w-12 h-12"
              />
              <div>
                <h2 className="font-cartoon text-xl text-accent">Kaatil Mutton</h2>
                <p className="font-comic text-sm text-muted-foreground">Taste That Slays!</p>
              </div>
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg border-2 border-accent bg-card shadow-cartoon hover:shadow-pop transition-all"
            >
              <X className="w-5 h-5 text-accent" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="space-y-4">
            <button
              onClick={() => handleNavClick('hero')}
              className="w-full flex items-center gap-4 p-3 rounded-xl border-2 border-accent bg-card hover:bg-primary hover:text-primary-foreground transition-all shadow-cartoon hover:shadow-pop group"
            >
              <Home className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              <span className="font-cartoon text-lg">Home</span>
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className="w-full flex items-center gap-4 p-3 rounded-xl border-2 border-accent bg-card hover:bg-primary hover:text-primary-foreground transition-all shadow-cartoon hover:shadow-pop group"
            >
              <Info className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              <span className="font-cartoon text-lg">Our Story</span>
            </button>

            <button
              onClick={() => handleNavClick('menu')}
              className="w-full flex items-center gap-4 p-3 rounded-xl border-2 border-accent bg-card hover:bg-primary hover:text-primary-foreground transition-all shadow-cartoon hover:shadow-pop group"
            >
              <Users className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              <span className="font-cartoon text-lg">Menu</span>
            </button>

            <Link
              to="/founder"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center gap-4 p-3 rounded-xl border-2 border-accent bg-card hover:bg-primary hover:text-primary-foreground transition-all shadow-cartoon hover:shadow-pop group"
            >
              <Users className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              <span className="font-cartoon text-lg">Meet Founder</span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="pt-4 border-t-2 border-accent">
            <CartoonButton
              variant="hero"
              size="lg"
              fullWidth
              animation="bounce"
              onClick={() => handleNavClick('menu')}
            >
              🔥 Order Now!
            </CartoonButton>
          </div>

          {/* Contact Info */}
          <div className="bg-card/50 rounded-xl p-4 border-2 border-accent space-y-2">
            <h3 className="font-cartoon text-lg text-accent mb-2">Quick Contact</h3>
            <div className="space-y-1 font-comic text-sm text-card-foreground">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +91 9876543210
              </p>
              <p>📧 order@kaatilmutton.com</p>
              <p>📍 Mumbai, India</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
