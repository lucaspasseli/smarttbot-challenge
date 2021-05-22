import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem;
`;

export const Wrap = styled.div`
  display: flex;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray);
`;

export const PapersWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export const Text = styled.p`
  color: var(--black);
  opacity: 0.7;
  font-size: 0.9rem;
  margin: 1rem 0;
`;
