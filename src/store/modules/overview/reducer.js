import { GET_OVERVIEW } from "./actions.Types";

const overviewReducer = (state = {}, actions) => {
  const { type, papers } = actions;
  switch (type) {
    case GET_OVERVIEW:
      return papers;
    default:
      return state;
  }
};

export default overviewReducer;
