import { IUser } from '@/types/user';
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState{
    user:IUser | null,
    isAuthenticated: boolean,
    
}


const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
  }
export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser(state, {payload}){
            state.isAuthenticated=true;
            state.user= payload
            
        },
        logout(state){
            state.isAuthenticated =false
        }
    }
})

export const {setUser, logout} = authSlice.actions
export default authSlice