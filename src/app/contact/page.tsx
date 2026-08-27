"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    topic: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", role: "", topic: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <section className="bg-navy-900 pt-48 pb-32 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* HERO / INFO */}
            <div>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight text-white mb-8">
                Let&apos;s talk about <br />
                <span className="italic text-white/60">what&apos;s next.</span>
              </h1>
              <p className="text-lg text-white/70 max-w-md font-light leading-relaxed mb-16">
                Whether you&apos;re ready to begin an advisory relationship or simply want to explore how we can support your goals, we&apos;re here to listen.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/50 mb-2 font-semibold">Direct Inquiry</h4>
                  <a href="mailto:hello@pivotbusiness.com" className="text-white hover:text-red-main transition-colors text-lg">
                    hello@pivotbusiness.com
                  </a>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/50 mb-2 font-semibold">Location</h4>
                  <p className="text-white text-lg">Sydney, Australia</p>
                  <p className="text-white/70 text-sm mt-1">Available globally via remote advisory.</p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white p-8 md:p-12 border border-white/10 relative">
              {status === "success" ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-12 text-center text-navy-900">
                  <div className="w-16 h-16 bg-navy-900/5 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-red-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-3xl mb-4">Message Sent</h3>
                  <p className="text-navy-900/70 mb-8 font-light">Thank you for reaching out. We will review your message and respond shortly.</p>
                  <Button onClick={() => setStatus("idle")} variant="secondary">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-semibold tracking-widest uppercase text-navy-900">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-navy-900/5 border border-transparent focus:border-red-main focus:ring-1 focus:ring-red-main px-4 py-3 text-navy-900 placeholder:text-navy-900/30 transition-colors outline-none"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-semibold tracking-widest uppercase text-navy-900">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-navy-900/5 border border-transparent focus:border-red-main focus:ring-1 focus:ring-red-main px-4 py-3 text-navy-900 placeholder:text-navy-900/30 transition-colors outline-none"
                      placeholder="jane@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="role" className="block text-xs font-semibold tracking-widest uppercase text-navy-900">I'm reaching out as...</label>
                    <div className="relative">
                      <select 
                        id="role" 
                        name="role" 
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full bg-navy-900/5 border border-transparent focus:border-red-main focus:ring-1 focus:ring-red-main px-4 py-3 text-navy-900 appearance-none transition-colors outline-none"
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="athlete">An Athlete</option>
                        <option value="young_professional">A Young Professional / Student</option>
                        <option value="business_leader">A Business Leader</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4 text-navy-900/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="topic" className="block text-xs font-semibold tracking-widest uppercase text-navy-900">What would you like to discuss?</label>
                    <div className="relative">
                      <select 
                        id="topic" 
                        name="topic" 
                        required
                        value={formData.topic}
                        onChange={handleChange}
                        className="w-full bg-navy-900/5 border border-transparent focus:border-red-main focus:ring-1 focus:ring-red-main px-4 py-3 text-navy-900 appearance-none transition-colors outline-none"
                      >
                        <option value="" disabled>Select a topic</option>
                        <option value="people_performance">People & Performance (Counseling/Development)</option>
                        <option value="management_consulting">Management Consulting (Strategy/Operations)</option>
                        <option value="speaking_press">Speaking / Press Inquiry</option>
                        <option value="general">General Inquiry</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4 text-navy-900/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold tracking-widest uppercase text-navy-900">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-navy-900/5 border border-transparent focus:border-red-main focus:ring-1 focus:ring-red-main px-4 py-3 text-navy-900 placeholder:text-navy-900/30 transition-colors outline-none resize-none"
                      placeholder="Briefly describe what you're looking to achieve..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-navy-900 text-white hover:bg-navy-800"
                      disabled={status === "submitting"}
                      withArrow
                    >
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
