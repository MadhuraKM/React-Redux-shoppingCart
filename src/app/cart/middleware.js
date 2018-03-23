const cartMiddleware = ( store ) => ( next ) => ( action ) => {
    if (action.type === 'ADD_TO_CART') {
        //action.interval = setInterval(() => store.dispatch({ type: 'TICK', currentTime: Date.now() }), 1000);
        var state = store.getState();
        console.log( "ADD_TO_CART currentState", state);
        console.log( "ADD_TO_CART action", action);

        let itemtoAdd = state.products.find((product) => { 
            return product.id == action.itemId; });
        let cartItem = state.cartItems.find((cartItem) => { 
            return cartItem.id == action.itemId;                
        });

        if(cartItem){
            cartItem.quantity = Number(cartItem.quantity) + 1;
            cartItem.amount = Number(cartItem.quantity) * Number(cartItem.price);
            
            action.payload = cartItem;

            //this.props.totalAmount = Number(this.props.totalAmount) + Number(cartItem.price);            
        }else{
            let newobj={};
            newobj.id = itemtoAdd.id;
            newobj.name = itemtoAdd.name;
            newobj.price = itemtoAdd.price;
            newobj.brand = itemtoAdd.brand;
            newobj.weight = itemtoAdd.weight;
            newobj.quantity = 1;
            newobj.amount = Number(newobj.quantity) * Number(newobj.price);

            action.payload = newobj;

           //this.props.totalAmount = Number(this.props.totalAmount) + Number(newobj.price);
        }    

        next(action);

    } else if(action.type === 'REMOVE_FROM_CART'){
        var state = store.getState();
        console.log( "action.itemId ", action.itemId);
        console.log( "REMOVE_FROM_CART currentState", state.cartItems);

        let cartItem = state.cartItems.find((cartItem) => { 
            return cartItem.id == action.itemId;                
        });

        if(cartItem){
            action.payload = cartItem;
            next(action);
        }
    } else if (action.type === 'ADD_PRODUCT') {
        //action.interval = setInterval(() => store.dispatch({ type: 'TICK', currentTime: Date.now() }), 1000);
        var state = store.getState();
        console.log( "ADD_PRODUCT currentState", state);
        console.log( "ADD_PRODUCT ACTION", action);

        next(action);
    }
    
}

export default cartMiddleware;