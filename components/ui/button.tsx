import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      default: "bg-primary-green text-white hover:bg-primary-green/90",
      outline: "border border-primary-green text-primary-green hover:bg-primary-green/10 bg-transparent",
      ghost: "hover:bg-gray-100 text-gray-dark",
    };
    
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 rounded-md px-6 text-base",
    };
    
    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
    
    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
