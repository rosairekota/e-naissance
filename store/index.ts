

import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'
import thunk from 'redux-thunk';
import authSlice from './auth/authSlice';
import usersSlice from './users/usersSlice';
import birthRecordSlice from './birth-record/birth-recordsSlice';
import birthCertSlice from './birth-certificate/birth-certSlice';
import appSlice from './app/appSlice';


export const rootReducer = combineReducers({ 
    app: appSlice.reducer,
    auth: authSlice.reducer,
    users: usersSlice.reducer,
    birthRecord: birthRecordSlice.reducer,
    birthCert: birthCertSlice.reducer
  })

// on inclut redux-persist
export type RootState = ReturnType<typeof rootReducer>;

const persistConfig:PersistConfig<RootState> = {
    key: 'root',
    storage,
    blacklist:['users', 'birthRecord'],
    whitelist:['auth', 'birthCert',]
}
export const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store= configureStore({
      reducer: persistedReducer,
      devTools:process.env.NODE_ENV !== 'production',
      middleware: [thunk]
  })



export type AppDispatch = typeof store.dispatch
export type PersistedReducer = typeof persistedReducer;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


export {setLoadingApp} from './app/appSlice'
export {setUser, logout} from "./auth/authSlice"
export {setUsers} from "./users/usersSlice"
export  {setBirthRecordsDelivered, setBirthRecordsUnDeliveredFilters} from "./birth-record/birth-recordsSlice"
export  {setBirthCertDelivered, setBirthCertUnDeliveredFilters, setBirthCertToReporting, setSearchUnDeliveredCert} from "./birth-certificate/birth-certSlice"