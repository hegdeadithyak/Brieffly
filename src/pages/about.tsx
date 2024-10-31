'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Clock, Brain } from 'lucide-react'
import "src/app/globals.css";
import { HoverBorderGradient } from "@/components/ui/hover_border_gradient"; // Ensure this path is correct

function GridBackgroundDemo() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden font-inter ">
      <GridBackgroundDemo />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-8"
        >
          About Brieffly
        </motion.h1>
        
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-center text-neutral-400 mb-12 max-w-3xl mx-auto"
        >
          Empowering students with real-time test experiences to boost confidence and performance.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-black/50 backdrop-blur-lg rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-neutral-200 mb-4">Our Mission</h2>
            <p className="text-neutral-400">
              At Brieffly, we're dedicated to revolutionizing the way students prepare for exams. 
              By providing an authentic test environment, we aim to reduce exam anxiety and improve 
              overall performance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-black/50 backdrop-blur-lg rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-neutral-200 mb-4">How We Help</h2>
            <p className="text-neutral-400">
              Our platform simulates real exam conditions, allowing students to practice under 
              time pressure, adapt to various question types, and receive instant feedback on 
              their performance.
            </p>
          </motion.div>
        </div>

        <h2 className="text-3xl font-bold text-center text-neutral-200 mb-8">Key Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
              icon: Clock, 
              title: "Real-Time Simulations", 
              description: "Experience the pressure of timed exams to improve your time management skills." 
            },
            {
              icon: BookOpen, 
              title: "Diverse Question Banks", 
              description: "Access a wide range of questions across various subjects and difficulty levels." 
            },
            {
              icon: Brain, 
              title: "Adaptive Learning", 
              description: "Our system adapts to your performance, focusing on areas that need improvement."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
              className="bg-black/50 backdrop-blur-lg rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            >
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-neutral-200 mb-2">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6, ease: "easeOut" }}
          className="mt-16 flex justify-center items-center"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black/50 backdrop-blur-sm text-white flex items-center space-x-2 px-6 py-2"
            onClick={() => (window.location.href = "/signin")}
          >
            <span>Get Started</span>
            <ArrowRight className="ml-2 h-5 w-5 text-white" />
          </HoverBorderGradient>
        </motion.div>
      </motion.div>
    </div>
  )
}
