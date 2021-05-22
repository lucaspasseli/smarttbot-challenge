import Badge from "../Badges";
import * as S from "./style";

const Papers = ({ name, trasactions }) => (
  <S.Container>
    <Badge name={name} isHighlight />
    <S.Line />
    <S.Text isBold>
      {trasactions} <S.Text>transações</S.Text>
    </S.Text>
  </S.Container>
);

export default Papers;
