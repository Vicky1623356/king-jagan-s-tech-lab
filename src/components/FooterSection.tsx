import logo from "@/assets/logo.png";

export default function FooterSection() {
  return (
    <footer className="relative py-16 px-4 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <img src={logo} alt="KING JAGAN" className="w-16 h-16 rounded-full mx-auto mb-6" />
        
        <h3 className="font-display text-xl font-bold text-foreground tracking-wider text-glow mb-4">
          KING JAGAN Mobile Services
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 font-mono text-xs text-muted-foreground">
          <span>Telegram: @ROOT_JAGAN</span>
          <span className="hidden sm:inline">|</span>
          <span>WhatsApp: +91 9556861114</span>
        </div>
        
        <p className="font-display text-sm text-foreground tracking-wider mb-8">
          All Service Online 🔥🔥🔥
        </p>

        <div className="h-px w-32 mx-auto bg-border/30 mb-6" />
        
        <div className="flex flex-col items-center gap-3">
          <p className="font-mono text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} KING JAGAN — All rights reserved
          </p>
          <a
            href="https://t.me/ServerRiver"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground/40 hover:text-primary transition-colors duration-300"
          >
            Made with ❤️ by @ServerRiver
            <span className="text-[10px] px-2 py-0.5 rounded border border-border/30 hover:border-primary/40 transition-colors">
              TG ↗
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
