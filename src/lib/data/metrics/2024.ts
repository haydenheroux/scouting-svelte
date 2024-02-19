import { NormalizedPoint } from '$lib/types/Point';
import { arrayToObject, stringToArray } from '$lib/util/Array';
import type { Metrics } from '../Report';

export enum Trap { NONE = 'None', FAIL = 'Fail', SUCCESS = 'Success' };
export enum Climb { NONE = 'None', FAIL = 'Fail', SUCCESS = 'Success' };
export enum Harmony { ZERO = '0', ONE = '+1', TWO = '+2' };
export enum HighNotes { NONE = 'None', ZERO = '0', ONE = '1', TWO = '2', THREE = '3' };

export class Metrics2024 {
    startingPoint: Array<NormalizedPoint> = [];
    leave: boolean = false;
    pickups: Array<NormalizedPoint> = [];
    makes: Array<NormalizedPoint> = [];
    misses: Array<NormalizedPoint> = [];
    coopertition: boolean = false;
    trap: Trap = Trap.NONE;
    climb: Climb = Climb.NONE;
    harmony: Harmony = Harmony.ZERO;
    highNotes: HighNotes = HighNotes.NONE;
    defenseNotes: Array<string> = [];
    drivingNotes: Array<string> = [];
    downtimeNotes: Array<string> = [];
    otherNotes: Array<string> = [];
    scouterName: string = '';

    static fromMetrics(metrics: Metrics): Metrics2024 {
        const metrics2024 = new Metrics2024();

        metrics2024.startingPoint = [NormalizedPoint.fromString((metrics['startingPoint'][0]))];
        metrics2024.leave = metrics['leave'] == 'true';
        metrics2024.pickups = stringToArray('pickup', metrics).map(s => NormalizedPoint.fromString(s));
        metrics2024.makes = stringToArray('make', metrics).map(s => NormalizedPoint.fromString(s));
        metrics2024.misses = stringToArray('miss', metrics).map(s => NormalizedPoint.fromString(s));
        metrics2024.coopertition = metrics['coopertition'] == 'true';
        metrics2024.trap = metrics['trap'] as Trap;
        metrics2024.climb = metrics['climb'] as Climb;
        metrics2024.harmony = metrics['harmony'] as Harmony;
        metrics2024.highNotes = metrics['highNotes'] as HighNotes;
        metrics2024.defenseNotes = stringToArray('defenseNote', metrics);
        metrics2024.drivingNotes = stringToArray('drivingNote', metrics);
        metrics2024.downtimeNotes = stringToArray('downtimeNote', metrics);
        metrics2024.otherNotes = stringToArray('otherNote', metrics);
        metrics2024.scouterName = metrics['scouterName'];

        return metrics2024;
    }

    flatten(): Metrics {
        return {
            startingPoint: this.startingPoint ? this.startingPoint.map(p => p.stringify()).join(":") : '',
            leave: this.leave.toString(),
            ...arrayToObject('pickup', this.pickups.map(p => p.stringify())),
            ...arrayToObject('make', this.makes.map(p => p.stringify())),
            ...arrayToObject('miss', this.misses.map(p => p.stringify())),
            coopertition: this.coopertition.toString(),
            trap: this.trap,
            climb: this.climb,
            harmony: this.harmony,
            highNotes: this.highNotes,
            ...arrayToObject('defenseNote', this.defenseNotes),
            ...arrayToObject('drivingNote', this.drivingNotes),
            ...arrayToObject('downtimeNote', this.downtimeNotes),
            ...arrayToObject('otherNote', this.otherNotes),
            scouterName: this.scouterName
        };
    }
}
