import styles from './Button.module.css';

const HeaderButton = ({children}) => {
  return (
    <button className={styles.btn}>{children}</button>
  );
};

export default HeaderButton;