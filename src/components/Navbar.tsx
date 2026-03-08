import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { label: "HOME", href: "#" },
  { label: "SERVICES", href: "#services" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
  { label: "JOIN GROUP", href: "https://t.me/ROOT_JAGAN", external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-border/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <img src={logo} alt="KING JAGAN" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" />
          <span className="font-display text-xs sm:text-sm font-bold text-foreground tracking-wider text-glow hidden xs:inline sm:inline">
            KING JAGAN
          </span>
        </a>
        
        <div className="hidden md:flex gap-4 lg:gap-8 items-center">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`font-display text-[10px] lg:text-xs tracking-[0.15em] lg:tracking-[0.2em] transition-all duration-300 ${
                l.external
                  ? "text-primary hover:text-glow px-3 py-1 neon-border rounded-md hover:box-glow"
                  : "text-muted-foreground hover:text-foreground hover:text-glow"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden font-mono text-foreground text-xs sm:text-sm p-2"
        >
          {open ? "[✕]" : "[☰]"}
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
            <div className="px-4 py-3 sm:py-4 flex flex-col gap-3 sm:gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setOpen(false)}
                  className={`font-display text-xs tracking-[0.2em] transition-all py-1 ${
                    l.external
                      ? "text-primary hover:text-glow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
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
