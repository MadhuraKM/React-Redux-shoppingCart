import { ADD_PRODUCT } from "../core/constants/action-types";

function addProductAction( products ){
    return {
        type: ADD_PRODUCT,
        payload: products
    }
}

export function addProduct(product){
    return (dispatch, getState) => {
        var state = getState();

        dispatch(addProductAction( [...state.products, product] ));
    }
}