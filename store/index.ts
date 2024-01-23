

import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice';
import usersSlice from './users/usersSlice';
import birthRecordSlice from './birth-records/birth-recordsSlice';

export const store= configureStore({
    reducer:{
        auth: authSlice.reducer,
        users: usersSlice.reducer,
        birthRecords: birthRecordSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export {setUser, logout} from "./auth/authSlice"
export {setUsers} from "./users/usersSlice"
export  {setBirthRecordsDelivered, setBirthRecordsUnDeliveredFilters} from "./birth-records/birth-recordsSlice"