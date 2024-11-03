'use client'

import { Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Github } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
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
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-4 font-inter">
      <GridDotBackground />
      <div className="max-w-4xl w-full space-y-8 z-10">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white">Contact Us</h1>
          <p className="mt-2 text-sm text-gray-400">We'd love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Contact Information Card */}
          <Card className="bg-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg p-6">
            <CardHeader>
              <CardTitle className="text-white font-inter">Team Lead</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ContactInfo icon={<Mail size={20} />} text="adithyahegdek@gmail.com" />
              <ContactInfo icon={<Phone size={20} />} text="+91-8555085536" />
              <ContactInfo icon={<MapPin size={20} />} text="Amrita Vishwa Vidyapeetham,Amritapuri,Kollam,Kerala" />
              <SocialLinks
                twitter="https://x.com/HegdeKota92488"
                instagram="https://www.instagram.com/adithyahegdekota"
                linkedin="https://linkedin.com/in/hegdeadithyak"
                github="https://github.com/hegdeadithyak"
              />
            </CardContent>
          </Card>

          {/* Second Contact Information Card */}
          <Card className="bg-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg p-6">
            <CardHeader>
              <CardTitle className="text-white font-inter">Co Lead</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ContactInfo icon={<Mail size={20} />} text="honeygyani2004@gmail.com" />
              <ContactInfo icon={<Phone size={20} />} text="+91-7857095950" />
              <ContactInfo icon={<MapPin size={20} />} text="Amrita Vishwa Vidyapeetham,Amritapuri,Kollam,Kerala" />
              <SocialLinks
                twitter="https://x.com/honeygyani"
                instagram="https://www.instagram.com/gyanihoney/"
                linkedin="https://linkedin.com/in/honey-gyani-58920b2a1"
                github="https://github.com/honeygyani"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Contact Information Item
function ContactInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span className="text-gray-300">{text}</span>
    </div>
  )
}

// Social Links Component with customizable links
function SocialLinks({ twitter, instagram, linkedin, github }: { twitter: string; instagram: string; linkedin: string; github: string }) {
  return (
    <div className="flex justify-start space-x-4 mt-4">
      <SocialLink href={twitter} icon={<Twitter size={24} />} colorClass="text-blue-400 hover:text-blue-600" />
      <SocialLink href={instagram} icon={<Instagram size={24} />} colorClass="text-pink-600 hover:text-pink-800" />
      <SocialLink href={linkedin} icon={<Linkedin size={24} />} colorClass="text-blue-800 hover:text-blue-900" />
      <SocialLink href={github} icon={<Github size={24} />} colorClass="text-gray-400 hover:text-gray-600" />
    </div>
  )
}

// SocialLink Component
function SocialLink({ href, icon, colorClass }: { href: string; icon: React.ReactNode; colorClass: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${colorClass} transition-colors`}>
      {icon}
      <span className="sr-only">Social Link</span>
    </a>
  )
}