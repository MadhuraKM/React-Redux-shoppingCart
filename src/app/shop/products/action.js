export const addProduct = products => ({
    type: "FETCH_PRODUCTS",
    payload: products
});

export const itemsHasErrored = bool => ({
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
});
export const itemsIsLoading = bool => ({
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
});
export const itemsFetchDataSuccess = items => ({
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
})