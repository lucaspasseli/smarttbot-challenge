import Icon from "../Icon";
import Paper from "../Paper";
import BarGraph from "../../assets/barGraph.svg";
import { HeaderWrap } from "./style";

const Header = () => (
  <Paper gridArea="Header">
    <HeaderWrap>
      <Icon icon={BarGraph} alt="Análise geral" separator="Right" isClickable />
    </HeaderWrap>
  </Paper>
);

export default Header;
