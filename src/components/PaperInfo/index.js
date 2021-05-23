import * as S from "./style";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const PaperInfo = ({ paper, paperValue, position, profit, type }) => (
  <S.Container>
    {(paper && paperValue && position && profit && type && (
      <>
        <S.Position>{position}</S.Position>
        <S.Wrap>
          <S.Text weight="500" color="gray">
            {paper}
          </S.Text>
          <S.Text>{type ? "Compra" : "Venda"}</S.Text>
        </S.Wrap>
        <div>
          <S.Text weight="300" color="gray">
            {paperValue}
          </S.Text>
          <S.Text color={profit >= 0 ? "green" : "orange"} isMoney>
            {profit >= 0 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            R${profit}
          </S.Text>
        </div>
      </>
    )) || (
      <S.Text weight="500" color="gray">
        Último papel não encontrado
      </S.Text>
    )}
  </S.Container>
);

export default PaperInfo;
