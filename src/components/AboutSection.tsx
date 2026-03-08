import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 grid-bg overflow-hidden">
      {/* Maa Kali glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <div className="text-[20rem] leading-none select-none">🙏</div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(280 100% 50% / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-muted-foreground text-sm tracking-[0.3em] mb-2">
            {"// ABOUT.SYS"}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-glow text-foreground tracking-wider mb-4">
            ABOUT
          </h2>
          <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <motion.div
          className="p-8 md:p-12 rounded-lg neon-border glass-dark scanline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="font-mono text-xs text-muted-foreground mb-6">
            {">"} cat /home/kingjagan/about.txt
          </div>
          
          <div className="space-y-4 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              <span className="text-foreground font-semibold text-glow">KING JAGAN</span> is a professional Mobile Repair Engineer 
              specializing in both software and hardware solutions. With years of expertise in mobile technology, 
              he provides top-tier services for all major smartphone brands.
            </p>
            <p>
              From bootloader unlocking to IMEI repair, FRP bypass to custom ROM flashing — 
              KING JAGAN delivers reliable solutions both online and offline, serving clients worldwide.
            </p>
            <p>
              Whether you need emergency device recovery, root access, or advanced software modifications — 
              every service is handled with precision and care.
            </p>
            
            <div className="pt-4 border-t border-border/30">
              <p className="text-foreground font-display text-xl tracking-wider text-center">
                All Mobile Services Available Online 🔥🔥🔥
              </p>
            </div>

            <div className="pt-4 text-center">
              <p className="text-neon-purple font-display text-sm tracking-widest uppercase">
                🙏 जय माँ काली 🙏
              </p>
              <p className="font-mono text-xs text-muted-foreground mt-1">
                Devoted Maa Kali Bhakt
              </p>
            </div>
          </div>

          {/* Terminal cursor */}
          <div className="mt-6 font-mono text-xs text-muted-foreground flex items-center gap-1">
            <span>{">"}</span>
            <span className="inline-block w-2 h-4 bg-primary animate-pulse-glow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
