import { ITEMS_ADD_ITEMS, ITEMS_GET_ITEMS, ITEMS_GET_QUANTITY } from './constants';

const initialState = {
    name: 'bottles',
    items: [{ name: 'item1', quantity: 3 }],
};

export function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case ITEMS_GET_ITEMS:
            return state.items;
        case ITEMS_ADD_ITEMS:
            return [...state.items, ...action.payload];
        case ITEMS_GET_QUANTITY:
            return [state.items.length];
        default:
            return state;
    }
}
