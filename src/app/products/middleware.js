const productMiddleware = ( store ) => ( next ) => ( action ) => {
    if (action.type === 'ADD_PRODUCT') {
        var state = store.getState();
        console.log( "ADD_PRODUCT currentState", state);
        console.log( "ADD_PRODUCT ACTION", action);
    }
    next(action);
}

export default productMiddleware;