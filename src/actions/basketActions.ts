import {IBasketProduct} from '../definitions';

enum basketProductsActionsTypes {
    BASKET_PRODUCT_ADDED = 'BASKET_PRODUCT_ADDED',
    INCREMENT_PRODUCT_COUNT = 'INCREMENT_PRODUCT_COUNT',
    DECREMENT_PRODUCT_COUNT = 'DECREMENT_PRODUCT_COUNT',
    REMOVE_PRODUCT_FROM_BASKET = 'REMOVE_PRODUCT_FROM_BASKET',
    INIT_BASKET_FROM_SESSION_DATA = 'INIT_BASKET_FROM_SESSION_DATA',
    TOGGLE_SESSION_READ = 'TOGGLE_SESSION_READ'
}

const initBasketFromSessionData = (data: IBasketProduct) => ({
    type: basketProductsActionsTypes.INIT_BASKET_FROM_SESSION_DATA,
    payload: {
        data,
    },
})

const toggleSessionRead = () => ({
    type: basketProductsActionsTypes.TOGGLE_SESSION_READ
})

const addProductToBasket = (data: IBasketProduct) => ({
    type: basketProductsActionsTypes.BASKET_PRODUCT_ADDED,
    payload: {
        data,
    },
});

const incrementProductCount = (id: number) => ({
    type: basketProductsActionsTypes.INCREMENT_PRODUCT_COUNT,
    payload: {
        id
    }
})

const decrementProductCount = (id: number) => ({
    type: basketProductsActionsTypes.DECREMENT_PRODUCT_COUNT,
    payload: {
        id
    }
})

const removeProductFromBasket = (id: number) => ({
    type: basketProductsActionsTypes.REMOVE_PRODUCT_FROM_BASKET,
    payload: {
        id
    }
})


export {
    basketProductsActionsTypes,
    addProductToBasket,
    incrementProductCount,
    decrementProductCount,
    removeProductFromBasket,
    initBasketFromSessionData,
    toggleSessionRead
};