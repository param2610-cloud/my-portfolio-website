import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border/50 bg-card/30">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center space-x-2">
          <span>Built with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>using React & Tailwind CSS</span>
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © 2025 Parambrata Ghosh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}