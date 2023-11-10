import { IUser } from '@/types/user.interface';
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState{
    user:IUser | null,
    isAuthecated: boolean,
    
}


const initialState: AuthState = {
    user: null,
    isAuthecated: false,
  }
export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser(state, {payload}){
            state.isAuthecated=true;
            state.user= payload
            
        },
        logout(state){
            state.isAuthecated =false
        }
    }
})

export const {setUser, logout} = authSlice.actions
export default authSlice