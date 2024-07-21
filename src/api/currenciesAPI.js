import axios from 'axios';

const BASE_URL = import.meta.env.VITE_CURRENCIES_API_BASE_URL;
const API_KEY = import.meta.env.VITE_CURRENCIES_API_KEY;

export const exchangeRates = async ({currencies}) => {
  try {
    const response = await axios.get(
      `${BASE_URL}latest`, {
        params: {
          apikey: API_KEY,
          currencies: currencies,
        },
      });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
