import {dateFormat} from './../../helpers/dateFormat';
import styles from './Header.module.css';
import HeaderButton from '../UI/Header/Button.jsx';
import {RiNewsFill} from 'react-icons/ri';
import {NavLink} from 'react-router-dom';
import {RxHamburgerMenu} from 'react-icons/rx';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <NavLink to="/">
          <h1 className={styles.title}>TECH NEWS <RiNewsFill
            className={styles.title_logo}/></h1>
        </NavLink>
        <p className={styles.date}>{dateFormat(new Date())}</p>
      </div>
      <div className={styles.right}>
        <HeaderButton><RxHamburgerMenu/></HeaderButton>
      </div>
    </header>
  );
};

export default Header;