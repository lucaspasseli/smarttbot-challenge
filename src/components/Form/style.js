import styled from "styled-components";

export const Form = styled.form`
  width: 85vw;
  height: auto;
  text-align: center;

  @media screen and (min-width: 540px) {
    width: 65vw;
    text-align: left;
  }

  @media screen and (min-width: 895px) {
    width: 40vw;
  }
`;

export const Label = styled.label`
  color: ${({ isHighlight }) => (isHighlight ? "var(--green)" : "var(--gray)")};
  margin: 2rem 0 0.5rem;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: var(--green);
  color: var(--white);
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
  max-width: ${({ type }) => (type === "text" ? "16rem" : "4rem")};
  font-weight: 500;
  font-size: 1rem;
  color: var(--green);
  cursor: ${({ type }) => type === "radio" && "pointer"};
  margin: 0 auto;
  margin: ${({ type }) => type === "radio" && "1rem auto"};
  display: ${({ type }) => type === "radio" && "block"};
  text-align: center;

  @media screen and (min-width: 540px) {
    margin: 0;
    margin: ${({ type }) => type === "radio" && "1rem"};
    display: inline;
    text-align: left;
  }

  &:focus {
    border-color: var(--green);
    max-width: ${({ type }) => type === "text" && "100%"};
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-between;
  height: 100%;
`;

export const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  height: 100%;
  padding: 2rem;
`;

export const Select = styled.select`
  padding: 1rem;
  outline: none;
  cursor: pointer;
`;

export const Back = styled.div`
  position: relative;
  top: 2rem;
  left: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    color: var(--green);
  }
`;
