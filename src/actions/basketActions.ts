import { IProductsResponse } from '../definitions';

enum basketProductsActionsTypes {
    BASKET_PRODUCT_ADDED= 'BASKET_PRODUCT_ADDED',
}

const addProductToBasket = (data: IProductsResponse) => ({
    type: basketProductsActionsTypes.BASKET_PRODUCT_ADDED,
    payload: {
        data,
    },
});


export {
    basketProductsActionsTypes,
    addProductToBasket,
};