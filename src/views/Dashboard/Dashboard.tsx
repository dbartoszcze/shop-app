import React, {FunctionComponent} from 'react';
import {useApiCallGetSearch} from '../../hooks/useApiCallGetSearch';
import {getAllProducts} from '../../services/products';
import store from '../../store/store';
import {useSelector} from 'react-redux';
import {RootState} from '../../reducers/rootReducer';
import {CustomPagination} from '../../components/CustomPagination';
import {IProduct} from '../../definitions';
import {
    productsFetchingCompleted,
    productsFetchingFailure,
    productsListFetching,
    productsLoaded,
} from '../../actions/productsActions';
import {RouteComponentProps} from 'react-router-dom';
import styles from './Dashbord-styles.module.less'
import {Card, Col, Row, Skeleton} from "antd";
import Product from "../../components/Product/Product";

const Dashboard: FunctionComponent<RouteComponentProps> = ({history}) => {
    const {products, productsFetching, totalCount} = useSelector((state: RootState) => state.allProducts);
    const {actualPage, pageChanged, sizeChanged, itemsPerPage} = useApiCallGetSearch({
        getAllValues: getAllProducts,
        store,
        fetchingDispatch: productsListFetching,
        loadedDispatch: productsLoaded,
        failureDispatch: productsFetchingFailure,
        completedDispatch: productsFetchingCompleted,
    });

    return (
        <div className={styles.customContent}>
            <Skeleton loading={productsFetching}>
                <Card className={styles.productsCard}>
                    <Row gutter={[24, 24]}>
                        {products && products.map((product: IProduct) => (
                            <Col key={product.id} xl={6} lg={8} md={12} sm={12} xs={24}>
                                <Product product={product}/>
                            </Col>
                        ))}
                    </Row>
                </Card>
                <CustomPagination
                    defaultPageSize={itemsPerPage}
                    total={totalCount}
                    currentPage={actualPage}
                    onChange={pageChanged}
                    onShowSizeChange={sizeChanged}
                />
            </Skeleton>
        </div>
    );
};

export default Dashboard;