import styles from './MainBanner.module.css';
import Image from './../Image/Image';
import {timeAgoFormat} from '../../helpers/timeAgoFormat.js';

const MainBanner = ({item}) => {
  return (
    <div className={styles.banner}>
      <Image image={item.image}/>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {timeAgoFormat(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default MainBanner;