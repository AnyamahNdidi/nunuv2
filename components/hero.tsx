"use client";
import { useState, useEffect, useRef, forwardRef } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroProps {
  scrollY?: any;
}

// ✅ Move AnimatedImageColumns OUTSIDE the Hero component
const AnimatedImageColumns = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block absolute right-0 top-0 w-[780px] h-screen overflow-hidden">
        <div className="flex gap-5 h-full lg:pr-6 sm:pr-0">
          {/* Column 1 */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ y: 0 }}
            animate={{ y: [0, -1000] }}
            transition={{
              y: {
                duration: 25,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
          >
            {[...Array(8)]
              .flatMap((_, i) => [
                "/images/Audit_6-713x663.jpg",
                "/images/show.png",
                "/images/kim.png",
              ])
              .map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Financial consulting"
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  style={{
                    width: "320px",
                    height: `${280 + (index % 4) * 40}px`,
                    objectFit: "contain",
                  }}
                />
              ))}
          </motion.div>

          {/* <div
            className="flex flex-col gap-4 animate-scroll-vertical"
            style={{ animationDuration: "25s", animationDelay: "0s" }}
          >
            {[...Array(4)]
              .flatMap((_, i) => [
                "/images/Audit_6-713x663.jpg",
                "/images/show.png",
                "/images/kim.png",
                "/images/Audit_6-713x663.jpg",
                "/images/show.png",
                "/images/kim.png",
              ])
              .map((src, index) => (
                <img
                  key={index}
                  src={src || "/placeholder.svg"}
                  alt="Financial consulting"
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  style={{
                    width: "330px",
                    height: `${450 + (index % 3) * 30}px`,
                  }}
                />
              ))}
          </div> */}

          {/* Column 2 */}
          <div
            className="flex flex-col gap-4 animate-scroll-vertical-reverse"
            style={{ animationDuration: "35s", animationDelay: "-12s" }}
          >
            {[...Array(4)]
              .flatMap((_, i) => [
                "/images/56.jpg",
                "/images/98.jpg",
                "/images/about1.jpg",
              ])
              .map((src, index) => (
                <img
                  key={index}
                  src={src || "/placeholder.svg"}
                  alt="AI technology"
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  style={{
                    width: "330px",
                    height: `${450 + (index % 3) * 30}px`,
                  }}
                />
              ))}
          </div>

          {/* Column 3 */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ y: 0 }}
            animate={{ y: [0, -1000] }}
            transition={{
              y: {
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
          >
            {[...Array(8)]
              .flatMap((_, i) => [
                "/images/jojo.jpg",
                // "/images/22.jpg",
                "/images/jim.png",
              ])
              .map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Business growth"
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  style={{
                    width: "330px",
                    height: `${260 + (index % 6) * 50}px`,
                  }}
                />
              ))}
          </motion.div>
          {/* <div
            className="flex flex-col gap-4 animate-scroll-vertical"
            style={{ animationDuration: "30s", animationDelay: "-8s" }}
          >
            {[...Array(4)]
              .flatMap((_, i) => [
                "/placeholder.svg?height=370&width=480",
                "/placeholder.svg?height=385&width=490",
                "/images/jim.png",
              ])
              .map((src, index) => (
                <img
                  key={index}
                  src={src || "/placeholder.svg"}
                  alt="Business growth"
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  style={{
                    width: "330px",
                    height: `${400 + (index % 3) * 15}px`,
                  }}
                />
              ))}
          </div> */}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden mt-12 rounded-xl overflow-hidden">
        <div className="space-y-6">
          {/* Row 1 */}
          <motion.div
            className="flex gap-4"
            initial={{ x: -100 }}
            animate={{ x: [0, -2000] }}
            transition={{
              x: {
                duration: 50,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
          >
            {[...Array(20)]
              .flatMap((_, i) => [
                "/images/Audit_6-713x663.jpg",
                "/images/show.png",
                "/images/kim.png",
                "/images/jim.png",
                "/images/jojo.jpg",
              ])
              .map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Financial consulting"
                  className="rounded-xl shadow-md flex-shrink-0"
                  style={{
                    width: "130px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="flex gap-4"
            initial={{ x: 0 }}
            animate={{ x: [-2000, 0] }}
            transition={{
              x: {
                duration: 55,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
          >
            {[...Array(20)]
              .flatMap((_, i) => [
                "/images/jim.png",
                "/images/jojo.jpg",
                "/images/Audit_6-713x663.jpg",
                "/images/show.png",
                "/images/kim.png",
              ])
              .map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Business technology"
                  className="rounded-xl shadow-md flex-shrink-0 object-cover"
                  style={{
                    width: "130px",
                    height: "210px",
                    objectFit: "cover",
                  }}
                />
              ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = forwardRef<HTMLElement, HeroProps>(({ scrollY }, ref) => {
  const WORD_CYCLE = ["Product", "Go-to-Market", "Growth"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const internalRef = useRef<HTMLElement>(null);
  const sectionRef = ref || internalRef;

  const isInView = useInView(sectionRef as any, {
    once: false,
    margin: "-100px",
  });

  const TRANSITION_DURATION = 1.0;
  const WORD_DISPLAY_DURATION = 3000;

  const { scrollYProgress } = useScroll({
    target: sectionRef as any,
    offset: ["start start", "end start"],
  });

  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const slideOut = useTransform(scrollYProgress, [0, 0.8], [0, 100]);
  const rotateOut = useTransform(scrollYProgress, [0, 0.8], [0, 15]);
  const textFadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textSlideOut = useTransform(scrollYProgress, [0, 0.6], [0, 50]);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % WORD_CYCLE.length);
    }, WORD_DISPLAY_DURATION);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br bg-[#0A211F] opacity-100 overflow-hidden"
    >
      {/* <div className="absolute inset-0 bg-black opacity-70" /> */}
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#A0F0D0]/10 to-[#A0F0D0]/10 rounded-full blur-3xl animate-pulse"></div> */}
        {/* <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#A0F0D0]/5 to-[#A0F0D0]/5 rounded-full blur-2xl animate-pulse delay-1000"></div> */}
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#A0F0D0]/5 to-[#A0F0D0]/5 rounded-full blur-3xl"></div> */}

        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(160, 240, 208, 0.3) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      <div className="hidden lg:block absolute top-0 right-0 w-[850px] h-full z-20">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A211F] via-[#0A211F]/80 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A211F] via-[#0A211F]/80 to-transparent z-10" />
        <div className="h-full overflow-hidden">
          <AnimatedImageColumns />
        </div>
      </div>

      <div className="relative z-10 flex flex-col lg:block">
        {/* Text content */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 150, rotateX: -20 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96],
                staggerChildren: 0.1,
              },
            },
          }}
          className="container mx-auto px-6 py-20 lg:py-20"
          style={{
            y: slideOut,
            opacity: fadeOut,
            rotateX: rotateOut,
            transformOrigin: "top center",
          }}
        >
          <div className="max-w-4xl lg:min-h-[80vh] flex items-center">
            <motion.div className="space-y-6 pt-4 max-w-2xl">
              <div className="space-y-4">
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-[#A0F0D0]/10 rounded-full text-[#A0F0D0] font-medium text-sm border border-[#A0F0D0]/20 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Transforming Financial Futures
                </motion.div>

                <motion.h1
                  className="text-5xl lg:text-7xl font-light text-white leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative h-20 lg:h-24 overflow-hidden mb-4">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentWordIndex}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          backgroundImage: [
                            "linear-gradient(45deg, rgb(190, 242, 100), rgb(74, 222, 128))",
                            "linear-gradient(45deg, rgb(74, 222, 128), rgb(22, 163, 74))",
                            "linear-gradient(45deg, rgb(22, 163, 74), rgb(190, 242, 100))",
                          ],
                          backgroundClip: "text",
                          webkitBackgroundClip: "text",
                          color: "transparent",
                          backgroundSize: "200% 200%",
                        }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{
                          duration: TRANSITION_DURATION,
                          ease: "easeInOut",
                          backgroundImage: {
                            duration: TRANSITION_DURATION * 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            ease: "linear",
                          },
                        }}
                        className="absolute inset-0 font-medium"
                      >
                        {WORD_CYCLE[currentWordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  <div className="space-y-2 ">
                    <span className="block">Strategy Partners </span>
                    {/* <span className="block bg-gradient-to-r from-[#A0F0D0] to-[#A0F0D0]/80 bg-clip-text text-transparent"></span> */}
                  </div>
                </motion.h1>
              </div>

              <motion.p
                className="text-xl text-slate-300 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  y: textSlideOut,
                  opacity: textFadeOut,
                }}
              >
                Too many AI-first startups build game-changing technologies but
                stall before reaching their audience.
                <span className="font-semibold text-[#A0F0D0]">
                  {" "}
                  We shape positioning, sharpen your story,
                </span>{" "}
                and design go-to-market strategies that win early adopters, so
                you launch with clarity and confidence.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  y: textSlideOut,
                  opacity: textFadeOut,
                }}
              >
                <motion.div
                  className="flex gap-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-[#A0F0D0] hover:bg-[#A0F0D0]/80 text-[#0F3D3E] px-8 py-4 text-lg font-semibold"
                  >
                    <span className="relative z-10 flex items-center font-bold">
                      Book Consultation
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-[#A0F0D0]/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Button>
                  {/* 
                  <Button
                    size="lg"
                    variant="outline"
                    className="group relative overflow-hidden border-[#A0F0D0] text-[#A0F0D0] hover:bg-[#A0F0D0]/10 px-8 py-4 text-lg font-semibold"
                  >
                    <span className="relative z-10 flex items-center">
                      Explore More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button> */}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="lg:hidden relative z-10 px-6 pb-20">
          <div className="h-auto overflow-hidden">
            <AnimatedImageColumns />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
