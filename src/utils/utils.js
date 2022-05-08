import { firebaseURL } from '../firebaseURL';

export const fireBaseFetch = async (path, options = {}) =>
  fetch(`${firebaseURL}${path}`, options);

export const arrToObj = (arr) =>
  arr.reduce(
    (acc, curr, index) => ({
      ...acc,
      ...{
        ...curr,
        id: index,
      },
    }),
    {}
  );
