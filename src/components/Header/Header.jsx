import {dateFormat} from './../../helpers/dateFormat';
import styles from './Header.module.css';
import HeaderButton from '../UI/Header/Button.jsx';
import {RiNewsFill} from 'react-icons/ri';
import {NavLink} from 'react-router-dom';
import {RxHamburgerMenu} from 'react-icons/rx';
import CurrenciesList from '../CurrenciesList/CurrenciesList.jsx';

const Header = () => {
  const pageReloadHandler = window.location.reload;

  return (
    <header className={styles.wrapper}>
      <div className={styles.left}>
        <NavLink onClick={pageReloadHandler} to="/">
          <h1 className={styles.title}>WORLD NEWS <RiNewsFill
            className={styles.title_logo}/></h1>
        </NavLink>
        <p className={styles.date}>{dateFormat(new Date())}</p>
        <CurrenciesList/>
      </div>
      <div className={styles.right}>
        <HeaderButton><RxHamburgerMenu/></HeaderButton>
      </div>
    </header>
  );
};

export default Header;