export type MatchType = 'Qualification' | 'Quarterfinal' | 'Semifinal' | 'Final';

export type Alliance = 'Red' | 'Blue';

export interface Participant {
	event: string;
	type: MatchType;
	set: number;
	match: number;
	team: number | null;
	alliance: Alliance | null;
}
