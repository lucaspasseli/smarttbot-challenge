import styled from "styled-components";

export const Container = styled.div`
  border: ${({ isHighlight }) => !isHighlight && "1px solid rgb(0, 0, 0, 0.1)"};
  padding: 0.2rem;
  border-radius: 0.2rem;
  display: inline;
  width: fit-content;
  background-color: ${({ isHighlight }) => isHighlight && "var(--green)"};
`;

export const Text = styled.span`
  font-size: 0.8rem;
  font-weight: ${({ isHighlight }) => isHighlight && "500"};
  color: ${({ isHighlight }) => (isHighlight ? "var(--white)" : "var(--gray)")};
`;
