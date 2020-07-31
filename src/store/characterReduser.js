import { FETCH_CHARACTER_INFO } from "./types";

const initialState = {
  data: {},
};

export const characterReduser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_INFO:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
