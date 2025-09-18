"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Users, Lightbulb, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const clientLogos = [
  { name: "6sense", imageUrl: "/logo/6sense.png" },
  { name: "Amazon", imageUrl: "/logo/amazom.png" },
  { name: "colgate", imageUrl: "/logo/colgate.png" },
  { name: "figma", imageUrl: "/logo/figma.png" },
  { name: "google", imageUrl: "/logo/google.png" },
  { name: "databricks", imageUrl: "/logo/databricks_logo_icon_249070.png" },
];
export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "Tjimke's strategic guidance transformed our go-to-market approach. Her deep AI expertise helped us position our product in a way that resonated with both investors and customers.",
      name: "Sarah Chen",
      role: "CEO, AI Startup",
    },
    {
      quote:
        "Working with Nunu Consulting was a game-changer. They didn't just create marketing materials—they helped us understand our story and communicate our value clearly.",
      name: "Marcus Rodriguez",
      role: "Founder, TechVision AI",
    },
    {
      quote:
        "The strategic insights from Nunu Consulting helped us secure our Series A funding. Their market positioning expertise was invaluable.",
      name: "Jennifer Park",
      role: "CTO, DataFlow AI",
    },
    {
      quote:
        "Exceptional consulting that bridges the gap between technical innovation and market success. Highly recommend for any AI startup.",
      name: "David Thompson",
      role: "CEO, Neural Networks Inc",
    },
  ];

  const testimonialsPerSlide = 2;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev: any) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev: any) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * testimonialsPerSlide;
    return testimonials.slice(startIndex, startIndex + testimonialsPerSlide);
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const values = [
    {
      icon: Target,
      title: "Proven AI Expertise",
      description:
        "9+ years at Google leading product marketing across AI perception, YouTube Ads, and Google Ads.",
    },
    {
      icon: Users,
      title: "Founder-First Approach",
      description:
        "We operate as your embedded strategy partner, not a distant consultant.",
    },
    {
      icon: Lightbulb,
      title: "Story + Strategy",
      description:
        "From positioning to launch playbooks, we connect vision with results that move markets.",
    },
    {
      icon: Heart,
      title: "Values-Centered",
      description:
        "We believe in building sustainable businesses that create positive impact.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section with Image */}
      <div className="bg-[#0A211F] min-h-3.5 pt-60 relative overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          {/* Team photo - extends to full right side */}
          <div className="absolute right-0 top-0 w-2/3 h-full">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/data-center-admin-looking-maintenance-files-monitoring-system-performance.jpg-up6KRYL4lWTII3qgbkenfbIXGKVXbI.jpeg"
              alt="Team working in office"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Black gradient overlay that blends the image into the black background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A211F] via-[#0A211F]/70 to-[#0A211F]/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-3.5 flex flex-col justify-center">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="max-w-3xl">
              {/* Main Headline */}
              <h1 className="text-white text-3xl sm:text-xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
                We don't just market AI,{" "}
                <span className="italic">we make it matter.</span>
                <br />
                {/* <br /> */}
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
                A boutique consulting firm dedicated to empowering AI-first
                startups with strategic go-to-market planning and innovative
                marketing solutions.
              </p>

              <Button
                size="lg"
                className="group mb-16 relative overflow-hidden bg-[#A0F0D0] hover:bg-[#A0F0D0]/80 text-[#0F3D3E] px-8 py-4 text-lg font-semibold"
              >
                <span className="relative z-10 flex items-center font-bold">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#A0F0D0]/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </div>
          </div>

          {/* Trusted by section - positioned at bottom */}
          <div className="container mx-auto px-8 lg:px-16 pb-16">
            <div className="max-w-4xl">
              <p className="text-gray-400 text-sm mb-8">
                Trusted and endorsed by
              </p>

              <div className="flex items-center space-x-8 lg:space-x-12 opacity-70">
                {/* PayPal */}
                <div className="text-white font-bold text-xl tracking-wide">
                  PayPal
                </div>

                {/* LITHISOZ */}
                <div className="text-white">
                  <div className="text-sm font-bold tracking-wider">
                    LITHISOZ
                  </div>
                  <div className="text-xs text-gray-400">
                    Digital Future of Retail
                  </div>
                </div>

                {/* NOVAVENTE */}
                <div className="text-white font-bold text-lg tracking-wider">
                  NOVAVENTE
                </div>

                {/* WiZR */}
                <div className="text-white font-bold text-xl">WiZR</div>

                {/* PrimeOrbit */}
                <div className="flex items-center space-x-2 text-white">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute w-4 h-0.5 bg-black transform rotate-45"></div>
                  </div>
                  <span className="font-bold">PrimeOrbit</span>
                </div>

                {/* ellow */}
                <div className="text-white font-bold text-xl italic">
                  ellow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Original Hero Section - now secondary */}
      {/* <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-[#0F3D3E] mb-6"
            {...fadeInUp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Nunu Consulting
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            A boutique consulting firm dedicated to empowering AI-first startups
            with strategic go-to-market planning and innovative marketing
            solutions.
          </motion.p>
        </div>
      </section> */}

      {/* Who We Are Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeInUp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F3D3E] mb-6">
                Why We Exist
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Brilliant technology isn’t enough. Without the right strategy
                and story, even the best AI products struggle to break through.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Nunu Consulting, we bridge the gap between technical
                brilliance and market adoption, shaping narratives, sharpening
                positioning, and guiding go-to-market execution. You keep
                building. We’ll make sure the world understands, wants, and
                trusts what you’ve built.
              </p>
              {/* <p className="text-lg text-gray-600 leading-relaxed">
                Our approach combines deep industry expertise with innovative
                methodologies, ensuring our clients not only reach their target
                markets effectively but also build lasting competitive
                advantages.
              </p> */}
            </motion.div>

            <motion.div
              className="relative"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about1.jpg"
                  alt="Nunu Consulting Team"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D3E]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A211F]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Edge
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We exist to bridge the gap between groundbreaking AI innovation
              and market success, helping visionary founders turn their
              technological breakthroughs into thriving businesses.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-sm hover:shadow-md hover:bg-white/15 transition-all border border-white/20"
                variants={fadeInUp}
              >
                <value.icon className="h-12 w-12 text-[#A0F0D0] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About the CEO Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative order-2 lg:order-1"
              {...fadeInUp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/ceo.jpg"
                  alt="CEO of Nunu Consulting"
                  width={500}
                  height={600}
                  className="object-cover w-full h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D3E]/10 to-transparent" />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-[#0F3D3E]">Tjimke</h3>
                <p className="text-gray-600">Founder & Principal Consultant</p>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F3D3E] mb-6">
                Meet Our Founder
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A trusted advisor to multiple early-stage AI founders, Tjimke
                has helped products at Google and beyond find their market and
                scale. She started Nunu Consulting to bring that same clarity
                and momentum to the next generation of AI startups ensuring they
                launch fast, resonate deeply, and grow sustainably.
              </p>
              <blockquote className="border-l-4 border-[#A0F0D0] pl-4 mb-8">
                <p className="text-lg text-gray-600 italic">
                  "AI must be built and marketed with clarity, responsibility,
                  and transparency."
                </p>
              </blockquote>
              <div className="flex space-x-4 mb-8">
                <Link
                  href="https://linkedin.com/in/tjimke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F3D3E] hover:text-[#0F3D3E]/80 transition-colors"
                >
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#A0F0D0] text-[#0F3D3E] font-semibold rounded-lg hover:bg-[#8FE5C0] transition-colors"
              >
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted and endorsed by
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leading AI companies and visionary founders trust Nunu Consulting
              to transform their breakthrough innovations into market-leading
              businesses.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <img
                  src={client.imageUrl}
                  alt={`${client.name} logo`}
                  className="w-24 h-12 object-contain hover:opacity-80 transition-opacity duration-300 filter grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0A211F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            What Our Clients Say
          </h2>

          <div className="relative">
            {/* Navigation arrows - only show if more than 2 testimonials */}
            {testimonials.length > testimonialsPerSlide && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute -left-12 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Previous testimonials"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute -right-12 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Next testimonials"
                >
                  →
                </button>
              </>
            )}

            {/* Testimonials grid - shows 2 testimonials side by side */}
            <div className="grid md:grid-cols-2 gap-8">
              {getCurrentTestimonials().map((testimonial, index) => (
                <Card
                  key={currentSlide * testimonialsPerSlide + index}
                  className="bg-slate-800 border-slate-700"
                >
                  <CardContent className="p-8">
                    <blockquote className="text-lg mb-6 text-gray-200 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                      <div>
                        <p className="font-semibold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Slide indicators - only show if more than 2 testimonials */}
            {testimonials.length > testimonialsPerSlide && (
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide
                        ? "bg-emerald-500"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0A211F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">
            Ready to make your AI matter?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to transform your innovative AI technology into
            a market-leading solution.
          </p>
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 py-4"
          >
            Book a Consultation
          </Button>
        </div>
      </section>

      {/* Founding Story Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3D3E] mb-8">
              Our Founding Story
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nunu Consulting was born from a simple observation: brilliant AI
              innovations were struggling to find their market fit, not because
              of technological limitations, but due to strategic and marketing
              challenges.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              After witnessing countless promising AI startups fail to reach
              their potential, we knew there was a critical need for specialized
              consulting that understood both the technical complexity of AI and
              the nuanced requirements of modern go-to-market strategies. That's
              when Nunu Consulting was founded—to bridge this gap and empower
              the next generation of AI innovators.
            </p>

            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-[#A0F0D0] text-[#0F3D3E] font-semibold rounded-lg hover:bg-[#8FE5C0] transition-colors text-lg"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
