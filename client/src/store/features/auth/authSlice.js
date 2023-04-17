import {createSlice} from "@reduxjs/toolkit";
import {registerUser} from "../../thunks/registerUser";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        status: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(registerUser.pending, (state, action) => {

        })
        builder.addCase(registerUser.fulfilled, (state, action) => {

        })
        builder.addCase(registerUser.rejected, (state, action) => {

        })
    }
})