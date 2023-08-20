import { getQueryString, type ParticipantQuery, type SerialMetric } from "$lib/types/Serial";

export async function doPost(url: URL, participantQuery: ParticipantQuery, metrics: Array<SerialMetric>) {
    return await fetch(`${url}?${getQueryString(participantQuery)}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(metrics)
    });
}