export const deepCopy = (obj: Record<string, unknown>) => JSON.parse(JSON.stringify(obj))