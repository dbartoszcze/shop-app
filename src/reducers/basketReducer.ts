import {IAction, IActionProductFetching} from '../definitions';
import {initialBasketStore} from "../data/initialBasketStore";
import {basketProductsActionsTypes} from '../actions/basketActions';

export const basketReducer = (state = initialBasketStore, action: IAction | IActionProductFetching) => {
    switch (action.type) {
        case basketProductsActionsTypes.BASKET_PRODUCT_ADDED:
            return {
                ...state,
                selectedProducts: [...state.selectedProducts, action.payload.data]
            }
        default:
            console.warn(`Brak akcji: ${action.type}`);
            return state;
    }
};