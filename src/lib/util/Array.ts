export function arrayToObject<T>(key: string, values: Array<T>): Record<string, T> {
	let object: Record<string, T> = {};

	for (const [index, value] of values.entries()) {
		const newKey = `${key}${index}`;
		object[newKey] = value;
	}

	return object;
}
