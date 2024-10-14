// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';


export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: "Ov23liM55mRl3whgLc6U",
      clientSecret: "3865332598af8ce6b0dc937004d32fd2d9b5d876"
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/signin',
    error: '/auth/error',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user);
      return true;
    },
    async redirect({ url, baseUrl }) {
      return 'https://www.youtube.com';
    },
    async session({ session, user }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
});
