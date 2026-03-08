import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { label: "HOME", href: "#" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-border/30">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="KING JAGAN" className="h-10 w-10 rounded-full" />
          <span className="font-display text-sm font-bold text-foreground tracking-wider text-glow hidden sm:inline">
            KING JAGAN
          </span>
        </a>
        
        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-display text-xs tracking-[0.2em] text-muted-foreground hover:text-foreground hover:text-glow transition-all duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden font-mono text-foreground text-sm"
        >
          {open ? "[CLOSE]" : "[MENU]"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass-dark border-b border-border/30 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-xs tracking-[0.2em] text-muted-foreground hover:text-foreground transition-all"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
