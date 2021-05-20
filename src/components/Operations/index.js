import Number from "../Number";
import Paper from "../Paper";
import * as S from "./style";

const Operations = ({ papers }) => {
  const { allPapers, totalOfPapers, resumeOfPapers } = papers;
  console.log(totalOfPapers);

  return (
    <Paper gridArea="Operations">
      <S.Container>
        <S.Title>Resumo geral &nbsp;operações</S.Title>
        <S.Wrap>
          <Number
            description="Resumo de movimentação"
            isMoney
            numberValue={resumeOfPapers}
          />
          <Number
            description="Total de transações realizada"
            alignX="right"
            numberValue={totalOfPapers}
          />
        </S.Wrap>
      </S.Container>
    </Paper>
  );
};

export default Operations;
