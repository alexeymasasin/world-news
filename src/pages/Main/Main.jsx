import styles from './Main.module.css';
import {getNews} from '../../api/newsAPI.js';
import {useDebounce} from '../../hooks/useDebounce.js';
import {FILTERS_PAGE_SIZE, MAIN_PAGE_SIZE} from '../../constants/constants.js';
import {useFetch} from '../../hooks/useFetch.js';
import {useFilters} from '../../hooks/useFilters.js';
import LatestNews from '../../components/LatestNews/LatestNews.jsx';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters.jsx';

const Main = () => {
  const {filters, changeFilter} = useFilters({
    page_number: 1,
    page_size: MAIN_PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debouncedKeywords = useDebounce(filters.keywords, 750);

  const {data: dataNews, loading, error} = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const {data: dataFilteredNews} = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
    page_size: FILTERS_PAGE_SIZE,
  });

  return (
    <main className={styles.wrapper}>
      <LatestNews loading={loading} banners={dataNews && dataNews.news}/>

      <NewsByFilters news={dataFilteredNews?.news} filters={filters}
                     changeFilter={changeFilter} loading={loading}/>
    </main>
  );
};

export default Main;