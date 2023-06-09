import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios/axios";

export const registerUser = createAsyncThunk(
    'auth/registerUser',
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