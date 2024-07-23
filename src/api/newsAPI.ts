import axios from 'axios';
import {MAIN_PAGE_SIZE} from '../constants/constants.ts';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({
  page_number = 1,
  page_size = MAIN_PAGE_SIZE,
  category = 'All',
  keywords,
}) => {
  try {
    const response = await axios.get(
      `${BASE_URL}search`, {
        params: {
          apiKey: API_KEY,
          page_size,
          page_number,
          category,
          keywords,
        },
      });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getLatestNews = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}latest-news`, {
        params: {
          apiKey: API_KEY,
        },
      });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getCategories = async () => {
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