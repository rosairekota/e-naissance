import { IBirthRecord } from '@/types/birth-record';
import { createSlice } from "@reduxjs/toolkit";

const birthRecordsUnDeliveredFilters: IBirthRecord[] = [
    {
      name: 'John Doe',
      birthDate: new Date('1990-05-15'),
    },
    {
      name: 'Jane Smith',
      birthDate: new Date('1985-12-20'),
    },
    {
      name: 'Bob Johnson',
      birthDate: new Date('1995-08-03'),
    },
    // Ajoutez autant d'objets que nécessaire
  ];
export interface BirthRecordState{
    birthRecordsUnDeliveredFilters:IBirthRecord[],
    birthRecordsDelivered:IBirthRecord[] | null,
    isLoading: boolean
    
}

const initialState: BirthRecordState = {
    birthRecordsUnDeliveredFilters: birthRecordsUnDeliveredFilters,
    birthRecordsDelivered: null,
    isLoading: false
  }
export const birthRecordSlice = createSlice({
    name:'birthRecords',
    initialState,
    reducers:{
        setBirthRecordsUnDeliveredFilters(state, {payload}){
            state.isLoading = true
            state.birthRecordsUnDeliveredFilters= payload
            state.isLoading = false
            
        },
        setBirthRecordsDelivered(state, {payload}){
            state.isLoading = true
            state.birthRecordsDelivered= payload
            state.isLoading = false
            
        },
    }
})

export const {setBirthRecordsDelivered, setBirthRecordsUnDeliveredFilters} = birthRecordSlice.actions
export default birthRecordSlice