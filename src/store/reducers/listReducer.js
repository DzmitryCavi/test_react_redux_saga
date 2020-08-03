import { FETCH_LIST_ITEMS, NO_MORE_ITEMS } from "../types/types";
import { API_CHARACTERS_LIST_URL } from "../../common/config";

const initialState = {
  listItems: [],
  hasMore: true,
  info: { url: API_CHARACTERS_LIST_URL },
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_ITEMS:
      return {
        ...state,
        listItems: state.listItems.concat(
          Object.values(action.payload.data.results).map((v) => v)
        ),
        info: action.payload.data.info,
      };
    case NO_MORE_ITEMS:
      return { ...state, hasMore: false };
    default:
      return state;
  }
};
