import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* 01: HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-navy-900 pt-32 pb-20 overflow-hidden">
        {/* Subtle background abstract element */}
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-20 mix-blend-screen pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-navy-800 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8 text-white/50 text-xs tracking-[0.2em] uppercase font-semibold">
              <span className="w-8 h-px bg-white/20"></span>
              <span>01 / 05</span>
            </div>
            
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white mb-8">
              Pivot to <br />
              <span className="text-red-main italic pr-4">Possibility.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-lg mb-12 font-light leading-relaxed">
              We help people, athletes, and organizations navigate change, growth, and what&apos;s next with clarity, strategy, and confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact">
                <Button size="lg" withArrow>Start Your Pivot</Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="ghost" withArrow>Learn More</Button>
              </Link>
            </div>
          </div>
          
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none lg:ml-auto">
            <div className="absolute inset-0 bg-navy-800 transform translate-x-4 translate-y-4 border border-white/10" />
            <div className="relative w-full h-full bg-white/5 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Executive leadership and performance" 
                className="w-full h-full object-cover object-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 02: POSITIONING */}
      <section className="bg-ivory text-navy-900 py-32 border-b border-navy-900/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mb-24">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-8">
              Where strategy meets <br />
              <span className="italic text-navy-800">human potential.</span>
            </h2>
            <div className="w-16 h-px bg-red-main"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
            {/* Subtle center divider on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-navy-900/10 -translate-x-1/2"></div>
            
            <div className="pr-0 lg:pr-12">
              <h3 className="text-sm font-semibold tracking-widest uppercase mb-6 text-red-main flex items-center gap-4">
                <span>01</span>
                <span className="w-6 h-px bg-red-main/50"></span>
                <span>People & Performance</span>
              </h3>
              <p className="text-navy-900/70 text-lg leading-relaxed mb-8">
                Professional and life counseling, and developmental support for young people, students, early-career professionals, and athletes navigating pivotal transitions.
              </p>
              <ul className="flex flex-col gap-3 mb-10 text-sm font-medium tracking-wide">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-main" /> Young People & Students</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-main" /> Early-Career Professionals</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-main" /> Athletes</li>
              </ul>
              <Link href="/services#people" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-red-main transition-colors group">
                Explore Services
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="pl-0 lg:pl-12 pt-12 md:pt-0 border-t border-navy-900/10 md:border-t-0">
              <h3 className="text-sm font-semibold tracking-widest uppercase mb-6 text-navy-900 flex items-center gap-4">
                <span>02</span>
                <span className="w-6 h-px bg-navy-900/20"></span>
                <span>Management Consulting</span>
              </h3>
              <p className="text-navy-900/70 text-lg leading-relaxed mb-8">
                Strategic and management consulting services designed to drive operational excellence, leadership growth, and clear direction for forward-thinking organizations.
              </p>
              <ul className="flex flex-col gap-3 mb-10 text-sm font-medium tracking-wide">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-navy-900/30" /> Businesses</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-navy-900/30" /> Athletes</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-navy-900/30" /> Organizations</li>
              </ul>
              <Link href="/services#consulting" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-navy-800 transition-colors group">
                Explore Consulting
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 03: CREDIBILITY */}
      <section className="bg-navy-800 text-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="text-center md:text-left pt-8 md:pt-0 pb-8 md:pb-0 px-6">
              <p className="font-serif text-6xl lg:text-7xl mb-4">15<span className="text-red-main text-4xl align-top">+</span></p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Years of Experience</p>
            </div>
            <div className="text-center md:text-left pt-8 md:pt-0 pb-8 md:pb-0 px-6">
              <p className="font-serif text-6xl lg:text-7xl mb-4">500<span className="text-red-main text-4xl align-top">+</span></p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Individuals Advised</p>
            </div>
            <div className="text-center md:text-left pt-8 md:pt-0 pb-8 md:pb-0 px-6">
              <p className="font-serif text-6xl lg:text-7xl mb-4">50<span className="text-red-main text-4xl align-top">+</span></p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Organizations Supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04: APPROACH */}
      <section className="bg-ivory-light text-navy-900 py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-20">
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-red-main mb-6">Our Methodology</h2>
            <p className="font-serif text-4xl md:text-5xl leading-tight">Clarity creates direction. Direction creates possibility.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Understand.", desc: "We begin by diagnosing the reality of where you or your organization stands today, stripping away assumptions." },
              { num: "02", title: "Reframe.", desc: "We shift the perspective, identifying the underlying challenges and illuminating the strategic opportunities." },
              { num: "03", title: "Move.", desc: "We implement a clear, decisive action plan to transition from the current state to the desired possibility." }
            ].map((step) => (
              <div key={step.num} className="group cursor-default relative">
                <div className="text-6xl font-serif text-navy-900/5 mb-6 group-hover:text-red-main/10 transition-colors duration-500">{step.num}</div>
                <div className="w-full h-px bg-navy-900/10 mb-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-0 bg-red-main group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
                <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                <p className="text-navy-900/70 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05: HUMAN STORY */}
      <section className="bg-navy-900 text-ivory py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[3/4] w-full max-w-lg mx-auto lg:mx-0">
               <div className="absolute inset-0 bg-red-main transform -translate-x-4 -translate-y-4 opacity-20" />
               <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Founder portrait" 
                  className="relative w-full h-full object-cover object-center z-10 filter contrast-125 brightness-90"
               />
               {/* Decorative typography in background */}
               <div className="absolute -right-24 top-1/4 font-serif text-9xl text-white/5 rotate-90 select-none hidden lg:block whitespace-nowrap">
                 The Pivot
               </div>
            </div>

            <div>
              <h2 className="font-serif text-5xl md:text-6xl mb-10 leading-tight">
                Experience. <br />
                <span className="italic text-white/60">Perspective.</span> <br />
                Purpose.
              </h2>
              <div className="space-y-6 text-lg text-white/70 font-light mb-12">
                <p>
                  What started as an advisory practice strictly for high-performance athletes has evolved. 
                  The pressures of performance, transition, and leadership are not confined to the stadium.
                </p>
                <p>
                  Today, Pivot Business Solutions brings that elite performance framework to business leaders, 
                  young professionals, and organizations—helping them navigate the pivotal moments that define their future.
                </p>
              </div>
              <Link href="/about">
                <Button variant="outline" size="lg" withArrow>Read My Story</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 06: WHO WE SERVE */}
      <section className="bg-ivory text-navy-900 py-32 border-b border-navy-900/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="font-serif text-5xl md:text-6xl mb-6">Where are you in your journey?</h2>
            <p className="text-navy-900/60 uppercase tracking-widest text-sm">Select your path</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "I'm an Athlete", 
                desc: "Career, performance, transition, management, and what's next.", 
                img: "https://images.unsplash.com/photo-1526566762798-8fac9c07aa22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              { 
                title: "I'm a Young Professional", 
                desc: "Clarity, confidence, direction, personal and professional development.", 
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              { 
                title: "I'm a Business Leader", 
                desc: "Strategy, management, performance, and organizational growth.", 
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((path, idx) => (
              <Link key={idx} href="/who-we-serve" className="group block relative overflow-hidden h-[500px]">
                <img 
                  src={path.img} 
                  alt={path.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-ivory">
                  <h3 className="font-serif text-3xl mb-4 group-hover:-translate-y-2 transition-transform duration-500">{path.title}</h3>
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <p className="text-white/70 font-light leading-relaxed mb-6">
                      {path.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-main">
                      Explore Path <span className="text-lg leading-none">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 07: TESTIMONIALS */}
      <section className="bg-ivory-light py-32 text-navy-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-red-main font-serif text-8xl leading-none opacity-20 block mb-8">"</span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-12">
              "Their strategic insight and hands-on approach helped us streamline operations and unlock new growth. They provided clarity where we had confusion."
            </h2>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-navy-900/10 mb-2">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Client" className="w-full h-full object-cover grayscale" />
              </div>
              <div>
                <p className="font-bold tracking-wide uppercase text-sm mb-1">David Chen</p>
                <p className="text-navy-900/50 text-xs uppercase tracking-widest">Founder, Keatec Ventures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08: FINAL CTA */}
      <section className="relative py-40 bg-navy-900 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center bg-no-repeat mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/40"></div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-6">
            What's possible <br />
            <span className="italic text-white/70">from here?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 font-light">Let's start your pivot.</p>
          <Link href="/contact">
            <Button size="lg" withArrow>Start Your Pivot</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
