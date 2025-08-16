"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { useRouter, usePathname } from "next/navigation";

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHoveringNav, setIsHoveringNav] = useState(false);

  const handleNavigation = (href: string) => {
    if (href.startsWith("#") && pathname !== "/") {
      // If it's an anchor link and we're not on home page, go to home first
      router.push(`/${href}`);
    } else {
      router.push(href);
    }
    setIsMobileMenuOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "/about" },
    { name: "Success Stories", href: "#stories" },
    { name: "Contact Us", href: "/contact" },
  ];

  const colors = {
    deepTeal: "#0F3D3E",
    softWhite: "#F5F7FA",
    mintGreen: "#A0F0D0",
    brightGreen: "#2FEAA8",
  };

  const navBgColor = isHoveringNav
    ? "bg-white"
    : isScrolled
    ? "bg-[#0F3D3E]" // Changed from deepTeal to #0F172A
    : "bg-transparent";

  const textColor = isHoveringNav ? `text-[${colors.deepTeal}]` : "text-white";

  const buttonStyles = isHoveringNav
    ? "bg-[#A0F0D0] hover:bg-[#2FEAA8] text-[#0F3D3E]"
    : "bg-[#2FEAA8] hover:bg-[#A0F0D0] text-slate-900";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgColor}`}
      onMouseEnter={() => setIsHoveringNav(true)}
      onMouseLeave={() => setIsHoveringNav(false)}
    >
      <div className="sm:max-w-[100%] lg:max-w-[70%] mx-auto px-4 sm:px-2 lg:px-0">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex"
          >
            <Logo
              width={120}
              height={48}
              className="h-12 w-auto"
              isNavHovered={isHoveringNav}
            />
          </motion.div>

          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`${textColor} hover:text-[${colors.deepTeal}] px-4 py-2 text-sm font-medium transition-all duration-200 relative group`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <motion.div
                    className={`absolute bottom-0 left-0 w-full h-0.5 ${
                      isHoveringNav ? "bg-[#0F3D3E]/50" : "bg-white/50"
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX:
                        activeSection.toLowerCase() === item.name.toLowerCase()
                          ? 1
                          : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                className={`w-full group relative overflow-hidden ${buttonStyles} px-8 py-4 text-lg font-semibold transition-colors duration-300`}
              >
                <span className="relative z-10 flex items-center justify-center font-bold">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${textColor} hover:bg-white/10`}
              aria-label="Open mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F3D3E] border-t border-white/10"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-white hover:text-[${
                    colors.deepTeal
                  }] block px-4 py-3 text-base font-medium rounded-lg hover:bg-white/5 transition-colors ${
                    activeSection.toLowerCase() === item.name.toLowerCase()
                      ? `text-[${colors.deepTeal}]`
                      : ""
                  }`}
                  // onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="pt-4">
                <Button
                  className={`w-full font-semibold ${buttonStyles} border border-white/20`}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navigation;
