import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "btn-cartoon inline-flex items-center justify-center whitespace-nowrap text-lg font-cartoon font-bold disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        hero: "bg-gradient-hero text-primary-foreground shadow-pop border-accent hover:shadow-glow",
        spice: "bg-gradient-spice text-primary-foreground border-accent",
        speech: "speech-bubble bg-card text-primary-foreground border-accent",
        outline: "border-primary text-primary-foreground bg-transparent hover:bg-primary hover:text-primary-foreground",
      },
      size: {
        default: "px-6 py-3 text-lg",
        lg: "px-8 py-4 text-xl",
        xl: "px-10 py-5 text-2xl",
        sm: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "hero",
      size: "default",
    },
  }
);

export interface CartoonButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const CartoonButton = forwardRef<HTMLButtonElement, CartoonButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

CartoonButton.displayName = "CartoonButton";

export { CartoonButton, buttonVariants };