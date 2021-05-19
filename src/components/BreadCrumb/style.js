import styled from "styled-components";

const BreadCrumbStyled = styled.div``;

BreadCrumbStyled.Text = styled.span`
  font-weight: 500;

  &::after {
    content: "/";
    margin: 0 0.3em;
    color: var(--gray);
    font-weight: 200;
  }

  &:nth-last-of-type(1) {
    color: var(--green);
    font-weight: 400;

    &::after {
      content: "";
    }
  }
`;

export default BreadCrumbStyled;
