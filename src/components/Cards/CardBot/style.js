import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  max-height: 11vw;
`;

export const Collumn = styled.div`
  width: ${({ width }) => width || "50%"};
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const BadgeWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

export const Text = styled.p`
  color: var(--black);
  opacity: 0.7;
  font-size: 0.9rem;
`;
