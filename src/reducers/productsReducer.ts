import { initialProductsStore } from '../data/initialProductsStore';
import { productsActionsTypes } from '../actions/productsActions';
import { IAction, IActionProductFetching } from '../definitions';

export const productsReducer = (state = initialProductsStore, action: IAction | IActionProductFetching) => {
  switch (action.type) {
    case productsActionsTypes.PRODUCTS_FETCHING: {
      return { ...state, productsFetching: true };
    }

    case productsActionsTypes.PRODUCTS_LOADED: {
      return { ...state, ...action.payload.data };
    }

    case productsActionsTypes.PRODUCTS_FETCHING_FAILURE: {
      return { ...state };
    }

    case productsActionsTypes.PRODUCTS_FETCHING_COMPLETED: {
      return { ...state, productsFetching: false };
    }
    default:
      console.warn(`Brak akcji: ${action.type}`);
      return state;
  }
};