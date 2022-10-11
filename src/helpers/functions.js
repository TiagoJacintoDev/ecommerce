export const getRandomProducts = (products, quantity) => {
  const cloneProducts = products.data.map(p => p);
  return cloneProducts
    .sort(() => 0.5 - Math.random())
    .filter((p, index) => index < quantity);
};

export const LowerFirst = string => {
  return string[0].toUpperCase() + string.slice(1);
};
