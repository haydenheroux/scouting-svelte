import type { SerializedParticipant } from '$lib/api';

export type Metrics = Record<string, string>;

export interface Report {
	participant: SerializedParticipant;
	metrics: Metrics;
}
