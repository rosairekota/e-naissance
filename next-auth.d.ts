import NextAuth from 'next-auth';
import { IUser } from './types/user';
import { JWT } from 'next-auth';

declare module 'next-auth' {
    interface Session{
        user:IUser;
        accessToken: string,
        refreshToken: string,
    }
    
  
}
declare module 'next-auth/jwt' {
    interface JWT{
        user:IUser;
        accessToken: string,
        refreshToken: string,
    }
  
}