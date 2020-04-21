import {initialState} from './reducer';
import {makeQueryString} from 'utils/helpers';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const productsList = (search = false, searchText = '') => (dispatch, getState) => {
    const currentState = getState();
    const productsState = currentState.items ? currentState.items : initialState;
    const paginationString = makeQueryString(productsState.pagination);

    let queryParts = [];
    queryParts.push(paginationString);

    return dispatch({
        type: GET_PRODUCTS,
        request: {
            method: 'GET',
            url: search ? `products-search/?search=${searchText}` :'product/',
        }
    });
};

export const SET_PAGINATION = 'SET_PAGINATION';
export const setPagination = data => ({
    type: SET_PAGINATION,
    payload: {
        data
    }
});

export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const searchProducts = (searchText = '') => ({
    type: SEARCH_PRODUCTS,
    request: {
        method: 'GET',
        url: `products-search/?search=${searchText}`,
    }
});

export const GET_PRODUCT = 'GET_PRODUCT';
export const getProduct = (id) => ({
    type: GET_PRODUCT,
    request: {
        method: 'GET',
        url: `product?pk=${id}`,
    }
});

export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const createProduct = (data) => ({
    type: CREATE_PRODUCT,
    request: {
        method: 'POST',
        url: 'product/',
        data
    }
});

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const getCategories = (id = null) => ({
    type: GET_CATEGORIES,
    request: {
        method: 'GET',
        url: id ? `category/?pk=${id}` : 'category/',
    }
});
