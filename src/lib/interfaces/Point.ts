export interface Point {
    readonly x: number;
    readonly y: number;
}

export function normalize(point: Point, width: number, height: number): Point {
    return {
        x: point.x / width,
        y: point.y  / width
    }
}