import { useEffect, useState } from "react";

const useDebounce = (inputValue: string, delayMilliseconds: number): string => {
    const [debouncedValue, setDebouncedValue] = useState<string>(inputValue);

    useEffect(() => {
        const debounceTimerId = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, delayMilliseconds);

        return () => {
            clearTimeout(debounceTimerId);
        };
    }, [inputValue, delayMilliseconds]);

    return debouncedValue;
};

export default useDebounce;
