import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 46%;
  align-items: center;
`;

export const Line = styled.div`
  flex-grow: 1;
  border-top: 2.5px dotted var(--gray);
  opacity: 0.6;
  margin: 0 1rem;
`;

export const Text = styled.span`
  opacity: ${({ isBold }) => (isBold ? "1" : "0.6")};
  font-weight: ${({ isBold }) => (isBold ? "500" : "300")};
`;
