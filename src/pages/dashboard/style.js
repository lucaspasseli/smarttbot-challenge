import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 48px);
  background-color: var(--gray-light);
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 4vw auto;
  grid-template-rows: min(4rem) 1fr min(5.5rem) 1fr;
  gap: 1rem 2rem;
  grid-template-areas:
    "SideBar Header"
    "SideBar Operations"
    "SideBar AddBot"
    "SideBar CardContainer";
`;
