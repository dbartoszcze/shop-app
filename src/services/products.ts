import { adminApiClient } from './httpConfig';

const getAllProducts = (PageSize: number, Page: number, ShopNumber = 735) =>
  adminApiClient.get('/Products', { params: { PageSize, Page, ShopNumber } });

export { getAllProducts };