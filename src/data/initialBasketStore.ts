import {IBasketStore} from "../definitions";

const initialBasketStore: IBasketStore = {
    selectedProducts: [],
    wasSessionRead: false,
    basketProductsFetching: false
};

export { initialBasketStore };