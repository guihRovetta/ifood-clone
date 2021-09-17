import { generateRamdomNumber } from './generateRandomNumber';

export const generateMinAndMaxTime = (
  min: number,
  max: number,
  isMinutes = true
) => {
  const minTime = generateRamdomNumber(min, max, true);
  return [minTime, minTime + (isMinutes ? 10 : 1)];
};
