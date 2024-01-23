
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { Awaitable, NextAuthOptions } from "next-auth"
import { IAuth } from '@/types/auth';
import { IUser } from '@/types/user';
import { JWT } from 'next-auth/jwt';
import { fetchUserMe, loginUser } from '@/services/userService';

const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
    newUser: '/register'
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
      async authorize(credentials: IAuth | any, req: any):Promise<IUser|null|any> {
       try {
        if (!credentials.email || !credentials?.password) return null
        const {res, result} = await loginUser(credentials)
        if (res.ok && result) {
          const me  = await fetchUserMe(result.data.access_token)
          if (me.code=== 200) {
            return {
              id: me?.data?.id,
              email: me?.data?.email,
              name:  me?.data?.name,
              roles:  me?.data?.roles,
              accessToken: result?.data?.access_token,
              ...result?.data
            }
          }
      
          
        } else{
          throw new Error("Oups! echec ")
        }
       } catch (error) {
        throw new Error("Cet utilisateur n'existe pas")
       }
      },
    })
  ],
  callbacks: {
   
    async jwt({ token, user }): Promise<JWT> {
      if (user)  return {token, user} as unknown as any
      return token
    },
    async session({ session, token, user }) {
     
      session.accessToken  =  token?.user?.accessToken as string;
      session.user = token.user
      return session
    },
  
  },
  secret: process.env.NEXTAUTH_SECRET,


}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

