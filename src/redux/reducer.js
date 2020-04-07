import Actions from "./actions";

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Actions.HELLO_WORLD:
      return {
        ...state,
        helloWorld: payload,
      };
    case Actions.MOTHER_INPUT: {
      const siblings = findSiblings("mother", payload, state.data);
      return {
        ...state,
        mother: payload.trim(),
        siblings,
      };
    }
    case Actions.FATHER_INPUT: {
      const siblings = findSiblings("father", payload, state.data);
      return {
        ...state,
        father: payload.trim(),
        siblings,
      };
    }
    case Actions.BOTH_PARENTS: {
      let siblings = findSiblings("mother", payload.mother, state.data);
      siblings = findSiblings("father", payload.father, siblings);
      return {
        ...state,
        mother: payload.mother,
        father: payload.father,
        siblings,
      };
    }
    case Actions.SIBLING_NAME_SEARCH: {
      const person = findPerson(payload, state.data) || {
        mother: "",
        father: "",
      };
      const regex = new RegExp(payload.trim().toLowerCase());
      const list = (state.data || []).filter(({ name }) => {
        return !regex.test(name.toLowerCase());
      });
      let siblings = findSiblings("mother", person.mother, list);
      siblings = findSiblings("father", person.father, siblings);
      return { ...state, siblingNameSearch: payload, siblings };
    }
    case Actions.DESCENDANT_INPUT: {
      return { ...state, descendant: payload };
    }
    default:
      return { ...state };
  }
};
export const findSiblings = (parentType, pattern = "", list = []) => {
  if (pattern.trim() === "" || !parentType) {
    return [];
  }
  const regex = new RegExp(pattern.toLowerCase().trim());
  return list.filter((personObj) => {
    return regex.test(personObj[parentType].toLowerCase());
  });
};
export const findPerson = (pattern = "", list = []) => {
  const regex = new RegExp(pattern.toLowerCase().trim());
  return list.find(({ name }) => {
    if (regex.test(name.toLowerCase())) {
      return true;
    }
    return false;
  });
};
export const defaultState = {
  mother: undefined,
  father: undefined,
  data: [],
  siblings: [],
  siblingNameSearch: undefined,
};
export default reducer;
