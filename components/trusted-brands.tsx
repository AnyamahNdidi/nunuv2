"use client";

import { motion } from "framer-motion";

const TrustedBrands = () => {
  const logoRows = [
    // Row 1 - Moving left to right
    [
      { name: "6sense", imageUrl: "/logo/6sense.png" },
      { name: "Amazon", imageUrl: "/logo/amazom.png" },

      { name: "colgate", imageUrl: "/logo/colgate.png" },

      { name: "figma", imageUrl: "/logo/figma.png" },
      { name: "goggle", imageUrl: "/logo/google.png" },
    ],
    // Row 2 - Moving right to left (reverse)
    [
      // { name: "grammaly", imageUrl: "/logo/grammaly.png" },
      // { name: "intercom", imageUrl: "/logo/intercom.png" },
      // { name: "intuit", imageUrl: "/logo/intuit-logo-black-and-white.png" },
      { name: "lyft", imageUrl: "/logo/lyft-logo-black-and-white.png" },
      { name: "Bookings", imageUrl: "/logo/booking.png" },
      { name: "databricks", imageUrl: "/logo/databricks_logo_icon_249070.png" },
      // { name: "meta", imageUrl: "/logo/meta.png" },
      { name: "twilo", imageUrl: "/logo/twilio-logo-black-and-white-1.png" },
      { name: "reddit", imageUrl: "/logo/reddit.png" },
    ],
  ];

  return (
    <section className="py-16 opacity-60 0 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A211F] mb-4">
            Trusted by 500+ of the world's top brands
          </h2>
        </motion.div>

        <div className="space-y-8">
          {logoRows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              <div
                className={`flex gap-12 ${
                  rowIndex === 0
                    ? "animate-scroll-horizontal"
                    : "animate-scroll-horizontal-reverse"
                }`}
                style={{
                  animationDuration: rowIndex === 0 ? "30s" : "25s",
                  animationDelay: `${rowIndex * -5}s`,
                }}
              >
                {[...row, ...row, ...row, ...row].map((logo, logoIndex) => (
                  <div
                    key={logoIndex}
                    className="flex-shrink-0 flex items-center justify-center w-32 h-12"
                  >
                    <img
                      src={
                        logo.imageUrl ||
                        `/placeholder.svg?height=48&width=128&text=${
                          encodeURIComponent(logo.name) || "/placeholder.svg"
                        }&query=${encodeURIComponent(
                          `${logo.name} company logo grayscale`
                        )}`
                      }
                      alt={`${logo.name} logo`}
                      className="max-w-full max-h-full object-contain  hover:opacity-80 transition-opacity duration-300 filter grayscale"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
