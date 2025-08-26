import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ComicPanelProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "speech" | "action";
}

export const ComicPanel = ({ children, className, variant = "default" }: ComicPanelProps) => {
  const variantClasses = {
    default: "comic-panel",
    speech: "speech-bubble",
    action: "comic-panel border-primary bg-gradient-spice",
  };

  return (
    <div className={cn(variantClasses[variant], className)}>
      {children}
    </div>
  );
};