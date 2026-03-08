import { motion } from "framer-motion";
import Scene3D from "./Scene3D";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <Scene3D />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="font-mono text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {"// SYSTEM INITIALIZED"}
          </motion.p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-glow text-foreground mb-4 tracking-wider">
            KING JAGAN
          </h1>
          
          <motion.div
            className="h-[2px] w-48 md:w-64 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-neon-blue text-glow-blue font-semibold mb-6 tracking-wide">
            Mobile Repair Engineer
          </h2>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional Mobile Software & Hardware Services
          </p>
          
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#services"
              className="px-8 py-3 neon-border rounded-md font-display text-sm tracking-widest text-foreground hover:bg-primary/10 transition-all duration-300 box-glow"
            >
              EXPLORE SERVICES
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-primary/20 border border-primary/50 rounded-md font-display text-sm tracking-widest text-primary hover:bg-primary/30 transition-all duration-300"
            >
              CONTACT NOW
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-primary/50 flex justify-center pt-1">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse-glow" />
        </div>
      </motion.div>
    </section>
  );
}
