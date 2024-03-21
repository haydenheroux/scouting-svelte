// export const storedParticipant = storable<Participant>('participant', createDefaultParticipant());

// TODO
// export const storedMatches = storable<MatchToAlliance>('matches', {} as MatchToAlliance);

// export function serializeAndStore(
// 	participant: Participant,
// 	metrics: MatchMetrics
// ) {
	// const serialized = serialize(participant, metrics);

	// const allMatches = storedMatches.get();

	// const matchKey = getMatchKey(serialized.participant);

	// const matchAlliances = allMatches[matchKey] || {};
	// const allianceStations = matchAlliances[serialized.participant.alliance] || {};
	// const stationMetrics = allianceStations[participant.station] || [];

	// stationMetrics.push(serialized);

	// allianceStations[participant.station] = stationMetrics;
	// matchAlliances[serialized.participant.alliance] = allianceStations;
	// allMatches[matchKey] = matchAlliances;

	// storedMatches.set(allMatches);

	// return serialized;

	// TODO
// }
