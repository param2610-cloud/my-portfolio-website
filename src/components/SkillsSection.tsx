import { 
  Code, 
  Globe, 
  Server, 
  Database, 
  Terminal, 
  Package, 
  Cloud, 
  Users 
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5" />,
    skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Frontend",
    icon: <Globe className="w-5 h-5" />,
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: ["Node.js", "Express.js", "FastAPI", "ASP.NET", ".NET Framework"]
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    title: "Tools & DevOps",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["Git", "Shell Scripting", "Vite", "ESLint", "Linux CLI"]
  },
  {
    title: "Libraries",
    icon: <Package className="w-5 h-5" />,
    skills: ["Prisma", "NumPy", "Pandas", "Scikit-Learn", "OpenCV", "Matplotlib"]
  },
  {
    title: "Cloud & Platforms",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["AWS basic", "Cloudinary", "Firebase"]
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    skills: ["Technical Leadership", "Project Architecture", "Team Management", "Agile"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-heading animate-fade-in">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="card-hover p-6 rounded-xl border border-border/50 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-primary">{category.icon}</div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="skill-badge text-xs"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}