import { createDefaultParticipant, type Participant } from '$lib/participant';
import type { Report } from './api';
import { storable } from './storable';

export const storedParticipant = storable<Participant>('participant', createDefaultParticipant());

export const storedReports = storable<Array<Report>>('reports', [] as Array<Report>);
