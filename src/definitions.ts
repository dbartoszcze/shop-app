import {ReactText} from 'react';
import {AxiosResponse} from 'axios';

export interface IAction {
    type: string;
    payload?: any;
}

export interface IActionProductFetching {
    type: string;
    payload: {
        data: IProductsResponse;
    };
}

export interface IUseApiCallGetSearch {
    getAllValues?: IGetAllValues;
    pageSize?: number;
    store: any;
    fetchingDispatch: () => void;
    loadedDispatch: (data) => void;
    failureDispatch: () => void;
    completedDispatch: () => void;
    location?: string
}

export type IGetAllValues = (
    PageSize: number,
    Page: number,
    ShopNumber?: number,
    sort?: string,
    desc?: boolean,
    search?: any,
) => Promise<AxiosResponse<any>>;

export interface IProduct {
    availability: string;
    averageRating: number;
    brand: string;
    caption: string;
    category: string;
    dimensional: number;
    eanNumber: string[];
    hasRichContent: boolean;
    id: number;
    navigateUrl: string;
    pictures: IPicture[];
    oldPrice?: number
    price: number;
    pricePerUnit: string;
    promotion: {
        type: string;
    };
    promotionFrom?: string;
    promotionTo?: string;
    rossnetId: ReactText;
    totalReviews: number;
    unit: string;
    vat: number;
}

export interface IProductsResponse {
    products: IProduct[];
    totalCount: number;
    totalPages: number;
}

export interface IBasketProduct extends IProduct {
    count: number;
}

export interface IProductsStore {
    products: IProduct[];
    totalCount: number | undefined;
    totalPages: number | undefined;
    productsFetching: boolean;
}

export interface IBasketStore {
    selectedProducts: IBasketProduct[];
    wasSessionRead: boolean;
}

export interface IPicture {
    id: ReactText;
    large: string;
    medium: string;
    mini: string;
    small: string;
    type: number;
}