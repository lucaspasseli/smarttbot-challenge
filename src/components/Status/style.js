import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;

  @media screen and (min-width: 340px) {
    margin: 0;
  }
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
