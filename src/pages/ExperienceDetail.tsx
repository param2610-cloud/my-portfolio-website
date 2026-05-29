import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";

const experienceDetails: Record<string, any> = {
  "sapmate": {
    company: "Sapmate",
    title: "Founding Engineer (Full-Stack)",
    period: "October 2024 – September 2025",
    mandate: "Acted as the sole engineering force to design and build 3 production systems from scratch: Sapmate Skill Academy LMS, Sapmate Galaxy CRM, and the Sapmate Main Website for admission processing.",
    feats: [
      "Architected 21 REST API modules defining the entire API infrastructure including authentication, course management, batch scheduling, and progress analytics.",
      "Built real-time systems using Socket.IO with JWT-gated WebSocket connections for live video upload progress streaming.",
      "Implemented AES-256-CBC encryption for video IDs and JWT-gated session tokens to protect content from unauthorized sharing.",
      "Developed a hierarchical i18n architecture enabling per-product string overrides without forking the shared locale file.",
      "Engineered server-driven form validation schemas with a pessimistic update pattern and uniform retry policies."
    ],
    tags: ["REACT", "NESTJS", "WEBSOCKETS", "AES-256", "TYPESCRIPT", "TAILWIND"]
  },
  "flytbase": {
    company: "FlytBase",
    title: "Software Developer Intern",
    period: "December 2025 – May 2026",
    mandate: "Designed and implemented a real-time event ingestion and processing pipeline for multi-source telemetry (radar, optical sensors), integrating RabbitMQ, MQTT, Redis, and Kafka.",
    feats: [
      "Built a Python-based microservice (AsyncIO) to consume high-frequency event streams and normalize heterogeneous data formats.",
      "Designed a distributed service health monitoring and failure detection system using Redis for reliable coordination.",
      "Developed message batching and aggregation pipelines to reduce downstream traffic and improve throughput under burst loads.",
      "Built resilient RabbitMQ consumers with connection pooling, auto-reconnect logic, and subscription lifecycle management.",
      "Refactored legacy architectures into capability-driven designs using database flags and secure topic isolation."
    ],
    tags: ["PYTHON", "ASYNCIO", "RABBITMQ", "REDIS", "KAFKA", "MQTT", "DISTRIBUTED SYSTEMS"]
  }
};

export default function ExperienceDetail() {
  const { id } = useParams();
  const experience = experienceDetails[id as string];

  if (!experience) {
    return (
      <div className="min-h-screen bg-[#0f0a07] text-[#e5d9cd] flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/wood_wall.webp)', backgroundBlendMode: 'overlay', backgroundSize: 'cover' }}>
        <h1 className="text-4xl font-bold mb-4 drop-shadow-md">Dossier Not Found</h1>
        <Link to="/#experience" className="text-orange-400 font-bold hover:underline">
          Return to Cabinet
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0a07] text-[#e5d9cd] selection:bg-orange-400/30">
      {/* Dossier Header */}
      <div className="relative pt-24 pb-16 px-6 md:px-12 lg:px-24 border-b-[12px] border-[#1e150f] shadow-[0_20px_30px_rgba(0,0,0,0.5)] bg-[#130d0a] overflow-hidden">
        
        {/* Subtle top-secret texture */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}></div>
        
        <div className="relative z-20 max-w-5xl">
          <Link to="/#experience" className="inline-flex items-center text-orange-400 font-bold mb-8 hover:text-orange-300 transition-colors bg-[#1c130d] px-4 py-2 rounded-sm border border-[#3e2e22] shadow-lg">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Cabinet
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-red-900/30 text-red-400 border border-red-900/50 text-xs font-bold tracking-[0.2em] uppercase rounded-sm flex items-center">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Verified Record
                </span>
                <span className="text-[#a89988] font-mono text-sm tracking-widest uppercase">
                  {experience.period}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                {experience.company}
              </h1>
              <p className="text-2xl text-[#e9a949] max-w-3xl font-medium tracking-wide">
                {experience.title}
              </p>
            </div>
            
            {/* Top Secret Stamp Visual */}
            <div className="hidden md:flex flex-col items-end opacity-40 transform rotate-12">
              <div className="border-4 border-red-600 rounded-sm p-4 text-red-600 font-bold text-4xl tracking-widest uppercase">
                CLASSIFIED
              </div>
              <div className="text-red-600 font-mono text-xs mt-2 font-bold">
                REF: {id?.toUpperCase()}-SEC-01
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dossier Content Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        
        {/* Subtle dark texture background for the content area */}
        <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}></div>
        
        {/* Left Column: Report Details */}
        <div className="lg:col-span-8 space-y-16 relative z-10">
          <section>
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#e9a949] mb-6 border-b-2 border-[#3e3025] pb-4 font-serif">
              The Mandate
            </h2>
            <p className="text-xl leading-relaxed text-[#dcd0c2] font-serif italic border-l-4 border-[#3e3025] pl-6 bg-[#16110d] py-4 pr-4 shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]">
              "{experience.mandate}"
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#e9a949] mb-6 border-b-2 border-[#3e3025] pb-4 font-serif">
              Tactical Execution
            </h2>
            <ul className="space-y-6">
              {experience.feats.map((feat: string, i: number) => (
                <li key={i} className="flex items-start bg-[#16110d] p-5 border border-[#30241b] rounded-sm shadow-md transition-transform hover:-translate-y-1 duration-300">
                  <CheckCircle2 className="w-5 h-5 text-[#e9a949] mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-[#dcd0c2] font-medium leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column: Clearance & Tags */}
        <div className="lg:col-span-4 space-y-10 relative z-10">
          <div className="p-8 bg-[#16110d] border border-[#30241b] rounded-sm shadow-[5px_5px_20px_rgba(0,0,0,0.4)] relative">
            {/* Paper clip effect */}
            <div className="absolute -top-3 left-8 w-12 h-6 bg-slate-400/20 border border-slate-500/30 rounded-full transform -rotate-12 shadow-sm backdrop-blur-sm"></div>
            
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#e9a949] mb-6 font-serif mt-2">
              Approved Arsenal
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {experience.tags.map((tech: string) => (
                <span key={tech} className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#241c16] text-[#e5d2c0] rounded-sm border border-[#473527] shadow-inner">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="p-8 bg-[#16110d] border border-[#30241b] rounded-sm shadow-[5px_5px_20px_rgba(0,0,0,0.4)] opacity-80">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#736353] mb-4 font-serif">
              Document Metadata
            </h3>
            <div className="space-y-3 font-mono text-xs text-[#9a8673]">
              <div className="flex justify-between border-b border-[#30241b] pb-2">
                <span>CLEARANCE:</span>
                <span className="text-[#e9a949]">LEVEL 4</span>
              </div>
              <div className="flex justify-between border-b border-[#30241b] pb-2">
                <span>AUTHOR:</span>
                <span>SYSTEM DB</span>
              </div>
              <div className="flex justify-between border-b border-[#30241b] pb-2">
                <span>STATUS:</span>
                <span className="text-green-500">DECRYPTED</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
