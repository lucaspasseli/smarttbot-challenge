import isToday from "date-fns/isToday";
import styled from "styled-components";

export const Paper = styled.div`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  border-radius: 8px;

  background-color: var(--white);
  box-shadow: 0px 0px 1px 0.1px rgba(181, 180, 182, 0.85);
  position: ${({ position }) => position && "fixed"};
  grid-area: ${({ gridArea }) => gridArea};
  cursor: ${({ isToggle }) => isToggle && "pointer"};
  transition: 0.4s;

  &:hover {
    width: ${({ isToggle }) => isToggle && "13rem"};
    z-index: ${({ isToggle }) => isToggle && "1"};
    /* transition: 0.4s; */
  }
`;
