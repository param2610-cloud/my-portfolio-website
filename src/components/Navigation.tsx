import { useState, useEffect } from "react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "blogs", label: "Blogs" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      setScrolled(window.scrollY > 50);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a1215]/90 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent pt-4'}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-white tracking-tighter">
          Parambrata<span className="text-sky-400">.</span>
        </div>
        <ul className="hidden md:flex space-x-8 items-center bg-black/20 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative ${
                  activeSection === item.id
                    ? "text-sky-300 drop-shadow-[0_0_8px_rgba(125,211,252,0.5)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
        <div className="md:hidden text-white">
          {/* Mobile menu trigger could go here */}
        </div>
      </div>
    </nav>
  );
}
