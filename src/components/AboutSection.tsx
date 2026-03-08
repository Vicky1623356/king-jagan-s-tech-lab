import { motion } from "framer-motion";
import kingjaganPhoto from "@/assets/kingjagan-photo.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 grid-bg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <div className="text-[10rem] sm:text-[15rem] md:text-[20rem] leading-none select-none">🙏</div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(280 100% 50% / 0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-muted-foreground text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-2">
            {"// ABOUT.SYS"}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-glow text-foreground tracking-wider mb-3 sm:mb-4">
            ABOUT
          </h2>
          <div className="h-[2px] w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Glitchy photo reveal */}
          <motion.div
            className="w-full sm:w-80 md:w-96 lg:w-[420px] flex-shrink-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Terminal header */}
              <div className="bg-muted/80 rounded-t-lg px-3 py-2 flex items-center gap-2 neon-border border-b-0">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                </div>
                <span className="font-mono text-[10px] sm:text-xs text-muted-foreground ml-2">flash_firmware.exe — installing...</span>
              </div>

              {/* Photo container with glitch effect */}
              <div className="relative overflow-hidden neon-border border-t-0 rounded-b-lg">
                {/* Scanline overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-30"
                  style={{
                    background: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(120 100% 50% / 0.03) 2px, hsl(120 100% 50% / 0.03) 4px)",
                  }}
                />

                {/* Glitch lines */}
                <motion.div
                  className="absolute inset-0 z-10 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute left-0 right-0 h-[2px] bg-primary/40"
                      style={{ top: `${15 + i * 18}%` }}
                      animate={{
                        x: [0, 10, -5, 3, 0],
                        opacity: [0, 1, 0.5, 1, 0],
                        scaleX: [1, 1.5, 0.8, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>

                {/* The photo with reveal animation */}
                <motion.div
                  className="relative"
                  initial={{ 
                    clipPath: "inset(100% 0% 0% 0%)",
                    filter: "hue-rotate(90deg) saturate(3) brightness(2)",
                  }}
                  whileInView={{
                    clipPath: "inset(0% 0% 0% 0%)",
                    filter: "hue-rotate(0deg) saturate(1) brightness(1)",
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    clipPath: { duration: 2, ease: [0.25, 0.1, 0.25, 1] },
                    filter: { duration: 3, delay: 0.5 },
                  }}
                >
                  <img
                    src={kingjaganPhoto}
                    alt="KING JAGAN at work"
                    className="w-full h-auto object-cover"
                  />
                  {/* Green tint overlay */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0.6 }}
                    whileInView={{ opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3, delay: 1 }}
                    style={{ background: "linear-gradient(180deg, hsl(120 100% 50% / 0.3) 0%, hsl(120 100% 20% / 0.5) 100%)" }}
                  />
                </motion.div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-background/80 px-3 py-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[9px] sm:text-[10px] text-primary animate-pulse-glow">INJECTING FIRMWARE...</span>
                    <motion.span
                      className="font-mono text-[9px] sm:text-[10px] text-muted-foreground"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.span
                        initial={{ content: "0%" }}
                        animate={{}}
                      >
                        100%
                      </motion.span>
                    </motion.span>
                  </div>
                  <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.5, ease: "easeInOut" }}
                      style={{ boxShadow: "0 0 10px hsl(120 100% 50% / 0.5)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Terminal output below */}
              <motion.div
                className="mt-2 font-mono text-[9px] sm:text-[10px] text-muted-foreground space-y-0.5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.5 }}
              >
                <p className="text-primary">✓ firmware.img loaded successfully</p>
                <p className="text-primary">✓ device: KING_JAGAN_v∞</p>
                <p className="text-primary">✓ status: LEGENDARY ENGINEER</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="flex-1 p-5 sm:p-8 md:p-10 rounded-lg neon-border glass-dark scanline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="font-mono text-[10px] sm:text-xs text-muted-foreground mb-4 sm:mb-6 overflow-x-auto">
              {">"} cat /home/kingjagan/about.txt
            </div>
            
            <div className="space-y-3 sm:space-y-4 font-body text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
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
              
              <div className="pt-3 sm:pt-4 border-t border-border/30">
                <p className="text-foreground font-display text-base sm:text-lg md:text-xl tracking-wider text-center">
                  All Mobile Services Available Online 🔥🔥🔥
                </p>
              </div>

              <div className="pt-3 sm:pt-4 text-center">
                <p className="text-neon-purple font-display text-xs sm:text-sm tracking-widest uppercase">
                  🙏 जय माँ काली 🙏
                </p>
                <p className="font-mono text-[10px] sm:text-xs text-muted-foreground mt-1">
                  Devoted Maa Kali Bhakt
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 font-mono text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1">
              <span>{">"}</span>
              <span className="inline-block w-2 h-3 sm:h-4 bg-primary animate-pulse-glow" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
