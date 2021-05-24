import { api } from "../../../services/api";
import { getOverview } from "./actions";

export const getOverviewThunk = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.get("/robot/overview/");
    dispatch(getOverview(data));
  } catch (error) {
    console.log(error);
  }
};
