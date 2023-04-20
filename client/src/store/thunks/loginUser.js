import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios/axios";

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({username, password}) => {
        try {
            const { data } = await axios.post('/auth/login', {
                username,
                password,
            })
            console.log(data)
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