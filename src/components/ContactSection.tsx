import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:parambrataghosh26@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    label: "parambrataghosh26@gmail.com"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/parambrataghosh",
    icon: <Linkedin className="w-5 h-5" />,
    label: "linkedin.com/in/parambrataghosh"
  },
  {
    name: "GitHub",
    href: "https://www.github.com/param2610-cloud",
    icon: <Github className="w-5 h-5" />,
    label: "github.com/param2610-cloud"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-heading animate-fade-in">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about technology and software development.
            </p>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-4 rounded-lg border border-border/50 hover:bg-card transition-all duration-300 hover:shadow-md hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary">{link.icon}</div>
                  <div>
                    <div className="font-medium">{link.name}</div>
                    <div className="text-sm text-muted-foreground">{link.label}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-hover p-8 rounded-xl border border-border/50 fade-in-delayed">
            <h3 className="text-xl font-semibold mb-6 gradient-text">
              Send a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or just say hello!"
                  rows={6}
                  className="bg-background/50 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full btn-primary"
                onClick={async (e) => {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const subject = (document.getElementById("subject") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbypQIdEK-Xs6B7b3dWttdo73NUKr6NRI7NHDMy9r4rWeYbVdM8fxaiU6uL3bsYqPLd8/exec", {
        method: "POST",
        // mode: "no-cors", // avoid CORS issues
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  }}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}