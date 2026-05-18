import { useState } from "react";
import { Mail, Linkedin, Github, ExternalLink, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill out your name, email, and message.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Build FormData exactly like the Web3Forms React implementation
      const formPayload = new FormData();
      formPayload.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "");
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("subject", formData.subject || "Portfolio Contact Direct");
      formPayload.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });
      
      const result = await response.json();
      if (response.ok && result.success) {
        toast({
          title: "Dispatch Sent",
          description: "Your message has been securely transmitted. Thank you!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.warn("API submit failed, falling back to client-side mailto redirect:", error);
      
      // Resilient Fallback: If network is offline, open native mailto client.
      const emailBody = `Agent: ${formData.name}\nReturn Address: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoUrl = `mailto:parambrataghosh26@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Portfolio Secure Dispatch"
      )}&body=${encodeURIComponent(emailBody)}`;
      
      window.location.href = mailtoUrl;

      toast({
        title: "Redirecting to Mail Client",
        description: "Network offline or relay issue. Redirecting you to send directly!",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-[#0a0705] border-t border-[#1e150f]">
      
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight text-center drop-shadow-md font-serif">
            The Dispatch
          </h2>
          <div className="w-24 h-1 bg-amber-600/50 mt-6 rounded-full"></div>
          <p className="mt-6 text-[#a89988] text-lg max-w-2xl text-center font-medium">
            Open channels for engineering collaborations, project inquiries, or just a technical discussion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Social / Direct Comms */}
          <div className="space-y-8">
            <div className="bg-[#16110d] border border-[#3e3025] rounded-sm p-8 shadow-[5px_5px_15px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <h3 className="text-xl font-bold tracking-[0.2em] uppercase text-[#e9a949] font-serif mb-8 border-b border-[#30241b] pb-4">
                Direct Channels
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-6 p-5 rounded-sm bg-[#1e1611] border border-[#30241b] hover:border-[#e9a949]/50 transition-all duration-300 hover:shadow-md group"
                  >
                    <div className="p-3 bg-[#0a0705] border border-[#3e3025] rounded-full text-[#a89988] group-hover:text-[#e9a949] group-hover:border-[#e9a949] transition-colors">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white tracking-wide">{link.name}</div>
                      <div className="text-sm font-mono text-[#736353] group-hover:text-[#a89988] transition-colors mt-1">{link.label}</div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#3e3025] group-hover:text-[#e9a949] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Secure Transmission Form */}
          <div className="bg-[#16110d] border border-[#3e3025] rounded-sm p-8 shadow-[5px_5px_15px_rgba(0,0,0,0.5)] relative">
            <h3 className="text-xl font-bold tracking-[0.2em] uppercase text-[#e9a949] font-serif mb-8 border-b border-[#30241b] pb-4">
              Secure Transmission
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold tracking-[0.1em] text-[#a89988] uppercase">
                    Agent Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-[#0a0705] border-[#30241b] text-[#dcd0c2] placeholder:text-[#4e3a2b] focus-visible:ring-[#e9a949]/50 rounded-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold tracking-[0.1em] text-[#a89988] uppercase">
                    Return Frequency (Email)
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-[#0a0705] border-[#30241b] text-[#dcd0c2] placeholder:text-[#4e3a2b] focus-visible:ring-[#e9a949]/50 rounded-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold tracking-[0.1em] text-[#a89988] uppercase">
                  Subject Directive
                </label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="bg-[#0a0705] border-[#30241b] text-[#dcd0c2] placeholder:text-[#4e3a2b] focus-visible:ring-[#e9a949]/50 rounded-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold tracking-[0.1em] text-[#a89988] uppercase">
                  Encrypted Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message details here..."
                  rows={5}
                  className="bg-[#0a0705] border-[#30241b] text-[#dcd0c2] placeholder:text-[#4e3a2b] focus-visible:ring-[#e9a949]/50 rounded-sm resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#e9a949] hover:bg-[#cf9032] text-black font-bold tracking-widest text-sm uppercase py-6 rounded-sm shadow-md transition-all flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Dispatch Message
                  </>
                )}
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}