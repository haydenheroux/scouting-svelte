import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";

export function storable<T>(key: string, fallback: T) {
    const store = writable<T>(fallback);

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

            store.set(value);

            localStorage.setItem(key, JSON.stringify(value));
        },
        getStore: (): Writable<T> => {
            return store;
        }
    }
}