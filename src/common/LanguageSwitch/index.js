import { Wrapper, Icon, IconsWrapper } from "./styled";
import PLIcon from "../../images/PolandIcon.png";
import IRLIcon from "../../images/IrelandIcon.png";
import ESPIcon from "../../images/SpainIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLanguage } from "../../Redux/languageSlice";

export const LanguageSwitch = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  const handleClick = (language) => () => {
    dispatch(setLanguage(language));
  };

  return (
    <Wrapper>
      <IconsWrapper>
        <Icon
          src={IRLIcon}
          alt="IRLflagIcon"
          onClick={handleClick("English")}
          $isActive={language === "English"}
        />
        <Icon
          src={PLIcon}
          alt="PLflagIcon"
          onClick={handleClick("Polish")}
          $isActive={language === "Polish"}
        />
        <Icon
          src={ESPIcon}
          alt="ESPflagIcon"
          onClick={handleClick("Spanish")}
          $isActive={language === "Spanish"}
        />
      </IconsWrapper>
    </Wrapper>
  );
};
