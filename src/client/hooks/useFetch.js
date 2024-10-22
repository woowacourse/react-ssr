import { useEffect, useState } from 'react';

const useFetch = (initialData, fetchCallback) => {
  const [data, setData] = useState(initialData);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsPending(true);
        const responseData = await fetchCallback();

        setData(responseData);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsPending(false);
      }
    };

    if (typeof window !== 'undefined' && !window.__INITIAL_DATA__.movieDetail) {
      getData();
    }
  }, []);

  return { data, isPending, isError };
};

export default useFetch;
