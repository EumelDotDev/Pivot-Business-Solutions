"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Who We Serve", href: "/who-we-serve" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);



  return (
    <>
      <div className="fixed top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:max-w-7xl z-50">
        <motion.header
          className={cn(
            "transition-all duration-500 rounded-full border border-white/10 shadow-2xl",
            isScrolled ? "bg-navy-900/80 backdrop-blur-md py-3" : "bg-navy-900/40 backdrop-blur-md py-4"
          )}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="px-6 lg:px-10 flex items-center justify-between">
            <Link href="/" className="relative z-50 group flex flex-col leading-none transition-colors text-white hover:text-ivory">
              <span className="font-serif text-2xl tracking-wide">PIVOT</span>
              <span className="font-sans text-[0.6rem] uppercase tracking-[0.2em] transition-colors text-white/70 group-hover:text-white">
                Business Solutions
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-xs uppercase tracking-widest transition-colors hover:text-red-main relative py-2",
                          isActive ? "text-white font-semibold" : "text-white/70 hover:text-white"
                        )}
                      >
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="nav-indicator"
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-main"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link href="/contact">
                <Button withArrow size="sm" variant="primary" className="bg-white/10 hover:bg-white/20 border-0 text-white backdrop-blur-sm">
                  Start Your Pivot
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden relative z-50 p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-navy-900 flex flex-col justify-center px-6"
        >
          <nav className="flex flex-col gap-8 text-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-serif text-4xl hover:text-red-main transition-colors",
                  pathname === link.href ? "text-white" : "text-white/60"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8 flex justify-center">
              <Link href="/contact">
                <Button withArrow size="lg">Start Your Pivot</Button>
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  );
}
