"use client";

import { useEffect, useState } from "react";
//@ts-ignore
import { account, ID } from "src/appwrite";
import "src/app/globals.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { Label } from "src/components/ui/label";
import { Input } from "src/components/ui/input";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function GridBackgroundDemo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//@ts-ignore

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div onMouseMove={handleMouseMove} className="absolute inset-0 z-0">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sessionid, setSessionid] = useState("");
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  console.log({ user });

  useEffect(() => {
    async function getUser() {
      try {
        const userData = await account.get();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoadingUser(false);
      }
    }
    getUser();
  }, []);

  async function handleLogout() {
    try {
      await account.deleteSession(sessionid);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  async function handleLogin() {
    try {
      setLoading(true);
      await account.createEmailPasswordSession(email, password);
      const loggedInUser = await account.get();
      router.push("/courses");
      const sessionid1 = await account.getSession();
      setSessionid(sessionid1);
      console.log(loggedInUser);
      setUser(loggedInUser);
      setEmail("");
      setPassword("");
    } catch (e) {
      console.error("Login failed:", e);
    } finally {
      setLoading(false);
    }
  }

  if (loadingUser) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center justify-center min-h-screen bg-gray-900 bg-grid-small-white/[0.2]"
      >
        <GridBackgroundDemo />
        
        <div className="bg-black p-8 max-w-sm mx-auto rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="h-8 w-8 text-blue-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </motion.svg>
            <p className="text-white font-semibold text-xl">Loading user...</p>
          </div>
          </div>
      </motion.div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 relative overflow-hidden font-inter">
      {/* Grid Background */}
      <GridBackgroundDemo />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="max-w-md w-full mx-auto rounded-2xl p-8 shadow-lg bg-black text-white relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-bold text-2xl mb-2"
        >
          Welcome to Brieffly
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg mb-6"
        >
          Log in to continue
        </motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >

          
          <LabelInputContainer >
            <Label htmlFor="email" className="text-lg text-gray-300">
              Email Address
            </Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="bg-gray-800 text-white border-gray-700 focus:border-blue-500 text-lg"
            />
          </LabelInputContainer>
          <LabelInputContainer >
            <Label htmlFor="password" className="text-lg text-gray-300">
              Password
            </Label>
            <Input
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="bg-gray-800 text-white border-gray-700 focus:border-blue-500 text-lg"
            />
          </LabelInputContainer>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-3 font-medium focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 text-lg"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-4"
          >
            <Link href="/signup" className="text-blue-400 hover:text-blue-300 text-lg">
              Create an Account? Sign up
            </Link>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
}

//@ts-ignore
const LabelInputContainer = ({ children, className = "" }) => {
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
