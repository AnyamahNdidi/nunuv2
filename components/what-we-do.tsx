"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const services = [
  {
    title: "AI-Powered Financial Strategy",

    image: "/images/6.jpg",
    delay: 0.1,
    gridClass: "md:col-span-2 lg:col-span-3", // wider card for top left
  },
  {
    title: "Intelligent Investment Consulting",
    // description:
    //   "Use predictive analytics and AI insights to make smarter investment decisions with confidence.",
    image: "/images/boss.jpg",
    delay: 0.2,
    gridClass: "md:col-span-2 lg:col-span-2", // narrower card for top right
  },
  {
    title: "Automated Risk Assessment",
    // description:
    //   "Deploy AI-driven tools to identify, evaluate, and mitigate financial risks in real-time.",
    image: "/images/2.jpg",
    delay: 0.3,
    hasButton: true,
    gridClass: "md:col-span-1 lg:col-span-2", // smaller square card
  },
  {
    title: "AI-Enhanced Market Analytics",
    // description:
    //   "Transform market data into actionable insights through AI-powered analytics and interactive visualizations.",
    image: "/images/7 (2).jpg",
    delay: 0.4,
    gridClass: "md:col-span-3 lg:col-span-3", // wider card for bottom right
  },
];

export default function WhatWeDo() {
  return (
    <section className="w-full min-h-auto px-4 sm:px-6 lg:px-8 opacity-85  bg-gradient-to-br p-8 md:p-12   transform-gpu max-w-full mx-auto">
      <div className="max-w-[70rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A211F] mb-2">
            WHAT WE DO!!
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-2 auto-rows-fr">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.delay }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden border-r-2 bg-gradient-to-br from-slate-800/40 via-slate-700/30 to-slate-600/20  backdrop-blur-sm ${service.gridClass}`}
            >
              <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F3D3E]/60 via-transparent to-[#A0F0D0]/20 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                {/* <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#A0F0D0] to-[#0F3D3E] group-hover:w-6 transition-all duration-500" /> */}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="text-xl lg:text-4xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#A0F0D0] transition-colors duration-300">
                  {service.title}
                </div>
                <p className="text-slate-300 text-sm md:text-base mb-4 opacity-90">
                  {/* {service.description} */}
                </p>

                {service.hasButton && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#A0F0D0]/20 hover:bg-[#A0F0D0]/30 border border-[#A0F0D0]/40 rounded-lg text-[#A0F0D0] font-medium transition-all duration-300 backdrop-blur-sm"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
