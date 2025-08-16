"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Users, Lightbulb, Heart } from "lucide-react";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
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
      title: "Strategic Focus",
      description:
        "We help AI-first startups identify and execute winning go-to-market strategies.",
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description:
        "We work as an extension of your team, not just external consultants.",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description:
        "We leverage cutting-edge marketing techniques and AI tools to drive results.",
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
      <div className="bg-[#0F3D3E] min-h-3.5 pt-60 relative overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F3D3E] via-[#0F3D3E]/70 to-[#0F3D3E]/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-3.5 flex flex-col justify-center">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="max-w-3xl">
              {/* Main Headline */}
              <h1 className="text-white text-3xl sm:text-xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
                We believe AI will
                <br />
                fundamentally transform the
                <br />
                way we work
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-20 max-w-2xl">
                A boutique consulting firm dedicated to empowering AI-first
                startups with strategic go-to-market planning and innovative
                marketing solutions.
              </p>
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
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nunu Consulting is a specialized boutique firm that partners
                with AI-first startups to accelerate their growth through
                strategic go-to-market planning and cutting-edge marketing
                initiatives.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We understand the unique challenges facing AI companies in
                today's rapidly evolving landscape, and we provide the strategic
                guidance and tactical execution needed to break through the
                noise and achieve sustainable growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach combines deep industry expertise with innovative
                methodologies, ensuring our clients not only reach their target
                markets effectively but also build lasting competitive
                advantages.
              </p>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0F3D3E]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission & Values
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
                With over 15 years of experience in strategic marketing and
                business development, our founder recognized the unique
                challenges facing AI startups in translating cutting-edge
                technology into market success.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Having worked with Fortune 500 companies and high-growth
                startups alike, she brings a rare combination of
                enterprise-level strategic thinking and startup agility to every
                client engagement.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Her passion for AI innovation and deep understanding of
                go-to-market dynamics led to the creation of Nunu Consulting—a
                firm specifically designed to help AI-first companies navigate
                the complex journey from product-market fit to sustainable
                growth.
              </p>

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

      {/* Founding Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
      </section>
    </div>
  );
}
