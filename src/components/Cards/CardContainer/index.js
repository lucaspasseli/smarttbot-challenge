import CardBot from "../CardBot";
import { CardContainerStyled } from "./style";

const CardContainer = () => (
  <CardContainerStyled>
    <CardBot number="1" />
    <CardBot number="2" />
    <CardBot number="3" />
    <CardBot number="4" />
  </CardContainerStyled>
);

export default CardContainer;
