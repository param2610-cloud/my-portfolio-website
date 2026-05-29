import { ExternalLink, Github, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export const projects = [
  {
    id: "alkaa",
    title: "Alkaa",
    description: "Multi-tenant HRM SaaS with payroll, attendance, and role-based access.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "SaaS"],
    links: { 
      github: "https://github.com/param2610-cloud/Alkaa-HRM-SaaS", 
      live: "https://alkaa.online/", 
      docs: "https://drive.google.com/file/d/1ts_Gk8KAfBbVsSyyCYfhI9YG8VxvYZR5/view?usp=sharing" 
    },
    image: "/alkaa_real_bg.webp"
  },
  {
    id: "neighbourlink",
    title: "NeighbourLink",
    description: "Hyperlocal platform connecting neighbors within 1-15 km radius for resource sharing.",
    tags: ["React", "Firebase", "OLA Maps API", "AI"],
    links: { 
      github: "https://github.com/param2610-cloud/neighbourlink", 
      live: "https://neighbourlink-murex.vercel.app/",
      docs: "https://github.com/param2610-cloud/NeighbourLink/blob/main/README.md"
    },
    image: "/neighbourlink_real_bg.webp"
  },
  {
    id: "classedgee",
    title: "ClassEdgee",
    description: "AI-powered classroom management system automating attendance via face recognition.",
    tags: ["FastAPI", "RabbitMQ", "ONNX Runtime", "PostgreSQL"],
    links: { 
      github: "https://github.com/param2610-cloud/ClassEdgee", 
      live: "https://classedgee.vercel.app/",
      docs: "https://drive.google.com/file/d/1jFN--M_M85ybZjNnXCeqNzpbEjSOQIgt/view?usp=sharing"
    },
    image: "/classedgee_real_bg.webp"
  },
  {
    id: "finsolve",
    title: "FinSolve RAG",
    description: "Role-Aware Enterprise Knowledge Engine enforcing RBAC at the retrieval layer.",
    tags: ["Flask", "LangChain", "ChromaDB", "Groq", "spaCy"],
    links: { 
      github: "https://github.com/param2610-cloud/FinSolve-RAG-Assistant", 
      docs: "https://github.com/param2610-cloud/FinSolve-RAG-Assistant/blob/main/README.md"
    },
    image: "/projectxplore_real_bg.webp"
  },
  {
    id: "assessment-engine",
    title: "Assessment RAG",
    description: "AI assessment recommendation engine mapping gaps to learning modules.",
    tags: ["React", "Node.js", "RAG", "Vector Search"],
    links: { 
      github: "https://github.com/param2610-cloud/RAG-Assessment-Recommendation-Engine", 
      live: "https://assessment-recommendation-engine.vercel.app/",
      docs: "https://drive.google.com/file/d/1ROYLBWX5O5Z5gmePV6AgnwBp-LQr9pW5/view?usp=sharing" 
    },
    image: "/legallink_real_bg.webp"
  },
  {
    id: "dry-bean",
    title: "Dry Bean ML",
    description: "Iterative machine learning pipeline for multi-class morphological classification.",
    tags: ["Python", "scikit-learn", "Pandas", "NumPy"],
    links: { 
      github: "https://github.com/param2610-cloud/Dry-Bean-Prediction", 
      docs: "https://github.com/param2610-cloud/Dry-Bean-Prediction/blob/main/README.md"
    },
    image: "/bhoodrishti_real_bg.webp"
  }
];

export function ProjectsSection() {
  return (
    <section 
      id="projects" 
      className="relative py-32 px-6 min-h-screen flex items-center shadow-[inset_0_0_80px_rgba(0,0,0,0.6)]"
      style={{
        backgroundImage: 'url(/wood_wall.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Warm late afternoon sunlight overlay on the wood wall */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/30 via-orange-600/10 to-transparent z-0"></div>
      
      {/* Sunbeam effect */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-300/20 via-transparent to-transparent pointer-events-none z-0"></div>

      <div className="container max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg shadow-black">
            The <span className="text-orange-400">Blueprint Room</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto font-medium drop-shadow-md">
            Step up to the wall. Each frame holds a real solution engineered for the real world. Click to examine the details.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex flex-col items-center"
            >
              {/* The "Physical Frame" mounted on the wall */}
              <Link 
                to={`/project/${project.id}`}
                className="w-full relative block overflow-hidden rounded-sm bg-[#1a1a1a] border-[12px] border-[#2c221a] shadow-[15px_25px_30px_rgba(0,0,0,0.7),_inset_0_5px_15px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
                style={{
                  borderStyle: 'solid',
                  borderTopColor: '#3a2d22', // Catching the sunlight from above
                  borderLeftColor: '#2c221a',
                  borderRightColor: '#1d1510',
                  borderBottomColor: '#1d1510' // Shadowed bottom edge
                }}
              >
                {/* Photorealistic Background Image */}
                <div 
                  className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                
                {/* Physical Glass reflection effect over the photo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-10 pointer-events-none transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                
                {/* Dark gradient for text legibility at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-300"></div>
                
                <div className="p-8 h-[340px] flex flex-col justify-end relative z-20">
                  <div>
                    <h3 className="text-3xl font-bold mb-3 text-white drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-6 font-medium line-clamp-2 drop-shadow-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-[10px] uppercase font-bold tracking-widest text-white/80 border border-white/30 rounded-sm bg-black/40 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Realistic Brass Nameplate pinned to the wood wall */}
              <div className="mt-6 px-6 py-2 bg-gradient-to-b from-[#d4af37] via-[#aa8222] to-[#806015] border border-[#f3e5ab]/30 rounded-[2px] text-center shadow-[0_5px_10px_rgba(0,0,0,0.5)] transform transition-transform duration-300 relative">
                {/* Brass Screws */}
                <div className="absolute top-1/2 left-2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]"></div>
                <div className="absolute top-1/2 right-2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]"></div>
                
                <span className="text-[9px] text-black/60 uppercase tracking-[0.3em] font-bold">Exhibit {(index + 1).toString().padStart(2, '0')}</span>
                <div className="text-black/90 text-xs font-serif mt-0.5 font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">{project.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}