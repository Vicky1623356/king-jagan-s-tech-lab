import { motion } from "framer-motion";
import reviewRahul from "@/assets/review-rahul.jpg";
import reviewPriya from "@/assets/review-priya.jpg";
import reviewMike from "@/assets/review-mike.jpg";
import reviewSarah from "@/assets/review-sarah.jpg";
import reviewEmeka from "@/assets/review-emeka.jpg";
import reviewAmina from "@/assets/review-amina.jpg";
import reviewArjun from "@/assets/review-arjun.jpg";
import reviewJames from "@/assets/review-james.jpg";

const reviews = [
  { name: "Rahul Sharma", location: "Mumbai, India 🇮🇳", photo: reviewRahul, stars: 5, text: "KING JAGAN unlocked my Xiaomi bootloader in just 10 minutes! Best price I found anywhere. Highly recommended for any mobile software work.", service: "Xiaomi Bootloader Unlock" },
  { name: "Mike Thompson", location: "Texas, USA 🇺🇸", photo: reviewMike, stars: 5, text: "My Samsung was stuck on FRP lock after factory reset. KING JAGAN fixed it remotely within an hour. Incredible service from India to USA!", service: "Samsung FRP Bypass" },
  { name: "Emeka Okafor", location: "Lagos, Nigeria 🇳🇬", photo: reviewEmeka, stars: 5, text: "Bricked my Tecno phone trying to flash ROM. KING JAGAN recovered it through EDL flashing. Phone works perfectly now. God bless!", service: "EDL Flashing" },
  { name: "Priya Patel", location: "Delhi, India 🇮🇳", photo: reviewPriya, stars: 5, text: "Got my OPPO phone's IMEI repaired. Very professional service and fair pricing. Will definitely come back for future needs.", service: "IMEI Service" },
  { name: "Sarah Williams", location: "California, USA 🇺🇸", photo: reviewSarah, stars: 5, text: "Needed root access for my OnePlus without PC. KING JAGAN guided me through the whole process via Telegram. So patient and knowledgeable!", service: "Root Service" },
  { name: "Amina Adebayo", location: "Abuja, Nigeria 🇳🇬", photo: reviewAmina, stars: 5, text: "My Infinix was completely dead after a bad flash. KING JAGAN brought it back to life! Amazing skills. The best mobile engineer online.", service: "EDL Flashing" },
  { name: "Arjun Reddy", location: "Hyderabad, India 🇮🇳", photo: reviewArjun, stars: 5, text: "Custom ROM installation on my Realme was flawless. Also got Magisk root working perfectly. This guy knows Android inside out!", service: "Custom ROM + Root" },
  { name: "James Carter", location: "New York, USA 🇺🇸", photo: reviewJames, stars: 5, text: "Fixed my Motorola's FRP issue that 3 local shops couldn't solve. Online service was smooth and secure. Worth every penny!", service: "Motorola FRP" },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 grid-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-muted-foreground text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-2">
            {"// REVIEWS.LOG"}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-glow text-foreground tracking-wider">
            TESTIMONIALS
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground mt-3 sm:mt-4 max-w-xl mx-auto px-2">
            Trusted by clients across India, USA, Nigeria & worldwide
          </p>
          <div className="h-[2px] w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mt-4 sm:mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group p-4 sm:p-5 rounded-xl neon-border glass-dark hover:box-glow transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <img
                  src={review.photo}
                  alt={review.name}
                  loading="lazy"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-primary/30 flex-shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="font-display text-xs sm:text-sm font-semibold text-foreground tracking-wide truncate">
                    {review.name}
                  </h4>
                  <p className="font-mono text-[9px] sm:text-[10px] text-muted-foreground truncate">
                    {review.location}
                  </p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-2 sm:mb-3">
                {Array.from({ length: review.stars }).map((_, s) => (
                  <span key={s} className="text-xs sm:text-sm">⭐</span>
                ))}
              </div>

              <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
                "{review.text}"
              </p>

              <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-border/20">
                <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-primary/70">
                  SERVICE: {review.service.toUpperCase()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
