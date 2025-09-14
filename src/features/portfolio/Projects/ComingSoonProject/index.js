import React, { useState } from "react";
import comingSoonImg from "../../../../images/comingSoon.png";
import wtm3Img from "../../../../images/wtm3.png";
import wtm4Img from "../../../../images/wtm4.png";
import wtm5Img from "../../../../images/wtm5.png";
import wtm6Img from "../../../../images/wtm6.png";
import { ComingSoonImage } from "./styled";
import { MdArrowBack, MdArrowForward, MdClose } from "react-icons/md";
import {
  Container,
  Title,
  Image,
  Description,
  ImagesWrapper,
  SlideshowWrapper,
  ArrowButton,
  FullscreenOverlay,
  FullscreenImage,
  CloseButton,
  FullscreenContent,
} from "./styled";
import { MusicGenerationHeader } from "./styled";
import { SlideshowNote } from "./styled";

const ComingSoonProject = ({ title, imageURL, description, extraImageURL }) => {
  const images = [
    imageURL,
    extraImageURL,
    wtm3Img,
    wtm4Img,
    wtm5Img,
    wtm6Img
  ].filter(Boolean);
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const openFullscreen = () => setFullscreen(true);
  const closeFullscreen = () => setFullscreen(false);

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <Container>
      <ComingSoonImage src={comingSoonImg} alt="Coming Soon" />
      <Title>{title}</Title>
      <ImagesWrapper style={{ position: "relative" }}>
        {images.length > 1 && (
          <ArrowButton onClick={handlePrev} aria-label="Previous image" $left>
            <MdArrowBack size={32} />
          </ArrowButton>
        )}
        <SlideshowWrapper>
          {images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={title + " screenshot"}
              $visible={current === idx}
              style={{ zIndex: current === idx ? 2 : 1, cursor: "pointer" }}
              onClick={openFullscreen}
            />
          ))}
        </SlideshowWrapper>
        <SlideshowNote>(Click image to zoom)</SlideshowNote>
        {images.length > 1 && (
            <ArrowButton onClick={handleNext} aria-label="Next image" $right>
            <MdArrowForward size={32} />
          </ArrowButton>
        )}
      </ImagesWrapper>
      {fullscreen && (
        <FullscreenOverlay onClick={closeFullscreen}>
          <FullscreenContent onClick={(e) => e.stopPropagation()}>
            {images.length > 1 && (
              <ArrowButton
                onClick={handlePrev}
                aria-label="Previous image"
                $left
              >
                <MdArrowBack size={32} />
              </ArrowButton>
            )}
            {images.map((img, idx) => (
              <FullscreenImage
                key={idx}
                src={img}
                alt={title + " fullscreen"}
                $visible={current === idx}
                style={{ zIndex: current === idx ? 2 : 1 }}
              />
            ))}
            {images.length > 1 && (
              <ArrowButton onClick={handleNext} aria-label="Next image" $right>
                <MdArrowForward size={32} />
              </ArrowButton>
            )}
            <CloseButton
              onClick={closeFullscreen}
              aria-label="Close fullscreen"
            >
              <MdClose size={32} />
            </CloseButton>
          </FullscreenContent>
        </FullscreenOverlay>
      )}
      {/* Extract first sentence and rest from description */}
      {(() => {
        const match = description.match(/<p>(.*?)<\/p>(.*)/s);
        if (match) {
          return (
            <>
              <MusicGenerationHeader
                dangerouslySetInnerHTML={{ __html: match[1] }}
              />
              <Description
                dangerouslySetInnerHTML={{ __html: `<p>${match[2]}` }}
              />
            </>
          );
        }
        return (
          <Description dangerouslySetInnerHTML={{ __html: description }} />
        );
      })()}
    </Container>
  );
};

export default ComingSoonProject;
