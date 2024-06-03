import { icons } from "./contactIcons";
import { ContactIconStyled, IconsWrapper, Header, Wrapper } from "./styled";

import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../../Redux/languageSlice";
import { useTheme } from "styled-components";
import { useEffect, useRef } from "react";
import {
  selectContactVisibility,
  setContactVisibility,
} from "../../../Redux/generalSlice";

const Contact = ({ id }) => {
  const language = useSelector(selectLanguage);
  const theme = useTheme();
  const contactRef = useRef("");

  const isContactVisible = useSelector(selectContactVisibility);
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            console.log("Contact section is visible");
            dispatch(setContactVisibility(true));
          } else {
            console.log("Contact section is not visible");
            dispatch(setContactVisibility(false));
          }
        });
      },
      { threshold: 1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
      console.log("Contact section is being observed ref");
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
        console.log("Contact section is not being observed ref");
      }
    };
  }, []);

  return (
    <Wrapper id={id} ref={contactRef}>
      <Header>{theme[language].contact.contactParagraph}</Header>
      <IconsWrapper>
        {icons.map((icon) => (
          <a
            style={{ display: "flex" }}
            key={icon.id}
            href={icon.link}
            target="blank"
            rel="noopener noreferre"
          >
            <ContactIconStyled key={icon.id} src={icon.iconURL} />
          </a>
        ))}
      </IconsWrapper>
    </Wrapper>
  );
};

export default Contact;
