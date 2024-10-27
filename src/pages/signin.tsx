"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import "src/app/globals.css";

// Grid background component
function GridDotBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
}

const SignupFormDemo = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black font-inter">
      <GridDotBackground />
      <div className="relative z-10 rounded-[22px] max-w-lg w-full p-4 sm:p-10 bg-gray-900 bg-opacity-70 backdrop-blur-lg overflow-hidden">
        <h2 className="text-2xl font-inter text-center text-white">SignUp to Brieffly</h2>
        <p className="text-neutral-300 text-center text-sm mt-2 text-white">
          Sign Up to get all access for your preparation
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4 animate-slide-up delay-75">
            <Label htmlFor="email" className="text-white">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              className="bg-gray-800 text-gray-100 border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4 animate-slide-up delay-100">
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              className="bg-gray-800 text-gray-100 border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8 animate-slide-up delay-150">
            <Label htmlFor="twitterpassword" className="text-white">Your Twitter password</Label>
            <Input
              id="twitterpassword"
              placeholder="••••••••"
              type="password"
              className="bg-gray-800 text-gray-100 border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            />
          </LabelInputContainer>

          <button
            className="relative w-full bg-gradient-to-br from-blue-500 to-purple-600 text-white h-12 rounded-md group"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>
        </form>

        <div className="flex flex-col space-y-2 text-white mt-6">
          <OAuthButton icon={<IconBrandGithub />} text="GitHub" />
          <OAuthButton icon={<IconBrandGoogle />} text="Google" />
          <OAuthButton icon={<IconBrandOnlyfans />} text="OnlyFans" />
        </div>
      </div>
    </div>
  );
};

const BottomGradient = () => (
  <>
    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
    <span className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm group-hover:opacity-100 transition-all duration-500"></span>
  </>
);

const OAuthButton = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <button
    className="flex items-center justify-center px-4 w-full h-10 text-white rounded-md bg-blue-600 hover:bg-blue-700 transition-all duration-200 ease-in-out"
    type="button"
  >
    {icon}
    <span className="ml-2 text-sm text-white">{text}</span>
  </button>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-1 w-full", className)}>
    {children}
  </div>
);

export default SignupFormDemo;
