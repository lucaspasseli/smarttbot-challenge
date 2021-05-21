import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 48px);
  background-color: var(--gray-light);
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 4vw auto;
  grid-template-rows: 1fr 4fr 2fr 4fr;
  gap: 1rem 2rem;
  grid-template-areas:
    "SideBar Header"
    "SideBar Operations"
    "SideBar AddBot"
    "SideBar CardContainer";
`;
