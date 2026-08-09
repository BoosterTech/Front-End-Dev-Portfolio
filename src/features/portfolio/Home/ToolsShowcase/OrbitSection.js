import { useLayoutEffect, useMemo, useRef, useState } from "react";

import { getOrbitDimensions } from "./getOrbitDimensions";
import {
  OrbitContainer,
  LinesSvg,
  CenterWrapper,
  CenterNode,
  CenterLabel,
  TechCardWrapper,
  TechCard,
  CardInner,
  TechName,
  MobileTrack,
  MobileCard,
} from "./OrbitSection.styles";
import { useWindowWidth } from "./useWindowWidth";

export const OrbitSection = ({
  technologies,
  centerIcon,
  centerLabel = "Next.js",
}) => {
  const windowWidth = useWindowWidth();
  const orbitRef = useRef(null);
  const [availableSize, setAvailableSize] = useState(Number.MAX_SAFE_INTEGER);

  const {
    radius: baseRadius,
    cardWidth,
    cardHeight,
    iconSize,
    fontSize,
    centerSize,
  } = useMemo(() => getOrbitDimensions(windowWidth), [windowWidth]);

  const desiredContainer = baseRadius * 2 + cardWidth + 40;
  const minContainer = cardWidth + 80;
  const containerSize = Math.min(
    desiredContainer,
    Math.max(availableSize, minContainer)
  );
  const radius = (containerSize - cardWidth - 40) / 2;
  const center = containerSize / 2;

  useLayoutEffect(() => {
    const parent = orbitRef.current?.parentElement;
    if (!parent) return;

    const update = () => {
      const rect = parent.getBoundingClientRect();
      setAvailableSize(Math.min(rect.width, rect.height));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(parent);

    return () => ro.disconnect();
  }, []);

  const positions = useMemo(() => {
    const totalItems = technologies.length;
    const angleStep = (Math.PI * 2) / totalItems;
    return technologies.map((_, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return { x, y };
    });
  }, [technologies, radius]);

  return (
    <>
      <OrbitContainer
        ref={orbitRef}
        className="orbit-desktop"
        style={{
          width: containerSize,
          height: containerSize,
          display: windowWidth < 768 ? "none" : "block",
        }}
      >
        <LinesSvg viewBox={`0 0 ${containerSize} ${containerSize}`}>
          <g id="line-glow">
            {positions.map((pos, index) => {
              const endX = center + pos.x;
              const endY = center + pos.y;
              return (
                <line
                  key={`glow-${index}`}
                  x1={center}
                  y1={center}
                  x2={endX}
                  y2={endY}
                  stroke="#38bdf8"
                  strokeWidth="5"
                  strokeOpacity="0.15"
                  strokeLinecap="round"
                />
              );
            })}
          </g>

          <g id="line-core">
            {positions.map((pos, index) => {
              const endX = center + pos.x;
              const endY = center + pos.y;
              return (
                <line
                  key={`core-${index}`}
                  x1={center}
                  y1={center}
                  x2={endX}
                  y2={endY}
                  stroke="#7dd3fc"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                />
              );
            })}
          </g>
        </LinesSvg>

        <CenterWrapper $size={centerSize}>
          <CenterNode
            $size={centerSize}
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={centerIcon} alt={centerLabel} />
            <CenterLabel $size={centerSize}>{centerLabel}</CenterLabel>
          </CenterNode>
        </CenterWrapper>

        {technologies.map((tech, index) => {
          const { x, y } = positions[index];
          return (
            <TechCardWrapper
              key={tech.id || tech.name}
              $width={cardWidth}
              $height={cardHeight}
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <TechCard
                $iconSize={iconSize}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.06,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <CardInner $delay={index * 0.4}>
                  <img src={tech.icon} alt={tech.name} loading="lazy" />
                  <TechName $fontSize={fontSize}>{tech.name}</TechName>
                </CardInner>
              </TechCard>
            </TechCardWrapper>
          );
        })}
      </OrbitContainer>

      <MobileTrack>
        <MobileCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={centerIcon} alt={centerLabel} />
          <TechName $fontSize={12}>{centerLabel}</TechName>
        </MobileCard>
        {technologies.map((tech, index) => (
          <MobileCard
            key={tech.id || tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={tech.icon} alt={tech.name} loading="lazy" />
            <TechName $fontSize={12}>{tech.name}</TechName>
          </MobileCard>
        ))}
      </MobileTrack>
    </>
  );
};
