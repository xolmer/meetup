import { useState} from 'react';

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