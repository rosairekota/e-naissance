
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { Awaitable, NextAuthOptions } from "next-auth"
import { IAuth } from '@/types/auth';
import { IUser } from '@/types/user';
import { JWT } from 'next-auth/jwt';

const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/signin',
    newUser: '/auth/signup'
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
        if (!credentials.username || !credentials?.password) return null
        const {res, result, accessToken} = await loginUser(credentials)
        if (res.ok && result) {
           const user = result[0]
           console.log("user:", result[0])
            return {
              id: user?.etablissementReferenceId,
              name:  user?.nom,
              firstName: user.prenom,
              lastName: user.postnom,
              email:user?.courriel,
              username: user?.nomUtilisateur,
              role: user.fonction,
              hospitalName: user?.nomEtablissementReference,
              isActive: user.active,
              accessToken: accessToken,
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

