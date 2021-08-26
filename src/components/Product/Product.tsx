import React, {FunctionComponent} from "react";
import {IProduct} from "../../definitions";
import {Button, Card, Col, Descriptions, Image, Row, Typography} from "antd";
import styles from './Product-styles.module.less'
import {PlusOutlined} from '@ant-design/icons';

const {Title} = Typography
const {Item} = Descriptions

interface IProductView {
    product: IProduct
}

const Product: FunctionComponent<IProductView> = ({product}) => {
    return (
        <Card className={styles.productCard}>
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
                <Descriptions>
                    <Item className={styles.productPriceItem}>
                        {product.price} zł
                    </Item>
                </Descriptions>
            </Row>
        </Card>
    )
}

export default Product;