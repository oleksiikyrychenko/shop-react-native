export const GET_PRODUCTS = 'GET_PRODUCTS';
export const productsList = () => ({
    type: GET_PRODUCTS,
    request: {
        method: 'GET',
        url: 'product/',
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
