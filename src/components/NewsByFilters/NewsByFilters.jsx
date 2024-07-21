import styles from './NewsByFilters.module.css';
import Pagination from '../Pagination/Pagination.jsx';
import {TOTAL_PAGES} from '../../constants/constants.js';
import NewsList from '../NewsList/NewsList.jsx';
import NewsFilters from '../NewsFilters/NewsFilters.jsx';

const NewsByFilters = ({filters, changeFilter, loading, news}) => {
  const nextPageHandler = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number + 1);
    }
  };

  const previousPageHandler = () => {
    if (filters.page_number > 1) {
      changeFilter('page_number', filters.page_number - 1);
    }
  };

  const goToFirstPageHandler = () => {
    changeFilter('page_number', 1);
  };

  const goToLastPageHandler = () => {
    changeFilter('page_number', TOTAL_PAGES);
  };

  return (
    <section className={styles.wrapper}>
      <NewsFilters filters={filters} changeFilter={changeFilter}/>

      <NewsList loading={loading} news={news}/>

      <Pagination currentPage={filters.page_number}
                  previousPageHandler={previousPageHandler}
                  nextPageHandler={nextPageHandler}
                  goToFirstPage={goToFirstPageHandler}
                  goToLastPage={goToLastPageHandler}
                  totalPages={TOTAL_PAGES}/>
    </section>
  );
};

export default NewsByFilters;