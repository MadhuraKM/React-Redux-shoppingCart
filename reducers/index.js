import { combineReducers } from "redux";
import products from "./productReducer";
import cartItems from './cartReducer';

export default combineReducers({ products, cartItems });