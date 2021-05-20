import * as S from "./style";

const Number = ({ description, isMoney, alignX, numberValue }) => {
  return (
    <S.Container alignX={alignX}>
      <S.Text>{description}</S.Text>
      <S.NumberText isMoney={isMoney} numberValue={numberValue}>
        {isMoney ? numberValue?.toString().replace(/\./g, ",") : numberValue}
      </S.NumberText>
    </S.Container>
  );
};

export default Number;
