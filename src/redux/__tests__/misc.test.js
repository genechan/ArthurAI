import reducer, { defaultState } from "../reducer";
import Actions from "../actions";
import Data from "../../data/sample";

describe("Test misc features", () => {
  it("Loads the data", () => {
    expect(
      reducer(
        {},
        {
          type: Actions.LOAD_DATA,
        }
      )
    ).toStrictEqual({ data: Data });
  });
  it("Loads the default on unknown Actions", () => {
    expect(reducer({}, { type: "foobar" })).toStrictEqual({});
  });
});
