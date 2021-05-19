import Icon from "../Icon";
import Paper from "../Paper";
import BarGraph from "../../assets/barGraph.svg";
import { HeaderWrap } from "./style";
import BreadCrumb from "../BreadCrumb";
import SwitchButton from "../Buttons/SwitchButton";

const Header = () => (
  <Paper gridArea="Header">
    <HeaderWrap>
      <Icon icon={BarGraph} alt="Análise geral" separator="Right" isClickable />

      <BreadCrumb path="Análise geral/Principal" />
      <SwitchButton />
    </HeaderWrap>
  </Paper>
);

export default Header;
