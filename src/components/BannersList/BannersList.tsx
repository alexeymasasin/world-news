import { MAIN_PAGE_SIZE } from '../../constants/constants.ts';
import componentWithSkeleton from '../../hocs/ComponentWithSkeleton.tsx';
import MainBanner from '../MainBanner/MainBanner.tsx';
import styles from './BannersList.module.css';

const BannersList = ({ banners }) => {
	banners.length = MAIN_PAGE_SIZE;
	return (
		<div className={styles.wrapper}>
			{banners?.map((banner) => {
				return <MainBanner key={banner.id} item={banner} />;
			})}
		</div>
	);
};

const BannersListWithSkeleton = componentWithSkeleton(
	BannersList,
	'banner',
	MAIN_PAGE_SIZE,
	'row'
);

export default BannersListWithSkeleton;
