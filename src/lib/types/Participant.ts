export type MatchType = "Qualification" | "Quarterfinal" | "Semifinal" | "Final";

export type Alliance = "Red" | "Blue";

export interface Participant {
    event: string;
    matchType: MatchType;
    matchNumber: number;
    teamNumber: number;
    alliance: Alliance;
} 