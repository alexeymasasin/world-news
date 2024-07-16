import styles from './Skeleton.module.css';

const Skeleton = ({blocksCount = 1, type = 'banner'}) => {
  return (
    <>
      {blocksCount > 1 ?
        (<ul className={styles.list}> {[...Array(blocksCount)].map((_, i) => (
          <li key={i}
              className={type === 'banner'
                ? styles.banner
                : styles.item}>
          </li>
        ))}
        </ul>) :
        <li className={type === 'banner' ? styles.banner : styles.item}></li>}
    </>
  );
};

export default Skeleton;