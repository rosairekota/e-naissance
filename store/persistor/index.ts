
import { persistStore } from 'redux-persist';
import { store } from '..';


export const persistor = persistStore(store)