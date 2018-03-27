export const addToCart = items => ({
    type: "ADD_TO_CART",
    payload: items
});
  
export const removeFromCart = items => ({
    type: "REMOVE_FROM_CART",
    payload: items
});