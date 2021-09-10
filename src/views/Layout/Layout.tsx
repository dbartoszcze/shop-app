import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Affix, Badge, Col, Layout, Row, Typography} from 'antd';
import {shallowEqual, useSelector} from "react-redux";
import {RootState} from "../../reducers/rootReducer";
import styles from './Layout-styles.module.less';
import Basket from "../Basket/Basket";
import {ShoppingOutlined} from "@ant-design/icons";
import store from "../../store/store";
import {initBasketFromSessionData, toggleSessionRead} from '../../actions/basketActions';

const {Header, Content} = Layout;
const {Title} = Typography


const PageLayout: React.FC<ReactNode & RouteComponentProps> = ({children, location: {pathname}}) => {


    const [basketVisible, setBasketVisible] = useState<boolean>(false);
    const {wasSessionRead, selectedProducts} = useSelector((state: RootState) => state.basket)
    const productsIntoBasketCount = useSelector((state: RootState) => state.basket.selectedProducts.length, shallowEqual);

    const initBasket = useCallback(() => {
        if (wasSessionRead) {
            sessionStorage.setItem('basketProducts', JSON.stringify(selectedProducts));
        } else {
            const basketProducts = sessionStorage.getItem('basketProducts');
            if (basketProducts) {
                const parsedBasketProducts = JSON.parse(basketProducts);
                if (parsedBasketProducts.length) {
                    //todo - by fetching on saved ids with count
                    store.dispatch(initBasketFromSessionData(parsedBasketProducts))
                } else {
                    store.dispatch(toggleSessionRead());
                }
            } else {
                store.dispatch(toggleSessionRead())
            }
        }
    }, [wasSessionRead, selectedProducts])

    useEffect(() => {
        initBasket()
    }, [initBasket])


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

