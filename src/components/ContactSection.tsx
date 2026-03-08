import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-muted-foreground text-sm tracking-[0.3em] mb-2">
            {"// CONNECT.NOW"}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-glow text-foreground tracking-wider mb-4">
            CONTACT
          </h2>
          <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-12" />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/919556861114"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 px-10 py-5 rounded-lg neon-border glass-dark hover:box-glow transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-4xl">💬</span>
            <div className="text-left">
              <span className="font-display text-lg tracking-wider text-foreground block">WHATSAPP</span>
              <span className="font-mono text-xs text-muted-foreground">+91 9556861114</span>
            </div>
            <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/5 transition-all duration-500" />
          </motion.a>

          {/* Telegram Button */}
          <motion.a
            href="https://t.me/ROOT_JAGAN"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 px-10 py-5 rounded-lg border border-neon-blue/40 glass-dark hover:box-glow-blue transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{ borderColor: "hsl(200 100% 50% / 0.4)" }}
          >
            <span className="text-4xl">✈️</span>
            <div className="text-left">
              <span className="font-display text-lg tracking-wider text-neon-blue block">TELEGRAM</span>
              <span className="font-mono text-xs text-muted-foreground">@ROOT_JAGAN</span>
            </div>
            <div className="absolute inset-0 rounded-lg bg-accent/0 group-hover:bg-accent/5 transition-all duration-500" />
          </motion.a>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="p-4 rounded-md neon-border glass-dark">
            <p className="font-mono text-xs text-muted-foreground mb-1">TELEGRAM_ID</p>
            <p className="font-display text-sm text-foreground tracking-wider">@ROOT_JAGAN</p>
          </div>
          <div className="p-4 rounded-md neon-border glass-dark">
            <p className="font-mono text-xs text-muted-foreground mb-1">WHATSAPP_NUM</p>
            <p className="font-display text-sm text-foreground tracking-wider">+91 9556861114</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
