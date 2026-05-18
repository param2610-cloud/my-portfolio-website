import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import bannerBg from "@/assets/banner.png";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
    >
      {/* Background Image Setup */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Mobile Overlay (Full background overlay with custom deep slate-forest tint for readability) */}
        <div className="absolute inset-0 md:hidden bg-[#0c1619]/90 backdrop-blur-[4px] z-0" />

        {/* Desktop Overlay (Beautiful fading gradient glassmorphism with a customized deep navy-forest tint that harmonizes with your shirt and the trees) */}
        <div
          className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0a1215]/75 via-[#0a1215]/40 to-transparent z-0"
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0) 75%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0) 75%)',
          }}
        />

        {/* Bottom Fade Overlay (Seamlessly transitions the hero banner into the standard page background color at the bottom) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
      </div>

      <div className="container mx-auto z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full pt-24 pb-12 md:py-0">
        {/* Left side content */}
        <div className="md:col-span-8 lg:col-span-7 flex flex-col items-start text-left animate-fade-in duration-1000">

          {/* Mobile Profile Photo (optional, showing on mobile only since background handles desktop) */}
          <div className="md:hidden w-24 h-24 mb-6 rounded-full overflow-hidden border-2 border-primary/50 shadow-xl animate-fade-in">
            <img
              src={profilePhoto}
              alt="Parambrata Ghosh"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mb-6 fade-in-delayed">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-lg text-foreground">
              Parambrata <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-md">Ghosh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground/90 font-semibold drop-shadow-sm">
              Software Engineer
            </h2>
          </div>

          <div className="max-w-xl mb-8 fade-in-delayed">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium drop-shadow-sm">
              Detail-oriented Software Engineer experienced in full-stack web development
              with a strong portfolio of SaaS, AI, and geospatial projects. Proven leadership
              in hackathons and internship settings. Skilled in React, Node.js, Python,
              PostgreSQL, and cloud-native architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mb-8 fade-in-delayed">
            <ContactItem
              icon={<Mail className="w-4 h-4" />}
              label="Email"
              value="parambrataghosh26@gmail.com"
              href="mailto:parambrataghosh26@gmail.com"
            />
            <ContactItem
              icon={<Linkedin className="w-4 h-4" />}
              label="LinkedIn"
              value="linkedin.com/in/parambrataghosh"
              href="https://www.linkedin.com/in/parambrataghosh"
            />
            <ContactItem
              icon={<Github className="w-4 h-4" />}
              label="GitHub"
              value="github.com/param2610-cloud"
              href="https://www.github.com/param2610-cloud"
            />
            <ContactItem
              icon={<MapPin className="w-4 h-4" />}
              label="Location"
              value="Howrah, India"
            />
          </div>

          <div className="flex flex-wrap gap-4 fade-in-delayed">
            <Button className="btn-primary shadow-lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button className="btn-outline bg-background/60 backdrop-blur-md shadow-lg border-primary/50 hover:bg-primary hover:border-primary" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function ContactItem({ icon, label, value, href }: ContactItemProps) {
  const content = (
    <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 border border-border/50 hover:bg-card transition-all duration-300 hover:shadow-md">
      <div className="text-primary">{icon}</div>
      <div className="text-left">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block hover:scale-105 transition-transform duration-300"
      >
        {content}
      </a>
    );
  }

  return content;
}