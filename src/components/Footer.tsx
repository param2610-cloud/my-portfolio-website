import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-[#1e150f] bg-[#0a0705]">
      <div className="container max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
        <div className="w-12 h-1 bg-amber-600/30 rounded-full mb-2"></div>
        <p className="text-[#a89988] flex items-center justify-center space-x-2 text-sm font-mono tracking-wide">
          <span>BUILT WITH</span>
          <Heart className="w-4 h-4 text-amber-500 fill-current" />
          <span>REACT & TAILWIND</span>
        </p>
        <p className="text-xs text-[#736353] mt-2 tracking-widest font-serif">
          © {new Date().getFullYear()} PARAMBRATA GHOSH. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}