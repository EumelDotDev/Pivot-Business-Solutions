import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Who We Serve | Pivot Business Solutions",
  description: "Where are you in your journey? Tailored advisory for athletes, professionals, and business leaders.",
};

const Pathway = ({ 
  number,
  title, 
  desc, 
  challenges, 
  support, 
  imageSrc,
  reverse
}: { 
  number: string,
  title: string, 
  desc: string, 
  challenges: string[], 
  support: string[], 
  imageSrc: string,
  reverse?: boolean
}) => (
  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch mb-32 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    <div className={`relative w-full h-full min-h-[500px] bg-navy-900/5 rounded-[2.5rem] overflow-hidden ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
      <img 
        src={imageSrc} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
      />
    </div>
    
    <div className={`flex flex-col justify-center ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
      <div className="flex items-center gap-4 mb-6 text-red-main text-xs tracking-[0.2em] uppercase font-semibold">
        <span className="w-8 h-px bg-red-main"></span>
        <span>Pathway {number}</span>
      </div>
      <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">{title}</h2>
      <p className="text-lg text-navy-900/70 font-light mb-10 leading-relaxed">{desc}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        <div>
          <h4 className="text-xs uppercase tracking-widest text-navy-900 font-semibold mb-4 border-b border-navy-900/10 pb-2">The Challenge</h4>
          <ul className="space-y-2 text-sm text-navy-900/70 font-light">
            {challenges.map((c, i) => <li key={i}>— {c}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-navy-900 font-semibold mb-4 border-b border-navy-900/10 pb-2">How We Help</h4>
          <ul className="space-y-2 text-sm text-navy-900/70 font-light">
            {support.map((s, i) => <li key={i}>— {s}</li>)}
          </ul>
        </div>
      </div>
      
      <div>
        <Link href={`/contact?intent=${encodeURIComponent(title)}`}>
          <Button variant="outline" className="text-navy-900 border-navy-900 hover:bg-navy-900 hover:text-white" withArrow>
            Start As {title.replace("I'm a ", "").replace("I'm an ", "")}
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default function WhoWeServePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ivory pt-48 pb-32 border-b border-navy-900/10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight text-navy-900 mb-8 max-w-4xl mx-auto">
            Where are you in <br />
            <span className="italic text-navy-800/60">your journey?</span>
          </h1>
          <p className="text-lg text-navy-900/60 max-w-2xl mx-auto font-light">
            The principles of high performance are universal, but the application is deeply personal. 
            Select the path that best describes your current reality.
          </p>
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="bg-ivory-light text-navy-900 py-32">
        <div className="container mx-auto px-6 lg:px-12">
          
          <Pathway 
            number="01"
            title="I'm an Athlete"
            desc="Navigating the intense pressures of elite sport, preparing for career transitions, and managing the business of being a professional athlete."
            challenges={[
              "Identity tied exclusively to performance",
              "Anxiety surrounding post-career transition",
              "Complex off-field decision making",
              "Managing an evolving public profile"
            ]}
            support={[
              "Objective career and life counseling",
              "Strategic transition planning",
              "Business and management advisory",
              "Performance psychology frameworks"
            ]}
            imageSrc="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          />

          <Pathway 
            number="02"
            title="I'm a Young Professional"
            desc="Seeking clarity, building confidence, and establishing a clear direction for personal and professional development in a noisy world."
            challenges={[
              "Paralysis by analysis in career choices",
              "Imposter syndrome and lack of confidence",
              "Burnout from misaligned effort",
              "Difficulty establishing professional boundaries"
            ]}
            support={[
              "Values and strengths alignment",
              "Career trajectory mapping",
              "Confidence and communication coaching",
              "Action-oriented goal setting"
            ]}
            imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            reverse={true}
          />

          <Pathway 
            number="03"
            title="I'm a Business Leader"
            desc="Driving strategy, managing complex teams, and seeking sustainable organizational growth without sacrificing personal well-being."
            challenges={[
              "Isolation at the top of the organization",
              "Operational friction and siloed teams",
              "Difficulty scaling the company's culture",
              "Strategic vision lost in daily execution"
            ]}
            support={[
              "Unbiased executive sounding board",
              "Organizational health assessments",
              "Strategic alignment and planning",
              "Leadership development and mentoring"
            ]}
            imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          />

        </div>
      </section>

    </>
  );
}
