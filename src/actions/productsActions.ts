import { IProductsResponse } from '../definitions';

enum productsActionsTypes {
  PRODUCTS_FETCHING = 'PRODUCTS_LIST_FETCHING',
  PRODUCTS_LOADED = 'PRODUCTS_LOADED',
  PRODUCTS_FETCHING_FAILURE = 'PRODUCTS_FETCHING_FAILURE',
  PRODUCTS_FETCHING_COMPLETED = 'PRODUCTS_FETCHING_COMPLETED',
}

const productsListFetching = () => ({
  type: productsActionsTypes.PRODUCTS_FETCHING,
});

const productsLoaded = (data: IProductsResponse) => ({
  type: productsActionsTypes.PRODUCTS_LOADED,
  payload: {
    data,
  },
});

const productsFetchingFailure = () => ({
  type: productsActionsTypes.PRODUCTS_FETCHING_FAILURE,
});

const productsFetchingCompleted = () => ({
  type: productsActionsTypes.PRODUCTS_FETCHING_COMPLETED,
});

export {
  productsActionsTypes,
  productsListFetching,
  productsFetchingCompleted,
  productsFetchingFailure,
  productsLoaded,
};