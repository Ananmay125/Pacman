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
        const users = [
          { id: "1", name: "John Doe", email: "john.doe@example.com", username: "john", password: "password" },
          { id: "2", name: "Bruh", email: "jane.smith@example.com", username: "bruh", password: "bruh" },
          { id: "3", name: "Admin", email: "jane.smith@example.com", username: "admin", password: "admin" },
          // Add more users as needed
        ];

        const user = users.find(user => user.username === credentials.username && user.password === credentials.password);
        if (user) {
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
        return true;
      } else {
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    }
  }
})