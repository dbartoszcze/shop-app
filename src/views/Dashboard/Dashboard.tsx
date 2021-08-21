import React, { FunctionComponent } from 'react';
import styles from './Dashbord-styles.module.less';
import { useApiCallGetSearch } from '../../hooks/useApiCallGetSearch';
import { getAllProducts } from '../../services/products';
import store from '../../store/store';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import { CustomPagination } from '../../components/CustomPagination';
import { IProduct } from '../../definitions';
import { productsFetchingCompleted, productsFetchingFailure, productsLoaded , productsListFetching} from '../../actions/productsActions';
import {RouteComponentProps} from "react-router-dom";

const Dashboard: FunctionComponent<RouteComponentProps> = () => {
  const { products, productsFetching, totalCount } = useSelector((state: RootState) => state.allProducts);
  const { actualPage, pageChanged, sizeChanged, itemsPerPage } = useApiCallGetSearch<IProduct>({
    getAllValues: getAllProducts,
    store,
    fetchingDispatch: productsListFetching,
    loadedDispatch: productsLoaded,
    failureDispatch: productsFetchingFailure,
    completedDispatch: productsFetchingCompleted,
  });

  return (
    <div>
      {!productsFetching ? (
        <>
          {products && products.map((product: IProduct) => <div key={product.id}>{product.caption}</div>)}
          <CustomPagination
            defaultPageSize={itemsPerPage}
            total={totalCount}
            currentPage={actualPage}
            onChange={pageChanged}
            onShowSizeChange={sizeChanged}
          />
        </>
      ) : (
        <>{'loading'}</>
      )}
    </div>
  );
};

export default Dashboard;