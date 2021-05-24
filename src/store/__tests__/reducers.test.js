import overviewReducer from "../modules/overview/reducer";
import { GET_OVERVIEW } from "../modules/overview/actions.Types";

import robotsReducer from "../modules/robots/reducer";
import { GET_ROBOTS } from "../modules/robots/actions.Types";

describe("overviewReducer", () => {
  const overview = {
    moviment_summary: 0,
    open_positions: 1000,
    papers: [{ name: "WING20", trasactions: 331 }],
    transactions: 1000,
  };

  it("should return the initial state", () => {
    expect(overviewReducer(undefined, {})).toEqual({});
  });

  it("should handle getOverview", () => {
    expect(
      overviewReducer(
        {},
        {
          type: GET_OVERVIEW,
          overview: overview,
        }
      )
    ).toEqual(overview);

    expect(
      overviewReducer(overview, {
        type: GET_OVERVIEW,
        overview: overview,
      })
    ).toEqual(overview);
  });
});

describe("robotsReduce", () => {
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

  it("should return the initial state", () => {
    expect(robotsReducer(undefined, [])).toEqual([]);
  });

  it("should handle getOverview", () => {
    expect(
      robotsReducer([], {
        type: GET_ROBOTS,
        robots: robots,
      })
    ).toEqual(robots);

    expect(
      robotsReducer(robots, {
        type: GET_ROBOTS,
        robots: robots,
      })
    ).toEqual(robots);
  });
});
