
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { Awaitable, NextAuthOptions } from "next-auth"
import { MANAGEMENT_API_URL } from '@/config';
import { IAuth } from '@/types/auth';
import { IUser } from '@/types/user.interface';
import { JWT } from 'next-auth/jwt';
export const authOptions: NextAuthOptions = {
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
      async authorize(credentials: IAuth | any, req: any):Promise<IUser|null> {
        console.log("credentials:", credentials)
        if (!credentials.email || !credentials?.password) return null
        const res = await fetch(`${MANAGEMENT_API_URL}/auth/login`, {
          method: 'POST',
          body: JSON.stringify({email: credentials.email, password: credentials.password}),
          headers: { "Content-Type": "application/json" }
        })
        const result = await res.json()

        if (res.ok && result) {
          return {
            id: result?.user?.id,
            email: result?.user?.email,
            firstName:  result?.user?.firstName,
            lastName:  result?.user?.lastName,
            isActive: result?.user?.isActive,
            isMerchant: result?.user?.isMerchant,
            roles:  result?.user?.userRoles,
            accessToken: result?.accessToken,
            refreshToken: result?.refreshToken,
            ...result?.user
          }
        }
        throw new Error("Cet utilisateur n'existe pas")
      },
    })
  ],
  callbacks: {
   
    async jwt({ token, user }): Promise<JWT> {
      if (user)  return {token, user} as unknown as any
      return token
    },
    async session({ session, token, user }) {
      session.accessToken  = token.accessToken;
      session.refreshToken= token.refreshToken
      session.user = token.user
      console.log("session-auth:", session )
      return session
    },
  
  },
  secret: process.env.NEXTAUTH_SECRET,


}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }