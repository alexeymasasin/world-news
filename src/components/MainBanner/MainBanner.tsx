import styles from './MainBanner.module.css';
import MainBannerImage from '../MainBannerImage/MainBannerImage.tsx';
import {timeAgoFormat} from '../../helpers/timeAgoFormat.ts';

const MainBanner = ({item}) => {
  return (
    <div className={styles.wrapper}>
      <MainBannerImage image={item.image}/>
      <div className={styles.textbox}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {timeAgoFormat(item.published)} by {item.author}
        </p>
      </div>
    </div>
  );
};

export default MainBanner;