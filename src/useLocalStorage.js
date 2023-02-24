import {useState} from 'react'

export function useLocalStorageFavorites(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(initialValue);
            return initialValue;
        }
    })

    const setValue = value =>{
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error)
        }
    }

    return [storedValue, setValue]
}
