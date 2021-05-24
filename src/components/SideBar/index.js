import Icon from "../Icon";
import Paper from "../Paper";
import LogoSmarttBot from "../../assets/logoSmarttBot.png";
import BarGraph from "../../assets/barGraph.svg";
import * as S from "./style";

const SideBar = () => (
  <S.SideBar>
    <Paper gridArea="SideBar" position="fixed" isToggle>
      <S.Wrap>
        <Icon
          icon={LogoSmarttBot}
          alt="SmarttBot"
          width="2rem"
          separator="Bottom"
          isClickable
          classname={"onDesktop"}
          onDesktop
        />
        <Icon icon={BarGraph} alt="Análise geral" width="1rem" isClickable />
      </S.Wrap>
    </Paper>
  </S.SideBar>
);
export default SideBar;
