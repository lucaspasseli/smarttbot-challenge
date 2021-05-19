import CardBot from "../CardBot";
import * as S from "./style";

const CardContainer = () => (
  <S.Container>
    <CardBot number="1" />
    <CardBot number="2" />
    <CardBot number="3" />
    <CardBot number="4" />
  </S.Container>
);

export default CardContainer;
