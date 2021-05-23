import { GET_ROBOTS } from "./actions.Types";

export const getRobots = (robots) => {
  //   console.log(robots);

  return { type: GET_ROBOTS, robots };
};
