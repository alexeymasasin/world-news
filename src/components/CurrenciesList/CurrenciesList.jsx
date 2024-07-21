import styles from './CurrenciesList.module.css';
import {useFetch} from '../../hooks/useFetch.js';
import {exchangeRates} from '../../api/currenciesAPI.js';

const CurrenciesList = () => {
  const {data: currencies} = useFetch(exchangeRates, {
    currencies: 'EUR,RUB,GBP',
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.currency}>
        €{currencies ? currencies?.data.EUR.toFixed(2) : 'ERR.'}
      </div>
      <div className={styles.divider}/>
      <div className={styles.currency}>
        ₽{currencies ? currencies?.data.RUB.toFixed(2) : 'ERR.'}
      </div>
      <div className={styles.divider}/>
      <div className={styles.currency}>
        £{currencies ? currencies?.data.GBP.toFixed(2) : 'ERR.'}
      </div>
    </div>
  );
};

export default CurrenciesList;