export const getOrbitDimensions = (width) => {
  if (width < 576) {
    return {
      radius: 110,
      cardWidth: 78,
      cardHeight: 64,
      iconSize: 24,
      fontSize: 10,
      centerSize: 72,
    };
  }
  if (width < 1024) {
    return {
      radius: 150,
      cardWidth: 88,
      cardHeight: 74,
      iconSize: 28,
      fontSize: 11,
      centerSize: 92,
    };
  }
  return {
    radius: 190,
    cardWidth: 100,
    cardHeight: 84,
    iconSize: 34,
    fontSize: 12,
    centerSize: 108,
  };
};
