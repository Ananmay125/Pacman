import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const user = { id: "1", name: "John Doe", email: "john.doe@example.com" }
        if (credentials.username === "john" && credentials.password === "password") {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) {
        return true
      } else {
        return false
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    }
  }
})