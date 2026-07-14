import { useEffect, useState } from "react";

interface UseFetchReturn<FetchedDataType> {
    fetchedData: FetchedDataType | null;
    isLoading: boolean;
    errorMessage: string | null;
}

const useFetch = <FetchedDataType>(apiEndpointUrl: string): UseFetchReturn<FetchedDataType> => {
    const [fetchedData, setFetchedData] = useState<FetchedDataType | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        let isComponentMounted = true;

        setIsLoading(true);
        setErrorMessage(null);

        fetch(apiEndpointUrl)
            .then((httpResponse) => {
                if (!httpResponse.ok) {
                    throw new Error(`Request failed with HTTP status: ${httpResponse.status}`);
                }
                return httpResponse.json() as Promise<FetchedDataType>;
            })
            .then((responseData) => {
                if (isComponentMounted) {
                    setFetchedData(responseData);
                    setIsLoading(false);
                }
            })
            .catch((fetchError: Error) => {
                if (isComponentMounted) {
                    setErrorMessage(fetchError.message);
                    setIsLoading(false);
                }
            });

        return () => {
            isComponentMounted = false;
        };
    }, [apiEndpointUrl]);

    return { fetchedData, isLoading, errorMessage };
};

export default useFetch;
