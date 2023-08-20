import type { Metrics } from "./Metrics";
import type { ParticipantQuery, SerialMatchType, SerialMetric } from "./Serial";

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

export function toParticipantQuery(participant: Participant): ParticipantQuery {
    return {
        teamNumber: participant.teamNumber,
        set: 1, // TODO
        number: participant.matchNumber,
        type: serializeMatchType(participant.matchType),
        event: participant.event
    }
}

export function serialize(metrics: Metrics): Array<SerialMetric> {
    return Array.from(metrics, ([key, value]) => { return {key, value} });
}