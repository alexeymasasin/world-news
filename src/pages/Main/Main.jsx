import styles from './Main.module.css';
import MainBanner from '../../components/MainBanner/MainBanner.jsx';
import {getCategories, getNews} from '../../api/newsAPI.js';
import NewsList from '../../components/NewsList/NewsList.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import CategoriesSlider
  from '../../components/CetegoriesSlider/CategoriesSlider.jsx';
import Search from '../../components/Search/Search.jsx';
import {useDebounce} from '../../hooks/useDebounce.js';
import {PAGE_SIZE, TOTAL_PAGES} from '../../constants/constants.js';
import {useFetch} from '../../hooks/useFetch.js';
import {useFilters} from '../../hooks/useFilters.js';

const Main = () => {
  const {filters, changeFilter} = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debouncedKeywords = useDebounce(filters.keywords, 750);

  const {data: dataNews, loading, error} = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const {data: dataCategories} = useFetch(getCategories);

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
    <main className={styles.main}>
      {dataCategories
        ? <CategoriesSlider categories={dataCategories.categories}
                            selectedCategory={filters.category}
                            setSelectedCategory={(category) => changeFilter(
                              'category', category)}/> : null}

      <Search keywords={filters.keywords}
              setKeywords={(keywords) => changeFilter(
                'keywords', keywords)}/>

      <MainBanner loading={loading}
                  item={dataNews && dataNews.news && dataNews.news[0]}/>

      <Pagination currentPage={filters.page_number}
                  previousPageHandler={previousPageHandler}
                  nextPageHandler={nextPageHandler}
                  goToFirstPage={goToFirstPageHandler}
                  goToLastPage={goToLastPageHandler}
                  totalPages={TOTAL_PAGES}/>

      <NewsList loading={loading} news={dataNews?.news}/>

      <Pagination currentPage={filters.page_number}
                  previousPageHandler={previousPageHandler}
                  nextPageHandler={nextPageHandler}
                  goToFirstPage={goToFirstPageHandler}
                  goToLastPage={goToLastPageHandler}
                  totalPages={TOTAL_PAGES}/>
    </main>
  );
};

export default Main;