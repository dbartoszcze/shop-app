import {IProductsStore} from "../definitions";

const initialProductsStore: IProductsStore = {
    products: [],
    totalCount: undefined,
    totalPages: undefined,
    productsFetching: true
};

export { initialProductsStore };