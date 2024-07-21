import styles from './BannersList.module.css';
import componentWithSkeleton from '../../hocs/ComponentWithSkeleton.jsx';
import MainBanner from '../MainBanner/MainBanner.jsx';

const BannersList = ({banners}) => {
  return (
    <div className={styles.wrapper}>
      {banners?.map(banner => {
        return (
          <MainBanner key={banner.id} item={banner}/>
        );
      })}
    </div>
  );
};

const BannersListWithSkeleton = componentWithSkeleton(BannersList, 'banner', 20,
  'row');

export default BannersListWithSkeleton;