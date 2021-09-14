import { generateRamdomNumber } from './generateRandomNumber';

export const generateMinAndMaxTime = (min: number, max: number) => {
  const minTime = generateRamdomNumber(min, max, true);
  return [minTime, minTime + 10];
};
