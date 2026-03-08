export default function FooterSection() {
  return (
    <footer className="relative py-12 px-4 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-display text-xl font-bold text-foreground tracking-wider text-glow mb-4">
          KING JAGAN Mobile Services
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 font-mono text-xs text-muted-foreground">
          <span>Telegram: @ROOT_JAGAN</span>
          <span className="hidden sm:inline">|</span>
          <span>WhatsApp: +91 9556861114</span>
        </div>
        
        <p className="font-display text-sm text-foreground tracking-wider">
          All Service Online 🔥🔥🔥
        </p>
        
        <div className="mt-8 font-mono text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} KING JAGAN — All rights reserved
        </div>
      </div>
    </footer>
  );
}
