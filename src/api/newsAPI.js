import axios from 'axios';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (
  language = 'ru', page_number = 1, page_size = 8, category = 'technology') => {
  try {
    const response = await axios.get(
      `${BASE_URL}search`, {
        params: {
          apiKey: API_KEY,
          category,
          page_size,
          page_number,
        },
      });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};