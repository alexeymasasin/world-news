import styles from './SectionHeading.module.css';

const SectionHeading = ({title}) => {
  return (
    <h1 className={styles.title}>
      {title}
      <div className={styles.underline}/>
    </h1>
  );
};

export default SectionHeading;