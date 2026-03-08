import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is IMEI repair and why do I need it?",
    a: "IMEI repair restores your device's unique identity number when it becomes corrupted or lost. This is essential for network connectivity, making calls, and using mobile data. We support all major brands including Samsung, Xiaomi, Oppo, Vivo, and more.",
  },
  {
    q: "How does FRP (Google Account) bypass work?",
    a: "FRP bypass removes the Google account lock that activates after a factory reset. If you've forgotten your Google credentials linked to your device, we can safely remove the lock without damaging your data or device software.",
  },
  {
    q: "Is rooting safe for my phone?",
    a: "When done by professionals, rooting is safe and gives you full control over your device. It allows custom ROMs, ad blocking, advanced backups, and performance tweaks. We ensure proper procedures to avoid bricking your device.",
  },
  {
    q: "Do you provide services online or only in person?",
    a: "All our services are available 100% online! You can reach us via WhatsApp or Telegram, and we guide you through the process remotely. No need to visit a physical shop — we serve clients worldwide from India, USA, Nigeria, and beyond.",
  },
  {
    q: "How long does a typical service take?",
    a: "Most services like IMEI repair, FRP bypass, and unlocking are completed within 10–30 minutes. Custom ROM installation and complex hardware-level fixes may take 1–2 hours depending on the device model.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, bank transfer, PayPal, and cryptocurrency for international clients. Payment is required after confirming the service details and before starting the work.",
  },
  {
    q: "Will I lose my data during the process?",
    a: "It depends on the service. FRP bypass and factory unlock may require a reset. IMEI repair and rooting usually preserve your data. We always advise taking a backup before any procedure and will inform you beforehand.",
  },
  {
    q: "Do you offer any warranty or guarantee?",
    a: "Yes! All our software services come with a satisfaction guarantee. If the fix doesn't work as promised, we'll redo it for free. Check our Telegram group for hundreds of verified customer reviews.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-muted-foreground text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-2">
            {"// FAQ"}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-glow text-foreground tracking-wider">
            FREQUENTLY ASKED
          </h2>
          <div className="h-[2px] w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mt-4 sm:mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="neon-border glass-dark rounded-lg px-4 sm:px-6 overflow-hidden border-none"
              >
                <AccordionTrigger className="font-display text-sm sm:text-base text-foreground tracking-wide hover:text-primary hover:no-underline py-4 sm:py-5 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
