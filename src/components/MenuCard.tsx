import { ReactNode } from "react";
import { ComicPanel } from "./ComicPanel";
import { SteamEffect } from "./SteamEffect";
import { CartoonButton } from "./CartoonButton";
import { ShoppingCart, Star } from "lucide-react";

interface MenuCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  rating?: number;
  className?: string;
  onAddToCart?: () => void;
}

export const MenuCard = ({ title, description, image, price, rating = 4.8, className, onAddToCart }: MenuCardProps) => {
  return (
    <ComicPanel className={`relative overflow-hidden hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group ${className}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-40 sm:h-48 object-cover rounded-lg border-2 border-accent mb-4 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <SteamEffect className="absolute top-2 left-1/2 transform -translate-x-1/2" />
        
        {/* Rating Badge */}
        <div className="absolute top-3 left-3 bg-spice-yellow/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-cartoon">
          <Star className="w-3 h-3 fill-current text-accent" />
          <span className="text-xs font-cartoon text-accent">{rating}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="font-cartoon text-lg sm:text-xl text-accent mb-2 text-bouncy leading-tight">{title}</h3>
        <p className="font-comic text-sm sm:text-base text-card-foreground leading-relaxed line-clamp-3">{description}</p>
        
        <div className="flex items-center justify-between gap-3 pt-2">
          {price && (
            <div className="font-cartoon text-lg sm:text-xl text-primary font-bold bg-spice-yellow px-3 py-1 rounded-full shadow-cartoon">
              {price}
            </div>
          )}
          
          <CartoonButton
            variant="success"
            size="sm"
            onClick={onAddToCart}
            icon={<ShoppingCart className="w-4 h-4" />}
            iconPosition="left"
            className="flex-shrink-0"
            animation="pulse"
          >
            Add
          </CartoonButton>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-2 right-2 w-6 h-6 bg-spice-orange rounded-full animate-pulse opacity-70"></div>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.5s' }}></div>
    </ComicPanel>
  );
};
