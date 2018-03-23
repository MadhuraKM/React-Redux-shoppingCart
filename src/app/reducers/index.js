import { combineReducers } from "redux";
import products from "../products/reducer";
import cartItems from '../cart/reducer';

export default combineReducers({ products, cartItems });