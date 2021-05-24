import styled from "styled-components";

export const Card = styled.div`
  width: 100%;

  @media screen and (min-width: 795px) {
    width: calc(50% - 0.5rem);
  }

  @media screen and (min-width: 1500px) {
    max-height: 18rem;
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
  gap: 0.1rem;
  display: flex;
  flex-direction: column;

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
  margin: 1rem 0;

  text-align: center;
  @media screen and (min-width: 340px) {
    text-align: left;
    flex-direction: row;
    margin: 0;
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

export const WrapIcons = styled.div`
  opacity: 0.4;
  font-size: 1.2rem;
  display: flex;
  gap: 1rem;
  cursor: pointer;
`;
