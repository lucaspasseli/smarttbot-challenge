import Icon from "../Icon";
import Paper from "../Paper";
import BarGraph from "../../assets/barGraph.svg";
import * as S from "./style";
import BreadCrumb from "../BreadCrumb";
import SwitchButton from "../Buttons/SwitchButton";

const Header = () => (
  <Paper gridArea="Header">
    <S.Wrap>
      <Icon
        icon={BarGraph}
        alt="Análise geral"
        width="1rem"
        separator="Right"
        isClickable
      />

      <BreadCrumb path="Análise geral/Principal" />
      <SwitchButton />
    </S.Wrap>
  </Paper>
);

export default Header;
