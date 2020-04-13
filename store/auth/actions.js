export const SIGN_OUT = 'SIGN_OUT';

export const signOut = () => ({ type: SIGN_OUT });

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const login = data => ({
    type: AUTH_LOGIN,
    request: {
        method: 'POST',
        url: 'login/',
        data
    }
});

export const AUTH_REGISTER = 'AUTH_REGISTER';
export const register = data => ({
    type: AUTH_REGISTER,
    request: {
        method: 'POST',
        url: 'users/',
        data: {
            user: {...data}
        }
    }
});

export const GET_AUTH_USER = 'GET_AUTH_USER';
export const getAuthUser = () => ({
    type: GET_AUTH_USER,
    request: {
        method: 'GET',
        url: '/users/?pk=me'
    }
});

export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = (data, id) => ({
    type: UPDATE_USER,
    request: {
        method: 'PUT',
        url: `users/?pk=${id}`,
        data: {
            user: data
        }
    }
});
