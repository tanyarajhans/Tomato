import { combineReducers } from "redux";
import cartReducer from "./cart/cartSlice.js";

const rootReducer = combineReducers(
    {cart: cartReducer}
);

export default rootReducer;