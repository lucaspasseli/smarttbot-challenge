import CardBot from "../CardBot";
import * as S from "./style";

const CardContainer = ({ robots = [] }) => {
  return (
    <S.Container>
      {robots.map(
        (
          {
            title,
            id,
            running,
            stock_codes,
            strategy,
            daily_balance,
            type,
            movimentations,
            last_paper,
          },
          key
        ) => (
          <CardBot
            number={key + 1 - 35}
            title={title}
            id={id}
            running={running}
            stock_codes={stock_codes}
            strategy={strategy}
            daily_balance={daily_balance}
            type={type}
            movimentations={movimentations}
            last_paper={last_paper}
            key={key}
          />
        )
      )}
    </S.Container>
  );
};

export default CardContainer;
