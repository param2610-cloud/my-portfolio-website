import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";

const education = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "Dr. Sudhir Chandra Sur Institute of Technology – JIS Group, Kolkata",
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
    description: "Technical Leader on SIH1625 problem, top 5 finalist from 500+ submissions.",
    icon: <Trophy className="w-5 h-5 text-amber-500" />
  },
  {
    title: "Project Published in Book",
    description: "IoT-based motion detection system (ISBN 978-81-983133-1-7, pages 1-7).",
    icon: <BookOpen className="w-5 h-5 text-amber-500" />
  },
  {
    title: "Tech Fest Winner",
    description: "DevRush event champion with team Hexabytes.",
    icon: <Award className="w-5 h-5 text-amber-500" />
  },
  {
    title: "Hack4Bengal Participant",
    description: "Built NutriLens AI scanner (v3.0) & LegalLink AI legal aid (v4.0).",
    icon: <Trophy className="w-5 h-5 text-amber-500" />
  }
];

const certificates = [
  "Programming in Python (Meta)",
  "Database Management System (NPTEL)",
  "AI Agent Architect (IBM)",
  "Linux Command-Line & Scripting"
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 relative bg-[#0f0a07] border-t border-[#1e150f]">
      
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-900/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight text-center drop-shadow-md font-serif">
            Academic Archives
          </h2>
          <div className="w-24 h-1 bg-amber-600/50 mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Column: Education Credentials */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold tracking-[0.2em] uppercase text-[#e9a949] font-serif mb-2">Credentials</h3>
            
            <div className="bg-[#16110d] border border-[#3e3025] rounded-sm p-8 shadow-[5px_5px_15px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-1 duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <GraduationCap className="w-24 h-24 text-amber-500" />
              </div>
              
              <div className="relative z-10 space-y-8">
                <div className="border-l-2 border-[#e9a949]/50 pl-6">
                  <h4 className="text-2xl font-bold text-white mb-2">{education.degree}</h4>
                  <p className="text-[#a89988] mb-4 text-sm leading-relaxed">{education.institution}</p>
                  <div className="flex flex-wrap gap-4 items-center font-mono text-xs">
                    <span className="text-[#a89988] tracking-widest">{education.period}</span>
                    <span className="bg-[#241c16] text-[#e9a949] px-3 py-1 rounded-sm border border-[#473527]">
                      GPA: {education.gpa}
                    </span>
                  </div>
                </div>
                
                <div className="border-l-2 border-[#3e3025] pl-6">
                  <h4 className="text-lg font-bold text-white/80 mb-2">{education.secondary}</h4>
                  <div className="font-mono text-xs text-[#736353] space-y-2">
                    <p>SECONDARY: <span className="text-[#a89988]">{education.secondaryScores.secondary}</span></p>
                    <p>HIGHER SECONDARY: <span className="text-[#a89988]">{education.secondaryScores.higherSecondary}</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Block inside Left Column */}
            <h3 className="text-xl font-bold tracking-[0.2em] uppercase text-[#e9a949] font-serif mt-6 mb-2">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map((cert) => (
                <div key={cert} className="bg-[#16110d] border border-[#30241b] p-4 rounded-sm shadow-inner flex items-center space-x-3 group hover:border-[#4e3a2b] transition-colors">
                  <BookOpen className="w-4 h-4 text-[#e9a949] opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium text-[#dcd0c2]">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Honors & Awards */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold tracking-[0.2em] uppercase text-[#e9a949] font-serif mb-2">Honors & Awards</h3>
            
            <div className="bg-[#16110d] border border-[#3e3025] rounded-sm p-8 shadow-[5px_5px_15px_rgba(0,0,0,0.5)] h-full">
              <div className="space-y-6">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start space-x-4 border-b border-[#30241b] pb-6 last:border-0 last:pb-0">
                    <div className="bg-[#241c16] p-3 rounded-sm border border-[#473527] shadow-inner mt-1">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                      <p className="text-[#a89988] text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}