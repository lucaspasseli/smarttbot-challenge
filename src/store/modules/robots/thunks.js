import { api } from "../../../services/api";
import { getRobots } from "./actions";

export const getRobotsThunk = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.get("/robot/");
    dispatch(
      getRobots(data.filter(({ mode, running }) => mode === 1 && running === 1))
    );
  } catch (error) {
    console.log(error);
  }
};
