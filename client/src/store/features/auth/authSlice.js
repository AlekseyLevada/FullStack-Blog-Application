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
        message: null,
    },
    reducers: {},
    extraReducers: builder => {
        // Registration User
        builder.addCase(registerUser.pending, (state, action) => {
            state.status = null
            state.isLoading = true
        })
        builder.addCase(registerUser.fulfilled,(state, action) => {
            state.isLoading = false
            state.message = action.payload.message
            state.status = action.payload.status
            state.token = action.payload.token
            state.user = action.payload.user
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false
            state.user = null
            state.token = null
            state.message = action.payload.message
            state.status = action.payload.status
        })

        // Login User
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoading = true
            state.status = null
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.status = action.payload.status
            state.message = action.payload.message
            state.token = action.payload.token
            state.user = action.payload.user
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false
            state.user = null
            state.token = null
            state.status = action.payload.message
            state.status = action.payload.status
        })
    }
})