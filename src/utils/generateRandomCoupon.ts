import { generateRamdomNumber } from './generateRandomNumber';

const availableCoupons = [5, 10, 12, 25, 50];

export const generateRandomCoupon = () => {
  const randomNumber = generateRamdomNumber(
    0,
    availableCoupons?.length - 1,
    true
  );
  return availableCoupons[randomNumber];
};
