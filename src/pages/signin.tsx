"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import { account } from "src/appwrite.js"; // Ensure this is your Appwrite client
import { createGoogleOAuthSession } from "@/appwrite"; // Adjust the import path as needed

import "src/app/globals.css";

// Define the user type here, replace `User<Preferences>` with the actual type if available
type UserPreferences = {
  // Define properties of User<Preferences> type here
};

function GridDotBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
}

const SignupFormDemo = () => {
  const [user, setUser] = useState<UserPreferences | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    async function getUser() {
      try {
        const currentUser = await account.get();
        setUser(currentUser as UserPreferences);
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingUser(false);
      }
    }
    getUser();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await createGoogleOAuthSession();
    } catch (e) {
      console.error("Google sign-in error: ", e);
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (e) {
      console.error(e);
    }
  };

  if (loadingUser) {
    return (
      <div className="bg-gray-800 p-8 max-w-sm mx-auto rounded-lg shadow-md mt-10">
        <div className="flex items-center space-x-4">
          <svg className="animate-spin h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-white font-semibold text-lg">Loading user...</p>
        </div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="bg-gray-800 p-8 max-w-sm mx-auto rounded-lg shadow-md mt-10">
        <div className="flex items-center">
          <svg className="h-6 w-6 text-blue-500 mr-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          <p className="text-white font-semibold text-lg">You're already logged in</p>
        </div>
        <button 
          onClick={handleLogout} 
          className="w-full m-3 p-3 bg-red-600 hover:bg-red-700 text-white rounded-md focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black font-inter">
      <GridDotBackground />
      <div className="relative z-10 rounded-[22px] max-w-lg w-full p-4 sm:p-10 bg-gray-900 bg-opacity-70 backdrop-blur-lg overflow-hidden">
        <h2 className="text-2xl font-inter text-center text-white">SignUp to Brieffly</h2>
        <p className="text-center text-sm mt-2 text-white">
          Sign Up to get all access for your preparation
        </p>

        <div className="flex flex-col space-y-2 text-white mt-6">
          <OAuthButton 
            icon={<IconBrandGoogle />} 
            text="Sign in with Google" 
            onClick={handleGoogleSignIn} 
          />
          {/* Add other OAuth buttons here if needed */}
        </div>
      </div>
    </div>
  );
};

const OAuthButton = ({ icon, text, onClick }: { icon: React.ReactNode; text: string; onClick: () => void }) => (
  <button
    className="flex items-center justify-center px-4 w-full h-10 text-white rounded-md bg-blue-600 hover:bg-blue-700 transition-all duration-200 ease-in-out"
    type="button"
    onClick={onClick}
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
