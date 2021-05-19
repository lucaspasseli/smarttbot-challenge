import * as S from "./style";
import { useState } from "react";

const SwitchButton = () => {
  const [isRealMode, setIsRealMode] = useState(true);

  return (
    <S.Container>
      <S.Text isBold={!isRealMode}>Modo Simulado</S.Text>
      <S.Toggle>
        <S.Input
          id="checkbox"
          type="checkbox"
          checked={isRealMode}
          onChange={() => setIsRealMode(!isRealMode)}
        />
        <S.Slider htmlFor="checkbox" />
      </S.Toggle>
      <S.Text isBold={isRealMode}>Modo Real</S.Text>
    </S.Container>
  );
};

export default SwitchButton;
