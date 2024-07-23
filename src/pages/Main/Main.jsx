import styles from './Main.module.css';
import LatestNews from '../../components/LatestNews/LatestNews.jsx';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters.jsx';

const Main = () => {
  return (
    <main className={styles.wrapper}>
      <LatestNews/>

      <NewsByFilters/>
    </main>
  );
};

export default Main;