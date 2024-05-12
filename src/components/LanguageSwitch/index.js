import { Wrapper, Icon, IconsWrapper } from "./styled";
import PLIcon from "./PolandIcon.png";
import IRLIcon from "./IrelandIcon.png";
import ESPIcon from "./SpainIcon.png";

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
