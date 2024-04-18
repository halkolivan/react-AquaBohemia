import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPopularProducts = createAsyncThunk(
  "popularRequest/getPopularProducts",
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

const popular = createSlice({
  name: "popular",
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
    builder.addCase(getPopularProducts.fulfilled, (state, { payload }) => {
      state.products = payload.products;
      state.loading = false;
    });
    builder.addCase(getPopularProducts.rejected, (state, { payload }) => {
      state.productsError = payload;
    });
  },
});

export const { setloading, setData } = popular.actions;
export default popular.reducer;
