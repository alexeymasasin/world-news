import styles from './Main.module.css';
import MainBanner from '../../components/MainBanner/MainBanner.jsx';
import {useEffect, useState} from 'react';
import {getNews} from '../../api/newsAPI.js';
import NewsList from '../../components/NewsList/NewsList.jsx';
import Skeleton from '../../components/Skeleton/Skeleton.jsx';

const Main = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await getNews();
        setNews(response.news);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 && !loading
        ? (<MainBanner item={news[0]}/>)
        : (<Skeleton type={'banner'} blocksCount={1}/>)}

      {!loading ? <NewsList news={news}/> : <Skeleton type={'item'}
                                                      blocksCount={10}
      />}
    </main>
  );
};

export default Main;