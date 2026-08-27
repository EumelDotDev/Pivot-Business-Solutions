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

  const darkHeroPages = ["/about", "/services", "/contact"];
  const hasDarkHero = darkHeroPages.includes(pathname);
  const isLightText = isScrolled || (!isScrolled && hasDarkHero);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
          isScrolled ? "bg-navy-900/95 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link href="/" className={cn(
            "relative z-50 group flex flex-col leading-none transition-colors",
            isLightText ? "text-white hover:text-ivory" : "text-navy-900 hover:text-navy-800"
          )}>
            <span className="font-serif text-2xl tracking-wide">PIVOT</span>
            <span className={cn(
              "font-sans text-[0.6rem] uppercase tracking-[0.2em] transition-colors",
              isLightText ? "text-white/70 group-hover:text-white" : "text-navy-900/70 group-hover:text-navy-900"
            )}>Business Solutions</span>
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
                        isActive && isLightText ? "text-white" : "",
                        isActive && !isLightText ? "text-navy-900" : "",
                        !isActive && isLightText ? "text-white/70" : "",
                        !isActive && !isLightText ? "text-navy-900/70" : ""
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-0 right-0 h-px bg-red-main"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link href="/contact">
              <Button withArrow size="sm" variant={isLightText ? (isScrolled ? "primary" : "outline") : "outline-dark"}>
                Start Your Pivot
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden relative z-50 p-2",
              isLightText ? "text-white" : "text-navy-900"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

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
