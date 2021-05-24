import Number from "../Number";
import Paper from "../Paper";
import Papers from "../Papers";
import * as S from "./style";

const Operations = ({ overview }) => {
  const { moviment_summary, transactions, papers = [] } = overview;

  return (
    <Paper gridArea="Operations">
      <S.Container>
        <S.Title>Resumo geral &nbsp;operações</S.Title>
        <S.Wrap>
          <Number
            description="Resumo de movimentação"
            isMoney
            numberValue={moviment_summary}
          />
          <Number
            description="Total de transações realizada"
            alignX="right"
            numberValue={transactions}
          />
        </S.Wrap>
        <S.Text>Papéis negociados</S.Text>
        <S.PapersWrap>
          {papers.map(({ name, trasactions }, key) => (
            <Papers name={name} trasactions={trasactions} key={key} />
          ))}
        </S.PapersWrap>
      </S.Container>
    </Paper>
  );
};

export default Operations;
