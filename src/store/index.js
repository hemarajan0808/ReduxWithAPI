import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./Ui-Slice";
import cartSlice from "./Cart-Slice";

const store = configureStore({ 
    reducer: { ui: uiSlice.reducer, cart:cartSlice.reducer } 
});

export default store;
