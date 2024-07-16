import styles from './NewsList.module.css';
import {v4 as uuidv4} from 'uuid';
import SingleNewsItem from '../SingleNewsItem/SingleNewsItem.jsx';

const NewsList = ({news}) => {

  return (
    <ul className={styles.list}>
      {news.map((item, i) => {
        const uniqueId = uuidv4();
        return <SingleNewsItem item={item} key={uniqueId}/>;
      })}
    </ul>
  );
};

export default NewsList;