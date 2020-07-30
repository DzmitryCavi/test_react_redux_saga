import { REQUEST_LIST_ITEMS, NO_MORE_ITEMS } from "./types";

export function fetchListItems(url) {
  return {
    type: REQUEST_LIST_ITEMS,
    payload: url,
  };
}

export function noMoreItems() {
  return {
    type: NO_MORE_ITEMS,
  };
}
