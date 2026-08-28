"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

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
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Their strategic insight and hands-on approach helped us streamline operations and unlock new growth. They provided clarity where we had confusion, completely reframing how our executive team approaches challenges.",
      name: "David Chen",
      role: "Business Owner",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "The transition from professional sports to the business world felt daunting. This advisory process gave me the exact framework I needed to translate my athletic discipline into corporate leadership. I now have total clarity on my next chapter.",
      name: "Marcus T.",
      role: "Former Pro Athlete",
      img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "I was stuck in mid-management, unsure how to articulate my value. Through our sessions, we stripped away the noise and rebuilt my professional narrative. Within three months, I secured a senior leadership role.",
      name: "Sarah J.",
      role: "Young Professional",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

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
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-navy-900">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
            alt="Executive coaching session"
            className="w-full h-full object-cover"
          />
          {/* Gradients for text legibility and mood */}
          <div className="absolute inset-0 bg-navy-900/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/30 to-transparent" />
        </div>

        {/* Content Container */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="container mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col justify-center h-full pt-16"
        >
          <div className="max-w-3xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-red-main animate-pulse"></span>
              <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/90">Elite Strategic Advisory</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-tight text-white mb-10">
              Pivot to <br />
              <span className="italic text-red-main">Possibility.</span>
            </motion.h1>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-16">
              <Link href="/contact" className="shrink-0 group">
                <div className="bg-white/10 hover:bg-white/20 transition-colors border border-white/20 backdrop-blur-md rounded-full pl-8 pr-2 py-2 flex items-center gap-6 shadow-xl">
                  <span className="text-white font-medium text-lg">Start Your Pivot</span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-navy-900 group-hover:bg-red-main group-hover:text-white transition-colors shadow-sm">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-md sm:border-l sm:border-white/20 sm:pl-8">
                Where strategy meets human potential. We coach visionary leaders to navigate pivotal moments with clarity and confidence.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* (Bottom Stats Bar Moved to About Us Section) */}
      </section>

      {/* 01.5: PARTNERS & CLIENTS */}
      <section className="bg-gradient-to-b from-white to-ivory py-24 border-b border-navy-900/10 overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">Partners and Clients</h2>
        </div>
        
        {/* Top Row Marquee */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] mb-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 px-3 items-center">
              <div className="bg-white px-8 py-5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-navy-900/5 flex items-center justify-center min-w-[200px]">
                <span className="font-serif text-2xl font-bold text-navy-900/70">AlphaCorp</span>
              </div>
              <div className="bg-white px-8 py-5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-navy-900/5 flex items-center justify-center min-w-[200px]">
                <span className="font-sans text-xl font-bold tracking-tighter text-navy-900/70">GLOBEX</span>
              </div>
              <div className="bg-white px-8 py-5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-navy-900/5 flex items-center justify-center min-w-[200px]">
                <span className="font-serif italic text-2xl text-navy-900/70">Stark Industries</span>
              </div>
              <div className="bg-white px-8 py-5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-navy-900/5 flex items-center justify-center min-w-[200px]">
                <span className="font-sans text-2xl font-black tracking-widest uppercase text-navy-900/70">Soylent</span>
              </div>
              <div className="bg-white px-8 py-5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-navy-900/5 flex items-center justify-center min-w-[200px]">
                <span className="font-serif text-3xl font-light text-navy-900/70">Wayne Ent.</span>
              </div>
              <div className="bg-white px-8 py-5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-navy-900/5 flex items-center justify-center min-w-[200px]">
                <span className="font-sans text-xl font-bold uppercase text-navy-900/70">Massive Dynamic</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row Marquee */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] ml-16">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 px-3 items-center">
              <div className="bg-white px-8 py-5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-navy-900/5 flex items-center justify-center min-w-[200px]">
                <span className="font-sans text-xl font-bold tracking-tighter text-navy-900/70">Zepto</span>
              </div>
              <div className="bg-white px-8 py-5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-navy-900/5 flex items-center justify-center min-w-[200px]">
                <span className="font-sans text-2xl font-black tracking-widest uppercase text-navy-900/70">Binocs</span>
              </div>
              <div className="bg-white px-8 py-5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-navy-900/5 flex items-center justify-center min-w-[200px]">
                <span className="font-serif italic text-2xl text-navy-900/70">Credova</span>
              </div>
              <div className="bg-white px-8 py-5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-navy-900/5 flex items-center justify-center min-w-[200px]">
                <span className="font-serif text-2xl font-bold text-navy-900/70">FlySafair</span>
              </div>
              <div className="bg-white px-8 py-5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-navy-900/5 flex items-center justify-center min-w-[200px]">
                <span className="font-serif text-3xl font-light text-navy-900/70">Jeven</span>
              </div>
              <div className="bg-white px-8 py-5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-navy-900/5 flex items-center justify-center min-w-[200px]">
                <span className="font-sans text-xl font-bold uppercase text-navy-900/70">Allbridge</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 02: ABOUT US */}
      <section className="bg-ivory text-navy-900 pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Header Split */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-px bg-navy-900"></span>
                <span className="font-semibold text-sm uppercase tracking-widest text-navy-900">About Us</span>
              </div>
              <h2 className="font-sans text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-navy-900">
                Where strategy meets <br className="hidden md:block" />
                <span className="text-red-main">human potential.</span>
              </h2>
            </div>
            
            <div className="max-w-md lg:text-right">
              <p className="text-navy-900/80 text-lg leading-relaxed mb-6">
                Professional counseling and developmental support navigating pivotal transitions, alongside comprehensive strategic management designed to drive operational excellence.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-navy-900 hover:text-red-main transition-colors">
                More about us <span className="text-lg leading-none">↗</span>
              </Link>
            </div>
          </div>

          {/* Massive Full-Width Image with Embedded Stats */}
          <div className="relative w-full h-[600px] lg:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop" 
              alt="Deep Coaching Session" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            
            {/* Embedded Stats Grid */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-white/20 pt-8">
                
                {/* Stat 1 */}
                <div className="flex flex-col">
                  <p className="font-serif text-4xl lg:text-5xl text-white mb-2"><AnimatedCounter value={15} /><span className="text-red-main">+</span></p>
                  <p className="text-xs tracking-[0.2em] uppercase text-white/70 font-semibold">Years Experience</p>
                </div>
                
                {/* Stat 2 */}
                <div className="flex flex-col">
                  <p className="font-serif text-4xl lg:text-5xl text-white mb-2"><AnimatedCounter value={500} /><span className="text-red-main">+</span></p>
                  <p className="text-xs tracking-[0.2em] uppercase text-white/70 font-semibold">Individuals Advised</p>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col">
                  <p className="font-serif text-4xl lg:text-5xl text-white mb-2"><AnimatedCounter value={50} /><span className="text-red-main">+</span></p>
                  <p className="text-xs tracking-[0.2em] uppercase text-white/70 font-semibold">Corporate Partners</p>
                </div>

                {/* Stat 4 */}
                <div className="flex flex-col">
                  <p className="font-serif text-4xl lg:text-5xl text-white mb-2"><AnimatedCounter value={100} /><span className="text-red-main">%</span></p>
                  <p className="text-xs tracking-[0.2em] uppercase text-white/70 font-semibold">Success Rate</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 03: SERVICES */}
      <section className="bg-ivory text-navy-900 py-32 border-b border-navy-900/10">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-6 h-px bg-navy-900/40"></span>
                <span className="font-semibold text-xs uppercase tracking-[0.2em] text-navy-900/60">Our Services</span>
              </div>
              <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
                Guidance Tailored for You
              </h2>
            </div>
            <p className="mt-6 lg:mt-0 max-w-sm text-navy-900/70">
              A range of coaching packages to help you elevate your personal brand and organizational performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                num: "01",
                title: "I'm an Athlete", 
                desc: "Career, performance, transition, management, and what's next.", 
                img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                href: "/who-we-serve#athlete"
              },
              { 
                num: "02",
                title: "I'm a Young Professional", 
                desc: "Clarity, confidence, direction, personal and professional development.", 
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                href: "/who-we-serve#professional"
              },
              { 
                num: "03",
                title: "I'm a Business Leader", 
                desc: "Strategy, management, performance, and organizational growth.", 
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                href: "/who-we-serve#leader"
              }
            ].map((path, idx) => (
              <Link key={idx} href={path.href} className="bg-white rounded-[2rem] p-8 pb-0 flex flex-col h-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-navy-900/5 group hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] transition-all cursor-pointer block">
                
                {/* Card Header (Badge & Arrow) */}
                <div className="flex justify-between items-center mb-10">
                  <span className="px-4 py-1.5 rounded-full border border-navy-900/10 text-xs font-bold tracking-widest text-navy-900/60 group-hover:border-navy-900/30 transition-colors">
                    {path.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-navy-900/5 text-navy-900/60 flex items-center justify-center group-hover:bg-navy-900 group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-10">
                  <h3 className="font-sans text-2xl font-bold text-navy-900 mb-4">{path.title}</h3>
                  <p className="text-navy-900/70 text-sm leading-relaxed">{path.desc}</p>
                </div>

                {/* Bottom Image */}
                <div className="mt-auto h-48 w-full rounded-t-3xl overflow-hidden relative">
                  <img 
                    src={path.img} 
                    alt={path.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 04: APPROACH (Methodology) */}
      <section className="bg-ivory text-navy-900 py-32 border-b border-navy-900/10">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="flex items-center gap-4 mb-12">
            <span className="w-8 h-px bg-navy-900"></span>
            <span className="font-semibold text-sm uppercase tracking-widest text-navy-900">My Coaching Process, Simplified</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            <div className="flex flex-col space-y-4">
              {methodologySteps.map((step, idx) => {
                const isActive = activeMethodology === idx;
                return (
                  <div 
                    key={step.num}
                    onClick={() => setActiveMethodology(idx)}
                    className={`cursor-pointer overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-[2rem] group ${
                      isActive 
                        ? "bg-navy-900 text-white p-8 shadow-2xl scale-[1.02]" 
                        : "bg-transparent text-navy-900 py-6 border-b border-navy-900/10 hover:border-navy-900/30 scale-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className={`font-sans text-xl md:text-2xl tracking-tight ${isActive ? "font-bold" : "font-normal text-navy-900/80"}`}>
                        {step.title}
                      </h3>
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? "bg-white text-navy-900" : "border border-navy-900/20 text-navy-900/60 group-hover:border-navy-900/50"}`}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <div 
                      className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive ? "max-h-48 mt-4 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-white/80 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-navy-900 shadow-2xl lg:ml-8 lg:sticky lg:top-32">
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

      {/* 05.5: QUOTE BANNER */}
      <section className="bg-navy-900 text-white py-32 lg:py-48 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
              "Clarity creates direction. <br />
              <span className="text-white/40">Direction creates possibility."</span>
            </h2>
            <p className="font-semibold tracking-widest uppercase text-sm text-red-main">Pivot Business Solutions</p>
          </div>
        </div>
        
        {/* Background visual element */}
        <div className="absolute right-0 bottom-0 w-full lg:w-1/2 h-full opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
            alt="Background texture"
            className="w-full h-full object-cover" 
            style={{ maskImage: 'linear-gradient(to right, transparent, black)', WebkitMaskImage: 'linear-gradient(to right, transparent, black)' }}
          />
        </div>
      </section>

      {/* 06: TESTIMONIALS */}
      <section className="bg-white py-32 text-navy-900 border-b border-navy-900/10">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="flex justify-between items-end mb-12">
            <div className="flex items-center gap-4">
              <span className="w-6 h-px bg-navy-900/40"></span>
              <span className="font-bold text-sm uppercase tracking-widest text-navy-900">Trusted By Leaders</span>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full border border-navy-900/20 flex items-center justify-center text-navy-900/50 hover:text-navy-900 hover:border-navy-900 transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <button 
                onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center hover:bg-navy-800 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-[#FAFAFA] rounded-[2.5rem] p-6 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 border border-navy-900/5 shadow-[0_4px_40px_-10px_rgba(0,0,0,0.05)]">
            
            <div className="w-full lg:w-[400px] shrink-0">
              <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  key={`img-${activeTestimonial}`}
                  src={testimonials[activeTestimonial].img} 
                  alt={testimonials[activeTestimonial].name} 
                  className="w-full h-full object-cover animate-fade-in" 
                />
              </div>
            </div>

            <div className="w-full flex-grow flex flex-col justify-center">
              <p 
                key={`quote-${activeTestimonial}`}
                className="font-sans text-2xl lg:text-4xl font-medium leading-tight lg:leading-snug text-navy-900 mb-10 animate-fade-in"
              >
                "{testimonials[activeTestimonial].quote}"
              </p>
              
              <div key={`author-${activeTestimonial}`} className="animate-fade-in">
                <p className="font-bold text-xl text-navy-900 mb-2">{testimonials[activeTestimonial].name}</p>
                <p className="text-navy-900/60 uppercase tracking-widest text-xs font-semibold">{testimonials[activeTestimonial].role}</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </>
  );
}
