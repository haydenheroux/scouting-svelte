export function arrayToObject<T>(key: string, values: Array<T>): Record<string, T> {
	let object: Record<string, T> = {};

	for (const [index, value] of values.entries()) {
		const newKey = `${key}${index}`;
		object[newKey] = value;
	}

	return object;
}

export function stringToArray(key: string, object: Record<string, string>): Array<string> {
	const matchingKeys = Object.keys(object).filter(objectKey => objectKey.startsWith(key));

	const result = [] as Array<string>;

	for (key of matchingKeys) {
		let value = object[key];
		result.push(value);
	}

	return result;
}