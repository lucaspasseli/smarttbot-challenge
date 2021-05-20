import { GET_PAPERS } from "./actions.Types";

const defaultState = {
  allPapers: [],
  totalOfPapers: undefined,
  resumeOfPapers: undefined,
};

const papersReducer = (state = defaultState, actions) => {
  const { type, papers } = actions;
  switch (type) {
    case GET_PAPERS:
      return {
        allPapers: papers.allPapers,
        totalOfPapers: papers.totalOfPapers,
        resumeOfPapers: papers.resumeOfPapers,
      };
    default:
      return state;
  }
};

export default papersReducer;
