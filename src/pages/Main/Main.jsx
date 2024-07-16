import styles from './Main.module.css';
import MainBanner from '../../components/MainBanner/MainBanner.jsx';
import {useEffect, useState} from 'react';
import {getNews} from '../../api/newsAPI.js';
import NewsList from '../../components/NewsList/NewsList.jsx';
import Skeleton from '../../components/Skeleton/Skeleton.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';

const Main = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setLoading(true);
      const response = await getNews('ru', currentPage, pageSize);
      setNews(response.news);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const nextPageHandler = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const moveToPageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      {news.length > 0 && !loading
        ? (<MainBanner item={news[0]}/>)
        : (<Skeleton type={'banner'} blocksCount={1}/>)}

      {!loading ? <NewsList news={news}/> : <Skeleton type={'item'}
                                                      blocksCount={10}
      />}

      <Pagination currentPage={currentPage} nextPageHandler={nextPageHandler}
                  previousPageHandler={previousPageHandler}
                  moveToPageHandler={moveToPageHandler}
                  totalPages={totalPages}/>
    </main>
  );
};

export default Main;