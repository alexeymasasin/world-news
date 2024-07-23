import styles from './NewsList.module.css';
import {v4 as uuidv4} from 'uuid';
import SingleNewsItem from '../SingleNewsItem/SingleNewsItem.jsx';
import componentWithSkeleton from '../../hocs/ComponentWithSkeleton.jsx';

const NewsList = ({news}) => {

  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        const uniqueId = uuidv4();
        return <SingleNewsItem item={item} key={uniqueId}/>;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = componentWithSkeleton(NewsList, 'item', 6);

export default NewsListWithSkeleton;