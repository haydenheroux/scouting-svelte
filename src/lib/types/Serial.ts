export interface SerialMetric {
    readonly key: string; 
    readonly value: string;
}

export type SerialMatchType = "qm" | "qf" | "sf" | "f";

export type SerialAlliance = "red" | "blue";

export interface ParticipantQuery {
    readonly teamNumber: number;
    readonly set: number;
    readonly number: number;
    readonly type: SerialMatchType
    readonly event: string;
    readonly alliance: SerialAlliance;
}

function toMatchCode(participantQuery: ParticipantQuery): string {
    let s = "";
	s += participantQuery.type;

	if (participantQuery.type != "qm") {
		s += participantQuery.set;
		s += "m";
	}

	s += participantQuery.number;

	return s;
}

export function getQueryString(participantQuery: ParticipantQuery): URLSearchParams {
    return new URLSearchParams({
        team: participantQuery.teamNumber.toString(),
        match: toMatchCode(participantQuery),
        event: participantQuery.event,
        alliance: participantQuery.alliance
    });
}