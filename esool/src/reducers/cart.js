import {CART_ADD_ITEMS, CART_GET_ALL} from './constants';

const initialState = {
    items = []
};

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case CART_GET_ALL:
            return state.items
        case CART_ADD_ITEMS:
            return [...state.items, ...action.payload]
        default:
            return state;
    }
}
