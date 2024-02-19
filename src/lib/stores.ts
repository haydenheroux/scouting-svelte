import { createDefaultParticipant, type Participant } from '$lib/participant';
import { serialize, type SerializedParticipantMetrics } from './api';
import type { MatchMetrics } from './metrics';
import { storable } from './storable';

export const storedParticipant = storable<Participant>('participant', createDefaultParticipant());

export const storedMetrics = storable<Array<SerializedParticipantMetrics>>('metrics', [] as Array<SerializedParticipantMetrics>);

export function serializeAndStore(participant: Participant, metrics: MatchMetrics): SerializedParticipantMetrics {
		const serialized = serialize(participant, metrics);

		storedMetrics.set([...storedMetrics.get(), serialized]);

        return serialized;
}