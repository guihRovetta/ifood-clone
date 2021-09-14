export const generateRamdomNumber = (
  min: number,
  max: number,
  isRounded = false
) => {
  const randomNumber = Math.random() * (max - min) + min;
  return isRounded ? Math.floor(randomNumber) : randomNumber;
};
