import { CartoonButton } from "@/components/CartoonButton";
import { ComicPanel } from "@/components/ComicPanel";
import { MenuCard } from "@/components/MenuCard";
import { SteamEffect } from "@/components/SteamEffect";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Star, Home, Users, Truck, Award, Heart, Phone, ArrowRight, ChefHat, Clock, MapPin, Navigation } from "lucide-react";
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

  const handleOrder = (itemName: string) => {
    // Open phone dialer for direct ordering
    window.location.href = `tel:+919876543210`;
    
    // Show confirmation toast
    toast({
      title: "Calling to Order! 📞",
      description: `Get ready to order ${itemName} - we'll take your call right away!`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Mobile Navigation */}
      <MobileNavigation onScrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 mt-4 sm:mt-6 md:mt-8 pb-16 sm:pb-20 md:pb-24 lg:pb-28"
        style={{
          backgroundImage: `url(${heroChef})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-hero/90"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 sm:top-16 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 bg-spice-yellow rounded-full animate-bounce"></div>
          <div className="absolute top-32 sm:top-40 right-4 sm:right-20 w-10 sm:w-16 h-10 sm:h-16 bg-spice-orange rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-4 sm:left-20 w-8 sm:w-12 h-8 sm:h-12 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 sm:px-8 md:px-10 text-center relative z-10">
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
          
          {/* Hero Content Card */}
          <div className="relative mb-6 sm:mb-8 px-4">
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-4 border-accent shadow-pop p-6 sm:p-8 max-w-2xl mx-auto">
              <div className="text-center">
                <SteamEffect className="mx-auto mb-4" />
                <h3 className="font-cartoon text-xl sm:text-2xl text-accent mb-2">Featured Dish</h3>
                <p className="font-comic text-sm sm:text-base text-card-foreground">
                  Authentic homestyle mutton prepared with love! 🍽️
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 max-w-2xl mx-auto">
            <CartoonButton
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('menu')}
              className="w-full sm:w-auto sm:min-w-[200px] order-1"
              icon={<ChefHat className="w-6 h-6" />}
              iconPosition="left"
            >
              Order Now! 🔥
            </CartoonButton>
            
            <Link to="/about">
              <CartoonButton
                variant="outline"
                size="lg"
                className="w-full sm:w-auto sm:min-w-[180px] order-2"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Our Story
              </CartoonButton>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-cream">
        <div className="container mx-auto px-6 sm:px-8 md:px-10">
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
                
                {/* Learn More Button */}
                <div className="mt-6 sm:mt-8 text-center md:text-left">
                  <Link to="/about">
                    <CartoonButton
                      variant="spice"
                      size="sm"
                      className="text-sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      Read Full Story
                    </CartoonButton>
                  </Link>
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
      <section id="menu" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 md:px-10">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2 className="font-cartoon text-3xl sm:text-4xl md:text-5xl text-accent mb-4 sm:mb-6">Our Specialties</h2>
            <ComicPanel variant="speech" className="inline-block mx-4">
              <p className="font-comic text-base sm:text-lg">Delicious dishes that'll blow your mind! 🤯</p>
            </ComicPanel>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <MenuCard
                title="KAATIL COMBO"
                description="Korma + 4 Rumali Roti + Salad + Coke - The perfect combination that'll make your taste buds dance! Ultimate satisfaction guaranteed! 🔥🍽️"
                image={curryCartoon}
                price="₹299"
                originalPrice="₹399"
                rating={5.0}
                onOrder={() => handleOrder('KAATIL COMBO (Korma + 4 Rumali Roti + Salad + Coke)')}
              />
            </div>
          </div>
          
          {/* View All Menu CTA */}
          <div className="text-center mt-16 sm:mt-20 md:mt-24">
            <Link to="/menu">
              <CartoonButton
                variant="spice"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                animation="wiggle"
              >
                View Full Menu
              </CartoonButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-spice">
        <div className="container mx-auto px-6 sm:px-8 md:px-10">
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
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-hero">
        <div className="container mx-auto px-6 sm:px-8 md:px-10">
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
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start max-w-md mx-auto md:mx-0">
                  <CartoonButton 
                    variant="hero" 
                    size="lg"
                    className="text-lg sm:text-xl w-full sm:w-auto sm:min-w-[180px]"
                    onClick={() => scrollToSection('menu')}
                  >
                    Order Now! 🛒
                  </CartoonButton>
                  
                  <CartoonButton 
                    variant="outline" 
                    size="lg"
                    className="text-lg sm:text-xl w-full sm:w-auto sm:min-w-[160px]"
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

      {/* Location & Contact Section */}
      <section id="location" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-cream">
        <div className="container mx-auto px-6 sm:px-8 md:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-cartoon text-3xl sm:text-4xl md:text-5xl text-accent mb-4 sm:mb-6">
              Visit Our Kitchen! 🏠
            </h2>
            <ComicPanel variant="speech" className="inline-block mx-4">
              <p className="font-comic text-base sm:text-lg">
                Come taste the magic at our location! 📍✨
              </p>
            </ComicPanel>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <ComicPanel className="p-6 sm:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  <h3 className="font-cartoon text-2xl sm:text-3xl text-accent">Find Us Here!</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-cartoon text-lg text-accent mb-2">Our Address</h4>
                      <p className="font-comic text-base text-card-foreground leading-relaxed">
                        Shop No. 15, Ground Floor,<br/>
                        Shivaji Nagar, Bandra West,<br/>
                        Mumbai - 400050, Maharashtra
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-spice-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-cartoon text-lg text-accent mb-2">Call Us</h4>
                      <div className="space-y-1">
                        <a href="tel:+919310645115" className="font-comic text-base text-card-foreground hover:text-primary transition-colors">
                          📱 +91 93106 45115
                        </a>
                        <br/>
                        <a href="tel:+912226543210" className="font-comic text-base text-card-foreground hover:text-primary transition-colors">
                          ☎️ 022 2654 3210
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-spice-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-cartoon text-lg text-accent mb-2">Opening Hours</h4>
                      <div className="font-comic text-base text-card-foreground">
                        <p>Monday - Sunday</p>
                        <p className="text-primary font-bold">11:00 AM - 11:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Directions Button */}
                  <div className="pt-4">
                    <a 
                      href="https://maps.google.com/?q=Shivaji+Nagar+Bandra+West+Mumbai+Kaatil+Mutton"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <CartoonButton
                        variant="hero"
                        size="lg"
                        className="w-full"
                        icon={<Navigation className="w-5 h-5" />}
                        iconPosition="left"
                      >
                        Get Directions 🧭
                      </CartoonButton>
                    </a>
                  </div>
                </div>
              </ComicPanel>
            </div>
            
            {/* Embedded Map */}
            <div className="order-1 lg:order-2">
              <ComicPanel className="p-4 sm:p-6 h-full">
                <div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[400px] rounded-xl overflow-hidden border-4 border-accent/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2234567890123!2d72.8261!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c7b123456%3A0x123456789abcdef!2sShivaji%20Nagar%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kaatil Mutton Location - New Delhi, India"
                    className="rounded-lg"
                  />
                  
                  {/* Map Overlay */}
                  <div className="absolute top-4 left-4 speech-bubble bg-primary text-primary-foreground">
                    <span className="font-cartoon text-sm">We're Here! 📍</span>
                  </div>
                </div>
                
                {/* Map Caption */}
                <div className="mt-4 text-center">
                  <p className="font-comic text-sm text-card-foreground">
                    📍 <span className="font-bold">Kaatil Mutton Kitchen</span> - New Delhi, India
                  </p>
                  <p className="font-comic text-xs text-card-foreground/70 mt-1">
                    Easy access by train, bus, or car! 🚊🚌🚗
                  </p>
                </div>
              </ComicPanel>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 sm:mt-16">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <div className="font-cartoon text-lg sm:text-xl text-primary mb-1">5 KM</div>
              <div className="font-comic text-xs sm:text-sm text-card-foreground">Delivery Radius</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-spice-orange rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
              </div>
              <div className="font-cartoon text-lg sm:text-xl text-primary mb-1">30 MIN</div>
              <div className="font-comic text-xs sm:text-sm text-card-foreground">Average Delivery</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-spice-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
              </div>
              <div className="font-cartoon text-lg sm:text-xl text-primary mb-1">PRIME</div>
              <div className="font-comic text-xs sm:text-sm text-card-foreground">Location</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-secondary-foreground" />
              </div>
              <div className="font-cartoon text-lg sm:text-xl text-primary mb-1">24/7</div>
              <div className="font-comic text-xs sm:text-sm text-card-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12 sm:py-16 md:py-20">
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
              © 2025 Kaatil Mutton. All rights reserved. Made with ❤️ and spices!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
