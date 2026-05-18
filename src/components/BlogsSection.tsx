import { Link } from "react-router-dom";
import { ArrowRight, Terminal } from "lucide-react";
import { blogs } from "@/lib/blogs";

export function BlogsSection() {
  const featuredBlog = blogs[0];

  return (
    <section id="blogs" className="py-24 px-6 relative bg-[#0a0705] border-t border-[#1e150f] overflow-hidden">
      
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}></div>
      
      <div className="container max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center">
        
        <div className="inline-flex items-center justify-center p-3 bg-[#16110d] border border-[#3e3025] rounded-full mb-6 shadow-xl">
          <Terminal className="w-6 h-6 text-[#e9a949]" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-serif drop-shadow-md">
          Technical Briefings
        </h2>
        <div className="w-24 h-1 bg-amber-600/50 mb-6 rounded-full"></div>
        
        <p className="text-lg text-[#a89988] mb-12 max-w-2xl font-medium">
          Post-mortem analyses, architectural deep-dives, and system design observations compiled into field reports.
        </p>

        {/* Featured Briefing Card */}
        <div className="w-full max-w-3xl text-left bg-[#16110d] border border-[#30241b] rounded-sm p-8 md:p-10 shadow-[5px_5px_20px_rgba(0,0,0,0.6)] relative group hover:border-[#4e3a2b] transition-colors duration-300">
          
          {/* Top-secret style accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e9a949]/10 via-[#e9a949] to-[#e9a949]/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="flex items-center justify-between mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-[#1e1611] border border-[#3e3025] text-xs font-mono tracking-widest text-[#a89988] rounded-sm">
              {featuredBlog.tag.toUpperCase()}
            </span>
            <span className="text-xs font-mono tracking-widest text-[#736353]">
              {featuredBlog.date}
            </span>
          </div>

          <a href={featuredBlog.href} className="block group/link">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-serif mb-4 group-hover/link:text-[#e9a949] transition-colors">
              {featuredBlog.title}
            </h3>
            <p className="text-[#dcd0c2] text-lg leading-relaxed mb-8 italic border-l-2 border-[#3e3025] pl-4">
              "{featuredBlog.excerpt}"
            </p>
            
            <div className="inline-flex items-center text-[#e9a949] font-bold tracking-widest text-sm uppercase">
              Access Full Report <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        <div className="mt-12">
          <Link 
            to="/blogs"
            className="inline-flex items-center px-8 py-4 bg-[#1e1611] border border-[#3e3025] hover:border-[#e9a949]/50 text-white font-bold tracking-widest text-sm uppercase rounded-sm shadow-md transition-all hover:-translate-y-1"
          >
            Open Archives Repository
          </Link>
        </div>
        
      </div>
    </section>
  );
}
