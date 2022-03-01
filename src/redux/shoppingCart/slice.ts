import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ShoppingCartState {
    loading: boolean;
    error: string | null;
    items: any[];
}
const initialState: ShoppingCartState = {
    loading: true,
    error: null,
    items: [],
  };

export const getShoppingCart = createAsyncThunk(
    "shoppingCart/getShoppingCart",
    async (jwt: string, thunkAPI) => {
        const { data } = await axios.get(
          `http://123.56.149.216:8080/api/shoppingCart`,
          {
              headers: {
                  Authorization: `bearer ${jwt}`
              }
          }
        );
        return data.shoppingCartItems; 
    }
)

export const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {},
    extraReducers: {
        [getShoppingCart.pending.type]: (state) => {
            // return {...state, loading: true};
            state.loading = true
        },
        [getShoppingCart.fulfilled.type]: (state, action) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null
        },
        [getShoppingCart.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})