const round = (value, decimals = 1) => {
  const factor = 10 ** decimals;

  return Math.round(value * factor) / factor;
};

export default round;
