import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductSearchState {
    loading: boolean;
    error: string | null;
    data: any;
    pagination: any;
}
const initialState: ProductSearchState = {
    loading: true,
    error: null,
    data: null,
    pagination: null,
  };

export const searchProduct = createAsyncThunk(
    "productSearch/searchProduct",
    async (paramaters: {
        keywords: string,
        nextPage: number | string,
        pageSize: number | string,
    } , thunkAPI) => {
        const { data } = await axios.get(
          `http://123.56.149.216:8080/api/touristRoutes/${id}`
        );
        return data; 
    }
)

export const productDetailSlice = createSlice({
    name: "productSearch",
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
        [searchProduct.pending.type]: (state) => {
            // return {...state, loading: true};
            state.loading = true
        },
        [searchProduct.fulfilled.type]: (state, action) => {
            state.data = action.payload.data;
            state.pagination = action.payload.pagination;
            state.loading = false;
            state.error = null
        },
        [searchProduct.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})