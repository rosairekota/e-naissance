import NextAuth from 'next-auth';
import { IUser } from './types/user.interface';

declare module 'next-auth' {
    interface Session{
        user:IUser;
        accessToken: string,
        refreshToken: string,
    }
  
}
