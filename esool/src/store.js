import { combineReducers } from 'redux';

import { createStore } from 'redux';
import { itemsReducer } from './reducers/items';
import { cartReducer } from './reducers/cart';

const rootReducer = combineReducers({
    items: itemsReducer,
    cart: cartReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState(), 'store updated'));
