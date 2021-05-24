import styled from "styled-components";

export const Card = styled.div`
  width: 100%;

  @media screen and (min-width: 795px) {
    width: calc(50% - 0.5rem);
  }
`;

export const Container = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 1500px) {
    gap: 0 50px;
    flex-direction: row;
  }
`;

export const Collumn = styled.div`
  width: 100%;
  gap: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0.5rem 0;

  @media screen and (min-width: 1500px) {
    width: ${({ width }) => width || "50%"};
  }
`;

export const BadgeWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  text-align: center;
  @media screen and (min-width: 340px) {
    flex-direction: row;
  }
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
