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
    console.log(point);
    return `${point.x},${point.y}`;
}

export function pointsToString(points: Array<Point>): string {
    let s = "";
    for (let point of points) {
        s += pointToString(point);
        s += ":";
    }
    return s;
}