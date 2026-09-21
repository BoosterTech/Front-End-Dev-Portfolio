import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { themes } from "themes";

import { getOrbitDimensions } from "./getOrbitDimensions";
import {
  OrbitContainer,
  LinesSvg,
  CenterWrapper,
  CenterNode,
  TechCardWrapper,
  TechCardFloat,
  TechCard,
  TechName,
  MarqueeTrack,
  MarqueeContent,
  MarqueeCard,
} from "./OrbitSection.styles";
import { useWindowWidth } from "./useWindowWidth";

const MOBILE_MAX_WIDTH = parseInt(themes.breakpoint.lg, 10);

export const OrbitSection = ({
  technologies,
  centerIcon,
  centerIconWidth,
  centerIconHeight,
  centerLabel = "Next.js",
}) => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= MOBILE_MAX_WIDTH;
  const CIRCLE_CARD_IDS = [
    "redux",
    "typescript",
    "react",
    "vercel",
    "supabase",
    "react-query",
    "redux-toolkit",
    "styled",
  ];
  const PADDED_CARD_IDS = [
    "react",
    "vercel",
    "supabase",
    "styled",
    "redux-toolkit",
    "react-query",
  ];
  const orbitRef = useRef(null);
  const [availableSize, setAvailableSize] = useState(Number.MAX_SAFE_INTEGER);

  const {
    radius: baseRadius,
    cardWidth,
    cardHeight,
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
  }, [isMobile]);

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

  const marqueeItems = [
    {
      id: "__center",
      name: centerLabel,
      icon: centerIcon,
      iconWidth: centerIconWidth,
      iconHeight: centerIconHeight,
      isCenter: true,
    },
    ...technologies,
  ];

  return (
    <>
      {!isMobile && (
        <OrbitContainer
          ref={orbitRef}
          className="orbit-desktop"
          style={{
            width: containerSize,
            height: containerSize,
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
                    stroke="var(--color-cyan)"
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
                    stroke="var(--color-cyan-light)"
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
              <img
                src={centerIcon}
                alt={centerLabel}
                width={centerIconWidth}
                height={centerIconHeight}
                loading="lazy"
              />
            </CenterNode>
          </CenterWrapper>

          {technologies.map((tech, index) => {
            const { x, y } = positions[index];
            return (
              <TechCardWrapper
                key={tech.id || tech.name}
                $width={
                  CIRCLE_CARD_IDS.includes(tech.id)
                    ? Math.min(cardWidth, cardHeight)
                    : cardWidth
                }
                $height={
                  CIRCLE_CARD_IDS.includes(tech.id)
                    ? Math.min(cardWidth, cardHeight)
                    : cardHeight
                }
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
              >
                <TechCardFloat $delay={index * 0.4}>
                  <TechCard
                    $isCircleCard={CIRCLE_CARD_IDS.includes(tech.id)}
                    $isPadded={PADDED_CARD_IDS.includes(tech.id)}
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
                    {typeof tech.icon === "string" ? (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        width={tech.iconWidth}
                        height={tech.iconHeight}
                        loading="lazy"
                      />
                    ) : (
                      tech.icon
                    )}
                  </TechCard>
                </TechCardFloat>
              </TechCardWrapper>
            );
          })}
        </OrbitContainer>
      )}

      <MarqueeTrack>
        <MarqueeContent>
          {[0, 1].map((copy) =>
            marqueeItems.map((tech) => (
              <MarqueeCard
                key={`${copy}-${tech.id || tech.name}`}
                aria-hidden={copy === 1 || undefined}
                $isCircleCard={
                  !tech.isCenter && CIRCLE_CARD_IDS.includes(tech.id)
                }
                $isPadded={PADDED_CARD_IDS.includes(tech.id)}
                whileHover={{ scale: 1.05 }}
              >
                {typeof tech.icon === "string" ? (
                  <img
                    src={tech.icon}
                    alt={tech.isCenter ? "" : tech.name}
                    width={tech.iconWidth}
                    height={tech.iconHeight}
                    loading="lazy"
                  />
                ) : (
                  tech.icon
                )}
                {tech.isCenter && (
                  <TechName $fontSize={11}>{tech.name}</TechName>
                )}
              </MarqueeCard>
            ))
          )}
        </MarqueeContent>
      </MarqueeTrack>
    </>
  );
};
