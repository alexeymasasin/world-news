import styles from './BannersList.module.css';
import componentWithSkeleton from '../../hocs/ComponentWithSkeleton.tsx';
import MainBanner from '../MainBanner/MainBanner.tsx';

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