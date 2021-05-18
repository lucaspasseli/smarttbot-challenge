import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 40px);
  background-color: var(--gray-light);
  padding: 20px;
  display: grid;
  grid-template-columns: 4vw auto;
  grid-template-rows: 4vw 2fr 1fr 3fr;
  gap: 20px 30px;
  grid-template-areas:
    "SideBar Header"
    "SideBar Operations"
    "SideBar AddBot"
    "SideBar CardContainer";
`;
