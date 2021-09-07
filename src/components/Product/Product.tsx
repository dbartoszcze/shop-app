import React, {FunctionComponent} from "react";
import {IProduct} from "../../definitions";
import {Button, Card, Col, Descriptions, Image, Row, Typography} from "antd";
import styles from './Product-styles.module.less'
import {PlusOutlined} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const {Title, Text} = Typography
const {Item} = Descriptions

interface IProductView {
    product: IProduct
}

const Product: FunctionComponent<IProductView> = ({product}) => {
    const history = useHistory();

    const goToProductDetailsViewHandler = (productId: number) => {
        history.push(`/detail/${productId}`);
    }

    return (
        <Card onClick={() => goToProductDetailsViewHandler(product.id)} className={styles.productCard}>
            <Row justify={'center'} className={styles.productImageContainer}>
                <Button className={styles.addProductIconBtn} icon={<PlusOutlined/>}>
                    {/*<Button className={styles.selectedProductIconBtn} icon={<CheckOutlined/>}>*/}

                </Button>
                <Col span={24} className={styles.productImageCol}>
                    <Image alt={`${product.brand} - ${product.caption}`} height={200} className={styles.productImage}
                           src={product.pictures[0].small}
                           preview={false}/>
                </Col>
            </Row>
            <Row className={styles.productBrand}>
                <Title level={5}>
                    {product.brand}
                </Title>
            </Row>
            <Row className={styles.productCaption}>
                <Descriptions>
                    <Item>
                        {product.caption}
                    </Item>
                </Descriptions>
            </Row>
            <Row className={styles.productPriceDescription}>
                <Col span={24}>
                    {product?.oldPrice && (
                        <Text className={styles.productOldPriceItem}>
                            {product.oldPrice} zł
                        </Text>
                    )}
                    <Text className={!product?.oldPrice ? styles.productPriceItem : styles.productPricePromItem}>
                        {product.price} zł
                    </Text>
                </Col>
            </Row>
        </Card>
    )
}

export default Product;