import Icon from "../Icon";
import Paper from "../Paper";
import LogoSmarttBot from "../../assets/logoSmarttBot.png";
import BarGraph from "../../assets/barGraph.svg";
import { SideBarWrap } from "./style";

const SideBar = () => (
  <Paper gridArea="SideBar">
    <SideBarWrap>
      <Icon
        icon={LogoSmarttBot}
        alt="SmarttBot"
        separator="Bottom"
        isClickable
      />
      <Icon icon={BarGraph} alt="Análise geral" isClickable />
    </SideBarWrap>
  </Paper>
);
export default SideBar;
