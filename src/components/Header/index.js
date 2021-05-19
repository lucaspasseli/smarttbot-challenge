import Icon from "../Icon";
import Paper from "../Paper";
import BarGraph from "../../assets/barGraph.svg";
import { HeaderWrap } from "./style";
import BreadCrumb from "../BreadCrumb";

const Header = () => (
  <Paper gridArea="Header">
    <HeaderWrap>
      <Icon icon={BarGraph} alt="Análise geral" separator="Right" isClickable />
      <BreadCrumb path="Análise geral/Principal" />
    </HeaderWrap>
  </Paper>
);

export default Header;
