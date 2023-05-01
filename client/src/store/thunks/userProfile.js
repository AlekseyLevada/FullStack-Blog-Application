import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios/axios";

export const userProfile = createAsyncThunk(
    'auth/userProfile',
    async () => {
        try {
            const { data } = await axios.get('/auth/profile')
            return data
        }
        catch (err) {
            console.log(err)
        }
    }
)