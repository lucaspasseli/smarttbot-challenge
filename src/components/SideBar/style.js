import styled from "styled-components";

export const SideBar = styled.div`
  width: 100%;
  transition: 0.4s;
  z-index: 1;

  @media screen and (min-width: 795px) {
    position: fixed;
    width: 4rem;
    height: calc(100vh - 3rem);

    &:hover {
      width: 13rem;
      transition: 0.4s;
    }
  }
`;

export const Wrap = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 2rem;
  gap: 2rem;

  @media screen and (min-width: 795px) {
    flex-direction: column;
    padding: 2rem 0;
    margin: 0;
  }
`;
