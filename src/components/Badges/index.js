import * as S from "./style";

const Badge = ({ name, isHighlight }) => (
  <S.Container isHighlight={isHighlight}>
    <S.Text isHighlight={isHighlight}>{name}</S.Text>
  </S.Container>
);

export default Badge;
