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
  {
    name: "Rahul Sharma",
    location: "Mumbai, India 🇮🇳",
    photo: reviewRahul,
    stars: 5,
    text: "KING JAGAN unlocked my Xiaomi bootloader in just 10 minutes! Best price I found anywhere. Highly recommended for any mobile software work.",
    service: "Xiaomi Bootloader Unlock",
  },
  {
    name: "Mike Thompson",
    location: "Texas, USA 🇺🇸",
    photo: reviewMike,
    stars: 5,
    text: "My Samsung was stuck on FRP lock after factory reset. KING JAGAN fixed it remotely within an hour. Incredible service from India to USA!",
    service: "Samsung FRP Bypass",
  },
  {
    name: "Emeka Okafor",
    location: "Lagos, Nigeria 🇳🇬",
    photo: reviewEmeka,
    stars: 5,
    text: "Bricked my Tecno phone trying to flash ROM. KING JAGAN recovered it through EDL flashing. Phone works perfectly now. God bless!",
    service: "EDL Flashing",
  },
  {
    name: "Priya Patel",
    location: "Delhi, India 🇮🇳",
    photo: reviewPriya,
    stars: 5,
    text: "Got my OPPO phone's IMEI repaired. Very professional service and fair pricing. Will definitely come back for future needs.",
    service: "IMEI Service",
  },
  {
    name: "Sarah Williams",
    location: "California, USA 🇺🇸",
    photo: reviewSarah,
    stars: 5,
    text: "Needed root access for my OnePlus without PC. KING JAGAN guided me through the whole process via Telegram. So patient and knowledgeable!",
    service: "Root Service",
  },
  {
    name: "Amina Adebayo",
    location: "Abuja, Nigeria 🇳🇬",
    photo: reviewAmina,
    stars: 5,
    text: "My Infinix was completely dead after a bad flash. KING JAGAN brought it back to life! Amazing skills. The best mobile engineer online.",
    service: "EDL Flashing",
  },
  {
    name: "Arjun Reddy",
    location: "Hyderabad, India 🇮🇳",
    photo: reviewArjun,
    stars: 5,
    text: "Custom ROM installation on my Realme was flawless. Also got Magisk root working perfectly. This guy knows Android inside out!",
    service: "Custom ROM + Root",
  },
  {
    name: "James Carter",
    location: "New York, USA 🇺🇸",
    photo: reviewJames,
    stars: 5,
    text: "Fixed my Motorola's FRP issue that 3 local shops couldn't solve. Online service was smooth and secure. Worth every penny!",
    service: "Motorola FRP",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="relative py-24 px-4 grid-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-muted-foreground text-sm tracking-[0.3em] mb-2">
            {"// REVIEWS.LOG"}
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-glow text-foreground tracking-wider">
            TESTIMONIALS
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            Trusted by clients across India, USA, Nigeria & worldwide
          </p>
          <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group p-5 rounded-xl neon-border glass-dark hover:box-glow transition-all duration-500 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border border-primary/30"
                />
                <div>
                  <h4 className="font-display text-sm font-semibold text-foreground tracking-wide">
                    {review.name}
                  </h4>
                  <p className="font-mono text-[10px] text-muted-foreground">
                    {review.location}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.stars }).map((_, s) => (
                  <span key={s} className="text-sm">⭐</span>
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                "{review.text}"
              </p>

              {/* Service tag */}
              <div className="mt-4 pt-3 border-t border-border/20">
                <span className="font-mono text-[10px] tracking-widest text-primary/70">
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
