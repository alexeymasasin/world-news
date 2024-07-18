import axios from 'axios';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({
  page_number = 1,
  page_size = 8,
  category = 'All',
}) => {
  try {
    const response = await axios.get(
      `${BASE_URL}search`, {
        params: {
          apiKey: API_KEY,
          page_size,
          page_number,
          category,
        },
      });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getCategories = async (
  language = 'qwe', page_number = 1, page_size = 8) => {
  try {
    const response = await axios.get(
      `${BASE_URL}available/categories`, {
        params: {
          apiKey: API_KEY,
        },
      });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};