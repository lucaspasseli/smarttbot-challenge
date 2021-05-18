import styled from "styled-components";

export const PaperStyled = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 8px;

  background-color: var(--white);
  box-shadow: 0px 0px 1px 0.1px var(--gray);

  grid-area: ${({ gridArea }) => gridArea};
`;
