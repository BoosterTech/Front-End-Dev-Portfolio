import { themes } from "themes";

const COMPACT_MAX_PX = parseInt(themes.breakpoint.xl, 10);

export const getOrbitDimensions = (width) => {
  if (width < COMPACT_MAX_PX) {
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
