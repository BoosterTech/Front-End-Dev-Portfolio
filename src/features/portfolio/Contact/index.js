import { useContactVisibility } from "common/ContactVisibilityProvider";
import useContent from "common/useContent";
import { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

import { icons } from "./contactIcons";
import {
  Arrow,
  CardsGrid,
  ContactLabel,
  ContactName,
  ContactTile,
  Eyebrow,
  Header,
  IconFrame,
  Subtitle,
  Wrapper,
} from "./styled";

const Contact = ({ id }) => {
  const { contact } = useContent();
  const contactRef = useRef(null);

  const { setContactVisibility } = useContactVisibility();

  useEffect(() => {
    const currentRef = contactRef.current;

    let observer;
    if (typeof IntersectionObserver !== "undefined" && currentRef) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ isIntersecting }) => {
            if (isIntersecting) {
              setContactVisibility(true);
            } else {
              setContactVisibility(false);
            }
          });
        },
        { threshold: 0 }
      );

      observer.observe(currentRef);
    }

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      ) {
        setContactVisibility(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setContactVisibility]);

  return (
    <Wrapper id={id} ref={contactRef}>
      <Eyebrow aria-hidden="true" />
      <Header>
        Let&apos;s <span>Connect</span>
      </Header>
      <Subtitle>{contact.contactParagraph}</Subtitle>
      <CardsGrid>
        {icons.map((icon) => (
          <ContactTile
            key={icon.id}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            $accent={icon.accent}
            aria-label={`Contact via ${icon.name}`}
          >
            <Arrow $accent={icon.accent} aria-hidden="true">
              <FiArrowUpRight />
            </Arrow>
            <IconFrame $id={icon.id} $accent={icon.accent}>
              <img src={icon.iconURL} alt="" loading="lazy" />
            </IconFrame>
            <ContactName>{icon.name}</ContactName>
            <ContactLabel>{icon.label}</ContactLabel>
          </ContactTile>
        ))}
      </CardsGrid>
    </Wrapper>
  );
};

export default Contact;
