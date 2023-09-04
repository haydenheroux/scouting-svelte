import type { SerializedAlliance, SerializedMatchType, SerializedParticipant } from "$lib/api";
import type { Alliance, MatchType, Participant } from "$lib/types/Participant";

export function allianceToSerialAlliance(alliance: Alliance): SerializedAlliance {
    return (alliance == "Red") ? "red" : "blue";
}

export function deserializeAlliance(alliance: SerializedAlliance): Alliance {
    return alliance == "red" ? "Red" : "Blue";
}

export function matchTypeToSerializedMatchType(matchType: MatchType): SerializedMatchType {
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

export function participantToSerializedParticipant(participant: Participant): SerializedParticipant {
    return {
        teamNumber: participant.team ?? -1, // TODO
        set: participant.type != "Qualification" ? participant.set : 1,
        number: participant.match,
        type: matchTypeToSerializedMatchType(participant.type),
        event: participant.event,
        alliance: allianceToSerialAlliance(participant.alliance ?? "Red")
    }
}
