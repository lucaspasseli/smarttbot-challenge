import { GET_ROBOTS } from "./actions.Types";

const robotsReducer = (state = [], actions) => {
  const { type, robots } = actions;
  console.log(robots, "ffffff");
  switch (type) {
    case GET_ROBOTS:
      return robots;
    default:
      return state;
  }
};

export default robotsReducer;
