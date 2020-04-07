export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const addToFavorite = data => ({
    type: ADD_TO_FAVORITE,
    request: {
        method: 'POST',
        url: 'favorites/',
        data
    }
});

export const DELETE_FROM_FAVORITE = 'DELETE_FROM_FAVORITE';
export const deleteFromFavorite = id => ({
    type: DELETE_FROM_FAVORITE,
    request: {
        method: 'DELETE',
        url: `favorites/?pk=${id}`,
        id
    }
});

export const FETCH_FAVORITES = 'FETCH_FAVORITES';
export const fetchFavorites = (userId) => ({
    type: FETCH_FAVORITES,
    request: {
        method: 'GET',
        url: `favorites/?user_id=${userId}`
    }
});

export const CLEAR_FAVORITES = 'CLEAR_FAVORITES';
export const clearFavorites = () => ({
    type: CLEAR_FAVORITES,
});
