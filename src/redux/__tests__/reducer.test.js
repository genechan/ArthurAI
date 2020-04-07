import reducer from "../reducer";
import { HELLO_WORLD } from "../actions";
describe("Testing Redux Reducer", () => {
  it("Gives an empty state when I give it a unknown type", () => {
    expect(reducer({}, { type: "foobar", payload: "" })).toEqual({});
  });
  it("Gives hello world", () => {
    const helloWorld = "hello world";
    const store = reducer(
      {},
      {
        type: HELLO_WORLD,
        payload: helloWorld,
      }
    );
    expect(store.helloWorld).toBe(helloWorld);
  });
});
