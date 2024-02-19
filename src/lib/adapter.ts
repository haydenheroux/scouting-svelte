import type { SerializedAlliance, SerializedMatchType, SerializedParticipant } from '$lib/api';
import { Alliance, MatchType, type Participant } from '$lib/participant';

export function allianceToSerialAlliance(alliance: Alliance): SerializedAlliance {
    return alliance == Alliance.RED ? 'red' : 'blue';
}

export function deserializeAlliance(alliance: SerializedAlliance): Alliance {
    return alliance == 'red' ? Alliance.RED : Alliance.BLUE;
}

export function matchTypeToSerializedMatchType(matchType: MatchType): SerializedMatchType {
    switch (matchType) {
        case MatchType.QUALIFICATION:
            return 'qm';
        case MatchType.QUARTERFINAL:
            return 'qf';
        case MatchType.SEMIFINAL:
            return 'sf';
        case MatchType.FINAL:
            return 'f';
        default:
            return 'qm';
    }
}

export function participantToSerializedParticipant(
    participant: Participant
): SerializedParticipant {
    return {
        type: matchTypeToSerializedMatchType(participant.type),
        set: participant.set,
        match: participant.match,
        alliance: allianceToSerialAlliance(participant.alliance),
        station: participant.station
    };
}
