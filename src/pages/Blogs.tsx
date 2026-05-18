import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPost } from "@/components/BlogPost";
import { ThemeToggle } from "@/components/ThemeToggle";
import { blogs } from "@/lib/blogs";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-20">
      <ThemeToggle />

      <div className="container max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blogs</h1>
        <p className="text-muted-foreground text-lg mb-10">
          Deep dives into system design, incident analysis, and software engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
