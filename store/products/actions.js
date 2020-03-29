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
