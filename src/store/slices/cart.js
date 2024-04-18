import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCartProducts = createAsyncThunk(
  "cartRequest/getCartProducts",
  async (_, { rejectedWithValue }) => {
    try {
      const response = await axios.get(`/mock/productsData.json`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectedWithValue(error.response.data);
    }
  }
);

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
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
    localStorage.setItem("cart", serializedState);
  } catch (error) {
    console.log("Error save", error);
  }
};

const cart = createSlice({
  name: "cart",
  initialState: loadState() || {
    value: 0,
    count: 0,
    cart: [],
  },

  reducers: {
    decrement(state, { payload }) {
      let myCart = state.cart ? Array.from(state.cart) : [];
      const currentItem = myCart.findIndex((item) => item.id === payload);

      if (myCart[currentItem].count === 1) {
        myCart = myCart.filter((item) => item.id !== payload);
      } else {
        myCart[currentItem].count -= 1;
      }

      state.cart = myCart;
      saveState(state);
    },

    addCart(state, { payload }) {
      const myCart = state.cart ? Array.from(state.cart) : [];
      const currentItem = myCart.findIndex((item) => item.id === payload.id);

      if (currentItem !== -1) {
        myCart[currentItem].count += 1;
      } else {
        myCart.push({ ...payload, count: 1 });
        state.count = myCart.reduce((acc, item) => acc + item.count, 0);
      }

      state.cart = myCart;
      saveState(state);
      console.log(state.cart);
    },
    deleteCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.count = state.cart.reduce((acc, item) => acc + item.count, 0);
      saveState(state);
    },
  },
});

export const { decrement, addCart, deleteCart } = cart.actions;
export default cart.reducer;
