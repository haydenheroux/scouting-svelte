import { browser } from "$app/environment";

export function storable<T>(key: string, fallback: T) {
    return {
        getOrNull: () => {
            if (!browser) return null;

            const valuesOrNull = localStorage.getItem(key);

            if (valuesOrNull === null) {
                return null;
            }

            const values = JSON.parse(valuesOrNull);

            return values;
        },
        push: (value: T) => {
            if (!browser) return;

            let storedValueOrNull = localStorage.getItem(key);

            if (storedValueOrNull === null) {
                localStorage.setItem(key, JSON.stringify(fallback));
                storedValueOrNull = JSON.stringify(fallback);
            }

            const storedValues = JSON.parse(storedValueOrNull);

            storedValues.push(value);

            localStorage.setItem(key, JSON.stringify(storedValues));
        }
    }
}