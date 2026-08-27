import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10 pt-24 pb-12 text-white">
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
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a href="#" className="hover:text-red-main transition-colors inline-flex items-center gap-2 group">
                  LinkedIn
                  <ArrowRight className="w-3 h-3 -rotate-45 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-main transition-colors inline-flex items-center gap-2 group">
                  Instagram
                  <ArrowRight className="w-3 h-3 -rotate-45 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li className="mt-4">
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
  );
}
