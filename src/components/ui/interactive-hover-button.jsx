import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

const InteractiveHoverButton = React.forwardRef(
  ({ text = "Button", className, variant = "primary", as, href, to, onClick, ...props }, ref) => {
    const baseClasses = "group relative cursor-pointer overflow-hidden rounded-full border p-2 text-center font-semibold transition-all duration-300";
    
    const variantClasses = {
      primary: "bg-primary text-white border-primary hover:border-primary",
      accent: "bg-accent text-white border-accent hover:border-accent",
      outline: "bg-white text-primary border-primary hover:border-primary",
      white: "bg-white text-primary border-white hover:border-white",
    };

    const content = (
      <>
        <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          <span>{text}</span>
          <ArrowRight className="w-4 h-4" strokeWidth={3} />
        </div>
        <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-white/30 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-white/20"></div>
      </>
    );

    // If 'as' prop is provided (for React Router Link), use it
    if (as && typeof as !== 'string') {
      const Component = as;
      return (
        <Component
          ref={ref}
          to={to}
          href={href}
          onClick={onClick}
          className={cn(baseClasses, variantClasses[variant], className)}
          {...props}
        >
          {content}
        </Component>
      );
    }

    // If href is provided or as === "a", render as anchor
    if (as === "a" || href) {
      return (
        <a
          ref={ref}
          href={href || "#"}
          onClick={onClick}
          className={cn(baseClasses, variantClasses[variant], className)}
          {...props}
        >
          {content}
        </a>
      );
    }

    // Default: render as button
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };

