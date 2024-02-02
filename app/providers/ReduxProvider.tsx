'use client'
import { store } from '@/store'
import { persistor } from '@/store/persistor';
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

type Props = {
    children: ReactNode
}
const ReduxProvider: React.FC<Props> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
                </PersistGate>
         </Provider>
    )
}

export default ReduxProvider