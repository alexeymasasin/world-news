import styles from './MainBannerImage.module.css';

const MainBannerImage = ({image}) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="Image"
                    className={styles.image}/> : null}
    </div>
  );
};

export default MainBannerImage;