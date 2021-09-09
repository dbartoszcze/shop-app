import {IBasketProduct} from '../definitions';

enum basketProductsActionsTypes {
    BASKET_PRODUCT_ADDED = 'BASKET_PRODUCT_ADDED',
    INCREMENT_PRODUCT_COUNT = 'INCREMENT_PRODUCT_COUNT',
    DECREMENT_PRODUCT_COUNT = 'DECREMENT_PRODUCT_COUNT',
    REMOVE_PRODUCT_FROM_BASKET = 'REMOVE_PRODUCT_FROM_BASKET'

}

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
    removeProductFromBasket
};