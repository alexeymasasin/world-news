import styles from './LatestNews.module.css';
import BannersList from '../BannersList/BannersList.jsx';
import {useFetch} from '../../hooks/useFetch.js';
import {getLatestNews} from '../../api/newsAPI.js';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';

const LatestNews = () => {
  const {data, loading, error} = useFetch(getLatestNews);

  return (
    <section className={styles.wrapper}>
      <SectionHeading title="Latest News"/>
      <BannersList banners={data && data.news} loading={loading}/>
    </section>
  );
};

export default LatestNews;