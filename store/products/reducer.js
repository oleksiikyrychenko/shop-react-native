import { success, error } from 'redux-saga-requests';
import {
    GET_PRODUCTS,
    GET_PRODUCT
} from './actions';
import { STATE_STATUSES } from '../../utils/stateStatuses';

const initialState = {
    items: [],
    item: {},
    status: STATE_STATUSES.INIT,
    exception: {
        message: null,
        errors: {}
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
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

        case success(GET_PRODUCT): {
            return {
                ...state,
                status:STATE_STATUSES.SUCCESS,
                item: action.data.data
            };
        }

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
