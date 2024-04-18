import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCatalogProducts = createAsyncThunk(
  "catalogRequest/getCatalogProducts",
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

const catalog = createSlice({
  name: "catalog",
  initialState: {
    productsCatalog: undefined,
    productsError: undefined,
    loading: true,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(getCatalogProducts.fulfilled, (state, { payload }) => {
      state.productsCatalog = payload.productsCatalog;
      state.loading = false;
    });
    builder.addCase(getCatalogProducts.rejected, (state, { payload }) => {
      state.productsError = payload;
    });
  },
});

export const { setLoading, setData } = catalog.actions;
export default catalog.reducer;
