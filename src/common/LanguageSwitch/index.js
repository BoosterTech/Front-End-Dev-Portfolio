import { Wrapper, Icon, IconsWrapper } from "./styled";
import PLIcon from "../../images/PolandIcon.png";
import IRLIcon from "../../images/IrelandIcon.png";
import ESPIcon from "../../images/SpainIcon.png";

export const LanguageSwitch = () => {
  return (
    <Wrapper>
      <IconsWrapper>
        <Icon src={IRLIcon} alt="IRLflagIcon" />
        <Icon src={PLIcon} alt="PLflagIcon" />
        <Icon src={ESPIcon} alt="ESPflagIcon" />
      </IconsWrapper>
    </Wrapper>
  );
};
