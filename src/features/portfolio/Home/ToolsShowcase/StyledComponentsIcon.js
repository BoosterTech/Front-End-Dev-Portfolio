import styledComponentsIcon from "images/styledComponentsIcon.jpg";
import { useEffect, useState } from "react";

const getThemeSrc = () =>
  document.documentElement.getAttribute("data-theme") === "dark"
    ? styledComponentsIcon
    : `${process.env.PUBLIC_URL}/styledcomponents.svg`;

const StyledComponentsIcon = (props) => {
  const [src, setSrc] = useState(getThemeSrc);

  useEffect(() => {
    const el = document.documentElement;
    const observer = new MutationObserver(() => {
      setSrc(getThemeSrc());
    });

    observer.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return <img src={src} alt="Styled Components" loading="lazy" {...props} />;
};

export default StyledComponentsIcon;
