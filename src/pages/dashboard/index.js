import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Operations from "../../components/Operations";
import { Container } from "./style";
import AddBot from "../../components/AddBot";

const Dashboard = () => (
  <Container>
    <SideBar />
    <Header />
    <Operations />
    <AddBot />
  </Container>
);

export default Dashboard;
