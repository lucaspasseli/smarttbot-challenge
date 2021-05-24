import styled from "styled-components";
export const Icon = styled.img`
  width: ${({ width }) => width};

  padding: ${({ separator }) => separator === "Right" && ".3rem 2rem .3rem 0"};
  padding: ${({ separator }) => separator === "Bottom" && "0 .3rem 2rem"};

  border-right: ${({ separator }) =>
    separator === "Right" && "1px solid var(--gray)"};

  border-bottom: ${({ separator }) =>
    separator === "Bottom" && "1px solid var(--gray)"};

  cursor: ${({ isClickable }) => isClickable && "pointer"};
  display: ${({ onDesktop }) => onDesktop && "none"};

  @media screen and (min-width: 795px) {
    display: ${({ onDesktop }) => onDesktop && "block"};
  }
`;
