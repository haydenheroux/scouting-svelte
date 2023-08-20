import { getQueryString, type MatchQuery, type SerialParticipant } from "$lib/types/Serial";

export async function doPost(url: URL, matchQuery: MatchQuery, participant: SerialParticipant) {
    console.log(JSON.stringify(participant));

    return await fetch(`${url}?${getQueryString(matchQuery)}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(participant)
    });
}