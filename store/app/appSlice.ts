
import { createSlice } from "@reduxjs/toolkit";

export interface AppState{
   loadingApp: boolean
   content: string
    
}

const initialState: AppState = {
    loadingApp: true,
    content:"Chargement"
  }
export const appSlice = createSlice({
    name:'app',
    initialState,
    reducers:{
        setLoadingApp(state, {payload}){
            state.loadingApp= payload.loading
            state.content= payload?.content
            
        },
    }
})

export const {setLoadingApp} = appSlice.actions
export default appSlice