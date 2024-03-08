export const formatNumberToTime = (time: number): string => {
  const minutes = `${Math.floor(time / 60)}`.padStart(2, '0');
  const seconds = `${time % 60}`.padStart(2, '0');

  return `${minutes}:${seconds}`;
};
