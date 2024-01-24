

import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice';
import usersSlice from './users/usersSlice';
import birthRecordSlice from './birth-record/birth-recordsSlice';
import birthCertSlice from './birth-certificate/birth-certSlice';

export const store= configureStore({
    reducer:{
        auth: authSlice.reducer,
        users: usersSlice.reducer,
        birthRecord: birthRecordSlice.reducer,
        birthCert: birthCertSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export {setUser, logout} from "./auth/authSlice"
export {setUsers} from "./users/usersSlice"
export  {setBirthRecordsDelivered, setBirthRecordsUnDeliveredFilters} from "./birth-record/birth-recordsSlice"
export  {setBirthCertDelivered, setBirthCertUnDeliveredFilters, setBirthCertToReporting} from "./birth-certificate/birth-certSlice"