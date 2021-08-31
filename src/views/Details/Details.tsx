import React, {FunctionComponent, useCallback, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {IProduct} from "../../definitions";
import {getProductData} from '../../services/products';

const Details: FunctionComponent = () => {
    const {productId} = useParams<any>();
    const [isProductDataFetching, setIsProductDataFetching] = useState<boolean>(true);
    const [productData, setProductData] = useState<IProduct | undefined>(undefined);
    const getProductDetailsData = useCallback(async () => {
        setIsProductDataFetching(true);

        try {
            const response = await getProductData(productId)
            if (response.status === 200) {
                setProductData(response?.data?.data);
            }
        } catch {
            setProductData(undefined);
        } finally {
            setIsProductDataFetching(false);
        }
    }, [productId])

    useEffect(() => {
        getProductDetailsData()
    }, [getProductDetailsData])


    return (<>details</>)
}


export default Details