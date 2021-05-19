import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 48px);
  background-color: var(--gray-light);
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 4vw auto;
  grid-template-rows: 4vw 2fr 1fr 3fr;
  gap: 1.5rem 2rem;
  grid-template-areas:
    "SideBar Header"
    "SideBar Operations"
    "SideBar AddBot"
    "SideBar CardContainer";
`;
