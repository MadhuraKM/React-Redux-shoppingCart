import { ADD_TO_CART, REMOVE_FROM_CART } from "../../core/constants/action-types";

const initialState = JSON.parse(localStorage.getItem('cartItems')) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TO_CART:            
      console.log( "Add to cart reducer", action.payload );
      return action.payload;
      
    case REMOVE_FROM_CART:
        console.log( "Removed from cart reducer", action.payload );
        return action.payload;

    default:
      console.log( "Default cart reducer" );
      return state;
  }
};

export default cartReducer;