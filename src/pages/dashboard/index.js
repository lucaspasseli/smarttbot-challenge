import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Operations from "../../components/Operations";
import { Container } from "./style";
import AddBot from "../../components/AddBot";
import CardContainer from "../../components/Cards/CardContainer";

const Dashboard = () => (
  <Container>
    <SideBar />
    <Header />
    <Operations />
    <AddBot />
    <CardContainer />
  </Container>
);

export default Dashboard;
