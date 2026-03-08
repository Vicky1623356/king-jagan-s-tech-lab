import { motion } from "framer-motion";

const services = [
  {
    title: "Xiaomi Bootloader Unlock 🔓",
    desc: "Best Price — Fast & Reliable Unlock Service",
    icon: "🔓",
  },
  {
    title: "All Mobile EDL Flashing",
    desc: "Emergency Download Mode Flashing for All Brands",
    icon: "⚡",
  },
  {
    title: "IMEI Service",
    desc: "IMEI Repair & Restoration Services",
    icon: "📱",
  },
  {
    title: "Samsung FRP Bypass",
    desc: "Factory Reset Protection Removal",
    icon: "🔐",
  },
  {
    title: "Flashing & FRP Services",
    desc: "OPPO / REALME / XIAOMI / ONEPLUS / MOTOROLA / TECNO / INFINIX / NOTHING",
    icon: "💾",
  },
  {
    title: "Root Service",
    desc: "Root with PC & without PC — All Android Devices",
    icon: "🌿",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-4 grid-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-muted-foreground text-sm tracking-[0.3em] mb-2">
            {"// SERVICES.MODULE"}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-glow text-foreground tracking-wider">
            SERVICES
          </h2>
          <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mt-4" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-6 rounded-lg neon-border glass-dark hover:box-glow transition-all duration-500 cursor-default"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 tracking-wide group-hover:text-glow transition-all">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {service.desc}
              </p>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/60" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/60" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/60" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/60" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
