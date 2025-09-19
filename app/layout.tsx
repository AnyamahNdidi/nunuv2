import type React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import { ScrollProgress } from "@/components/scroll-progress";
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";
import dynamic from "next/dynamic";
import { useInView, useScroll, useSpring } from "framer-motion";

// Configure Roboto font with desired weights and styles
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Include the weights you need
  style: ["normal", "italic"], // Include styles if needed
  variable: "--font-roboto", // Optional CSS variable
  display: "swap", // Optional: ensures text remains visible during webfont load
});

export const metadata: Metadata = {
  title: "Nunu Consulting",
  description: "Empowering Marketing Growth",
  generator: "v0.dev",
};
// const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { scrollY } = useScroll();

  return (
    <html lang="en" suppressHydrationWarning className={roboto.className}>
      <body>
        <ThemeProvider defaultTheme="dark">
          {/* <ScrollProgress /> */}
          <Navigation activeSection="" />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
