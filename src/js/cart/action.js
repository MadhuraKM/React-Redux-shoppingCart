export const addToCart = itemId => ({
    type: "ADD_TO_CART",
    payload: undefined,
    itemId
});
  
export const removeFromCart = itemId => ({
    type: "REMOVE_FROM_CART",
    payload: undefined,
    itemId
});