import {createSlice} from "@reduxjs/toolkit";
import {registerUser} from "../../thunks/registerUser";
import {loginUser} from "../../thunks/loginUser";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        user: null,
        token: null,
        status: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(registerUser.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(registerUser.fulfilled,(state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.token = action.payload.token
            state.user = action.payload.user
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false
            state.user = null
            state.token = null
            state.status = action.payload.message
        })
        builder.addCase(loginUser.pending, (state, action) => {
            console.log(action)
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            console.log(action)
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.status = action.payload.message
        })
    }
})