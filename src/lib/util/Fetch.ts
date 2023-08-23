import type { Metrics } from "$lib/types/Metrics";
import { getQueryString, type ParticipantQuery } from "$lib/types/Serial";

export async function doPost(url: URL, participantQuery: ParticipantQuery, metrics: Metrics) {
    return await fetch(`${url}?${getQueryString(participantQuery)}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(metrics)
    });
}