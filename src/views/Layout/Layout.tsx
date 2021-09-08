import React, {ReactNode, useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Affix, Badge, Col, Layout, Row, Typography} from 'antd';
import styles from './Layout-styles.module.less';
import Basket from "../Basket/Basket";
import {ShoppingOutlined} from "@ant-design/icons";

const {Header, Content} = Layout;
const {Title, Text} = Typography


const PageLayout: React.FC<ReactNode & RouteComponentProps> = ({children, location: {pathname}}) => {


    const [basketVisible, setBasketVisible] = useState<boolean>(true);

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
                                    <Badge size={"small"} count={5} overflowCount={9}>
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

