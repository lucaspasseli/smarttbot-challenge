import Icon from "../Icon";
import Paper from "../Paper";
import LogoSmarttBot from "../../assets/logoSmarttBot.png";
import TipoSmarttBot from "../../assets/tipoSmarttBot.png";
import BarGraph from "../../assets/barGraph.svg";
import * as S from "./style";

const SideBar = () => (
  <S.SideBar>
    <Paper gridArea="SideBar" position="fixed" isToggle>
      <S.Wrap>
        <S.ToggleItem>
          <Icon
            icon={LogoSmarttBot}
            alt="SmarttBot"
            width="2rem"
            separator="Bottom"
            isClickable
            classname={"onDesktop"}
            onDesktop
          />
          <div className="isToggle">
            <Icon
              icon={TipoSmarttBot}
              alt="SmarttBot"
              width="6.5rem"
              separator="Bottom"
              isClickable
              classname={"onDesktop"}
              onDesktop
            />
          </div>
        </S.ToggleItem>
        <S.ToggleItem menuItem>
          <Icon
            icon={BarGraph}
            alt="Análise geral"
            width="1.5rem"
            isClickable
          />
          <div className="isToggle">
            <span>Análise Geral</span>
          </div>
        </S.ToggleItem>
      </S.Wrap>
    </Paper>
  </S.SideBar>
);
export default SideBar;
