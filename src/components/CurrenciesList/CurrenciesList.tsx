import styles from './CurrenciesList.module.css';
import {useFetch} from '../../hooks/useFetch.ts';
import {exchangeRates} from '../../api/currenciesAPI.ts';

const CurrenciesList = () => {
  const {data: currencies} = useFetch(exchangeRates, {
    currencies: 'EUR,RUB,GBP',
  });

  return (
    currencies ?
      <div className={styles.wrapper}>
        <div className={styles.currency}>
          €{currencies?.data.EUR.toFixed(2)}
        </div>
        <div className={styles.divider}/>
        <div className={styles.currency}>
          ₽{currencies?.data.RUB.toFixed(2)}
        </div>
        <div className={styles.divider}/>
        <div className={styles.currency}>
          £{currencies?.data.GBP.toFixed(2)}
        </div>
      </div> :
      <div className={styles.wrapper}>
        <p>Loading exchange rates...</p>
      </div>
  );
};

export default CurrenciesList;