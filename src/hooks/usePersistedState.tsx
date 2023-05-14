import { useEffect, useState } from "react"
import getFromLocalStorage from "../utils/getFromLocalStorage";

export const usePersistedState = <T,>(defaultVal: T, localStorageKey: string) => {
    const [value, setValue] = useState<T>(getFromLocalStorage(localStorageKey, defaultVal));

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [localStorageKey, value]);

    return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}