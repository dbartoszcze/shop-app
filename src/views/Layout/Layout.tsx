import React, {ReactNode, useEffect, useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Affix, Badge, Col, Layout, Row, Typography} from 'antd';
import {useSelector} from "react-redux";
import {RootState} from "../../reducers/rootReducer";
import styles from './Layout-styles.module.less';
import Basket from "../Basket/Basket";
import {ShoppingOutlined} from "@ant-design/icons";

const {Header, Content} = Layout;
const {Title} = Typography


const PageLayout: React.FC<ReactNode & RouteComponentProps> = ({children, location: {pathname}}) => {


    const [basketVisible, setBasketVisible] = useState<boolean>(false);
    const {wasSessionRead} = useSelector((state: RootState) => state.basket)
    const productsIntoBasketCount = useSelector((state: RootState) => state.basket.selectedProducts.length);
    const productsListToStorage = useSelector((state: RootState) => state.basket.selectedProducts.map(product => ({
        id: product.id,
        count: product.count
    })))

    useEffect(() => {
        if (wasSessionRead) {
            sessionStorage.setItem('basketProducts', JSON.stringify(productsListToStorage));
        } else {
            const basketProductsIds = sessionStorage.getItem('basketProducts');
            if (basketProductsIds) {
                const parsedProductsIds = JSON.parse(basketProductsIds);
                if (parsedProductsIds.length) {
                    //init basket by api call with produducts ids
                } else {
                    //change is session read on true
                }
            }
        }
    }, [wasSessionRead, productsListToStorage])


    return (
        <Layout className={styles.layout}>
            <Basket
                basketVisible={basketVisible}
                setBasketVisible={setBasketVisible}
            />
            <Affix>
                <Header className={styles.header}>
                    <Row justify="space-between" gutter={50}>
                        <Col flex="1 1 auto">
                            <Title>Shop app</Title>
                        </Col>
                        <Col flex="0 1 auto">
                            <Row className={styles.basketIconContainer} gutter={10}
                                 onClick={() => setBasketVisible(true)}>
                                <Col>
                                    <Badge size={"small"} count={productsIntoBasketCount} overflowCount={9}>
                                        <ShoppingOutlined className={styles.basketIcon}/>
                                    </Badge>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Header>
            </Affix>
            <Content>{children}</Content>
        </Layout>
    )
}

export default withRouter(PageLayout);

