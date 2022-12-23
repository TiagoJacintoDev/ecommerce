export const getRandomProducts = (products, quantity) => {
  const clonedProducts = [...products.data];
  return clonedProducts
    .sort(() => 0.5 - Math.random())
    .filter((p, index) => index < quantity);
};

export const upperFirst = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const toLink = (string) => {
  return string.split(" ").join("-").toLowerCase();
};

export const getDate = () => {
  const date = new Date();
  return `${date.getDate()}/${date
    .getMonth()
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
};
