import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  gap: 2rem;
  @media screen and (min-width: 767px) {
    flex-direction: row;
    padding: 0 2rem;
    gap: 2rem;
  }
`;
