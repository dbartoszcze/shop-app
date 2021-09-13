import React, {FunctionComponent, useEffect, useState} from "react";
import {Col, Row, Typography} from 'antd';
import styles from './BasketSummary-styles.module.less';
import {IBasketProduct} from "../../definitions";

const {Text} = Typography

interface IBasketSummary {
    basketProductsList: IBasketProduct[]
}

const SummaryRow: FunctionComponent<{ label: string, value: number, className: string }> = ({
                                                                                                label,
                                                                                                value,
                                                                                                className
                                                                                            }) => {
    return (
        <Row className={styles[className]}>
            <Text className={styles.labelText}>{label}</Text>
            <Text className={styles.valueText}>{value.toFixed(2)} zł</Text>
        </Row>
    )
}

const BasketSummary: FunctionComponent<IBasketSummary> = ({basketProductsList}) => {

    const [generalPrice, setGeneralPrice] = useState<number>(0);
    const [sellPrice, setSellPrice] = useState<number>(0);

    useEffect(() => {
            if (basketProductsList.length) {
                let generalPriceTmp = 0;
                let sellPriceTmp = 0;
                basketProductsList.forEach(product => {
                    generalPriceTmp += (product.oldPrice || product.price) * product.count;
                    sellPriceTmp += product.price * product.count;
                })
                setGeneralPrice(generalPriceTmp);
                setSellPrice(sellPriceTmp);
            }
        },
        [basketProductsList])

    return (
        <Row className={styles.basketSummary}>
            <Col span={24}>
                <SummaryRow className={'generalPrice'} label={'Cena produktów'} value={generalPrice}/>
            </Col>
            {generalPrice !== sellPrice && (
                <Col span={24}>
                    <SummaryRow className={'diffPrices'} label={'Suma rabatów'} value={generalPrice - sellPrice}/>
                </Col>
            )}
            <Col span={24}>
                <SummaryRow className={'sellPrice'} label={'Do zapłaty'} value={sellPrice}/>
            </Col>
        </Row>
    )
}

export default BasketSummary;