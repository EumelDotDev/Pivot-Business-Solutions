"use client";
import * as React from "react";


import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
const SocialIcons = {
  Instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  ),
  LinkedIn: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  Twitter: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  )
};

import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const showCTA = pathname !== "/about";

  return (
    <>
      {/* GLOBAL CTA - Hidden on About page */}
      {showCTA && (
        <section className="relative py-40 bg-navy-900 text-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center bg-no-repeat mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/40"></div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-6">
            What's possible <br />
            <span className="italic text-white/70">from here?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 font-light">Let's start your pivot.</p>
          <Link href="/contact">
            <Button size="lg" variant="primary" withArrow>Start your pivot.</Button>
          </Link>
        </div>
      </section>
      )}

      {/* FOOTER LINKS */}
      <footer className="bg-navy-900 pt-12 pb-12 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-24">
            <div className="md:col-span-2">
              <Link href="/" className="flex flex-col leading-none mb-6 text-white hover:text-ivory transition-colors w-fit">
                <span className="font-serif text-3xl tracking-wide">PIVOT</span>
                <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-white/70">Business Solutions</span>
              </Link>
              <p className="text-white/70 max-w-sm text-sm leading-relaxed">
                Where strategy meets human potential. We help people, athletes, and organizations navigate change, growth, and what&apos;s next with clarity and confidence.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/50 mb-6 font-semibold">Navigation</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li><Link href="/about" className="hover:text-red-main transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-red-main transition-colors">Services</Link></li>
                <li><Link href="/who-we-serve" className="hover:text-red-main transition-colors">Who We Serve</Link></li>
                <li><Link href="/contact" className="hover:text-red-main transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/50 mb-6 font-semibold">Connect</h4>
              <div className="flex gap-4 mb-6">
                {[SocialIcons.LinkedIn, SocialIcons.Instagram, SocialIcons.Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-navy-900 transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <ul className="flex flex-col gap-4 text-sm mt-4">
                <li>
                  <a href="mailto:hello@pivotbusiness.com" className="hover:text-white text-white/70 transition-colors">
                    hello@pivotbusiness.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} Pivot Business Solutions. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
