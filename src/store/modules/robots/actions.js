import { GET_ROBOTS } from "./actions.Types";

export const getRobots = (robots) => ({
  type: GET_ROBOTS,
  robots,
});
