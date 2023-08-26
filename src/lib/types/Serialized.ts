export type SerialMatchType = "qm" | "qf" | "sf" | "f";

export type SerialAlliance = "red" | "blue";

export interface SerializedParticipant {
    teamNumber: number;
    set: number;
    number: number;
    type: SerialMatchType
    event: string;
    alliance: SerialAlliance;
}

export function toMatchCode(participant: SerializedParticipant): string {
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
        match: toMatchCode(participant),
        event: participant.event,
        alliance: participant.alliance
    });
}

export type Metrics = Record<string, string>;

export interface Serialized {
    participant: SerializedParticipant;
    metrics: Metrics;
} 