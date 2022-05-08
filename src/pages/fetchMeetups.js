import { fireBaseFetch } from '../utils/utils';
import { arrToObj } from '../utils/utils';

export const fetchData = async () => {
  const response = await fireBaseFetch('meetups.json');
  console.log('response fireBasePath', response);
  const responseData = await response.json();

  return Object.entries(responseData).map(([key, value]) => ({
    ...value,
    id: key,
  }));
};
