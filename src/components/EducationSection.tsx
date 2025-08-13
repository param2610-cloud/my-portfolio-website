import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";

const education = {
  degree: "Bachelor of Technology in Computer Science & Engineering",
  institution: "Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex – JIS Group, Kolkata",
  gpa: "8.218/10.00",
  period: "June 2022 – June 2026",
  secondary: "Sri Ramkrishna Sikshalaya, Howrah",
  secondaryScores: {
    secondary: "86.2% (2020)",
    higherSecondary: "83.6% (2022)"
  }
};

const achievements = [
  {
    title: "Smart India Hackathon 2024 Finalist",
    description: "Technical Leader on SIH1625 problem, selected as one of five finalists from 500 submissions",
    icon: <Trophy className="w-5 h-5" />
  },
  {
    title: "Project Published in Book",
    description: "IoT-based motion detection system, ISBN 978-81-983133-1-7, pages 1-7",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    title: "Tech Fest Winner",
    description: "DevRush event with team Hexabytes",
    icon: <Award className="w-5 h-5" />
  },
  {
    title: "Hack4Bengal Participant",
    description: "3.0: NutriLens AI nutrition scanner; 4.0: LegalLink AI legal aid",
    icon: <Trophy className="w-5 h-5" />
  }
];

const certificates = [
  "Programming in Python (Meta)",
  "Database Management System (NPTEL)",
  "AI Agent Architect (IBM)",
  "Linux Command-Line & Shell Scripting"
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-heading animate-fade-in">Education & Achievements</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="card-hover p-8 rounded-xl border border-border/50 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold gradient-text">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-6">
                <h4 className="font-semibold text-lg mb-2">{education.degree}</h4>
                <p className="text-muted-foreground mb-2">{education.institution}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{education.period}</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                    GPA: {education.gpa}
                  </span>
                </div>
              </div>
              
              <div className="border-l-2 border-muted pl-6">
                <h4 className="font-medium mb-2">{education.secondary}</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Secondary: {education.secondaryScores.secondary}</p>
                  <p>Higher Secondary: {education.secondaryScores.higherSecondary}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="card-hover p-8 rounded-xl border border-border/50 fade-in-delayed">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold gradient-text">Achievements</h3>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="flex items-start space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary mt-1">{achievement.icon}</div>
                  <div>
                    <h4 className="font-medium mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-8 card-hover p-8 rounded-xl border border-border/50 fade-in-delayed">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-lg text-primary">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold gradient-text">Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((certificate, index) => (
              <div
                key={certificate}
                className="bg-muted/50 p-4 rounded-lg border border-border/30 hover:bg-muted/70 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <p className="font-medium text-sm">{certificate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}