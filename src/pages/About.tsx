import { CartoonButton } from "@/components/CartoonButton";
import { ComicPanel } from "@/components/ComicPanel";
import { SteamEffect } from "@/components/SteamEffect";
import { MobileNavigation } from "@/components/MobileNavigation";
import { ArrowLeft, Heart, Home, Clock, Star, Award, Users, ChefHat, Target, Lightbulb, Zap, MapPin, Navigation, Phone, Truck } from "lucide-react";
import { Link } from "react-router-dom";

// Import cartoon images
import heroChef from "@/assets/hero-chef.webp";
import kitchenScene from "@/assets/kitchen-scene.webp";
import happyCustomer from "@/assets/happy-customer.webp";
import goatMascot from "@/assets/goat-mascot.webp";

const About = () => {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNavigation onScrollToSection={scrollToSection} />
      
      {/* Header */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6 sm:px-8 md:px-10">
          <div className="text-center">
            {/* Back Button */}
            <div className="mb-6 sm:mb-8">
              <Link to="/">
                <CartoonButton
                  variant="outline"
                  size="sm"
                  icon={<ArrowLeft className="w-4 h-4" />}
                  iconPosition="left"
                  className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
                >
                  Back to Home
                </CartoonButton>
              </Link>
            </div>
            
            {/* Mascot */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <img 
                src={goatMascot} 
                alt="Kaatil Mutton Mascot" 
                className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 wobble"
              />
            </div>
            
            {/* Title */}
            <h1 className="font-cartoon text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 sm:mb-6 text-glow">
              ABOUT KAATIL MUTTON
            </h1>
            
            {/* Subtitle */}
            <div className="speech-bubble bg-card/90 inline-block mx-4">
              <p className="font-cartoon text-lg sm:text-xl md:text-2xl text-accent px-2">
                Our Journey to Flavor Perfection! 🏆
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-cream">
        <div className="container mx-auto px-6 sm:px-8 md:px-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 sm:mb-20">
            <div className="order-2 md:order-1">
              <ComicPanel className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  <h2 className="font-cartoon text-2xl sm:text-3xl md:text-4xl text-accent">Our Story</h2>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <p className="font-comic text-base sm:text-lg text-card-foreground leading-relaxed">
                    It all started in a small Delhi kitchen with a <span className="text-primary font-bold">passionate dream</span> - 
                    to bring authentic homestyle mutton to food lovers everywhere! 🏠✨
                  </p>
                  
                  <p className="font-comic text-base sm:text-lg text-card-foreground leading-relaxed">
                    Our founder grew up watching his grandmother create <span className="text-spice-orange font-bold">magical flavors</span> with simple ingredients and lots of love. Those precious recipes became the foundation of Kaatil Mutton!
                  </p>
                  
                  <p className="font-comic text-base sm:text-lg text-card-foreground leading-relaxed">
                    Today, we're proud to carry on that tradition, serving <span className="text-spice-orange font-bold">10,000+ happy customers</span> who have fallen in love with our killer combinations! 💪
                  </p>
                </div>
                
                <div className="mt-6 sm:mt-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-cartoon text-primary mb-2">10K+</div>
                      <div className="text-sm font-comic text-card-foreground">Happy Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-cartoon text-primary mb-2">5★</div>
                      <div className="text-sm font-comic text-card-foreground">Average Rating</div>
                    </div>
                  </div>
                </div>
              </ComicPanel>
            </div>
            
            <div className="relative order-1 md:order-2">
              <img 
                src={heroChef} 
                alt="Our Chef's Story" 
                className="w-full rounded-2xl sm:rounded-3xl border-4 border-accent shadow-cartoon"
                loading="lazy"
              />
              <SteamEffect className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4" />
              <div className="absolute -bottom-4 -left-4 speech-bubble bg-secondary text-secondary-foreground">
                <span className="font-cartoon text-sm sm:text-base">Taste the Love! ❤️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-8 md:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-cartoon text-3xl sm:text-4xl md:text-5xl text-accent mb-4 sm:mb-6">
              Our Mission & Vision
            </h2>
            <ComicPanel variant="speech" className="inline-block mx-4">
              <p className="font-comic text-base sm:text-lg">
                Spreading joy one plate at a time! 🍽️✨
              </p>
            </ComicPanel>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <ComicPanel className="text-center p-6 sm:p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-pop">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
              </div>
              
              <h3 className="font-cartoon text-xl sm:text-2xl md:text-3xl text-accent mb-4">Our Mission</h3>
              
              <p className="font-comic text-base sm:text-lg text-card-foreground leading-relaxed mb-6">
                To deliver <span className="text-primary font-bold">authentic homestyle mutton</span> that brings families together 
                and creates unforgettable dining experiences with every single bite!
              </p>
              
              <div className="space-y-3">
                {[
                  { icon: Heart, text: "Made with Pure Love"},
                  { icon: Home, text: "Homestyle Authentic Recipes"},
                  { icon: Award, text: "Premium Quality Ingredients"}
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-comic text-sm sm:text-base text-card-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </ComicPanel>
            
            {/* Vision */}
            <ComicPanel className="text-center p-6 sm:p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-spice-orange to-spice-yellow rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-pop">
                <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
              </div>
              
              <h3 className="font-cartoon text-xl sm:text-2xl md:text-3xl text-accent mb-4">Our Vision</h3>
              
              <p className="font-comic text-base sm:text-lg text-card-foreground leading-relaxed mb-6">
                To become <span className="text-spice-orange font-bold">Delhi's favorite mutton destination</span> and expand our 
                killer flavors across India, one satisfied customer at a time!
              </p>
              
              <div className="space-y-3">
                {[
                  { icon: Star, text: "Delhi's #1 Mutton Brand" },
                  { icon: Users, text: "Growing Happy Community" },
                  { icon: Zap, text: "Innovation in Every Dish" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 justify-center">
                    <item.icon className="w-5 h-5 text-spice-orange" />
                    <span className="font-comic text-sm sm:text-base text-card-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </ComicPanel>
          </div>
        </div>
      </section>

      {/* What Makes Us Special Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-spice">
        <div className="container mx-auto px-6 sm:px-8 md:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-cartoon text-3xl sm:text-4xl md:text-5xl text-accent mb-4 sm:mb-6">
              What Makes Us Special?
            </h2>
            <p className="font-comic text-base sm:text-lg text-card-foreground max-w-2xl mx-auto">
              We're not just cooking food - we're crafting memories! 🎯
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              { 
                icon: ChefHat, 
                title: "Master Chefs", 
                desc: "Expert hands with years of experience!",
                color: "bg-primary",
                textColor: "text-primary-foreground"
              },
              { 
                icon: Heart, 
                title: "Secret Recipes", 
                desc: "Grandmother's precious family recipes!",
                color: "bg-spice-orange",
                textColor: "text-accent"
              },
              { 
                icon: Star, 
                title: "Fresh Daily", 
                desc: "Prepared fresh every single day!",
                color: "bg-spice-yellow",
                textColor: "text-accent"
              },
              { 
                icon: Clock, 
                title: "Fast Service", 
                desc: "Quick delivery without compromising quality!",
                color: "bg-secondary",
                textColor: "text-secondary-foreground"
              }
            ].map((item, index) => (
              <ComicPanel key={index} className="text-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer p-4 sm:p-6">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-pop`}>
                  <item.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${item.textColor}`} />
                </div>
                <h3 className="font-cartoon text-lg sm:text-xl text-accent mb-2">{item.title}</h3>
                <p className="font-comic text-sm sm:text-base text-card-foreground">{item.desc}</p>
              </ComicPanel>
            ))}
          </div>
          
          <div className="relative">
            <img 
              src={kitchenScene} 
              alt="Our Kitchen" 
              className="w-full max-w-4xl mx-auto rounded-2xl sm:rounded-3xl border-4 border-accent shadow-cartoon"
              loading="lazy"
            />
            <div className="absolute -top-4 -right-4 speech-bubble bg-primary text-primary-foreground">
              <span className="font-cartoon text-sm sm:text-base">Live Kitchen Magic! ✨</span>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Love Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-8 md:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-cartoon text-3xl sm:text-4xl md:text-5xl text-accent mb-4 sm:mb-6">
              Customer Love ❤️
            </h2>
            <ComicPanel variant="speech" className="inline-block mx-4">
              <p className="font-comic text-base sm:text-lg">
                See what our happy customers are saying! 🗣️
              </p>
            </ComicPanel>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={happyCustomer} 
                alt="Happy Customer" 
                className="w-full max-w-md mx-auto rounded-2xl sm:rounded-3xl border-4 border-accent shadow-cartoon"
                loading="lazy"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    quote: "The mutton korma is absolutely divine! It tastes just like my grandmother's recipe. Pure magic! ✨",
                    name: "Priya S.",
                    rating: 5
                  },
                  {
                    quote: "I've tried many mutton dishes, but Kaatil Mutton's combo is something else! Worth every penny! 💯",
                    name: "Rahul M.",
                    rating: 5
                  },
                  {
                    quote: "Fast delivery, hot food, and incredible flavors! This is now my family's favorite restaurant! 🏆",
                    name: "Anjali K.",
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <ComicPanel key={index} className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-spice-yellow text-spice-yellow" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="font-comic text-sm sm:text-base text-card-foreground italic mb-3 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <p className="font-cartoon text-sm text-primary font-bold">
                      - {testimonial.name}
                    </p>
                  </ComicPanel>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 sm:px-8 md:px-10 text-center">
          <h2 className="font-cartoon text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-4 sm:mb-6 text-glow">
            Ready to Experience the Magic?
          </h2>
          
          <ComicPanel variant="speech" className="inline-block mx-4 mb-8 sm:mb-12 bg-card/90">
            <p className="font-comic text-base sm:text-lg text-accent">
              Join thousands of happy customers and taste the difference! 🌟
            </p>
          </ComicPanel>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md mx-auto">
            <Link to="/menu">
              <CartoonButton 
                variant="hero" 
                size="lg"
                className="w-full sm:w-auto sm:min-w-[200px] text-lg"
                icon={<ChefHat className="w-5 h-5" />}
                iconPosition="left"
              >
                Order Now! 🔥
              </CartoonButton>
            </Link>
            
            <Link to="/">
              <CartoonButton 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto sm:min-w-[160px] text-lg text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
                icon={<Home className="w-5 h-5" />}
                iconPosition="left"
              >
                Back Home
              </CartoonButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="py-16 sm:py-20 md:py-24 bg-gradient-spice">
        <div className="container mx-auto px-6 sm:px-8 md:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-cartoon text-3xl sm:text-4xl md:text-5xl text-accent mb-4 sm:mb-6">
              Visit Our Kitchen! 🏠
            </h2>
            <ComicPanel variant="speech" className="inline-block mx-4">
              <p className="font-comic text-base sm:text-lg">
                Come experience our flavors in person! 📍✨
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
                        Gali No 4 and 5, KH. No. 5/3,<br/>
                        Sangam Vihar, Wazirabad,<br/>
                        Delhi - 110084, India
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
                        <a href="tel:+919876543210" className="font-comic text-base text-card-foreground hover:text-primary transition-colors">
                          📱 +91 98765 43210
                        </a>
                        {/* <br/>
                        <a href="tel:+912226543210" className="font-comic text-base text-card-foreground hover:text-primary transition-colors">
                          ☎️ 022 2654 3210
                        </a> */}
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
                    title="Kaatil Mutton Location - Bandra West, Mumbai"
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
                    📍 <span className="font-bold">Kaatil Mutton Kitchen</span> - Bandra West, Mumbai
                  </p>
                  <p className="font-comic text-xs text-card-foreground/70 mt-1">
                    Easy access by train, bus, or car! 🚊🚌🚗
                  </p>
                </div>
              </ComicPanel>
            </div>
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
                <p className="flex items-center justify-center sm:justify-start gap-2">📍 Delhi, India</p>
              </div>
            </div>
            
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h3 className="font-cartoon text-lg sm:text-xl mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {['Facebook', 'Instagram',].map((social) => (
                  <CartoonButton key={social} variant="outline" size="xs" className="text-xs">
                    {social}
                  </CartoonButton>
                ))}
              </div>
              
              {/* Quick Order Button */}
              <div className="mt-6">
                <Link to="https://wa.me/919310645115" target="_blank" rel="noopener noreferrer" className="block">
                  <CartoonButton 
                    variant="hero" 
                    size="sm" 
                    className="w-full sm:w-auto"
                  >
                    🔥 Quick Order
                  </CartoonButton>
                </Link>
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

export default About;
