import { ArrowLeft, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPost } from "@/components/BlogPost";
import { blogs } from "@/lib/blogs";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-[#0a0705] relative px-6 py-24 selection:bg-orange-400/30">
      
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <Link
          to="/"
          className="inline-flex items-center text-[#e9a949] font-bold mb-12 hover:text-amber-300 transition-colors bg-[#1c130d] px-4 py-2 rounded-sm border border-[#3e2e22] shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Base
        </Link>

        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-[#16110d] border border-[#3e3025] rounded-full mb-6 shadow-xl">
            <Terminal className="w-6 h-6 text-[#e9a949]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-white tracking-tight drop-shadow-md">
            Archives Repository
          </h1>
          <p className="text-[#a89988] text-lg max-w-2xl font-medium mt-6 leading-relaxed">
            Deep dives into system design, incident analysis, and software engineering. Compiled for future reference and architectural post-mortems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <BlogPost
              key={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
              date={blog.date}
              tag={blog.tag}
              href={blog.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
