import styles from './NewsByFilters.module.css';
import {
  FILTERS_PAGE_SIZE,
  MAIN_PAGE_SIZE,
  TOTAL_PAGES,
} from '../../constants/constants.js';
import NewsList from '../NewsList/NewsList.jsx';
import NewsFilters from '../NewsFilters/NewsFilters.jsx';
import {useFilters} from '../../hooks/useFilters.js';
import {useDebounce} from '../../hooks/useDebounce.js';
import {useFetch} from '../../hooks/useFetch.js';
import {getNews} from '../../api/newsAPI.js';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper.jsx';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';

const NewsByFilters = () => {
  const {filters, changeFilter} = useFilters({
    page_number: 1,
    page_size: MAIN_PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debouncedKeywords = useDebounce(filters.keywords, 750);

  const {data: dataFilteredNews, loading, error} = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
    page_size: FILTERS_PAGE_SIZE,
  });

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
      <SectionHeading title="News by Filters"/>

      <NewsFilters filters={filters} changeFilter={changeFilter}/>

      <PaginationWrapper bottom currentPage={filters.page_number}
                         previousPageHandler={previousPageHandler}
                         nextPageHandler={nextPageHandler}
                         goToFirstPage={goToFirstPageHandler}
                         goToLastPage={goToLastPageHandler}
                         totalPages={TOTAL_PAGES}>
        <NewsList news={dataFilteredNews?.news} filters={filters}
                  changeFilter={changeFilter} loading={loading}/>
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;