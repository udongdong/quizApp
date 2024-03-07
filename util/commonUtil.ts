import he from 'he';

export const suffle = <T>(arr: T[]): T[] => arr.sort(() => Math.random() - 0.5);

export const decodedHtmlEntity = (encoded: string): string =>
  he.decode(encoded);
