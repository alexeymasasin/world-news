import { v4 as uuidv4 } from 'uuid';
import componentWithSkeleton from '../../hocs/ComponentWithSkeleton.tsx';
import SingleNewsItem from '../SingleNewsItem/SingleNewsItem.tsx';
import styles from './NewsList.module.css';

const NewsList = ({ news }) => {
	return (
		<ul className={styles.list}>
			{news?.map((item) => {
				const uniqueId = uuidv4();
				return <SingleNewsItem item={item} key={uniqueId} />;
			})}
		</ul>
	);
};

const NewsListWithSkeleton = componentWithSkeleton(NewsList, 'item', 5);

export default NewsListWithSkeleton;
