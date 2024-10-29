'use client'

import { useState } from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
//@ts-ignore
import { account, ID } from 'src/appwrite'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import "src/app/globals.css"


function GridDotBackground() {
    return (
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
    );
  }
  
export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault()
    try {
      setLoading(true)
      const user = await account.create(ID.unique(), email, password, name)
      console.log('User created:', user)
      await account.createEmailPasswordSession(email, password)
      router.push('/courses')
    } catch (error) {
      console.error('Signup failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 bg-grid-small-white/[0.2] relative overflow-hidden font-inter">
      <GridDotBackground /> {/* Background Component */}

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -20 }}
        className="max-w-md w-full mx-auto rounded-2xl p-8 shadow-lg bg-black text-white z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-bold text-2xl mb-2"
        >
          Create an Account
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg mb-6"
        >
          Sign up to get started with Brieffly
        </motion.p>

        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6" 
          onSubmit={handleSignUp}
        >
          <LabelInputContainer>
            <Label htmlFor="name" className="text-lg text-gray-300">Full Name</Label>
            <Input 
              id="name" 
              placeholder="John Doe" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              type="text"
              required
              className="bg-gray-800 text-white border-gray-700 focus:border-blue-500 text-lg"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email" className="text-lg text-gray-300">Email Address</Label>
            <Input 
              id="email" 
              placeholder="john@example.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="email"
              required
              className="bg-gray-800 text-white border-gray-700 focus:border-blue-500 text-lg"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="password" className="text-lg text-gray-300">Password</Label>
            <Input 
              id="password" 
              placeholder="••••••••" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              type="password"
              required
              className="bg-gray-800 text-white border-gray-700 focus:border-blue-500 text-lg"
            />
          </LabelInputContainer>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-3 font-medium focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 text-lg"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </motion.button>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-4"
          >
            <Link href="/" className="text-blue-400 hover:text-blue-300 text-lg">
              Already have an account? Log in
            </Link>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className={cn("flex flex-col space-y-2 w-full", className)}
    >
      {children}
    </motion.div>
  );
};
