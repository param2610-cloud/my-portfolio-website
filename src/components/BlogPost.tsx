import { ArrowRight } from "lucide-react";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  href: string;
}

export function BlogPost({ title, excerpt, date, tag, href }: BlogPostProps) {
  return (
    <div className="w-full text-left bg-[#16110d] border border-[#30241b] rounded-sm p-8 shadow-[5px_5px_15px_rgba(0,0,0,0.5)] relative group hover:border-[#4e3a2b] transition-colors duration-300 h-full flex flex-col">
      
      {/* Top-secret style accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e9a949]/10 via-[#e9a949] to-[#e9a949]/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex items-center justify-between mb-6">
        <span className="inline-flex items-center px-3 py-1 bg-[#1e1611] border border-[#3e3025] text-xs font-mono tracking-widest text-[#a89988] rounded-sm">
          {tag.toUpperCase()}
        </span>
        <span className="text-xs font-mono tracking-widest text-[#736353]">
          {date}
        </span>
      </div>

      <a href={href} className="block group/link flex-grow">
        <h3 className="text-2xl font-bold text-white font-serif mb-4 group-hover/link:text-[#e9a949] transition-colors">
          {title}
        </h3>
        <p className="text-[#dcd0c2] text-base leading-relaxed mb-8 italic border-l-2 border-[#3e3025] pl-4">
          "{excerpt}"
        </p>
      </a>
      
      <div className="mt-auto pt-4">
        <a href={href} className="inline-flex items-center text-[#e9a949] font-bold tracking-widest text-sm uppercase group/link">
          Access Full Report <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
