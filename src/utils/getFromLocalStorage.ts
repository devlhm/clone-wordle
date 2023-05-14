const getFromLocalStorage = <T>(key: string, defaultVal: T) => {
    const cachedVal = localStorage.getItem(key);
        if (!cachedVal) return defaultVal;

        try {
            return JSON.parse(cachedVal) as T;
        } catch(err) {
            return defaultVal;
        }
}

export default getFromLocalStorage;