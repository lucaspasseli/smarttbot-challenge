import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 1rem;
  display: inline-block;

  @media screen and (min-width: 767px) {
    text-align: ${({ alignX }) => alignX};
    margin-left: ${({ alignX }) => alignX === "right" && "auto"};
  }
`;

export const Text = styled.p`
  color: var(--black);
  opacity: 0.7;
  font-size: 0.9rem;
`;

export const NumberText = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  color: ${({ isMoney, numberValue }) =>
    isMoney && numberValue >= 0
      ? "var(--green)"
      : isMoney && numberValue < 0
      ? "var(--orange)"
      : "var(--black)"};
  margin-top: 0.3rem;

  &::before {
    content: "${({ isMoney }) => isMoney && "R$ "}";
  }
`;
