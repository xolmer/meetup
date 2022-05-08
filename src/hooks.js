import { useState, useEffect } from 'react';

export const useFetchData = (fetchFactory) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const getData = async () => {
    const data = await fetchFactory();
    console.log('start getdata');
    setIsLoading(true);
    setData(data);
    console.log('setData');
    setIsLoading(false);
    console.log('setIsLoading');
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    isLoading,
    data,
  };
};
