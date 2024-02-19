// TODO Ensure compatibility between API types and API.

export type SerializedMatchType = 'qm' | 'qf' | 'sf' | 'f';

export type SerializedAlliance = 'red' | 'blue';

export interface SerializedParticipant {
    set: number;
    match: number;
    type: SerializedMatchType;
    alliance: SerializedAlliance;
    station: number;
}

export type SerializedMatchCode = string;

export function getMatchCode(participant: SerializedParticipant): SerializedMatchCode {
    let s = '';
    s += participant.type;

    if (participant.type != 'qm') {
        s += participant.set;
        s += 'm';
    }

    s += participant.match;

    return s;
}
