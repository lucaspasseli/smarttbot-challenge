import * as S from "./style";
import Paper from "../../Paper";
import Status from "../../Status";
import Badge from "../../Badges";
import Number from "../../Number";
import PaperInfo from "../../PaperInfo";
import Graphic from "../../Graphic";

const CardBot = ({ number }) => (
  <Paper gridArea={`Card${number}`}>
    <S.Container>
      <S.Collumn width="40%">
        <S.Row>
          <div>
            <S.Title>Título do Robô</S.Title>
            <S.Text>#179301</S.Text>
          </div>
          <Status isRunning />
        </S.Row>
        <S.BadgeWrap>
          <Badge name="Pessimista" />
          <Badge name="WIN%" />
          <Badge name="Price Action" />
        </S.BadgeWrap>
        <PaperInfo />
        <S.Row>
          <Number description="Saldo diário" isMoney numberValue={-220.0} />
          <Number description="Trades no dia" alignX="right" numberValue={7} />
        </S.Row>
      </S.Collumn>
      <S.Collumn width="60%">
        <S.Row>
          <div>
            <S.Title>Histórico do dia</S.Title>
            <S.Text>Última atualização • 16:00</S.Text>
            <Graphic />
          </div>
        </S.Row>
      </S.Collumn>
    </S.Container>
  </Paper>
);

export default CardBot;
