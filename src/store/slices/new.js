import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewProducts = createAsyncThunk(
  "newProductsRequest/getNewProducts",
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

const newSlice = createSlice({
  name: "new",
  initialState: {
    productsNew: undefined,
    productsError: undefined,
    loading: true,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNewProducts.fulfilled, (state, { payload }) => {
      state.productsNew = payload.productsNew;
      state.loading = false;
    });
    builder.addCase(getNewProducts.rejected, (state, { payload }) => {
      state.productsError = payload;
    });
  },
});

export const { setLoading, setData } = newSlice.actions;
export default newSlice.reducer;
