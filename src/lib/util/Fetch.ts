import { getQueryString, type Serialized } from "$lib/types/Serialized";

export async function doPost(url: URL, serialized: Serialized) {
    return await fetch(`${url}?${getQueryString(serialized.participant)}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(serialized.metrics)
    });
}