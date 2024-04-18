import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getOrderProducts = createAsyncThunk(
  "orderRequest/getOrderProducts",
  async ({ rejectedWithValue }) => {
    try {
      const response = await axios.get("/mock/productsData.json");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectedWithValue(error.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "buyOrder",
  initialState: {
    count: 0,
    orderList: [],
  },
  reducers: {
    addOrder(state, { payload }) {
      const myOrder = state.orderList ? Array.from() : [];
      const currentOrderProduct = myOrder.findIndex(
        (item) => item.id === payload.id
      );

      if (currentOrderProduct !== -1) {
        myOrder[currentOrderProduct].count += 1;
      } else {
        myOrder.push({ ...payload, count: 1 });
        state.count = myOrder.reduce((acc, item) => (acc + item.count, 0));
      }

      state.orderList = myOrder;
      console.log(state.orderList);
    },

    deleteOrder(state, action) {
      state.orderList = state.orderList.filter(
        (item) => item.id !== action.payload
      );
      state.count = state.cart.reduce((acc, item) => acc + item.count, 0);
    },
  },
});

export const { addOrder, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
