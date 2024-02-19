export function valuesOf(e: any): string[] {
	return Object.keys(e).map((key) => e[key]);
}
