import { IBirthCertificate } from '@/types/birth-certificate';
import { createSlice } from "@reduxjs/toolkit";


export interface BirthCertState{
    birthCertsUnDeliveredFilters:IBirthCertificate[],
    birthCertsDelivered:IBirthCertificate[] | null,
    birthCertToReporting: IBirthCertificate,
    isLoading: boolean
    
}

const initialState: BirthCertState = {
    birthCertsUnDeliveredFilters: [],
    birthCertsDelivered: null,
    birthCertToReporting:{} as unknown as IBirthCertificate,
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
        setBirthCertToReporting(state, {payload}){
            state.birthCertToReporting= JSON.parse(payload)
            
        },
    }
})

export const {setBirthCertDelivered, setBirthCertUnDeliveredFilters, setBirthCertToReporting} = birthCertSlice.actions
export default birthCertSlice