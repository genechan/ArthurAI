import reducer, { defaultState } from "../reducer";
import Actions from "../actions";
import Data from "../../data/sample";

describe("Search for siblings for given input", () => {
  it("Records user mother input", () => {
    const userInput = "MOM";
    expect(
      reducer(
        { ...defaultState },
        {
          type: Actions.MOTHER_INPUT,
          payload: userInput,
        }
      )
    ).toStrictEqual({
      ...defaultState,
      mother: userInput,
    });
  });
  it("Records user father input", () => {
    const userInput = "DAD";
    expect(
      reducer(
        { ...defaultState },
        {
          type: Actions.FATHER_INPUT,
          payload: userInput,
        }
      )
    ).toStrictEqual({
      ...defaultState,
      father: userInput,
    });
  });
  it("Finds everyone with the same mother", () => {
    const mother = "Jane";
    const siblings = [
      {
        mother,
        name: "karen",
      },
      {
        mother,
        name: "harry",
      },
    ];
    const data = [...siblings, { mother: "foo", name: "bar" }];
    expect(
      reducer(
        {
          data,
        },
        {
          type: Actions.MOTHER_INPUT,
          payload: mother,
        }
      )
    ).toStrictEqual({
      data,
      mother,
      siblings,
    });
  });
  it("Finds everyone with the same father", () => {
    const father = "Bob";
    const siblings = [
      {
        father,
        name: "karen",
      },
      {
        father,
        name: "harry",
      },
    ];
    const data = [...siblings, { father: "foo", name: "bar" }];
    expect(
      reducer(
        {
          data,
        },
        {
          type: Actions.FATHER_INPUT,
          payload: father,
        }
      )
    ).toStrictEqual({
      data,
      father,
      siblings,
    });
  });
  it("Finds everyone with the same mother and father", () => {
    const mother = "Jane";
    const father = "Bob";
    const siblings = [
      {
        father,
        mother,
        name: "karen",
      },
      {
        father,
        mother,
        name: "harry",
      },
    ];
    const motherMatchOnly = {
      mother,
      father: "foo",
      name: "mother match",
    };
    const fatherMatchOnly = {
      mother: "foo",
      father,
      name: "father match",
    };
    const data = [
      ...siblings,
      { mother: "foo", father: "foo", name: "bar" },
      motherMatchOnly,
      fatherMatchOnly,
    ];
    expect(
      reducer(
        { data },
        {
          type: Actions.BOTH_PARENTS,
          payload: {
            mother,
            father,
          },
        }
      )
    ).toStrictEqual({
      data,
      mother,
      father,
      siblings: [...siblings],
    });
  });
  it("Finds siblings with the provided data", () => {
    const mother = "Julissa";
    expect(
      reducer(
        { data: Data },
        {
          type: Actions.MOTHER_INPUT,
          payload: mother,
        }
      )
    ).toStrictEqual({
      data: Data,
      mother,
      siblings: [
        {
          name: "Selig",
          mother: "Julissa",
          father: "Aditya",
          gender: "male",
        },
        {
          name: "Kimberli",
          mother: "Julissa",
          father: "Aditya",
          gender: "female",
        },
        {
          name: "Abigael",
          mother: "Julissa",
          father: "Aditya",
          gender: "female",
        },
      ],
    });
  });
  it("Records name of person to search for siblings", () => {
    const pattern = "Bob";
    expect(
      reducer(
        { ...defaultState },
        {
          type: Actions.SIBLING_NAME_SEARCH,
          payload: pattern,
        }
      )
    ).toStrictEqual({
      ...defaultState,
      siblingNameSearch: pattern,
    });
  });
  it("Records name of person to search for siblings", () => {
    const pattern = "Bob";
    const mother = "sameMother";
    const father = "sameFather";
    const siblings = [
      {
        name: "sib1",
        mother,
        father,
      },
      {
        name: "sib2",
        mother,
        father,
      },
    ];
    const data = [
      {
        name: pattern,
        mother,
        father,
      },
      ...siblings,
      {
        name: "NOT SIBLING",
        mother: "fooBAR",
        father: "FOObar",
      },
    ];
    expect(
      reducer(
        { data },
        {
          type: Actions.SIBLING_NAME_SEARCH,
          payload: pattern,
        }
      )
    ).toStrictEqual({
      data,
      siblingNameSearch: pattern,
      siblings,
    });
  });
  it("Finds siblings using the provided data", () => {
    const pattern = "Abigael";
    const siblings = [
      {
        name: "Selig",
        mother: "Julissa",
        father: "Aditya",
        gender: "male",
      },
      {
        name: "Kimberli",
        mother: "Julissa",
        father: "Aditya",
        gender: "female",
      },
    ];
    const store = reducer(
      { data: Data },
      {
        type: Actions.SIBLING_NAME_SEARCH,
        payload: pattern,
      }
    );
    expect(store.siblings).toStrictEqual(siblings);
  });
});
