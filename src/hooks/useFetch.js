import {useEffect, useState} from 'react';

export const useFetch = (fetchFn, params) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const strParams = params ? new URLSearchParams(params).toString() : '';

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetchFn(params);
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [fetchFn, strParams]);

  return {data, loading, error};
};