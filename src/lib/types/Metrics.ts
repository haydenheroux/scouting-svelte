export interface Metric {
    readonly key: string;
    readonly value: string;
}

export type Defense = "None" | "Attempted" | "Effective" | "Very Effective";