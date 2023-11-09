
import  CredentialsProvider  from 'next-auth/providers/credentials';
import NextAuth, { NextAuthOptions } from "next-auth"
import { MANAGEMENT_API_URL } from '@/config';
export const authOptions:NextAuthOptions ={
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: "username", type: "email", placeholder: "jonhdoe@gmail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials: any, req: any) {
            console.log("credentials:", credentials)
            if (!credentials?.username|| !credentials?.password) return null
            const{username, password} =credentials
            const res = await fetch(`${MANAGEMENT_API_URL}/auth/login`, {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" }
            })
            const user = await res.json()
            console.log("response", user)
      
            if (res.ok && user) {
              console.log("ok")
              return user
            }
            return null
          },
        })
      ],
      
      pages: {
        signIn: '/auth/signin',
      },


}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }