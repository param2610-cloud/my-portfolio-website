import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export function HeroSection() {
  return (
    <section id="hero" className="hero-section px-6 pt-32">
      <div className="container max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl animate-float">
            <img
              src={profilePhoto}
              alt="Parambrata Ghosh - Software Engineer"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Parambrata Ghosh
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Software Engineer
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-8 fade-in-delayed">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Detail-oriented Software Engineer experienced in full-stack web development 
            with a strong portfolio of SaaS, AI, and geospatial projects. Proven leadership 
            in hackathons and internship settings. Skilled in React, Node.js, Python, 
            PostgreSQL, and cloud-native architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8 fade-in-delayed">
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
            icon={<Phone className="w-4 h-4" />}
            label="Mobile"
            value="+91 8420282255"
            href="tel:+918420282255"
          />
          <ContactItem
            icon={<MapPin className="w-4 h-4" />}
            label="Location"
            value="Howrah, West Bengal, India"
          />
        </div>

        <div className="flex justify-center space-x-4 fade-in-delayed">
          <Button className="btn-primary" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button className="btn-outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
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