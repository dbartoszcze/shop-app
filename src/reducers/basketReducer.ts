import {IAction, IActionProductFetching} from '../definitions';
import {initialBasketStore} from "../data/initialBasketStore";
import {basketProductsActionsTypes} from '../actions/basketActions';

export const basketReducer = (state = initialBasketStore, action: IAction | IActionProductFetching) => {
    switch (action.type) {
        case basketProductsActionsTypes.TOGGLE_SESSION_READ:
            return {
                ...state,
                wasSessionRead: true
            }
        case basketProductsActionsTypes.INIT_BASKET_FROM_SESSION_DATA:
            return {
                ...state,
                selectedProducts: [...action.payload.data],
                wasSessionRead: true
            }
        case basketProductsActionsTypes.BASKET_PRODUCT_ADDED:
            return {
                ...state,
                selectedProducts: [...state.selectedProducts, action.payload.data]
            }
        case basketProductsActionsTypes.INCREMENT_PRODUCT_COUNT:
            return {
                ...state,
                ...state.selectedProducts.map(product => {
                    if (product.id !== action.payload.id) return product;
                    return {...product, count: product.count++}
                })
            }
        case basketProductsActionsTypes.DECREMENT_PRODUCT_COUNT:
            return {
                ...state,
                ...state.selectedProducts.map(product => {
                    if (product.id !== action.payload.id) return product;
                    return {...product, count: product.count--}
                })
            }
        case basketProductsActionsTypes.REMOVE_PRODUCT_FROM_BASKET:
            return {
                ...state,
                selectedProducts: state.selectedProducts.filter(product => product.id !== action.payload.id)
            }
        default:
            console.warn(`Brak akcji: ${action.type}`);
            return state;
    }
};