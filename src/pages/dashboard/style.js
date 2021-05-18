import styled from "styled-components";

export const Container = styled.div`
  background-color: blue;
  padding: 20px;
  display: grid;
  grid-template-columns: 0.4fr 1.6fr;
  grid-template-rows: 0.4fr 0.9fr 0.9fr 1.8fr;
  gap: 0px 0px;
  grid-template-areas:
    "Aside Header"
    "Aside Operations"
    "Aside Addbot"
    "Aside Cards";
`;
