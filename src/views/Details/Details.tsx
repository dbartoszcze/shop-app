import React, {FunctionComponent, useCallback, useEffect, useState} from "react";
import {useHistory, useParams} from 'react-router-dom';
import {IProduct} from "../../definitions";
import {getProductData} from '../../services/products';
import styles from './Details-styles.module.less'
import {LeftCircleOutlined, ShoppingOutlined} from '@ant-design/icons';
import moment from "moment";
import {Button, Card, Col, Descriptions, Image, Row, Skeleton, Typography} from "antd";

const {Link, Title, Text, Paragraph} = Typography

const {Item} = Descriptions
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
            <Skeleton loading={isProductDataFetching}>
                <Card className={styles.detailCard}>
                    <Row>
                        <Col xl={10} lg={24} md={24} sm={24}>
                            <Row justify={'center'} className={styles.productImageContainer}>
                                <Col className={styles.productImageCol}>
                                    <Image alt={`${productData?.brand} - ${productData?.caption}`}
                                           className={styles.productImage}
                                           src={productData?.pictures[0].medium}
                                           preview={false}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={14} lg={24} md={24} sm={24} className={styles.productDescSide}>
                            <Row>
                                <Col span={24}>
                                    <Title level={2}>{productData?.brand}</Title>
                                    <Descriptions column={1}>
                                        <Item>{productData?.caption}</Item>
                                        <Item>{productData?.unit}, <span
                                            className={styles.smallDesc}> nr kat. {productData?.rossnetId}</span></Item>
                                    </Descriptions>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    {productData?.oldPrice && (
                                        <Title className={styles.oldPriceTitle}
                                               level={5}>{productData?.oldPrice} zł</Title>
                                    )}
                                    <Title
                                        className={productData?.oldPrice ? styles.occasionPriceTitle : styles.mainPriceTitle}
                                        level={2}>{productData?.price} zł</Title>
                                    <Text
                                        className={styles.pricePerUnitDesc}>{productData?.pricePerUnit}</Text>
                                </Col>
                                <Col span={12} className={styles.actionBtnsContainer}>
                                            <Button icon={<ShoppingOutlined/>} className={styles.addProductBtn}>Dodaj do
                                                koszyka </Button>
                                </Col>
                                {productData?.promotionFrom && productData?.promotionTo && (
                                    <Paragraph className={styles.promotionDesc}>Promocja trwa
                                        od {moment(productData?.promotionFrom).format('DD.MM.YYYY')} do {moment(productData?.promotionTo).format('DD.MM.YYYY')} lub
                                        do wyczerpania
                                        zapasów. Promocja dotyczy wybranych artykułów z linii i obowiązuje w
                                        wybranych drogeriach Rossmann. Pełna lista sklepów jest dostępna na
                                        stronie
                                        www.rossmann.pl/drogerie</Paragraph>
                                )}
                            </Row>

                        </Col>
                    </Row>
                </Card>
            </Skeleton>
        </div>
    )
}


export default Details