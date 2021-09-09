import React, {FunctionComponent} from "react";
import {Button, Col, Divider, Drawer, Image, List, PageHeader, Row, Typography} from 'antd';
import styles from './Basket-styles.module.less'
import {getWindowSize} from "../../utils/layoutUtils";
import {useSelector} from "react-redux";
import {RootState} from "../../reducers/rootReducer";
import {IBasketProduct} from "../../definitions";
import {CloseCircleOutlined, DeleteOutlined, MinusOutlined, PlusOutlined} from '@ant-design/icons';
import {useHistory} from "react-router-dom";


const {Title, Text} = Typography

enum drawerSizes {
    small = '100%',
    middle = '55%',
    large = '33%',
}

interface IBasket {
    basketVisible: boolean
    setBasketVisible: React.Dispatch<React.SetStateAction<boolean>>;

}

const Basket: FunctionComponent<IBasket> = ({basketVisible = false, setBasketVisible}) => {
    const history = useHistory();

    const {selectedProducts, basketProductsFetching} = useSelector((state: RootState) => state.basket);

    const goToProductDetailsViewHandler = (productId: number) => {
        history.push(`/detail/${productId}`);
    }

    return (
        <Drawer placement={"right"} visible={basketVisible} onClose={() => setBasketVisible(false)}
                className={styles.basketDrawer} width={drawerSizes[getWindowSize()]}>
            <PageHeader title={<Title level={3}>Koszyk</Title>}/>
            <Divider className={styles.basketDivider}/>
            {selectedProducts && selectedProducts.length ? (
                <Row className={styles.removeAllProductsContainer}>
                    <Col offset={17} span={7}>
                        <Button className={styles.clearBasket} icon={<CloseCircleOutlined/>}>Wyczyść koszyk</Button>
                    </Col>
                </Row>
            ) : null}
            <List
                loading={basketProductsFetching}
                className={styles.basketList}
                itemLayout={'horizontal'}
                size={'small'}
                dataSource={selectedProducts}
                renderItem={(product: IBasketProduct) => (
                    <List.Item
                        key={product.id}
                        actions={[
                            <Button className={styles.removeProduct} icon={<DeleteOutlined/>}/>
                        ]}

                    >
                        <List.Item.Meta
                            avatar={<Image className={styles.basketProductImage} preview={false} width={120}
                                           height={140}
                                           src={product.pictures[0].medium}/>}
                            title={<span onClick={() => {
                                setBasketVisible(false);
                                goToProductDetailsViewHandler(product.id)
                            }} className={styles.basketProductTitle}>{product.brand}</span>}
                            description={
                                <Row>
                                    <Col span={24}>
                                        <Text>
                                            {product.caption}
                                        </Text>
                                    </Col>
                                    <Col span={24}>
                                        Cena za jedną sztukę: {product.price} zł
                                    </Col>
                                    <Col className={styles.countCol} span={24}>
                                        <Button className={styles.incrementProductCount} icon={<PlusOutlined/>}/>
                                        <Text className={styles.productCount}>{product.count}</Text>
                                        <Button className={styles.decrementProductCount} icon={<MinusOutlined/>}/>
                                    </Col>
                                </Row>
                            }/>
                    </List.Item>
                )}>
            </List>
        </Drawer>
    )
}

export default Basket;