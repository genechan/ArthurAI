import reducer, { defaultState } from "../reducer";
import Actions from "../actions";
import Data from "../../data/sample";

describe("Search for descendants", () => {
  it("Records user input", () => {
    const pattern = "foo";
    expect(
      reducer(
        { ...defaultState },
        {
          type: Actions.DESCENDANT_INPUT,
          payload: pattern,
        }
      )
    ).toStrictEqual({
      ...defaultState,
      descendantNameSearch: pattern,
    });
  });
  it("Finds the descendants with user input", () => {
    const pattern = "Bob";
    const descendants = [
      {
        name: "child1",
        father: pattern,
        gender: "male",
      },
      {
        name: "child2",
        father: pattern,
        gender: "female",
      },
      {
        name: "grand Child1",
        father: "child1",
        gender: "male",
      },
      {
        name: "grand Child2",
        mother: "child2",
        gender: "male",
      },
      {
        name: "great grand Child1",
        father: "grand Child1",
        gender: "male",
      },
    ];
    const data = [
      {
        name: pattern,
        gender: "male",
      },
      ...descendants,
      {
        name: "wrong Child",
        father: " not the father",
      },
      {
        name: "wrong Child2",
        mother: pattern,
      },
    ];
    const store = reducer(
      { data },
      {
        type: Actions.DESCENDANT_INPUT,
        payload: pattern,
      }
    );

    expect(store.descendants.length).toBe(descendants.length);
  });
  it("Search Descendants with provided data", () => {
    const store = reducer(
      { data: Data },
      {
        type: Actions.DESCENDANT_INPUT,
        payload: "Julissa",
      }
    );
    expect(store.descendants.length).toBe(3);
  });
});
