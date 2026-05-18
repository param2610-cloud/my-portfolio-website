import { Link } from "react-router-dom";
import { FolderLock } from "lucide-react";

const experiences = [
  {
    id: "flytbase",
    company: "FlytBase",
    title: "Software Developer Intern",
    period: "December 2025 – May 2026",
    tagline: "Designed real-time event ingestion and processing pipelines for multi-source telemetry using Python AsyncIO, RabbitMQ, and Redis."
  },
  {
    id: "sapmate",
    company: "Sapmate",
    title: "Founding Engineer (Full-Stack)",
    period: "October 2024 – September 2025",
    tagline: "Led the entire engineering division, building 3 production systems from scratch including an LMS, CRM, and Admission pipeline."
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 relative bg-[#0f0a07] border-t border-[#1e150f] overflow-hidden">
      
      {/* Background texture matching the desk/cabinet vibe */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/10 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-[#16110d] border border-[#3e3025] rounded-full mb-6 shadow-xl">
            <FolderLock className="w-6 h-6 text-[#e9a949]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight text-center drop-shadow-md font-serif">
            Classified Dossiers
          </h2>
          <p className="mt-4 text-[#a89988] text-lg max-w-2xl text-center font-medium">
            Authorized personnel only. Access detailed service records and engineering mandates from active and past deployments.
          </p>
        </div>
        
        {/* The Filing Cabinet Layout */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-4xl mx-auto relative pt-4">
          {experiences.map((experience, index) => (
            <Link 
              key={experience.id} 
              to={`/experience/${experience.id}`}
              className="group relative block"
            >
              {/* Folder Tab (Visually positioned on top of the card) */}
              <div className="absolute -top-8 left-6 md:left-10 bg-[#1e1611] border border-b-0 border-[#3e3025] px-6 py-2 rounded-t-lg z-0 transition-transform duration-300 group-hover:-translate-y-2 shadow-[0_-5px_10px_rgba(0,0,0,0.5)]">
                <span className="text-xs font-bold font-mono tracking-widest text-[#a89988] group-hover:text-[#e9a949] transition-colors">
                  FILE REF: {experience.id.toUpperCase()}
                </span>
              </div>
              
              {/* The Folder Body */}
              <div className="relative z-10 bg-[#16110d] border border-[#30241b] rounded-sm rounded-tl-none md:rounded-tl-sm p-8 md:p-10 shadow-[5px_5px_20px_rgba(0,0,0,0.6)] transition-all duration-300 transform group-hover:-translate-x-2 group-hover:-translate-y-1 group-hover:border-[#4e3a2b] group-hover:shadow-[15px_15px_30px_rgba(0,0,0,0.8)] overflow-hidden">
                
                {/* Decorative right-side accent tape/stripe */}
                <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#3e2b1c] to-[#1e150f] opacity-50 group-hover:from-[#e9a949] group-hover:to-[#cf9032] transition-colors duration-500"></div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2 font-serif group-hover:text-[#e9a949] transition-colors">
                      {experience.company}
                    </h3>
                    <h4 className="text-xl text-[#dcd0c2] font-medium mb-4">
                      {experience.title}
                    </h4>
                    <p className="text-[#a89988] leading-relaxed italic border-l-2 border-[#3e3025] pl-4">
                      {experience.tagline}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-3 mt-2 md:mt-0">
                    <span className="inline-flex items-center px-4 py-1.5 bg-[#1e1611] border border-[#3e3025] text-sm font-mono tracking-wider text-[#a89988] rounded-sm shadow-inner group-hover:border-[#e9a949]/50 transition-colors">
                      {experience.period}
                    </span>
                    <span className="text-xs font-bold tracking-[0.2em] text-[#e9a949] uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                      Open Dossier &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}