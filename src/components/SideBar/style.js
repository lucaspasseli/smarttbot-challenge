import styled from "styled-components";

export const SideBar = styled.div`
  width: 100%;
  transition: 0.4s;
  z-index: 1;

  .isToggle {
    opacity: 0;
    display: inline;
    width: 12rem;
  }

  @media screen and (min-width: 795px) {
    width: 4.5rem;
    height: calc(100vh - 3rem);
    position: fixed;

    &:hover {
      width: 12rem;

      .isToggle {
        opacity: 1;
        transition: 1s;
      }
    }
  }
`;

export const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 795px) {
    margin: 0 2rem;
    flex-direction: column;
    padding: 2rem 1rem;
    align-items: flex-start;
    margin: 0;
  }
`;

export const ToggleItem = styled.div`
  @media screen and (min-width: 795px) {
    min-width: 550px;
    padding-left: ${({ menuItem }) => menuItem && "0.5rem"};
    display: flex;
    gap: ${({ menuItem }) => menuItem && "1rem"};
    align-items: center;
  }
`;
