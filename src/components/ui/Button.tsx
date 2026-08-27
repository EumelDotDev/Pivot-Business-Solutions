import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-dark" | "ghost"
  size?: "default" | "sm" | "lg"
  withArrow?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", withArrow = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-main disabled:pointer-events-none disabled:opacity-50 group rounded-full",
          {
            "bg-red-main text-white hover:bg-red-hover": variant === "primary",
            "bg-navy-900 text-white hover:bg-navy-800": variant === "secondary",
            "border border-white/20 hover:border-white/50 bg-transparent text-white": variant === "outline",
            "border border-navy-900/20 hover:border-navy-900/50 bg-transparent text-navy-900": variant === "outline-dark",
            "hover:bg-white/10 text-white": variant === "ghost",
            "h-12 pl-6 pr-1.5 py-1.5": size === "default" && withArrow,
            "h-12 px-6 py-2": size === "default" && !withArrow,
            "h-10 pl-4 pr-1": size === "sm" && withArrow,
            "h-10 px-4": size === "sm" && !withArrow,
            "h-14 pl-8 pr-2 text-base": size === "lg" && withArrow,
            "h-14 px-8 text-base": size === "lg" && !withArrow,
          },
          className
        )}
        {...props}
      >
        <span className={cn({
          "pr-4": withArrow && size === "lg",
          "pr-3": withArrow && size === "default",
          "pr-2": withArrow && size === "sm",
        })}>
          {children}
        </span>
        {withArrow && (
          <span className={cn(
            "flex items-center justify-center rounded-full transition-transform group-hover:scale-105",
            {
              "bg-white text-red-main": variant === "primary",
              "bg-white text-navy-900": variant === "secondary" || variant === "outline",
              "bg-navy-900 text-white": variant === "outline-dark",
              "bg-white/20 text-white": variant === "ghost",
              "w-9 h-9": size === "default",
              "w-8 h-8": size === "sm",
              "w-10 h-10": size === "lg",
            }
          )}>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
