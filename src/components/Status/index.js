import * as S from "./style";

const Status = ({ isRunning }) => (
  <S.Container>
    <S.Circle isRunning={isRunning} />
    <S.Text>{isRunning ? "Em execução" : "Parado"}</S.Text>
  </S.Container>
);

export default Status;
