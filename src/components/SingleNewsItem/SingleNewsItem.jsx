import styles from './SingleNewsItem.module.css';
import {timeAgoFormat} from '../../helpers/timeAgoFormat.js';

const SingleNewsItem = ({item}) => {
  return (
    <li className={styles.item}>
      <div className={styles.image}
           style={{backgroundImage: `url(${item.urlToImage})`}}></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {timeAgoFormat(item.publishedAt)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default SingleNewsItem;