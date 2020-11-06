const getRandomNumber = ({ min = 0, max = 0 }) =>
  Math.floor(Math.random() * (max - min) + min);

module.exports = {
  getRandomNumber,
};
