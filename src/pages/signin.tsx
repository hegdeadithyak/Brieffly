"use client";

import { useEffect, useState, ReactNode } from "react";
//@ts-ignore
import { account, ID } from "src/appwrite";
import "src/app/globals.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { Label } from "src/components/ui/label";
import { Input } from "src/components/ui/input";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GridBackgroundDemo } from "@/components/ui/grid";

export var sessionId = "";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error message

  interface User {
    name: string;
  }

  const [user, setUser] = useState<User | null>(null);
  const [sessionid, setSessionid] = useState("");
  const [loadingUser, setLoadingUser] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
      router.push("/"); // Optional: redirect after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  async function handleLogin() {
    try {
      setLoading(true);
      setError(""); // Clear any previous error message
      const session = await account.createEmailPasswordSession(email, password);
      const loggedInUser = await account.get();
      setUser(loggedInUser);
      router.push("/courses");
      setEmail("");
      setPassword("");
    } catch (e) {
      console.error("Login failed:", e);
      setError("Invalid email or password"); // Set error message if login fails
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
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
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
      <GridBackgroundDemo />

      {user ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="max-w-md w-full mx-auto rounded-2xl p-8 shadow-lg bg-black text-white relative z-10 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-bold text-2xl mb-2"
          >
            Welcome, {user.name}!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg mb-6"
          >
            You are already signed in.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white rounded-md py-3 font-medium focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50 text-lg"
          >
            Logout
          </motion.button>
        </motion.div>
      ) : (
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
            {error && <p className="text-red-500 text-lg">{error}</p>}{" "}
            {/* Error message */}
            <LabelInputContainer>
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
            <LabelInputContainer>
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
              {loading ? "Signing in..." : "Sign in"}
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center text-gray-400 mt-4"
            >
              <p>
                New to Brieffly?{" "}
                <Link href="/signup" className="text-blue-500 hover:underline">
                  Create an account
                </Link>
              </p>
            </motion.div>
          </motion.form>
        </motion.div>
      )}
    </div>
  );
}

type LabelInputContainerProps = {
  children: ReactNode;
  className?: string;
};

function LabelInputContainer({
  children,
  className,
}: LabelInputContainerProps) {
  return <div className={cn("space-y-2", className)}>{children}</div>;
}
