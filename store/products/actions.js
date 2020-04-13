export const GET_PRODUCTS = 'GET_PRODUCTS';
export const productsList = (search = false, searchText = '') => ({
    type: GET_PRODUCTS,
    request: {
        method: 'GET',
        url: search ? `products-search/?search=${searchText}` :'product/',
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
