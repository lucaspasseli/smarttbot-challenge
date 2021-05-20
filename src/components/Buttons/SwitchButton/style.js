import styled from "styled-components";
import LogoSmarttBot from "../../../assets/logoSmarttBot.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Text = styled.span`
  color: ${({ isBold }) => (isBold ? "var(--black)" : "var(--gray)")};
  font-weight: ${({ isBold }) => (isBold ? "500" : "400")};
`;
export const Toggle = styled.div`
  position: relative;
  display: inline-block;
  width: 4rem;
  height: 1.75rem;

  border-radius: 15px;
  background: url(${LogoSmarttBot}) no-repeat;
  background-size: 130%;
  background-position: -0.9rem -0.5rem;
`;
export const Slider = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 4rem;
  height: 1.75rem;
  border-radius: 15px;
  background-color: rgba(181, 180, 182, 0.6);
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 4px;
    background-color: var(--white);
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const Input = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${Slider} {
    background-color: rgba(27, 163, 156, 0.6);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 2.5rem;
      transition: 0.2s;
    }
  }
`;
