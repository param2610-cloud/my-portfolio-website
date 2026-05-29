import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import { projects } from "../components/ProjectsSection";
import { Button } from "@/components/ui/button";

const projectExtendedDetails: Record<string, {
  overview: string;
  features: string[];
  challenges: string;
}> = {
  alkaa: {
    overview: "An end-to-end HR & payroll platform supporting the full employee lifecycle — onboarding, attendance, leave, salary, and payslip generation — across unlimited organizations from a single auth layer. Supports 1000+ employees per organization with strict multi-tenant data isolation, hierarchical RBAC, and zero-downtime background processing.",
    features: [
      "Cloud-native multi-tenant SaaS backend with complete org-scoped data isolation via relational composite unique indexes.",
      "Hierarchical department self-relation structure with multi-level RBAC (scope-based permissions self → subordinates → department → organization).",
      "Custom database-backed async job queue from scratch with exponential retry backoff and crash recovery.",
      "Real-time streaming via Server-Sent Events (SSE) broadcasting work progress, eliminating frontend polling.",
      "React SPA build optimized using Vite manual chunk splitting, reducing bundle size by 28% and cutting TTI in half."
    ],
    challenges: "Maintaining complete data isolation and sub-50ms query latency while handling large transaction volumes across multi-tenant scopes. We solved this by enforcing orgId JWT guards on every query layer, composite database indexes, and batching dashboard queries via Promise.all()."
  },
  neighbourlink: {
    overview: "Hyperlocal community platform connecting verified neighbors within a configurable 1–15 km radius for resource sharing, emergency broadcasts, and secure communication — complete with an AI-powered KYC pipeline, real-time geospatial alerting, and 13-language dynamic localization.",
    features: [
      "Event-driven geospatial emergency alerting utilizing Firebase Cloud Functions and Firestore triggers.",
      "Spherical distance calculations using Haversine formula dispatched in parallel via concurrent batch FCM pushes.",
      "Automated KYC pipeline executing client-side Tesseract.js OCR and Gemini 1.5 Pro entity extraction under 5 seconds.",
      "In-memory Translation Caching layer intercepting translations to save API cost and achieve near-zero rendering latency.",
      "Real-time encrypted private chat integrating OLA Maps API for secure meeting point coordination."
    ],
    challenges: "Running high-frequency geospatial computations to alert the correct radius of neighbors instantly during an emergency without lagging the main UI. We resolved this by decoupling heavy spherical calculations to background Cloud Functions."
  },
  classedgee: {
    overview: "Distributed, AI-powered classroom management platform automating attendance via facial recognition, generating conflict-free semester schedules via constraint programming, and broadcasting real-time emergency alerts.",
    features: [
      "3-service distributed architecture separating Express API, FastAPI inference, and a Python RabbitMQ ML worker.",
      "Async face recognition pipeline utilizing ONNX-optimized ArcFace models extracting 512-dimensional biometric embeddings.",
      "NumPy NPZ compressed serialization on Cloudinary to version and atomically merge cohort face models.",
      "Boolean satisfiability solver using Google OR-Tools CP-SAT generating conflict-free schedules in under 60 seconds.",
      "Robust L2 cache invalidation, RabbitMQ failure isolation, and temporary file garbage collection guards."
    ],
    challenges: "Handling heavy deep learning models and satisfiability solvers on a tight 512MB memory limit on free cloud runtimes. We conquered this by building custom singletons, explicit memory collection garbage collectors, and lazy-loading models."
  },
  finsolve: {
    overview: "Role-Aware Enterprise Knowledge Engine built over a multi-department document corpus — enforcing strict role-based information boundaries at the vector retrieval layer and streaming responses token-by-token to the client.",
    features: [
      "5-stage NLP query processing pipeline: sanitization, spaCy NER entity extraction, intent routing, and lemmatization.",
      "Role-Based Access Control metadata filtering enforced directly at the vector database query layer (ChromaDB).",
      "Hybrid RAG routing that redirects structured-data queries directly to a deterministic Pandas DataFrame analytics engine.",
      "Custom NDJSON streaming protocol over Flask's stream_with_context for extremely low latency.",
      "Diff-based vector store lifecycle manager eliminating redundant re-embedding compute on cold starts."
    ],
    challenges: "Preventing unauthorized document leaks via prompt manipulation. We solved this by enforcing RBAC metadata filtering at the ChromaDB vector level, completely bypassing the prompt layer for security boundaries."
  },
  "assessment-engine": {
    overview: "An AI-driven student assessment evaluation and personalized learning recommendation engine mapping target curriculum goals to students' academic gaps.",
    features: [
      "Advanced RAG pipeline utilizing vector search for curriculum and contextual learning material lookup.",
      "Intelligent classification system classifying students' performance curves into dynamic difficulty tracks.",
      "Tabular and visual analytics dashboard tracking progress, gap coverage, and score improvement over time.",
      "Secure backend architecture with localized caching to ensure sub-100ms API response rates."
    ],
    challenges: "Generating mathematically and pedagogically correct recommendations on the fly. We developed a multi-tier fallback curriculum mapper that cross-references semantic document segments against class difficulty histories."
  },
  "dry-bean": {
    overview: "Multi-class morphological classification of dry bean varieties (13,611 samples, 16 geometric features) engineered iteratively across 3 model versions, demonstrating rigorous hypothesis-driven machine learning optimization.",
    features: [
      "Baseline Logistic Regression V1 scaled up to normalized StandardScaler V2 with class weight adjustments.",
      "Solver optimization in V3 utilizing L-BFGS for guaranteed convergence on high-dimensional data.",
      "Feature engineering and pairwise correlation analysis on 16 attributes (eccentricity, aspect ratio, shape factors).",
      "Class imbalance mitigation resolving majority bias and boosting minority class recall from 0.52 to 0.90.",
      "Achieved final 92.1% accuracy and 0.94 macro precision verified under stratified 80/20 train-test splits."
    ],
    challenges: "Severe class imbalance (e.g., Dermason with 7,000+ samples vs Bombay with 100 samples) causing baseline models to overfit majority classes. We applied class weights and solver regularizations to achieve a 1.00 F1-score on the minority class."
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0f0a07] text-[#e5d9cd] flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/wood_wall.webp)', backgroundBlendMode: 'overlay', backgroundSize: 'cover' }}>
        <h1 className="text-4xl font-bold mb-4 drop-shadow-md">Project Not Found</h1>
        <Link to="/#projects" className="text-orange-400 font-bold hover:underline">
          Return to Blueprint Room
        </Link>
      </div>
    );
  }

  const details = projectExtendedDetails[project.id] || {
    overview: project.description,
    features: [
      "End-to-end modular components optimized for scaling.",
      "Database schema optimization and safe query structures.",
      "State-of-the-art UI elements with high visual polish."
    ],
    challenges: "Optimizing system reliability and user interfaces under resource constraints."
  };

  return (
    <div className="min-h-screen bg-[#0f0a07] text-[#e5d9cd] selection:bg-orange-400/30">
      {/* Hero Section of the Project */}
      <div className="relative h-[65vh] w-full flex flex-col justify-end pb-16 px-6 md:px-12 lg:px-24 border-b-[12px] border-[#1e150f] shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        {/* Realistic vignette and warm tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a07] via-[#2c1d11]/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-orange-950/20 mix-blend-overlay z-10"></div>
        
        <div className="relative z-20 max-w-5xl">
          <Link to="/#projects" className="inline-flex items-center text-orange-300 font-bold mb-6 hover:text-white transition-colors bg-black/50 backdrop-blur-md px-4 py-2 rounded-sm border border-white/10 shadow-lg">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blueprint Room
          </Link>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            {project.description}
          </p>
        </div>
      </div>

      {/* Main Content Layout - Designed like a dark dossier on a desk */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        
        {/* Subtle dark texture background for the content area */}
        <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}></div>
        
        {/* Left Column: Story & Details */}
        <div className="lg:col-span-8 space-y-16 relative z-10">
          <section>
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#e9a949] mb-6 border-b-2 border-[#3e3025] pb-4 font-serif">
              The Vision
            </h2>
            <p className="text-lg leading-relaxed text-[#dcd0c2] font-medium">
              {details.overview}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#e9a949] mb-6 border-b-2 border-[#3e3025] pb-4 font-serif">
              Key Engineering Feats
            </h2>
            <ul className="space-y-4">
              {details.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#e9a949] mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-[#dcd0c2] font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#e9a949] mb-6 border-b-2 border-[#3e3025] pb-4 font-serif">
              The Challenge Conquered
            </h2>
            <div className="p-8 bg-[#16110d] border border-[#3a2d22] rounded-sm shadow-[inset_0_1px_3px_rgba(0,0,0,0.8),5px_5px_15px_rgba(0,0,0,0.3)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#e9a949]"></div>
              <p className="text-lg text-[#f0e4d7] font-medium leading-relaxed italic font-serif">
                "{details.challenges}"
              </p>
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar (Tech Stack & Links) */}
        <div className="lg:col-span-4 space-y-10 relative z-10">
          <div className="p-8 bg-[#16110d] border border-[#30241b] rounded-sm shadow-[5px_5px_20px_rgba(0,0,0,0.4)] relative">
            {/* Paper clip effect */}
            <div className="absolute -top-3 left-8 w-12 h-6 bg-amber-900/10 border border-amber-950/30 rounded-full transform -rotate-12 shadow-sm"></div>
            
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#e9a949] mb-6 font-serif mt-2">
              The Arsenal
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.tags.map(tech => (
                <span key={tech} className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#241c16] text-[#e5d2c0] rounded-sm border border-[#473527]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 bg-[#16110d] border border-[#30241b] rounded-sm shadow-[5px_5px_20px_rgba(0,0,0,0.4)] flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#e9a949] mb-2 font-serif">
              Explore the Code
            </h3>
            
            {project.links.github ? (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button className="w-full bg-[#e9a949] text-black hover:bg-[#cf9032] transition-colors py-6 text-sm tracking-widest font-bold shadow-md rounded-sm">
                  <Github className="w-5 h-5 mr-2" />
                  VIEW REPOSITORY
                </Button>
              </a>
            ) : (
              <Button disabled className="w-full bg-[#241c16] text-white/20 py-6 text-sm tracking-widest font-bold rounded-sm cursor-not-allowed">
                <Github className="w-5 h-5 mr-2" />
                NO PUBLIC REPO
              </Button>
            )}
            
            {project.links.live ? (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button variant="outline" className="w-full border-[#e9a949]/40 text-[#e9a949] hover:bg-[#e9a949]/10 hover:text-[#e9a949] transition-colors py-6 text-sm tracking-widest font-bold rounded-sm">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  LIVE DEMO
                </Button>
              </a>
            ) : (
              <Button disabled variant="outline" className="w-full border-gray-800 text-gray-600 py-6 text-sm tracking-widest font-bold rounded-sm cursor-not-allowed">
                <ExternalLink className="w-5 h-5 mr-2" />
                NO LIVE DEMO
              </Button>
            )}
            
            {project.links.docs ? (
              <a href={project.links.docs} target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button variant="ghost" className="w-full hover:bg-white/5 text-[#d4c3ab]/70 hover:text-white transition-colors py-6 text-sm tracking-widest font-bold rounded-sm">
                  <FileText className="w-5 h-5 mr-2" />
                  DOCUMENTATION
                </Button>
              </a>
            ) : (
              <Button disabled variant="ghost" className="w-full text-gray-600 py-6 text-sm tracking-widest font-bold rounded-sm cursor-not-allowed">
                <FileText className="w-5 h-5 mr-2" />
                NO DOCUMENTATION
              </Button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
