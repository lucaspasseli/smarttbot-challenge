import styled from "styled-components";

export const BreadCrumb = styled.div`
  font-size: 0.8rem;
  @media screen and (min-width: 767px) {
    flex-grow: 1;
    margin: 0 0.3em;
  }
`;

export const Text = styled.span`
  font-weight: 500;

  &::after {
    content: "/";
    margin: 0;
    color: var(--gray);
    font-weight: 200;

    @media screen and (min-width: 340px) {
      margin: 0 0.3em;
    }
  }

  &:nth-last-of-type(1) {
    color: var(--green);
    font-weight: 400;

    &::after {
      content: "";
    }
  }
`;
