import styles from './LatestNews.module.css';
import BannersList from '../BannersList/BannersList.jsx';

const LatestNews = ({banners, loading}) => {
  return (
    <section className={styles.wrapper}>
      <BannersList banners={banners} loading={loading}/>
    </section>
  );
};

export default LatestNews;