import { FETCH_LIST_ITEMS, NO_MORE_ITEMS } from "./types";

const initialState = {
  listItems: [],
  url: "https://rickandmortyapi.com/api/character/?page=1",
  hasMore: true,
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
      };
    case NO_MORE_ITEMS:
      return { ...state, hasMore: false };
    default:
      return state;
  }
};
