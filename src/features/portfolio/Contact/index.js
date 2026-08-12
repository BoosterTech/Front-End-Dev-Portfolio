import useContent from "common/useContent";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setContactVisibility } from "slices/generalSlice";

import { icons } from "./contactIcons";
import { ContactIconStyled, IconsWrapper, Header, Wrapper } from "./styled";

const Contact = ({ id }) => {
  const { contact } = useContent();
  const contactRef = useRef("");

  const dispatch = useDispatch();

  useEffect(() => {
    const currentRef = contactRef.current;

    let observer;
    if (typeof IntersectionObserver !== "undefined" && currentRef) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ isIntersecting }) => {
            if (isIntersecting) {
              dispatch(setContactVisibility(true));
            } else {
              dispatch(setContactVisibility(false));
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
        dispatch(setContactVisibility(true));
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <Wrapper id={id} ref={contactRef}>
      <Header>{contact.contactParagraph}</Header>
      <IconsWrapper>
        {icons.map((icon, index) => (
          <a
            style={{ display: "flex" }}
            key={icon.id}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Contact via ${icon.name || "social media"}`}
          >
            <ContactIconStyled
              src={icon.iconURL}
              alt={`${icon.name || "Contact"} icon`}
              index={index}
            />
          </a>
        ))}
      </IconsWrapper>
    </Wrapper>
  );
};

export default Contact;
