import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sign } from "crypto";

interface UserState {
    loading: boolean;
    error: string | null;
    token: string | null;
}
const initialState: UserState = {
    loading: true,
    error: null,
    token: null,
  };

export const SignIn = createAsyncThunk(
    "user/signIn",
    async (parameters: {
        email: string,
        password: string
    }, thunkAPI) => {
        const { data } = await axios.post(
          `http://123.56.149.216:8080/auth/login`, {
              email: parameters.email,
              password: parameters.password
          }
        );
        return data.token; 
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [SignIn.pending.type]: (state) => {
            // return {...state, loading: true};
            state.loading = true
        },
        [SignIn.fulfilled.type]: (state, action) => {
            state.token = action.payload;
            state.loading = false;
            state.error = null
        },
        [SignIn.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})