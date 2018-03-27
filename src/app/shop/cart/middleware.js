import { ADD_TO_CART, REMOVE_FROM_CART } from "../../core/constants/action-types";

function addToCartAction( cartItems ){
    return {
        type: ADD_TO_CART,
        payload: cartItems
    }
}

export function addToCart(itemId) {
    return (dispatch, getState) => {
        var state = getState();
        console.log( "ADD_TO_CART currentState", state);
        //console.log( "ADD_TO_CART action", action);

        let itemtoAdd = state.products.find((product) => { 
            return product.id == itemId; });
        let cartItem = state.cartItems.find((cartItem) => { 
            return cartItem.id == itemId;                
        });

        if(cartItem){

            const updatedItems = state.cartItems.map(item => {
                if(item.id === itemId){

                    item.quantity = Number(item.quantity) + 1;
                    item.amount = Number(item.quantity) * Number(item.price);
                }
                return item
            })

            dispatch(addToCartAction( updatedItems ));           
        }else{
            let newobj={};
            newobj.id = itemtoAdd.id;
            newobj.name = itemtoAdd.name;
            newobj.price = itemtoAdd.price;
            newobj.brand = itemtoAdd.brand;
            newobj.weight = itemtoAdd.weight;
            newobj.quantity = 1;
            newobj.amount = Number(newobj.quantity) * Number(newobj.price);

            dispatch(addToCartAction([...state.cartItems, newobj]));
        }    
    }
}

function removeFromcartAction( cartItems ){
    return {
        type: REMOVE_FROM_CART,
        payload: cartItems
    }
}

export function removeFromCart(itemId){
    return (dispatch, getState) => {
        var state = getState();
        console.log( "action.itemId ", itemId);
        console.log( "REMOVE_FROM_CART currentState", state.cartItems);

        dispatch(removeFromcartAction( state.cartItems.filter(cartItem => cartItem.id !== itemId) ));
    }
}