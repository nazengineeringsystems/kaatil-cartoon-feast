import { CartoonButton } from "@/components/CartoonButton";
import { ComicPanel } from "@/components/ComicPanel";
import { MenuCard } from "@/components/MenuCard";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Star, Home, ArrowRight, ChefHat, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

// Import cartoon images
import curryCartoon from "@/assets/curry-cartoon.webp";
import goatMascot from "@/assets/logo_withoutbg.png";

const Menu = () => {
  const [cart, setCart] = useState<string[]>([]);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleAddToCart = (itemName: string) => {
    setCart(prev => [...prev, itemName]);
    toast({
      title: "Added to cart! 🎉",
      description: `${itemName} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Mobile Navigation */}
      <MobileNavigation onScrollToSection={scrollToSection} />
      
      {/* Menu Header Section */}
      <section className="relative bg-gradient-hero overflow-hidden pt-20 sm:pt-24 md:pt-28 mt-4 sm:mt-6 md:mt-8 pb-16 sm:pb-20 md:pb-24">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 sm:top-16 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 bg-spice-yellow rounded-full animate-bounce"></div>
          <div className="absolute top-32 sm:top-40 right-4 sm:right-20 w-10 sm:w-16 h-10 sm:h-16 bg-spice-orange rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-4 sm:left-20 w-8 sm:w-12 h-8 sm:h-12 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 sm:px-8 md:px-10 text-center relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8 text-primary-foreground/80">
            <Link to="/" className="font-comic hover:text-spice-yellow transition-colors">
              <Home className="w-4 h-4 inline mr-1" />
              Home
            </Link>
            <ArrowRight className="w-4 h-4" />
            <span className="font-comic">Menu</span>
          </div>
          
          {/* Page Title */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <img 
              src={goatMascot} 
              alt="Kaatil Mutton Mascot" 
              className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 wobble"
            />
          </div>
          
          <h1 className="font-cartoon text-4xl sm:text-6xl md:text-7xl text-primary-foreground mb-4 sm:mb-6 text-glow">
            OUR MENU
          </h1>
          
          <div className="speech-bubble bg-card/90 inline-block mx-4">
            <p className="font-cartoon text-lg sm:text-2xl md:text-3xl text-accent px-2">
              Killer Combinations! 🔥
            </p>
          </div>
        </div>
      </section>

      {/* Menu Items Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 md:px-10">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2 className="font-cartoon text-3xl sm:text-4xl md:text-5xl text-accent mb-4 sm:mb-6">Available Now</h2>
            <ComicPanel variant="speech" className="inline-block mx-4">
              <p className="font-comic text-base sm:text-lg">Get ready for a flavor explosion! 💥</p>
            </ComicPanel>
          </div>
          
          {/* Current Menu Item */}
          <div className="flex justify-center mb-16 sm:mb-20 md:mb-24">
            <div className="w-full max-w-md">
              <MenuCard
                title="KAATIL COMBO"
                description="Korma + 4 Rumali Roti + Salad + Coke - The perfect combination that'll make your taste buds dance! Ultimate satisfaction guaranteed! 🔥🍽️"
                image={curryCartoon}
                price="₹299"
                originalPrice="₹399"
                rating={5.0}
                onClick={() => window.open("http://wa.me/919310645115?text=Hey%2C%20I%20need%20%22KAATIL%20COMBO%22%20offer", "_blank")}
                className="transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
          
          {/* Coming Soon Section */}
          <div className="text-center">
            <ComicPanel className="inline-block p-8 sm:p-12 max-w-2xl mx-4">
              <div className="mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-spice rounded-full flex items-center justify-center mx-auto mb-4 shadow-pop">
                  <ChefHat className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
                </div>
              </div>
              
              <h3 className="font-cartoon text-2xl sm:text-3xl md:text-4xl text-accent mb-4 sm:mb-6">
                More Dishes Coming Soon!
              </h3>
              
              <p className="font-comic text-base sm:text-lg text-card-foreground leading-relaxed mb-6">
                Our chef is working hard to bring you more <span className="text-primary font-bold">killer combinations</span>! 
                Stay tuned for exciting new mutton dishes that'll blow your mind! 🤯
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                <div className="flex items-center gap-2 bg-spice-yellow px-4 py-2 rounded-full shadow-cartoon">
                  <Clock className="w-4 h-4" />
                  <span className="font-cartoon text-sm">Coming Soon</span>
                </div>
                <div className="flex items-center gap-2 bg-spice-orange px-4 py-2 rounded-full shadow-cartoon">
                  <Star className="w-4 h-4" />
                  <span className="font-cartoon text-sm">New Recipes</span>
                </div>
              </div>
              
              <p className="font-comic text-sm sm:text-base text-muted-foreground">
                Want to be notified when new dishes are available? Follow us on social media! 📱
              </p>
            </ComicPanel>
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-spice">
        <div className="container mx-auto px-6 sm:px-8 md:px-10 text-center">
          <h2 className="font-cartoon text-2xl sm:text-3xl md:text-4xl text-accent mb-6 sm:mb-8">
            Ready to Order?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md mx-auto">
            <CartoonButton
              variant="hero"
              size="lg"
              className="w-full sm:w-auto sm:min-w-[200px]"
              onClick={() => window.open("http://wa.me/919310645115?text=Hey%2C%20I%20need%20%22KAATIL%20COMBO%22%20offer", "_blank")}
            >
              Order Combo Now! 🔥
            </CartoonButton>
            
            <Link to="/">
              <CartoonButton
                variant="outline"
                size="lg"
                className="w-full sm:w-auto sm:min-w-[160px]"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </CartoonButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-6 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                <img src={goatMascot} alt="Logo" className="w-10 sm:w-12 h-10 sm:h-12" />
                <span className="font-cartoon text-xl sm:text-2xl">Kaatil Mutton</span>
              </div>
              <p className="font-comic text-sm sm:text-base leading-relaxed">
                Bringing you the best homestyle mutton dishes with killer flavors!
              </p>
            </div>
            
            <div className="text-center sm:text-left">
              <h3 className="font-cartoon text-lg sm:text-xl mb-4">Quick Contact</h3>
              <div className="space-y-3 font-comic text-sm sm:text-base">
                <Link 
                  to="/founder" 
                  className="block hover:text-spice-yellow transition-colors flex items-center justify-center sm:justify-start gap-2"
                >
                  👨‍🍳 Meet Our Founder
                </Link>
                <a 
                  href="tel:+919310645115" 
                  className="block hover:text-spice-yellow transition-colors flex items-center justify-center sm:justify-start gap-2"
                >
                  📱 +91 93106 45115
                </a>
                <a 
                  href="mailto:kaatilmutton@gmail.com" 
                  className="block hover:text-spice-yellow transition-colors flex items-center justify-center sm:justify-start gap-2"
                >
                  📧 kaatilmutton@gmail.com
                </a>
                <p className="flex items-center justify-center sm:justify-start gap-2">📍 New Delhi, India</p>
              </div>
            </div>
            
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h3 className="font-cartoon text-lg sm:text-xl mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {['Facebook', 'Instagram'].map((social) => (
                  <CartoonButton key={social} variant="outline" size="xs" className="text-xs">
                    {social}
                  </CartoonButton>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-accent-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="font-comic text-sm sm:text-base">
              © 2025 Kaatil Mutton. All rights reserved. Made with ❤️ and spices!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
