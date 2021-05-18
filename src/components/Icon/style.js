import styled from "styled-components";

export const IconStyled = styled.img`
  width: 100%;
  max-width: 32px;
  margin-top: 30px;
  padding: 0 5px;
  padding-bottom: 25px;
  border-bottom: ${({ separator }) =>
    separator === "Bottom" && "1px solid var(--gray)"};
  cursor: ${({ isClickable }) => isClickable && "pointer"};
`;
