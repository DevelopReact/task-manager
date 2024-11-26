// react
import { FC } from 'react';
//libs
import ReactPaginate from 'react-paginate';
// styles
import styles from './Pagination.module.scss';

interface PaginationProps {
  pageNumber: number;
  setPageNumber: (prev: number) => void;
  countPages: number;
}

export const Pagination: FC<PaginationProps> = ({
  pageNumber,
  setPageNumber,
  countPages
}) => {
  return (
    <ReactPaginate
      pageCount={countPages}
      className={styles.Pagination}
      previousLabel='Prev'
      nextLabel='Next'
      pageLinkClassName={styles.pageLink}
      previousClassName={styles.prevButton}
      nextClassName={styles.nextButton}
      activeClassName={styles.active}
      disabledClassName={styles.disabled}
      onPageChange={(data) => setPageNumber(data.selected + 1)}
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    />
  );
};
