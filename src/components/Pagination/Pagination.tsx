import styles from './Pagination.module.css';
import {
  MdFirstPage,
  MdLastPage,
  MdNavigateBefore,
  MdNavigateNext,
} from 'react-icons/md';

const Pagination = ({
  totalPages,
  currentPage,
  nextPageHandler,
  previousPageHandler,
  goToLastPage,
  goToFirstPage,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <button onClick={goToFirstPage} className={styles.jumper}
                disabled={currentPage <= 1}><MdFirstPage/></button>
        <button onClick={previousPageHandler} disabled={currentPage <= 1}
                className={styles.arrow}><MdNavigateBefore/></button>
      </div>
      <p>Page {currentPage} of {totalPages}</p>
      <div className={styles.buttons}>
        <button onClick={nextPageHandler} disabled={currentPage >= totalPages}
                className={styles.arrow}><MdNavigateNext/></button>
        <button onClick={goToLastPage} className={styles.jumper}
                disabled={currentPage >= totalPages}><MdLastPage/></button>
      </div>
    </div>
  );
};

export default Pagination;