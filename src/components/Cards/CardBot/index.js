import * as S from "./style";
import Paper from "../../Paper";
import Status from "../../Status";
import Badge from "../../Badges";
import Number from "../../Number";
import PaperInfo from "../../PaperInfo";
import Graphic from "../../Graphic";
import { getTodayMovimentations } from "../../../utils/getTodayMovimentations";
import { GiPauseButton } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";

const CardBot = ({
  number,
  title,
  id,
  running,
  stock_codes,
  strategy,
  daily_balance,
  type,
  movimentations,
  last_paper,
}) => {
  const todayMovimentations = getTodayMovimentations(movimentations) || [];
  const lastUpdate = todayMovimentations[
    todayMovimentations.length - 1
  ]?.date.substring(10, 16);

  console.log(todayMovimentations, "aaaaaaaaaaa");
  return (
    <S.Card>
      <Paper>
        <S.Container>
          <S.Collumn>
            <S.Row>
              <div>
                <S.Title>{title}</S.Title>
                <S.Text>#{id}</S.Text>
              </div>
              <Status isRunning={running} />
            </S.Row>
            <S.BadgeWrap>
              <Badge name={strategy} />
              <Badge name={stock_codes} />
              <Badge name={type} />
            </S.BadgeWrap>
            <PaperInfo
              paper={last_paper?.paper}
              paperValue={last_paper?.paper_value}
              position={last_paper?.position}
              profit={last_paper?.profit}
              type={last_paper?.type}
            />
            <S.Row>
              <Number
                description="Saldo diário"
                isMoney
                numberValue={daily_balance}
              />
              <Number
                description="Trades no dia"
                alignX="right"
                numberValue={todayMovimentations.length}
              />
            </S.Row>
          </S.Collumn>
          <S.Collumn>
            <S.Row>
              <div>
                <S.Title>Histórico do dia</S.Title>
                <S.Text>Última atualização • {lastUpdate}</S.Text>
              </div>
              <S.WrapIcons>
                <GiPauseButton />
                <HiDotsVertical />
              </S.WrapIcons>
            </S.Row>
            <Graphic movimentations={todayMovimentations} />
          </S.Collumn>
        </S.Container>
      </Paper>
    </S.Card>
  );
};

export default CardBot;
