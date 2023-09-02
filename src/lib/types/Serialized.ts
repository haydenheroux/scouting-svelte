import type { Alliance, MatchType, Participant } from "./Participant";

export type SerializedMatchType = "qm" | "qf" | "sf" | "f";

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

export type SerializedAlliance = "red" | "blue";

export function allianceToSerialAlliance(alliance: Alliance): SerializedAlliance {
    return (alliance == "Red") ? "red" : "blue";
}

export function deserializeAlliance(alliance: SerializedAlliance): Alliance {
    return alliance == "red" ? "Red" : "Blue";
}

export interface SerializedParticipant {
    teamNumber: number;
    set: number;
    number: number;
    type: SerializedMatchType;
    event: string;
    alliance: SerializedAlliance;
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

export type SerializedMatchCode = string;

export function getMatchCode(participant: SerializedParticipant): SerializedMatchCode {
    let s = "";
	s += participant.type;

	if (participant.type != "qm") {
		s += participant.set;
		s += "m";
	}

	s += participant.number;

	return s;
}


export function getQueryString(participant: SerializedParticipant): URLSearchParams {
    return new URLSearchParams({
        team: participant.teamNumber.toString(),
        match: getMatchCode(participant),
        event: participant.event,
        alliance: participant.alliance
    });
}

export type Metrics = Record<string, string>;

export interface Serialized {
    participant: SerializedParticipant;
    metrics: Metrics;
} 