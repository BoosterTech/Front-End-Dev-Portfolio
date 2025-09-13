import { icons } from "./contactIcons";
import { ContactIconStyled, IconsWrapper, Header, Wrapper } from "./styled";

import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../../Redux/languageSlice";
import { useTheme } from "styled-components";
import { useEffect, useRef } from "react";
import { setContactVisibility } from "../../../Redux/generalSlice";

const Contact = ({ id }) => {
  const language = useSelector(selectLanguage);
  const theme = useTheme();
  const contactRef = useRef("");

  const dispatch = useDispatch();

  useEffect(() => {
    const currentRef = contactRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            dispatch(setContactVisibility(true));
          } else {
            dispatch(setContactVisibility(false));
          }
        });
      },
      { threshold: 1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [dispatch]);

  return (
    <Wrapper id={id} ref={contactRef}>
      <Header>{theme[language].contact.contactParagraph}</Header>
      <IconsWrapper>
        {icons.map((icon, index) => (
          <a
            style={{ display: "flex" }}
            key={icon.id}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Contact via ${icon.name || 'social media'}`}
          >
            <ContactIconStyled 
              src={icon.iconURL} 
              alt={`${icon.name || 'Contact'} icon`}
              index={index}
            />
          </a>
        ))}
      </IconsWrapper>
    </Wrapper>
  );
};

export default Contact;

