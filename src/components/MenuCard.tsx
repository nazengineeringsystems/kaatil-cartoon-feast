import { ReactNode } from "react";
import { ComicPanel } from "./ComicPanel";
import { SteamEffect } from "./SteamEffect";

interface MenuCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  className?: string;
}

export const MenuCard = ({ title, description, image, price, className }: MenuCardProps) => {
  return (
    <ComicPanel className={`relative overflow-hidden hover:scale-105 transition-transform duration-300 ${className}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover rounded-lg border-2 border-accent mb-4"
        />
        <SteamEffect className="absolute top-2 left-1/2 transform -translate-x-1/2" />
      </div>
      
      <h3 className="font-cartoon text-xl text-accent mb-2 text-bouncy">{title}</h3>
      <p className="font-comic text-card-foreground mb-4">{description}</p>
      
      {price && (
        <div className="font-cartoon text-lg text-primary font-bold bg-spice-yellow px-3 py-1 rounded-full inline-block">
          {price}
        </div>
      )}
      
      <div className="absolute top-2 right-2 w-6 h-6 bg-spice-orange rounded-full animate-pulse"></div>
    </ComicPanel>
  );
};