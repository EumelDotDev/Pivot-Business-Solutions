import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  withArrow?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", withArrow = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-main disabled:pointer-events-none disabled:opacity-50 group",
          {
            "bg-red-main text-white hover:bg-red-hover": variant === "primary",
            "bg-white text-navy-900 hover:bg-ivory": variant === "secondary",
            "border border-white/20 hover:border-white/50 bg-transparent text-white": variant === "outline",
            "hover:bg-white/10 text-white": variant === "ghost",
            "h-12 px-6 py-2 uppercase tracking-widest text-xs": size === "default",
            "h-10 px-4 text-xs": size === "sm",
            "h-14 px-8 text-sm uppercase tracking-widest": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
        {withArrow && (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
