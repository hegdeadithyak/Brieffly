"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { account, ID } from "src/appwrite";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { GridBackgroundDemo } from "@/components/ui/grid";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userExists, setUserExists] = useState(false);
  const router = useRouter();

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage("");
    setUserExists(false);
    try {
      setLoading(true);
      const user = await account.create(ID.unique(), email, password, name);
      console.log("User created:", user);
      await account.createEmailPasswordSession(email, password);
      router.push("/courses");
    } catch (error: any) {
      console.error("Signup failed:", error);
      if (error.code === 409) {
        setUserExists(true);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await account.createEmailPasswordSession(email, password);
      router.push("/courses");
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 bg-grid-small-white/[0.2] relative overflow-hidden font-sans">
      <GridBackgroundDemo />

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
          {userExists ? "Welcome Back!" : "Create an Account"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg mb-6"
        >
          {userExists
            ? "Looks like you already have an account. Please log in."
            : "Sign up to get started with Brieffly"}
        </motion.p>

        {errorMessage && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
          onSubmit={handleSignUp}
        >
          {!userExists && (
            <LabelInputContainer>
              <Label htmlFor="name" className="text-lg text-gray-300">
                Full Name
              </Label>
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
          )}
          <LabelInputContainer>
            <Label htmlFor="email" className="text-lg text-gray-300">
              Email Address
            </Label>
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
            <Label htmlFor="password" className="text-lg text-gray-300">
              Password
            </Label>
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

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-3 font-medium focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 text-lg"
            onClick={userExists ? handleLogin : undefined}
          >
            {loading ? "Processing..." : userExists ? "Log In" : "Sign Up"}
          </Button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-4"
          >
            <Link
              href="/"
              className="text-blue-400 hover:text-blue-300 text-lg"
            >
              {userExists
                ? "Need a new account? Sign up"
                : "Already have an account? Log in"}
            </Link>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
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
