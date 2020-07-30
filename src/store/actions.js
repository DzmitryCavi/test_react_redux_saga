import { REQUEST_POSTS, NO_MORE_POSTS } from "./types";

export function fetchPosts(url) {
  return {
    type: REQUEST_POSTS,
    payload: url,
  };
}

export function noMorePosts() {
  return {
    type: NO_MORE_POSTS,
  };
}
