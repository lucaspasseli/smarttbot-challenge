import * as S from "./style";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const PaperInfo = ({ paper, paperValue, position, profit, type }) => (
  <S.Container>
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
      <S.Text color="green" isMoney>
        <IoMdArrowDropdown />
        R${profit}
      </S.Text>
    </div>
  </S.Container>
);

export default PaperInfo;
