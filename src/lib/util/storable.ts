import { browser } from "$app/environment";
export function storable<T>(key: string, fallback: T) {
    return {
        get: (): T => {
            if (!browser) return fallback;

            const valueOrNull = localStorage.getItem(key);

            if (valueOrNull === null) {
                localStorage.setItem(key, JSON.stringify(fallback));

                return fallback;
            }

            const value = JSON.parse(valueOrNull);

            return value;
        },
        set: (value: T) => {
            if (!browser) return;

            console.log(value);
            
            localStorage.setItem(key, JSON.stringify(value));
        },
    }
}