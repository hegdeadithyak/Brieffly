"use client";

import { motion } from "framer-motion";
import { ArrowRight, LogIn } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover_border_gradient";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";

export default function Home() {
  const isSignedIn = false; // This should be replaced with actual auth state

  const handleGetStarted = () => {
    window.location.href = "/chapters";
  };

  return (
    <div className="min-h-screen bg-black dark:bg-black flex flex-col relative overflow-hidden font-inter">
      <nav className="w-full p-4 relative z-10 bg-gray-900">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto flex justify-between items-center"
        >
          <div className="flex space-x-4">
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <Link href={isSignedIn ? "/chapters" : "/signin"} passHref>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-gray-700 transition-colors duration-300"
            >
              {isSignedIn ? "My Chapters" : "Sign In"}
              <LogIn className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </nav>

      <main className="flex-grow flex items-center justify-center relative z-10">
        <div className="text-center space-y-8 px-4">
          {/* Animated Heading with Sparkles Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 120 }}
            className="relative inline-block"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white relative z-10">
              Brieffly: where formulas go on a diet!
            </h1>
            <SparklesCore
              background="transparent"
              minSize={0.3}
              maxSize={1}
              particleDensity={1000}
              particleColor="#FFFFFF"
              className="absolute inset-0 w-full h-full z-0"
            />
          </motion.div>

          {/* Animated Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-2xl text-gray-300"
          >
            Get genius-level smarts in snack-sized cards—because who has time for long notes?
          </motion.p>

          {/* Updated Animated Button with HoverBorderGradient */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-white bg-black text-white dark:text-white flex items-center space-x-2 px-6 py-3"
              onClick={handleGetStarted}
            >
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5 text-white dark:text-white" />
            </HoverBorderGradient>
          </motion.div>
        </div>
      </main>

      {/* Background with Grid Pattern */}
      <div className="absolute inset-0 h-full w-full bg-black dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] pointer-events-none"></div>
    </div>
  );
}

//@ts-ignore
function NavLink({ href, children }) {
  return (
    <motion.a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-300 font-semibold text-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
