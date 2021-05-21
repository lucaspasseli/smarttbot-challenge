import * as S from "./style";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const PaperInfo = ({ paper }) => (
  <S.Container>
    <S.Position>30</S.Position>
    <S.Wrap>
      <S.Text weight="500" color="gray">
        WINGB20
      </S.Text>
      <S.Text>Compra</S.Text>
    </S.Wrap>
    <div>
      <S.Text weight="300" color="gray">
        114.093.33
      </S.Text>
      <S.Text color="green" isMoney>
        <IoMdArrowDropdown />
        R$92,33
      </S.Text>
    </div>
  </S.Container>
);

export default PaperInfo;
