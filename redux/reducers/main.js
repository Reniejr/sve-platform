"use client";

/* eslint-disable */
import {
    createSlice
} from '@reduxjs/toolkit'
import {
    HYDRATE
} from 'next-redux-wrapper'

const initialState = {
    "example": ""
}

export const main = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setExample: function(state, action){
            return{
                ...state
            }
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
            }
        }
    }
})

export const { setExample } = main.actions

export default main.reducer