import React, {FunctionComponent, useCallback, useEffect, useState} from "react";
import {useHistory, useParams} from 'react-router-dom';
import {IProduct} from "../../definitions";
import {getProductData} from '../../services/products';
import styles from './Details-styles.module.less'
import {LeftCircleOutlined} from '@ant-design/icons';

import {Typography} from "antd";

const {Link} = Typography
const Details: FunctionComponent = () => {
    const {productId} = useParams<any>();
    const history = useHistory();

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
    }, [productId]);

    const goToProductListViewHandler = () => {
        history.push(`/`);
    }

    useEffect(() => {
        getProductDetailsData()
    }, [getProductDetailsData])


    return (
        <div className={styles.customContent}>
            <div className={styles.backButtonWrapper}>
                <Link className={styles.backButton} onClick={goToProductListViewHandler}>
                    <LeftCircleOutlined className={styles.backButtonIcon}/> Powrót do listy produktów
                </Link>
            </div>
        </div>
    )
}


export default Details