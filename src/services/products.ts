import {adminApiClient} from './httpConfig';

const getAllProducts = (PageSize: number, Page: number, ShopNumber = 735) =>
    adminApiClient.get('/Products', {params: {PageSize, Page, ShopNumber}});

const getProductData = (productId: number, shopNumber = 735) =>
    adminApiClient.get(`Products/${productId}`, {params: {shopNumber}})

export {getAllProducts, getProductData};