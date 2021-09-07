import { combineReducers } from 'redux';

import { productsReducer } from './productsReducer';
import {basketReducer } from './basketReducer'

export const rootReducer = combineReducers({
    allProducts: productsReducer,
    basket: basketReducer
});

export type RootState = ReturnType<typeof rootReducer>