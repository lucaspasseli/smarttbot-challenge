import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Operations from "../../components/Operations";
import * as S from "./style";
import AddBot from "../../components/AddBot";
import CardContainer from "../../components/Cards/CardContainer";

const Dashboard = () => (
  <S.Container>
    <SideBar />
    <Header />
    <Operations />
    <AddBot />
    <CardContainer />
  </S.Container>
);

export default Dashboard;
