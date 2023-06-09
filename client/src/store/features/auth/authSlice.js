import {createSlice} from "@reduxjs/toolkit";
import {registerUser} from "../../thunks/registerUser";
import {loginUser} from "../../thunks/loginUser";
import {userProfile} from "../../thunks/userProfile";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        user: null,
        token: null,
        status: null,
        message: null,
    },
    reducers: {
        logout: (state) => {
            state.isLoading = false
            state.user = null
            state.token = null
            state.status = null
        }
    },
    extraReducers: builder => {
        // Registration User
        builder.addCase(registerUser.pending, (state) => {
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
        builder.addCase(registerUser.rejected, (state) => {
            state.isLoading = false
            state.user = null
            state.token = null
        })

        // Login User
        builder.addCase(loginUser.pending, (state) => {
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
        builder.addCase(loginUser.rejected, (state) => {
            state.isLoading = false
            state.user = null
            state.token = null
        })

        // getProfile
        builder.addCase(userProfile.pending, (state) => {
            state.isLoading = true
            state.status = null
        })
        builder.addCase(userProfile.fulfilled, (state, action) => {
            state.isLoading = false
            state.status = action.payload.status
            state.message = null
            state.token = action.payload?.token
            state.user = action.payload?.user
        })
        builder.addCase(userProfile.rejected, (state) => {
            state.isLoading = false
            state.user = null
            state.token = null
        })
    }
})

export const {logout} = authSlice.actions
export const checkIsAuth = state => Boolean(state.auth.token)