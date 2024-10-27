'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import "src/app/globals.css"

// Grid background component
function GridDotBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
}

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', { name, email })
    // Redirect to a thank you page
    router.push('/thank-you')
  }

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-4 font-inter">
      <GridDotBackground />
      <div className="max-w-4xl w-full space-y-8 z-10">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white font-inter">Contact Us</h1>
          <p className="mt-2 text-sm text-gray-400 font-inter">We'd love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-white font-inter">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="text-gray-400" size={20} />
                <span className="text-gray-300">briefflyexample@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-gray-400" size={20} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-gray-400" size={20} />
                <span className="text-gray-300">123 Main St, Anytown, India 12345</span>
              </div>
              <div className="flex justify-start space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Facebook size={24} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
                  <Twitter size={24} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
                  <Instagram size={24} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900 transition-colors">
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-white font-inter">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-gray-200 bg-gray-800 border-gray-700"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-gray-200 bg-gray-800 border-gray-700"
                  />
                </div>
                <Button type="submit" className="w-full bg-gray-600 hover:bg-gray-700 transition-colors">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-300 mb-1">
      {children}
    </label>
  )
}
