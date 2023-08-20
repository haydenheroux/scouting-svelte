type SerialAlliance = "red" | "blue";

export interface SerialParticipant {
    readonly alliance: SerialAlliance;
    readonly teamNumber: number; 
    readonly metrics: Array<SerialMetric>;
}

export interface SerialMetric {
    readonly key: string; 
    readonly value: string;
}

export type SerialMatchType = "qm" | "qf" | "sf" | "f";

export interface MatchQuery {
    readonly set: number;
    readonly number: number;
    readonly type: SerialMatchType
    readonly event: string;
}

function toMatchCode(matchQuery: MatchQuery): string {
    let s = "";
	s += matchQuery.type;

	if (matchQuery.type != "qm") {
		s += matchQuery.set;
		s += "m";
	}

	s += matchQuery.number;

	return s;
}

export function getQueryString(matchQuery: MatchQuery): URLSearchParams {
    return new URLSearchParams({
        match: toMatchCode(matchQuery),
        event: matchQuery.event
    });
}