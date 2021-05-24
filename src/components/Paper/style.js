import isToday from "date-fns/isToday";
import styled from "styled-components";

export const Paper = styled.div`
  max-width: 100%;
  height: 100%;
  border-radius: 8px;

  background-color: var(--white);
  box-shadow: 0px 0px 1px 0.1px rgba(181, 180, 182, 0.85);
  grid-area: ${({ gridArea }) => gridArea};
  cursor: ${({ isToggle }) => isToggle && "pointer"};
`;
