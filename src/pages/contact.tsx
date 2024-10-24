// src/app/contact/page.tsx (for Next.js 13 with App Router)
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-yellow flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold text-white mb-6">Follow Us</h1>
        <div className="flex justify-center space-x-8">
          {/* Replace 'src' with your actual icon image paths */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.png" alt="GitHub" className="h-10 w-10" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.png" alt="Instagram" className="h-10 w-10" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.png" alt="Facebook" className="h-10 w-10" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.png" alt="Twitter" className="h-10 w-10" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
