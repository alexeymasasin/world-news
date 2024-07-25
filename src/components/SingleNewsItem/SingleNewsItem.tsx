import { timeAgoFormat } from '../../helpers/timeAgoFormat.ts';
import styles from './SingleNewsItem.module.css';

const SingleNewsItem = ({ item }) => {
	return (
		<li className={styles.item}>
			<div
				className={styles.image}
				style={{ backgroundImage: `url(${item.image})` }}
			></div>
			<div className={styles.info}>
				<h3 className={styles.title}>{item.title}</h3>
				<p className={styles.extra}>
					{timeAgoFormat(item.published)} by {item.author}
				</p>
			</div>
		</li>
	);
};

export default SingleNewsItem;
