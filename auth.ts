import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { ZodError } from "zod"
import { signInSchema } from "./lib/zod"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./lib/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [GitHub,
    Credentials({
        credentials: {
          email: {},
          password: {},
        },
        authorize: async (credentials) => {
          try {
            let user = null
            const { email, password } = await signInSchema.parseAsync(credentials)
   
            // logic to verify if the user exists
            user = await getUserFromDb(email)
   
            if (!user) {
              throw new Error("Invalid credentials.")
            }

            return user

          } catch (error) {
            if (error instanceof ZodError) {
              return null
            }
          }
        },
      }),
  ],
})
function getUserFromDb(email: string): any {
    throw new Error("Function not implemented.")
}

