import React, {ReactNode} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Affix, Layout, Row, Typography} from 'antd';
import styles from './Layout-styles.module.less';

const {Header, Content} = Layout;
const {Title} = Typography


const PageLayout: React.FC<ReactNode & RouteComponentProps> = ({children, location: {pathname}}) => {
    return (
        <Layout className={styles.layout}>
            <Layout>
                <Affix>
                    <Header className={styles.header}>
                        <Row justify="space-between" gutter={50}>
                            <Title>Shop app</Title>
                        </Row>
                    </Header>
                </Affix>
                <Content>{children}</Content>
            </Layout>
        </Layout>
    )
}

export default withRouter(PageLayout);

