import { CartoonButton } from "@/components/CartoonButton";
import { ComicPanel } from "@/components/ComicPanel";
import { MenuCard } from "@/components/MenuCard";
import { SteamEffect } from "@/components/SteamEffect";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Star, Home, Users, Truck, Award, Heart, Phone, ArrowRight, ChefHat, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

// Import cartoon images
import heroChef from "@/assets/hero-chef.webp";
import kitchenScene from "@/assets/kitchen-scene.webp";
import biryaniCartoon from "@/assets/biryani-cartoon.webp";
import curryCartoon from "@/assets/curry-cartoon.webp";
import happyCustomer from "@/assets/happy-customer.webp";
import goatMascot from "@/assets/goat-mascot.webp";

const Index = () => {
  const [cart, setCart] = useState<string[]>([]);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 64; // Height of fixed navigation
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
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 sm:top-16 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 bg-spice-yellow rounded-full animate-bounce"></div>
          <div className="absolute top-32 sm:top-40 right-4 sm:right-20 w-10 sm:w-16 h-10 sm:h-16 bg-spice-orange rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-4 sm:left-20 w-8 sm:w-12 h-8 sm:h-12 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          {/* Mascot */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <img 
              src={goatMascot} 
              alt="Kaatil Mutton Mascot" 
              className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 wobble"
            />
          </div>
          
          {/* Main Title */}
          <h1 className="font-cartoon text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground mb-4 sm:mb-6 text-glow leading-tight">
            <span className="block">KAATIL</span>
            <span className="block text-spice-yellow text-bouncy mt-2">MUTTON</span>
          </h1>
          
          {/* Tagline */}
          <div className="speech-bubble bg-card/90 inline-block mb-6 sm:mb-8 mx-4">
            <p className="font-cartoon text-lg sm:text-2xl md:text-3xl text-accent px-2">
              Taste That Slays! 💥
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative mb-6 sm:mb-8 px-4">
            <img 
              src={heroChef} 
              alt="Happy Chef with Mutton" 
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto rounded-2xl sm:rounded-3xl border-4 border-accent shadow-pop"
              loading="eager"
            />
            <SteamEffect className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2" />
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <CartoonButton
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('menu')}
              fullWidth
              icon={<ChefHat className="w-6 h-6" />}
              iconPosition="left"
              animation="bounce"
              className="sm:w-auto"
            >
              Order Now! 🔥
            </CartoonButton>
            
            <CartoonButton
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('about')}
              fullWidth
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              className="sm:w-auto"
            >
              Our Story
            </CartoonButton>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <ComicPanel className="p-4 sm:p-6">
                <h2 className="font-cartoon text-3xl sm:text-4xl text-accent mb-4 sm:mb-6 text-center md:text-left">Our Story</h2>
                <p className="font-comic text-base sm:text-lg text-card-foreground leading-relaxed mb-4">
                  From our cozy kitchen to your heart! We're passionate about bringing you 
                  the most <span className="text-primary font-bold">authentic homestyle</span> mutton 
                  dishes that'll make you say "WOW!" 
                </p>
                <p className="font-comic text-base sm:text-lg text-card-foreground leading-relaxed mb-6">
                  Every dish is prepared with <span className="text-spice-orange font-bold">pure ingredients</span> and 
                  loads of love, just like mom used to make! 
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="flex items-center gap-2 bg-spice-yellow px-3 py-2 rounded-full shadow-cartoon">
                    <Home className="w-4 h-4" />
                    <span className="font-cartoon text-sm">Homestyle</span>
                  </div>
                  <div className="flex items-center gap-2 bg-spice-orange px-3 py-2 rounded-full shadow-cartoon">
                    <Heart className="w-4 h-4" />
                    <span className="font-cartoon text-sm">Made with Love</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary px-3 py-2 rounded-full shadow-cartoon text-primary-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="font-cartoon text-sm">Fresh Daily</span>
                  </div>
                </div>
              </ComicPanel>
            </div>
            
            <div className="relative order-1 md:order-2">
              <img 
                src={kitchenScene} 
                alt="Our Kitchen" 
                className="w-full rounded-2xl sm:rounded-3xl border-4 border-accent shadow-cartoon"
                loading="lazy"
              />
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 speech-bubble bg-primary text-primary-foreground">
                <span className="font-cartoon text-sm sm:text-base">Sizzling Hot! 🔥</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-cartoon text-3xl sm:text-4xl md:text-5xl text-accent mb-4 sm:mb-6">Our Specialties</h2>
            <ComicPanel variant="speech" className="inline-block mx-4">
              <p className="font-comic text-base sm:text-lg">Cartoon-delicious dishes that'll blow your mind! 🤯</p>
            </ComicPanel>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <MenuCard
              title="Spicy Mutton Curry"
              description="Rich, thick gravy with tender mutton pieces that melt in your mouth! Extra spicy for the brave hearts! 🌶️"
              image={curryCartoon}
              price="₹299"
              rating={4.9}
              onAddToCart={() => handleAddToCart('Spicy Mutton Curry')}
            />
            
            <MenuCard
              title="Dum Biryani Feast"
              description="Fragrant basmati rice with succulent mutton, slow-cooked to perfection! Rice grains that dance on your tongue! 🍚"
              image={biryaniCartoon}
              price="₹349"
              rating={4.8}
              onAddToCart={() => handleAddToCart('Dum Biryani Feast')}
            />
            
            <MenuCard
              title="Kaatil Special"
              description="Our signature dish that's so good, it's literally killer! Secret recipe passed down generations! 😱"
              image={curryCartoon}
              price="₹399"
              rating={5.0}
              onAddToCart={() => handleAddToCart('Kaatil Special')}
              className="sm:col-span-2 lg:col-span-1"
            />
          </div>
          
          {/* View All Menu CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <CartoonButton
              variant="spice"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              animation="wiggle"
            >
              View Full Menu
            </CartoonButton>
          </div>
        </div>
      </section>

      {/* Button Showcase Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-cartoon text-3xl sm:text-4xl md:text-5xl text-accent mb-4">Interactive Experience</h2>
            <ComicPanel variant="speech" className="inline-block mx-4">
              <p className="font-comic text-base sm:text-lg">Experience our enhanced button interactions! 🎆</p>
            </ComicPanel>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Primary Actions */}
            <ComicPanel className="p-6 text-center space-y-4">
              <h3 className="font-cartoon text-xl text-accent mb-4">Primary Actions</h3>
              <div className="space-y-3">
                <CartoonButton
                  variant="hero"
                  size="default"
                  fullWidth
                  animation="bounce"
                >
                  Hero Button
                </CartoonButton>
                <CartoonButton
                  variant="success"
                  size="default"
                  fullWidth
                  icon={<Heart className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Success
                </CartoonButton>
              </div>
            </ComicPanel>

            {/* Secondary Actions */}
            <ComicPanel className="p-6 text-center space-y-4">
              <h3 className="font-cartoon text-xl text-accent mb-4">Secondary</h3>
              <div className="space-y-3">
                <CartoonButton
                  variant="spice"
                  size="default"
                  fullWidth
                  animation="pulse"
                >
                  Spice Variant
                </CartoonButton>
                <CartoonButton
                  variant="outline"
                  size="default"
                  fullWidth
                >
                  Outline Style
                </CartoonButton>
              </div>
            </ComicPanel>

            {/* Subtle Actions */}
            <ComicPanel className="p-6 text-center space-y-4">
              <h3 className="font-cartoon text-xl text-accent mb-4">Subtle</h3>
              <div className="space-y-3">
                <CartoonButton
                  variant="soft"
                  size="default"
                  fullWidth
                  animation="float"
                >
                  Soft Touch
                </CartoonButton>
                <CartoonButton
                  variant="ghost"
                  size="default"
                  fullWidth
                >
                  Ghost Mode
                </CartoonButton>
              </div>
            </ComicPanel>

            {/* State Actions */}
            <ComicPanel className="p-6 text-center space-y-4">
              <h3 className="font-cartoon text-xl text-accent mb-4">States</h3>
              <div className="space-y-3">
                <CartoonButton
                  variant="warning"
                  size="default"
                  fullWidth
                  icon={<Clock className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Warning
                </CartoonButton>
                <CartoonButton
                  variant="danger"
                  size="default"
                  fullWidth
                >
                  Danger
                </CartoonButton>
              </div>
            </ComicPanel>
          </div>

          {/* Size Variations */}
          <div className="mt-12 sm:mt-16">
            <ComicPanel className="p-6">
              <h3 className="font-cartoon text-2xl text-accent mb-6 text-center">Size Variations</h3>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CartoonButton variant="hero" size="xs">XS Button</CartoonButton>
                <CartoonButton variant="hero" size="sm">Small</CartoonButton>
                <CartoonButton variant="hero" size="default">Default</CartoonButton>
                <CartoonButton variant="hero" size="lg">Large</CartoonButton>
                <CartoonButton variant="hero" size="xl">Extra Large</CartoonButton>
                <CartoonButton variant="hero" size="xxl" className="hidden sm:inline-flex">XXL</CartoonButton>
              </div>
            </ComicPanel>
          </div>

          {/* Interactive Features Demo */}
          <div className="mt-12 sm:mt-16">
            <ComicPanel className="p-6">
              <h3 className="font-cartoon text-2xl text-accent mb-6 text-center">Special Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <CartoonButton
                  variant="hero"
                  size="lg"
                  fullWidth
                  loading={false}
                  icon={<Star className="w-5 h-5" />}
                  iconPosition="left"
                  rounded
                >
                  Rounded Style
                </CartoonButton>
                
                <CartoonButton
                  variant="spice"
                  size="lg"
                  fullWidth
                  icon={<Users className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Icon Right
                </CartoonButton>
                
                <CartoonButton
                  variant="outline"
                  size="lg"
                  fullWidth
                  animation="wiggle"
                >
                  Animated Hover
                </CartoonButton>
              </div>
            </ComicPanel>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-spice">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-cartoon text-3xl sm:text-4xl md:text-5xl text-accent mb-4">Why Choose Us?</h2>
            <p className="font-comic text-base sm:text-lg text-card-foreground max-w-2xl mx-auto">
              We're not just another restaurant – we're your neighborhood's flavor champions! 🏆
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Home, title: "Homestyle Cooking", desc: "Just like mama's!", color: "bg-spice-yellow" },
              { icon: Award, title: "Premium Quality", desc: "Only the finest ingredients!", color: "bg-spice-orange" },
              { icon: Users, title: "Happy Customers", desc: "10,000+ satisfied foodies!", color: "bg-primary" },
              { icon: Truck, title: "Fast Delivery", desc: "Hot & fresh to your door!", color: "bg-secondary" }
            ].map((item, index) => (
              <ComicPanel key={index} className="text-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer p-4 sm:p-6">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-pop`}>
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h3 className="font-cartoon text-lg sm:text-xl text-accent mb-2">{item.title}</h3>
                <p className="font-comic text-sm sm:text-base text-card-foreground">{item.desc}</p>
              </ComicPanel>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center text-center md:text-left">
            <div className="order-2 md:order-1">
              <img 
                src={happyCustomer} 
                alt="Happy Customer" 
                className="w-full max-w-sm sm:max-w-md mx-auto rounded-2xl sm:rounded-3xl border-4 border-accent shadow-pop"
                loading="lazy"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="font-cartoon text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-4 sm:mb-6 text-glow leading-tight">
                Homestyle Taste,<br/>
                <span className="text-spice-yellow">Killer Flavor!</span>
              </h2>
              
              <ComicPanel variant="speech" className="mb-6 sm:mb-8 bg-card/90 mx-auto md:mx-0 max-w-md">
                <p className="font-comic text-sm sm:text-base md:text-lg text-accent">
                  "Join thousands of happy customers who can't get enough of our 
                  mouth-watering mutton dishes! Every bite is a flavor explosion! 💥"
                </p>
              </ComicPanel>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <CartoonButton 
                    variant="hero" 
                    size="lg"
                    className="text-lg sm:text-xl w-full sm:w-auto"
                    onClick={() => scrollToSection('menu')}
                  >
                    Order Now! 🛒
                  </CartoonButton>
                  
                  <CartoonButton 
                    variant="outline" 
                    size="lg"
                    className="text-lg sm:text-xl w-full sm:w-auto"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </CartoonButton>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-primary-foreground">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-spice-yellow text-spice-yellow" />
                    <span className="font-comic text-sm sm:text-base">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="font-comic text-sm sm:text-base">10k+ Orders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-comic text-sm sm:text-base">30min Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
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
                  href="tel:+919876543210" 
                  className="block hover:text-spice-yellow transition-colors flex items-center justify-center sm:justify-start gap-2"
                >
                  📱 +91 9876543210
                </a>
                <a 
                  href="mailto:order@kaatilmutton.com" 
                  className="block hover:text-spice-yellow transition-colors flex items-center justify-center sm:justify-start gap-2"
                >
                  📧 order@kaatilmutton.com
                </a>
                <p className="flex items-center justify-center sm:justify-start gap-2">📍 Mumbai, India</p>
              </div>
            </div>
            
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h3 className="font-cartoon text-lg sm:text-xl mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <CartoonButton key={social} variant="outline" size="xs" className="text-xs">
                    {social}
                  </CartoonButton>
                ))}
              </div>
              
              {/* Quick Order Button */}
              <div className="mt-6">
                <CartoonButton 
                  variant="hero" 
                  size="sm" 
                  className="w-full sm:w-auto"
                  onClick={() => scrollToSection('menu')}
                >
                  🔥 Quick Order
                </CartoonButton>
              </div>
            </div>
          </div>
          
          <div className="border-t border-accent-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="font-comic text-sm sm:text-base">
              © 2024 Kaatil Mutton. All rights reserved. Made with ❤️ and spices!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
