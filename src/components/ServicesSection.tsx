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
  { title: "Xiaomi Bootloader Unlock 🔓", desc: "Best Price — Fast & Reliable Unlock Service. Instant processing for all Xiaomi models.", image: serviceUnlock, tag: "POPULAR" },
  { title: "All Mobile EDL Flashing", desc: "Emergency Download Mode Flashing for all brands. Recover bricked devices instantly.", image: serviceFlash, tag: "PRO" },
  { title: "IMEI Repair Service", desc: "IMEI repair and restoration for all Android devices. Clean & permanent fix.", image: serviceImei, tag: "PREMIUM" },
  { title: "Samsung FRP Bypass", desc: "Factory Reset Protection removal for all Samsung models. Latest security patch supported.", image: serviceFrp, tag: "HOT" },
  { title: "Root Service", desc: "Root with PC & without PC for all Android devices. Magisk & SuperSU supported.", image: serviceRoot, tag: "EXPERT" },
  { title: "Multi-Brand FRP & Flashing", desc: "OPPO, REALME, XIAOMI, ONEPLUS, MOTOROLA, TECNO, INFINIX, NOTHING — All brands covered.", image: serviceBrands, tag: "ALL BRANDS" },
  { title: "Custom ROM Installation", desc: "Flash custom ROMs, kernels & recoveries. TWRP, LineageOS, Pixel Experience & more.", image: serviceRom, tag: "ADVANCED" },
  { title: "Hardware Repair", desc: "Motherboard repair, chip-level soldering, dead phone recovery & component replacement.", image: serviceHardware, tag: "HARDWARE" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-muted-foreground text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-2">
            {"// SERVICES.MODULE"}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-glow text-foreground tracking-wider">
            SERVICES
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground mt-3 sm:mt-4 max-w-xl mx-auto px-2">
            Professional mobile repair solutions for every device, every brand.
          </p>
          <div className="h-[2px] w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mt-4 sm:mt-6" />
        </motion.div>

        <div className="space-y-16 sm:space-y-20 md:space-y-28 lg:space-y-32">
          {services.map((service, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={service.title}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl neon-border">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105 md:group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 font-mono text-[10px] sm:text-xs tracking-widest px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 space-y-2 sm:space-y-3 md:space-y-4 text-center md:text-left">
                  <h3 className="font-display text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-foreground tracking-wide text-glow">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                  <a
                    href="https://wa.me/919556861114"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 sm:mt-2 font-display text-xs tracking-[0.15em] sm:tracking-[0.2em] text-primary hover:text-glow transition-all duration-300"
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
