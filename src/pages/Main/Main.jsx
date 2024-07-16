import styles from './Main.module.css';
import MainBanner from '../../components/MainBanner/MainBanner.jsx';
import {useEffect, useState} from 'react';
import {getNews} from '../../api/newsAPI.js';
import NewsList from '../../components/NewsList/NewsList.jsx';

const Main = () => {
  const [news, setNews] = useState([]);

  console.log(news);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response['articles']);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 && <MainBanner item={news[0]}/>}

      <NewsList news={news}/>
    </main>
  );
};

export default Main;