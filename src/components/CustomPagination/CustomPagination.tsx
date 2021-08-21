import React from 'react';
import { Pagination } from 'antd';
import styles from './CustomPagination-styles.module.less';

interface IPaginationView {
  onChange: (page: number, e?: number | undefined) => void;
  onShowSizeChange: (current: number, size: number) => Promise<void>;
  total: number;
  currentPage: number;
  showSizeChanger?: boolean;
  pageSizeOptions?: string[];
  hideOnSinglePage?: boolean;
  defaultPageSize?: number;
}

const PaginationView = ({
  onChange,
  onShowSizeChange,
  total,
  currentPage,
  showSizeChanger = true,
  defaultPageSize = 10,
  pageSizeOptions = ['10', '20', '50'],
  hideOnSinglePage,
}: IPaginationView) => {
  return (
    <div className={styles.pagination}>
      {total ? (
        <Pagination
          onChange={onChange}
          showSizeChanger={showSizeChanger}
          defaultCurrent={1}
          total={total}
          onShowSizeChange={onShowSizeChange}
          current={currentPage}
          defaultPageSize={defaultPageSize}
          pageSizeOptions={pageSizeOptions}
          hideOnSinglePage={hideOnSinglePage}
          locale={'pl_PL'}
        />
      ) : null}
    </div>
  );
};


export default PaginationView;
