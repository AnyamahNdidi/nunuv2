"use client";

import { useState, useEffect, useRef } from "react";
import { useInView, useScroll, useSpring } from "framer-motion";

import Hero from "@/components/hero";
import { Services } from "@/components/services";
// import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { Stats } from "@/components/stats";
import { VideoBackground } from "@/components/video-background";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { CardSlider } from "@/components/3dCardSlider";
import Service1 from "@/components/service1";
import AnimatedGoldIcons from "@/components/AnimatedGoldIcons";
import { About } from "@/components/about";
import TrustedBrands from "@/components/trusted-brands";
import WhatWeDo from "@/components/what-we-do";

export default function HomePage() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const ourStories = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  const ourStoriesRef = useRef(null);

  const isHeroInView = useInView(heroRef, { margin: "-50% 0px -50% 0px" });
  const isStatsInView = useInView(statsRef, { margin: "-50% 0px -50% 0px" });
  const isServicesInView = useInView(servicesRef, {
    margin: "-50% 0px -50% 0px",
  });
  const isAboutInView = useInView(aboutRef, { margin: "-50% 0px -50% 0px" });
  const isOurStories = useInView(ourStories, {
    margin: "-50% 0px -50% 0px",
  });
  const isContactInView = useInView(contactRef, {
    margin: "-50% 0px -50% 0px",
  });
  const isFooterInView = useInView(footerRef, { margin: "-50% 0px -50% 0px" });

  const isOurStoriesInView = useInView(ourStoriesRef, {
    // Changed variable name
    margin: "-50% 0px -50% 0px",
  });

  const [activeSection, setActiveSection] = useState("hero");

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 150,
    damping: 20,
    mass: 0.5, // default is 1, lower makes it quicker
  });

  useEffect(() => {
    if (isHeroInView) setActiveSection("hero");
    else if (isStatsInView) setActiveSection("stats");
    else if (isServicesInView) setActiveSection("services");
    else if (isAboutInView) setActiveSection("about");
    else if (isOurStories) setActiveSection("stories");
    else if (isContactInView) setActiveSection("contact");
    else if (isFooterInView) setActiveSection("footer");
    else if (isOurStoriesInView) setActiveSection("stories");
  }, [
    isHeroInView,
    isStatsInView,
    isServicesInView,
    isAboutInView,
    isOurStories,
    isContactInView,
    isFooterInView,
    isOurStoriesInView,
  ]);

  return (
    <>
      <VideoBackground />
      {/* <ScrollProgress /> */}
      {/* <Navigation activeSection={activeSection} /> */}
      <main className="min-h-screen relative scroll-snap-type-y-mandatory">
        <Hero ref={heroRef} scrollY={smoothScrollY} />
        <TrustedBrands />
        {/* <Stats ref={statsRef} scrollY={smoothScrollY} /> */}
        {/* <Service1 /> */}
        <WhatWeDo />
        <AnimatedGoldIcons ref={servicesRef} scrollY={smoothScrollY} />
        {/* <Services ref={servicesRef} scrollY={smoothScrollY} /> */}

        {/* <About ref={aboutRef} scrollY={smoothScrollY} /> */}
        <CardSlider ref={ourStoriesRef} scrollY={smoothScrollY} />
        {/* <Testimonials ref={testimonialsRef} scrollY={scrollY} />
        <Contact ref={contactRef} scrollY={scrollY} /> */}
        {/* <Footer ref={footerRef} scrollY={scrollY} /> */}
      </main>
    </>
  );
}
