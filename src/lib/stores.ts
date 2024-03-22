// export const storedParticipant = storable<Participant>('participant', createDefaultParticipant());

import { storable } from "./storable";

import type { Event } from "./api";
import type { MatchMetrics } from "./metrics";

export const storedEvents = storable<Array<Event>>("events", [] as Array<Event>);

export function storeEvent(newEvent: Event) {
	const OVERWRITE_DUPLICATES = true;

	const events = storedEvents.get();

	console.info(`Attempting to store new event ${JSON.stringify(newEvent)}`);

	for (let i = 0; i < events.length; i++) {
		if (events[i].code === newEvent.code) {
			console.warn(
				`Duplicate event key ${newEvent.code}; ${JSON.stringify({
					overwriteDuplicates: OVERWRITE_DUPLICATES
				})}`
			);

			if (OVERWRITE_DUPLICATES) {
				events[i] = newEvent;
				storedEvents.set(events);
				return;
			}

			break;
		}
	}

	events.push(newEvent);

	storedEvents.set(events);
}

export const storedMetrics = storable<Array<MatchMetrics>>("metrics", [] as Array<MatchMetrics>);

export function storeMetrics(newMetrics: MatchMetrics) {
	const metrics = storedMetrics.get();

	metrics.push(newMetrics);

	storedMetrics.set(metrics);
}

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
