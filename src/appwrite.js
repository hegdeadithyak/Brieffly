// appwrite.js

import { Client, Account, OAuthProvider } from 'appwrite';
// Initialize the Appwrite client
const client = new Client();
const account = new Account(client);

// Set up the Appwrite client
client
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('671faed30033480a3cb6'); // Replace with your actual project ID

// Function to create an OAuth2 session
export const loginWithGoogle = async () => {
    try {
        await account.createOAuth2Session(
            OAuthProvider.Google, // OAuth provider
            'https://brieffly-ten.vercel.app', // Redirect on success
            'https://brieffly-ten.vercel.app', // Redirect on failure
            ['repo', 'user'] // Scopes (optional)
        );
    } catch (error) {
        console.error('Login failed', error);
    }
};

// Function to log out
export const logout = async () => {
    try {
        await account.deleteSession('current');
    } catch (error) {
        console.error('Logout failed', error);
    }
};

export { account };
