"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
  forwardRef,
} from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

type TealGradient = {
  light: string;
  mid: string;
  dark: string;
};

type IconProps = {
  isHovered: boolean;
  isDrawing: boolean;
};

const tealGradient: TealGradient = {
  light: "#A0F0D0", // Lime green
  mid: "#0F3D3E", // Deep teal
  dark: "#0A2E2F", // Darker teal
};

const CircleIcon: React.FC<IconProps> = memo(({ isHovered, isDrawing }) => {
  return (
    <div className="relative w-full h-full">
      {/* Right-side shadow */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-l from-slate-800/40 to-transparent transition-all duration-700 ${
          isDrawing ? "opacity-25 -translate-x-1" : "opacity-0 translate-x-0"
        }`}
        style={{
          filter: "blur(10px)",
          left: "55%",
          width: "45%",
          transform: isHovered
            ? "translateX(3px) scale(1.05)"
            : "translateX(1px)",
        }}
      />

      {/* Left-side light reflection */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-r from-white/15 to-transparent transition-all duration-700 ${
          isDrawing ? "opacity-30" : "opacity-0"
        }`}
        style={{
          filter: "blur(6px)",
          right: "55%",
          width: "45%",
          transform: "rotate(-5deg)",
        }}
      />

      <svg
        className="relative z-10 w-full h-full"
        viewBox="0 0 140 140"
        fill="none"
        style={{
          filter: isHovered
            ? "drop-shadow(5px 5px 10px rgba(15, 61, 62, 0.4))"
            : "drop-shadow(3px 3px 6px rgba(15, 61, 62, 0.3))",
        }}
      >
        <circle
          cx="70"
          cy="70"
          r="50"
          stroke="url(#tealGradient1)"
          strokeWidth="5"
          fill="none"
          style={{
            strokeDasharray: "314",
            strokeDashoffset: isDrawing ? "0" : "314",
            transition: "stroke-dashoffset 2s cubic-bezier(0.19, 1, 0.22, 1)",
          }}
        />
        <circle
          cx="70"
          cy="70"
          r="22"
          stroke="url(#tealGradient1)"
          strokeWidth="4"
          fill="url(#tealGradient1)"
          fillOpacity="0.2"
          style={{
            strokeDasharray: "138",
            strokeDashoffset: isDrawing ? "0" : "138",
            transition:
              "stroke-dashoffset 1.5s cubic-bezier(0.19, 1, 0.22, 1) 0.5s",
          }}
        />
        <defs>
          <linearGradient
            id="tealGradient1"
            x1="20%"
            y1="20%"
            x2="80%"
            y2="80%"
          >
            <stop offset="0%" stopColor={tealGradient.light} />
            <stop offset="50%" stopColor={tealGradient.mid} />
            <stop offset="100%" stopColor={tealGradient.dark} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
});

CircleIcon.displayName = "CircleIcon";

const TriangleIcon: React.FC<IconProps> = memo(({ isHovered, isDrawing }) => {
  return (
    <div className="relative w-full h-full">
      {/* Right-side shadow */}
      <div
        className={`absolute inset-0 bg-gradient-to-l from-slate-800/40 to-transparent transition-all duration-700 ${
          isDrawing ? "opacity-25 -translate-x-1" : "opacity-0 translate-x-0"
        }`}
        style={{
          filter: "blur(10px)",
          clipPath: "path('M70 30 L105 90 L35 90 Z')",
          left: "55%",
          width: "45%",
          transform: isHovered
            ? "translateX(3px) scale(1.05)"
            : "translateX(1px)",
        }}
      />

      {/* Left-side light reflection */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-white/15 to-transparent transition-all duration-700 ${
          isDrawing ? "opacity-30" : "opacity-0"
        }`}
        style={{
          filter: "blur(6px)",
          clipPath: "path('M70 30 L105 90 L35 90 Z')",
          right: "55%",
          width: "45%",
          transform: "rotate(-5deg)",
        }}
      />

      <svg
        className="relative z-10 w-full h-full"
        viewBox="0 0 140 140"
        fill="none"
        style={{
          filter: isHovered
            ? "drop-shadow(5px 5px 10px rgba(15, 61, 62, 0.4))"
            : "drop-shadow(3px 3px 6px rgba(15, 61, 62, 0.3))",
        }}
      >
        <path
          d="M70 30 L105 90 L35 90 Z"
          stroke="url(#tealGradient2)"
          strokeWidth="5"
          fill="none"
          style={{
            strokeDasharray: "245",
            strokeDashoffset: isDrawing ? "0" : "245",
            transition: "stroke-dashoffset 2.2s cubic-bezier(0.19, 1, 0.22, 1)",
          }}
        />
        <circle
          cx="70"
          cy="75"
          r="15"
          fill="url(#tealGradient2)"
          fillOpacity="0.3"
          style={{
            opacity: isDrawing ? 1 : 0,
            transform: isDrawing ? "scale(1)" : "scale(0)",
            transition: "all 1.2s cubic-bezier(0.19, 1, 0.22, 1) 0.8s",
          }}
        />
        <defs>
          <linearGradient
            id="tealGradient2"
            x1="20%"
            y1="20%"
            x2="80%"
            y2="80%"
          >
            <stop offset="0%" stopColor={tealGradient.light} />
            <stop offset="50%" stopColor={tealGradient.mid} />
            <stop offset="100%" stopColor={tealGradient.dark} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
});

TriangleIcon.displayName = "TriangleIcon";

const DiamondIcon: React.FC<IconProps> = memo(({ isHovered, isDrawing }) => {
  return (
    <div className="relative w-full h-full">
      {/* Right-side shadow */}
      <div
        className={`absolute inset-0 bg-gradient-to-l from-slate-800/40 to-transparent transition-all duration-700 ${
          isDrawing ? "opacity-25 -translate-x-1" : "opacity-0 translate-x-0"
        }`}
        style={{
          filter: "blur(10px)",
          clipPath: "path('M70 25 L100 70 L70 115 L40 70 Z')",
          left: "55%",
          width: "45%",
          transform: isHovered
            ? "translateX(3px) scale(1.05)"
            : "translateX(1px)",
        }}
      />

      {/* Left-side light reflection */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-white/15 to-transparent transition-all duration-700 ${
          isDrawing ? "opacity-30" : "opacity-0"
        }`}
        style={{
          filter: "blur(6px)",
          clipPath: "path('M70 25 L100 70 L70 115 L40 70 Z')",
          right: "55%",
          width: "45%",
          transform: "rotate(-5deg)",
        }}
      />

      <svg
        className="relative z-10 w-full h-full"
        viewBox="0 0 140 140"
        fill="none"
        style={{
          filter: isHovered
            ? "drop-shadow(5px 5px 10px rgba(15, 61, 62, 0.4))"
            : "drop-shadow(3px 3px 6px rgba(15, 61, 62, 0.3))",
        }}
      >
        <path
          d="M70 25 L100 70 L70 115 L40 70 Z"
          stroke="url(#tealGradient3)"
          strokeWidth="5"
          fill="none"
          style={{
            strokeDasharray: "200",
            strokeDashoffset: isDrawing ? "0" : "200",
            transition: "stroke-dashoffset 2.1s cubic-bezier(0.19, 1, 0.22, 1)",
          }}
        />
        <path
          d="M70 45 L85 70 L70 95 L55 70 Z"
          fill="url(#tealGradient3)"
          fillOpacity="0.25"
          style={{
            opacity: isDrawing ? 1 : 0,
            transform: isDrawing ? "scale(1)" : "scale(0.5)",
            transition: "all 1.1s cubic-bezier(0.19, 1, 0.22, 1) 0.7s",
          }}
        />
        <defs>
          <linearGradient
            id="tealGradient3"
            x1="20%"
            y1="20%"
            x2="80%"
            y2="80%"
          >
            <stop offset="0%" stopColor={tealGradient.light} />
            <stop offset="50%" stopColor={tealGradient.mid} />
            <stop offset="100%" stopColor={tealGradient.dark} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
});

DiamondIcon.displayName = "DiamondIcon";

type IconCardProps = {
  index: number;
  title: string;
  description: string;
  children: React.ReactElement<IconProps>;
  delay?: number;
  activeCard: number | null;
  hasLoaded: boolean;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
};

const IconCard: React.FC<IconCardProps> = memo(
  ({
    index,
    title,
    description,
    children,
    delay = 0,
    activeCard,
    hasLoaded,
    onMouseEnter,
    onMouseLeave,
  }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);
    const animationRef = useRef<number | undefined>(undefined);
    const startTimeRef = useRef<number | undefined>(undefined);
    const borderPathRef = useRef<SVGRectElement>(null);

    const animateBorder = useCallback(() => {
      if (!startTimeRef.current) return;

      const duration = 5000; // 3 seconds per full loop
      const elapsed = (performance.now() - startTimeRef.current) % duration;
      const progress = elapsed / duration;

      if (borderPathRef.current) {
        // Create a head (20%) and tail (10%) effect
        const headLength = 0.2; // 20% of circumference
        const tailLength = 0.1; // 10% of circumference
        const gapLength = 1 - headLength - tailLength;

        // Calculate dash array and offset
        const dashArray = [
          headLength * 314,
          tailLength * 314,
          gapLength * 314,
        ].join(" ");

        const dashOffset = -progress * 314;

        borderPathRef.current.style.strokeDasharray = dashArray;
        borderPathRef.current.style.strokeDashoffset = dashOffset.toString();
      }

      animationRef.current = requestAnimationFrame(animateBorder);
    }, []);

    useEffect(() => {
      if (!hasLoaded) return;

      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsDrawing(true);
        startTimeRef.current = performance.now();
        animateBorder();
      }, delay);

      return () => {
        clearTimeout(timer);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, [hasLoaded, delay, animateBorder]);

    const handleMouseEnter = useCallback(() => {
      onMouseEnter(index);
      setIsDrawing(false);
      const timer = setTimeout(() => setIsDrawing(true), 10);
      return () => clearTimeout(timer);
    }, [index, onMouseEnter]);

    return (
      <div
        className={`relative bg-[#0F3D3E] backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 ease-out transform group cursor-pointer w-full min-h-[590px] hover:min-h-[550px] border border-[#A0F0D0]/20
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        ${
          activeCard === index
            ? "scale-105 shadow-2xl shadow-[#A0F0D0]/20"
            : "scale-100 shadow-lg"
        }
      `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Animated border */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          style={{
            opacity: isVisible ? 1 : 0,
          }}
        >
          <rect
            ref={borderPathRef}
            x="2"
            y="2"
            width="calc(100% - 4px)"
            height="calc(100% - 4px)"
            rx="16"
            stroke="url(#borderGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            pathLength={314}
            style={{
              strokeDasharray: "62.8 31.4 219.8", // head, tail, gap
              strokeDashoffset: "0",
              transition: "stroke-dashoffset 0.05s linear",
            }}
          />
          <defs>
            <linearGradient
              id="borderGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0%"
                stopColor={tealGradient.light}
                stopOpacity="0.9"
              />
              <stop offset="50%" stopColor={tealGradient.mid} stopOpacity="1" />
              <stop
                offset="100%"
                stopColor={tealGradient.dark}
                stopOpacity="0.9"
              />
            </linearGradient>
          </defs>
        </svg>

        {/* Rest of the card content */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#A0F0D0]/10 via-transparent to-[#0A2E2F]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative mb-12 flex justify-center">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            {React.cloneElement(children, {
              isHovered: activeCard === index,
              isDrawing: isDrawing,
            })}
          </div>
        </div>

        <div className="text-center space-y-6">
          <h3
            className={`text-3xl font-semibold transition-colors duration-500 ${
              activeCard === index ? "text-[#A0F0D0]" : "text-white"
            }`}
          >
            {title}
          </h3>
          <p className="text-white/80 text-lg leading-relaxed max-w-sm mx-auto">
            {description}
          </p>

          <button className="bg-[#A0F0D0] hover:bg-[#8FE5C0] text-[#0F3D3E] font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#A0F0D0]/30 text-sm mt-4">
            Explore This Service
          </button>
        </div>

        <div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[#A0F0D0] to-transparent transition-all duration-500 ${
            activeCard === index ? "w-3/4 opacity-100" : "w-0 opacity-0"
          }`}
        />
      </div>
    );
  }
);

IconCard.displayName = "IconCard";

type AnimatedGoldIconsProps = {
  scrollY?: any;
};

const AnimatedGoldIcons = forwardRef<HTMLDivElement, AnimatedGoldIconsProps>(
  ({ scrollY }, ref) => {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [hasLoaded, setHasLoaded] = useState(false);

    const sectionRef = useRef<HTMLDivElement>(null);
    const actualRef = (ref as React.RefObject<HTMLDivElement>) || sectionRef;

    const isInView = useInView(actualRef, { margin: "-50% 0px -50% 0px" });

    const { scrollYProgress } = useScroll({
      target: actualRef,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
    const opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.3, 0.6], [0.95, 1]);

    const fadeOut = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
    const slideOut = useTransform(scrollYProgress, [0.8, 1], [0, 100]);

    useEffect(() => {
      if (isInView) {
        setHasLoaded(true);
      } else {
        // Reset hasLoaded when out of view to trigger re-animation
        setHasLoaded(false);
      }
    }, [isInView]);

    const handleMouseEnter = useCallback((index: number) => {
      setActiveCard(index);
    }, []);

    const handleMouseLeave = useCallback(() => {
      setActiveCard(null);
    }, []);

    return (
      <div id="services" className="min-h-screen bg-[#0F3D3E] py-15 px-2">
        <div className="min-h-screen bg-[#0F3D3E] py-20 px-2" ref={actualRef}>
          <motion.div
            className="text-left mb-24 flex items-center justify-center max-w-[80rem] 
             max-md:flex-col max-md:px-4 max-md:text-center"
            style={{
              y: titleY,
              opacity: fadeOut,
            }}
          >
            <motion.span
              className="text-6xl  text-white/80 font-bold mb-8
               max-md:text-4xl max-md:mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              animate={{
                backgroundImage: [
                  "linear-gradient(45deg, #FFFFFF, #FFFFFF)",
                  "linear-gradient(45deg, #FFFFFF, #FFFFFF)",
                  "linear-gradient(45deg, #FFFFFF, #FFFFFF)",
                ],
                backgroundClip: "text",
                webkitBackgroundClip: "text",
                color: "transparent",
                backgroundSize: "200% 200%",
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 2.0, ease: "easeOut" }}
            >
              Strategic Advisory Services
            </motion.span>
            <motion.p
              className="text-white/80 text-xl max-w-3xl mx-auto
               max-md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                x: useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]),
              }}
            >
              Excellence in every detail, crafted for your success. Enterprise
              Growth Strategies
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 w-7xl mx-auto">
            <IconCard
              index={0}
              title="Strategic Consulting"
              description="Expert guidance to transform your business strategy and operations. Comprehensive market analysis,Custom strategic roadmaps, and actionable insights."
              delay={0}
              activeCard={activeCard}
              hasLoaded={hasLoaded}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CircleIcon isHovered={false} isDrawing={false} />
            </IconCard>

            <IconCard
              index={1}
              title="Digital Transformation"
              description="Modernize your operations with cutting-edge digital solutions. Technology stack evaluation, Process automation strategies and Digital workflow implementation."
              delay={500}
              activeCard={activeCard}
              hasLoaded={hasLoaded}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <TriangleIcon isHovered={false} isDrawing={false} />
            </IconCard>

            <IconCard
              index={2}
              title="Operational Excellence"
              description="Optimize your business processes for maximum efficiency. Process optimization audits, Cost reduction strategies and Quality improvement plans"
              delay={1000}
              activeCard={activeCard}
              hasLoaded={hasLoaded}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <DiamondIcon isHovered={false} isDrawing={false} />
            </IconCard>
          </div>

          <div className="text-center mt-20">
            <button className="bg-[#A0F0D0] hover:bg-[#8FE5C0] text-[#0F3D3E] font-semibold px-12 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-[#A0F0D0]/30 text-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    );
  }
);

AnimatedGoldIcons.displayName = "AnimatedGoldIcons";

export default AnimatedGoldIcons;
