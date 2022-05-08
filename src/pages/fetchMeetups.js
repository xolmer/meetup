import { firebaseURL } from '../firebaseURL';
import { useState} from 'react';

export const fetchData = async () => {
    const response = await fetch(`${firebaseURL}meetups.json`);
    const responseData = await response.json();
  
    const loadedMeetups = [];
    for (const key in responseData) {
      loadedMeetups.push({
        ...responseData[key],
        id: key,
      });
    }
    
    return loadedMeetups;
  };

export const useFetchData = (fetchFactory) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(undefined);
    const getData = async () => {
        setIsLoading(true);
        setData(await fetchFactory());
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);
    

    return {
        isLoading,
        data,
    }
}