import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Wrap = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
`;

export const TextWrap = styled.div`
  margin-left: 2rem;
  flex-grow: 1;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`;

export const Text = styled.p`
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
