import { api } from "../../../services/api";
import { getRobots } from "./actions";

export const getRobotsThunk = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.get("/robot/");
    dispatch(
      getRobots(data.filter(({ running, mode }) => running === 1 && mode === 1))
    );
  } catch (error) {
    console.log(error);
  }
};
