import * as S from "./style";
import { useHistory } from "react-router-dom";

const AddBotButton = () => {
  const history = useHistory();
  return <S.Container onClick={() => history.push("/register")}></S.Container>;
};

export default AddBotButton;
