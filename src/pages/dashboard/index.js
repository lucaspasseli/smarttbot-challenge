import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Operations from "../../components/Operations";
import { Container } from "./style";

const Dashboard = () => (
  <Container>
    <SideBar />
    <Header />
    <Operations />
  </Container>
);

export default Dashboard;
