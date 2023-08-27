import type { SerializedParticipant, SerializedAlliance, SerializedMatchType } from "./Serialized";

export type MatchType = "Qualification" | "Quarterfinal" | "Semifinal" | "Final";

export type Alliance = "Red" | "Blue";

export interface Participant {
    event: string;
    matchType: MatchType;
    setNumber: number;
    matchNumber: number;
    teamNumber: number;
    alliance: Alliance;
}

function serializeMatchType(matchType: MatchType): SerializedMatchType {
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

function serializeAlliance(alliance: Alliance): SerializedAlliance {
    return (alliance == "Red") ? "red" : "blue";
}

export function serialize(participant: Participant): SerializedParticipant {
    return {
        teamNumber: participant.teamNumber,
        set: participant.matchType != "Qualification" ? participant.setNumber : 1,
        number: participant.matchNumber,
        type: serializeMatchType(participant.matchType),
        event: participant.event,
        alliance: serializeAlliance(participant.alliance)
    }
}