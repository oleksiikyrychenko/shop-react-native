import { success, error } from 'redux-saga-requests';
import {
    GET_PRODUCTS,
    GET_PRODUCT,
    GET_CATEGORIES,
    CREATE_PRODUCT,
    SEARCH_PRODUCTS,
    SET_PAGINATION
} from './actions';
import { STATE_STATUSES } from 'utils/stateStatuses';

export const initialState = {
    items: [],
    foundItems: [],
    item: {},
    categories: [],
    status: STATE_STATUSES.INIT,
    exception: {
        message: null,
        errors: {}
    },
    pagination: {
        limit: 10,
        page: 1,
        hasMore: true,
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PRODUCTS:
        case GET_CATEGORIES:
        case CREATE_PRODUCT:
        case GET_PRODUCT:
        case GET_PRODUCTS: {
            return processReducer(state);
        }

        case success(GET_PRODUCTS): {
            return {
                ...state,
                status:STATE_STATUSES.SUCCESS,
                items: action.data.data
            };
        }

        case success(SEARCH_PRODUCTS): {
            return {
                ...state,
                status:STATE_STATUSES.SUCCESS,
                foundItems: action.data
            };
        }

        case success(GET_PRODUCT): {
            return {
                ...state,
                status:STATE_STATUSES.SUCCESS,
                item: [...state.items, action.data.data.results],
                pagination: {
                    ...state.pagination,
                    hasMore: !!action.data.data.next
                }
            };
        }

        case success(GET_CATEGORIES): {
            return {
                ...state,
                status:STATE_STATUSES.SUCCESS,
                categories: action.data.data
            };
        }

        case success(CREATE_PRODUCT): {
            return {
                ...state,
                status:STATE_STATUSES.SUCCESS,
            };
        }

        case SET_PAGINATION: {
            return {...state, pagination: action.payload.data};
        }

        case error(SEARCH_PRODUCTS):
        case error(GET_CATEGORIES):
        case error(CREATE_PRODUCT):
        case error(GET_PRODUCT):
        case error(GET_PRODUCTS): {
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
