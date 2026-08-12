import { StarField } from "./styled";

/**
 * Deterministic pseudo-random generator.
 * Using a fixed seed makes the star field reproducible across
 * renders, hydration, and snapshots.
 *
 * @param {number} seed
 * @returns {() => number}
 */
const createSeededRandom = (seed) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

const random = createSeededRandom(12345);

/** @type {Array<{ left: string; top: string; delay: string; size: string }>} */
const stars = Array.from({ length: 60 }).map(() => ({
  left: `${random() * 100}%`,
  top: `${random() * 100}%`,
  delay: `${random() * 3}s`,
  size: random() > 0.7 ? "3px" : "2px",
}));

const StarFieldComponent = () => (
  <StarField>
    {stars.map((star, i) => (
      <span
        key={i}
        style={{
          left: star.left,
          top: star.top,
          animationDelay: star.delay,
          width: star.size,
          height: star.size,
        }}
      />
    ))}
  </StarField>
);

export default StarFieldComponent;
