
import React, { useState } from "react";
import { MdArrowBack, MdArrowForward, MdClose } from "react-icons/md";
import { Container, Title, Image, Description, ComingSoonTag, ImagesWrapper, SlideshowWrapper, ArrowButton, FullscreenOverlay, FullscreenImage, CloseButton, FullscreenContent } from "./styled";

const ComingSoonProject = ({ title, imageURL, description, extraImageURL }) => {
  const images = [imageURL, extraImageURL].filter(Boolean);
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const openFullscreen = () => setFullscreen(true);
  const closeFullscreen = () => setFullscreen(false);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <Container>
      <Title>{title}</Title>
      <ImagesWrapper style={{ position: 'relative' }}>
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
              style={{ zIndex: current === idx ? 2 : 1, cursor: 'pointer' }}
              onClick={openFullscreen}
            />
          ))}
        </SlideshowWrapper>
        {images.length > 1 && (
          <ArrowButton onClick={handleNext} aria-label="Next image" $right>
            <MdArrowForward size={32} />
          </ArrowButton>
        )}
      </ImagesWrapper>
      {fullscreen && (
        <FullscreenOverlay onClick={closeFullscreen}>
          <FullscreenContent onClick={e => e.stopPropagation()}>
            {images.length > 1 && (
              <ArrowButton onClick={handlePrev} aria-label="Previous image" $left>
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
            <CloseButton onClick={closeFullscreen} aria-label="Close fullscreen">
              <MdClose size={32} />
            </CloseButton>
          </FullscreenContent>
        </FullscreenOverlay>
      )}
      <Description dangerouslySetInnerHTML={{ __html: description }} />
      <ComingSoonTag>Coming Soon</ComingSoonTag>
    </Container>
  );
};

export default ComingSoonProject;
