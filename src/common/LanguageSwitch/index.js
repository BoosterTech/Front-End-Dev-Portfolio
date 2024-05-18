import { Wrapper, Icon, IconsWrapper } from "./styled";
import PLIcon from "../../images/PolandIcon.png";
import IRLIcon from "../../images/IrelandIcon.png";
import ESPIcon from "../../images/SpainIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLanguage } from "../../Redux/languageSlice";
import { useState } from "react";

export const LanguageSwitch = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  const [isActive, setIsActive] = useState(language);

  const handleClick = (language) => () => {
    dispatch(setLanguage(language));
    setIsActive(language);
  };

  return (
    <Wrapper>
      <IconsWrapper>
        <Icon
          src={IRLIcon}
          alt="IRLflagIcon"
          onClick={handleClick("English")}
          $isActive={isActive === "English"}
        />
        <Icon
          src={PLIcon}
          alt="PLflagIcon"
          onClick={handleClick("Polish")}
          $isActive={isActive === "Polish"}
        />
        <Icon
          src={ESPIcon}
          alt="ESPflagIcon"
          onClick={handleClick("Spanish")}
          $isActive={isActive === "Spanish"}
        />
      </IconsWrapper>
    </Wrapper>
  );
};
