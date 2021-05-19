import { api } from "../../../services/api";
import { getPapers } from "./actions";
import { getResumeOF } from "../../../utils/getResumeOf";

export const getPapersThunk = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.get("/robot/paper/");
    const totalOfPapers = data.length;
    const resumeOfPapers = getResumeOF(data);
    dispatch(
      getPapers({
        allPapers: data,
        totalOfPapers: totalOfPapers,
        resumeOfPapers: resumeOfPapers,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
