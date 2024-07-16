import styles from './Pagination.module.css';
import {MdNavigateBefore, MdNavigateNext} from 'react-icons/md';

const Pagination = ({
  totalPages,
  currentPage,
  nextPageHandler,
  previousPageHandler,
  moveToPageHandler,
}) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={previousPageHandler}
              className={styles.arrow}><MdNavigateBefore/></button>
      <div className={styles.btn_list}>
        {[...Array(totalPages)].map((_, i) => {
          return <button onClick={() => moveToPageHandler(i + 1)} key={i}
                         className={styles.btn}>{i + 1}</button>;
        })}
      </div>
      <button onClick={nextPageHandler}
              className={styles.arrow}><MdNavigateNext/></button>
    </div>
  );
};

export default Pagination;