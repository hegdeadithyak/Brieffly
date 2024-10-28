"use client";

import React, { useEffect, useState } from "react";
import { IconBrandGoogle } from "@tabler/icons-react";
import { account, createGoogleOAuthSession } from "@/appwrite"; // Ensure these paths match your file structure
import "src/app/globals.css";

type UserPreferences = {
  // Define additional user properties if needed
  name?: string;
  email?: string;
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
    const getUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser as UserPreferences);
      } catch (e) {
        console.error("User not logged in:", e); // Common if user isn’t signed in
      } finally {
        setLoadingUser(false);
      }
    };
    getUser();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await createGoogleOAuthSession();
    } catch (e) {
      console.error("Google sign-in error:", e);
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (e) {
      console.error("Logout error:", e);
    }
  };

  if (loadingUser) {
    return (
      <div className="bg-gray-800 p-8 max-w-sm mx-auto rounded-lg shadow-md mt-10">
        <p className="text-white font-semibold text-lg">Loading user...</p>
      </div>
    );
  }

  if (user) {
    return (
      <div className="bg-gray-800 p-8 max-w-sm mx-auto rounded-lg shadow-md mt-10">
        <p className="text-white font-semibold text-lg">You're already logged in</p>
        <button
          onClick={handleLogout}
          className="w-full mt-3 p-3 bg-red-600 hover:bg-red-700 text-white rounded-md"
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
        <h2 className="text-2xl font-inter text-center text-white">Sign Up to Brieffly</h2>
        <p className="text-center text-sm mt-2 text-white">
          Sign up to access all preparation materials
        </p>

        <div className="flex flex-col space-y-2 text-white mt-6">
          <OAuthButton
            icon={<IconBrandGoogle />}
            text="Sign in with Google"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
    </div>
  );
};

const OAuthButton = ({
  icon,
  text,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}) => (
  <button
    className="flex items-center justify-center px-4 w-full h-10 text-white rounded-md bg-blue-600 hover:bg-blue-700 transition-all duration-200 ease-in-out"
    type="button"
    onClick={onClick}
  >
    {icon}
    <span className="ml-2 text-sm text-white">{text}</span>
  </button>
);

export default SignupFormDemo;
