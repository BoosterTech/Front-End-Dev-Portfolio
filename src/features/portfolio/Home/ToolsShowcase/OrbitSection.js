import { useMediaQuery } from "common/useMediaQuery";
import { useEffect, useMemo, useRef, useState } from "react";
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
  const canHover = useMediaQuery("(hover: hover)");
  const isMobile = windowWidth <= MOBILE_MAX_WIDTH;
  const CIRCLE_CARD_IDS = [
    "redux",
    "typescript",
    "react",
    "vercel",
    "supabase",
    "react-query",
    "styled",
  ];
  const PADDED_CARD_IDS = [
    "react",
    "vercel",
    "supabase",
    "styled",
    "react-query",
  ];
  const orbitRef = useRef(null);
  const [availableSize, setAvailableSize] = useState(Number.MAX_SAFE_INTEGER);
  const [marqueePaused, setMarqueePaused] = useState(false);
  const resumeTimer = useRef(null);
  const marqueeTrackRef = useRef(null);

  const handleMarqueeTap = () => {
    clearTimeout(resumeTimer.current);
    if (marqueePaused) return setMarqueePaused(false);
    setMarqueePaused(true);
    resumeTimer.current = setTimeout(() => setMarqueePaused(false), 4000);
  };

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  useEffect(() => {
    if (!marqueePaused) return undefined;
    const resume = (e) => {
      if (!marqueeTrackRef.current?.contains(e.target)) setMarqueePaused(false);
    };
    window.addEventListener("pointerdown", resume);
    return () => window.removeEventListener("pointerdown", resume);
  }, [marqueePaused]);

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

  useEffect(() => {
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
      return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
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
                    $hasLabel={tech.showLabel}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.35 }}
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
                      />
                    ) : (
                      tech.icon
                    )}
                    {tech.showLabel && (
                      <TechName $fontSize={13} $onLight>
                        {tech.name}
                      </TechName>
                    )}
                  </TechCard>
                </TechCardFloat>
              </TechCardWrapper>
            );
          })}
        </OrbitContainer>
      )}

      {isMobile && (
        <MarqueeTrack ref={marqueeTrackRef}>
          <MarqueeContent $paused={marqueePaused} onClick={handleMarqueeTap}>
            {[0, 1].map((copy) =>
              marqueeItems.map((tech) => (
                <MarqueeCard
                  key={`${copy}-${tech.id || tech.name}`}
                  aria-hidden={copy === 1 || undefined}
                  $isCircleCard={
                    tech.isCenter || CIRCLE_CARD_IDS.includes(tech.id)
                  }
                  $isPadded={tech.isCenter || PADDED_CARD_IDS.includes(tech.id)}
                  $hasLabel={tech.showLabel}
                  whileHover={canHover ? { scale: 1.15 } : undefined}
                >
                  {typeof tech.icon === "string" ? (
                    <img
                      src={tech.icon}
                      alt={tech.isCenter || tech.showLabel ? "" : tech.name}
                      width={tech.iconWidth}
                      height={tech.iconHeight}
                    />
                  ) : (
                    tech.icon
                  )}
                  {tech.showLabel && (
                    <TechName $fontSize={12} $onLight>
                      {tech.name}
                    </TechName>
                  )}
                </MarqueeCard>
              ))
            )}
          </MarqueeContent>
        </MarqueeTrack>
      )}
    </>
  );
};
