export const fetchData = async () => {
    const response = await fireBaseFetch('meetups.json');
    const responseData = await response.json();

    return arrToObj(responseData);
  };
