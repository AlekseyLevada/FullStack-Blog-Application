import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios/axios";

export const registerUser = createAsyncThunk('auth/registerUser',
    async ({username, password}) => {
        try {
            const { data } = await axios.post('/auth/register', {
                username,
                password,
            })
            if(data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        }
        catch (err) {
            console.log(err)
        }
    }
)

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