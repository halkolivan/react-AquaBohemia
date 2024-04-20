import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("orderList");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("orderList", serializedState);
  } catch (error) {
    console.log("Error save", error);
  }
};

const orderSlice = createSlice({
  name: "buyOrder",
  initialState: loadState() || {
    count: 0,
    orderList: [],
  },
  reducers: {
    addOrder(state, { payload }) {
      const myOrder = state.orderList ? Array.from(state.orderList) : [];
      const currentOrderProduct = myOrder.findIndex(
        (item) => item.id === payload.id
      );

      if (currentOrderProduct !== -1) {
        myOrder[currentOrderProduct].count += 1;
      } else {
        myOrder.push({ ...payload, count: 1 });
      }
      state.count = myOrder.reduce((acc, item) => acc + item.count, 0);
      state.orderList = myOrder;
      console.log(state.orderList);
      saveState(state);
    },

    decrease(state, { payload }) {
      let myOrder = state.orderList ? Array.from(state.orderList) : [];
      const currentItem = myOrder.findIndex((item) => item.id === payload);

      if (myOrder[currentItem].count === 1) {
        myOrder = myOrder.filter((item) => item.id !== payload);
      } else {
        myOrder[currentItem].count -= 1;
        state.count = myOrder.reduce((acc, item) => acc + item.count, 0);
      }

      state.orderList = myOrder;
      saveState(state);
    },

    deleteOrder(state, action) {
      state.orderList = state.orderList.filter(
        (item) => item.id !== action.payload
      );
      state.count =
        state.orderList.length > 0
          ? state.orderList.reduce((acc, item) => acc + item.count, 0)
          : 0;
      saveState(state);
    },
  },
});

export const { addOrder, deleteOrder, decrease } = orderSlice.actions;
export default orderSlice.reducer;
