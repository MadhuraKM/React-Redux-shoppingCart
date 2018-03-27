export function checkItem(cartItems, product){

    let itemsAdded=0;
    cartItems.map((item, i) => {
        if(item.name === product.name){
            itemsAdded = item.quantity;
        }
    });

    return itemsAdded;
}