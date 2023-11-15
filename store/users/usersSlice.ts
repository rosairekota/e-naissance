import { IUser } from '@/types/user';
import { createSlice } from "@reduxjs/toolkit";

export interface UserState{
    users:IUser[] | null,
    
}

const initialState: UserState = {
    users: null,
  }
export const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        setUsers(state, {payload}){
            state.users= payload
            
        },
    }
})

export const {setUsers} = usersSlice.actions
export default usersSlice