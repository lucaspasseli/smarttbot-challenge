import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  @media screen and (min-width: 767px) {
    flex-direction: row;
  }

  text-align: center;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 1.5rem;
  flex-direction: column;
  padding: 1rem;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    padding: 0;
  }
`;

export const TextWrap = styled.div`
  margin: 1rem 0 1rem 0;
  @media screen and (min-width: 767px) {
    margin: 0 0 0 1rem;
    flex-grow: 1;
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

export const Text = styled.span`
  color: var(--gray);
  font-size: 0.9rem;
  font-weight: ${({ isBold }) => (isBold ? "500" : "400")};
`;

export const TextHighlight = styled(Text)`
  color: var(--green);
  display: inline;
  font-weight: ${({ isBold }) => (isBold ? "600" : "400")};
  cursor: pointer;
  opacity: 1;
`;
