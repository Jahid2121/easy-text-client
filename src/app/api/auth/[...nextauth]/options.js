import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


console.log("GITHUB_CLIENT_ID:", process.env.GITHUB_CLIENT_ID);
console.log("GITHUB_CLIENT_SECRET:", process.env.GITHUB_CLIENT_SECRET);

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)