import {IBasketProduct} from '../definitions';

enum basketProductsActionsTypes {
    BASKET_PRODUCT_ADDED = 'BASKET_PRODUCT_ADDED',
    INCREMENT_PRODUCT_COUNT = 'INCREMENT_PRODUCT_COUNT',
}

const addProductToBasket = (data: IBasketProduct) => ({
    type: basketProductsActionsTypes.BASKET_PRODUCT_ADDED,
    payload: {
        data,
    },
});

const incrementProductCount = (data: number) => ({
    type: basketProductsActionsTypes.INCREMENT_PRODUCT_COUNT,
    payload: {
        data
    }
})


export {
    basketProductsActionsTypes,
    addProductToBasket,
    incrementProductCount
};