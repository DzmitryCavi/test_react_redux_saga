import { FETCH_POSTS, NO_MORE_POSTS } from "./types";

const initialState = {
  fetchedPosts: [],
  url: "https://rickandmortyapi.com/api/character/?page=1",
  hasMore: true,
};

export const postReduser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        fetchedPosts: state.fetchedPosts.concat(
          Object.values(action.payload.data.results).map((v) => v)
        ),
        url: action.payload.data.info.next,
      };
    case NO_MORE_POSTS:
      return { ...state, hasMore: false };
    default:
      return state;
  }
};
