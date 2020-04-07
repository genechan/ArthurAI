import { HELLO_WORLD } from "./actions";

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case HELLO_WORLD:
      return {
        ...state,
        helloWorld: payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
