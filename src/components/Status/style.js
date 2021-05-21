import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ isRunning }) =>
    isRunning ? "var(--green)" : "var(--gray)"};
  border-radius: 50%;
`;

export const Text = styled.p`
  color: var(--black);
  opacity: 0.7;
  font-size: 0.9rem;
`;
