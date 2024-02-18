export function arrayToObject(key: string, values: Array<string>): Record<string, string> {
    let o: Record<string, string> = {};

    for (const [k, v] of values.entries()) {
        o[`${key}${k}`] = v;
    }

    return o;
}

export function stringToArray(key: string, obj: Record<string, string>): Array<string> {
    const matching = Object.keys(obj).filter((objectKey) => objectKey.startsWith(key));

    const result = [] as Array<string>;

    for (key of matching) {
        let value = obj[key];
        result.push(value);
    }

    return result;
}
