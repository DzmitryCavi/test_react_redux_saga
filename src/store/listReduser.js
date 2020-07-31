import { FETCH_LIST_ITEMS, NO_MORE_ITEMS } from "./types";
import { API_CHARACTERS_LIST_URL } from "../common/config";

const initialState = {
  listItems: [],
  url: API_CHARACTERS_LIST_URL,
  hasMore: true,
  maxListCount: 0,
};

export const listReduser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_ITEMS:
      return {
        ...state,
        listItems: state.listItems.concat(
          Object.values(action.payload.data.results).map((v) => v)
        ),
        url: action.payload.data.info.next,
        maxListCount: action.payload.data.info.count,
      };
    case NO_MORE_ITEMS:
      return { ...state, hasMore: false };
    default:
      return state;
  }
};
