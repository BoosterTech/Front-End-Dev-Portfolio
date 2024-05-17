import { Wrapper, Icon, IconsWrapper } from "./styled";
import PLIcon from "../../images/PolandIcon.png";
import IRLIcon from "../../images/IrelandIcon.png";
import ESPIcon from "../../images/SpainIcon.png";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../Redux/languageSlice";

export const LanguageSwitch = () => {
  const dispatch = useDispatch();

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
        />
        <Icon src={PLIcon} alt="PLflagIcon" onClick={handleClick("Polish")} />
        <Icon
          src={ESPIcon}
          alt="ESPflagIcon"
          onClick={handleClick("Spanish")}
        />
      </IconsWrapper>
    </Wrapper>
  );
};
