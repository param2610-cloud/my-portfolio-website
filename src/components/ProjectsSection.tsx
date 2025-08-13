import { ExternalLink, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Alkaa",
    description: "HR Management SaaS: Multi-tenant HRM system with payroll, attendance, and role-based access built using React, Node.js, PostgreSQL, and Redis.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "SaaS"],
    links: {
      github: "#",
      live: "#",
      docs: "#"
    }
  },
  {
    title: "NeighbourLink",
    description: "Hyperlocal platform connecting neighbors to share resources like tools and medical equipment.",
    tags: ["React", "Node.js", "Community", "Sharing Platform"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "ClassEdgee",
    description: "Smart Classroom System: AI-powered class management platform with face-recognition attendance and scheduling, built with React, FastAPI, and PostgreSQL.",
    tags: ["React", "FastAPI", "PostgreSQL", "AI", "Face Recognition"],
    links: {
      github: "#",
      docs: "#"
    }
  },
  {
    title: "ProjectXplore",
    description: "Project Collaboration App: 30K+ LOC full-stack system for real-time project management and team collaboration using Next.js, Express.js, and PostgreSQL.",
    tags: ["Next.js", "Express.js", "PostgreSQL", "Real-time", "Collaboration"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "LegalLink",
    description: "AI Legal Assistant: AI-integrated legal aid platform with lawyer matching and case tracking, uses Next.js, FastAPI, RAG models, and PostgreSQL.",
    tags: ["Next.js", "FastAPI", "AI", "RAG", "Legal Tech"],
    links: {
      github: "#",
      live: "#",
      docs: "#"
    }
  },
  {
    title: "BhooDrishti",
    description: "Satellite Monitoring Tool: Change detection system using GEE APIs and GIS exports for tracking deforestation and encroachments.",
    tags: ["GIS", "Satellite Data", "Environmental", "APIs"],
    links: {
      github: "#",
      docs: "#"
    }
  },
  {
    title: "Bank Management System",
    description: "GUI-based banking system in Python with MySQL backend, supporting secure login, transactions, and KYC features.",
    tags: ["Python", "MySQL", "GUI", "Banking", "Security"],
    links: {
      github: "#"
    }
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-heading animate-fade-in">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-hover p-6 rounded-xl border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-3 gradient-text">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex space-x-2">
                {project.links.github && (
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                )}
                {project.links.live && (
                  <Button size="sm" className="flex-1 btn-primary" asChild>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </a>
                  </Button>
                )}
                {project.links.docs && (
                  <Button size="sm" variant="ghost" asChild>
                    <a href={project.links.docs} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}