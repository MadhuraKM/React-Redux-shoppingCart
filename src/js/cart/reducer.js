import { ADD_TO_CART, REMOVE_FROM_CART } from "../core/constants/action-types";

const initialState = JSON.parse(localStorage.getItem('cartItems')) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TO_CART:            
      let cartItem = state.find((cartItem) => { 
          return cartItem.id == action.payload.id;                
      });      
      if(cartItem){
        const updatedItems = state.map(item => {
          if(item.id === action.payload.id){
            //return [ ...item, ...action.payload ]
            return action.payload
          }
          return item
        })
        return updatedItems;
      }else{

          return [...state, action.payload];
      }
      
    case REMOVE_FROM_CART:
        const deletedCartItem = action.payload;
        return state.filter(cartItem => cartItem.id !== deletedCartItem.id);

    default:
      return state;
  }
};

export default cartReducer;