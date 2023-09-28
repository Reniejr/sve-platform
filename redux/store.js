import {
    configureStore, combineReducers
} from '@reduxjs/toolkit'

import {
    createWrapper
} from 'next-redux-wrapper'

import { persistReducer } from 'redux-persist'

import main  from './reducers/main'

const rootReducer = combineReducers({
    main: main
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})