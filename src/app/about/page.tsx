import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About | Pivot Business Solutions",
  description: "Experience. Perspective. Purpose. The story behind Pivot Business Solutions.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-900 pt-48 pb-32 border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white mb-8">
            Experience. <br />
            <span className="italic text-white/60">Perspective.</span> <br />
            Purpose.
          </h1>
          <p className="text-xl text-white/50 uppercase tracking-[0.3em] text-sm mt-12">
            The story of Pivot Business Solutions
          </p>
        </div>
      </section>

      {/* ORIGIN & EVOLUTION */}
      <section className="bg-ivory text-navy-900 py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="order-2 lg:order-1">
              <h2 className="text-sm font-semibold tracking-widest uppercase mb-6 text-red-main flex items-center gap-4">
                <span>01</span>
                <span className="w-6 h-px bg-red-main/50"></span>
                <span>The Origin</span>
              </h2>
              <h3 className="font-serif text-4xl leading-tight mb-8">Built in the crucible of elite performance.</h3>
              <div className="space-y-6 text-navy-900/70 text-lg font-light leading-relaxed">
                <p>
                  Pivot Business Solutions was born out of a deep understanding of what it takes to perform at the highest levels. 
                  Originally focused exclusively on high-performance athletes, the practice was designed to help individuals 
                  navigate intense pressure, career transitions, and the psychological demands of being at the top of their game.
                </p>
                <p>
                  We recognized early on that athletic success isn&apos;t just about physical talent—it&apos;s about clarity, 
                  decision-making, and having a strategic framework for managing both success and adversity.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square w-full bg-navy-900/5">
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Athletic performance"
                className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square w-full bg-navy-900/5">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Business leadership"
                className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
              />
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-widest uppercase mb-6 text-red-main flex items-center gap-4">
                <span>02</span>
                <span className="w-6 h-px bg-red-main/50"></span>
                <span>The Evolution</span>
              </h2>
              <h3 className="font-serif text-4xl leading-tight mb-8">Beyond the stadium.</h3>
              <div className="space-y-6 text-navy-900/70 text-lg font-light leading-relaxed">
                <p>
                  It quickly became apparent that the same pressures faced by elite athletes are present in the boardroom, 
                  in early-career development, and in organizational leadership. The need for clear direction and confident 
                  decision-making is universal.
                </p>
                <p>
                  Pivot expanded its scope. Today, we bring the same rigorous, high-performance advisory framework to 
                  business leaders, young professionals, and entire organizations. We don&apos;t just advise; we equip our 
                  clients to lead themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-navy-800 text-ivory py-32 text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <p className="text-red-main uppercase tracking-[0.2em] text-sm font-semibold mb-8">Our Philosophy</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-12">
            A pivot is a moment of change, decision, redirection, and forward movement.
          </h2>
          <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            We believe that every challenge is simply an unstructured opportunity. By providing clarity, we enable the decisions 
            that create momentum. That momentum is what we call the Pivot to Possibility.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-ivory-light text-navy-900 py-32 border-b border-navy-900/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <div className="absolute inset-0 bg-navy-900 transform translate-x-4 translate-y-4" />
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Founder of Pivot Business Solutions"
                  className="relative w-full aspect-[3/4] object-cover grayscale"
                />
              </div>
            </div>
            
            <div className="lg:col-span-7 pt-12 lg:pt-0">
              <h2 className="font-serif text-5xl mb-4">James Dalton</h2>
              <p className="text-red-main uppercase tracking-widest text-sm font-semibold mb-12">Founder & Principal Advisor</p>
              
              <div className="space-y-8 text-navy-900/70 text-lg font-light leading-relaxed">
                <p>
                  With over 15 years of experience advising high-stakes performers, James Dalton founded Pivot Business Solutions 
                  to bridge the gap between individual potential and organizational excellence.
                </p>
                <p>
                  James began his career working alongside elite athletes, managing their off-field transitions and strategic 
                  decisions. He observed a recurring theme: individuals with immense capability often found themselves stuck not 
                  due to a lack of talent, but a lack of objective clarity.
                </p>
                <p>
                  This insight became the foundation of his approach. Drawing on principles of behavioral psychology, strategic 
                  management, and high-performance coaching, James developed a framework designed to cut through noise and 
                  facilitate decisive action.
                </p>
                <p>
                  Today, James works as a trusted confidant to CEOs, a mentor to young professionals, and a strategic partner to 
                  organizations looking to reframe their operational models. His advisory style is characterized by radical candor, 
                  deep empathy, and an unwavering focus on sustainable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING / CTA */}
      <section className="bg-ivory py-40 text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <h2 className="font-serif text-5xl md:text-6xl text-navy-900 mb-12">
            Ready to define <span className="italic">what&apos;s next?</span>
          </h2>
          <Link href="/contact">
            <Button size="lg" withArrow>Start Your Pivot</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
