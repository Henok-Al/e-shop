import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlices";
import productReducer from "./features/productSlice";

export const store = configureStore({
  reducer: {
    cartReducer,
    productReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
