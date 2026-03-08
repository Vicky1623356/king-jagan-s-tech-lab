import { motion } from "framer-motion";
import serviceUnlock from "@/assets/service-unlock.jpg";
import serviceFlash from "@/assets/service-flash.jpg";
import serviceImei from "@/assets/service-imei.jpg";
import serviceFrp from "@/assets/service-frp.jpg";
import serviceRoot from "@/assets/service-root.jpg";
import serviceBrands from "@/assets/service-brands.jpg";
import serviceRom from "@/assets/service-rom.jpg";
import serviceHardware from "@/assets/service-hardware.jpg";

const services = [
  {
    title: "Xiaomi Bootloader Unlock 🔓",
    desc: "Best Price — Fast & Reliable Unlock Service. Instant processing for all Xiaomi models.",
    image: serviceUnlock,
    tag: "POPULAR",
  },
  {
    title: "All Mobile EDL Flashing",
    desc: "Emergency Download Mode Flashing for all brands. Recover bricked devices instantly.",
    image: serviceFlash,
    tag: "PRO",
  },
  {
    title: "IMEI Repair Service",
    desc: "IMEI repair and restoration for all Android devices. Clean & permanent fix.",
    image: serviceImei,
    tag: "PREMIUM",
  },
  {
    title: "Samsung FRP Bypass",
    desc: "Factory Reset Protection removal for all Samsung models. Latest security patch supported.",
    image: serviceFrp,
    tag: "HOT",
  },
  {
    title: "Root Service",
    desc: "Root with PC & without PC for all Android devices. Magisk & SuperSU supported.",
    image: serviceRoot,
    tag: "EXPERT",
  },
  {
    title: "Multi-Brand FRP & Flashing",
    desc: "OPPO, REALME, XIAOMI, ONEPLUS, MOTOROLA, TECNO, INFINIX, NOTHING — All brands covered.",
    image: serviceBrands,
    tag: "ALL BRANDS",
  },
  {
    title: "Custom ROM Installation",
    desc: "Flash custom ROMs, kernels & recoveries. TWRP, LineageOS, Pixel Experience & more.",
    image: serviceRom,
    tag: "ADVANCED",
  },
  {
    title: "Hardware Repair",
    desc: "Motherboard repair, chip-level soldering, dead phone recovery & component replacement.",
    image: serviceHardware,
    tag: "HARDWARE",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-muted-foreground text-sm tracking-[0.3em] mb-2">
            {"// SERVICES.MODULE"}
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-glow text-foreground tracking-wider">
            SERVICES
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            Professional mobile repair solutions for every device, every brand.
          </p>
          <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mt-6" />
        </motion.div>

        {/* Apple-style alternating full-width sections */}
        <div className="space-y-32">
          {services.map((service, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={service.title}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                {/* Image */}
                <motion.div
                  className="w-full lg:w-1/2 relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative overflow-hidden rounded-2xl neon-border">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 font-mono text-xs tracking-widest px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                      {service.tag}
                    </span>
                  </div>
                </motion.div>

                {/* Text */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide text-glow">
                    {service.title}
                  </h3>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                  <a
                    href="https://wa.me/919556861114"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 font-display text-xs tracking-[0.2em] text-primary hover:text-glow transition-all duration-300"
                  >
                    GET THIS SERVICE →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
