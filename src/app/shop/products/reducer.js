import { FETCH_PRODUCTS, ADD_PRODUCT, ITEMS_HAS_ERRORED, 
  ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS } from "../../core/constants/action-types";
import data from '../../data/products.json';

const initialState = data;

export function  products (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      console.log(" Fetch produc reducer ", action.payload);
      return action.payload;
    case ITEMS_FETCH_DATA_SUCCESS:
      console.log(" ITEMS_FETCH_DATA_SUCCESS ", action.items);
      return action.items;
    case ADD_PRODUCT:
      console.log(" add produc reducer ", action.payload);
      return action.payload; 
    default:
      console.log(" products default reducer ", state)
      return state;
  }
};

//export default productReducer;

export function itemsHasErrored(state = false, action) {
  switch (action.type) {
      case ITEMS_HAS_ERRORED:
          return action.hasErrored;
      default:
          return state;
  }
}
export function itemsIsLoading(state = false, action) {
  switch (action.type) {
      case ITEMS_IS_LOADING:
          return action.isLoading;
      default:
          return state;
  }
}
/*export function items(state = [], action) {
  switch (action.type) {
      case 'ITEMS_FETCH_DATA_SUCCESS':
          return action.items;
      default:
          return state;
  }
}*/
