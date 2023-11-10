
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { NextAuthOptions } from "next-auth"
import { MANAGEMENT_API_URL } from '@/config';
import { IAuth } from '@/types/auth';
const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/signin'
  },
  session:{
    strategy:'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "jonhdoe@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: IAuth | any, req: any) {
        if (!credentials.email || !credentials?.password) return null
        const res = await fetch('https://agri.kinshasadigital.dev/api/auth/signin', {
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
  callbacks: {
    async session({ session, token, user }) {
      console.log("session-auth:", session)
      // session.accessToken  = token.accessToken  as unknown as any;
      // session.user.id = token.id
      
      return session
    },
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      console.log("jwt-auth:", token)
      return token
    },
  
  }


}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }