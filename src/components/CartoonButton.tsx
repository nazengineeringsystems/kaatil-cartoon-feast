import { ButtonHTMLAttributes, forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "btn-cartoon relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-cartoon font-bold disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 touch-manipulation select-none overflow-hidden group",
  {
    variants: {
      variant: {
        // Primary action buttons
        hero: [
          "bg-gradient-hero text-primary-foreground shadow-pop border-4 border-accent",
          "hover:shadow-glow hover:scale-105 hover:rotate-1",
          "active:scale-95 active:rotate-0 active:shadow-cartoon",
          "transition-all duration-300 ease-out",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
          "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
        ],
        
        // Secondary action buttons  
        spice: [
          "bg-gradient-spice text-accent border-4 border-accent shadow-cartoon",
          "hover:shadow-pop hover:scale-105 hover:-rotate-1",
          "active:scale-95 active:rotate-0",
          "transition-all duration-300 ease-out",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-spice-yellow/30 before:to-transparent",
          "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500"
        ],
        
        // Outline buttons for secondary actions
        outline: [
          "border-4 border-accent text-accent bg-transparent shadow-cartoon",
          "hover:bg-accent hover:text-accent-foreground hover:shadow-pop hover:scale-105",
          "active:scale-95 active:shadow-none",
          "transition-all duration-300 ease-out",
          "before:absolute before:inset-0 before:bg-accent before:scale-x-0 before:origin-left",
          "hover:before:scale-x-100 before:transition-transform before:duration-300"
        ],
        
        // Soft buttons for subtle actions
        soft: [
          "bg-secondary/50 text-accent border-2 border-secondary shadow-sm",
          "hover:bg-secondary hover:border-accent hover:shadow-cartoon hover:scale-105",
          "active:scale-95",
          "transition-all duration-200 ease-out"
        ],
        
        // Ghost buttons for minimal presence
        ghost: [
          "text-accent bg-transparent border-2 border-transparent",
          "hover:bg-accent/10 hover:border-accent/30 hover:scale-105",
          "active:scale-95",
          "transition-all duration-200 ease-out"
        ],
        
        // Success state buttons
        success: [
          "bg-green-500 text-white border-4 border-green-700 shadow-cartoon",
          "hover:bg-green-600 hover:shadow-pop hover:scale-105",
          "active:scale-95",
          "transition-all duration-300 ease-out"
        ],
        
        // Warning/Alert buttons
        warning: [
          "bg-orange-500 text-white border-4 border-orange-700 shadow-cartoon",
          "hover:bg-orange-600 hover:shadow-pop hover:scale-105",
          "active:scale-95",
          "transition-all duration-300 ease-out"
        ],
        
        // Danger/Delete buttons
        danger: [
          "bg-red-500 text-white border-4 border-red-700 shadow-cartoon",
          "hover:bg-red-600 hover:shadow-pop hover:scale-105 hover:rotate-1",
          "active:scale-95 active:rotate-0",
          "transition-all duration-300 ease-out"
        ]
      },
      size: {
        xs: "px-3 py-1.5 text-xs min-h-[36px] rounded-lg",
        sm: "px-4 py-2 text-sm min-h-[40px] rounded-xl",
        default: "px-6 py-3 text-base min-h-[48px] rounded-xl",
        lg: "px-8 py-4 text-lg min-h-[52px] rounded-2xl",
        xl: "px-10 py-5 text-xl min-h-[56px] rounded-2xl",
        xxl: "px-12 py-6 text-2xl min-h-[64px] rounded-3xl"
      },
      animation: {
        none: "",
        bounce: "animate-bounce",
        pulse: "animate-pulse",
        wiggle: "hover:animate-pulse",
        float: "hover:animate-bounce"
      }
    },
    defaultVariants: {
      variant: "hero",
      size: "default",
      animation: "none"
    },
  }
);

export interface CartoonButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  rounded?: boolean;
}

const CartoonButton = forwardRef<HTMLButtonElement, CartoonButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    animation,
    loading = false,
    loadingText,
    icon,
    iconPosition = "left",
    fullWidth = false,
    rounded = false,
    children,
    disabled,
    ...props 
  }, ref) => {
    const [isPressed, setIsPressed] = useState(false);
    
    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsPressed(false);
    
    const isDisabled = disabled || loading;
    
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, animation }),
          fullWidth && "w-full",
          rounded && "rounded-full",
          isPressed && "transform translate-y-1",
          className
        )}
        ref={ref}
        disabled={isDisabled}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Loading state */}
        {loading && (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {loadingText || "Loading..."}
          </>
        )}
        
        {/* Normal state */}
        {!loading && (
          <>
            {icon && iconPosition === "left" && (
              <span className="transition-transform group-hover:scale-110 duration-200">
                {icon}
              </span>
            )}
            
            <span className="relative z-10 transition-all duration-200 group-hover:scale-105">
              {children}
            </span>
            
            {icon && iconPosition === "right" && (
              <span className="transition-transform group-hover:scale-110 duration-200">
                {icon}
              </span>
            )}
          </>
        )}
        
        {/* Ripple effect overlay */}
        <div className="absolute inset-0 opacity-0 group-active:opacity-20 bg-white rounded-inherit transition-opacity duration-150" />
      </button>
    );
  }
);

CartoonButton.displayName = "CartoonButton";

export { CartoonButton, buttonVariants };
