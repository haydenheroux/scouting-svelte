interface Dimensions {
    width: number;
    height: number;
}

export function dimensionsOfCanvas(canvas: HTMLCanvasElement): Dimensions {
    return {
        width: canvas.width,
        height: canvas.height
    };
}

const SEPARATOR: string = ',';

export class Point {
    readonly x: number;
    readonly y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static fromMouseEvent(e: MouseEvent): Point {
        return new Point(e.offsetX, e.offsetY);
    }

    static fromString(s: string): Point {
        let parts = s.split(SEPARATOR);

        let x = Number(parts[0]);
        let y = Number(parts[1]);

        return new Point(x, y);
    }

    normalize(bounds: Dimensions): NormalizedPoint {
        const nx = this.x / bounds.width;
        const ny = this.y / bounds.height;

        return new NormalizedPoint(nx, ny);
    }
}

export class NormalizedPoint {
    readonly x: number;
    readonly y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static fromString(s: string): NormalizedPoint {
        let parts = s.split(SEPARATOR);

        let x = Number(parts[0]);
        let y = Number(parts[1]);

        return new NormalizedPoint(x, y);
    }

    stringify(): string {
        return `${this.x.toFixed(4)}${SEPARATOR}${this.y.toFixed(4)}`;
    }

    flipX(): NormalizedPoint {
        let dist = Math.abs(this.x - 0.5);
        let fx = 0.5 - dist;

        return new NormalizedPoint(fx, this.y);
    }

    flipY(): NormalizedPoint {
        let dist = Math.abs(this.y - 0.5);
        let fy = 0.5 - dist;

        return new NormalizedPoint(this.x, fy);
    }

    scale(dimensions: Dimensions): Point {
        const sx = this.x * dimensions.width;
        const sy = this.y * dimensions.height;

        return new Point(sx, sy);
    }
}
