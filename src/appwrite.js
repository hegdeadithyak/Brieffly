import { Client, Account, OAuthProvider } from "appwrite";

// Initialize the Appwrite client
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
  .setProject('670b8c280000919250b8'); // Replace with your project ID

// Initialize the Account instance
export const account = new Account(client);

// Function to create an OAuth2 session
export const createGoogleOAuthSession = () => {
  return account.createOAuth2Session(
    OAuthProvider.Google, // OAuth provider
    'https://brieffly-ten.vercel.app/chapters', // Redirect on success
    'https://brieffly-ten.vercel.app/signin', // Redirect on failure
    ['repo', 'user'] // Scopes (optional)
  );
};
