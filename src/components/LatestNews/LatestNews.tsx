import styles from './LatestNews.module.css';
import BannersList from '../BannersList/BannersList.tsx';
import {useFetch} from '../../hooks/useFetch.ts';
import {getLatestNews} from '../../api/newsAPI.ts';
import SectionHeading from '../SectionHeading/SectionHeading.tsx';

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