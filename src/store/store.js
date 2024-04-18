import { configureStore } from "@reduxjs/toolkit";
import Home from "./slices/home";
import Catalog from "./slices/catalog";
import New from "./slices/new";
import Popular from "./slices/popular";
import Cart from "./slices/cart";
import Order from "./slices/order"

export const store = configureStore({
  reducer: {
    home: Home,
    catalog: Catalog,
    new: New,
    popular: Popular,
    cart: Cart,
    buyOrder: Order,
  },
});
