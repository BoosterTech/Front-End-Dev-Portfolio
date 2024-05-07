import { useDispatch, useSelector } from "react-redux";
import { selectIsLanguageEnglish, toogleLanguage } from "../languageSlice";
import {
  Button,
  Wrapper,
  Text1,
  Text2,
  IconWrapper,
  Box,
  Icon1,
  Icon2,
} from "./styled";
import PLIcon from "./PolandIcon.png";
import IRLIcon from "./IrelandIcon.png";

export const LanguageSwitch = () => {
  const isLanguageEnglish = useSelector(selectIsLanguageEnglish);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toogleLanguage())}>
        <Text1 isCurrent={isLanguageEnglish}>PL</Text1>
        <Box>
          <IconWrapper moveToRight={isLanguageEnglish}>
            <Icon1 src={IRLIcon} alt="flagIcon" isCurrent={isLanguageEnglish}/>

            <Icon2 src={PLIcon} alt="flagIcon" isCurrent={isLanguageEnglish} />
          </IconWrapper>
        </Box>
        <Text2 isCurrent={isLanguageEnglish}>IRL</Text2>
      </Button>
    </Wrapper>
  );
};
