import Toggle from "./style";
import { useState } from "react";

const SwitchButton = () => {
  const [isRealMode, setIsRealMode] = useState(true);

  return (
    <Toggle.Container>
      <Toggle.Text isBold={!isRealMode}>Modo Simulado</Toggle.Text>
      <Toggle>
        <Toggle.Slider
          id="checkbox"
          type="checkbox"
          checked={isRealMode}
          onChange={() => setIsRealMode(!isRealMode)}
        />
        <Toggle.Label htmlFor="checkbox" />
      </Toggle>
      <Toggle.Text isBold={isRealMode}>Modo Real</Toggle.Text>
    </Toggle.Container>
  );
};

export default SwitchButton;
