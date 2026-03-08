import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-muted-foreground text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-2">
            {"// CONNECT.NOW"}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-glow text-foreground tracking-wider mb-3 sm:mb-4">
            CONTACT
          </h2>
          <div className="h-[2px] w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-8 sm:mb-12" />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.a
            href="https://wa.me/919556861114"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-4 sm:py-5 rounded-lg neon-border glass-dark hover:box-glow transition-all duration-500"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-2xl sm:text-4xl">💬</span>
            <div className="text-left">
              <span className="font-display text-sm sm:text-lg tracking-wider text-foreground block">WHATSAPP</span>
              <span className="font-mono text-[10px] sm:text-xs text-muted-foreground">+91 9556861114</span>
            </div>
            <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/5 transition-all duration-500" />
          </motion.a>

          <motion.a
            href="https://t.me/ROOT_JAGAN"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-4 sm:py-5 rounded-lg glass-dark hover:box-glow-blue transition-all duration-500"
            style={{ border: "1px solid hsl(200 100% 50% / 0.4)" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-2xl sm:text-4xl">✈️</span>
            <div className="text-left">
              <span className="font-display text-sm sm:text-lg tracking-wider text-neon-blue block">TELEGRAM</span>
              <span className="font-mono text-[10px] sm:text-xs text-muted-foreground">@ROOT_JAGAN</span>
            </div>
            <div className="absolute inset-0 rounded-lg bg-accent/0 group-hover:bg-accent/5 transition-all duration-500" />
          </motion.a>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-sm sm:max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="p-3 sm:p-4 rounded-md neon-border glass-dark">
            <p className="font-mono text-[10px] sm:text-xs text-muted-foreground mb-1">TELEGRAM_ID</p>
            <p className="font-display text-xs sm:text-sm text-foreground tracking-wider">@ROOT_JAGAN</p>
          </div>
          <div className="p-3 sm:p-4 rounded-md neon-border glass-dark">
            <p className="font-mono text-[10px] sm:text-xs text-muted-foreground mb-1">WHATSAPP_NUM</p>
            <p className="font-display text-xs sm:text-sm text-foreground tracking-wider">+91 9556861114</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
