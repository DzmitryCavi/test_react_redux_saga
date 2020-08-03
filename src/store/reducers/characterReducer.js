import { FETCH_CHARACTER_INFO } from "../types/types";

const initialState = {
  fetchedData: {},
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_INFO:
      return {
        ...state,
        fetchedData: action.payload,
      };
    default:
      return state;
  }
};
