import { CartoonButton } from "@/components/CartoonButton";
import { ComicPanel } from "@/components/ComicPanel";
import { MenuCard } from "@/components/MenuCard";
import { SteamEffect } from "@/components/SteamEffect";
import { Star, Home, Users, Truck, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";

// Import cartoon images
import heroChef from "@/assets/hero-chef.webp";
import kitchenScene from "@/assets/kitchen-scene.webp";
import biryaniCartoon from "@/assets/biryani-cartoon.webp";
import curryCartoon from "@/assets/curry-cartoon.webp";
import happyCustomer from "@/assets/happy-customer.webp";
import goatMascot from "@/assets/goat-mascot.webp";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-spice-yellow rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-spice-orange rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <img 
              src={goatMascot} 
              alt="Kaatil Mutton Mascot" 
              className="w-24 h-24 wobble"
            />
          </div>
          
          <h1 className="font-cartoon text-6xl md:text-8xl text-primary-foreground mb-4 text-glow">
            KAATIL
            <span className="block text-spice-yellow text-bouncy">MUTTON</span>
          </h1>
          
          <div className="speech-bubble bg-card/90 inline-block mb-8">
            <p className="font-cartoon text-2xl md:text-3xl text-accent">
              Taste That Slays! 💥
            </p>
          </div>
          
          <div className="relative mb-8">
            <img 
              src={heroChef} 
              alt="Happy Chef with Mutton" 
              className="max-w-2xl mx-auto rounded-3xl border-4 border-accent shadow-pop"
            />
            <SteamEffect className="absolute top-4 left-1/2 transform -translate-x-1/2" />
          </div>
          
          <CartoonButton
            variant="hero"
            size="xl"
            onClick={() => scrollToSection('menu')}
            className="animate-bounce"
          >
            Order Now! 🔥
          </CartoonButton>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ComicPanel>
                <h2 className="font-cartoon text-4xl text-accent mb-6">Our Story</h2>
                <p className="font-comic text-lg text-card-foreground leading-relaxed mb-4">
                  From our cozy kitchen to your heart! We're passionate about bringing you 
                  the most <span className="text-primary font-bold">authentic homestyle</span> mutton 
                  dishes that'll make you say "WOW!" 
                </p>
                <p className="font-comic text-lg text-card-foreground leading-relaxed">
                  Every dish is prepared with <span className="text-spice-orange font-bold">pure ingredients</span> and 
                  loads of love, just like mom used to make! 
                </p>
                <div className="flex gap-4 mt-6">
                  <div className="flex items-center gap-2 bg-spice-yellow px-3 py-1 rounded-full">
                    <Home className="w-5 h-5" />
                    <span className="font-cartoon text-sm">Homestyle</span>
                  </div>
                  <div className="flex items-center gap-2 bg-spice-orange px-3 py-1 rounded-full">
                    <Heart className="w-5 h-5" />
                    <span className="font-cartoon text-sm">Made with Love</span>
                  </div>
                </div>
              </ComicPanel>
            </div>
            
            <div className="relative">
              <img 
                src={kitchenScene} 
                alt="Our Kitchen" 
                className="rounded-3xl border-4 border-accent shadow-cartoon"
              />
              <div className="absolute -top-4 -right-4 speech-bubble bg-primary text-primary-foreground">
                <span className="font-cartoon">Sizzling Hot! 🔥</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cartoon text-5xl text-accent mb-4">Our Specialties</h2>
            <ComicPanel variant="speech" className="inline-block">
              <p className="font-comic text-lg">Cartoon-delicious dishes that'll blow your mind! 🤯</p>
            </ComicPanel>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MenuCard
              title="Spicy Mutton Curry"
              description="Rich, thick gravy with tender mutton pieces that melt in your mouth! Extra spicy for the brave hearts! 🌶️"
              image={curryCartoon}
              price="₹299"
            />
            
            <MenuCard
              title="Dum Biryani Feast"
              description="Fragrant basmati rice with succulent mutton, slow-cooked to perfection! Rice grains that dance on your tongue! 🍚"
              image={biryaniCartoon}
              price="₹349"
            />
            
            <MenuCard
              title="Kaatil Special"
              description="Our signature dish that's so good, it's literally killer! Secret recipe passed down generations! 😱"
              image={curryCartoon}
              price="₹399"
              className="md:col-span-2 lg:col-span-1"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-spice">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cartoon text-5xl text-accent mb-4">Why Choose Us?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, title: "Homestyle Cooking", desc: "Just like mama's!" },
              { icon: Award, title: "Premium Quality", desc: "Only the finest ingredients!" },
              { icon: Users, title: "Happy Customers", desc: "10,000+ satisfied foodies!" },
              { icon: Truck, title: "Fast Delivery", desc: "Hot & fresh to your door!" }
            ].map((item, index) => (
              <ComicPanel key={index} className="text-center hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-pop">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-cartoon text-xl text-accent mb-2">{item.title}</h3>
                <p className="font-comic text-card-foreground">{item.desc}</p>
              </ComicPanel>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={happyCustomer} 
                alt="Happy Customer" 
                className="max-w-md mx-auto rounded-3xl border-4 border-accent shadow-pop"
              />
            </div>
            
            <div>
              <h2 className="font-cartoon text-5xl text-primary-foreground mb-6 text-glow">
                Homestyle Taste,<br/>
                <span className="text-spice-yellow">Killer Flavor!</span>
              </h2>
              
              <ComicPanel variant="speech" className="mb-8 bg-card/90">
                <p className="font-comic text-lg text-accent">
                  "Join thousands of happy customers who can't get enough of our 
                  mouth-watering mutton dishes! Every bite is a flavor explosion! 💥"
                </p>
              </ComicPanel>
              
              <div className="space-y-4">
                <CartoonButton variant="hero" size="xl" className="text-2xl">
                  Order Now! 🛒
                </CartoonButton>
                <div className="flex justify-center gap-4">
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <Star className="w-5 h-5 fill-spice-yellow text-spice-yellow" />
                    <span className="font-comic">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <Users className="w-5 h-5" />
                    <span className="font-comic">10k+ Orders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={goatMascot} alt="Logo" className="w-12 h-12" />
                <span className="font-cartoon text-2xl">Kaatil Mutton</span>
              </div>
              <p className="font-comic">
                Bringing you the best homestyle mutton dishes with killer flavors!
              </p>
            </div>
            
            <div>
              <h3 className="font-cartoon text-xl mb-4">Quick Links</h3>
              <div className="space-y-2 font-comic">
                <Link to="/founder" className="block hover:text-spice-yellow transition-colors">
                  👨‍🍳 Meet Our Founder
                </Link>
                <p>📱 +91 9876543210</p>
                <p>📧 order@kaatilmutton.com</p>
                <p>📍 Mumbai, India</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-cartoon text-xl mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <CartoonButton key={social} variant="outline" size="sm">
                    {social}
                  </CartoonButton>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
            <p className="font-comic">© 2024 Kaatil Mutton. All rights reserved. Made with ❤️ and spices!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
