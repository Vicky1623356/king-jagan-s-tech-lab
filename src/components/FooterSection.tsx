import logo from "@/assets/logo.png";

export default function FooterSection() {
  return (
    <footer className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <img src={logo} alt="KING JAGAN" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 sm:mb-6" />
        
        <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-foreground tracking-wider text-glow mb-3 sm:mb-4">
          KING JAGAN Mobile Services
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mb-4 sm:mb-6 font-mono text-[10px] sm:text-xs text-muted-foreground">
          <span>Telegram: @ROOT_JAGAN</span>
          <span className="hidden sm:inline">|</span>
          <span>WhatsApp: +91 9556861114</span>
        </div>
        
        <p className="font-display text-xs sm:text-sm text-foreground tracking-wider mb-6 sm:mb-8">
          All Service Online 🔥🔥🔥
        </p>

        <div className="h-px w-24 sm:w-32 mx-auto bg-border/30 mb-4 sm:mb-6" />
        
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <p className="font-display text-xs sm:text-sm text-foreground tracking-wider text-glow">
            © {new Date().getFullYear()} KING JAGAN — All rights reserved
          </p>
          <a
            href="https://t.me/ServerRiver"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm text-foreground hover:text-primary transition-all duration-300 px-4 sm:px-6 py-2 sm:py-2.5 neon-border rounded-md glass-dark hover:box-glow group"
          >
            Made with <span className="text-destructive">❤️</span> by <span className="text-primary font-semibold">@ServerRiver</span>
            <span className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded bg-primary/20 text-primary border border-primary/40 group-hover:bg-primary/30 transition-colors font-display tracking-wider">
              TG ↗
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
