"use client";

import type React from "react";

import { motion, useInView } from "framer-motion";
import { forwardRef } from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Logo } from "@/components/logo";

type FooterIconsProps = {
  scrollY?: any;
};

export const Footer = forwardRef<HTMLElement, FooterIconsProps>(() => {
  // const isInView = useInView(ref as React.RefObject<HTMLElement>, {
  //   once: false,
  //   margin: "-100px",
  // });

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const footerLinks = {
    Services: [
      "Product & Narrative Strategy",
      "Go-to-Market Strategy",
      "Business Development",
      // "Risk Management",
    ],
    Resources: ["Portfolio"],
    Company: ["About Us", "Contact"],

    // Legal: [
    //   "Privacy Policy",
    //   "Terms of Service",
    //   "Cookie Policy",
    //   "Disclaimer",
    // ],
  };

  const sectionContentVariants = {
    hidden: { opacity: 0, y: 150, rotateX: -20 }, // Increased y and rotateX for more dramatic effect
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0, // Reset rotateX
      transition: {
        duration: 0.6, // Slightly increased duration for smoothness
        ease: "easeOut",
      },
    },
  };

  return (
    <footer
      // ref={ref}
      className="relative z-10 w-full scroll-snap-align-start bg-[#0A211F]   overflow-hidden" // Added overflow-hidden
    >
      <motion.div
        className="bg-[#0A211F] w-full backdrop-blur-md rounded-2xl p-8 md:p-12  " // Added mx-4
        style={{
          transformOrigin: "bottom center",
          maxWidth: "calc(100% - 0rem)", // Ensures it stays within viewport
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Logo width={120} height={48} className="mb-4" />
              <p className="text-white mb-6 leading-relaxed">
                Transforming businesses through strategic financial consulting,
                innovative solutions, and data-driven insights.
              </p>
              <div className="text-white mb-6 leading-relaxed">
                <p>123 Business Avenue</p>
                <p>Suite 456</p>
                <p>New York, NY 10001</p>
              </div>
              <div className="text-white mb-6 leading-relaxed">
                <p>Phone: +1 (555) 123-4567</p>
                <p>Email: contact@nunuconsulting.com</p>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-[rgb(var(--card-background))] rounded-full flex items-center justify-center hover:bg-[rgb(var(--accent-gold-dark))] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-[rgb(var(--foreground))]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-[#A0F0D0] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-[rgb(var(--card-border))] pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white] text-sm">
            © {new Date().getFullYear()} Nunu Consulting. All rights reserved.
          </p>
          <p className="text-white text-sm mt-4 md:mt-0">
            Made with{" "}
            <span
              className="text-[rgb(var(--accent-gold))] animate-pulse"
              role="img"
              aria-label="heart"
            >
              ❤️
            </span>{" "}
            for ambitious businesses
          </p>
        </motion.div>
      </motion.div>
      {/* </div> */}
    </footer>
  );
});

Footer.displayName = "Footer";
