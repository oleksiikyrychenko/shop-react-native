import { success, error } from 'redux-saga-requests';
import {
    ADD_TO_FAVORITE,
    FETCH_FAVORITES,
    CLEAR_FAVORITES,
    DELETE_FROM_FAVORITE
} from './actions';
import { STATE_STATUSES } from '../../utils/stateStatuses';

const initialState = {
    favorites: [],
    status: STATE_STATUSES.INIT,
    exception: {
        message: null,
        errors: {}
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FAVORITES:
        case DELETE_FROM_FAVORITE:
        case CLEAR_FAVORITES:
        case ADD_TO_FAVORITE: {
            return processReducer(state);
        }

        case success(ADD_TO_FAVORITE): {
            return {
                ...state,
                status:STATE_STATUSES.SUCCESS,
                favorites: [...state.favorites, action.data.data]
            };
        }

        case success(FETCH_FAVORITES): {
            return {
                ...state,
                status:STATE_STATUSES.SUCCESS,
                favorites: action.data.data
            };
        }

        case success(DELETE_FROM_FAVORITE): {
            const id = action.meta.requestAction.request.id;
            return {
                ...state,
                status:STATE_STATUSES.SUCCESS,
                favorites: state.favorites.filter(item => item.id !== id)
            };
        }

        case success(CLEAR_FAVORITES): {
            return {
                ...state,
                status:STATE_STATUSES.SUCCESS,
                favorites: []
            };
        }

        case error(DELETE_FROM_FAVORITE):
        case error(CLEAR_FAVORITES):
        case error(FETCH_FAVORITES):
        case error(ADD_TO_FAVORITE): {
            return errorReducer(action, state);
        }

        default:
            return state;
    }
};

const processReducer = (state = initialState) => ({
    ...state,
    status: STATE_STATUSES.PENDING,
    exception: { ...initialState.exception }
});

const errorReducer = (exception, state = initialState) => {
    return ({
        ...state,
        status: STATE_STATUSES.ERROR,
        exception: {
            errors: {...exception.error.response.data.errors},
            message: exception.error.response.data.message
        }
    });
};
