import type { SerializedParticipant, SerializedAlliance, SerializedMatchType } from "./Serialized";

export type MatchType = "Qualification" | "Quarterfinal" | "Semifinal" | "Final";

export type Alliance = "Red" | "Blue";

export interface Participant {
    event: string;
    type: MatchType;
    set: number;
    match: number;
    team: number | null;
    alliance: Alliance | null;
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
        teamNumber: participant.team ?? -1, // TODO
        set: participant.type != "Qualification" ? participant.set : 1,
        number: participant.match,
        type: serializeMatchType(participant.type),
        event: participant.event,
        alliance: serializeAlliance(participant.alliance ?? "Red")
    }
}