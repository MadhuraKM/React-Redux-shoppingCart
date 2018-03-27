import { combineReducers } from "redux";
import {products, itemsHasErrored, itemsIsLoading } from "../shop/products/reducer";
import cartItems from '../shop/cart/reducer';

export default combineReducers({ products, cartItems });