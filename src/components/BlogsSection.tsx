import { BlogPost } from "./BlogPost";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogs } from "@/lib/blogs";
import { Button } from "@/components/ui/button";

export function BlogsSection() {
  const featuredBlog = blogs[0];

  return (
    <section id="blogs" className="blogs-section px-6 pt-20 pb-24">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          My Technical Blogs
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Exploring system design, distributed systems, and software engineering
          concepts through real-world case studies and post-mortem analyses.
        </p>

        <div className="grid grid-cols-1 gap-8">
          <BlogPost
            title={featuredBlog.title}
            excerpt={featuredBlog.excerpt}
            date={featuredBlog.date}
            tag={featuredBlog.tag}
            href={featuredBlog.href}
          />
        </div>

        <div className="mt-10">
          <Button className="btn-outline" asChild>
            <Link to="/blogs">
              View Blogs Page
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
