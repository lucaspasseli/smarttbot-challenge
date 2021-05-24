import { getOverview } from "../modules/overview/actions";
import { GET_OVERVIEW } from "../modules/overview/actions.Types";
import { getRobots } from "../modules/robots/actions";
import { GET_ROBOTS } from "../modules/robots/actions.Types";

describe("getOverview", () => {
  it("should create an action to get a Overview", () => {
    const overview = {
      moviment_summary: 0,
      open_positions: 1000,
      papers: [{ name: "WING20", trasactions: 331 }],
      transactions: 1000,
    };

    const expectedAction = {
      type: GET_OVERVIEW,
      overview,
    };
    expect(getOverview(overview)).toEqual(expectedAction);
  });
});

describe("getRobots", () => {
  it("should create an action to get Robots", () => {
    const robots = [
      {
        created_at: "2020-08-27 04:51:10",
        daily_balance: -9.43,
        id: 1648754,
        initial_capital: 8233.45,
        mode: 1,
        movimentations: [{ date: "2021-05-22 22:13:49", value: 8 }],
        number_trades: 546,
        running: 1,
        simulation: 1,
        stock_codes: "WIN%",
        strategy: "RenkoBot",
        title: "Tellus Foundation",
        type: "Price action",
        updated_at: "2020-07-10 15:31:44",
      },
    ];

    const expectedAction = {
      type: GET_ROBOTS,
      robots,
    };
    expect(getRobots(robots)).toEqual(expectedAction);
  });
});
