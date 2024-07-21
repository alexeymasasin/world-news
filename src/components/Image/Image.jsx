import styles from './Image.module.css';

const Image = ({image}) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="Error: Image not Loaded"
                    className={styles.image}/> : null}
    </div>
  );
};

export default Image;