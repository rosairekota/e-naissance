import { IBirthCertificate } from '@/types/birth-certificate';
import { createSlice } from "@reduxjs/toolkit";


export interface BirthCertState{
    birthCertsUnDeliveredFilters:IBirthCertificate[],
    birthCertsDelivered:IBirthCertificate[] | null,
    isLoading: boolean
    
}

const initialState: BirthCertState = {
    birthCertsUnDeliveredFilters: [],
    birthCertsDelivered: null,
    isLoading: false
  }
export const birthCertSlice = createSlice({
    name:'birthCert',
    initialState,
    reducers:{
        setBirthCertUnDeliveredFilters(state, {payload}){
            state.isLoading = true
            state.birthCertsUnDeliveredFilters= payload
            state.isLoading = false
            
        },
        setBirthCertDelivered(state, {payload}){
            state.isLoading = true
            state.birthCertsDelivered= payload
            state.isLoading = false
            
        },
    }
})

export const {setBirthCertDelivered, setBirthCertUnDeliveredFilters} = birthCertSlice.actions
export default birthCertSlice