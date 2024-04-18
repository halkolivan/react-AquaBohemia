import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "homeRequest/getAllProducts",
  async (data, { rejectedWithValue }) => {
    try {
      const response = await axios.get(`/mock/productsData.json`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectedWithValue(error.response.data);
    }
  }
);

const home = createSlice({
  name: "home",
  initialState: {
    products: undefined,
    productsError: undefined,
    loading: true,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.products = payload.products;
      state.loading = false;
    });
    builder.addCase(getAllProducts.rejected, (state, { payload }) => {
      state.productsError = payload;
    });
  },
});

export const { setLoading, setData } = home.actions;
export default home.reducer;
