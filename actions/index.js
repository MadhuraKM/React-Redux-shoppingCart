export const addProduct = product => ({
    type: "ADD_PRODUCT",
    payload: product
  });

export const addToCart = product => ({
    type: "ADD_TO_CART",
    payload: product
});
  
export const removeFromCart = product => ({
    type: "REMOVE_FROM_CART",
    payload: product
});