import type { Metrics } from "./Metrics";
import type { MatchQuery, SerialMatchType, SerialParticipant } from "./Serial";

export type MatchType = "Qualification" | "Quarterfinal" | "Semifinal" | "Final";

export type Alliance = "Red" | "Blue";

export interface Participant {
    event: string;
    matchType: MatchType;
    matchNumber: number;
    teamNumber: number;
    alliance: Alliance;
}

function serializeMatchType(matchType: MatchType): SerialMatchType {
    switch (matchType) {
        case "Qualification":
            return "qm";
        case "Quarterfinal":
            return "qf";
        case "Semifinal":
            return "sf";
        case "Final":
            return "f";
    }
} 

export function toMatchQuery(participant: Participant): MatchQuery {
    return {
        set: 1, // TODO
        number: participant.matchNumber,
        type: serializeMatchType(participant.matchType),
        event: participant.event
    }
}

export function serialize(participant: Participant, metrics: Metrics): SerialParticipant {
    return {
        alliance: (participant.alliance == "Red") ? "red" : "blue",
        teamNumber: participant.teamNumber,
        metrics: Array.from(metrics, ([key, value]) => { return {key, value} })
    }
}