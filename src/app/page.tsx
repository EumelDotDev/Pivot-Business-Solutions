"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const staggerContainer: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const fadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Home() {
  const [activeMethodology, setActiveMethodology] = useState(0);

  const methodologySteps = [
    {
      num: "01",
      title: "Understand.",
      desc: "We begin by diagnosing the reality of where you or your organization stands today, stripping away assumptions.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      num: "02",
      title: "Reframe.",
      desc: "We shift the perspective, identifying the underlying challenges and illuminating the strategic opportunities.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      num: "03",
      title: "Move.",
      desc: "We implement a clear, decisive action plan to transition from the current state to the desired possibility.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <>
      {/* 01: HERO */}
      <section className="relative pt-40 pb-20 bg-ivory text-navy-900 overflow-hidden">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center"
        >
          
          <motion.div variants={fadeUp} className="inline-flex items-center gap-4 mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-navy-900/60">Strategy. Performance. Possibility.</span>
            <span className="w-8 h-px bg-red-main"></span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-tight text-navy-900 mb-8 max-w-5xl">
            Pivot to <br className="hidden md:block" />
            <span className="italic text-red-main">Possibility.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-navy-900/70 max-w-2xl mx-auto mb-14 font-light leading-relaxed">
            Helping people, athletes, and organizations navigate pivotal moments with clarity, strategy, and confidence.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 mb-24 z-10">
            <Link href="/contact">
              <Button size="lg" variant="primary" withArrow>
                Start Your Pivot
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline-dark" withArrow>
                Explore How We Help
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="relative w-full max-w-[90%] md:max-w-[85%] mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/3] md:aspect-[21/9] bg-navy-800 relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Executive leadership team meeting" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent mix-blend-multiply" />
            </div>
            
            {/* Stat Card Overlap */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-md rounded-lg p-6 md:p-8 flex gap-8 md:gap-12 shadow-xl border border-white/20">
              <div>
                <p className="font-serif text-3xl md:text-4xl text-navy-900 mb-1">15<span className="text-red-main text-2xl align-top">+</span></p>
                <p className="text-[0.65rem] md:text-xs tracking-widest uppercase text-navy-900/50 font-semibold">Years of Experience</p>
              </div>
              <div className="w-px bg-navy-900/10 hidden md:block"></div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-navy-900 mb-1">500<span className="text-red-main text-2xl align-top">+</span></p>
                <p className="text-[0.65rem] md:text-xs tracking-widest uppercase text-navy-900/50 font-semibold">Individuals Advised</p>
              </div>
            </div>
          </motion.div>
          
        </motion.div>
      </section>

      {/* 01.5: TRUSTED BY LOGOS */}
      <section className="bg-ivory py-16 border-b border-navy-900/10 overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-navy-900/40">Trusted by leadership teams & high-performers globally</p>
        </div>
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-24 px-12 items-center opacity-40 grayscale mix-blend-multiply">
              <span className="font-serif text-2xl font-bold text-navy-900">AlphaCorp</span>
              <span className="font-sans text-xl font-bold tracking-tighter text-navy-900">GLOBEX</span>
              <span className="font-serif italic text-2xl text-navy-900">Stark Industries</span>
              <span className="font-sans text-2xl font-black tracking-widest uppercase text-navy-900">Soylent</span>
              <span className="font-serif text-3xl font-light text-navy-900">Wayne Ent.</span>
              <span className="font-sans text-xl font-bold uppercase text-navy-900">Massive Dynamic</span>
            </div>
          ))}
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
      <section className="bg-ivory text-navy-900 py-32 border-b border-navy-900/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="flex flex-col">
              <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-navy-900/60 mb-4">Our Methodology</h2>
              <p className="font-serif text-4xl md:text-5xl leading-tight mb-12 text-navy-900">
                Clarity creates direction.<br />
                <span className="italic text-navy-800">Direction creates possibility.</span>
              </p>

              <div className="flex flex-col space-y-3">
                {methodologySteps.map((step, idx) => {
                  const isActive = activeMethodology === idx;
                  return (
                    <div 
                      key={step.num}
                      onClick={() => setActiveMethodology(idx)}
                      className={`cursor-pointer overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive 
                          ? "bg-[#333333] text-white rounded-[2rem] p-8 shadow-2xl scale-[1.02]" 
                          : "bg-transparent text-navy-900 py-6 border-b border-navy-900/10 hover:border-navy-900/30 scale-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className={`font-sans text-xl md:text-2xl font-normal tracking-tight ${isActive ? "" : "text-navy-900/90"}`}>
                          {step.title}
                        </h3>
                        <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? "bg-white text-[#333333]" : "border border-navy-900/20 text-navy-900 group-hover:border-navy-900/50"}`}>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                      
                      <div 
                        className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isActive ? "max-h-48 mt-4 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-white/70 text-lg leading-relaxed font-light">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-navy-900 shadow-2xl lg:ml-8">
              {methodologySteps.map((step, idx) => (
                <div 
                  key={step.num}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    activeMethodology === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 via-transparent to-transparent" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 05: WHO WE SERVE */}
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
                img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
              <Link key={idx} href="/who-we-serve" className="group block relative overflow-hidden h-[500px] rounded-lg">
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

      {/* 06: TESTIMONIALS */}
      <section className="bg-white py-32 text-navy-900 border-b border-navy-900/10">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-20">
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-navy-900/60 mb-4">Testimonials</h2>
            <h3 className="font-serif text-4xl md:text-5xl leading-tight">
              What <span className="italic text-navy-800">Our Clients</span> Are Saying
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "The transition from professional sports to the business world felt daunting. This advisory process gave me the exact framework I needed to translate my athletic discipline into corporate leadership. I now have total clarity on my next chapter.",
                name: "Marcus T.",
                role: "Former Pro Athlete",
                img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              },
              {
                quote: "I was stuck in mid-management, unsure how to articulate my value. Through our sessions, we stripped away the noise and rebuilt my professional narrative. Within three months, I secured a senior leadership role.",
                name: "Sarah J.",
                role: "Young Professional",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              },
              {
                quote: "Their strategic insight and hands-on approach helped us streamline operations and unlock new growth. They provided clarity where we had confusion, completely reframing how our executive team approaches challenges.",
                name: "David Chen",
                role: "Business Owner",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#FAFAFA] rounded-xl p-8 md:p-10 flex flex-col h-full relative group hover:shadow-lg transition-shadow duration-300 border border-navy-900/5">
                
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 text-navy-900/10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.41 14.382H10.428V3H21.572V14.382L19.179 21H14.017ZM3.839 21L6.232 14.382H0.25V3H11.394V14.382L9.001 21H3.839Z" />
                  </svg>
                </div>
                
                {/* Link/Chain Icon */}
                <div className="text-navy-900/40 mb-8">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </div>

                <p className="text-navy-900/80 leading-relaxed mb-10 flex-grow font-light">
                  "{testimonial.quote}"
                </p>

                <div className="pt-6 border-t border-navy-900/10 flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-navy-900/10 shrink-0">
                    <img src={testimonial.img} alt={testimonial.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <p className="font-bold tracking-wide text-sm text-navy-900">{testimonial.name}</p>
                    <p className="text-navy-900/50 text-xs uppercase tracking-widest mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-16">
            <button className="w-12 h-12 rounded-full border border-navy-900/20 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-colors" aria-label="Previous testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center hover:bg-navy-800 transition-colors" aria-label="Next testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

        </div>
      </section>

    </>
  );
}
