import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  gap: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
`;

export const Wrap = styled.div`
  flex-grow: 1;
`;

export const Position = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  opacity: 0.6;
`;

export const Text = styled.p`
  color: ${({ color }) => `var(--${color})` || " var(--black)"};
  font-weight: ${({ weight }) => weight || "400"};
  margin: ${({ isMoney }) =>
    isMoney ? "0.2rem 0.2rem 0.2rem -0.7rem" : "0.2rem"};
`;
