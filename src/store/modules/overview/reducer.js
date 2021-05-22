import { GET_OVERVIEW } from "./actions.Types";

const overviewReducer = (state = {}, actions) => {
  const { type, overview } = actions;
  switch (type) {
    case GET_OVERVIEW:
      return overview;
    default:
      return state;
  }
};

export default overviewReducer;
