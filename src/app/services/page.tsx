import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services | Pivot Business Solutions",
  description: "Solutions for people. Strategies for performance.",
};

const ServiceDetail = ({ title, content }: { title: string, content: string }) => (
  <div className="mb-10 pb-10 border-b border-navy-900/10 last:border-0 last:pb-0 last:mb-0">
    <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-red-main mb-4">{title}</h4>
    <p className="text-navy-900/75 font-light leading-relaxed text-lg">{content}</p>
  </div>
);

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-900 pt-48 pb-32 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white mb-8 max-w-4xl">
            Solutions for people. <br />
            <span className="text-white/50 italic">Strategies for performance.</span>
          </h1>
        </div>
      </section>

      {/* PEOPLE & PERFORMANCE */}
      <section id="people" className="bg-ivory text-navy-900 py-32 border-b border-navy-900/10 scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <div className="flex items-center gap-4 mb-6 text-red-main text-xs tracking-[0.2em] uppercase font-semibold">
                  <span className="w-8 h-px bg-red-main"></span>
                  <span>Discipline 01</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                  People & Performance
                </h2>
                
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-navy-900/5 mb-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-red-main/90"></div>
                  <h3 className="text-sm font-semibold tracking-widest uppercase mb-4 text-navy-900">Core Capabilities</h3>
                  <ul className="space-y-3 text-sm font-light text-navy-900/70">
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 text-red-main shrink-0" /> Professional counseling</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 text-red-main shrink-0" /> Life counseling</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 text-red-main shrink-0" /> Personal development</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 text-red-main shrink-0" /> Career clarity</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 text-red-main shrink-0" /> Performance development</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 text-red-main shrink-0" /> Transition support</li>
                  </ul>
                </div>
                
                <div className="text-sm font-medium tracking-wide flex flex-wrap gap-4 text-navy-900/50 uppercase">
                  <span>For: Young People</span>
                  <span>&bull;</span>
                  <span>Students</span>
                  <span>&bull;</span>
                  <span>Early-Career Professionals</span>
                  <span>&bull;</span>
                  <span>Athletes</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 pt-12 lg:pt-24 border-t border-navy-900/10 lg:border-t-0">
              <ServiceDetail 
                title="What is it?" 
                content="A structured, empathetic, and rigorously objective advisory relationship designed to help individuals navigate pivotal moments in their lives and careers. We combine professional counseling principles with high-performance coaching to address both the human experience and the drive for achievement." 
              />
              <ServiceDetail 
                title="Who is it for?" 
                content="Individuals facing significant transitions—whether it's an athlete preparing for life after sports, a young professional seeking career clarity, or a student overwhelmed by the pressure of expectation. This is for those who recognize that personal well-being and professional success are inextricably linked." 
              />
              <ServiceDetail 
                title="Why does it matter?" 
                content="Because talent without direction leads to burnout, and ambition without clarity leads to frustration. The most significant barriers to success are rarely external; they are internal narratives, undefined goals, and a lack of objective counsel. We provide the external perspective necessary to reframe these challenges." 
              />
              <ServiceDetail 
                title="What happens next?" 
                content="We begin with a deep diagnostic conversation to understand your current reality. From there, we define clear objectives and establish a regular cadence of advisory sessions, creating a safe, confidential space for strategy, reflection, and accountability." 
              />
            </div>
          </div>
        </div>
      </section>

      {/* MANAGEMENT CONSULTING */}
      <section id="consulting" className="bg-ivory-light text-navy-900 py-32 border-b border-navy-900/10 scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5 relative order-1 lg:order-2">
              <div className="sticky top-32">
                <div className="flex items-center gap-4 mb-6 text-red-main text-xs tracking-[0.2em] uppercase font-semibold">
                  <span className="w-8 h-px bg-red-main"></span>
                  <span>Discipline 02</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                  Management Consulting
                </h2>
                
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-navy-900/5 mb-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-red-main/90"></div>
                  <h3 className="text-sm font-semibold tracking-widest uppercase mb-4 text-navy-900">Core Capabilities</h3>
                  <ul className="space-y-3 text-sm font-light text-navy-900/70">
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 text-red-main shrink-0" /> Strategic planning</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 text-red-main shrink-0" /> Management consulting</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 text-red-main shrink-0" /> Operational improvement</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 text-red-main shrink-0" /> Leadership support</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 text-red-main shrink-0" /> Athlete management consulting</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 text-red-main shrink-0" /> Business advisory</li>
                  </ul>
                </div>
                
                <div className="text-sm font-medium tracking-wide flex flex-wrap gap-4 text-navy-900/50 uppercase">
                  <span>For: Businesses</span>
                  <span>&bull;</span>
                  <span>Athletes</span>
                  <span>&bull;</span>
                  <span>Organizations</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 pt-12 lg:pt-24 border-t border-navy-900/10 lg:border-t-0 order-2 lg:order-1">
              <ServiceDetail 
                title="What is it?" 
                content="Expert, objective advisory services focused on organizational health, strategic direction, and operational efficiency. We partner with leadership teams to diagnose systemic issues, align resources, and execute complex strategies without the bloat of traditional consulting firms." 
              />
              <ServiceDetail 
                title="Who is it for?" 
                content="Business owners, executive teams, and organizations experiencing growing pains, preparing for a strategic pivot, or struggling with operational friction. It is also tailored for athletes requiring sophisticated management of their broader business enterprises." 
              />
              <ServiceDetail 
                title="Why does it matter?" 
                content="Organizations often become too close to their own problems to see the solutions. Silos form, communication breaks down, and strategic initiatives stall. We bring an uncompromising, external perspective that cuts through internal politics, focusing entirely on what drives sustainable performance." 
              />
              <ServiceDetail 
                title="What happens next?" 
                content="Following an initial consultation to determine scope, we conduct a rapid, thorough assessment of the organization. We then present a candid strategic roadmap and, unlike firms that leave a report on a desk, we remain engaged to advise on the execution and implementation of those strategies." 
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
