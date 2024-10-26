"use client"; // Indicate that this component uses client-side rendering

import { motion } from "framer-motion";
import "src/app/globals.css";
import { HeroHighlight, Highlight } from "src/components/ui/highlight1";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-4"
      >
        <HeroHighlightDemo /> {/* Add the HeroHighlightDemo component here */}
        <h1 className="text-4xl font-bold text-white mb-6">Follow Us</h1>
        <div className="flex justify-center space-x-8">
          {/* Replace 'src' with your actual icon image paths */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="src/components/ui/icons/github.png" alt="GitHub" className="h-10 w-10" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="src/components/ui/icons/instagram.png" alt="Instagram" className="h-10 w-10" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="src/components/ui/icons/facebook.png" alt="Facebook" className="h-10 w-10" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="src/components/ui/icons/twitter.jpeg" alt="Twitter" className="h-10 w-10" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

// HeroHighlightDemo Component
function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        With insomnia, nothing&apos;s real. Everything is far away. Everything
        is a{" "}
        <Highlight className="text-black dark:text-white">
          copy, of a copy, of a copy.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
