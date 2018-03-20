import { ADD_PRODUCT } from "../core/constants/action-types";
import data from '../core//products.json';

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
