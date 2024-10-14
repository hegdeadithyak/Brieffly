"use client";
import React from 'react';
import { signIn } from 'next-auth/react';
import { GoalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        <div className="space-y-4">
          <Button
            className="w-full flex items-center justify-center"
            onClick={() => signIn('github')}
          >
            Sign in with GitHub
          </Button>
          <Button
            className="w-full flex items-center justify-center"
            onClick={() => signIn('google')}
          >
            <GoalIcon className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;