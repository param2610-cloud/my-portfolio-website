import { Briefcase, TrendingUp, Users, Zap } from "lucide-react";

const experiences = [
  {
    title: "Junior Technical Associate",
    company: "SAPMATE",
    period: "October 2024 – Present",
    icon: <Briefcase className="w-5 h-5" />,
    achievements: [
      {
        text: "Led frontend development of sapmate.com using React/Next.js, improving load time by 40% and SEO traffic by 60%",
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        text: "Developed Alkaa, an enterprise HR SaaS platform for custom role and payroll management, now used by 5+ SMEs",
        icon: <Users className="w-4 h-4" />
      },
      {
        text: "Designed mobile-optimized marketing UI that reduced bounce rate by 35% and increased signups by 30%",
        icon: <Zap className="w-4 h-4" />
      }
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-heading animate-fade-in">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.company}
              className="card-hover p-8 rounded-xl border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  {experience.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold gradient-text mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-1">
                    {experience.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {experience.period}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {experience.achievements.map((achievement, achievementIndex) => (
                  <div
                    key={achievementIndex}
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${(index * 0.1) + (achievementIndex * 0.05)}s` }}
                  >
                    <div className="text-primary mt-1 opacity-70">
                      {achievement.icon}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.text}
                    </p>
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