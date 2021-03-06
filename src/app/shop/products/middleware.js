import { ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS, ITEMS_HAS_ERRORED } from "../../core/constants/action-types";

function itemsIsLoading( bool ){
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    }
}

function itemsFetchDataSuccess( items ){
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    }
}

function itemsHasErrored( bool ){
    return {
        type: ITEMS_HAS_ERRORED,
        hasErrored: bool
    }
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}