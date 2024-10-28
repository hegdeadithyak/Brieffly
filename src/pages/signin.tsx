// SignIn.tsx

import React from 'react';
import { loginWithGoogle } from 'src/appwrite';
import "src/app/globals.css"


const SignIn = () => {
    const handleGoogleSignIn = async () => {
        try {
            await loginWithGoogle();
        } catch (error) {
            console.error("Error during Google OAuth session creation:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-semibold mb-6">Sign In with Google</h1>
            <button
                onClick={handleGoogleSignIn}
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
            >
                Sign In with Google
            </button>
        </div>
    );
};

export default SignIn;
