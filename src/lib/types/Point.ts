export interface Point {
    readonly x: number;
    readonly y: number;
}

export function scale(point: Point, width: number, height: number): Point {
    return {
        x: point.x * width,
        y: point.y  * height
    }
}

export function normalize(point: Point, width: number, height: number): Point {
    return {
        x: point.x / width,
        y: point.y  / height
    }
}

export function pointToString(point: Point): string {
    if (!point) return "";
    return `${point.x.toFixed(4)},${point.y.toFixed(4)}`;
}

export function pointsToString(points: Array<Point>): string {
    let pointStrings = [];
    for (let point of points) {
        console.log(point);
        pointStrings.push(pointToString(point));
    }
    return pointStrings.join(":");
}