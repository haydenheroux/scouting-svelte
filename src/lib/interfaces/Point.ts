export interface Point {
    readonly x: number;
    readonly y: number;
}

export function normalize(point: Point, width: number, height: number): Point {
    return {
        x: point.x / width,
        y: point.y  / height
    }
}

export function pointToString(point: Point): string {
    return `${point.x.toFixed(4)},${point.y.toFixed(4)}`;
}

export function pointsToString(points: Array<Point>): string {
    let pointStrings = [];
    for (let point of points) {
        pointStrings.push(pointToString(point));
    }
    return pointStrings.join(":");
}