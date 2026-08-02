import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
`;

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const OrbitContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;

const LinesSvg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: visible;

  line {
    stroke-linecap: round;
  }
`;

const CenterWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  transform: translate(-50%, -50%);
  z-index: 2;
  pointer-events: none;
`;

const BreathingRing = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(56, 189, 248, 0.3) 0%,
    rgba(56, 189, 248, 0.12) 45%,
    rgba(56, 189, 248, 0) 70%
  );
  box-shadow: 0 0 60px 20px rgba(56, 189, 248, 0.22);
  z-index: 0;
  pointer-events: none;
`;

const CenterNode = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: radial-gradient(
    circle at 35% 35%,
    rgba(255, 255, 255, 0.35) 0%,
    rgba(40, 142, 221, 0.35) 45%,
    rgba(10, 30, 55, 0.85) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.1),
    0 0 40px 8px rgba(40, 142, 221, 0.25);
  backdrop-filter: blur(12px);
  pointer-events: auto;

  img {
    width: ${({ $size }) => $size * 0.42}px;
    height: ${({ $size }) => $size * 0.42}px;
    object-fit: contain;
  }
`;

const CenterLabel = styled.span`
  font-size: ${({ $size }) => Math.max(10, $size * 0.095)}px;
  font-weight: 800;
  color: var(--color-text-primary);
  letter-spacing: 0.02em;
`;

const TechCardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  z-index: 2;
  pointer-events: none;
`;

const TechCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 18px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(40, 142, 221, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px;
  cursor: pointer;
  pointer-events: auto;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: rgba(40, 142, 221, 0.6);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35),
      0 0 28px 4px rgba(40, 142, 221, 0.25);
  }

  img {
    width: ${({ $iconSize }) => $iconSize}px;
    height: ${({ $iconSize }) => $iconSize}px;
    object-fit: contain;
  }
`;

const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const TechName = styled.span`
  font-size: ${({ $fontSize }) => $fontSize}px;
  font-weight: 700;
  color: var(--color-text-primary);
  text-align: center;
  line-height: 1.2;
`;

const MobileTrack = styled.div`
  display: none;
  gap: var(--spacing-md);
  overflow-x: auto;
  padding: var(--spacing-md) 0;
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
  }
`;

const MobileCard = styled(motion.div)`
  flex: 0 0 auto;
  width: 110px;
  height: 100px;
  border-radius: 18px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
`;

const getDimensions = (width) => {
  if (width < 576) {
    return { radius: 130, cardWidth: 90, cardHeight: 78, iconSize: 28, fontSize: 11, centerSize: 86 };
  }
  if (width < 1024) {
    return { radius: 190, cardWidth: 105, cardHeight: 90, iconSize: 34, fontSize: 12, centerSize: 110 };
  }
  return { radius: 260, cardWidth: 120, cardHeight: 100, iconSize: 40, fontSize: 13, centerSize: 130 };
};

export const OrbitSection = ({ technologies, centerIcon, centerLabel = "Next.js" }) => {
  const windowWidth = useWindowWidth();
  const orbitRef = useRef(null);
  const [availableSize, setAvailableSize] = useState(Number.MAX_SAFE_INTEGER);

  const { radius: baseRadius, cardWidth, cardHeight, iconSize, fontSize, centerSize } = useMemo(
    () => getDimensions(windowWidth),
    [windowWidth]
  );

  const desiredContainer = baseRadius * 2 + cardWidth + 80;
  const minContainer = cardWidth + 120;
  const containerSize = Math.min(desiredContainer, Math.max(availableSize, minContainer));
  const radius = (containerSize - cardWidth - 80) / 2;
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

  const progress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [progress]);

  const glowScale = useTransform(progress, [0, 0.5, 1], [1, 1.04, 1]);
  const glowOpacity = useTransform(progress, [0, 0.5, 1], [0.5, 0.8, 0.5]);
  const pulseRadius = useTransform(
    progress,
    [0, 0.5, 1],
    [(centerSize / 2) * 0.8, (centerSize / 2) * 0.8, (centerSize / 2) * 3.5]
  );
  const pulseOpacity = useTransform(
    progress,
    [0, 0.5, 0.55, 0.9, 1],
    [0, 0, 0.35, 0.35, 0]
  );

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
          <defs>
            <filter id="pulseBlur" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.circle
            cx={center}
            cy={center}
            r={pulseRadius}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3"
            strokeOpacity="0.25"
            strokeLinecap="round"
            filter="url(#pulseBlur)"
            style={{ opacity: pulseOpacity }}
          />

          <motion.circle
            cx={center}
            cy={center}
            r={pulseRadius}
            fill="none"
            stroke="#e0f2fe"
            strokeWidth="1"
            strokeLinecap="round"
            style={{ opacity: pulseOpacity }}
          />

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
          <BreathingRing
            scale={glowScale}
            style={{ opacity: glowOpacity }}
          />
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
