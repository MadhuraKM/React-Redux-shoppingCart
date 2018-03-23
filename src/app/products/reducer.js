import { ADD_PRODUCT } from "../constants/action-types";
import data from '../data/products.json';

const initialState = data;

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state , action.payload];    
    default:
      return state;
  }
};

export default productReducer;
