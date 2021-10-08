import React, {ReactNode} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Affix, Col, Layout, Row, Typography} from 'antd';
import styles from './Layout-styles.module.less';

const {Header, Content} = Layout;
const {Title} = Typography


const PageLayout: React.FC<ReactNode & RouteComponentProps> = ({children, location: {pathname}}) => {

    return (
        <Layout className={styles.layout}>
            <Affix>
                <Header className={styles.header}>
                    <Row justify="space-between" gutter={50}>
                        <Col flex="1 1 auto">
                            <Title>Shop app</Title>
                        </Col>
                    </Row>
                </Header>
            </Affix>
            <Content>{children}</Content>
        </Layout>
    )
}

export default withRouter(PageLayout);

