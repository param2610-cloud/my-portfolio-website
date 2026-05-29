import { 
  Code, Globe, Server, Database, Terminal, Package, Cloud, Users 
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const allSkills = [
  { name: "TypeScript", category: "Language", icon: <Code className="w-8 h-8"/>, color: "#3178C6", exp: "3+ years", details: "Primary choice for full-stack. Used in Alkaa, ClassEdgee, React and Node.js codebases for robust typing." },
  { name: "Python", category: "Language", icon: <Code className="w-8 h-8"/>, color: "#3776AB", exp: "3+ years", details: "Built AsyncIO microservices, FastAPI backends, constraint solvers, and ML inference pipelines." },
  { name: "Node.js", category: "Backend", icon: <Server className="w-8 h-8"/>, color: "#339933", exp: "3+ years", details: "Architected multi-tenant SaaS, distributed systems, WebSocket servers, and async job queues." },
  { name: "React", category: "Frontend", icon: <Globe className="w-8 h-8"/>, color: "#61DAFB", exp: "4 years", details: "Expert in SPAs. Optimized performance, virtualized lists, and complex state management with Zustand." },
  { name: "PostgreSQL", category: "Database", icon: <Database className="w-8 h-8"/>, color: "#4169E1", exp: "3 years", details: "Designed 30+ table normalized schemas, composite indexes, and strict multi-tenant data isolation." },
  { name: "Redis", category: "Database", icon: <Database className="w-8 h-8"/>, color: "#DC382D", exp: "2 years", details: "Built distributed health monitoring, failure detection, and high-performance caching layers." },
  { name: "RabbitMQ", category: "Messaging", icon: <Server className="w-8 h-8"/>, color: "#FF6600", exp: "2 years", details: "Designed real-time event ingestion and distributed ML pipelines with durable message queues." },
  { name: "Next.js", category: "Frontend", icon: <Globe className="w-8 h-8"/>, color: "#ffffff", exp: "2 years", details: "Built branch-scoped IT asset management and server-rendered applications with App Router." },
  { name: "Tailwind", category: "Frontend", icon: <Globe className="w-8 h-8"/>, color: "#06B6D4", exp: "3 years", details: "Go-to styling solution. Used for responsive, accessible, and design-system tokenized UI components." },
  { name: "Prisma", category: "Tools", icon: <Package className="w-8 h-8"/>, color: "#ffffff", exp: "2 years", details: "Used for type-safe database access, atomic transactions, and complex schema migrations." },
  { name: "Docker", category: "DevOps", icon: <Terminal className="w-8 h-8"/>, color: "#2496ED", exp: "2 years", details: "Containerized microservices, managed environment configurations, and CI/CD deployment pipelines." },
  { name: "AWS", category: "Cloud", icon: <Cloud className="w-8 h-8"/>, color: "#FF9900", exp: "1+ years", details: "Utilized EC2, S3, and CloudWatch for deploying, storing, and monitoring backend systems." },
];

export function SkillsSection() {
  return (
    <section 
      id="skills" 
      className="relative min-h-screen py-24 px-6 overflow-hidden flex items-center justify-center shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]"
      style={{
        backgroundImage: `url(/wood_wall.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Warm late afternoon sunlight overlay on the wood wall */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-orange-600/5 to-transparent z-0"></div>
      
      {/* Sunbeam effect */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-300/15 via-transparent to-transparent pointer-events-none z-0"></div>

      <div className="container max-w-6xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-4 drop-shadow-xl tracking-tight">
            My <span className="text-sky-400">Armory</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg drop-shadow-md">
            Hover over each mounted plaque to see my experience and knowledge across different technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
          {allSkills.map((skill, index) => (
            <HoverCard key={skill.name} openDelay={100} closeDelay={100}>
              <HoverCardTrigger asChild>
                <div 
                  className="group relative cursor-pointer flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 z-10"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    background: 'linear-gradient(145deg, rgba(30,30,30,0.9), rgba(15,15,15,0.9))',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  {/* Subtle inner glow matching the skill color */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent)` }}
                  ></div>
                  
                  <div 
                    className="mb-3 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-white/90 text-sm tracking-wide text-center">
                    {skill.name}
                  </h3>
                </div>
              </HoverCardTrigger>
              <HoverCardContent 
                side="top"
                className="w-80 bg-[#111827]/95 backdrop-blur-xl border-white/10 shadow-2xl rounded-xl p-5 text-white z-50 animate-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-black/50" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{skill.name}</h4>
                      <p className="text-xs text-sky-400 font-medium uppercase tracking-wider">{skill.category}</p>
                    </div>
                  </div>
                  <div className="bg-white/10 px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                    {skill.exp}
                  </div>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  {skill.details}
                </p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}