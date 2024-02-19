import { createDefaultParticipant, type Participant } from '$lib/participant';
import { getMatchCode, serialize, type SerializedAlliance, type SerializedMatchCode, type SerializedParticipantMetrics } from './api';
import type { MatchMetrics } from './metrics';
import { storable } from './storable';

export const storedParticipant = storable<Participant>('participant', createDefaultParticipant());

export const storedMatches = storable<MatchToAlliance>('matches', {} as MatchToAlliance);

type MatchToAlliance = Record<SerializedMatchCode, AllianceToStations>;
type AllianceToStations = Record<SerializedAlliance, StationToMetrics>;
type StationToMetrics = Record<number, Array<SerializedParticipantMetrics>>;

export function serializeAndStore(participant: Participant, metrics: MatchMetrics): SerializedParticipantMetrics {
    const serialized = serialize(participant, metrics);

    const allMatches = storedMatches.get();

    const matchCode = getMatchCode(serialized.participant);

    const matchAlliances = allMatches[matchCode] || {};
    const allianceStations = matchAlliances[serialized.participant.alliance] || {};
    const stationMetrics = allianceStations[participant.station] || [];

    stationMetrics.push(serialized);

    allianceStations[participant.station] = stationMetrics;
    matchAlliances[serialized.participant.alliance] = allianceStations;
    allMatches[matchCode] = matchAlliances;

    storedMatches.set(allMatches);

    return serialized;
}
