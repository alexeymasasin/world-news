import styles from './MainBannerImage.module.css';

const MainBannerImage = ({image}) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="Error: Image not Loaded"
                    className={styles.image}/> : null}
    </div>
  );
};

export default MainBannerImage;