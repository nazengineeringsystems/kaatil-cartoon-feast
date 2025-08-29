import { ComicPanel } from "@/components/ComicPanel";
import { CartoonButton } from "@/components/CartoonButton";
import { ArrowLeft, Heart, Award, Users, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

// Import founder image
const founderImage = "/lovable-uploads/fa2fde37-2268-4f6b-ae4e-1df7f30c47eb.png";

const Founder = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero py-6">
        <div className="container mx-auto px-4">
          <Link to="/">
            <CartoonButton variant="outline" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </CartoonButton>
          </Link>
          <h1 className="font-cartoon text-5xl md:text-6xl text-primary-foreground text-center text-glow">
            Meet Our Founder
          </h1>
        </div>
      </header>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <ComicPanel className="mb-8">
                <h2 className="font-cartoon text-4xl text-accent mb-6">
                  The Man Behind the Magic
                </h2>
                <p className="font-comic text-lg text-card-foreground leading-relaxed mb-4">
                  Meet our passionate founder who turned his love for authentic mutton dishes 
                  into a culinary revolution! With years of experience perfecting traditional 
                  recipes, he brings you the <span className="text-primary font-bold">ultimate taste experience</span>.
                </p>
                <p className="font-comic text-lg text-card-foreground leading-relaxed mb-4">
                  Starting from a small kitchen with big dreams, our founder's vision was simple: 
                  bring the <span className="text-spice-orange font-bold">authentic homestyle flavors</span> that 
                  everyone craves but can rarely find.
                </p>
                <p className="font-comic text-lg text-card-foreground leading-relaxed">
                  Every recipe at Katil Mutton carries his personal touch, ensuring that each dish 
                  tells a story of passion, tradition, and <span className="text-primary font-bold">killer taste!</span>
                </p>
              </ComicPanel>

              {/* Founder Stats */}
              <div className="grid grid-cols-2 gap-4">
                <ComicPanel className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <Utensils className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="font-cartoon text-2xl text-accent">15+</div>
                  <div className="font-comic text-sm text-card-foreground">Years Experience</div>
                </ComicPanel>
                
                <ComicPanel className="text-center">
                  <div className="w-12 h-12 bg-spice-orange rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="font-cartoon text-2xl text-accent">100+</div>
                  <div className="font-comic text-sm text-card-foreground">Happy Customers</div>
                </ComicPanel>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <ComicPanel className="relative overflow-hidden">
                <img 
                  src={founderImage} 
                  alt="Founder of Katil Mutton"
                  className="w-full h-96 object-cover rounded-lg border-2 border-accent"
                />
                
                <div className="absolute top-4 right-4 speech-bubble bg-spice-orange text-primary-foreground">
                  <span className="font-cartoon text-sm">LOVE YOU BOSS! ❤️</span>
                </div>
                                <div className="mt-4 text-center">
                  <p className="font-comic text-sm text-card-foreground">
                     <span className="font-bold">Late Sh. Nazish Khan</span> (1978-2025)
                  </p>
                </div>
              </ComicPanel>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-spice">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cartoon text-5xl text-accent mb-8">Our Mission</h2>
            
            <ComicPanel variant="speech" className="mb-12 bg-card/90">
              <p className="font-comic text-xl text-accent leading-relaxed">
                "To bring authentic, homestyle mutton dishes to every food lover's table. 
                We believe great food brings people together, and every meal should be a 
                celebration of flavors that create lasting memories!"
              </p>
            </ComicPanel>

            <div className="grid md:grid-cols-3 gap-8">
              <ComicPanel className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-cartoon text-xl text-accent mb-2">Passion</h3>
                <p className="font-comic text-card-foreground">Every dish made with love and dedication</p>
              </ComicPanel>

              <ComicPanel className="text-center">
                <div className="w-16 h-16 bg-spice-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-cartoon text-xl text-accent mb-2">Quality</h3>
                <p className="font-comic text-card-foreground">Only the finest ingredients make the cut</p>
              </ComicPanel>

              <ComicPanel className="text-center">
                <div className="w-16 h-16 bg-spice-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-cartoon text-xl text-accent mb-2">Community</h3>
                <p className="font-comic text-card-foreground">Building connections through great food</p>
              </ComicPanel>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cartoon text-5xl text-primary-foreground mb-6 text-glow">
            Ready to Experience<br/>
            <span className="text-spice-yellow">The Founder's Legacy?</span>
          </h2>
          
          <ComicPanel variant="speech" className="mb-8 bg-card/90 inline-block">
            <p className="font-comic text-lg text-accent">
              Taste the passion, tradition, and killer flavors in every bite!
            </p>
          </ComicPanel>
          
          <Link to="/menu">
            <CartoonButton variant="hero" size="xl" className="text-2xl">
              Explore Our Menu! 🍽️
            </CartoonButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Founder;