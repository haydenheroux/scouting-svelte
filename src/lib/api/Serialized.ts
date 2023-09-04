export type SerializedMatchType = "qm" | "qf" | "sf" | "f";

export type SerializedAlliance = "red" | "blue";

export interface SerializedParticipant {
    teamNumber: number;
    set: number;
    number: number;
    type: SerializedMatchType;
    event: string;
    alliance: SerializedAlliance;
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