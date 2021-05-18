import styled from "styled-components";

export const CardContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px 20px;
  grid-template-areas:
    "Card1 Card2"
    "Card3 Card4";
  grid-area: CardContainer;
`;
