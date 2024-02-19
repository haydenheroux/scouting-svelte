import { createDefaultParticipant, type Participant } from '$lib/types/Participant';
import { storable } from '../util/storable';
import type { Report } from './Report';

export const storedParticipant = storable<Participant>('participant', createDefaultParticipant());

export const storedReports = storable<Array<Report>>('reports', [] as Array<Report>);
