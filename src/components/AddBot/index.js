import Icon from "../Icon";
import Paper from "../Paper";
import * as S from "./style";
import LogoSmarttBot from "../../assets/logoSmarttBot.png";
import AddBotButton from "../Buttons/AddBotButton";

const AddBot = () => (
  <Paper gridArea="AddBot">
    <S.Container>
      <S.Wrap>
        <AddBotButton />
        <S.TextWrap>
          <S.Title>Adicionar novo Robô</S.Title>
          <S.Text>
            Você possui <S.TextHighlight isBold>02 Robôs</S.TextHighlight>{" "}
            disponíveis
          </S.Text>
        </S.TextWrap>
        <S.Text isBold>Plano Pro •&nbsp;</S.Text>
        <S.TextHighlight>Fazer Upgrade de plano</S.TextHighlight>
      </S.Wrap>
    </S.Container>
  </Paper>
);

export default AddBot;
