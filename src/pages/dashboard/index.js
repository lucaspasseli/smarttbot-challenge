import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Operations from "../../components/Operations";
import * as S from "./style";
import AddBot from "../../components/AddBot";
import CardContainer from "../../components/Cards/CardContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOverviewThunk } from "../../store/modules/overview/thunks";
import { getRobotsThunk } from "../../store/modules/robots/thunks";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOverviewThunk());
    dispatch(getRobotsThunk());
  }, [dispatch]);

  return (
    <S.Container>
      <SideBar />
      <Header />
      <Operations overview={useSelector(({ overview }) => overview)} />
      <AddBot />
      <CardContainer robots={useSelector(({ robots }) => robots)} />
    </S.Container>
  );
};

export default Dashboard;
