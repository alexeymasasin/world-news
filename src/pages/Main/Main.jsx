import styles from './Main.module.css';
import MainBanner from '../../components/MainBanner/MainBanner.jsx';
import {useEffect, useState} from 'react';
import {getCategories, getNews} from '../../api/newsAPI.js';
import NewsList from '../../components/NewsList/NewsList.jsx';
import Skeleton from '../../components/Skeleton/Skeleton.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import CategoriesSlider
  from '../../components/CetegoriesSlider/CategoriesSlider.jsx';

const Main = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(['All']);
  const totalPages = 15;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setLoading(true);
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === 'All' ? null : selectedCategory,
      });
      setNews(response.news);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(['All', ...response.categories]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories(currentPage);
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory]);

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

  const goToFirstPageHandler = () => {
    setCurrentPage(1);
  };

  const goToLastPageHandler = () => {
    setCurrentPage(totalPages);
  };

  return (
    <main className={styles.main}>
      <CategoriesSlider categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}/>

      {news.length > 0 && !loading
        ? (<MainBanner item={news[0]}/>)
        : (<Skeleton type={'banner'} blocksCount={1}/>)}

      <Pagination currentPage={currentPage} nextPageHandler={nextPageHandler}
                  previousPageHandler={previousPageHandler}
                  goToFirstPage={goToFirstPageHandler}
                  goToLastPage={goToLastPageHandler}
                  totalPages={totalPages}/>


      {!loading ? <NewsList news={news}/> : <Skeleton type={'item'}
                                                      blocksCount={10}
      />}

      <Pagination currentPage={currentPage} nextPageHandler={nextPageHandler}
                  previousPageHandler={previousPageHandler}
                  goToFirstPage={goToFirstPageHandler}
                  goToLastPage={goToLastPageHandler}
                  totalPages={totalPages}/>
    </main>
  );
};

export default Main;