import { motion } from "framer-motion";
import Scene3D from "./Scene3D";
import logo from "@/assets/logo.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden grid-bg pt-16">
      <Scene3D />
      
      <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="flex justify-center mb-4 sm:mb-6 md:mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <img
              src={logo}
              alt="KING JAGAN Logo"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-2 border-primary/40 box-glow"
            />
          </motion.div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-glow text-foreground mb-2 sm:mb-4 tracking-wider leading-tight">
            KING JAGAN
          </h1>
          
          <motion.div
            className="h-[2px] w-32 sm:w-48 md:w-64 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-3 sm:mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          
          <h2 className="font-display text-base sm:text-lg md:text-2xl lg:text-3xl text-neon-blue text-glow-blue font-semibold mb-3 sm:mb-6 tracking-wide">
            Mobile Repair Engineer
          </h2>
          
          <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Professional Mobile Software & Hardware Services
          </p>
          
          <motion.div
            className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#services"
              className="px-6 sm:px-8 py-2.5 sm:py-3 neon-border rounded-md font-display text-xs sm:text-sm tracking-widest text-foreground hover:bg-primary/10 transition-all duration-300 box-glow text-center"
            >
              EXPLORE SERVICES
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary/20 border border-primary/50 rounded-md font-display text-xs sm:text-sm tracking-widest text-primary hover:bg-primary/30 transition-all duration-300 text-center"
            >
              CONTACT NOW
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
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
