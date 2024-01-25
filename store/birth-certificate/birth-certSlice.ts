import { IBirthCertificate } from '@/types/birth-certificate';
import { createSlice } from "@reduxjs/toolkit";


export interface BirthCertState{
    birthCertsUnDeliveredFilters:IBirthCertificate[],
    birthCertsDelivered:IBirthCertificate[] | null,
    birthCertToReporting: IBirthCertificate,
    searchUnDeliveredCert: string,
    isLoading: boolean,
    isCertSearched:boolean,
    
}

const initialState: BirthCertState = {
    birthCertsUnDeliveredFilters: [],
    birthCertsDelivered: null,
    birthCertToReporting:{} as unknown as IBirthCertificate,
    searchUnDeliveredCert: '',
    isCertSearched:false,
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
        setSearchUnDeliveredCert(state, {payload}){
            state.searchUnDeliveredCert= payload
            
        },
        setIsCertSearched(state,  {payload}){
            state.isCertSearched= payload
            
        },
    }
})

export const {
setBirthCertDelivered, 
setBirthCertUnDeliveredFilters, 
setBirthCertToReporting, 
setSearchUnDeliveredCert,
setIsCertSearched
} = birthCertSlice.actions
export default birthCertSlice