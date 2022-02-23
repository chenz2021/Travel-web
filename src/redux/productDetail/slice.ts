import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductDetailState {
    loading: boolean;
    error: string | null;
    data: any
}
const initialState: ProductDetailState = {
    loading: true,
    error: null,
    data: null,
  };

export const getProductDetail = createAsyncThunk(
    "productDetail/getProductDetail",
    async (id: string | undefined, thunkAPI) => {
        const { data } = await axios.get(
          `http://123.56.149.216:8080/api/touristRoutes/${id}`
        );
        return data; 
    }
)

export const productDetailSlice = createSlice({
    name: "productDetail",
    initialState,
    reducers: {
        fetchStart: (state) => {
            // return {...state, loading: true};
            state.loading = true
        },
        fetchSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null
        },
        fetchFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    },
    extraReducers: {
        [getProductDetail.pending.type]: (state) => {
            // return {...state, loading: true};
            state.loading = true
        },
        [getProductDetail.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null
        },
        [getProductDetail.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})